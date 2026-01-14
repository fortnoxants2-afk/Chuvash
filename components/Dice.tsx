
import React, { useState } from 'react';
import { X } from 'lucide-react';

interface DiceProps {
  onBack: () => void;
  onNavigateToSettings: () => void;
}

const Dice: React.FC<DiceProps> = ({ onBack, onNavigateToSettings }) => {
  const ICON_BASE = 'https://raw.githubusercontent.com/fortnoxants2-afk/Chuvash/main/images/Figma/Icons/';
  const PLASHKA_URL = 'https://raw.githubusercontent.com/fortnoxants2-afk/Chuvash/main/images/Figma/Icons/plashka_chuvashiya.png';

  // Контейнер верхней панели: строго по сетке 1080x1920
  const headerStyle: React.CSSProperties = {
    width: '100%',
    height: '5.73%', // 110px
    display: 'grid',
    gridTemplateColumns: '8.796% 10.185% 7.87% 46.296% 7.87% 10.185% 8.796%',
    alignItems: 'center',
    marginTop: '3.2%',
    marginBottom: '2%',
    zIndex: 40
  };

  const [value, setValue] = useState<number>(5);
  const [isRolling, setIsRolling] = useState(false);

  const roll = () => {
    if (isRolling) return;
    setIsRolling(true);
    let count = 0;
    const interval = setInterval(() => {
      setValue(Math.floor(Math.random() * 6) + 1);
      count++;
      if (count > 15) {
        clearInterval(interval);
        setIsRolling(false);
      }
    }, 80);
  };

  return (
    <div className="flex flex-col h-full overflow-hidden relative">
      {/* Top Bar - Жесткая сетка по схеме 95-110-85-500-85-110-95 */}
      <div style={headerStyle}>
        <div /> {/* 95px spacer */}
        <button 
          onClick={onNavigateToSettings} 
          className="active:scale-90 transition-transform h-full w-full flex items-center justify-center"
        >
          <img src={`${ICON_BASE}Button_settings.png`} alt="Settings" className="w-full h-full object-contain" />
        </button>
        <div /> {/* 85px gap */}
        <div className="h-full w-full flex items-center justify-center">
          <img 
            src={PLASHKA_URL} 
            alt="Моя Чувашия" 
            className="w-full h-[81.8%] object-contain" // 90px / 110px
          />
        </div>
        <div /> {/* 85px gap */}
        <button className="active:scale-90 transition-transform h-full w-full flex items-center justify-center">
          <img src={`${ICON_BASE}Button_menu.png`} alt="Menu" className="w-full h-full object-contain" />
        </button>
        <div /> {/* 95px spacer */}
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-[8.8%]">
        {/* Dice Card Modal */}
        <div className="w-full max-w-[340px] chuvash-card rounded-[3rem] p-8 flex flex-col items-center shadow-2xl relative animate-in zoom-in duration-300">
           <button onClick={onBack} className="absolute top-4 right-4 text-red-500 p-2">
             <X size={32} strokeWidth={3} />
           </button>
           
           <div className="bg-white border-2 border-[#5d3a24] rounded-full py-1 px-8 mb-12 flex justify-between items-center text-[#5d3a24] font-black uppercase text-sm">
             <span className="w-1 h-1 rounded-full bg-[#5d3a24] mr-4" />
             Бросить кубик
             <span className="w-1 h-1 rounded-full bg-[#5d3a24] ml-4" />
           </div>

           <div className={`w-48 h-48 flex items-center justify-center mb-12 transition-transform ${isRolling ? 'animate-bounce scale-110' : ''}`}>
             <img 
               src={`https://raw.githubusercontent.com/fortnoxants2-afk/Chuvash/main/images/Figma/dice_${value}.png`} 
               alt={`Dice ${value}`}
               className="w-full h-full object-contain drop-shadow-2xl"
               onError={(e) => (e.target as any).src = 'https://cdn-icons-png.flaticon.com/512/1000/1000676.png'}
             />
           </div>

           <button 
             onClick={roll}
             className="w-full py-4 bg-white border-4 border-slate-200 rounded-full flex items-center justify-center p-2 shadow-inner"
           >
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg active:scale-95 transition-transform">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="w-10 h-10"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
           </button>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="w-full flex justify-around items-center mb-6 px-4">
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

export default Dice;
