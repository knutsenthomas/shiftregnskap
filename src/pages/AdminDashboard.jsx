import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSite } from '@/contexts/SiteContext';
import { useContent } from '@/contexts/ContentContext';

export const AdminDashboard = () => {
  useEffect(() => {
    try {
      localStorage.setItem('shift_admin_session', 'true');
    } catch (e) { console.error(e); }
  }, []);
  const { siteInfo, updateAllSiteInfo } = useSite();
  const { 
    messages, 
    deleteMessage, 
    toggleMessageRead, 
    appointments, 
    addAppointment, 
    deleteAppointment,
    services,
    addService,
    deleteService,
    updateService,
    content,
    updateContent,
    isEditMode,
    toggleEditMode
  } = useContent();

  const [activeTab, setActiveTab] = useState('inbox');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // New Service Form State
  const [newServiceForm, setNewServiceForm] = useState({
    title: '',
    desc: '',
    icon: 'star',
    link: '/kontakt'
  });

  // Contact Info Form State
  const [contactForm, setContactForm] = useState({
    phone: siteInfo?.phone || '',
    email: siteInfo?.email || '',
    address: siteInfo?.address || '',
    hours: siteInfo?.hours || '',
    locationsStr: (siteInfo?.locations || []).join(', ')
  });
  const [contactSaved, setContactSaved] = useState(false);

  // New Appointment Form State
  const [newApt, setNewApt] = useState({
    title: '',
    client: '',
    date: '',
    time: '',
    type: 'Fysisk i Lyngdal'
  });

  const handleAddService = (e) => {
    e.preventDefault();
    if (!newServiceForm.title) return;
    const slug = newServiceForm.title.toLowerCase().trim().replace(/æ/g, 'ae').replace(/ø/g, 'o').replace(/å/g, 'a').replace(/[^a-z0-9]+/g, '-');
    const autoLink = newServiceForm.link && newServiceForm.link.trim() !== '' && newServiceForm.link !== '/kontakt' 
      ? newServiceForm.link 
      : `/tjeneste/${slug}`;

    addService({
      ...newServiceForm,
      link: autoLink
    });
    setNewServiceForm({ title: '', desc: '', icon: 'star', link: '' });
  };

  const handleSaveContact = (e) => {
    e.preventDefault();
    updateAllSiteInfo({
      phone: contactForm.phone,
      email: contactForm.email,
      address: contactForm.address,
      hours: contactForm.hours,
      locations: contactForm.locationsStr.split(',').map(s => s.trim()).filter(Boolean)
    });
    setContactSaved(true);
    setTimeout(() => setContactSaved(false), 3000);
  };

  const handleAddApt = (e) => {
    e.preventDefault();
    if (!newApt.title || !newApt.date) return;
    addAppointment(newApt);
    setNewApt({ title: '', client: '', date: '', time: '', type: 'Fysisk i Lyngdal' });
  };

  const unreadCount = messages.filter(m => !m.read).length;

  const menuItems = [
    { id: 'overview', label: 'Overblikk', icon: 'dashboard' },
    { id: 'services', label: 'Tjenester', icon: 'room_service', count: (services || []).length },
    { id: 'inbox', label: 'Innboks', icon: 'mail', badge: unreadCount },
    { id: 'calendar', label: 'Kalender', icon: 'calendar_month', count: appointments.length },
    { id: 'contact', label: 'Kontaktinfo', icon: 'contact_phone' },
    { id: 'content', label: 'Sideinnhold (CMS)', icon: 'article' },
  ];

  return (
    <div className="flex h-screen w-full bg-surface-low overflow-hidden text-on-surface flex-col md:flex-row relative">
      {/* Mobile Backdrop Overlay */}
      {mobileSidebarOpen && (
        <div 
          onClick={() => setMobileSidebarOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 md:hidden animate-fadeIn"
        />
      )}

      {/* 100vh Sidebar Navigation */}
      <aside className={`fixed inset-y-0 left-0 w-64 md:w-72 bg-primary text-white flex flex-col h-full shrink-0 shadow-2xl z-50 border-r border-white/10 transition-transform duration-300 md:relative md:translate-x-0 ${
        mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}>
        {/* Logo at Top */}
        <div className="p-6 border-b border-white/10 bg-primary-dark/40 flex items-center justify-between">
          <Link to="/" className="block">
            <img 
              src="https://lh3.googleusercontent.com/aida/AP1WRLuaXVoShBBa5_R1VKlJJ2GPNCKti8TjpOwAABadk3JvVna9EIDT1Bv1bTfj_WjN-Ej0zX8ZPzBsWvPzzu-6qwJhAkbMGIyyUL7QRr-YdgIsdgZJ1zU2wYV9Ez-Pq4Z7z0kls0veGq9zVaYywT1SvJNqBdmh8hch_PkfqXHXY3lyDkdnq6npTqAka4YnhTXmpAYktIuK8bYHbxWkWqQpEx3_5I4tOqV7qRyNPAZa9Lxs1oOALv4ltfWbWUE" 
              alt="SHIFT Regnskap Logo" 
              className="h-10 w-auto object-contain brightness-0 invert" 
            />
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded font-bold uppercase tracking-wider">Admin</span>
            <button 
              onClick={() => setMobileSidebarOpen(false)}
              className="md:hidden text-white/80 hover:text-white p-1"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>
        </div>

        {/* Sidebar Menu Items */}
        <nav className="flex-1 py-6 px-4 space-y-1.5 overflow-y-auto">
          <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest px-3 mb-2">Hovedmeny</div>
          
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setMobileSidebarOpen(false);
              }}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-sm transition-all cursor-pointer ${
                activeTab === item.id 
                  ? 'bg-white text-primary shadow-lg font-bold' 
                  : 'text-white/80 hover:bg-white/10 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-xl">{item.icon}</span>
                <span>{item.label}</span>
              </div>
              
              {item.badge !== undefined && item.badge > 0 && (
                <span className="bg-amber-500 text-white text-xs font-bold px-2 py-0.5 rounded-full animate-pulse">
                  {item.badge}
                </span>
              )}

              {item.count !== undefined && item.count > 0 && (
                <span className="bg-white/20 text-white text-xs px-2 py-0.5 rounded-full font-bold">
                  {item.count}
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* Bottom Sidebar Action Footer */}
        <div className="p-4 border-t border-white/10 bg-primary-dark/30 space-y-2">
          <button
            onClick={toggleEditMode}
            className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              isEditMode 
                ? 'bg-green-500 text-white shadow-inner animate-pulse' 
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            <span className="material-symbols-outlined text-sm">
              {isEditMode ? 'edit_note' : 'edit'}
            </span>
            {isEditMode ? 'Live Redigering: PÅ' : 'Slå på Live Redigering'}
          </button>

          <Link
            to="/"
            className="w-full py-2 px-3 rounded-xl text-xs text-white/80 hover:text-white hover:bg-white/10 flex items-center justify-center gap-2 transition-colors"
          >
            <span className="material-symbols-outlined text-sm">open_in_new</span>
            Gå til Hovedsiden
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden w-full">
        {/* Top Header Bar */}
        <header className="bg-white border-b border-surface-highest px-4 md:px-8 py-4 flex items-center justify-between shrink-0 shadow-xs">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setMobileSidebarOpen(true)}
              className="md:hidden text-primary p-2 rounded-lg bg-surface-low border border-surface-highest"
              aria-label="Åpne adminmeny"
            >
              <span className="material-symbols-outlined text-2xl">menu</span>
            </button>
            <div>
              <h1 className="font-headline text-xl md:text-2xl font-bold text-primary capitalize">
                {menuItems.find(m => m.id === activeTab)?.label || 'Dashboard'}
              </h1>
              <p className="text-xs text-on-surface-variant hidden sm:block">Administrer din webapplikasjon, meldinger og innhold.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="bg-green-100 text-green-800 font-bold px-3 py-1 rounded-full flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span> Live System Aktivt
            </span>
          </div>
        </header>

        {/* Main Scrollable Body */}
        <main className="flex-1 overflow-y-auto p-8">
          {/* Tab 1: Overview */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-surface-highest shadow-sm flex items-center justify-between">
                  <div>
                    <p className="text-xs text-on-surface-variant uppercase font-bold tracking-wider mb-1">Tjenester</p>
                    <p className="text-3xl font-extrabold text-primary">{(services || []).length}</p>
                  </div>
                  <span className="material-symbols-outlined text-4xl text-primary bg-primary/10 p-3 rounded-2xl">room_service</span>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-surface-highest shadow-sm flex items-center justify-between">
                  <div>
                    <p className="text-xs text-on-surface-variant uppercase font-bold tracking-wider mb-1">Uleste Meldinger</p>
                    <p className="text-3xl font-extrabold text-primary">{unreadCount}</p>
                  </div>
                  <span className="material-symbols-outlined text-4xl text-primary bg-primary/10 p-3 rounded-2xl">mail</span>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-surface-highest shadow-sm flex items-center justify-between">
                  <div>
                    <p className="text-xs text-on-surface-variant uppercase font-bold tracking-wider mb-1">Planlagte Avtaler</p>
                    <p className="text-3xl font-extrabold text-primary">{appointments.length}</p>
                  </div>
                  <span className="material-symbols-outlined text-4xl text-primary bg-primary/10 p-3 rounded-2xl">calendar_month</span>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-surface-highest shadow-sm flex items-center justify-between">
                  <div>
                    <p className="text-xs text-on-surface-variant uppercase font-bold tracking-wider mb-1">Totalt Meldinger</p>
                    <p className="text-3xl font-extrabold text-primary">{messages.length}</p>
                  </div>
                  <span className="material-symbols-outlined text-4xl text-primary bg-primary/10 p-3 rounded-2xl">inbox</span>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-surface-highest shadow-sm">
                <h3 className="font-bold text-lg text-primary mb-4">Hurtigguider & Snarveier</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button 
                    onClick={() => setActiveTab('services')}
                    className="p-4 rounded-xl border border-surface-highest hover:border-primary text-left transition-all bg-surface-low"
                  >
                    <span className="material-symbols-outlined text-primary mb-2">add_task</span>
                    <h4 className="font-bold text-primary text-sm">Legg til ny tjeneste</h4>
                    <p className="text-xs text-on-surface-variant">Opprett nye tilbudte tjenester som publiseres direkte i menyen.</p>
                  </button>

                  <button 
                    onClick={() => setActiveTab('inbox')}
                    className="p-4 rounded-xl border border-surface-highest hover:border-primary text-left transition-all bg-surface-low"
                  >
                    <span className="material-symbols-outlined text-primary mb-2">forward_to_inbox</span>
                    <h4 className="font-bold text-primary text-sm">Behandle innkomne henvendelser</h4>
                    <p className="text-xs text-on-surface-variant">Svar på kundehenvendelser fra kontaktskjemaet.</p>
                  </button>

                  <button 
                    onClick={() => setActiveTab('content')}
                    className="p-4 rounded-xl border border-surface-highest hover:border-primary text-left transition-all bg-surface-low"
                  >
                    <span className="material-symbols-outlined text-primary mb-2">edit_document</span>
                    <h4 className="font-bold text-primary text-sm">Rediger nettsidens tekster</h4>
                    <p className="text-xs text-on-surface-variant">Endre overskrifter, bilder og informasjon.</p>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Services Manager */}
          {activeTab === 'services' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Existing Services List */}
              <div className="lg:col-span-7 space-y-4">
                <h2 className="font-headline text-xl font-bold text-primary mb-4">Aktive Tjenester ({(services || []).length})</h2>
                {(services || []).map(srv => (
                  <div key={srv.id} className="bg-white p-6 rounded-2xl border border-surface-highest shadow-sm space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined text-xl">{srv.icon || 'star'}</span>
                        </div>
                        <div>
                          <input 
                            type="text"
                            value={srv.title}
                            onChange={(e) => updateService(srv.id, { title: e.target.value })}
                            className="font-bold text-base text-primary bg-transparent border-b border-transparent hover:border-surface-highest focus:border-primary focus:outline-none"
                          />
                          <p className="text-xs text-on-surface-variant">Lenke: {srv.link}</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => deleteService(srv.id)}
                        className="p-2 text-red-500 hover:text-red-700 text-xs font-semibold flex items-center gap-1"
                      >
                        <span className="material-symbols-outlined text-sm">delete</span> Slett
                      </button>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-on-surface-variant uppercase mb-1">Beskrivelse</label>
                      <textarea 
                        rows={2}
                        value={srv.desc}
                        onChange={(e) => updateService(srv.id, { desc: e.target.value })}
                        className="w-full bg-surface-low border border-surface-highest rounded-xl p-2.5 text-xs text-on-surface focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Add New Service Form */}
              <div className="lg:col-span-5">
                <div className="bg-white p-6 rounded-2xl border border-surface-highest shadow-sm">
                  <h3 className="font-bold text-lg text-primary mb-4">Legg til ny tjeneste</h3>
                  <form onSubmit={handleAddService} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold uppercase mb-1">Tjenestenavn / Tittel</label>
                      <input 
                        type="text"
                        required
                        value={newServiceForm.title}
                        onChange={e => setNewServiceForm({...newServiceForm, title: e.target.value})}
                        placeholder="F.eks. Skatt & Årsoppgjør"
                        className="w-full bg-surface-low border border-surface-highest rounded-xl p-3 text-sm focus:outline-none focus:border-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase mb-1">Kort Beskrivelse</label>
                      <textarea 
                        rows={3}
                        required
                        value={newServiceForm.desc}
                        onChange={e => setNewServiceForm({...newServiceForm, desc: e.target.value})}
                        placeholder="Forklaring av tjenesten..."
                        className="w-full bg-surface-low border border-surface-highest rounded-xl p-3 text-sm focus:outline-none focus:border-primary resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase mb-1">Ikon (Material Symbol)</label>
                      <input 
                        type="text"
                        value={newServiceForm.icon}
                        onChange={e => setNewServiceForm({...newServiceForm, icon: e.target.value})}
                        placeholder="F.eks. calculate, receipts, verified"
                        className="w-full bg-surface-low border border-surface-highest rounded-xl p-3 text-sm focus:outline-none focus:border-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase mb-1">Lenke / Målside</label>
                      <input 
                        type="text"
                        value={newServiceForm.link}
                        onChange={e => setNewServiceForm({...newServiceForm, link: e.target.value})}
                        placeholder="/kontakt eller /regnskap"
                        className="w-full bg-surface-low border border-surface-highest rounded-xl p-3 text-sm focus:outline-none focus:border-primary"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-primary text-white py-3.5 rounded-xl font-bold hover:bg-primary-dark shadow-md"
                    >
                      Opprett tjeneste
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Inbox */}
          {activeTab === 'inbox' && (
            <div className="space-y-4">
              <h2 className="font-headline text-xl font-bold text-primary mb-4">Innkomne henvendelser ({messages.length})</h2>
              {messages.length === 0 ? (
                <div className="bg-white p-12 rounded-2xl text-center text-on-surface-variant border border-surface-highest">
                  <span className="material-symbols-outlined text-4xl mb-2 text-surface-highest">inbox</span>
                  <p>Ingen meldinger i innboksen for øyeblikket.</p>
                </div>
              ) : (
                messages.map(msg => (
                  <div 
                    key={msg.id}
                    className={`p-6 rounded-2xl border transition-all ${
                      msg.read 
                        ? 'bg-white border-surface-highest opacity-90' 
                        : 'bg-white border-primary shadow-md'
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3 pb-3 border-b border-surface-container">
                      <div className="flex items-center gap-3">
                        <span className={`w-3 h-3 rounded-full ${msg.read ? 'bg-surface-highest' : 'bg-green-500'}`} />
                        <div>
                          <h3 className="font-bold text-base text-primary">{msg.name}</h3>
                          <p className="text-xs text-on-surface-variant">{msg.company || 'Privatperson'} • <span className="font-semibold text-primary">{msg.service}</span></p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-xs text-on-surface-variant">
                        <span>{msg.date}</span>
                        <div className="flex items-center gap-2">
                          <button 
                            onClick={() => toggleMessageRead(msg.id)}
                            className="px-3 py-1 bg-surface-low rounded-lg hover:bg-surface-highest font-semibold text-primary"
                          >
                            {msg.read ? 'Markér som ulest' : 'Markér som lest'}
                          </button>
                          <a 
                            href={`mailto:${msg.email}?subject=Vedrørende din henvendelse til Shift Regnskap`}
                            className="px-3 py-1 bg-primary text-white rounded-lg hover:bg-primary-dark font-semibold"
                          >
                            Svar på e-post
                          </a>
                          <button 
                            onClick={() => deleteMessage(msg.id)}
                            className="p-1 text-red-500 hover:text-red-700"
                            aria-label="Slett"
                          >
                            <span className="material-symbols-outlined text-sm">delete</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-on-surface leading-relaxed mb-3">{msg.message}</p>
                    <div className="flex flex-wrap gap-4 text-xs text-on-surface-variant pt-2 border-t border-surface-low">
                      {msg.email && <span>📧 {msg.email}</span>}
                      {msg.phone && <span>📞 {msg.phone}</span>}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* Tab 4: Calendar */}
          {activeTab === 'calendar' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7 space-y-4">
                <h2 className="font-headline text-xl font-bold text-primary mb-4">Kommende avtaler</h2>
                {appointments.length === 0 ? (
                  <div className="bg-white p-12 rounded-2xl text-center text-on-surface-variant border border-surface-highest">
                    <p>Ingen planlagte avtaler i kalenderen.</p>
                  </div>
                ) : (
                  appointments.map(apt => (
                    <div key={apt.id} className="bg-white p-6 rounded-2xl border border-surface-highest shadow-sm flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-xl text-primary text-center min-w-[70px]">
                          <div className="text-xs font-bold uppercase">{apt.date}</div>
                          <div className="text-lg font-extrabold">{apt.time}</div>
                        </div>
                        <div>
                          <h3 className="font-bold text-base text-primary">{apt.title}</h3>
                          <p className="text-xs text-on-surface-variant">Klient: {apt.client} • Type: {apt.type}</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => deleteAppointment(apt.id)}
                        className="p-2 text-red-500 hover:text-red-700"
                      >
                        <span className="material-symbols-outlined text-sm">delete</span>
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* Add Appointment */}
              <div className="lg:col-span-5">
                <div className="bg-white p-6 rounded-2xl border border-surface-highest shadow-sm">
                  <h3 className="font-bold text-lg text-primary mb-4">Legg til ny avtale</h3>
                  <form onSubmit={handleAddApt} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold uppercase mb-1">Tittel / Tema</label>
                      <input 
                        type="text"
                        required
                        value={newApt.title}
                        onChange={e => setNewApt({...newApt, title: e.target.value})}
                        placeholder="F.eks. Årsoppgjørsmøte"
                        className="w-full bg-surface-low border border-surface-highest rounded-xl p-3 text-sm focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase mb-1">Klient / Kontakt</label>
                      <input 
                        type="text"
                        value={newApt.client}
                        onChange={e => setNewApt({...newApt, client: e.target.value})}
                        placeholder="Kundenavn"
                        className="w-full bg-surface-low border border-surface-highest rounded-xl p-3 text-sm focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase mb-1">Dato</label>
                        <input 
                          type="date"
                          required
                          value={newApt.date}
                          onChange={e => setNewApt({...newApt, date: e.target.value})}
                          className="w-full bg-surface-low border border-surface-highest rounded-xl p-3 text-sm focus:outline-none focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase mb-1">Klokkeslett</label>
                        <input 
                          type="time"
                          value={newApt.time}
                          onChange={e => setNewApt({...newApt, time: e.target.value})}
                          className="w-full bg-surface-low border border-surface-highest rounded-xl p-3 text-sm focus:outline-none focus:border-primary"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase mb-1">Møtetype</label>
                      <div className="relative">
                        <select
                          value={newApt.type}
                          onChange={e => setNewApt({...newApt, type: e.target.value})}
                          className="w-full bg-surface-low border border-surface-highest rounded-xl p-3 pr-10 text-sm focus:outline-none focus:border-primary appearance-none cursor-pointer text-on-surface"
                        >
                          <option value="Fysisk i Lyngdal">Fysisk i Lyngdal</option>
                          <option value="Fysisk i Farsund">Fysisk i Farsund</option>
                          <option value="Teams / Digitalt">Teams / Digitalt</option>
                          <option value="Telefonmøte">Telefonmøte</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-xl">
                          expand_more
                        </span>
                      </div>
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary-dark shadow-md"
                    >
                      Legg til avtale
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}

          {/* Tab 5: Contact Info */}
          {activeTab === 'contact' && (
            <div className="bg-white p-8 rounded-2xl border border-surface-highest shadow-sm max-w-2xl">
              <h2 className="font-headline text-xl font-bold text-primary mb-6">Rediger Bedriftens Kontaktinformasjon</h2>
              
              <form onSubmit={handleSaveContact} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase mb-1">Telefonnummer</label>
                  <input 
                    type="text"
                    value={contactForm.phone}
                    onChange={e => setContactForm({...contactForm, phone: e.target.value})}
                    className="w-full bg-surface-low border border-surface-highest rounded-xl p-3 text-sm focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase mb-1">E-postadresse</label>
                  <input 
                    type="email"
                    value={contactForm.email}
                    onChange={e => setContactForm({...contactForm, email: e.target.value})}
                    className="w-full bg-surface-low border border-surface-highest rounded-xl p-3 text-sm focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase mb-1">Adresse</label>
                  <input 
                    type="text"
                    value={contactForm.address}
                    onChange={e => setContactForm({...contactForm, address: e.target.value})}
                    className="w-full bg-surface-low border border-surface-highest rounded-xl p-3 text-sm focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase mb-1">Åpningstider</label>
                  <input 
                    type="text"
                    value={contactForm.hours}
                    onChange={e => setContactForm({...contactForm, hours: e.target.value})}
                    className="w-full bg-surface-low border border-surface-highest rounded-xl p-3 text-sm focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase mb-1">Dekningsområder (kommaseparert)</label>
                  <input 
                    type="text"
                    value={contactForm.locationsStr}
                    onChange={e => setContactForm({...contactForm, locationsStr: e.target.value})}
                    className="w-full bg-surface-low border border-surface-highest rounded-xl p-3 text-sm focus:outline-none focus:border-primary"
                  />
                </div>

                <button 
                  type="submit"
                  className={`w-full py-3.5 rounded-xl font-bold text-white transition-all ${
                    contactSaved ? 'bg-green-600' : 'bg-primary hover:bg-primary-dark'
                  }`}
                >
                  {contactSaved ? 'Lagret!' : 'Lagre kontaktinformasjon'}
                </button>
              </form>
            </div>
          )}

          {/* Tab 6: CMS Page Content */}
          {activeTab === 'content' && (
            <div className="space-y-6">
              <h2 className="font-headline text-xl font-bold text-primary mb-2">Rediger Tekster for Alle Sider</h2>
              <p className="text-sm text-on-surface-variant mb-6">Endre overskrifter og tekster sentralt her, eller slå på direkte sideredigering øverst for å redigere live på nettsiden.</p>

              {Object.keys(content).map(pageKey => (
                <div key={pageKey} className="bg-white p-6 rounded-2xl border border-surface-highest shadow-sm">
                  <h3 className="font-bold text-lg text-primary uppercase tracking-wider mb-4 border-b border-surface-highest pb-2">
                    Side: {pageKey.toUpperCase()}
                  </h3>

                  <div className="space-y-4">
                    {Object.keys(content[pageKey]).map(fieldKey => (
                      <div key={fieldKey} className="grid grid-cols-1 md:grid-cols-4 gap-2 items-center">
                        <label className="text-xs font-bold text-on-surface-variant md:col-span-1">{fieldKey}</label>
                        {fieldKey.toLowerCase().includes('desc') || fieldKey.toLowerCase().includes('quote') ? (
                          <textarea
                            rows={2}
                            value={content[pageKey][fieldKey]}
                            onChange={e => updateContent(pageKey, fieldKey, e.target.value)}
                            className="md:col-span-3 bg-surface-low border border-surface-highest rounded-xl p-2.5 text-xs text-on-surface focus:outline-none focus:border-primary"
                          />
                        ) : (
                          <input
                            type="text"
                            value={content[pageKey][fieldKey]}
                            onChange={e => updateContent(pageKey, fieldKey, e.target.value)}
                            className="md:col-span-3 bg-surface-low border border-surface-highest rounded-xl p-2.5 text-xs text-on-surface focus:outline-none focus:border-primary"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
