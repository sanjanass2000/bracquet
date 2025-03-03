'use client';

import { EnhancedHeader } from '../components/EnhancedHeader';
import { Footer } from '../components/Footer';
import { Background } from '../components/Background';
import ROISection from '@/components/ROISection';
import CaseStudySection from '@/components/CaseStudySection';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function ResultsPage() {
  return (
    <>
      <Background />
      <EnhancedHeader />
      <main className="relative pt-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Results
          </h1>
          <ROISection />
          <CaseStudySection />
          <TestimonialsSection />
        </div>
      </main>
      <Footer />
    </>
  );
}