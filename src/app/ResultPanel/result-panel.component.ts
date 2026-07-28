import { Component, input } from '@angular/core';

@Component({
  selector: 'app-result-panel',
  templateUrl: `./result-panel.component.html`,
  styleUrl: `./result-panel.component.scss`,
})
export class ResultPanelComponent {
  total = input<number>();
  score = input.required<number>();
}
