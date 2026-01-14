import React, { useState } from 'react';
import { ArrowLeft, Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from 'lucide-react';

interface DiceProps {
  onBack: () => void;
}

const Dice: React.FC<DiceProps> = ({ onBack }) => {
  const [value, setValue] = useState<number>(1);
  const [isRolling, setIsRolling] = useState(false);

  const roll = () => {
    if (isRolling) return;
    setIsRolling(true);
    
    // Simulate rolling animation
    let count = 0;
    const interval = setInterval(() => {
      setValue(Math.floor(Math.random() * 6) + 1);
      count++;
      if (count > 10) {
        clearInterval(interval);
        setIsRolling(false);
      }
    }, 100);
  };

  const getIcon = (val: number) => {
    switch(val) {
        case 1: return <Dice1 size={120} />;
        case 2: return <Dice2 size={120} />;
        case 3: return <Dice3 size={120} />;
        case 4: return <Dice4 size={120} />;
        case 5: return <Dice5 size={120} />;
        case 6: return <Dice6 size={120} />;
        default: return <Dice1 size={120} />;
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-900 text-white">
      <div className="bg-gray-800 p-4 flex items-center gap-4 shadow-md">
        <button onClick={onBack} className="p-2 hover:bg-gray-700 rounded-full transition">
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-xl font-bold">Кубик</h2>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-8 gap-12">
        <div className={`transition-all duration-100 transform ${isRolling ? 'rotate-180 scale-110' : ''} text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]`}>
            {getIcon(value)}
        </div>

        <button 
            onClick={roll}
            disabled={isRolling}
            className="bg-gradient-to-r from-red-600 to-red-500 text-white font-bold text-xl py-4 px-12 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
            {isRolling ? 'Бросаем...' : 'Бросить кубик'}
        </button>
      </div>
    </div>
  );
};

export default Dice;