'use client';

import { EnhancedHeader } from '../../components/EnhancedHeader';
import { Footer } from '../../components/Footer';
import { Background } from '../../components/Background';
import DifferentiationSection from '@/components/DifferentiationSection';

export default function DifferencePage() {
  return (
    <>
      <Background />
      <EnhancedHeader />
      <main className="relative pt-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="mb-8">
            <div className="text-sm text-blue-400 mb-2">About</div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              What Makes Us Different
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              We partner exclusively with prestigious clubs that value quality and tradition. 
              Our selective approach ensures we deliver unparalleled attention to each client.
            </p>
          </div>
          
          <div className="mt-12">
            <DifferentiationSection />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}