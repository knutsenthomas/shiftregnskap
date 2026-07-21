import React, { createContext, useContext, useState, useEffect } from 'react';

const SiteContext = createContext({});

const defaultSiteInfo = {
  name: 'Shift Regnskap',
  altName: 'Shift Regnskap AS',
  phone: '917 46 381',
  email: 'bm@shiftregnskap.no',
  address: 'Elvebrinken 1, 4580 Lyngdal',
  hours: 'Man-Fre: 08:00 - 16:00',
  locations: ['Lyngdal', 'Farsund', 'Vanse', 'Lista']
};

export const SiteProvider = ({ children }) => {
  const [siteInfo, setSiteInfo] = useState(() => {
    try {
      const saved = localStorage.getItem('shift_site_info');
      return saved ? { ...defaultSiteInfo, ...JSON.parse(saved) } : defaultSiteInfo;
    } catch {
      return defaultSiteInfo;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('shift_site_info', JSON.stringify(siteInfo));
    } catch (e) {
      console.error('Failed to save siteInfo', e);
    }
  }, [siteInfo]);

  const updateSiteInfo = (key, value) => {
    setSiteInfo(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const updateAllSiteInfo = (newInfo) => {
    setSiteInfo(prev => ({
      ...prev,
      ...newInfo
    }));
  };

  return (
    <SiteContext.Provider value={{ siteInfo, updateSiteInfo, updateAllSiteInfo }}>
      {children}
    </SiteContext.Provider>
  );
};

export const useSite = () => useContext(SiteContext);
