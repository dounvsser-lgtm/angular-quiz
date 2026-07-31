import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { USERS_MOCK } from '../mocks/user.mock';
import { QuizHistoryComponent } from '../QuizHistory/quiz-history.component';
import { UserService } from '../../services/user.service';
import { Subject, switchMap, tap } from 'rxjs';
import { QuizAttemp } from '../Models/quiz-attempt.model';
import { QuizHistoryService } from '../../services/quiz-history.service';

@Component({
  selector: 'app-user-switch',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './user-switch.component.html',
  styleUrl: './user-switch.component.scss',
})
export class UserSwitchComponent {
  private readonly userService = inject(UserService);
  private readonly historyService = inject(QuizHistoryService);

  readonly users = USERS_MOCK;

  readonly historyAfterSwitch = signal<QuizAttemp[]>([]);

  private readonly switchSubject = new Subject<string>();

  constructor() {
    this.switchSubject
      .pipe(
        tap((id) => this.userService.switchUser(id)),
        switchMap(() => this.historyService.getVisibleHistory$()),
        takeUntilDestroyed(),
      )
      .subscribe((list) => this.historyAfterSwitch.set(list));
  }

  onSwitch(userId: string): void {
    this.switchSubject.next(userId);
  }
}
