import { Injectable, computed, signal } from '@angular/core';
import { QUIZ_MOCK_QUESTION } from '../App/mocks/quiz.mock';
import type { QuestionModel } from '../quiz-model';

@Injectable({ providedIn: 'root' })
export class QuizService {
  questions = signal<QuestionModel[]>([]);
  index = signal(0);
  score = signal(0);
  loading = signal(false);

  finished = computed(() => this.index() >= this.questions().length);
  currentQuestion = computed(() => this.questions()[this.index()]);
  total = computed(() => this.questions().length);

  loadQuestions(): void {
    this.loading.set(true);

    setTimeout(() => {
      this.questions.set(QUIZ_MOCK_QUESTION);
      this.index.set(0);
      this.score.set(0);
      this.loading.set(false);
    }, 300);
  }

  onAnswer(answer: string): void {
    if (answer == this.currentQuestion().correct) {
      this.score.update((value) => value + 1);
    }
    this.index.update((value) => value + 1);
  }

  restart(): void {
    this.score.set(0);
    this.index.set(0);
  }
}
