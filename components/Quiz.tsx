
import React, { useState } from 'react';
import { Question } from '../types';
import { X } from 'lucide-react';

interface QuizProps {
  questions: Question[];
  categoryName: string;
  onBack: () => void;
  onNavigateToSettings: () => void;
  imageBaseUrl?: string;
}

const Ornament = () => (
  <>
    <div className="ornament-corner corner-tl w-6 h-6" />
    <div className="ornament-corner corner-tr w-6 h-6" />
    <div className="ornament-corner corner-bl w-6 h-6" />
    <div className="ornament-corner corner-br w-6 h-6" />
  </>
);

const Quiz: React.FC<QuizProps> = ({ questions, categoryName, onBack, onNavigateToSettings, imageBaseUrl }) => {
  const ICON_BASE = 'https://raw.githubusercontent.com/fortnoxants2-afk/Chuvash/main/images/Figma/Icons/';
  const PLASHKA_URL = 'https://raw.githubusercontent.com/fortnoxants2-afk/Chuvash/main/images/Figma/Icons/plashka_chuvashiya.png';
  
  const headerStyle: React.CSSProperties = {
    width: '100%',
    height: '5.73%',
    display: 'grid',
    gridTemplateColumns: '8.796% 10.185% 7.87% 46.296% 7.87% 10.185% 8.796%',
    alignItems: 'center',
    marginTop: '3.2%',
    marginBottom: '3%'
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const currentQuestion = questions[currentIndex];

  const getImageUrl = () => {
    if (!currentQuestion) return '';
    const base = imageBaseUrl?.trim().endsWith('/') ? imageBaseUrl.trim() : `${imageBaseUrl?.trim()}/`;
    return `${base}${currentQuestion.imageUrl}`;
  };

  const handleAnswer = (key: string) => {
    if (showFeedback) return;
    setSelectedOption(key);
  };

  const checkAnswer = () => {
    if (!selectedOption) return;
    const correct = selectedOption === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);
  };

  const handleNext = () => {
    setShowFeedback(false);
    setSelectedOption(null);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      onBack();
    }
  };

  if (!currentQuestion) return null;

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

      {/* Main Question Card */}
      <div className="flex-1 mx-[8.8%] chuvash-card rounded-[3rem] p-6 flex flex-col items-center relative overflow-hidden shadow-xl mb-4">
        <Ornament />
        <div className="w-full aspect-[4/3] mb-4 overflow-hidden rounded-2xl flex items-center justify-center bg-transparent">
          <img src={getImageUrl()} alt="Question" className="w-full h-full object-contain" />
        </div>
        <div className="text-center mb-6 px-4">
          <h3 className="text-[#5d3a24] font-black text-lg md:text-xl leading-snug">{currentQuestion.text}</h3>
        </div>
        <div className="w-full space-y-2 mt-auto">
          {Object.entries(currentQuestion.options).map(([key, text]) => {
            const isSelected = selectedOption === key;
            return (
              <button
                key={key}
                disabled={showFeedback}
                onClick={() => handleAnswer(key)}
                className={`w-full py-2 px-6 text-left rounded-full font-black text-[#5d3a24] transition-colors border-2 ${
                  isSelected ? 'bg-white border-white shadow-md' : 'bg-transparent border-transparent'
                }`}
              >
                {text}
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="w-full flex justify-around items-center mb-6 px-4">
        <button onClick={onBack} className="w-16 h-16 active:scale-90 transition-transform">
          <img src={`${ICON_BASE}Button_back.png`} alt="Back" className="w-full h-full object-contain" />
        </button>
        <button onClick={checkAnswer} className={`w-24 h-24 bg-white/20 rounded-full flex items-center justify-center p-2 transition-opacity ${!selectedOption ? 'opacity-50' : 'opacity-100'}`}>
          <div className="w-full h-full bg-[#e0e0e0] border-4 border-white rounded-full flex items-center justify-center shadow-inner">
             <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="w-10 h-10"><polyline points="20 6 9 17 4 12"/></svg>
             </div>
          </div>
        </button>
        <button className="w-16 h-16 active:scale-90 transition-transform">
          <img src={`${ICON_BASE}Button_dice_yes.png`} alt="Dice" className="w-full h-full object-contain" />
        </button>
      </div>

      {showFeedback && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm">
          <div className="w-full max-w-[320px] bg-white rounded-[3rem] p-8 relative flex flex-col items-center text-center shadow-2xl">
            <button onClick={handleNext} className="absolute top-6 right-6 text-red-500">
              <X size={32} strokeWidth={3} />
            </button>
            <div className="mb-6"><h2 className={`text-3xl font-black uppercase italic ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>{isCorrect ? 'отлично' : 'неверно'}</h2></div>
            <p className="text-[#5d3a24] font-black text-xl mb-8">{isCorrect ? 'Получите награду' : 'Попробуйте еще раз'}</p>
            <div className="w-32 h-32 mb-8 flex items-center justify-center">
              {isCorrect ? <img src="https://raw.githubusercontent.com/fortnoxants2-afk/Chuvash/main/images/Figma/reward_icon.png" alt="Reward" className="w-full h-full object-contain" /> : <div className="text-red-500"><X size={80} strokeWidth={3} /></div>}
            </div>
            <button onClick={handleNext} className="w-full py-4 bg-green-500 text-white rounded-2xl font-black text-xl shadow-lg active:scale-95 transition-transform">ДАЛЕЕ</button>
          </div>
        </div>
      )}
      <div className="absolute bottom-[1.5%] right-[5%] text-[#5d3a24] text-[12px] font-bold opacity-30">Версия 0.0.1</div>
    </div>
  );
};

export default Quiz;
