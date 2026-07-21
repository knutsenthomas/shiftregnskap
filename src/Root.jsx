import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { SiteProvider } from '@/contexts/SiteContext';
import { AuthProvider } from '@/contexts/AuthContext';
import { ContentProvider } from '@/contexts/ContentContext';

import { ScrollToTop } from '@/components/ScrollToTop';
import { AdminBar } from '@/components/AdminBar';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ChatWidget } from '@/components/ChatWidget';
import { CookieConsent } from '@/components/CookieConsent';

import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Contact } from '@/pages/Contact';
import { Accounting } from '@/pages/Accounting';
import { Payroll } from '@/pages/Payroll';
import { Advisory } from '@/pages/Advisory';
import { Systems } from '@/pages/Systems';
import { Industries } from '@/pages/Industries';
import { ClientPortal } from '@/pages/ClientPortal';
import { Pricing } from '@/pages/Pricing';
import { AdminDashboard } from '@/pages/AdminDashboard';
import { AdminLogin } from '@/pages/AdminLogin';
import { ServiceDetail } from '@/pages/ServiceDetail';
import { PrivacyPolicy } from '@/pages/PrivacyPolicy';

const LayoutContent = () => {
  const location = useLocation();
  const isAdminPage = location.pathname === '/admin';
  const isAdminLoginPage = location.pathname === '/admin/login';
  const isAdminLoggedIn = localStorage.getItem('shift_admin_session') === 'true';

  if (isAdminLoginPage) {
    return <AdminLogin />;
  }

  if (isAdminPage) {
    if (!isAdminLoggedIn) {
      return <AdminLogin />;
    }
    return <AdminDashboard />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <AdminBar />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/om-oss" element={<About />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/regnskap" element={<Accounting />} />
          <Route path="/lonn" element={<Payroll />} />
          <Route path="/radgivning" element={<Advisory />} />
          <Route path="/system" element={<Systems />} />
          <Route path="/bransjer" element={<Industries />} />
          <Route path="/kundeportal" element={<ClientPortal />} />
          <Route path="/priser" element={<Pricing />} />
          <Route path="/personvern" element={<PrivacyPolicy />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/tjeneste/:id" element={<ServiceDetail />} />
        </Routes>
      </main>
      <Footer />
      <ChatWidget />
      <CookieConsent />
    </div>
  );
};

export const Root = () => {
  return (
    <SiteProvider>
      <AuthProvider>
        <ContentProvider>
          <Router>
            <ScrollToTop />
            <LayoutContent />
          </Router>
        </ContentProvider>
      </AuthProvider>
    </SiteProvider>
  );
};
