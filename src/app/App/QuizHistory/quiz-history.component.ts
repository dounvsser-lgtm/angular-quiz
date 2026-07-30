import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import type { QuizAttemp } from '../Models/quiz-attempt.model';

@Component({
  selector: 'app-quiz-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz-history.component.html',
  styleUrl: './quiz-history.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizHistoryComponent {
  attempts = input.required<QuizAttemp[]>();
  backToMenu = output<void>();
}
