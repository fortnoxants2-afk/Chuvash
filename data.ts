import { Question } from './types';

// Категория: Знаменитости (фото в формате .jpg)
const celebrityQuestions: Question[] = [
  {
    id: 1,
    text: "Кто изображен на этой фотографии?",
    options: { a: "А) Иванов К.В.", b: "Б) Айдак А.П.", c: "В) Никольский Н.В.", d: "Г) Яковлев И.Я." },
    correctAnswer: 'd',
    category: 'znamenitosti',
    imageUrl: "Figma/kategoriya/znamenitosti/01.jpg"
  },
  {
    id: 2,
    text: "Кто изображен на этой фотографии?",
    options: { a: "А) Айдак А.П.", b: "Б) Иванов К.В.", c: "В) Магницкий В.К.", d: "Г) Бичурин Н.Я." },
    correctAnswer: 'd',
    category: 'znamenitosti',
    imageUrl: "Figma/kategoriya/znamenitosti/02.jpg"
  },
  {
    id: 3,
    text: "Кто изображен на этой фотографии?",
    options: { a: "А) Кокель А.А.", b: "Б) Овчинников Н.В.", c: "В) Ухсай Я.Г.", d: "Г) Юрьев Э.М." },
    correctAnswer: 'b',
    category: 'znamenitosti',
    imageUrl: "Figma/kategoriya/znamenitosti/03.jpg"
  },
  {
    id: 4,
    text: "Кто изображен на этой фотографии?",
    options: { a: "А) Юрьев Э.М.", b: "Б) Ефремов П.Е.", c: "В) Ухсай Я.Г.", d: "Г) Кокель А.А." },
    correctAnswer: 'a',
    category: 'znamenitosti',
    imageUrl: "Figma/kategoriya/znamenitosti/04.jpg"
  },
  {
    id: 5,
    text: "Кто изображен на этой фотографии?",
    options: { a: "А) Айдак А.П.", b: "Б) Ефремов П.Е.", c: "В) Николаев А.Г.", d: "Г) Овчинников Н.В." },
    correctAnswer: 'b',
    category: 'znamenitosti',
    imageUrl: "Figma/kategoriya/znamenitosti/05.jpg"
  },
  {
    id: 6,
    text: "Кто изображен на этой фотографии?",
    options: { a: "А) Айги Г.Н.", b: "Б) Айдак А.П.", c: "В) Ашмарин Н.И.", d: "Г) Бичурин Н.Я." },
    correctAnswer: 'a',
    category: 'znamenitosti',
    imageUrl: "Figma/kategoriya/znamenitosti/06.jpg"
  },
  {
    id: 7,
    text: "Кто изображен на этой фотографии?",
    options: { a: "А) Ашмарин Н.И.", b: "Б) Айдак А.П.", c: "В) Ефремов П.Е.", d: "Г) Николаев А.Г." },
    correctAnswer: 'b',
    category: 'znamenitosti',
    imageUrl: "Figma/kategoriya/znamenitosti/07.jpg"
  },
  {
    id: 8,
    text: "Кто изображен на этой фотографии?",
    options: { a: "А) Айги Г.Н.", b: "Б) Айдак А.П.", c: "В) Ашмарин Н.И.", d: "Г) Николаев А.Г." },
    correctAnswer: 'c',
    category: 'znamenitosti',
    imageUrl: "Figma/kategoriya/znamenitosti/08.jpg"
  },
  {
    id: 9,
    text: "Кто изображен на этой фотографии?",
    options: { a: "А) Айдак А.П.", b: "Б) Айги Г.Н.", c: "В) Иванов К.В.", d: "Г) Ухсай Я.Г." },
    correctAnswer: 'd',
    category: 'znamenitosti',
    imageUrl: "Figma/kategoriya/znamenitosti/09.jpg"
  },
  {
    id: 10,
    text: "Кто изображен на этой фотографии?",
    options: { a: "А) Ахматова А.А.", b: "Б) Павлова Н.В.", c: "В) Тани Юн", d: "Г) Терешкова В.В." },
    correctAnswer: 'c',
    category: 'znamenitosti',
    imageUrl: "Figma/kategoriya/znamenitosti/10.jpg"
  },
  {
    id: 11,
    text: "Кто изображен на этой фотографии?",
    options: { a: "А) Магницкий В.К.", b: "Б) Иванов К.В.", c: "В) Никольский Н.В.", d: "Г) Сеспель М." },
    correctAnswer: 'b',
    category: 'znamenitosti',
    imageUrl: "Figma/kategoriya/znamenitosti/11.jpg"
  },
  {
    id: 12,
    text: "Кто изображен на этой фотографии?",
    options: { a: "А) Кокель А.А.", b: "Б) Хузангай П.П.", c: "В) Ухсай Я.Г.", d: "Г) Юрьев Э.М." },
    correctAnswer: 'a',
    category: 'znamenitosti',
    imageUrl: "Figma/kategoriya/znamenitosti/12.jpg"
  },
  {
    id: 13,
    text: "Кто изображен на этой фотографии?",
    options: { a: "А) Кокель А.А.", b: "Б) Магницкий В.К.", c: "В) Николаев А.Г.", d: "Г) Ухсай Я.Г." },
    correctAnswer: 'b',
    category: 'znamenitosti',
    imageUrl: "Figma/kategoriya/znamenitosti/13.jpg"
  },
  {
    id: 14,
    text: "Кто изображен на этой фотографии?",
    options: { a: "А) Магницкий В.К.", b: "Б) Никольский Н.В.", c: "В) Николаев А.Г.", d: "Г) Овчинников Н.В." },
    correctAnswer: 'c',
    category: 'znamenitosti',
    imageUrl: "Figma/kategoriya/znamenitosti/14.jpg"
  },
  {
    id: 15,
    text: "Кто изображен на этой фотографии?",
    options: { a: "А) Бичурин Н.Я.", b: "Б) Овчинников Н.В.", c: "В) Хузангай П.П.", d: "Г) Юрьев Э.М." },
    correctAnswer: 'c',
    category: 'znamenitosti',
    imageUrl: "Figma/kategoriya/znamenitosti/15.jpg"
  },
  {
    id: 16,
    text: "Кто изображен на этой фотографии?",
    options: { a: "А) Нагорнов В.П.", b: "Б) Овчинников Н.В.", c: "В) Бритвин В.Г.", d: "Г) Викторов Ю.В." },
    correctAnswer: 'a',
    category: 'znamenitosti',
    imageUrl: "Figma/kategoriya/znamenitosti/16.jpg"
  },
  {
    id: 17,
    text: "Кто изображен на этой фотографии?",
    options: { a: "А) Овчинников Н.В.", b: "Б) Бритвин В.Г.", c: "В) Анохин А.П.", d: "Г) Викторов Ю.В." },
    correctAnswer: 'b',
    category: 'znamenitosti',
    imageUrl: "Figma/kategoriya/znamenitosti/17.jpg"
  },
  {
    id: 18,
    text: "Кто изображен на этой фотографии?",
    options: { a: "А) Ахматова А.А.", b: "Б) Павлова Н.В.", c: "В) Терешкова В.В.", d: "Г) Николаева Е.Н." },
    correctAnswer: 'd',
    category: 'znamenitosti',
    imageUrl: "Figma/kategoriya/znamenitosti/18.jpg"
  },
  {
    id: 19,
    text: "Кто изображен на этой фотографии?",
    options: { a: "А) Иванов К.В.", b: "Б) Николаев А.Г.", c: "В) Никольский Н.В.", d: "Г) Сеспель М." },
    correctAnswer: 'c',
    category: 'znamenitosti',
    imageUrl: "Figma/kategoriya/znamenitosti/19.jpg"
  },
  {
    id: 20,
    text: "Кто изображен на этой фотографии?",
    options: { a: "А) Ахматова А.А.", b: "Б) Николаева Е.Н.", c: "В) Павлова Н.В.", d: "Г) Юн Тани" },
    correctAnswer: 'c',
    category: 'znamenitosti',
    imageUrl: "Figma/kategoriya/znamenitosti/20.jpg"
  },
  {
    id: 21,
    text: "Кто изображен на этой фотографии?",
    options: { a: "А) Айдак А.П.", b: "Б) Иванов К.В.", c: "В) Николаев А.Г.", d: "Г) Сеспель М." },
    correctAnswer: 'd',
    category: 'znamenitosti',
    imageUrl: "Figma/kategoriya/znamenitosti/21.jpg"
  },
  {
    id: 22,
    text: "Кто изображен на этой фотографии?",
    options: { a: "А) Кокель А.А.", b: "Б) Никольский Н.В.", c: "В) Ухсай Я.Г.", d: "Г) Чапаев В.И." },
    correctAnswer: 'd',
    category: 'znamenitosti',
    imageUrl: "Figma/kategoriya/znamenitosti/22.jpg"
  },
  {
    id: 23,
    text: "Кто изображен на этой фотографии?",
    options: { a: "А) Ухсай Я.Г.", b: "Б) Яклашкин М.Н.", c: "В) Никольский Н.В.", d: "Г) Айдак А.П." },
    correctAnswer: 'b',
    category: 'znamenitosti',
    imageUrl: "Figma/kategoriya/znamenitosti/23.jpg"
  },
  {
    id: 24,
    text: "Кто изображен на этой фотографии?",
    options: { a: "А) Ефремов П.Е.", b: "Б) Иванов К.В.", c: "В) Николаев О.А.", d: "Г) Юрьев Э.М." },
    correctAnswer: 'c',
    category: 'znamenitosti',
    imageUrl: "Figma/kategoriya/znamenitosti/24.jpg"
  },
  {
    id: 25,
    text: "Язык, историю и культуру какого народа изучал Н. Бичурин?",
    options: { a: "А) японского", b: "Б) китайского", c: "В) индийского", d: "Г) монгольского" },
    correctAnswer: 'b',
    category: 'znamenitosti',
    imageUrl: "Figma/kategoriya/znamenitosti/02.jpg"
  },
  {
    id: 26,
    text: "Кем был Гузовский, имя которого носит одна из улиц?",
    options: { a: "А) композитором", b: "Б) военачальником", c: "В) лесоводом", d: "Г) архитектором" },
    correctAnswer: 'c',
    category: 'znamenitosti',
    imageUrl: "Figma/kategoriya/znamenitosti/25.jpg"
  },
  {
    id: 27,
    text: "В каком году посетила Чебоксары императрица Екатерина II?",
    options: { a: "А) В 1729 году", b: "Б) В 1756 году", c: "В) В 1763 году", d: "Г) В 1767 году" },
    correctAnswer: 'd',
    category: 'znamenitosti',
    imageUrl: "Figma/kategoriya/znamenitosti/26.jpg"
  }
];

