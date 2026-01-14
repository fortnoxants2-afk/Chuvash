
import React, { useState } from 'react';
import { Volume2, Music, Globe, ChevronDown, ChevronUp, HelpCircle, Sparkles, RotateCcw, UploadCloud } from 'lucide-react';
import { AppSettings } from '../types';

interface SettingsProps {
  settings: AppSettings;
  onUpdateSettings: (newSettings: AppSettings) => void;
  onBack: () => void;
}

const Settings: React.FC<SettingsProps> = ({ settings, onUpdateSettings, onBack }) => {
  const [showHelp, setShowHelp] = useState(false);
  const [justTransformed, setJustTransformed] = useState(false);

  const MY_REPO_ROOT = 'https://raw.githubusercontent.com/fortnoxants2-afk/Chuvash/main/';
  const ICON_BASE = 'https://raw.githubusercontent.com/fortnoxants2-afk/Chuvash/main/images/Figma/Icons/';
  const PLASHKA_URL = 'https://raw.githubusercontent.com/fortnoxants2-afk/Chuvash/main/images/Figma/Icons/plashka_chuvashiya.png';

  const headerStyle: React.CSSProperties = {
    width: '100%',
    height: '5.73%',
    display: 'grid',
    gridTemplateColumns: '8.796% 10.185% 7.87% 46.296% 7.87% 10.185% 8.796%',
    alignItems: 'center',
    marginTop: '3.2%',
    marginBottom: '4%'
  };

  const toggle = (key: keyof AppSettings) => {
    if (typeof settings[key] === 'boolean') {
      onUpdateSettings({ ...settings, [key]: !settings[key] });
    }
  };

  const cleanGithubUrl = (input: string): string => {
    let url = input.trim();
    if (!url) return '';
    if (url.includes('github.com')) {
      url = url.replace('github.com', 'raw.githubusercontent.com').replace('/tree/', '/').replace('/blob/', '/');
      const parts = url.split('/');
      if (parts.length >= 6) url = parts.slice(0, 6).join('/') + '/';
    }
    if (url && !url.endsWith('/')) url += '/';
    return url;
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawInput = e.target.value;
    const cleaned = cleanGithubUrl(rawInput);
    onUpdateSettings({ ...settings, imageBaseUrl: cleaned });
    if (cleaned !== rawInput.trim() && cleaned !== '') {
      setJustTransformed(true);
      setTimeout(() => setJustTransformed(false), 2000);
    }
  };

  const isCorrectFormat = settings.imageBaseUrl.includes('raw.githubusercontent.com');

  return (
    <div className="flex flex-col h-full relative overflow-hidden">
      {/* Top Bar - Сетка */}
      <div style={headerStyle}>
        <div />
        <button onClick={onBack} className="active:scale-90 transition-transform h-full w-full flex items-center justify-center">
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

      <div className="flex-1 overflow-y-auto space-y-6 pb-24 px-[8.8%]">
        <h2 className="text-[#5d3a24] text-2xl font-black uppercase text-center mb-4">Настройки</h2>
        <section className="bg-white/80 backdrop-blur rounded-[2rem] border-4 border-[#5d3a24] overflow-hidden shadow-xl">
          <div className="p-4 bg-[#5d3a24] flex items-center gap-2 text-white"><Volume2 size={20} /><span className="text-sm font-black uppercase tracking-widest">Звук</span></div>
          <div className="p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4"><div className="bg-[#9ec4af] p-3 rounded-2xl text-[#5d3a24]"><Music size={22} /></div><span className="font-black text-[#5d3a24]">Музыка</span></div>
              <button onClick={() => toggle('music')} className={`w-14 h-8 rounded-full p-1 transition-colors duration-300 ${settings.music ? 'bg-green-500' : 'bg-slate-300'}`}>
                <div className={`w-6 h-6 rounded-full bg-white shadow-sm transform transition-transform duration-300 ${settings.music ? 'translate-x-6' : ''}`} />
              </button>
            </div>
          </div>
        </section>
        <section className="bg-white/80 backdrop-blur rounded-[2rem] border-4 border-[#5d3a24] overflow-hidden shadow-xl">
          <div className="p-4 bg-[#5d3a24] flex items-center gap-2 text-white"><Globe size={20} /><span className="text-sm font-black uppercase tracking-widest">Контент (GitHub)</span></div>
          <div className="p-5">
            <div className="mb-4">
              <label className="text-sm font-black text-[#5d3a24] ml-1 uppercase block mb-2">Базовый путь:</label>
              <input type="text" value={settings.imageBaseUrl} onChange={handleUrlChange} placeholder="Вставьте ссылку..." className={`w-full p-4 bg-white/50 border-4 rounded-2xl outline-none transition-all text-[#5d3a24] font-mono text-[10px] ${isCorrectFormat ? 'border-green-500' : 'border-[#5d3a24]'}`} />
            </div>
          </div>
        </section>
      </div>

      <div className="absolute bottom-6 left-0 w-full flex justify-around items-center px-[8.8%]">
        <button onClick={onBack} className="w-16 h-16 active:scale-90 transition-transform">
          <img src={`${ICON_BASE}Button_back.png`} alt="Back" className="w-full h-full object-contain" />
        </button>
        <div className="text-[#5d3a24] text-[12px] font-bold opacity-30">Версия 0.0.1</div>
      </div>
    </div>
  );
};

export default Settings;
