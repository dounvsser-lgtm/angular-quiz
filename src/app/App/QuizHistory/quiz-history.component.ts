import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  OnInit,
  output,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import type { QuizAttemp } from '../Models/quiz-attempt.model';
import { QuizHistoryService } from '../../services/quiz-history.service';
import { QuizSearchService } from '../../services/quiz-search.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-quiz-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz-history.component.html',
  styleUrl: './quiz-history.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizHistoryComponent implements OnInit {
  private readonly searchService = inject(QuizSearchService);
  private readonly quizHistoryService = inject(QuizHistoryService);

  attempts = signal<QuizAttemp[]>([]);
  backToMenu = output<void>();

  constructor() {
    this.searchService.results$
      .pipe(takeUntilDestroyed())
      .subscribe((list) => this.attempts.set(list));
  }

  ngOnInit(): void {
    this.searchService.setQuery('');
  }

  onSearch(value: string): void {
    this.searchService.setQuery(value);
  }
}