// Остальные категории (пока неактивны в логике)
const prazdnikiQuestions: Question[] = [
  {
    id: 101,
    text: "Название праздника завершения весенних полевых работ?",
    options: { a: "А) Çимĕк", b: "Б) Акатуй", c: "В) Манкун", d: "Г) Сурхури" },
    correctAnswer: 'b',
    category: 'prazdniki',
    imageUrl: "Figma/kategoriya/prazdniki/01.jpg"
  }
];

const skulpturyQuestions: Question[] = [
  {
    id: 301,
    text: "Какой монумент является символом города Чебоксары?",
    options: { a: "А) Памятник Чапаеву", b: "Б) Мать-Покровительница", c: "В) Памятник Иванову", d: "Г) Монумент Воинской Славы" },
    correctAnswer: 'b',
    category: 'skulptury',
    imageUrl: "Figma/kategoriya/skulptury/01.jpg"
  }
];

const yazikQuestions: Question[] = [
  {
    id: 601,
    text: "Как по-чувашски будет слово «Здравствуйте»?",
    options: { a: "А) Сывлăх сунатăп", b: "Б) Тавтапуç", c: "В) Ăнăçу", d: "Г) Ырă кун" },
    correctAnswer: 'a',
    category: 'yazik',
    imageUrl: "Figma/kategoriya/yazik/01.jpg"
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