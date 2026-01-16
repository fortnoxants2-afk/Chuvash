import React, { useState } from 'react';
import { Volume2, Music, Globe } from 'lucide-react';
import { AppSettings } from '../types';

interface SettingsProps {
  settings: AppSettings;
  onUpdateSettings: (newSettings: AppSettings) => void;
  onBack: () => void;
}

const Settings: React.FC<SettingsProps> = ({ settings, onUpdateSettings, onBack }) => {
  const ICON_BASE = 'https://raw.githubusercontent.com/fortnoxants2-afk/Chuvash/main/Figma/Icons/';
  const PLASHKA_URL = 'https://raw.githubusercontent.com/fortnoxants2-afk/Chuvash/main/Figma/Icons/plashka_chuvashiya.png';
  const TRAY_URL = 'https://raw.githubusercontent.com/fortnoxants2-afk/Chuvash/main/Figma/Icons/Button_down_02.png';
  const BTN_HOME_NEW = 'https://raw.githubusercontent.com/fortnoxants2-afk/Chuvash/main/Figma/Icons/Button_back2.png';
  const BTN_OK_01 = 'https://raw.githubusercontent.com/fortnoxants2-afk/Chuvash/main/Figma/Icons/Button_OK_01.png';

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

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdateSettings({ ...settings, imageBaseUrl: e.target.value });
  };

  const isCorrectFormat = settings.imageBaseUrl.includes('raw.githubusercontent.com');

  const SIDE_ZONE_RATIO = (64 / 372) * 100; 
  const CENTER_ZONE_RATIO = (244 / 372) * 100;
  const OK_BTN_RATIO = 43; 
  const SIDE_BTN_RATIO = 40; 

  return (
    <div className="flex flex-col h-full relative overflow-hidden">
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
        <button onClick={onBack} className="active:scale-90 transition-transform h-full w-full flex items-center justify-center">
          <img src={`${ICON_BASE}Button_menu.png`} alt="Menu" className="w-full h-full object-contain" />
        </button>
        <div />
      </div>

      <div className="flex-1 overflow-y-auto space-y-6 pb-32 px-[8.8%]">
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
          <div className="p-4 bg-[#5d3a24] flex items-center gap-2 text-white"><Globe size={20} /><span className="text-sm font-black uppercase tracking-widest">Контент</span></div>
          <div className="p-5">
            <label className="text-sm font-black text-[#5d3a24] ml-1 uppercase block mb-2">Базовый путь:</label>
            <input type="text" value={settings.imageBaseUrl} onChange={handleUrlChange} className={`w-full p-4 bg-white/50 border-4 rounded-2xl outline-none transition-all text-[#5d3a24] font-mono text-[10px] ${isCorrectFormat ? 'border-green-500' : 'border-[#5d3a24]'}`} />
          </div>
        </section>
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
              <button onClick={onBack} style={{ width: `${OK_BTN_RATIO}%` }} className="aspect-square transition-all active:scale-95 flex items-center justify-center">
                <img src={BTN_OK_01} className="w-full h-full object-contain" alt="OK" />
              </button>
            </div>
            <div style={{ width: `${SIDE_ZONE_RATIO}%` }} className="h-full" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-[0.5%] right-[5%] text-[#5d3a24] text-[10px] font-black opacity-30 z-[70]">Версия 0.0.1</div>
    </div>
  );
};

export default Settings;