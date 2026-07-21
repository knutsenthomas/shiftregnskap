import React, { createContext, useContext, useState, useEffect } from 'react';

const ContentContext = createContext({});

const defaultContent = {
  home: {
    heroBadge: 'Velkommen til Shift Regnskap',
    heroTitle: 'Din lokale regnskapspartner',
    heroDesc: 'Ser du etter en regnskapsfører i Vanse, Farsund eller Lyngdal? Vi brenner for at små og mellomstore bedrifter i lokalmiljøet skal lykkes.',
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
    heroBtn1: 'Se våre tjenester',
    heroBtn2: 'Kontakt oss i dag',
    whyTitle: 'Hvorfor velge Shift Regnskap?',
    whyDesc: 'Vi kombinerer tradisjonell kunnskap med moderne digitale løsninger for å gi deg den beste opplevelsen.',
    card1Title: 'Kvalitet og nøyaktighet',
    card1Desc: 'Våre tjenester holder høyeste faglige standard og sikrer nøyaktig rapportering i henhold til gjeldende lover.',
    card2Title: 'Enkelhet og trygghet',
    card2Desc: 'Superenkle skybaserte systemer gir deg full oversikt. Vi håndterer det tekniske så du kan føle deg trygg.',
    card3Title: 'Fast kontaktperson',
    card3Desc: 'Du får én fast regnskapsfører å forholde deg til – en personlig støttespiller som kjenner din virksomhet.',
    card4Title: 'Personlig service',
    card4Desc: 'Vi bryr oss om våre kunder og skreddersyr løsninger som passer ideelt til din unike bedrift.',
    localTitle: 'Vi kjenner lokalmiljøet i Agder',
    localDesc: 'Som din lokale partner er vi til stede der du drar nytte av oss. Vi forstår næringslivet i regionen og brenner for lokal suksess.',
    localImage: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80',
    bullet1: 'Mer tid til kundene våre og din kjernevirksomhet.',
    bullet2: 'Fast autorisert regnskapsfører som kjenner din historikk.',
    bullet3: 'Lokal rådgivning som forstår dine spesifikke utfordringer.',
    ctaTitle: 'Klar for en bekymringsfri økonomi?',
    ctaDesc: 'Ta kontakt for en uforpliktende samtale om hvordan vi kan hjelpe din bedrift å vokse.',
    ctaBtn1: 'Ring oss',
    ctaBtn2: 'Send e-post'
  },
  about: {
    heroBadge: 'OM OSS',
    heroTitle: 'Din partner for økonomisk trygghet og vekst',
    heroDesc: 'Shift Regnskap er mer enn bare tall. Vi er din lokale rådgiver i Lyngdal, Farsund, Vanse og Lista, dedikert til å forenkle hverdagen for små og mellomstore bedrifter.',
    heroImage: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80',
    btn1: 'Kontakt oss',
    btn2: 'Se våre tjenester',
    whoTitle: 'Hvem er vi?',
    whoCardTitle: 'Lokal ekspertise med hjerte for regionen',
    whoCardDesc: 'Shift Regnskap består av et erfarnt team innen økonomi, skatt og forretningsutvikling. Med forankring i Lyngdal og Farsund forstår vi lokalmiljøets utfordringer og muligheter.',
    locTitle: 'Lyngdal & Farsund',
    locSub: 'Lokal tilstedeværelse',
    followTitle: 'Personlig oppfølging',
    followSub: 'Fast regnskapsfører',
    coopTitle: 'Samarbeid som varer',
    coopDesc: 'Vi bygger langsiktige relasjoner basert på tillit, åpenhet og felles mål om suksess for din bedrift.',
    visionTitle: 'Vår visjon',
    visionQuote: '"Vår visjon er å være den mest foretrukne og innovative regnskapspartneren på Sørlandet. Vi skal transformere regnskap fra å være en lovpålagt nødvendighet til et strategisk verktøy for våre kunders vekst."',
    vPoint1Title: 'Presisjon i hvert ledd',
    vPoint1Desc: 'Kvalitetssikret arbeid levert til avtalt tid.',
    vPoint2Title: 'Fremtidsrettet teknologi',
    vPoint2Desc: 'Bruk av automatisering og skybaserte løsninger.',
    visionImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80'
  },
  accounting: {
    heroBadge: 'PROFESJONELL BOKFØRING',
    heroTitle: 'Regnskap som gir deg oversikt og vekst',
    heroDesc: 'Vi tar hånd om tallene slik at du kan fokusere på det du er best til. Med lokal ekspertise og moderne digitale verktøy er ditt regnskap alltid i trygge hender.',
    heroImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
    btn1: 'Få et tilbud',
    btn2: 'Se våre priser',
    btn3: 'Les mer om rådgivning',
    coreTitle: 'Våre kjerneområder',
    coreDesc: 'Vi tilbyr skreddersydde løsninger tilpasset din bedrifts behov. Fra daglig bokføring til strategisk rådgivning.',
    card1Title: 'Løpende bokføring',
    card1Desc: 'Nøyaktig og kontinuerlig registrering av bilag for full kontroll på økonomisk status.',
    card2Title: 'MVA-rapportering',
    card2Desc: 'Vi holder kontroll på fristene og sørger for at MVA-oppgaven leveres presist og rettidig til Skatteetaten.',
    card3Title: 'Årsavregning & Skatt',
    card3Desc: 'Full kontroll på årsoppgjør, skattemelding og aksjonærregisteroppgave. Vi sikrer etterlevelse av alle lover.',
    card4Title: 'Strategisk rådgivning',
    card4Desc: 'Utover den tekniske bokføringen fungerer vi som din økonomiske sparringspartner for sunn vekst og lønnsomhet.'
  },
  payroll: {
    heroBadge: 'LØNN & HR',
    heroTitle: 'Trygg og enkel lønnskjøring',
    heroDesc: 'Vi tar hånd om alt fra A-meldinger til feriepengeoppgjør, slik at dine ansatte får riktig lønn til rett tid.',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    btn1: 'Kontakt oss om lønn',
    whyTitle: 'Hvorfor outsource lønn til oss?',
    whyDesc: 'Lønn er et fagfelt med stadige endringer i regler og satser. Ved å sette bort lønnsarbeidet minimerer du risiko og sparer verdifull tid.',
    card1Title: 'Automatisert A-melding',
    card1Desc: 'Vi oppfyller alle offentlige krav og rapporteringsfrister til myndighetene.',
    card2Title: 'Feriepenger og sykepenger',
    card2Desc: 'Korrekt beregning og håndtering av alle ytelser og refusjoner fra NAV.',
    card3Title: 'Lønnslipp direkte i app',
    card3Desc: 'Ansatte får tilgang til sine lønnsslipper digitalt via sikre apper.'
  },
  advisory: {
    heroBadge: 'STRATEGISK PARTNER',
    heroTitle: 'Lokal ekspertise som skaper bærekraftig vekst.',
    heroDesc: 'Vi er mer enn bare tallknusere. Som din strategiske partner i Agder gir vi deg innsikten og tryggheten du trenger for å ta de beste valgene for fremtiden.',
    heroImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    btn1: 'Avtal et rådgivningsmøte',
    servicesTitle: 'Hva vi kan hjelpe deg med',
    card1Title: 'Budsjettering og prognoser',
    card1Desc: 'Få realistiske framskrivninger for inntekter og kostnader for tryggere investeringsbeslutninger.',
    card2Title: 'Likviditetsstyring',
    card2Desc: 'Optimaliser kontantstrømmen slik at bedriften alltid har kapital tilgjengelig når det gjelder.',
    card3Title: 'Skatteoptimalisering',
    card3Desc: 'Sikre at din bedrift utnytter gjeldende skatteregler på mest gunstig og lovlig vis.',
    card4Title: 'Styrearbeid & Virksomhetsstyring',
    card4Desc: 'Profesjonell deltakelse og støtte til styremøter for forbedret selskapsstyring.'
  },
  systems: {
    heroBadge: 'MODERNE REGNSKAP',
    heroTitle: 'Skybaserte systemer for en enklere hverdag',
    heroDesc: 'Vi hjelper deg med å velge, implementere og mestre markedets ledende regnskapssystemer. Få full kontroll på økonomien uansett hvor du befinner deg.',
    heroImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
    title: 'Våre foretrukne regnskapssystemer',
    tripletexDesc: 'Brukervennlig alt-i-ett system med tilpassede moduler for prosjekt, timer og lønn.',
    powerofficeDesc: 'Moderne og intuitivt skybasert regnskapssystem skreddersydd for effektiv samhandling.',
    fikenDesc: 'Enkelt og oversiktlig regnskapssystem spesielt tilpasset mindre enkeltpersonforetak og små AS.'
  },
  industries: {
    heroBadge: 'SPESIALISERT EKSPERTISE',
    heroTitle: 'Skreddersydd regnskap for din bransje',
    heroDesc: 'Ulike bransjer har ulike utfordringer og krav. Vi har spisskompetanse innen en rekke nøkkelnæringer i regionen.',
    heroImage: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80',
    title: 'Bransjer vi kjenner ut og inn',
    b1Title: 'Bygg & Anlegg',
    b1Desc: 'Prosjektregnskap, prosjektstyring og kontroll på timelister og underleverandører.',
    b2Title: 'Detaljhandel & Netthandel',
    b2Desc: 'Integrasjon mot kassesystemer (POS) og nettbutikk for sømløs lager- og salgsføring.',
    b3Title: 'Helse & Velvære',
    b3Desc: 'Spesialtilpasset regnskapsførsel for klinikere, leger og behandlere.',
    b4Title: 'Konsulent & Tjenesteyting',
    b4Desc: 'Enkel timeføring, automatisert fakturering og lønnsomhetsanalyse per prosjekt.'
  },
  service_fakturering: {
    heroBadge: 'EFFEKTIV FAKTURERING',
    heroTitle: 'Fakturering som sikrer at du får betalt til rett tid',
    heroDesc: 'Vi hjelper din bedrift med sømløs og automatisert fakturering, KID-merking, purringer og oppfølging. Få full kontroll på innbetalinger uten ekstra tidsbruk.',
    heroImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
    btn1: 'Få tilbud på fakturering',
    btn2: 'Se våre priser',
    detailsTitle: 'Hva innebærer vår faktureringstjeneste?',
    detailsSub: 'Vi fjerner det manuelle arbeidet med fakturasending og avstemming, slik at bedriften din opprettholder god likviditet.',
    feature1Title: 'Automatisk KID & Remittering',
    feature1Desc: 'Innbetalinger fra kunder avstemmes automatisk mot banken slik at du alltid ser hvem som har betalt.',
    feature2Title: 'Purring & Oppfølging',
    feature2Desc: 'Automatisk utsending av purringer og inkassovarsel i henhold til gjeldende lover.',
    feature3Title: 'EHF & eFaktura',
    feature3Desc: 'Send fakturaer direkte til bedrifter via EHF og privatkunder via eFaktura eller Vipps.',
    ctaTitle: 'Klar for enklere og raskere fakturering?',
    ctaDesc: 'Ta kontakt i dag for en uforpliktende samtale om hvordan vi kan automatisere fakturaoppfølgingen for deg.',
    ctaBtn: 'Send oss en henvendelse'
  },
  clientportal: {
    heroBadge: 'MIN SIDE',
    heroTitle: 'Kundeportal for enkel samhandling',
    heroDesc: 'Logg inn for å levere bilag, godkjenne fakturaer og hente ut ferske rapporter når som helst.'
  },
  pricing: {
    heroBadge: 'PRISER & PAKKER',
    heroTitle: 'Forutsigbare priser uten overraskelser',
    heroDesc: 'Vi tilbyr både fastprisavtaler og kalkulerte pakker basert på bilagsmengde og antall ansatte.'
  },
  contact: {
    heroBadge: 'TA KONTAKT',
    heroTitle: 'Vi er her for å hjelpe din bedrift',
    heroDesc: 'Vårt team i Lyngdal står klare til å bistå med alt innen regnskap, rådgivning og økonomistyring.',
    submitBtn: 'Send melding'
  },
  navbar: {
    ctaBtn: 'Bli kunde'
  }
};

