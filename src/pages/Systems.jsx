import React from 'react';
import { motion } from 'framer-motion';
import { EditableText } from '@/components/EditableText';
import { EditableImage } from '@/components/EditableImage';

export const Systems = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="relative py-section-padding overflow-hidden">
        <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-primary-container/40 text-primary px-3 py-1 rounded-full text-xs font-bold mb-6">
              <EditableText pageKey="systems" fieldKey="heroBadge" defaultText="MODERNE REGNSKAP" />
            </span>
            <h1 className="font-headline text-4xl md:text-5xl text-primary font-bold mb-6 leading-tight">
              <EditableText pageKey="systems" fieldKey="heroTitle" defaultText="Skybaserte systemer for en enklere hverdag" />
            </h1>
            <p className="text-on-surface-variant text-lg mb-8 max-w-lg leading-relaxed">
              <EditableText pageKey="systems" fieldKey="heroDesc" defaultText="Vi hjelper deg med å velge, implementere og mestre markedets ledende regnskapssystemer. Få full kontroll på økonomien uansett hvor du befinner deg." />
            </p>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <EditableImage 
                pageKey="systems"
                fieldKey="heroImage"
                defaultSrc="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
                alt="Skybaserte regnskapssystemer"
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
              <EditableText pageKey="systems" fieldKey="title" defaultText="Våre foretrukne regnskapssystemer" />
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-surface-highest shadow-sm">
              <h3 className="font-bold text-2xl text-primary mb-3">Tripletex</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                <EditableText pageKey="systems" fieldKey="tripletexDesc" defaultText="Brukervennlig alt-i-ett system med tilpassede moduler for prosjekt, timer og lønn." />
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-surface-highest shadow-sm">
              <h3 className="font-bold text-2xl text-primary mb-3">PowerOffice GO</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                <EditableText pageKey="systems" fieldKey="powerofficeDesc" defaultText="Moderne og intuitivt skybasert regnskapssystem skreddersydd for effektiv samhandling." />
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-surface-highest shadow-sm">
              <h3 className="font-bold text-2xl text-primary mb-3">Fiken</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                <EditableText pageKey="systems" fieldKey="fikenDesc" defaultText="Enkelt og oversiktlig regnskapssystem spesielt tilpasset mindre enkeltpersonforetak og små AS." />
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
