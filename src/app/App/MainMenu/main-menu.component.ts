import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import type { QuizModel } from '../../App/Models/quiz-model';

@Component({
  selector: `app-main-menu`,
  standalone: true,
  templateUrl: `./main-menu.component.html`,
  styleUrl: `./main-menu.component.scss`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainMenuComponent {
  quizzes = input.required<QuizModel[]>();
  quizSelected = output<string>();
}
