import React from 'react';
import { motion } from 'framer-motion';
import { EditableText } from '@/components/EditableText';

export const ClientPortal = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-20 min-h-screen"
    >
      <section className="py-section-padding max-w-container-max mx-auto px-4 md:px-margin-desktop">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block bg-primary-container/40 text-primary px-3 py-1 rounded-full text-xs font-bold mb-4">
            <EditableText pageKey="clientportal" fieldKey="heroBadge" defaultText="MIN SIDE" />
          </span>
          <h1 className="font-headline text-4xl font-bold text-primary mb-4">
            <EditableText pageKey="clientportal" fieldKey="heroTitle" defaultText="Kundeportal for enkel samhandling" />
          </h1>
          <p className="text-on-surface-variant text-lg">
            <EditableText pageKey="clientportal" fieldKey="heroDesc" defaultText="Logg inn for å levere bilag, godkjenne fakturaer og hente ut ferske rapporter når som helst." />
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <a href="https://www.tripletex.no/login" target="_blank" rel="noopener noreferrer" className="bg-white p-8 rounded-2xl border border-surface-highest text-center hover:border-primary shadow-sm transition-all hover:-translate-y-1">
            <span className="material-symbols-outlined text-4xl text-primary mb-3">account_balance</span>
            <h3 className="font-bold text-lg text-primary mb-2">Tripletex Login</h3>
            <p className="text-xs text-on-surface-variant">Logg inn i Tripletex kundeportal</p>
          </a>

          <a href="https://go.poweroffice.no" target="_blank" rel="noopener noreferrer" className="bg-white p-8 rounded-2xl border border-surface-highest text-center hover:border-primary shadow-sm transition-all hover:-translate-y-1">
            <span className="material-symbols-outlined text-4xl text-primary mb-3">bolt</span>
            <h3 className="font-bold text-lg text-primary mb-2">PowerOffice GO Login</h3>
            <p className="text-xs text-on-surface-variant">Logg inn i PowerOffice GO portal</p>
          </a>

          <a href="https://fiken.no/login" target="_blank" rel="noopener noreferrer" className="bg-white p-8 rounded-2xl border border-surface-highest text-center hover:border-primary shadow-sm transition-all hover:-translate-y-1">
            <span className="material-symbols-outlined text-4xl text-primary mb-3">star</span>
            <h3 className="font-bold text-lg text-primary mb-2">Fiken Login</h3>
            <p className="text-xs text-on-surface-variant">Logg inn i Fiken portal</p>
          </a>
        </div>
      </section>
    </motion.div>
  );
};
