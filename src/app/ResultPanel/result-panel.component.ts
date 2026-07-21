import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-result-panel',
  templateUrl: `./result-panel.component.html`,
  styleUrl: `./result-panel.component.css`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultPanelComponent {
  total = input<number>();
  score = input.required<number>();
}
