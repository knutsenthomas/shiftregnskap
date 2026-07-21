import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSite } from '@/contexts/SiteContext';
import { useContent } from '@/contexts/ContentContext';
import { EditableText } from '@/components/EditableText';

export const Contact = () => {
  const { siteInfo } = useSite();
  const { addMessage } = useContent();

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Regnskapsføring',
    message: '',
    consent: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addMessage({
      name: formData.name,
      company: formData.company,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message
    });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        service: 'Regnskapsføring',
        message: '',
        consent: false
      });
    }, 4000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Header Banner */}
      <section className="bg-primary/5 py-16">
        <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
          <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <EditableText pageKey="contact" fieldKey="heroBadge" defaultText="TA KONTAKT" />
          </span>
          <h1 className="font-headline text-4xl md:text-5xl text-primary font-bold mb-4">
            <EditableText pageKey="contact" fieldKey="heroTitle" defaultText="Vi er her for å hjelpe din bedrift" />
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">
            <EditableText pageKey="contact" fieldKey="heroDesc" defaultText="Vårt team i Lyngdal står klare til å bistå med alt innen regnskap, rådgivning og økonomistyring." />
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-section-padding max-w-container-max mx-auto px-4 md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 rounded-2xl flex items-start gap-4 hover:-translate-y-1 transition-transform">
              <div className="bg-primary p-3 rounded-xl text-white shadow-sm">
                <span className="material-symbols-outlined">call</span>
              </div>
              <div>
                <p className="text-xs text-on-surface-variant uppercase font-bold tracking-wider mb-1">Ring oss</p>
                <a href={`tel:${siteInfo?.phone?.replace(/\s/g, '')}`} className="font-headline text-xl text-primary font-bold hover:underline">
                  {siteInfo?.phone || '917 46 381'}
                </a>
                <p className="text-xs text-on-surface-variant mt-1">{siteInfo?.hours || 'Mandag – Fredag: 08:00 – 16:00'}</p>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl flex items-start gap-4 hover:-translate-y-1 transition-transform">
              <div className="bg-primary p-3 rounded-xl text-white shadow-sm">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <p className="text-xs text-on-surface-variant uppercase font-bold tracking-wider mb-1">Send e-post</p>
                <a href={`mailto:${siteInfo?.email}`} className="font-headline text-xl text-primary font-bold hover:underline">
                  {siteInfo?.email || 'bm@shiftregnskap.no'}
                </a>
                <p className="text-xs text-on-surface-variant mt-1">Vi svarer raskt på alle henvendelser</p>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl flex items-start gap-4 hover:-translate-y-1 transition-transform">
              <div className="bg-primary p-3 rounded-xl text-white shadow-sm">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div>
                <p className="text-xs text-on-surface-variant uppercase font-bold tracking-wider mb-1">Besøk oss</p>
                <p className="font-headline text-xl text-primary font-bold">
                  {siteInfo?.address || 'Elvebrinken 1'}
                </p>
                <p className="text-xs text-on-surface-variant">4580 Lyngdal, Norge</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-12 rounded-2xl border border-surface-highest shadow-sm">
              <h2 className="font-headline text-2xl font-bold text-primary mb-6">Send oss en melding</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase text-on-surface mb-2">Navn</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      placeholder="Ditt fulle navn"
                      className="w-full bg-surface-low border border-surface-highest rounded-xl p-3 text-sm focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-on-surface mb-2">Bedrift</label>
                    <input 
                      type="text" 
                      value={formData.company}
                      onChange={e => setFormData({...formData, company: e.target.value})}
                      placeholder="Bedriftsnavn (valgfritt)"
                      className="w-full bg-surface-low border border-surface-highest rounded-xl p-3 text-sm focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase text-on-surface mb-2">E-post</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      placeholder="Din e-postadresse"
                      className="w-full bg-surface-low border border-surface-highest rounded-xl p-3 text-sm focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-on-surface mb-2">Telefon</label>
                    <input 
                      type="tel" 
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      placeholder="Ditt telefonnummer"
                      className="w-full bg-surface-low border border-surface-highest rounded-xl p-3 text-sm focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-on-surface mb-2">Tjeneste</label>
                  <select 
                    value={formData.service}
                    onChange={e => setFormData({...formData, service: e.target.value})}
                    className="w-full bg-surface-low border border-surface-highest rounded-xl p-3 text-sm focus:outline-none focus:border-primary"
                  >
                    <option value="Regnskapsføring">Regnskapsføring</option>
                    <option value="Rådgivning">Rådgivning</option>
                    <option value="Lønn og personal">Lønn og personal</option>
                    <option value="Bedriftsetablering">Bedriftsetablering</option>
                    <option value="Annet">Annet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-on-surface mb-2">Melding</label>
                  <textarea 
                    rows={4}
                    required
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    placeholder="Hvordan kan vi hjelpe deg?"
                    className="w-full bg-surface-low border border-surface-highest rounded-xl p-3 text-sm focus:outline-none focus:border-primary resize-none"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <input 
                    type="checkbox" 
                    id="consent"
                    required
                    checked={formData.consent}
                    onChange={e => setFormData({...formData, consent: e.target.checked})}
                    className="rounded text-primary focus:ring-primary"
                  />
                  <label htmlFor="consent" className="text-xs text-on-surface-variant">
                    Jeg godtar at Shift Regnskap behandler mine data i henhold til personvernerklæringen.
                  </label>
                </div>

                <button 
                  type="submit" 
                  className={`w-full py-4 rounded-xl font-bold text-white transition-all ${
                    submitted ? 'bg-green-600' : 'bg-primary hover:bg-primary-dark'
                  }`}
                >
                  {submitted ? 'Takk! Meldingen er lagret og sendt til innboksen.' : <EditableText pageKey="contact" fieldKey="submitBtn" defaultText="Send melding" />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
