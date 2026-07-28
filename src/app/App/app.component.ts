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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [QuestionCardComponent, ResultPanelComponent, MainMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  quiz = inject(QuizService);

  onSelectQuiz(quizId: string): void {
    this.quiz.selectQuiz(quizId);
  }

  onAnswer(answer: string): void {
    this.quiz.onAnswer(answer);
  }

  restart(): void {
    this.quiz.restart();
  }
}
