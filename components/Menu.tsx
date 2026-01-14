import React from 'react';
import { AppScreen } from '../types';
import { Play, Settings, Dice5 } from 'lucide-react';

interface MenuProps {
  onNavigate: (screen: AppScreen) => void;
}

const Menu: React.FC<MenuProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-br from-red-600 to-yellow-500 text-white relative overflow-hidden">
      {/* Decorative patterns mimicking national ornament */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')]"></div>
      
      <div className="z-10 flex flex-col items-center gap-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-2 drop-shadow-lg">Моя Чувашия</h1>
          <p className="text-xl md:text-2xl font-light opacity-90">Викторина о родном крае</p>
        </div>

        <div className="flex flex-col gap-4 w-64 md:w-80">
          <button
            onClick={() => onNavigate(AppScreen.CATEGORIES)}
            className="flex items-center justify-center gap-3 bg-white text-red-600 font-bold py-4 px-8 rounded-full shadow-lg hover:bg-red-50 hover:scale-105 transition-all transform duration-200"
          >
            <Play size={24} fill="currentColor" />
            <span>Начать игру</span>
          </button>

          <button
            onClick={() => onNavigate(AppScreen.DICE)}
            className="flex items-center justify-center gap-3 bg-yellow-400 text-red-700 font-bold py-3 px-8 rounded-full shadow-md hover:bg-yellow-300 hover:scale-105 transition-all transform duration-200"
          >
            <Dice5 size={24} />
            <span>Кубик</span>
          </button>

          <button
            onClick={() => onNavigate(AppScreen.SETTINGS)}
            className="flex items-center justify-center gap-3 bg-red-800 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-red-900 hover:scale-105 transition-all transform duration-200"
          >
            <Settings size={24} />
            <span>Настройки</span>
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-4 text-xs opacity-60">
        Версия 1.0
      </div>
    </div>
  );
};

export default Menu;