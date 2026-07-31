import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { debounceTime, filter, switchMap, tap, of } from 'rxjs';
import { QuizHistoryService } from './quiz-history.service';
import { UserService } from './user.service';
import type { QuizAttemp } from '../App/Models/quiz-attempt.model';
import { User } from '../App/Models/users-model';

@Injectable({ providedIn: 'root' })
export class QuizSearchService {
  private readonly historyService = inject(QuizHistoryService);
  private readonly userService = inject(UserService);

  private readonly querySubject = new BehaviorSubject<string>('');

  setQuery(query: string): void {
    this.querySubject.next(query);
  }

  readonly results$: Observable<QuizAttemp[]> = this.querySubject.pipe(
    debounceTime(300),
    switchMap((q) =>
      this.userService.currentUser$.pipe(
        filter((user): user is User => user !== null),
        switchMap((user) =>
          q.trim().length === 0
            ? this.historyService.getVisibleHistory$()
            : this.historyService.searchHistory$(q, user),
        ),
      ),
    ),
  );
}
