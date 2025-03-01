'use client';

import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export const AnimatedHero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 font-mono">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.png"
          alt="Tennis court background"
          fill
          priority
          className="object-cover brightness-105"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
        <div className="max-w-3xl backdrop-blur-lg bg-white/30 p-12 rounded-lg">
          <span className="inline-block px-4 py-1 bg-[var(--color-primary)] text-white rounded-full text-sm font-semibold mb-4">
            Trusted by Elite Club Managers
          </span>
          <h1 className="text-5xl md:text-6xl mb-6 text-[var(--color-neutral-dark)] font-mono font-semibold">
            Custom Court Management 
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-transparent bg-clip-text"> Designed for Prestigious Clubs</span>
          </h1>
          <p className="text-xl text-[var(--color-neutral-dark)] mb-8 font-medium">
            We create bespoke tennis and pickleball scheduling solutions that honor your club&apos;s traditions while providing modern technological advantages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="#contact" 
              className="bg-[var(--color-secondary)] text-white px-8 py-4 rounded-full inline-flex items-center justify-center sm:justify-start gap-2 hover:bg-[var(--color-primary)] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Schedule a Demo
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link 
              href="#case-studies" 
              className="border-2 border-[var(--color-secondary)] text-[var(--color-secondary)] px-8 py-4 rounded-full inline-flex items-center justify-center sm:justify-start hover:bg-[var(--color-secondary)] hover:text-white transition-all duration-300"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedHero; 