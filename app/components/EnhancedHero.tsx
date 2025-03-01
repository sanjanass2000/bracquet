// Updated Hero Section with left-aligned content
'use client';

import { useEffect, useState } from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const EnhancedHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-gradient" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* <span className="inline-block px-4 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-blue-500/20">
            ELEVATING PRESTIGIOUS CLUBS
          </span>
           */}
          <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {/* Intelligent racquet club management, <span className="text-blue-400">reimagined</span> */}
            The intelligent racquet club experience
          </h1>

          <div className="backdrop-blur-lg bg-white/5 rounded-lg p-8 mb-12 max-w-xl border border-white/10">
            <p className="text-xl text-gray-300 leading-relaxed">
              Preserve your club's traditions while embracing the future. Our AI-powered platform enhances member experiences, optimizes operations, and delivers unprecedented insights.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <Link href="#contact" className="px-8 py-4 bg-blue-500 hover:bg-blue-400 text-white rounded-lg transition-colors font-semibold flex items-center justify-center">
              Request Demo
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="#solutions" className="px-8 py-4 border border-white/20 rounded-lg hover:bg-white/5 transition-colors text-white flex items-center justify-center">
              Explore Solutions
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
        
        <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Image 
                src="/images/hero-bg.png" 
                alt="Intelligent Tennis Club Dashboard" 
                width={600} 
                height={600}
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedHero;