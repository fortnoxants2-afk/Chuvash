import React, { useState, useEffect, useMemo } from 'react';
import { AppScreen, AppSettings, Question, CATEGORY_NAMES } from './types';
import { getQuestions } from './data';
import { shuffleArray, filterQuestionsByCategory } from './services/gameLogic';
import Menu from './components/Menu';
import CategorySelector from './components/CategorySelector';
import Quiz from './components/Quiz';
import Settings from './components/Settings';
import Dice from './components/Dice';

interface DeckState {
  order: number[]; // Список ID вопросов в перемешанном порядке
  pointer: number; // Индекс текущего вопроса в списке order
}

const DECK_STORAGE_KEY = 'chuvashia_deck_v5';

const App: React.FC = () => {
  const [screen, setScreen] = useState<AppScreen>(AppScreen.MENU);
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);
  const [allQuestions, setAllQuestions] = useState<Question[]>([]);
  
  // Состояние колоды
  const [deck, setDeck] = useState<DeckState | null>(() => {
    const saved = localStorage.getItem(DECK_STORAGE_KEY);
    return saved ? JSON.parse(saved) : null;
  });

  const [settings, setSettings] = useState<AppSettings>(() => {
    const saved = localStorage.getItem('chuvashia_settings');
    const defaultUrl = 'https://raw.githubusercontent.com/fortnoxants2-afk/Chuvash/main/';
    if (saved) {
      const parsed = JSON.parse(saved);
      if (!parsed.imageBaseUrl || parsed.imageBaseUrl === '') {
        parsed.imageBaseUrl = defaultUrl;
      }
      return parsed;
    }
    return {
      sound: true,
      music: true,
      diceEnabled: true,
      imageBaseUrl: defaultUrl
    };
  });

  // Загрузка всех вопросов при старте
  useEffect(() => {
    setAllQuestions(getQuestions());
  }, []);

  // Инициализация колоды, если её нет или данные обновились
  useEffect(() => {
    if (allQuestions.length > 0) {
      const targetCategory = 'znamenitosti';
      const filtered = filterQuestionsByCategory(allQuestions, targetCategory);
      const ids = filtered.map(q => q.id);

      if (!deck || deck.order.length !== ids.length) {
        const newDeck = {
          order: shuffleArray(ids),
          pointer: 0
        };
        setDeck(newDeck);
        localStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(newDeck));
      }
    }
  }, [allQuestions, deck]);

  useEffect(() => {
    localStorage.setItem('chuvashia_settings', JSON.stringify(settings));
  }, [settings]);

  const handleNavigate = (newScreen: AppScreen) => {
    setScreen(newScreen);
  };

  const handleCategorySelect = (categoryId: string) => {
    // В данной версии активна только категория 'znamenitosti'
    setCurrentCategory('znamenitosti');
    setScreen(AppScreen.QUIZ);
  };

  // Переход к следующему вопросу (вызывается при ответе)
  const advanceDeck = () => {
    setDeck(prev => {
      if (!prev) return prev;
      
      let nextPointer = prev.pointer + 1;
      let nextOrder = [...prev.order];

      // Если дошли до конца колоды — перемешиваем заново
      if (nextPointer >= prev.order.length) {
        nextPointer = 0;
        nextOrder = shuffleArray([...prev.order]);
      }

      const newState = {
        order: nextOrder,
        pointer: nextPointer
      };
      
      // Синхронное сохранение для гарантии, что прогресс не сбросится при переходе
      localStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(newState));
      return newState;
    });
  };

  // Получаем текущий объект вопроса на основе состояния колоды
  const currentQuestion = useMemo(() => {
    if (!deck || allQuestions.length === 0) return null;
    const currentId = deck.order[deck.pointer];
    return allQuestions.find(q => q.id === currentId) || null;
  }, [deck, allQuestions]);

  return (
    <div className="app-screen-container overflow-hidden">
      {screen === AppScreen.MENU && (
        <Menu onNavigate={handleNavigate} />
      )}

      {screen === AppScreen.CATEGORIES && (
        <CategorySelector 
          onSelectCategory={handleCategorySelect} 
          onBack={() => setScreen(AppScreen.MENU)} 
          onNavigateToSettings={() => setScreen(AppScreen.SETTINGS)}
          onNavigateToDice={() => setScreen(AppScreen.DICE)}
        />
      )}

      {screen === AppScreen.QUIZ && currentCategory && currentQuestion && (
        <Quiz 
          question={currentQuestion} 
          categoryId={currentCategory}
          categoryName={CATEGORY_NAMES[currentCategory] || 'Знаменитости'}
          onAdvance={advanceDeck}
          onBack={() => setScreen(AppScreen.CATEGORIES)}
          onNavigateToSettings={() => setScreen(AppScreen.SETTINGS)}
          onNavigateToDice={() => setScreen(AppScreen.DICE)}
          imageBaseUrl={settings.imageBaseUrl}
        />
      )}

      {screen === AppScreen.SETTINGS && (
        <Settings 
          settings={settings} 
          onUpdateSettings={setSettings} 
          onBack={() => setScreen(AppScreen.MENU)} 
        />
      )}

      {screen === AppScreen.DICE && (
        <Dice 
          onBack={() => setScreen(AppScreen.CATEGORIES)} 
          onNavigateToSettings={() => setScreen(AppScreen.SETTINGS)}
        />
      )}
    </div>
  );
};

export default App;