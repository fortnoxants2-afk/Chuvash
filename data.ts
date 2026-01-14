
import { Question } from './types';

// Категория: Знаменитости (уже заполнена)
const celebrityQuestions: Question[] = [
  {
    id: 1,
    text: "Кто изображен на этой фотографии?",
    options: { a: "А) Иванов К.В.", b: "Б) Айдак А.П.", c: "В) Никольский Н.В.", d: "Г) Яковлев И.Я." },
    correctAnswer: 'd',
    category: 'znamenitosti',
    imageUrl: "images/znamenitosti/01.jpg"
  },
  {
    id: 2,
    text: "Кто изображен на этой фотографии?",
    options: { a: "А) Айдак А.П.", b: "Б) Иванов К.В.", c: "В) Магницкий В.К.", d: "Г) Бичурин Н.Я." },
    correctAnswer: 'd',
    category: 'znamenitosti',
    imageUrl: "images/znamenitosti/02.jpg"
  },
  {
    id: 3,
    text: "Кто изображен на этой фотографии?",
    options: { a: "А) Кокель А.А.", b: "Б) Овчинников Н.В.", c: "В) Ухсай Я.Г.", d: "Г) Юрьев Э.М." },
    correctAnswer: 'a',
    category: 'znamenitosti',
    imageUrl: "images/znamenitosti/03.jpg"
  },
  {
    id: 4,
    text: "Кто изображен на этой фотографии?",
    options: { a: "А) Юрьев Э.М.", b: "Б) Ефремов П.Е.", c: "В) Ухсай Я.Г.", d: "Г) Кокель А.А." },
    correctAnswer: 'a',
    category: 'znamenitosti',
    imageUrl: "images/znamenitosti/04.jpg"
  },
  {
    id: 5,
    text: "Кто изображен на этой фотографии?",
    options: { a: "А) Айдак А.П.", b: "Б) Ефремов П.Е.", c: "В) Николаев А.Г.", d: "Г) Овчинников Н.В." },
    correctAnswer: 'a',
    category: 'znamenitosti',
    imageUrl: "images/znamenitosti/05.jpg"
  },
  {
    id: 6,
    text: "Кто изображен на этой фотографии?",
    options: { a: "А) Айги Г.Н.", b: "Б) Айдак А.П.", c: "В) Ашмарин Н.И.", d: "Г) Бичурин Н.Я." },
    correctAnswer: 'a',
    category: 'znamenitosti',
    imageUrl: "images/znamenitosti/06.jpg"
  },
  {
    id: 7,
    text: "Кто изображен на этой фотографии?",
    options: { a: "А) Ашмарин Н.И.", b: "Б) Айдак А.П.", c: "В) Ефремов П.Е.", d: "Г) Николаев А.Г." },
    correctAnswer: 'a',
    category: 'znamenitosti',
    imageUrl: "images/znamenitosti/07.jpg"
  },
  {
    id: 8,
    text: "Кто изображен на этой фотографии?",
    options: { a: "А) Айги Г.Н.", b: "Б) Айдак А.П.", c: "В) Ашмарин Н.И.", d: "Г) Николаев А.Г." },
    correctAnswer: 'd',
    category: 'znamenitosti',
    imageUrl: "images/znamenitosti/08.jpg"
  }
];

// Категория: Праздники и обряды
const prazdnikiQuestions: Question[] = [
  {
    id: 101,
    text: "Название праздника завершения весенних полевых работ?",
    options: { a: "А) Çимĕк", b: "Б) Акатуй", c: "В) Манкун", d: "Г) Сурхури" },
    correctAnswer: 'b',
    category: 'prazdniki',
    imageUrl: "images/prazdniki/01.jpg"
  },
  {
    id: 102,
    text: "Как называется чувашский праздник зимнего солнцестояния?",
    options: { a: "А) Сурхури", b: "Б) Çаварни", c: "В) Кĕр сари", d: "Г) Уяв" },
    correctAnswer: 'a',
    category: 'prazdniki',
    imageUrl: "images/prazdniki/02.jpg"
  }
];

// Категория: Скульптура и зодчество
const skulpturyQuestions: Question[] = [
  {
    id: 301,
    text: "Какой монумент является символом города Чебоксары?",
    options: { a: "А) Памятник Чапаеву", b: "Б) Мать-Покровительница", c: "В) Памятник Иванову", d: "Г) Монумент Воинской Славы" },
    correctAnswer: 'b',
    category: 'skulptury',
    imageUrl: "images/skulptury/01.jpg"
  },
  {
    id: 302,
    text: "Кто является автором монумента «Мать-Покровительница»?",
    options: { a: "А) В. Нагорнов", b: "Б) Ф. Мадуров", c: "В) А. Кокель", d: "Г) Н. Кондратьев" },
    correctAnswer: 'a',
    category: 'skulptury',
    imageUrl: "images/skulptury/01.jpg"
  }
];

// Категория: Язык
const yazikQuestions: Question[] = [
  {
    id: 601,
    text: "Как по-чувашски будет слово «Здравствуйте»?",
    options: { a: "А) Сывлăх сунатăп", b: "Б) Тавтапуç", c: "В) Ăнăçу", d: "Г) Ырă кун" },
    correctAnswer: 'a',
    category: 'yazik',
    imageUrl: "images/yazik/01.jpg"
  },
  {
    id: 602,
    text: "Что означает чувашское слово «Юлташ»?",
    options: { a: "А) Враг", b: "Б) Друг", c: "В) Брат", d: "Г) Сосед" },
    correctAnswer: 'b',
    category: 'yazik',
    imageUrl: "images/yazik/02.jpg"
  }
];

export const getQuestions = (): Question[] => {
  return [
    ...celebrityQuestions, 
    ...prazdnikiQuestions, 
    ...skulpturyQuestions, 
    ...yazikQuestions
  ];
};
