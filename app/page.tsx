'use client';

import { EnhancedHero } from './components/EnhancedHero';
import { SolutionsRoadmap } from './components/SolutionsRoadmap';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Background } from './components/Background';
import CaseStudySection from '@/components/CaseStudySection';
import ContactFormSection from '@/components/ContactFormSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CustomizableFeatures from '@/components/CustomizableFeatures';
import ROISection from '@/components/ROISection';
import DifferentiationSection from '@/components/DifferentiationSection';
import HumanConnectionSection from '@/components/HumanConnectionSection';
import EnterpriseSection from '@/components/EnterpriseSection';

export default function Home() {
  return (
    <>
      <Background />
      <Header />
      <main className="relative">
        <EnhancedHero />
        <SolutionsRoadmap />
        <CustomizableFeatures />
        <ROISection />
        <CaseStudySection />
        <DifferentiationSection />
        <HumanConnectionSection />
        <EnterpriseSection />
        <TestimonialsSection />
        <ContactFormSection />
      </main>
      <Footer />
    </>
  );
}