import type { QuizAttemp } from '../Models/quiz-attempt.model';

export const QUIZ_HISTORY_MOCK: QuizAttemp[] = [
  {
    id: 'his1',
    userId: '1',
    userName: 'Владимир',
    quizId: 'angular-basics',
    quizTitle: 'Основы Angular',
    score: 5,
    total: 5,
  },
  {
    id: 'his2',
    userId: '1',
    userName: 'Владимир',
    quizId: 'js-fundamentals',
    quizTitle: 'JavaScript Основы',
    score: 4,
    total: 4,
  },
  {
    id: 'his3',
    userId: '2',
    userName: 'Николай',
    quizId: 'js-fundamentals',
    quizTitle: 'JavaScript Основы',
    score: 2,
    total: 4,
  },
  {
    id: 'his4',
    userId: '3',
    userName: 'Алексей',
    quizId: 'css-styling',
    quizTitle: 'CSS и Стилизация',
    score: 2,
    total: 3,
  },
];
