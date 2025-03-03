'use client';

import { EnhancedHeader } from '../components/EnhancedHeader';
import { Footer } from '../components/Footer';
import { Background } from '../components/Background';
import ContactFormSection from '@/components/ContactFormSection';

export default function ContactPage() {
  return (
    <>
      <Background />
      <EnhancedHeader />
      <main className="relative pt-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <ContactFormSection />
        </div>
      </main>
      <Footer />
    </>
  );
}