
import React from 'react';
import { AppScreen } from '../types';

interface MenuProps {
  onNavigate: (screen: AppScreen) => void;
}

const Menu: React.FC<MenuProps> = ({ onNavigate }) => {
  const ICON_SETTINGS = 'https://raw.githubusercontent.com/fortnoxants2-afk/Chuvash/main/images/Figma/Icons/Button_settings.png';
  const ICON_MENU = 'https://raw.githubusercontent.com/fortnoxants2-afk/Chuvash/main/images/Figma/Icons/Button_menu.png';
  const PLASHKA_URL = 'https://raw.githubusercontent.com/fortnoxants2-afk/Chuvash/main/images/Figma/Icons/plashka_chuvashiya.png';

  // Контейнер верхней панели: высота 110px (5.73% от 1920)
  const headerStyle: React.CSSProperties = {
    position: 'absolute',
    top: '3.2%',
    left: 0,
    width: '100%',
    height: '5.73%',
    display: 'grid',
    gridTemplateColumns: '8.796% 10.185% 7.87% 46.296% 7.87% 10.185% 8.796%',
    alignItems: 'center',
    zIndex: 40
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Top Bar - Жесткая сетка по схеме 95-110-85-500-85-110-95 */}
      <div style={headerStyle}>
        <div /> {/* 95px spacer */}
        <button 
          onClick={() => onNavigate(AppScreen.SETTINGS)} 
          className="active:scale-90 transition-transform h-full w-full flex items-center justify-center"
        >
          <img src={ICON_SETTINGS} alt="Settings" className="w-full h-full object-contain" />
        </button>
        <div /> {/* 85px gap */}
        <div className="h-full w-full flex items-center justify-center">
          <img 
            src={PLASHKA_URL} 
            alt="Моя Чувашия" 
            className="w-full h-[81.8%] object-contain" // 90px от 110px высоты ≈ 81.8%
          />
        </div>
        <div /> {/* 85px gap */}
        <button 
          onClick={() => onNavigate(AppScreen.CATEGORIES)}
          className="active:scale-90 transition-transform h-full w-full flex items-center justify-center"
        >
          <img src={ICON_MENU} alt="Menu" className="w-full h-full object-contain" />
        </button>
        <div /> {/* 95px spacer */}
      </div>

      {/* Main Card - Точно 1008x1716px (93.333% x 89.375%) */}
      <div className="absolute z-10 pointer-events-none" 
           style={{ 
             width: '93.333%', 
             height: '89.375%',
             left: '3.333%',
             bottom: '1.5%' 
           }}>
        <img 
          src="https://raw.githubusercontent.com/fortnoxants2-afk/Chuvash/main/images/Figma/pic/Card_main_big2.png"
          alt="Main Card"
          className="w-full h-full object-fill pointer-events-auto drop-shadow-2xl"
        />
      </div>

      <div className="absolute bottom-[0.8%] right-[4%] z-20">
        <div className="text-[#5d3a24] text-[12px] font-bold opacity-30">Версия 0.0.1</div>
      </div>
    </div>
  );
};

export default Menu;
