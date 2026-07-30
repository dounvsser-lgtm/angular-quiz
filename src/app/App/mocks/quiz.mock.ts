import type { QuestionModel } from '../../quiz-model';

export const QUIZ_MOCK_QUESTION: QuestionModel[] = [
  {
    id: 1,
    text: `Что делает (click) в Angular?`,
    options: [
      `Слушает событие клика`,
      `Меняет CSS стили`,
      `Создает новый компонент`,
      `Устанавливает пакеты`,
    ],
    correct: `Слушает событие клика`,
  },
  {
    id: 2,
    text: `Какой декоратор используется для создания компонента?`,
    options: [`@Injectable`, `@Component`, `@Directive`, `@Pipe`],
    correct: `@Component`,
  },
  {
    id: 3,
    text: `Как объявить сигнал (signal) со значением 0?`,
    options: [
      `count = new Signal(0)`,
      `count: signal = 0`,
      `count = signal(0)`,
      `count = createSignal(0)`,
    ],
    correct: `count = signal(0)`,
  },
  {
    id: 4,
    text: `Какая директива используется для условного отображения элементов?`,
    options: [`*ngFor`, `@if / @else`, `[hidden]`, `*ngSwitch`],
    correct: `@if / @else`,
  },
  {
    id: 5,
    text: `Для чего нужен блок @defer?`,
    options: [
      `Для отложенной загрузки компонентов`,
      `Для задержки выполнения функций`,
      `Для анимации переходов`,
      `Для обработки ошибок`,
    ],
    correct: `Для отложенной загрузки компонентов`,
  },
];
