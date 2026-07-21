import React from 'react';
import { motion } from 'framer-motion';
import { EditableText } from '@/components/EditableText';
import { EditableImage } from '@/components/EditableImage';

export const Industries = () => {
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
              <EditableText pageKey="industries" fieldKey="heroBadge" defaultText="SPESIALISERT EKSPERTISE" />
            </span>
            <h1 className="font-headline text-4xl md:text-5xl text-primary font-bold mb-6 leading-tight">
              <EditableText pageKey="industries" fieldKey="heroTitle" defaultText="Skreddersydd regnskap for din bransje" />
            </h1>
            <p className="text-on-surface-variant text-lg mb-8 max-w-lg leading-relaxed">
              <EditableText pageKey="industries" fieldKey="heroDesc" defaultText="Ulike bransjer har ulike utfordringer og krav. Vi har spisskompetanse innen en rekke nøkkelnæringer i regionen." />
            </p>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <EditableImage 
                pageKey="industries"
                fieldKey="heroImage"
                defaultSrc="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1200&q=80"
                alt="Bransjespesifikt regnskap"
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
              <EditableText pageKey="industries" fieldKey="title" defaultText="Bransjer vi kjenner ut og inn" />
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-2xl border border-surface-highest shadow-sm">
              <h3 className="font-bold text-xl text-primary mb-2">
                <EditableText pageKey="industries" fieldKey="b1Title" defaultText="Bygg & Anlegg" />
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                <EditableText pageKey="industries" fieldKey="b1Desc" defaultText="Prosjektregnskap, prosjektstyring og kontroll på timelister og underleverandører." />
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-surface-highest shadow-sm">
              <h3 className="font-bold text-xl text-primary mb-2">
                <EditableText pageKey="industries" fieldKey="b2Title" defaultText="Detaljhandel & Netthandel" />
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                <EditableText pageKey="industries" fieldKey="b2Desc" defaultText="Integrasjon mot kassesystemer (POS) og nettbutikk for sømløs lager- og salgsføring." />
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-surface-highest shadow-sm">
              <h3 className="font-bold text-xl text-primary mb-2">
                <EditableText pageKey="industries" fieldKey="b3Title" defaultText="Helse & Velvære" />
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                <EditableText pageKey="industries" fieldKey="b3Desc" defaultText="Spesialtilpasset regnskapsførsel for klinikere, leger og behandlere." />
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-surface-highest shadow-sm">
              <h3 className="font-bold text-xl text-primary mb-2">
                <EditableText pageKey="industries" fieldKey="b4Title" defaultText="Konsulent & Tjenesteyting" />
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                <EditableText pageKey="industries" fieldKey="b4Desc" defaultText="Enkel timeføring, automatisert fakturering og lønnsomhetsanalyse per prosjekt." />
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
