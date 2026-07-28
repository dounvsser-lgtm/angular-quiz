import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { QuizAttemp } from '../Models/quiz-attempt.model';

@Component({
  selector: 'app-quiz-history-component',
  standalone: true,
  templateUrl: './quiz-history.component.html',
  styleUrl: './quiz-history.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizHistoryComponent {
  attempts = input.required<QuizAttemp[]>();
}
