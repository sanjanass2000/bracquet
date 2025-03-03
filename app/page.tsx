'use client';

import { EnhancedHero } from './components/EnhancedHero';
import { EnhancedHeader } from './components/EnhancedHeader';
import { Footer } from './components/Footer';
import { Background } from './components/Background';

export default function Home() {
  return (
    <>
      <Background />
      <EnhancedHeader />
      <main className="relative">
        <EnhancedHero />
      </main>
      <Footer />
    </>
  );
}