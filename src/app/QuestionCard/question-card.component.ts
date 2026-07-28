import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { QuestionModel } from '../quiz-model';

@Component({
  selector: 'app-question-card',
  templateUrl: `./question-card.component.html`,
  styleUrl: `./question-card.component.css`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionCardComponent {
  readonly currentIndexQuestion = input.required<number>();
  readonly question = input.required<QuestionModel>();
  readonly total = input<number>();
  readonly answer = output<string>();
}
