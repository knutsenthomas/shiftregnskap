import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EditableText } from '@/components/EditableText';
import { EditableImage } from '@/components/EditableImage';

export const Advisory = () => {
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
              <EditableText pageKey="advisory" fieldKey="heroBadge" defaultText="STRATEGISK PARTNER" />
            </span>
            <h1 className="font-headline text-4xl md:text-5xl text-primary font-bold mb-6 leading-tight">
              <EditableText pageKey="advisory" fieldKey="heroTitle" defaultText="Lokal ekspertise som skaper bærekraftig vekst." />
            </h1>
            <p className="text-on-surface-variant text-lg mb-8 max-w-lg leading-relaxed">
              <EditableText pageKey="advisory" fieldKey="heroDesc" defaultText="Vi er mer enn bare tallknusere. Som din strategiske partner i Agder gir vi deg innsikten og tryggheten du trenger for å ta de beste valgene for fremtiden." />
            </p>
            <div className="flex gap-4">
              <Link to="/kontakt" className="bg-primary text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:-translate-y-0.5 transition-all">
                <EditableText pageKey="advisory" fieldKey="btn1" defaultText="Avtal et rådgivningsmøte" />
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <EditableImage 
                pageKey="advisory"
                fieldKey="heroImage"
                defaultSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Strategisk rådgivning"
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
              <EditableText pageKey="advisory" fieldKey="servicesTitle" defaultText="Hva vi kan hjelpe deg med" />
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-surface-highest">
              <div className="text-primary mb-4"><span className="material-symbols-outlined text-4xl">show_chart</span></div>
              <h3 className="font-headline text-xl font-bold mb-3 text-primary">
                <EditableText pageKey="advisory" fieldKey="card1Title" defaultText="Budsjettering og prognoser" />
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                <EditableText pageKey="advisory" fieldKey="card1Desc" defaultText="Få realistiske framskrivninger for inntekter og kostnader for tryggere investeringsbeslutninger." />
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-surface-highest">
              <div className="text-primary mb-4"><span className="material-symbols-outlined text-4xl">account_balance_wallet</span></div>
              <h3 className="font-headline text-xl font-bold mb-3 text-primary">
                <EditableText pageKey="advisory" fieldKey="card2Title" defaultText="Likviditetsstyring" />
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                <EditableText pageKey="advisory" fieldKey="card2Desc" defaultText="Optimaliser kontantstrømmen slik at bedriften alltid har kapital tilgjengelig når det gjelder." />
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-surface-highest">
              <div className="text-primary mb-4"><span className="material-symbols-outlined text-4xl">gavel</span></div>
              <h3 className="font-headline text-xl font-bold mb-3 text-primary">
                <EditableText pageKey="advisory" fieldKey="card3Title" defaultText="Skatteoptimalisering" />
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                <EditableText pageKey="advisory" fieldKey="card3Desc" defaultText="Sikre at din bedrift utnytter gjeldende skatteregler på mest gunstig og lovlig vis." />
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-surface-highest">
              <div className="text-primary mb-4"><span className="material-symbols-outlined text-4xl">groups_3</span></div>
              <h3 className="font-headline text-xl font-bold mb-3 text-primary">
                <EditableText pageKey="advisory" fieldKey="card4Title" defaultText="Styrearbeid & Virksomhetsstyring" />
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                <EditableText pageKey="advisory" fieldKey="card4Desc" defaultText="Profesjonell deltakelse og støtte til styremøter for forbedret selskapsstyring." />
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
