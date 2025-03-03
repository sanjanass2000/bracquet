'use client';

import { EnhancedHeader } from '../components/EnhancedHeader';
import { Footer } from '../components/Footer';
import { Background } from '../components/Background';
import CustomizableFeatures from '@/components/CustomizableFeatures';

export default function FeaturesPage() {
  return (
    <>
      <Background />
      <EnhancedHeader />
      <main className="relative pt-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Features
          </h1>
          <CustomizableFeatures />
        </div>
      </main>
      <Footer />
    </>
  );
}