import React from 'react';
import { motion } from 'framer-motion';
import { useSite } from '@/contexts/SiteContext';
import { EditableText } from '@/components/EditableText';

export const PrivacyPolicy = () => {
  const { siteInfo } = useSite();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-20"
    >
      <section className="bg-primary/5 py-16">
        <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
          <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            JURIDISK TRYGGHET
          </span>
          <h1 className="font-headline text-4xl md:text-5xl text-primary font-bold mb-4">
            Personvernerklæring
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">
            Shift Regnskap AS tar ditt personvern på alvor. Her finner du informasjon om hvordan vi behandler personopplysninger i henhold til GDPR.
          </p>
        </div>
      </section>

      <section className="py-section-padding max-w-4xl mx-auto px-4 md:px-margin-desktop">
        <div className="bg-white p-8 md:p-12 rounded-2xl border border-surface-highest shadow-sm space-y-8 text-on-surface">
          <div>
            <h2 className="font-bold text-2xl text-primary mb-3">1. Behandlingsansvarlig</h2>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Shift Regnskap AS (Org.nr: 917 46 381), ved daglig leder, er behandlingsansvarlig for selskabets behandling av personopplysninger.
            </p>
            <p className="text-sm text-on-surface-variant leading-relaxed mt-2">
              Adresse: {siteInfo?.address || 'Elvebrinken 1, 4580 Lyngdal'}<br />
              E-post: {siteInfo?.email || 'bm@shiftregnskap.no'}<br />
              Telefon: {siteInfo?.phone || '917 46 381'}
            </p>
          </div>

          <div>
            <h2 className="font-bold text-2xl text-primary mb-3">2. Hvilke personopplysninger vi samler inn</h2>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-3">
              Vi samler inn og behandler personopplysninger i følgende tilfeller:
            </p>
            <ul className="list-disc pl-5 text-sm text-on-surface-variant space-y-2">
              <li>Når du fyller ut kontaktskjemaet på vår nettside (navn, e-post, telefonnummer, bedrift og melding).</li>
              <li>Når du inngår kundeavtale om regnskapsførsel, lønn eller rådgivning.</li>
              <li>Besøksdata og anonymiserte informasjonskapsler (cookies) for trafikk- og ytelsesanalyse.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-2xl text-primary mb-3">3. Formål med behandlingen</h2>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-3">
              Opplysningene behandles for å:
            </p>
            <ul className="list-disc pl-5 text-sm text-on-surface-variant space-y-2">
              <li>Besvare henvendelser og levere avtalte autoriserte regnskapstjenester.</li>
              <li>Oppfylle lovpålagte krav etter regnskapsloven, bokføringsloven og hvitvaskingsloven.</li>
              <li>Sikre stabil og trygg drift av våre digitale kundeportaler.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-2xl text-primary mb-3">4. Lagring og sikkerhet</h2>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Alle data oppbevares på sikre servere innenfor EU/EØS med streng tilgangsstyring og kryptering. Vi lagrer personopplysninger kun så lenge det er nødvendig for å oppfylle formålet eller lovpålagte oppbevaringsfrister (f.eks. 5 år etter bokføringsloven).
            </p>
          </div>

          <div>
            <h2 className="font-bold text-2xl text-primary mb-3">5. Dine rettigheter</h2>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-3">
              Du har etter GDPR rett til:
            </p>
            <ul className="list-disc pl-5 text-sm text-on-surface-variant space-y-2">
              <li>Innsyn i hvilke opplysninger vi har registrert om deg.</li>
              <li>Korrigering av feilaktige eller utdaterte opplysninger.</li>
              <li>Sletting ("retten til å bli glemt") der lovverket tillater det.</li>
              <li>Dataportabilitet og klage til Datatilsynet.</li>
            </ul>
          </div>

          <div className="pt-4 border-t border-surface-highest text-xs text-on-surface-variant">
            Sist oppdatert: 21. juli 2026 • Shift Regnskap AS
          </div>
        </div>
      </section>
    </motion.div>
  );
};
