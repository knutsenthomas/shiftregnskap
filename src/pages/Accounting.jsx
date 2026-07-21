import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EditableText } from '@/components/EditableText';
import { EditableImage } from '@/components/EditableImage';

export const Accounting = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="relative py-section-padding overflow-hidden">
        <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-primary-container/40 text-primary px-3 py-1 rounded-full text-xs font-bold mb-6">
              <EditableText pageKey="accounting" fieldKey="heroBadge" defaultText="PROFESJONELL BOKFØRING" />
            </span>
            <h1 className="font-headline text-4xl md:text-5xl text-primary font-bold mb-6 leading-tight">
              <EditableText pageKey="accounting" fieldKey="heroTitle" defaultText="Regnskap som gir deg oversikt og vekst" />
            </h1>
            <p className="text-on-surface-variant text-lg mb-8 max-w-lg leading-relaxed">
              <EditableText pageKey="accounting" fieldKey="heroDesc" defaultText="Vi tar hånd om tallene slik at du kan fokusere på det du er best til. Med lokal ekspertise og moderne digitale verktøy er ditt regnskap alltid i trygge hender." />
            </p>
            <div className="flex gap-4">
              <Link to="/kontakt" className="bg-primary text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:-translate-y-0.5 transition-all">
                <EditableText pageKey="accounting" fieldKey="btn1" defaultText="Få et tilbud" />
              </Link>
              <Link to="/priser" className="border border-primary text-primary px-8 py-3 rounded-xl font-bold hover:bg-primary-container/20 transition-all">
                <EditableText pageKey="accounting" fieldKey="btn2" defaultText="Se våre priser" />
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <EditableImage 
                pageKey="accounting"
                fieldKey="heroImage"
                defaultSrc="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80"
                alt="Regnskapsføring i praksis"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-section-padding bg-surface-low">
        <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-4xl text-primary font-bold mb-4">
              <EditableText pageKey="accounting" fieldKey="coreTitle" defaultText="Våre kjerneområder" />
            </h2>
            <p className="text-on-surface-variant max-w-xl mx-auto">
              <EditableText pageKey="accounting" fieldKey="coreDesc" defaultText="Vi tilbyr skreddersydde løsninger tilpasset din bedrifts behov. Fra daglig bokføring til strategisk rådgivning." />
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Bokføring */}
            <div className="md:col-span-8 bg-white p-8 rounded-2xl shadow-sm border border-surface-highest flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined">receipt_long</span>
                </div>
                <h3 className="font-headline text-2xl font-bold text-primary mb-4">
                  <EditableText pageKey="accounting" fieldKey="card1Title" defaultText="Løpende bokføring" />
                </h3>
                <p className="text-on-surface-variant leading-relaxed mb-6">
                  <EditableText pageKey="accounting" fieldKey="card1Desc" defaultText="Nøyaktig og kontinuerlig registrering av bilag for full kontroll på økonomisk status." />
                </p>
              </div>
            </div>

            {/* MVA */}
            <div className="md:col-span-4 bg-white p-8 rounded-2xl shadow-sm border border-surface-highest flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined">description</span>
                </div>
                <h3 className="font-headline text-2xl font-bold text-primary mb-4">
                  <EditableText pageKey="accounting" fieldKey="card2Title" defaultText="MVA-rapportering" />
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                  <EditableText pageKey="accounting" fieldKey="card2Desc" defaultText="Vi holder kontroll på fristene og sørger for at MVA-oppgaven leveres presist og rettidig til Skatteetaten." />
                </p>
              </div>
            </div>

            {/* Årsavregning */}
            <div className="md:col-span-5 bg-white p-8 rounded-2xl shadow-sm border border-surface-highest">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined">history_edu</span>
              </div>
              <h3 className="font-headline text-2xl font-bold text-primary mb-4">
                <EditableText pageKey="accounting" fieldKey="card3Title" defaultText="Årsavregning & Skatt" />
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                <EditableText pageKey="accounting" fieldKey="card3Desc" defaultText="Full kontroll på årsoppgjør, skattemelding og aksjonærregisteroppgave. Vi sikrer etterlevelse av alle lover." />
              </p>
            </div>

            {/* Rådgivning banner */}
            <div className="md:col-span-7 bg-primary text-white p-8 md:p-10 rounded-2xl shadow-xl flex flex-col justify-between">
              <div>
                <h3 className="font-headline text-2xl font-bold mb-4">
                  <EditableText pageKey="accounting" fieldKey="card4Title" defaultText="Strategisk rådgivning" />
                </h3>
                <p className="text-white/90 text-sm leading-relaxed mb-6 max-w-lg">
                  <EditableText pageKey="accounting" fieldKey="card4Desc" defaultText="Utover den tekniske bokføringen fungerer vi som din økonomiske sparringspartner for sunn vekst og lønnsomhet." />
                </p>
              </div>
              <Link to="/radgivning" className="inline-block bg-white text-primary px-6 py-3 rounded-xl font-bold text-sm w-fit hover:bg-surface transition-colors">
                <EditableText pageKey="accounting" fieldKey="btn3" defaultText="Les mer om rådgivning" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
