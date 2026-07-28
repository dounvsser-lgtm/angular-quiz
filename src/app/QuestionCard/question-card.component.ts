import { Component, input, output } from '@angular/core';
import { QuestionModel } from '../App/Models/quiz-model';

@Component({
  selector: 'app-question-card',
  templateUrl: `./question-card.component.html`,
  styleUrl: `./question-card.component.scss`,
})
export class QuestionCardComponent {
  readonly question = input.required<QuestionModel>();
  readonly total = input<number>();
  readonly answer = output<string>();
}