const defaultServices = [
  { id: 1, title: 'Regnskap', desc: 'Daglig bokføring, MVA-rapportering og årsoppgjør.', icon: 'receipt_long', link: '/regnskap' },
  { id: 2, title: 'Lønn & HR', desc: 'A-melding, feriepenger og komplett lønnskjøring.', icon: 'payments', link: '/lonn' },
  { id: 3, title: 'Fakturering', desc: 'Automatisk fakturering, KID-oppfølging og purringer.', icon: 'receipt_long', link: '/tjeneste/fakturering' },
  { id: 4, title: 'Rådgivning', desc: 'Budsjettering, skatt og likviditetsstyring.', icon: 'show_chart', link: '/radgivning' },
  { id: 5, title: 'Systemer', desc: 'Skybaserte løsninger (Tripletex, PowerOffice GO, Fiken).', icon: 'devices', link: '/system' },
  { id: 6, title: 'Bransjer', desc: 'Spesialkompetanse innen nøkkelnæringer i regionen.', icon: 'domain', link: '/bransjer' }
];

const defaultMessages = [
  {
    id: 1,
    name: 'Ola Nordmann',
    company: 'Agder Bygg AS',
    email: 'ola@agderbygg.no',
    phone: '900 11 222',
    service: 'Regnskapsføring',
    message: 'Ønsker tilbud på regnskapsføring for 5 ansatte og ca 80 bilag i måneden.',
    date: '2026-07-20 14:30',
    read: false
  },
  {
    id: 2,
    name: 'Kari Hansen',
    company: 'Farsund Kafe',
    email: 'kari@farsundkafe.no',
    phone: '911 33 444',
    service: 'Lønn og personal',
    message: 'Hei, trenger assistanse med lønnskjøring og A-melding fra neste måned.',
    date: '2026-07-21 09:15',
    read: true
  }
];

