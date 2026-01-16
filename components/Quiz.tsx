import React, { useState, useEffect } from 'react';
import { Question } from '../types';

interface QuizProps {
  question: Question;
  categoryId: string;
  categoryName: string;
  onAdvance: () => void;
  onBack: () => void;
  onNavigateToSettings: () => void;
  onNavigateToDice: () => void;
  imageBaseUrl?: string;
}

const Quiz: React.FC<QuizProps> = ({ 
  question, 
  categoryId, 
  categoryName, 
  onAdvance,
  onBack, 
  onNavigateToSettings, 
  onNavigateToDice, 
  imageBaseUrl 
}) => {
  const ICON_BASE = 'https://raw.githubusercontent.com/fortnoxants2-afk/Chuvash/main/Figma/Icons/';
  const PLASHKA_DEFAULT = 'https://raw.githubusercontent.com/fortnoxants2-afk/Chuvash/main/Figma/Icons/plashka_chuvashiya.png';
  const PLASHKA_ZNAMENITOSTI = 'https://raw.githubusercontent.com/fortnoxants2-afk/Chuvash/main/Figma/Icons/plashka_znamenitosti.png';
  const CARD_BG = 'https://raw.githubusercontent.com/fortnoxants2-afk/Chuvash/main/Figma/Card_main_big.png';
  const TRAY_URL = 'https://raw.githubusercontent.com/fortnoxants2-afk/Chuvash/main/Figma/Icons/Button_down_02.png';
  
  const BTN_HOME_NEW = 'https://raw.githubusercontent.com/fortnoxants2-afk/Chuvash/main/Figma/Icons/Button_back2.png';
  const BTN_DICE_NEW = 'https://raw.githubusercontent.com/fortnoxants2-afk/Chuvash/main/Figma/Icons/Button_dice2.png';
  const CLOSE_ICON = 'https://raw.githubusercontent.com/fortnoxants2-afk/Chuvash/main/Figma/Icons/close.png';
  
  const WIN_GOOD_BG = 'https://raw.githubusercontent.com/fortnoxants2-afk/Chuvash/main/Figma/win/win_good.png';
  const ALMS_GIF = 'https://raw.githubusercontent.com/fortnoxants2-afk/Chuvash/main/Figma/gif/alms.gif';

  const BTN_NO_ACTION = 'https://raw.githubusercontent.com/fortnoxants2-afk/Chuvash/main/Figma/Icons/Button_No%20action.png';
  const BTN_OK_01 = 'https://raw.githubusercontent.com/fortnoxants2-afk/Chuvash/main/Figma/Icons/Button_OK_01.png';
  const BTN_OK_02 = 'https://raw.githubusercontent.com/fortnoxants2-afk/Chuvash/main/Figma/Icons/Button_OK_02.png';

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  useEffect(() => {
    setSelectedOption(null);
    setShowFeedback(false);
    setIsButtonPressed(false);
  }, [question.id]);

  const getImageUrl = () => {
    const base = imageBaseUrl?.trim().endsWith('/') ? imageBaseUrl.trim() : `${imageBaseUrl?.trim()}/`;
    const imgPath = question.imageUrl.startsWith('/') ? question.imageUrl.substring(1) : question.imageUrl;
    return `${base}${imgPath}`;
  };

  const handleAnswer = (key: string) => {
    if (showFeedback) return;
    setSelectedOption(key);
  };

  const checkAnswer = () => {
    if (!selectedOption || showFeedback) return;
    const correct = selectedOption === question.correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);
  };

  const handleCloseFeedback = () => {
    onAdvance();
    onBack();
  };

  const isCelebrityCategory = categoryId === 'znamenitosti';
  const currentPlashka = isCelebrityCategory ? PLASHKA_ZNAMENITOSTI : PLASHKA_DEFAULT;

  const headerStyle: React.CSSProperties = {
    width: '100%',
    height: '5.73%',
    display: 'grid',
    gridTemplateColumns: '8.796% 10.185% 7.87% 46.296% 7.87% 10.185% 8.796%',
    alignItems: 'center',
    marginTop: '3.2%',
    position: 'relative',
    zIndex: 40
  };

  const CARD_WIDTH = '93.333%';
  const CARD_LEFT = '3.333%';

  const SIDE_ZONE_RATIO = (64 / 372) * 100; 
  const CENTER_ZONE_RATIO = (244 / 372) * 100;
  
  const OK_BTN_RATIO = 43; 
  const SIDE_BTN_RATIO = 40; 

  const getOkButtonImage = () => {
    if (!selectedOption) return BTN_NO_ACTION;
    if (isButtonPressed || showFeedback) return BTN_OK_02;
    return BTN_OK_01;
  };

  const getQuestionFontSizeClass = () => {
    const len = question.text.length;
    if (len > 70) return 'text-[15px]';
    if (len > 45) return 'text-[17px]';
    return 'text-[20px]';
  };

  return (
    <div className="flex flex-col h-full overflow-hidden relative">
      <div style={headerStyle}>
        <div />
        <button onClick={onNavigateToSettings} className="active:scale-90 transition-transform h-full w-full flex items-center justify-center">
          <img src={`${ICON_BASE}Button_settings.png`} alt="Settings" className="w-full h-full object-contain" />
        </button>
        <div />
        <div className="h-full w-full flex items-center justify-center">
          <img src={currentPlashka} alt={categoryName} className="w-full h-[81.8%] object-contain" />
        </div>
        <div />
        <button onClick={onBack} className="active:scale-90 transition-transform h-full w-full flex items-center justify-center">
          <img src={`${ICON_BASE}Button_menu.png`} alt="Menu" className="w-full h-full object-contain" />
        </button>
        <div />
      </div>

      <div className="absolute z-10 flex flex-col items-center" style={{ width: CARD_WIDTH, height: '91.5%', left: CARD_LEFT, bottom: '1.2%' }}>
        <img src={CARD_BG} className="absolute inset-0 w-full h-full object-fill pointer-events-none drop-shadow-2xl" alt="Card BG" />
        
        {/* pb-[30%] гарантирует, что ответы будут выше трея. pt-[12.5%] возвращает фото на исходную высоту. */}
        <div className="relative z-10 w-full h-full flex flex-col items-center pt-[12.5%] px-[10%] pb-[30%] gap-y-0">
          
          {/* Фотография: ширина 68% для экономии места по вертикали */}
          <div className="w-[68%] aspect-[3.4/4.3] mb-2 overflow-hidden rounded-[2.5rem] relative flex-shrink-0 flex items-center justify-center bg-transparent shadow-[inset_0_2px_10px_rgba(0,0,0,0.1)]">
             <img src={getImageUrl()} alt="Question" className="w-full h-full object-cover" />
             <div className="absolute inset-0 rounded-[2.5rem] border-[1px] border-black/5 pointer-events-none"></div>
          </div>
          
          {/* Текст вопроса: flex-1 забирает все свободное место в центре */}
          <div className="flex-1 w-full px-2 flex flex-col justify-center items-center text-center overflow-hidden min-h-[3rem]">
            <h2 className={`text-[#0a0a0a] font-bold ${getQuestionFontSizeClass()} leading-tight tracking-tight`}>
              {question.text}
            </h2>
          </div>
          
          {/* Варианты ответов */}
          <div className="w-full space-y-0.5 mt-1 flex-shrink-0">
            {Object.entries(question.options).map(([key, text]) => {
              const isSelected = selectedOption === key;
              return (
                <button
                  key={key}
                  disabled={showFeedback}
                  onClick={() => handleAnswer(key)}
                  className={`w-full py-1.5 px-6 text-left rounded-[1.2rem] font-bold text-[#0a0a0a] text-[15px] transition-all duration-150 ${isSelected ? 'bg-white shadow-md scale-[1.02]' : 'bg-transparent active:bg-white/10'}`}
                >
                  {text}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[15%] flex items-end justify-center pointer-events-none z-[60]">
        <div className="relative h-full flex items-center justify-center pointer-events-auto" style={{ width: '93.333%' }}>
          <img src={TRAY_URL} className="absolute inset-x-0 bottom-0 w-full h-full object-contain object-bottom" alt="Tray BG" />
          <div className="relative w-full h-full flex items-center">
            <div style={{ width: `${SIDE_ZONE_RATIO}%` }} className="h-full flex items-center justify-center">
              <button onClick={onBack} style={{ width: `${SIDE_BTN_RATIO}%`, transform: 'translateX(320%)' }} className="aspect-square active:scale-90 transition-transform mb-[6.5%]">
                <img src={BTN_HOME_NEW} className="w-full h-full object-contain" alt="Home" />
              </button>
            </div>
            <div style={{ width: `${CENTER_ZONE_RATIO}%` }} className="h-full flex items-center justify-center">
              <button 
                onMouseDown={() => selectedOption && !showFeedback && setIsButtonPressed(true)}
                onMouseUp={() => setIsButtonPressed(false)}
                onMouseLeave={() => setIsButtonPressed(false)}
                onClick={checkAnswer} 
                disabled={!selectedOption || showFeedback}
                style={{ width: `${OK_BTN_RATIO}%` }}
                className={`aspect-square transition-all flex items-center justify-center ${selectedOption && !showFeedback ? 'cursor-pointer' : 'cursor-default'}`}
              >
                <img src={getOkButtonImage()} className="w-full h-full object-contain" alt="OK" />
              </button>
            </div>
            <div style={{ width: `${SIDE_ZONE_RATIO}%` }} className="h-full flex items-center justify-center">
              <button onClick={onNavigateToDice} style={{ width: `${SIDE_BTN_RATIO}%`, transform: 'translateX(-320%)' }} className="aspect-square active:scale-90 transition-transform mb-[6.5%]">
                <img src={BTN_DICE_NEW} className="w-full h-full object-contain" alt="Dice" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {showFeedback && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
          {isCorrect ? (
            <div className="relative w-full max-w-[340px] aspect-[556/650] flex flex-col items-center">
              <img src={WIN_GOOD_BG} className="absolute inset-0 w-full h-full object-fill pointer-events-none" alt="Win BG" />
              <button onClick={handleCloseFeedback} className="absolute top-[-2.8%] right-[-1.1%] w-[12.36%] aspect-square z-50 active:scale-90 transition-transform">
                <img src={CLOSE_ICON} alt="Close" className="w-full h-full object-contain drop-shadow-sm" />
              </button>
              <div className="relative z-10 w-full h-full flex flex-col items-center pt-[62%] px-[10%]">
                <div className="w-[58%] aspect-square flex items-center justify-center">
                  <img src={ALMS_GIF} alt="Reward" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full max-w-[340px] bg-[#f8f4f0] rounded-[3.5rem] p-10 flex flex-col items-center text-center shadow-2xl border-[6px] border-[#5d3a24]">
              <h2 className="text-4xl font-black mb-3 text-red-600">ОШИБКА</h2>
              <p className="text-[#5d3a24] font-black mb-10 text-lg leading-tight whitespace-pre-line">Ничего страшного,{"\n"}попробуйте еще раз!</p>
              <button onClick={handleCloseFeedback} className="w-full py-4 bg-[#9ec4af] text-white rounded-[2rem] font-black text-xl shadow-lg active:scale-95 transition-all">ДАЛЬШЕ</button>
            </div>
          )}
        </div>
      )}
      <div className="absolute bottom-[0.5%] right-[5%] text-[#5d3a24] text-[10px] font-black opacity-30 z-[70]">Версия 0.0.1</div>
    </div>
  );
};

export default Quiz;