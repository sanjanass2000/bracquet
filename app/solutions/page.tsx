'use client';

import { EnhancedHeader } from '../components/EnhancedHeader';
import { Footer } from '../components/Footer';
import { Background } from '../components/Background';
import { SolutionsRoadmap } from '../components/SolutionsRoadmap';

export default function SolutionsPage() {
  return (
    <>
      <Background />
      <EnhancedHeader />
      <main className="relative pt-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Solutions
          </h1>
          <SolutionsRoadmap />
        </div>
      </main>
      <Footer />
    </>
  );
}