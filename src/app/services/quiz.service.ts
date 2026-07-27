import { Injectable, computed, signal } from '@angular/core';
import { QUIZ_MOCKS } from '../App/mocks/quiz.mock';
import type { AppScreen, QuestionModel, QuizModel } from '../quiz-model';

@Injectable({ providedIn: 'root' })
export class QuizService {
  mocks = signal<QuizModel[]>(QUIZ_MOCKS);

  screen = signal<AppScreen>('menu');
  activeQuiz = signal<QuizModel | null>(null);

  questions = signal<QuestionModel[]>([]);
  index = signal(0);
  score = signal(0);
  loading = signal(false);

  finished = computed(() => this.index() >= this.questions().length);
  currentQuestion = computed(() => this.questions()[this.index()]);
  total = computed(() => this.questions().length);

  selectQuiz(quizId: string): void {
    const quiz = this.mocks().find((q) => q.id == quizId);
    if (!quiz) {
      return;
    }

    this.activeQuiz.set(quiz);
    this.screen.set('quiz');
    this.index.set(0);
    this.score.set(0);

    setTimeout(() => {
      this.questions.set(quiz.questions);
      this.loading.set(false);
    }, 200);
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

  backToMenu(): void {
    this.activeQuiz.set(null);
    this.questions.set([]);
    this.score.set(0);
    this.index.set(0);
    this.screen.set('menu');
  }
}
