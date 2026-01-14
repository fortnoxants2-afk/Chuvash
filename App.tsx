
import React, { useState, useEffect } from 'react';
import { AppScreen, AppSettings, Question, CATEGORY_NAMES } from './types';
import { getQuestions } from './data';
import { shuffleArray, filterQuestionsByCategory } from './services/gameLogic';
import Menu from './components/Menu';
import CategorySelector from './components/CategorySelector';
import Quiz from './components/Quiz';
import Settings from './components/Settings';
import Dice from './components/Dice';

const App: React.FC = () => {
  const [screen, setScreen] = useState<AppScreen>(AppScreen.MENU);
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [categoryQuestions, setCategoryQuestions] = useState<Question[]>([]);
  
  const [settings, setSettings] = useState<AppSettings>(() => {
    const saved = localStorage.getItem('chuvashia_settings');
    if (saved) {
      return { ...JSON.parse(saved), imageBaseUrl: JSON.parse(saved).imageBaseUrl || '' };
    }
    return {
      sound: true,
      music: true,
      diceEnabled: true,
      imageBaseUrl: ''
    };
  });

  useEffect(() => {
    localStorage.setItem('chuvashia_settings', JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    const loadedQuestions = getQuestions();
    setQuestions(loadedQuestions);
  }, []);

  const handleNavigate = (newScreen: AppScreen) => {
    setScreen(newScreen);
  };

  const handleCategorySelect = (categoryId: string) => {
    const filtered = filterQuestionsByCategory(questions, categoryId);
    const shuffled = shuffleArray(filtered);
    setCategoryQuestions(shuffled);
    setCurrentCategory(categoryId);
    setScreen(AppScreen.QUIZ);
  };

  return (
    <div className="w-full h-screen max-w-md mx-auto bg-white shadow-2xl overflow-hidden relative">
      {screen === AppScreen.MENU && (
        <Menu onNavigate={handleNavigate} />
      )}

      {screen === AppScreen.CATEGORIES && (
        <CategorySelector 
          onSelectCategory={handleCategorySelect} 
          onBack={() => setScreen(AppScreen.MENU)} 
        />
      )}

      {screen === AppScreen.QUIZ && currentCategory && (
        <Quiz 
          questions={categoryQuestions} 
          categoryName={CATEGORY_NAMES[currentCategory] || 'Викторина'}
          onBack={() => setScreen(AppScreen.CATEGORIES)}
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
        <Dice onBack={() => setScreen(AppScreen.MENU)} />
      )}
    </div>
  );
};

export default App;
