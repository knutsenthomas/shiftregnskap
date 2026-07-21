import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EditableText } from '@/components/EditableText';

export const Pricing = () => {
  const [vouchers, setVouchers] = useState(50);
  const [employees, setEmployees] = useState(2);

  const [services, setServices] = useState({
    accounting: true,
    payroll: true,
    consulting: false,
    yearEnd: true
  });

  const totalMonthly = useMemo(() => {
    let base = 500; // Base platform & admin fee
    let voucherCost = services.accounting ? vouchers * 18 : 0;
    let payrollCost = services.payroll ? (employees * 175 + (employees > 0 ? 350 : 0)) : 0;
    let consultingCost = services.consulting ? 1200 : 0;
    let yearEndCost = services.yearEnd ? 600 : 0;

    return base + voucherCost + payrollCost + consultingCost + yearEndCost;
  }, [vouchers, employees, services]);

  const formatNOK = (val) => {
    return new Intl.NumberFormat('nb-NO').format(val);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 pb-16"
    >
      <section className="bg-primary/5 py-16">
        <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
          <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <EditableText pageKey="pricing" fieldKey="heroBadge" defaultText="PRISER & PAKKER" />
          </span>
          <h1 className="font-headline text-4xl md:text-5xl text-primary font-bold mb-4">
            <EditableText pageKey="pricing" fieldKey="heroTitle" defaultText="Forutsigbare priser uten overraskelser" />
          </h1>
          <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">
            <EditableText pageKey="pricing" fieldKey="heroDesc" defaultText="Vi tilbyr både fastprisavtaler og kalkulerte pakker basert på bilagsmengde og antall ansatte." />
          </p>
        </div>
      </section>

      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop mt-12">
        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Controls */}
          <div className="lg:col-span-8 space-y-6">
            {/* Step 1: Volume */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-surface-highest shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-xl">analytics</span>
                <h2 className="font-headline text-xl font-bold text-primary">Volum og omfang</h2>
              </div>

              <div className="space-y-8">
                {/* Vouchers */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="font-bold text-on-surface text-sm">Månedlige bilag</label>
                    <span className="text-primary font-bold text-2xl">{vouchers}</span>
                  </div>
                  <input 
                    type="range"
                    min="0"
                    max="500"
                    step="10"
                    value={vouchers}
                    onChange={(e) => setVouchers(Number(e.target.value))}
                    className="w-full h-2 bg-surface-highest rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-xs text-on-surface-variant mt-1">
                    <span>0</span>
                    <span>500+ bilag</span>
                  </div>
                </div>

                {/* Employees */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="font-bold text-on-surface text-sm">Antall ansatte</label>
                    <span className="text-primary font-bold text-2xl">{employees}</span>
                  </div>
                  <input 
                    type="range"
                    min="0"
                    max="50"
                    step="1"
                    value={employees}
                    onChange={(e) => setEmployees(Number(e.target.value))}
                    className="w-full h-2 bg-surface-highest rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-xs text-on-surface-variant mt-1">
                    <span>0</span>
                    <span>50+ ansatte</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Services */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-surface-highest shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-xl">manufacturing</span>
                <h2 className="font-headline text-xl font-bold text-primary">Velg tjenester</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex items-start gap-3 p-4 rounded-xl border border-surface-highest hover:border-primary transition-all cursor-pointer bg-surface-low">
                  <input 
                    type="checkbox"
                    checked={services.accounting}
                    onChange={(e) => setServices({...services, accounting: e.target.checked})}
                    className="mt-1 w-5 h-5 rounded text-primary focus:ring-primary"
                  />
                  <div>
                    <span className="block font-bold text-on-surface text-sm">Løpende bokføring</span>
                    <span className="block text-xs text-on-surface-variant">Mva-oppgave og bankavstemming.</span>
                  </div>
                </label>

                <label className="flex items-start gap-3 p-4 rounded-xl border border-surface-highest hover:border-primary transition-all cursor-pointer bg-surface-low">
                  <input 
                    type="checkbox"
                    checked={services.payroll}
                    onChange={(e) => setServices({...services, payroll: e.target.checked})}
                    className="mt-1 w-5 h-5 rounded text-primary focus:ring-primary"
                  />
                  <div>
                    <span className="block font-bold text-on-surface text-sm">Lønnskjøring</span>
                    <span className="block text-xs text-on-surface-variant">A-melding og feriepenger.</span>
                  </div>
                </label>

                <label className="flex items-start gap-3 p-4 rounded-xl border border-surface-highest hover:border-primary transition-all cursor-pointer bg-surface-low">
                  <input 
                    type="checkbox"
                    checked={services.consulting}
                    onChange={(e) => setServices({...services, consulting: e.target.checked})}
                    className="mt-1 w-5 h-5 rounded text-primary focus:ring-primary"
                  />
                  <div>
                    <span className="block font-bold text-on-surface text-sm">Rådgivning</span>
                    <span className="block text-xs text-on-surface-variant">Økonomisk styring og budsjett.</span>
                  </div>
                </label>

                <label className="flex items-start gap-3 p-4 rounded-xl border border-surface-highest hover:border-primary transition-all cursor-pointer bg-surface-low">
                  <input 
                    type="checkbox"
                    checked={services.yearEnd}
                    onChange={(e) => setServices({...services, yearEnd: e.target.checked})}
                    className="mt-1 w-5 h-5 rounded text-primary focus:ring-primary"
                  />
                  <div>
                    <span className="block font-bold text-on-surface text-sm">Årsoppgjør</span>
                    <span className="block text-xs text-on-surface-variant">Skattemelding og offisielt regnskap.</span>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Estimate Summary */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-primary text-white p-8 rounded-2xl shadow-xl space-y-6">
              <h3 className="font-headline text-2xl font-bold border-b border-white/10 pb-4">Ditt estimat</h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/80">Fastpris per mnd.</span>
                  <span className="font-bold">kr {formatNOK(totalMonthly)} ,-</span>
                </div>
                <div className="flex justify-between text-xs text-white/70">
                  <span>Skybasert system</span>
                  <span>Inkludert</span>
                </div>
                <div className="flex justify-between text-xs text-white/70">
                  <span>Oppstartskostnad</span>
                  <span>kr 0 ,-</span>
                </div>
              </div>

              <div className="bg-white/10 p-5 rounded-xl text-center">
                <div className="text-xs text-white/80 uppercase tracking-wider mb-1">Estimert total per mnd.</div>
                <div className="text-3xl font-extrabold">kr {formatNOK(totalMonthly)}</div>
                <div className="text-xs text-white/60 mt-1 italic">Ekskl. mva.</div>
              </div>

              <ul className="space-y-2 text-xs text-white/90">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">check_circle</span> Fast autorisert regnskapsfører
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">check_circle</span> 100% skybasert med Tripletex/Fiken
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">check_circle</span> Ingen skjulte gebyrer
                </li>
              </ul>

              <Link 
                to="/kontakt"
                className="block w-full text-center bg-white text-primary font-bold py-3.5 rounded-xl hover:bg-surface-low transition-colors shadow-md"
              >
                Få detaljert tilbud
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
