import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const CookieConsent = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('shift_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = (type) => {
    localStorage.setItem('shift_cookie_consent', type);
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:max-w-md z-50 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-surface-highest text-on-surface animate-fadeIn">
      <div className="flex items-start gap-3 mb-3">
        <span className="material-symbols-outlined text-primary text-2xl">cookie</span>
        <div>
          <h3 className="font-bold text-base text-primary">Vi bruker informasjonskapsler</h3>
          <p className="text-xs text-on-surface-variant leading-relaxed mt-1">
            Shift Regnskap bruker cookies for å gi deg en bedre brukeropplevelse, analysere trafikk og forbedre våre tjenester i henhold til GDPR.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-2 pt-2 border-t border-surface-highest">
        <button
          onClick={() => handleAccept('all')}
          className="w-full sm:flex-1 bg-primary text-white py-2.5 px-4 rounded-xl text-xs font-bold hover:bg-primary-dark transition-colors cursor-pointer"
        >
          Godta alle
        </button>
        <button
          onClick={() => handleAccept('necessary')}
          className="w-full sm:flex-1 bg-surface-low text-on-surface py-2.5 px-4 rounded-xl text-xs font-bold hover:bg-surface-highest transition-colors cursor-pointer"
        >
          Kun nødvendige
        </button>
        <Link
          to="/personvern"
          onClick={() => setShow(false)}
          className="text-xs text-primary underline font-medium hover:text-primary-dark px-2"
        >
          Les mer
        </Link>
      </div>
    </div>
  );
};
