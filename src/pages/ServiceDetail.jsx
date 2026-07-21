import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useContent } from '@/contexts/ContentContext';
import { EditableText } from '@/components/EditableText';
import { EditableImage } from '@/components/EditableImage';

export const ServiceDetail = () => {
  const { id } = useParams();
  const { services } = useContent();

  // Find service matching current route param
  const service = (services || []).find(s => 
    String(s.id) === String(id) || 
    s.slug === id || 
    s.title.toLowerCase().replace(/\s+/g, '-') === id ||
    (s.link && s.link.endsWith(`/${id}`))
  ) || {
    id: id || 'fakturering',
    title: id ? id.charAt(0).toUpperCase() + id.slice(1) : 'Fakturering',
    desc: 'Effektiv fakturering og purreoppfølging for din bedrift.',
    icon: 'request_quote',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80'
  };

  const serviceKey = `service_${id}`;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="relative py-section-padding overflow-hidden">
        <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-primary-container/40 text-primary px-3 py-1 rounded-full text-xs font-bold mb-6 flex items-center gap-2 w-fit">
              <span className="material-symbols-outlined text-base text-primary">{service.icon || 'star'}</span>
              <EditableText pageKey={serviceKey} fieldKey="heroBadge" defaultText="PROFESJONELL TJENESTE" />
            </span>
            <h1 className="font-headline text-4xl md:text-5xl text-primary font-bold mb-6 leading-tight">
              <EditableText pageKey={serviceKey} fieldKey="heroTitle" defaultText={service.title} />
            </h1>
            <p className="text-on-surface-variant text-lg mb-8 max-w-lg leading-relaxed">
              <EditableText pageKey={serviceKey} fieldKey="heroDesc" defaultText={service.desc} />
            </p>
            <div className="flex gap-4">
              <Link to="/kontakt" className="bg-primary text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:-translate-y-0.5 transition-all">
                <EditableText pageKey={serviceKey} fieldKey="btn1" defaultText="Få et uforpliktende tilbud" />
              </Link>
              <Link to="/priser" className="border border-primary text-primary px-8 py-3 rounded-xl font-bold hover:bg-primary-container/20 transition-all">
                <EditableText pageKey={serviceKey} fieldKey="btn2" defaultText="Se våre priser" />
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <EditableImage 
                pageKey={serviceKey}
                fieldKey="heroImage"
                defaultSrc={service.image || 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80'}
                alt={service.title}
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-section-padding bg-surface-low">
        <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="font-headline text-3xl md:text-4xl text-primary font-bold mb-4">
              <EditableText pageKey={serviceKey} fieldKey="detailsTitle" defaultText={`Hva innebærer vår ${service.title.toLowerCase()}stjeneste?`} />
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              <EditableText pageKey={serviceKey} fieldKey="detailsSub" defaultText="Vi fjerner det manuelle arbeidet med fakturasending og avstemming, slik at bedriften din opprettholder god likviditet." />
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-surface-highest">
              <div className="text-primary mb-4">
                <span className="material-symbols-outlined text-4xl">verified</span>
              </div>
              <h3 className="font-headline text-xl font-bold mb-3 text-primary">
                <EditableText pageKey={serviceKey} fieldKey="feature1Title" defaultText="Automatisk KID & Remittering" />
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                <EditableText pageKey={serviceKey} fieldKey="feature1Desc" defaultText="Innbetalinger fra kunder avstemmes automatisk mot banken slik at du alltid ser hvem som har betalt." />
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-surface-highest">
              <div className="text-primary mb-4">
                <span className="material-symbols-outlined text-4xl">cloud_sync</span>
              </div>
              <h3 className="font-headline text-xl font-bold mb-3 text-primary">
                <EditableText pageKey={serviceKey} fieldKey="feature2Title" defaultText="Purring & Oppfølging" />
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                <EditableText pageKey={serviceKey} fieldKey="feature2Desc" defaultText="Automatisk utsending av purringer og inkassovarsel i henhold til gjeldende lover." />
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-surface-highest">
              <div className="text-primary mb-4">
                <span className="material-symbols-outlined text-4xl">support_agent</span>
              </div>
              <h3 className="font-headline text-xl font-bold mb-3 text-primary">
                <EditableText pageKey={serviceKey} fieldKey="feature3Title" defaultText="EHF & eFaktura" />
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                <EditableText pageKey={serviceKey} fieldKey="feature3Desc" defaultText="Send fakturaer direkte til bedrifter via EHF og privatkunder via eFaktura eller Vipps." />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary py-16 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">
            <EditableText pageKey={serviceKey} fieldKey="ctaTitle" defaultText={`Ønsker du hjelp med ${service.title.toLowerCase()}?`} />
          </h2>
          <p className="text-lg opacity-90 mb-8">
            <EditableText pageKey={serviceKey} fieldKey="ctaDesc" defaultText="Ta kontakt i dag for en uforpliktende samtale om hvordan vi kan automatisere fakturaoppfølgingen for deg." />
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/kontakt" className="flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-surface transition-colors shadow-lg">
              <span className="material-symbols-outlined">mail</span>
              <span>
                <EditableText pageKey={serviceKey} fieldKey="ctaBtn" defaultText="Send oss en henvendelse" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
