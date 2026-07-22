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
import { QuestionModel } from '../quiz-model';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [QuestionCardComponent, ResultPanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  quiz = inject(QuizService);

  ngOnInit(): void {
    this.quiz.loadQuestions();
  }

  onAnswer(answer: string): void {
    this.quiz.onAnswer(answer);
  }

  restart(): void {
    this.quiz.restart();
  }
}