const defaultAppointments = [
  {
    id: 1,
    title: 'Oppstartsmøte - Agder Bygg AS',
    client: 'Ola Nordmann',
    date: '2026-07-25',
    time: '10:00',
    type: 'Fysisk i Lyngdal'
  },
  {
    id: 2,
    title: 'Rådgivningsmøte - Farsund Kafe',
    client: 'Kari Hansen',
    date: '2026-07-28',
    time: '13:00',
    type: 'Teams / Digitalt'
  }
];

export const ContentProvider = ({ children }) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const [content, setContent] = useState(() => {
    try {
      const saved = localStorage.getItem('shift_page_content');
      return saved ? { ...defaultContent, ...JSON.parse(saved) } : defaultContent;
    } catch {
      return defaultContent;
    }
  });

  const [services, setServices] = useState(() => {
    try {
      const saved = localStorage.getItem('shift_services_list');
      if (saved) {
        const list = JSON.parse(saved);
        // Fix: Ensure Fakturering or custom services pointing to /kontakt point to /tjeneste/...
        return list.map(s => {
          if (s.title.toLowerCase().includes('fakturer') && (s.link === '/kontakt' || !s.link)) {
            return { ...s, link: '/tjeneste/fakturering', icon: 'receipt_long' };
          }
          if (s.link === '/kontakt' && !['Regnskap', 'Lønn & HR', 'Rådgivning', 'Systemer', 'Bransjer'].includes(s.title)) {
            const slug = s.title.toLowerCase().trim().replace(/æ/g, 'ae').replace(/ø/g, 'o').replace(/å/g, 'a').replace(/[^a-z0-9]+/g, '-');
            return { ...s, link: `/tjeneste/${slug}` };
          }
          return s;
        });
      }
      return defaultServices;
    } catch {
      return defaultServices;
    }
  });

  const [messages, setMessages] = useState(() => {
    try {
      const saved = localStorage.getItem('shift_inbox_messages');
      return saved ? JSON.parse(saved) : defaultMessages;
    } catch {
      return defaultMessages;
    }
  });

  const [appointments, setAppointments] = useState(() => {
    try {
      const saved = localStorage.getItem('shift_appointments');
      return saved ? JSON.parse(saved) : defaultAppointments;
    } catch {
      return defaultAppointments;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('shift_page_content', JSON.stringify(content));
    } catch (e) { console.error(e); }
  }, [content]);

  useEffect(() => {
    try {
      localStorage.setItem('shift_services_list', JSON.stringify(services));
    } catch (e) { console.error(e); }
  }, [services]);

  useEffect(() => {
    try {
      localStorage.setItem('shift_inbox_messages', JSON.stringify(messages));
    } catch (e) { console.error(e); }
  }, [messages]);

  useEffect(() => {
    try {
      localStorage.setItem('shift_appointments', JSON.stringify(appointments));
    } catch (e) { console.error(e); }
  }, [messages, appointments]);

  const toggleEditMode = () => setIsEditMode(prev => !prev);

  const updateContent = (pageKey, fieldKey, newValue) => {
    setContent(prev => ({
      ...prev,
      [pageKey]: {
        ...prev[pageKey],
        [fieldKey]: newValue
      }
    }));
  };

  const addService = (srv) => {
    const newSrv = {
      id: Date.now(),
      title: srv.title || 'Ny Tjeneste',
      desc: srv.desc || 'Beskrivelse av den nye tjenesten.',
      icon: srv.icon || 'receipt_long',
      link: srv.link || '/kontakt'
    };
    setServices(prev => [...prev, newSrv]);
  };

  const deleteService = (id) => {
    setServices(prev => prev.filter(s => s.id !== id));
  };

  const updateService = (id, updatedFields) => {
    setServices(prev => prev.map(s => s.id === id ? { ...s, ...updatedFields } : s));
  };

  const addMessage = (msg) => {
    const newMsg = {
      id: Date.now(),
      date: new Date().toISOString().replace('T', ' ').substring(0, 16),
      read: false,
      ...msg
    };
    setMessages(prev => [newMsg, ...prev]);
  };

  const deleteMessage = (id) => {
    setMessages(prev => prev.filter(m => m.id !== id));
  };

  const toggleMessageRead = (id) => {
    setMessages(prev => prev.map(m => m.id === id ? { ...m, read: !m.read } : m));
  };

  const addAppointment = (apt) => {
    const newApt = {
      id: Date.now(),
      ...apt
    };
    setAppointments(prev => [...prev, newApt]);
  };

  const deleteAppointment = (id) => {
    setAppointments(prev => prev.filter(a => a.id !== id));
  };

  return (
    <ContentContext.Provider value={{
      isEditMode,
      toggleEditMode,
      setIsEditMode,
      content,
      updateContent,
      services,
      addService,
      deleteService,
      updateService,
      messages,
      addMessage,
      deleteMessage,
      toggleMessageRead,
      appointments,
      addAppointment,
      deleteAppointment
    }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  return context || {};
};
