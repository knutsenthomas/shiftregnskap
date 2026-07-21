import React from 'react';
import { Link } from 'react-router-dom';
import { useSite } from '@/contexts/SiteContext';

export const Footer = () => {
  const { siteInfo } = useSite();

  return (
    <footer className="bg-surface-highest border-t border-surface-container text-on-surface">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 px-4 md:px-margin-desktop py-section-padding max-w-container-max mx-auto">
        {/* Brand Column */}
        <div className="space-y-4">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="block cursor-pointer">
            <img 
              src="https://lh3.googleusercontent.com/aida/AP1WRLuaXVoShBBa5_R1VKlJJ2GPNCKti8TjpOwAABadk3JvVna9EIDT1Bv1bTfj_WjN-Ej0zX8ZPzBsWvPzzu-6qwJhAkbMGIyyUL7QRr-YdgIsdgZJ1zU2wYV9Ez-Pq4Z7z0kls0veGq9zVaYywT1SvJNqBdmh8hch_PkfqXHXY3lyDkdnq6npTqAka4YnhTXmpAYktIuK8bYHbxWkWqQpEx3_5I4tOqV7qRyNPAZa9Lxs1oOALv4ltfWbWUE" 
              alt="SHIFT Regnskap Logo" 
              className="h-14 md:h-16 w-[180px] md:w-[220px] object-contain shrink-0"
              width="220"
              height="64"
            />
          </Link>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Din trygge og pålitelige partner for regnskap, lønn og rådgivning på Sørlandet.
          </p>
          <a 
            href={siteInfo?.facebookUrl || "https://www.facebook.com/profile.php?id=100087412625499"} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline hover:opacity-80 transition-opacity pt-1"
          >
            <svg className="w-5 h-5 fill-primary" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span>Følg oss på Facebook</span>
          </a>
        </div>

        {/* Links 1 */}
        <div className="space-y-3">
          <h4 className="font-bold text-primary text-sm uppercase tracking-wider">Tjenester</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/regnskap" className="text-on-surface-variant hover:text-primary transition-colors">Regnskapsføring</Link></li>
            <li><Link to="/lonn" className="text-on-surface-variant hover:text-primary transition-colors">Lønn & HR</Link></li>
            <li><Link to="/radgivning" className="text-on-surface-variant hover:text-primary transition-colors">Rådgivning</Link></li>
            <li><Link to="/system" className="text-on-surface-variant hover:text-primary transition-colors">Systemer (Tripletex/Fiken)</Link></li>
            <li><Link to="/priser" className="text-on-surface-variant hover:text-primary transition-colors">Priskalkulator</Link></li>
          </ul>
        </div>

        {/* Links 2 */}
        <div className="space-y-3">
          <h4 className="font-bold text-primary text-sm uppercase tracking-wider">Selskapet</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/om-oss" className="text-on-surface-variant hover:text-primary transition-colors">Om oss</Link></li>
            <li><Link to="/bransjer" className="text-on-surface-variant hover:text-primary transition-colors">Bransjer</Link></li>
            <li><Link to="/kundeportal" className="text-on-surface-variant hover:text-primary transition-colors">Kundeportal</Link></li>
            <li><Link to="/personvern" className="text-on-surface-variant hover:text-primary transition-colors">Personvernerklæring</Link></li>
            <li><Link to="/kontakt" className="text-on-surface-variant hover:text-primary transition-colors">Kontakt oss</Link></li>
          </ul>
        </div>

        {/* Office */}
        <div className="space-y-3">
          <h4 className="font-bold text-primary text-sm uppercase tracking-wider">Våre lokasjoner</h4>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            {siteInfo?.address || 'Elvebrinken 1, 4580 Lyngdal'}<br />
            Tlf: {siteInfo?.phone || '917 46 381'}<br />
            E-post: {siteInfo?.email || 'bm@shiftregnskap.no'}<br />
            Dekker: Lyngdal – Farsund – Vanse – Lista
          </p>
        </div>
      </div>

      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop py-6 border-t border-surface-container/60 text-center text-xs text-on-surface-variant">
        © {new Date().getFullYear()} {siteInfo?.altName || 'Shift Regnskap AS'}. Din lokale partner i Lyngdal, Farsund, Vanse og Lista.
      </div>
    </footer>
  );
};
