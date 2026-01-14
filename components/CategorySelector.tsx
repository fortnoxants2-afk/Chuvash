import React from 'react';
import { CATEGORY_NAMES, CATEGORY_COLORS } from '../types';
import { ArrowLeft } from 'lucide-react';

interface CategorySelectorProps {
  onSelectCategory: (category: string) => void;
  onBack: () => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({ onSelectCategory, onBack }) => {
  return (
    <div className="flex flex-col h-full bg-gray-100">
      <div className="bg-red-700 text-white p-4 flex items-center gap-4 shadow-md sticky top-0 z-20">
        <button onClick={onBack} className="p-2 hover:bg-red-800 rounded-full transition">
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-xl font-bold">Выберите категорию</h2>
      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto">
        {Object.entries(CATEGORY_NAMES).map(([key, name]) => {
          const colorClass = CATEGORY_COLORS[key] || 'bg-gray-500';
          
          return (
            <button
              key={key}
              onClick={() => onSelectCategory(key)}
              className={`${colorClass} text-white p-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all transform flex flex-col items-center justify-center h-40 md:h-48 text-center`}
            >
              <span className="text-2xl font-bold mb-2">{name}</span>
              <span className="text-sm opacity-80 uppercase tracking-widest">Викторина</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategorySelector;