import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EditableText } from '@/components/EditableText';
import { EditableImage } from '@/components/EditableImage';

export const About = () => {
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
              <EditableText pageKey="about" fieldKey="heroBadge" defaultText="OM OSS" />
            </span>
            <h1 className="font-headline text-4xl md:text-5xl text-primary font-bold mb-6 leading-tight">
              <EditableText pageKey="about" fieldKey="heroTitle" defaultText="Din partner for økonomisk trygghet og vekst" />
            </h1>
            <p className="text-on-surface-variant text-lg mb-8 max-w-lg leading-relaxed">
              <EditableText pageKey="about" fieldKey="heroDesc" defaultText="Shift Regnskap er mer enn bare tall. Vi er din lokale rådgiver i Lyngdal, Farsund, Vanse og Lista, dedikert til å forenkle hverdagen for små og mellomstore bedrifter." />
            </p>
            <div className="flex gap-4">
              <Link to="/kontakt" className="bg-primary text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:-translate-y-0.5 transition-all">
                <EditableText pageKey="about" fieldKey="btn1" defaultText="Kontakt oss" />
              </Link>
              <Link to="/regnskap" className="border border-primary text-primary px-8 py-3 rounded-xl font-bold hover:bg-primary-container/20 transition-all">
                <EditableText pageKey="about" fieldKey="btn2" defaultText="Se våre tjenester" />
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <EditableImage 
                pageKey="about"
                fieldKey="heroImage"
                defaultSrc="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80"
                alt="Moderne kontor i Sør-Norge"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hvem er vi Section (Bento Grid) */}
      <section className="py-section-padding bg-surface-low">
        <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-4xl text-primary font-bold mb-4">
              <EditableText pageKey="about" fieldKey="whoTitle" defaultText="Hvem er vi?" />
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 glass-card p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <h3 className="font-headline text-2xl text-primary font-bold mb-4">
                  <EditableText pageKey="about" fieldKey="whoCardTitle" defaultText="Lokal ekspertise med hjerte for regionen" />
                </h3>
                <p className="text-on-surface-variant leading-relaxed mb-6">
                  <EditableText pageKey="about" fieldKey="whoCardDesc" defaultText="Shift Regnskap består av et erfarnt team innen økonomi, skatt og forretningsutvikling. Med forankring i Lyngdal og Farsund forstår vi lokalmiljøets utfordringer og muligheter." />
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border border-surface-highest">
                  <span className="material-symbols-outlined text-primary mb-2">location_on</span>
                  <p className="font-bold text-primary">
                    <EditableText pageKey="about" fieldKey="locTitle" defaultText="Lyngdal & Farsund" />
                  </p>
                  <p className="text-xs text-on-surface-variant">
                    <EditableText pageKey="about" fieldKey="locSub" defaultText="Lokal tilstedeværelse" />
                  </p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-surface-highest">
                  <span className="material-symbols-outlined text-primary mb-2">groups</span>
                  <p className="font-bold text-primary">
                    <EditableText pageKey="about" fieldKey="followTitle" defaultText="Personlig oppfølging" />
                  </p>
                  <p className="text-xs text-on-surface-variant">
                    <EditableText pageKey="about" fieldKey="followSub" defaultText="Fast regnskapsfører" />
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary text-white p-8 rounded-2xl flex flex-col justify-center items-center text-center">
              <span className="material-symbols-outlined text-6xl mb-6">diversity_3</span>
              <h3 className="font-headline text-2xl font-bold mb-4">
                <EditableText pageKey="about" fieldKey="coopTitle" defaultText="Samarbeid som varer" />
              </h3>
              <p className="text-white/90 text-sm leading-relaxed">
                <EditableText pageKey="about" fieldKey="coopDesc" defaultText="Vi bygger langsiktige relasjoner basert på tillit, åpenhet og felles mål om suksess for din bedrift." />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-section-padding">
        <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-3xl md:text-4xl text-primary font-bold mb-6">
              <EditableText pageKey="about" fieldKey="visionTitle" defaultText="Vår visjon" />
            </h2>
            <p className="text-on-surface-variant text-lg italic mb-8 leading-relaxed">
              <EditableText pageKey="about" fieldKey="visionQuote" defaultText='"Vår visjon er å være den mest foretrukne og innovative regnskapspartneren på Sørlandet. Vi skal transformere regnskap fra å være en lovpålagt nødvendighet til et strategisk verktøy for våre kunders vekst."' />
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                <div>
                  <p className="font-bold text-primary">
                    <EditableText pageKey="about" fieldKey="vPoint1Title" defaultText="Presisjon i hvert ledd" />
                  </p>
                  <p className="text-on-surface-variant text-sm">
                    <EditableText pageKey="about" fieldKey="vPoint1Desc" defaultText="Kvalitetssikret arbeid levert til avtalt tid." />
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                <div>
                  <p className="font-bold text-primary">
                    <EditableText pageKey="about" fieldKey="vPoint2Title" defaultText="Fremtidsrettet teknologi" />
                  </p>
                  <p className="text-on-surface-variant text-sm">
                    <EditableText pageKey="about" fieldKey="vPoint2Desc" defaultText="Bruk av automatisering og skybaserte løsninger." />
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <EditableImage 
              pageKey="about"
              fieldKey="visionImage"
              defaultSrc="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
              alt="Strategisk veiledning"
              className="w-full aspect-video object-cover"
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
};
