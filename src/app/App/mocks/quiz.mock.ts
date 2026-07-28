import type { QuestionModel, QuizModel } from '../../App/Models/quiz-model';

export const ANGULAR_BASICS_QUESTIONS: QuestionModel[] = [
  {
    id: 1,
    text: `Что такое компонент в Angular?`,
    options: [
      `Класс TypeScript с декоратором @Component`,
      `Простой HTML файл`,
      `CSS стиль`,
      `Сервис для работы с API`,
    ],
    correct: `Класс TypeScript с декоратором @Component`,
  },
  {
    id: 2,
    text: `Какой тип биндинга используется для односторонней передачи данных?`,
    options: [
      `Интерполяция {{ }} и [property]`,
      `(event)`,
      `[(ngModel)]`,
      `@Input() только`,
    ],
    correct: `Интерполяция {{ }} и [property]`,
  },
  {
    id: 3,
    text: `Для чего используется декоратор @Injectable?`,
    options: [
      `Для создания сервисов`,
      `Для создания компонентов`,
      `Для создания директив`,
      `Для создания пайпов`,
    ],
    correct: `Для создания сервисов`,
  },
];

// Мок 2: JavaScript Fundamentals
export const JS_FUNDAMENTALS_QUESTIONS: QuestionModel[] = [
  {
    id: 1,
    text: `Что выведет console.log(typeof null)?`,
    options: [`"null"`, `"undefined"`, `"object"`, `"number"`],
    correct: `"object"`,
  },
  {
    id: 2,
    text: `Какой метод массива не изменяет оригинальный массив?`,
    options: [`push()`, `map()`, `splice()`, `sort()`],
    correct: `map()`,
  },
  {
    id: 3,
    text: `Что такое замыкание (closure)?`,
    options: [
      `Функция, имеющая доступ к переменным внешней функции`,
      `Закрытие браузерного окна`,
      `Метод закрытия соединения с сервером`,
      `Блокировка кода от изменений`,
    ],
    correct: `Функция, имеющая доступ к переменным внешней функции`,
  },
  {
    id: 4,
    text: `Чему равно 0.1 + 0.2 === 0.3?`,
    options: [`true`, `false`, `undefined`, `NaN`],
    correct: `false`,
  },
];

// Мок 3: CSS & Styling
export const CSS_STYLING_QUESTIONS: QuestionModel[] = [
  {
    id: 1,
    text: `Какое свойство CSS используется для создания flex-контейнера?`,
    options: [
      `display: flex`,
      `position: flex`,
      `flex: container`,
      `layout: flex`,
    ],
    correct: `display: flex`,
  },
  {
    id: 2,
    text: `Что делает свойство z-index?`,
    options: [
      `Управляет порядком наложения элементов`,
      `Задает размер шрифта`,
      `Устанавливает прозрачность`,
      `Определяет отступы`,
    ],
    correct: `Управляет порядком наложения элементов`,
  },
  {
    id: 3,
    text: `Какая единица измерения относительна размера шрифта родительского элемента?`,
    options: [`px`, `em`, `rem`, `%`],
    correct: `em`,
  },
];

export const QUIZ_MOCKS: QuizModel[] = [
  {
    id: 'angular-basics',
    title: 'Основы Angular',
    description: 'Проверьте свои знания базовых концепций Angular',
    icon: '🅰️',
    questions: ANGULAR_BASICS_QUESTIONS,
  },
  {
    id: 'js-fundamentals',
    title: 'JavaScript Основы',
    description: 'Тест на знание фундаментальных концепций JavaScript',
    icon: '🟨',
    questions: JS_FUNDAMENTALS_QUESTIONS,
  },
  {
    id: 'css-styling',
    title: 'CSS и Стилизация',
    description: 'Вопросы о CSS, верстке и стилизации',
    icon: '🎨',
    questions: CSS_STYLING_QUESTIONS,
  },
];
