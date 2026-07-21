import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useContent } from '@/contexts/ContentContext';

export const AdminBar = () => {
  const { isEditMode, toggleEditMode } = useContent();
  const location = useLocation();

  return (
    <div className="bg-primary text-white text-xs py-2 px-4 flex flex-wrap items-center justify-between z-50 border-b border-white/20 shadow-md">
      <div className="flex items-center gap-3">
        <span className="font-bold flex items-center gap-1">
          <span className="material-symbols-outlined text-sm">admin_panel_settings</span> Shift CMS Admin Mode
        </span>
        <button 
          onClick={toggleEditMode}
          className={`px-3 py-1 rounded-full font-bold transition-all flex items-center gap-1 cursor-pointer ${
            isEditMode 
              ? 'bg-green-500 text-white shadow-inner animate-pulse' 
              : 'bg-white/20 text-white hover:bg-white/30'
          }`}
        >
          <span className="material-symbols-outlined text-xs">
            {isEditMode ? 'edit_note' : 'edit_off'}
          </span>
          {isEditMode ? 'Redigeringsmodus: PÅ (Klikk tekster/bilder på siden)' : 'Redigeringsmodus: AV'}
        </button>
      </div>

      <div className="flex items-center gap-4 mt-1 sm:mt-0">
        <span className="opacity-80 hidden md:inline">Endringer lagres automatisk live</span>
        <Link 
          to="/admin" 
          className={`px-3 py-1 rounded-lg font-bold transition-colors flex items-center gap-1 ${
            location.pathname === '/admin' 
              ? 'bg-white text-primary' 
              : 'bg-white/20 hover:bg-white text-white'
          }`}
        >
          <span className="material-symbols-outlined text-xs">dashboard</span>
          Admin Dashboard
        </Link>
      </div>
    </div>
  );
};
