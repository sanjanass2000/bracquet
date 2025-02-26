// components/CaseStudySection.tsx
'use client';

import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const CaseStudySection = () => {
  return (
    <section id="case-studies" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[var(--primary-blue)] font-medium tracking-wider">CASE STUDY</span>
          <h2 className="text-4xl mt-4 text-[var(--neutral-dark)] font-mono font-semibold">
            Success at Clubs Like Yours
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg shadow-lg overflow-hidden h-full">
            {/* Replace with an actual image */}
            <div className="bg-[var(--neutral-light)] w-full h-full min-h-[300px] flex items-center justify-center">
              <p className="text-[var(--neutral-brown)]">Tennis Club Image</p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-[var(--neutral-dark)]">
              Riviera Tennis Club
            </h3>
            <p className="text-[var(--neutral-brown)] mb-4">
              A prestigious club with 12 courts and over 500 tennis-playing members faced challenges similar to Austin Country Club:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                <span className="text-[var(--neutral-brown)]">Complex member hierarchy with different booking privileges</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                <span className="text-[var(--neutral-brown)]">Seasonal transitions between indoor and outdoor courts</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                <span className="text-[var(--neutral-brown)]">Multiple tennis programs competing for court time</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                <span className="text-[var(--neutral-brown)]">Traditional booking processes that members were hesitant to change</span>
              </li>
            </ul>
            
            <div className="bg-[var(--neutral-light)] p-6 rounded-lg mb-6">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold text-[var(--neutral-dark)]">Court Utilization</h4>
                  <p className="text-sm text-[var(--neutral-brown)]">Increased by 28%</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--neutral-dark)]">Staff Time Saved</h4>
                  <p className="text-sm text-[var(--neutral-brown)]">14 hours weekly</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--neutral-dark)]">Member Satisfaction</h4>
                  <p className="text-sm text-[var(--neutral-brown)]">92% approval</p>
                </div>
              </div>
            </div>
            
            <Link 
              href="#"
              className="text-[var(--primary-blue)] inline-flex items-center font-semibold hover:underline"
            >
              Read Full Case Study
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;