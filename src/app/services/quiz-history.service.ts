import { Injectable, computed, inject, signal } from '@angular/core';
import { QUIZ_HISTORY_MOCK } from '../App/mocks/quiz-history.mock';
import type { QuizAttemp } from '../App/Models/quiz-attempt.model';
import { PermissionsService } from './permissions.service';
import { UserService } from './user.service';
import { filter, Observable, tap, map, catchError, of } from 'rxjs';
import { User } from '../App/Models/users-model';

@Injectable({ providedIn: 'root' })
export class QuizHistoryService {
  userService = inject(UserService);
  permissionService = inject(PermissionsService);

  allAttempts: QuizAttemp[] = [...QUIZ_HISTORY_MOCK];

  getVisibleHistory$(): Observable<QuizAttemp[]> {
    return this.userService.currentUser$.pipe(
      filter((user): user is User => user != null),

      tap((user) => console.log('История загружается для', user.name)),

      map((user) => {
        if (this.permissionService.canViewAllHistory(user)) {
          return [...this.allAttempts];
        }
        return this.allAttempts.filter((x) => x.userId === user.id);
      }),

      catchError((err) => {
        console.error('Ошибка', err);
        return of([]);
      }),
    );
  }

  searchHistory$(query: string, user: User): Observable<QuizAttemp[]> {
    return of(undefined).pipe(
      tap(() => console.log('[История] поиск:', query)),
      map(() => {
        const base = this.permissionService.canViewAllHistory(user)
          ? this.allAttempts
          : this.allAttempts.filter((x) => x.userId === user.id);
        const q = query.trim().toLocaleLowerCase();
        return base.filter(
          (item) =>
            item.quizTitle.toLocaleLowerCase().includes(q) ||
            item.userName.toLowerCase().includes(q),
        );
      }),
      catchError(() => of([])),
    );
  }

  addAttempt(attempt: Omit<QuizAttemp, 'id'>): void {
    this.allAttempts = [
      { ...attempt, id: crypto.randomUUID() },
      ...this.allAttempts,
    ];
  }
}
