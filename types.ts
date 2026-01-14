
export interface RawDataStructure {
  c2array: boolean;
  size: number[];
  data: string[][][];
}

export interface Question {
  id: number;
  text: string;
  options: {
    a: string;
    b: string;
    c: string;
    d: string;
  };
  correctAnswer: 'a' | 'b' | 'c' | 'd';
  category: string;
  imageUrl: string;
}

export enum AppScreen {
  MENU = 'MENU',
  CATEGORIES = 'CATEGORIES',
  QUIZ = 'QUIZ',
  SETTINGS = 'SETTINGS',
  DICE = 'DICE'
}

export interface AppSettings {
  sound: boolean;
  music: boolean;
  diceEnabled: boolean;
  imageBaseUrl: string;
}

export const CATEGORY_NAMES: Record<string, string> = {
  'znamenitosti': 'Знаменитости',
  'prazdniki': 'Праздники и обряды',
  'rayony': 'Районы и города',
  'skulptury': 'Скульптура и зодчество',
  'promisel': 'Народные промыслы',
  'yazik': 'Язык'
};

export const CATEGORY_COLORS: Record<string, string> = {
  'znamenitosti': 'bg-purple-500',
  'prazdniki': 'bg-red-500',
  'rayony': 'bg-green-500',
  'skulptury': 'bg-yellow-500',
  'promisel': 'bg-blue-500',
  'yazik': 'bg-indigo-500'
};
