
import React from 'react';
import { AppScreen } from '../types';
import { HelpCircle, Gift, AlertTriangle } from 'lucide-react';

interface CategorySelectorProps {
  onSelectCategory: (category: string) => void;
  onBack: () => void;
  onNavigateToSettings: () => void;
}

const Ornament = () => (
  <>
    <div className="ornament-corner corner-tl w-6 h-6" />
    <div className="ornament-corner corner-tr w-6 h-6" />
    <div className="ornament-corner corner-bl w-6 h-6" />
    <div className="ornament-corner corner-br w-6 h-6" />
  </>
);

const CategorySelector: React.FC<CategorySelectorProps> = ({ onSelectCategory, onBack, onNavigateToSettings }) => {
  const ICON_BASE = 'https://raw.githubusercontent.com/fortnoxants2-afk/Chuvash/main/images/Figma/Icons/';
  const PLASHKA_URL = 'https://raw.githubusercontent.com/fortnoxants2-afk/Chuvash/main/images/Figma/Icons/plashka_chuvashiya.png';
  
  const headerStyle: React.CSSProperties = {
    width: '100%',
    height: '5.73%',
    display: 'grid',
    gridTemplateColumns: '8.796% 10.185% 7.87% 46.296% 7.87% 10.185% 8.796%',
    alignItems: 'center',
    marginTop: '3.2%',
    marginBottom: '4%'
  };

  const categoryCards = [
    { id: 'znamenitosti', icon: <HelpCircle size={80} strokeWidth={3} /> },
    { id: 'prazdniki', icon: <Gift size={80} strokeWidth={2} /> },
    { id: 'yazik', icon: <AlertTriangle size={80} strokeWidth={3} /> },
  ];

  return (
    <div className="flex flex-col h-full overflow-hidden relative">
      {/* Top Bar - Сетка */}
      <div style={headerStyle}>
        <div />
        <button 
          onClick={onNavigateToSettings} 
          className="active:scale-90 transition-transform h-full w-full flex items-center justify-center"
        >
          <img src={`${ICON_BASE}Button_settings.png`} alt="Settings" className="w-full h-full object-contain" />
        </button>
        <div />
        <div className="h-full w-full flex items-center justify-center">
          <img src={PLASHKA_URL} alt="Моя Чувашия" className="w-full h-[81.8%] object-contain" />
        </div>
        <div />
        <button className="active:scale-90 transition-transform h-full w-full flex items-center justify-center">
          <img src={`${ICON_BASE}Button_menu.png`} alt="Menu" className="w-full h-full object-contain" />
        </button>
        <div />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col gap-4 overflow-y-auto pb-8 px-[8.8%]">
        {categoryCards.map((card) => (
          <button
            key={card.id}
            onClick={() => onSelectCategory(card.id)}
            className="w-full chuvash-card rounded-[2.5rem] p-6 h-40 flex items-center justify-center text-[#5d3a24] shadow-lg relative transition-transform active:scale-95"
          >
            <Ornament />
            <div className="flex items-center justify-center">
              {card.icon}
            </div>
          </button>
        ))}
      </div>

      {/* Bottom Nav */}
      <div className="w-full flex justify-around items-center mb-6 mt-auto px-4">
        <button onClick={onBack} className="w-16 h-16 active:scale-90 transition-transform">
          <img src={`${ICON_BASE}Button_back.png`} alt="Back" className="w-full h-full object-contain" />
        </button>
        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center p-2">
          <div className="w-full h-full bg-[#e0e0e0] border-4 border-white rounded-full flex items-center justify-center shadow-inner relative">
             <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="w-10 h-10"><polyline points="20 6 9 17 4 12"/></svg>
             </div>
          </div>
        </div>
        <button className="w-16 h-16 active:scale-90 transition-transform">
          <img src={`${ICON_BASE}Button_dice_yes.png`} alt="Dice" className="w-full h-full object-contain" />
        </button>
      </div>
      <div className="absolute bottom-[1.5%] right-[5%] text-[#5d3a24] text-[12px] font-bold opacity-30">Версия 0.0.1</div>
    </div>
  );
};

export default CategorySelector;
