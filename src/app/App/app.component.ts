import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuestionCardComponent } from '../QuestionCard/question-card.component';
import { ResultPanelComponent } from '../ResultPanel/result-panel.component';
import { QuestionModel } from '../App/Models/quiz-model';
import { QuizService } from '../services/quiz.service';
import { MainMenuComponent } from './MainMenu/main-menu.component';
import { UserService } from '../services/user.service';
import { QuizHistoryService } from '../services/quiz-history.service';
import { PermissionsService } from '../services/permissions.service';
import { QuizHistoryComponent } from '../App/QuizHistory/quiz-history.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    QuestionCardComponent,
    ResultPanelComponent,
    MainMenuComponent,
    QuizHistoryComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  user = inject(UserService);
  permission = inject(PermissionsService);
  quizHistory = inject(QuizHistoryService);
  quiz = inject(QuizService);

  ngOnInit(): void {
    this.user.loadCurrentUser();
    this.quizHistory.loadHistory();
  }

  onSelectQuiz(quizId: string): void {
    const currentUser = this.user.currentUser();

    if (!currentUser || !this.permission.canPlay(currentUser)) {
      return;
    }

    this.quiz.selectQuiz(quizId);
  }

  onAnswer(answer: string): void {
    const currentUser = this.user.currentUser();

    if (!currentUser || !this.permission.canPlay(currentUser)) {
      return;
    }

    this.quiz.onAnswer(answer);
  }

  restart(): void {
    this.quiz.restart();
  }
}
