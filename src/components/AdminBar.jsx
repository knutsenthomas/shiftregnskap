import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useContent } from '@/contexts/ContentContext';

export const AdminBar = () => {
  const { isEditMode, toggleEditMode, setIsEditMode } = useContent();
  const location = useLocation();

  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(() => {
    try {
      return localStorage.getItem('shift_admin_session') === 'true';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const checkAuth = () => {
      const isAuth = localStorage.getItem('shift_admin_session') === 'true';
      setIsAdminLoggedIn(isAuth);
    };

    // Also if on /admin, automatically set admin session
    if (location.pathname === '/admin') {
      localStorage.setItem('shift_admin_session', 'true');
      setIsAdminLoggedIn(true);
    } else {
      checkAuth();
    }
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem('shift_admin_session');
    setIsAdminLoggedIn(false);
    if (setIsEditMode) setIsEditMode(false);
  };

  // Only show AdminBar if admin session is active OR edit mode is turned on
  if (!isAdminLoggedIn && !isEditMode) {
    return null;
  }

  return (
    <div className="bg-primary text-white text-xs py-2 px-4 flex flex-wrap items-center justify-between z-50 border-b border-white/20 shadow-md">
      <div className="flex items-center gap-3">
        <span className="font-bold flex items-center gap-1">
          <span className="material-symbols-outlined text-sm text-amber-400">admin_panel_settings</span> Shift CMS Admin Mode
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
          {isEditMode ? 'Redigeringsmodus: PÅ' : 'Redigeringsmodus: AV'}
        </button>
      </div>

      <div className="flex items-center gap-3 mt-1 sm:mt-0">
        <span className="opacity-80 hidden md:inline">Endringer lagres automatisk</span>
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
        <button 
          onClick={handleLogout}
          className="px-2.5 py-1 rounded-lg bg-red-500/80 hover:bg-red-600 text-white font-bold transition-colors flex items-center gap-1 cursor-pointer"
          title="Logg ut av admin"
        >
          <span className="material-symbols-outlined text-xs">logout</span>
          Logg ut
        </button>
      </div>
    </div>
  );
};
