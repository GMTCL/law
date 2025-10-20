'use client';

import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PainPointsSection from '@/components/PainPointsSection';
import ServicesSection from '@/components/ServicesSection';
import HowWeWorkSection from '@/components/HowWeWorkSection';
import FeesSection from '@/components/FeesSection';
import ConsultationSection from '@/components/ConsultationSection';
import AboutSection from '@/components/AboutSection';
import FinalCTASection from '@/components/FinalCTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <HeroSection />
          <PainPointsSection />
          <ServicesSection />
          <HowWeWorkSection />
          <FeesSection />
          <ConsultationSection />
          <AboutSection />
          <FinalCTASection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}