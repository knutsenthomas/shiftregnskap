import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EditableText } from '@/components/EditableText';
import { EditableImage } from '@/components/EditableImage';

export const Payroll = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <section className="relative py-section-padding overflow-hidden">
        <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-primary-container/40 text-primary px-3 py-1 rounded-full text-xs font-bold mb-6">
              <EditableText pageKey="payroll" fieldKey="heroBadge" defaultText="LØNN & HR" />
            </span>
            <h1 className="font-headline text-4xl md:text-5xl text-primary font-bold mb-6 leading-tight">
              <EditableText pageKey="payroll" fieldKey="heroTitle" defaultText="Trygg og enkel lønnskjøring" />
            </h1>
            <p className="text-on-surface-variant text-lg mb-8 max-w-lg leading-relaxed">
              <EditableText pageKey="payroll" fieldKey="heroDesc" defaultText="Vi tar hånd om alt fra A-meldinger til feriepengeoppgjør, slik at dine ansatte får riktig lønn til rett tid." />
            </p>
            <div className="flex gap-4">
              <Link to="/kontakt" className="bg-primary text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:-translate-y-0.5 transition-all">
                <EditableText pageKey="payroll" fieldKey="btn1" defaultText="Kontakt oss om lønn" />
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <EditableImage 
                pageKey="payroll"
                fieldKey="heroImage"
                defaultSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
                alt="Lønn og HR"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-section-padding bg-surface-low">
        <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-4xl text-primary font-bold mb-4">
              <EditableText pageKey="payroll" fieldKey="whyTitle" defaultText="Hvorfor outsource lønn til oss?" />
            </h2>
            <p className="text-on-surface-variant max-w-xl mx-auto">
              <EditableText pageKey="payroll" fieldKey="whyDesc" defaultText="Lønn er et fagfelt med stadige endringer i regler og satser. Ved å sette bort lønnsarbeidet minimerer du risiko og sparer verdifull tid." />
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-surface-highest">
              <div className="text-primary mb-6"><span className="material-symbols-outlined text-4xl">payments</span></div>
              <h3 className="font-headline text-xl font-bold mb-3 text-primary">
                <EditableText pageKey="payroll" fieldKey="card1Title" defaultText="Automatisert A-melding" />
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                <EditableText pageKey="payroll" fieldKey="card1Desc" defaultText="Vi oppfyller alle offentlige krav og rapporteringsfrister til myndighetene." />
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-surface-highest">
              <div className="text-primary mb-6"><span className="material-symbols-outlined text-4xl">event_available</span></div>
              <h3 className="font-headline text-xl font-bold mb-3 text-primary">
                <EditableText pageKey="payroll" fieldKey="card2Title" defaultText="Feriepenger og sykepenger" />
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                <EditableText pageKey="payroll" fieldKey="card2Desc" defaultText="Korrekt beregning og håndtering av alle ytelser og refusjoner fra NAV." />
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-surface-highest">
              <div className="text-primary mb-6"><span className="material-symbols-outlined text-4xl">smartphone</span></div>
              <h3 className="font-headline text-xl font-bold mb-3 text-primary">
                <EditableText pageKey="payroll" fieldKey="card3Title" defaultText="Lønnslipp direkte i app" />
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                <EditableText pageKey="payroll" fieldKey="card3Desc" defaultText="Ansatte får tilgang til sine lønnsslipper digitalt via sikre apper." />
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
