import { Injectable, computed, inject, signal } from '@angular/core';
import { QUIZ_HISTORY_MOCK } from '../App/mocks/quiz-history.mock';
import type { QuizAttemp } from '../App/Models/quiz-attempt.model';
import { PermissionsService } from './permissions.service';
import { UserService } from './user.service';

@Injectable({ providedIn: 'root' })
export class QuizHistoryService {
  userService = inject(UserService);
  permissionService = inject(PermissionsService);

  allAttempts = signal<QuizAttemp[]>([...QUIZ_HISTORY_MOCK]);

  history = computed(() => {
    const user = this.userService.currentUser();
    const list = this.allAttempts();

    if (!user) {
      return;
    }

    if (this.permissionService.canViewAllHistory(user)) {
      return list;
    } else if (this.permissionService.canViewHistory(user)) {
      return list.filter((x) => x.userId === user.id);
    }
    return [];
  });

  loadHistory(): void {
    this.allAttempts.set([...QUIZ_HISTORY_MOCK]);
  }
  addAttempt(attempt: QuizAttemp): void {
    const newAttempt: QuizAttemp = attempt;
    this.allAttempts.update((list) => [newAttempt, ...list]);
  }
}
