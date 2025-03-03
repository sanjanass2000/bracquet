'use client';

import { EnhancedHeader } from '../../components/EnhancedHeader';
import { Footer } from '../../components/Footer';
import { Background } from '../../components/Background';
import CustomizableFeatures from '@/components/CustomizableFeatures';

export default function CustomizableModulesPage() {
  return (
    <>
      <Background />
      <EnhancedHeader />
      <main className="relative pt-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="mb-8">
            <div className="text-sm text-blue-400 mb-2">Features</div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              Customizable Modules
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              Our platform is designed with flexibility in mind. Choose only the features your club needs, 
              with seamless integration and the ability to add more as you grow.
            </p>
          </div>
          
          <div className="mt-12">
            <CustomizableFeatures />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}