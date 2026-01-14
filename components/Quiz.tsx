
import React, { useState, useEffect } from 'react';
import { Question } from '../types';
import { ArrowLeft, CheckCircle, XCircle, RefreshCw, Image as ImageIcon, Sparkles, AlertCircle } from 'lucide-react';

interface QuizProps {
  questions: Question[];
  categoryName: string;
  onBack: () => void;
  imageBaseUrl?: string;
}

const Quiz: React.FC<QuizProps> = ({ questions, categoryName, onBack, imageBaseUrl }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [placeholderUrl, setPlaceholderUrl] = useState<string | null>(null);
  
  const currentQuestion = questions[currentIndex];

  // Формируем URL картинки
  const getImageUrl = () => {
    if (!currentQuestion) return '';
    const path = currentQuestion.imageUrl;
    const cleanPath = path.replace(/^\.?\//, '');
    
    if (imageBaseUrl && imageBaseUrl.trim() !== '') {
      const base = imageBaseUrl.endsWith('/') ? imageBaseUrl : `${imageBaseUrl}/`;
      return `${base}${cleanPath}`;
    }
    
    return cleanPath;
  };

  const currentUrl = getImageUrl();

  useEffect(() => {
    setSelectedOption(null);
    setIsCorrect(null);
    setShowFeedback(false);
    setLoadError(false);
    setIsImageLoading(true);
    setPlaceholderUrl(null);
  }, [currentIndex]);

  const handleAnswer = (key: string) => {
    if (selectedOption) return;
    setSelectedOption(key);
    const correct = key === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      onBack();
    }
  };

  // Если локальная картинка не найдена (404), генерируем красивую заглушку из интернета
  const handleImageError = () => {
    // Включаем демонстрационный режим только если базовый URL не задан
    // Если пользователь задал URL, мы должны показать ошибку, чтобы он знал, что ссылка битая
    if (!imageBaseUrl || imageBaseUrl.trim() === '') {
      if (!placeholderUrl) {
        const keywords = ['chuvashia', 'history', 'portrait', 'culture', 'russia'];
        const randomKeyword = keywords[Math.floor(Math.random() * keywords.length)];
        setPlaceholderUrl(`https://images.unsplash.com/photo-1590076175573-0056108990c0?auto=format&fit=crop&q=80&w=800&keyword=${randomKeyword}`);
      } else {
        setLoadError(true);
      }
    } else {
      setLoadError(true);
    }
    setIsImageLoading(false);
  };

  if (!currentQuestion) return null;

  return (
    <div className="flex flex-col h-full bg-slate-50">
      {/* Header */}
      <div className="bg-red-700 text-white p-4 flex items-center justify-between shadow-lg sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-2 hover:bg-red-800 rounded-full transition active:scale-90">
            <ArrowLeft size={24} />
          </button>
          <h2 className="text-lg font-bold truncate max-w-[200px]">{categoryName}</h2>
        </div>
        <div className="bg-red-800 px-4 py-1 rounded-full text-sm font-bold border border-red-400/30">
          {currentIndex + 1} / {questions.length}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 flex flex-col items-center max-w-2xl mx-auto w-full">
        {/* Progress bar */}
        <div className="w-full h-1.5 bg-gray-200 rounded-full mb-6 overflow-hidden">
          <div 
            className="h-full bg-yellow-400 transition-all duration-500 ease-out"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>

        {/* Question Card */}
        <div className="w-full bg-white rounded-3xl shadow-xl overflow-hidden mb-6 border border-gray-100 relative">
          <div className="min-h-64 md:min-h-80 bg-slate-100 flex items-center justify-center relative overflow-hidden">
            {isImageLoading && !loadError && (
              <div className="absolute inset-0 flex items-center justify-center bg-slate-100 z-10">
                <RefreshCw className="animate-spin text-red-600" size={32} />
              </div>
            )}
            
            {!loadError ? (
              <div className="relative w-full h-full flex items-center justify-center">
                <img 
                  key={placeholderUrl || currentUrl}
                  src={placeholderUrl || currentUrl} 
                  alt="Вопрос"
                  className={`w-full h-auto max-h-[400px] object-contain p-2 transition-all duration-700 ${isImageLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
                  onLoad={() => setIsImageLoading(false)}
                  onError={handleImageError}
                />
                {placeholderUrl && !isImageLoading && (
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-[10px] font-bold text-red-600 shadow-sm flex items-center gap-1.5 animate-bounce">
                    <Sparkles size={12} />
                    DEMO РЕЖИМ
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-500">
                <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center text-red-300 mb-4">
                  <AlertCircle size={40} />
                </div>
                <h4 className="text-slate-800 font-bold mb-1">Ошибка загрузки</h4>
                <p className="text-slate-400 text-xs mb-4 max-w-[200px] mx-auto">
                  Не удалось найти файл по адресу:
                </p>
                <div className="bg-slate-200/50 p-3 rounded-xl text-[10px] font-mono text-slate-500 break-all w-full max-w-[240px]">
                  {currentUrl}
                </div>
                <button 
                  onClick={() => {
                    setLoadError(false);
                    setIsImageLoading(true);
                  }}
                  className="mt-6 flex items-center gap-2 text-red-600 text-xs font-bold hover:underline"
                >
                  <RefreshCw size={14} /> Повторить
                </button>
              </div>
            )}
          </div>
          
          <div className="p-6 text-center bg-white border-t border-gray-50">
            <h3 className="text-xl md:text-2xl font-black text-gray-800 leading-tight">
              {currentQuestion.text}
            </h3>
          </div>
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 gap-3 w-full mb-10">
          {Object.entries(currentQuestion.options).map(([key, text]) => {
            if (!text) return null;
            let style = "bg-white border-gray-200 text-gray-700 hover:border-red-300 shadow-sm active:bg-gray-50";
            let icon = null;

            if (selectedOption) {
              if (key === currentQuestion.correctAnswer) {
                style = "bg-green-500 border-green-500 text-white shadow-lg scale-[1.02] z-10";
                icon = <CheckCircle size={20} className="ml-auto" />;
              } else if (key === selectedOption) {
                style = "bg-red-500 border-red-500 text-white shadow-lg scale-[0.98]";
                icon = <XCircle size={20} className="ml-auto" />;
              } else {
                style = "bg-gray-100 border-gray-100 text-gray-400 opacity-40 grayscale";
              }
            }

            return (
              <button
                key={key}
                disabled={!!selectedOption}
                onClick={() => handleAnswer(key)}
                className={`flex items-center p-5 rounded-2xl text-left font-bold border-2 transition-all duration-300 ${style}`}
              >
                <span className="flex-1">{text}</span>
                {icon}
              </button>
            );
          })}
        </div>
      </div>

      {/* Feedback Overlay */}
      {showFeedback && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md">
          <div className="bg-white rounded-[40px] p-8 max-w-sm w-full shadow-2xl text-center transform animate-in zoom-in duration-300">
            {isCorrect ? (
              <>
                <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={48} strokeWidth={3} />
                </div>
                <h2 className="text-3xl font-black text-gray-900 mb-2 uppercase">Верно!</h2>
                <p className="text-gray-500 mb-8 font-medium italic">Малдес!</p>
              </>
            ) : (
              <>
                <div className="w-20 h-20 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <XCircle size={48} strokeWidth={3} />
                </div>
                <h2 className="text-3xl font-black text-gray-900 mb-2 uppercase">Ошибка</h2>
                <p className="text-gray-500 mb-2 font-medium">Правильно будет:</p>
                <div className="bg-red-50 text-red-700 p-4 rounded-2xl font-bold mb-8 text-lg">
                   {(currentQuestion.options as any)[currentQuestion.correctAnswer]}
                </div>
              </>
            )}
            <button 
              onClick={handleNext}
              className="w-full py-5 bg-red-600 text-white rounded-2xl font-black text-xl hover:bg-red-700 shadow-xl active:scale-95 transition-all"
            >
              {currentIndex < questions.length - 1 ? 'ДАЛЬШЕ' : 'ФИНИШ'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
