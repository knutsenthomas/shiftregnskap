import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSite } from '@/contexts/SiteContext';
import { useContent } from '@/contexts/ContentContext';
import { EditableText } from '@/components/EditableText';

export const Navbar = () => {
  const { siteInfo } = useSite();
  const { services } = useContent();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [tjenesterOpen, setTjenesterOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const isAdminSession = typeof window !== 'undefined' && localStorage.getItem('shift_admin_session') === 'true';
  const topClass = isAdminSession ? 'top-9 sm:top-8' : 'top-0';

  return (
    <header className={`fixed ${topClass} left-0 right-0 w-full z-50 transition-[height,background-color,top] duration-300 ${scrolled ? 'bg-surface/90 backdrop-blur-md shadow-sm h-16' : 'bg-surface/80 backdrop-blur-md h-20'}`}>
      <nav className="flex justify-between items-center px-4 md:px-margin-desktop h-full max-w-container-max mx-auto">
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3 py-1 cursor-pointer shrink-0">
          <img 
            src="https://lh3.googleusercontent.com/aida/AP1WRLuaXVoShBBa5_R1VKlJJ2GPNCKti8TjpOwAABadk3JvVna9EIDT1Bv1bTfj_WjN-Ej0zX8ZPzBsWvPzzu-6qwJhAkbMGIyyUL7QRr-YdgIsdgZJ1zU2wYV9Ez-Pq4Z7z0kls0veGq9zVaYywT1SvJNqBdmh8hch_PkfqXHXY3lyDkdnq6npTqAka4YnhTXmpAYktIuK8bYHbxWkWqQpEx3_5I4tOqV7qRyNPAZa9Lxs1oOALv4ltfWbWUE" 
            alt="SHIFT Regnskap Logo" 
            className="h-12 md:h-16 w-[160px] md:w-[220px] object-contain shrink-0"
            width="220"
            height="64"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-body text-sm md:text-base shrink-0">
          <Link 
            to="/" 
            className={`transition-colors py-1 border-b-2 ${isActive('/') ? 'text-primary font-bold border-primary' : 'text-on-surface-variant border-transparent hover:text-primary'}`}
          >
            Hjem
          </Link>

          <div className="relative group" onMouseEnter={() => setTjenesterOpen(true)} onMouseLeave={() => setTjenesterOpen(false)}>
            <button className="flex items-center gap-1 py-1 text-on-surface-variant hover:text-primary transition-colors cursor-pointer border-b-2 border-transparent">
              <span>Tjenester</span>
              <span className="material-symbols-outlined text-base w-4 h-4 flex items-center justify-center shrink-0">expand_more</span>
            </button>
            <div className={`absolute left-0 top-full mt-2 w-56 bg-white rounded-xl shadow-xl border border-surface-highest transition-all z-50 py-2 ${tjenesterOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
              {(services || []).map((s) => (
                <Link 
                  key={s.id} 
                  to={s.link} 
                  className="flex items-center gap-2.5 px-4 py-2.5 text-on-surface-variant hover:bg-primary-container/20 hover:text-primary transition-colors text-sm font-medium"
                >
                  <span className="material-symbols-outlined text-base text-primary shrink-0">{s.icon}</span>
                  <span>{s.title}</span>
                </Link>
              ))}
            </div>
          </div>

          <Link 
            to="/om-oss" 
            className={`transition-colors py-1 border-b-2 ${isActive('/om-oss') ? 'text-primary font-bold border-primary' : 'text-on-surface-variant border-transparent hover:text-primary'}`}
          >
            Om oss
          </Link>

          <Link 
            to="/priser" 
            className={`transition-colors py-1 border-b-2 ${isActive('/priser') ? 'text-primary font-bold border-primary' : 'text-on-surface-variant border-transparent hover:text-primary'}`}
          >
            Priser
          </Link>

          <Link 
            to="/kontakt" 
            className={`transition-colors py-1 border-b-2 ${isActive('/kontakt') ? 'text-primary font-bold border-primary' : 'text-on-surface-variant border-transparent hover:text-primary'}`}
          >
            Kontakt
          </Link>

          <Link to="/kontakt" className="bg-primary text-white px-5 py-2 rounded-lg font-bold hover:bg-primary-dark transition-colors shadow-sm shrink-0">
            <EditableText pageKey="navbar" fieldKey="ctaBtn" defaultText="Bli kunde" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-primary p-2 focus:outline-none shrink-0"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface border-b border-surface-highest px-6 py-6 space-y-4 shadow-lg animate-fadeIn">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-on-surface font-semibold">Hjem</Link>
          <div className="border-t border-surface-container py-2 space-y-2">
            <div className="text-xs uppercase tracking-wider text-on-surface-variant font-bold mb-1">Tjenester</div>
            {(services || []).map((s) => (
              <Link 
                key={s.id} 
                to={s.link} 
                onClick={() => setMobileMenuOpen(false)} 
                className="flex items-center gap-2 pl-3 py-1.5 text-on-surface-variant text-sm"
              >
                <span className="material-symbols-outlined text-sm text-primary">{s.icon}</span>
                <span>{s.title}</span>
              </Link>
            ))}
          </div>
          <Link to="/om-oss" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-on-surface font-semibold">Om oss</Link>
          <Link to="/priser" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-on-surface font-semibold">Priser</Link>
          <Link to="/kontakt" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-on-surface font-semibold">Kontakt</Link>
          <Link to="/kontakt" onClick={() => setMobileMenuOpen(false)} className="block w-full text-center bg-primary text-white py-3 rounded-lg font-bold">
            <EditableText pageKey="navbar" fieldKey="ctaBtn" defaultText="Bli kunde" />
          </Link>
        </div>
      )}
    </header>
  );
};
