import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EditableText } from '@/components/EditableText';
import { EditableImage } from '@/components/EditableImage';

export const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-12 pb-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 hero-gradient z-10"></div>
          <EditableImage 
            pageKey="home"
            fieldKey="heroImage"
            defaultSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
            alt="Moderne kontor i Sør-Norge"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 text-center px-4 md:px-margin-desktop max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white font-semibold text-xs uppercase tracking-widest mb-6">
            <EditableText pageKey="home" fieldKey="heroBadge" defaultText="Velkommen til Shift Regnskap" />
          </span>
          <h1 className="font-headline text-4xl md:text-6xl text-white font-extrabold mb-6 leading-tight">
            <EditableText pageKey="home" fieldKey="heroTitle" defaultText="Din lokale regnskapspartner" />
          </h1>
          <p className="font-body text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            <EditableText 
              pageKey="home" 
              fieldKey="heroDesc" 
              defaultText="Ser du etter en regnskapsfører i Vanse, Farsund eller Lyngdal? Vi brenner for at små og mellomstore bedrifter i lokalmiljøet skal lykkes." 
            />
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/regnskap" 
              className="bg-white text-primary px-8 py-4 rounded-xl font-bold shadow-xl hover:-translate-y-0.5 transition-all text-center"
            >
              <EditableText pageKey="home" fieldKey="heroBtn1" defaultText="Se våre tjenester" />
            </Link>
            <Link 
              to="/kontakt" 
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all text-center"
            >
              <EditableText pageKey="home" fieldKey="heroBtn2" defaultText="Kontakt oss i dag" />
            </Link>
          </div>
        </div>
      </section>

      {/* Value Propositions Bento Grid */}
      <section className="py-section-padding bg-surface-low">
        <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-4xl text-primary font-bold mb-4">
              <EditableText pageKey="home" fieldKey="whyTitle" defaultText="Hvorfor velge Shift Regnskap?" />
            </h2>
            <p className="text-on-surface-variant max-w-xl mx-auto">
              <EditableText pageKey="home" fieldKey="whyDesc" defaultText="Vi kombinerer tradisjonell kunnskap med moderne digitale løsninger for å gi deg den beste opplevelsen." />
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-surface-highest hover:shadow-md transition-shadow">
              <div className="text-primary mb-6">
                <span className="material-symbols-outlined text-4xl">diamond</span>
              </div>
              <h3 className="font-headline text-xl font-bold mb-3 text-primary">
                <EditableText pageKey="home" fieldKey="card1Title" defaultText="Kvalitet og nøyaktighet" />
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                <EditableText pageKey="home" fieldKey="card1Desc" defaultText="Våre tjenester holder høyeste faglige standard og sikrer nøyaktig rapportering i henhold til gjeldende lover." />
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-surface-highest hover:shadow-md transition-shadow">
              <div className="text-primary mb-6">
                <span className="material-symbols-outlined text-4xl">lock</span>
              </div>
              <h3 className="font-headline text-xl font-bold mb-3 text-primary">
                <EditableText pageKey="home" fieldKey="card2Title" defaultText="Enkelhet og trygghet" />
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                <EditableText pageKey="home" fieldKey="card2Desc" defaultText="Superenkle skybaserte systemer gir deg full oversikt. Vi håndterer det tekniske så du kan føle deg trygg." />
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-surface-highest hover:shadow-md transition-shadow">
              <div className="text-primary mb-6">
                <span className="material-symbols-outlined text-4xl">person</span>
              </div>
              <h3 className="font-headline text-xl font-bold mb-3 text-primary">
                <EditableText pageKey="home" fieldKey="card3Title" defaultText="Fast kontaktperson" />
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                <EditableText pageKey="home" fieldKey="card3Desc" defaultText="Du får én fast regnskapsfører å forholde deg til – en personlig støttespiller som kjenner din virksomhet." />
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-surface-highest hover:shadow-md transition-shadow">
              <div className="text-primary mb-6">
                <span className="material-symbols-outlined text-4xl">favorite</span>
              </div>
              <h3 className="font-headline text-xl font-bold mb-3 text-primary">
                <EditableText pageKey="home" fieldKey="card4Title" defaultText="Personlig service" />
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                <EditableText pageKey="home" fieldKey="card4Desc" defaultText="Vi bryr oss om våre kunder og skreddersyr løsninger som passer ideelt til din unike bedrift." />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Presence Section */}
      <section className="py-section-padding bg-white overflow-hidden">
        <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-surface-container">
            <EditableImage 
              pageKey="home"
              fieldKey="localImage"
              defaultSrc="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
              alt="Møte med lokal regnskapsfører"
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
          <div>
            <h2 className="font-headline text-3xl md:text-4xl text-primary font-bold mb-6">
              <EditableText pageKey="home" fieldKey="localTitle" defaultText="Vi kjenner lokalmiljøet i Agder" />
            </h2>
            <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
              <EditableText pageKey="home" fieldKey="localDesc" defaultText="Som din lokale partner er vi til stede der du drar nytte av oss. Vi forstår næringslivet i regionen og brenner for lokal suksess." />
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {['LYNGDAL', 'FARSUND', 'VANSE', 'LISTA'].map((location) => (
                <span key={location} className="bg-primary-container/30 text-primary px-4 py-2 rounded-full font-bold text-xs">
                  {location}
                </span>
              ))}
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-on-surface">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span>
                  <EditableText pageKey="home" fieldKey="bullet1" defaultText="Mer tid til kundene våre og din kjernevirksomhet." />
                </span>
              </li>
              <li className="flex items-center gap-3 text-on-surface">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span>
                  <EditableText pageKey="home" fieldKey="bullet2" defaultText="Fast autorisert regnskapsfører som kjenner din historikk." />
                </span>
              </li>
              <li className="flex items-center gap-3 text-on-surface">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span>
                  <EditableText pageKey="home" fieldKey="bullet3" defaultText="Lokal rådgivning som forstår dine spesifikke utfordringer." />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="bg-primary py-16 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">
            <EditableText pageKey="home" fieldKey="ctaTitle" defaultText="Klar for en bekymringsfri økonomi?" />
          </h2>
          <p className="text-lg opacity-90 mb-8">
            <EditableText pageKey="home" fieldKey="ctaDesc" defaultText="Ta kontakt for en uforpliktende samtale om hvordan vi kan hjelpe din bedrift å vokse." />
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="tel:91746381" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl transition-colors">
              <span className="material-symbols-outlined">call</span>
              <span className="font-bold">
                <EditableText pageKey="home" fieldKey="ctaBtn1" defaultText="Ring oss" />
              </span>
            </a>
            <a href="mailto:bm@shiftregnskap.no" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl transition-colors">
              <span className="material-symbols-outlined">mail</span>
              <span className="font-bold">
                <EditableText pageKey="home" fieldKey="ctaBtn2" defaultText="Send e-post" />
              </span>
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
