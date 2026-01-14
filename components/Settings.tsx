
import React from 'react';
import { ArrowLeft, Volume2, Music, Dice5, FolderOpen, Info, Globe, AlertCircle } from 'lucide-react';
import { AppSettings } from '../types';

interface SettingsProps {
  settings: AppSettings;
  onUpdateSettings: (newSettings: AppSettings) => void;
  onBack: () => void;
}

const Settings: React.FC<SettingsProps> = ({ settings, onUpdateSettings, onBack }) => {
  const toggle = (key: keyof AppSettings) => {
    if (typeof settings[key] === 'boolean') {
      onUpdateSettings({
        ...settings,
        [key]: !settings[key]
      });
    }
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdateSettings({
      ...settings,
      imageBaseUrl: e.target.value
    });
  };

  return (
    <div className="flex flex-col h-full bg-slate-50">
      <div className="bg-red-700 text-white p-4 flex items-center gap-4 shadow-lg sticky top-0 z-20">
        <button onClick={onBack} className="p-2 hover:bg-red-800 rounded-full transition active:scale-90">
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-xl font-bold">Настройки</h2>
      </div>

      <div className="p-6 overflow-y-auto space-y-6">
        {/* Audio Section */}
        <section className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-4 bg-slate-50 border-b border-slate-100 flex items-center gap-2">
            <Volume2 size={18} className="text-slate-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Интерфейс и звук</span>
          </div>
          
          <div className="divide-y divide-slate-100">
            <div className="flex items-center justify-between p-5">
              <div className="flex items-center gap-4">
                <div className="bg-blue-50 p-3 rounded-2xl text-blue-600">
                  <Music size={22} />
                </div>
                <span className="font-bold text-slate-700">Музыка</span>
              </div>
              <button 
                onClick={() => toggle('music')}
                className={`w-14 h-8 rounded-full p-1 transition-colors duration-300 ${settings.music ? 'bg-green-500' : 'bg-slate-300'}`}
              >
                <div className={`w-6 h-6 rounded-full bg-white shadow-sm transform transition-transform duration-300 ${settings.music ? 'translate-x-6' : ''}`} />
              </button>
            </div>

            <div className="flex items-center justify-between p-5">
              <div className="flex items-center gap-4">
                <div className="bg-yellow-50 p-3 rounded-2xl text-yellow-600">
                  <Dice5 size={22} />
                </div>
                <span className="font-bold text-slate-700">Игральный кубик</span>
              </div>
              <button 
                onClick={() => toggle('diceEnabled')}
                className={`w-14 h-8 rounded-full p-1 transition-colors duration-300 ${settings.diceEnabled ? 'bg-green-500' : 'bg-slate-300'}`}
              >
                <div className={`w-6 h-6 rounded-full bg-white shadow-sm transform transition-transform duration-300 ${settings.diceEnabled ? 'translate-x-6' : ''}`} />
              </button>
            </div>
          </div>
        </section>

        {/* Cloud Hosting Section */}
        <section className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-4 bg-slate-50 border-b border-slate-100 flex items-center gap-2">
            <Globe size={18} className="text-slate-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Облачное хранилище</span>
          </div>
          
          <div className="p-5">
            <div className="flex items-start gap-3 mb-4 bg-blue-50 p-4 rounded-2xl border border-blue-100">
              <Info size={20} className="text-blue-500 shrink-0 mt-0.5" />
              <div className="text-sm text-blue-800 leading-relaxed">
                Google Диск <strong>не подходит</strong> для хранения папок с картинками. Используйте <strong>GitHub</strong>, <strong>Imgur</strong> или свой хостинг.
              </div>
            </div>

            <label className="block text-sm font-bold text-slate-600 mb-2 ml-1">
              URL к папке images:
            </label>
            <input 
              type="text" 
              value={settings.imageBaseUrl}
              onChange={handleUrlChange}
              placeholder="https://mysite.com/game/"
              className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-red-500 focus:ring-0 outline-none transition-all text-slate-700 font-mono text-sm mb-4"
            />

            <div className="flex items-start gap-2 text-[11px] text-slate-400 bg-slate-50 p-3 rounded-xl border border-dashed border-slate-200">
              <AlertCircle size={14} className="shrink-0 mt-0.5" />
              <span>
                Пример правильной ссылки: <br/>
                <code className="text-red-400">https://raw.githubusercontent.com/user/repo/main/</code>
              </span>
            </div>
          </div>
        </section>
        
        <div className="text-center py-4">
          <p className="text-slate-300 text-[10px] font-bold uppercase tracking-widest">
            Моя Чувашия • v1.2 Release
          </p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
