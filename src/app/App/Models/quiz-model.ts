export interface QuestionModel {
  id: number;
  text: string;
  options: string[];
  correct: string;
}

export interface QuizModel {
  id: string;
  title: string;
  description: string;
  icon: string;
  questions: QuestionModel[];
}

export type AppScreen = 'menu' | 'quiz' | 'result';
