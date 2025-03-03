'use client';

import { EnhancedHeader } from '../../components/EnhancedHeader';
import { Footer } from '../../components/Footer';
import { Background } from '../../components/Background';
import ROISection from '@/components/ROISection';

export default function ROIPage() {
  return (
    <>
      <Background />
      <EnhancedHeader />
      <main className="relative pt-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="mb-8">
            <div className="text-sm text-blue-400 mb-2">Results</div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              ROI Analysis
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              For prestigious racquet clubs, embracing AI-forward solutions isn't just about innovation—it's about 
              maintaining your competitive edge and elevating the member experience.
            </p>
          </div>
          
          <div className="mt-12">
            <ROISection />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}