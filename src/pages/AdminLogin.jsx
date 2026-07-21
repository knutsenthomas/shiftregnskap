import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const AdminLogin = ({ onLoginSuccess }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simple demo authentication check (acceptable for demo & client presentation)
    setTimeout(() => {
      if (email.trim().toLowerCase() === 'admin@shiftregnskap.no' && password === 'admin123') {
        localStorage.setItem('shift_admin_session', 'true');
        if (onLoginSuccess) onLoginSuccess();
        navigate('/admin');
      } else if (email.trim() !== '' && password.trim() !== '') {
        // Allow any credentials in demo mode if submitted, but validate input
        localStorage.setItem('shift_admin_session', 'true');
        if (onLoginSuccess) onLoginSuccess();
        navigate('/admin');
      } else {
        setError('Vennligst oppgi både e-post og passord.');
      }
      setLoading(false);
    }, 400);
  };

  return (
    <div className="min-h-screen bg-surface-low flex flex-col justify-center items-center px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-surface-highest text-on-surface"
      >
        {/* Header & Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block mb-6">
            <img 
              src="https://lh3.googleusercontent.com/aida/AP1WRLuaXVoShBBa5_R1VKlJJ2GPNCKti8TjpOwAABadk3JvVna9EIDT1Bv1bTfj_WjN-Ej0zX8ZPzBsWvPzzu-6qwJhAkbMGIyyUL7QRr-YdgIsdgZJ1zU2wYV9Ez-Pq4Z7z0kls0veGq9zVaYywT1SvJNqBdmh8hch_PkfqXHXY3lyDkdnq6npTqAka4YnhTXmpAYktIuK8bYHbxWkWqQpEx3_5I4tOqV7qRyNPAZa9Lxs1oOALv4ltfWbWUE" 
              alt="SHIFT Regnskap Logo" 
              className="h-14 w-auto object-contain mx-auto"
            />
          </Link>
          <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <span className="material-symbols-outlined text-sm">lock</span>
            Admin Innlogging
          </div>
          <h1 className="font-headline text-2xl font-bold text-primary">Shift CMS Dashboard</h1>
          <p className="text-xs text-on-surface-variant mt-1">Logg inn for å administrere nettside, innboks og avtaler.</p>
        </div>

        {/* Demo Credentials Tip Box */}
        <div className="mb-6 p-4 rounded-2xl bg-primary-container/20 border border-primary/20 text-xs text-primary">
          <p className="font-bold mb-1 flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">info</span> Demopålogging:
          </p>
          <p className="opacity-90">E-post: <code className="font-mono bg-white px-1.5 py-0.5 rounded border border-primary/20">admin@shiftregnskap.no</code></p>
          <p className="opacity-90 mt-0.5">Passord: <code className="font-mono bg-white px-1.5 py-0.5 rounded border border-primary/20">admin123</code></p>
        </div>

        {/* Error Feedback */}
        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">warning</span>
            <span>{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-on-surface">E-postadresse</label>
            <div className="relative">
              <input 
                type="email" 
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="admin@shiftregnskap.no"
                className="w-full bg-surface-low border border-surface-highest rounded-xl p-3.5 pl-11 text-sm focus:outline-none focus:border-primary text-on-surface"
              />
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl">
                mail
              </span>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-on-surface">Passord</label>
            <div className="relative">
              <input 
                type="password" 
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-surface-low border border-surface-highest rounded-xl p-3.5 pl-11 text-sm focus:outline-none focus:border-primary text-on-surface"
              />
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl">
                lock
              </span>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white py-3.5 rounded-xl font-bold hover:bg-primary-dark transition-colors shadow-lg cursor-pointer flex items-center justify-center gap-2"
          >
            {loading ? (
              <span className="material-symbols-outlined text-xl animate-spin">progress_activity</span>
            ) : (
              <>
                <span className="material-symbols-outlined text-xl">login</span>
                <span>Logg inn på kontrollpanel</span>
              </>
            )}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-surface-highest text-center text-xs text-on-surface-variant">
          <Link to="/" className="hover:text-primary transition-colors inline-flex items-center gap-1">
            <span className="material-symbols-outlined text-xs">arrow_back</span>
            Tilbake til Shift Regnskap hovedside
          </Link>
        </div>
      </motion.div>
    </div>
  );
};
