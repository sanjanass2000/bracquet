// components/CaseStudySection.tsx
'use client';

import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const CaseStudySection = () => {
  return (
    <section id="case-studies" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-24 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
          Success Stories
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center backdrop-blur-lg bg-white/5 border border-white/10 rounded-lg p-8">
          <div className="rounded-lg overflow-hidden h-full">
            <div className="bg-gradient-to-br from-[var(--primary-blue)]/20 to-purple-500/20 w-full h-full min-h-[300px] rounded-lg flex items-center justify-center">
              <div className="bg-white/10 backdrop-blur p-6 rounded-lg shadow-lg max-w-sm">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-white">Riviera Analytics</h3>
                  <span className="text-xs text-gray-400">Month over Month</span>
                </div>
                <div className="h-40 flex items-end space-x-2">
                  {[35, 42, 58, 69, 85, 78, 92].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center">
                      <div 
                        className="w-full bg-blue-400" 
                        style={{ height: `${h}%` }}
                      ></div>
                      <span className="text-xs mt-1 text-gray-400">{['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'][i]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="text-white">
            <h3 className="text-2xl font-semibold mb-4">
              Riviera Tennis Club
            </h3>
            <p className="text-gray-400 mb-4">
              A prestigious club with 12 courts and over 500 tennis-playing members faced several operational challenges:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <CheckCircle className="text-blue-400 mr-2 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">Complex member hierarchy with different booking privileges</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-blue-400 mr-2 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">Seasonal transitions between indoor and outdoor courts</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-blue-400 mr-2 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">Multiple tennis programs competing for court time</span>
              </li>
            </ul>
            
            <div className="bg-white/5 backdrop-blur p-6 rounded-lg mb-6 border border-white/10">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-300">Court Utilization</h4>
                  <p className="text-2xl font-bold text-blue-400">+28%</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-300">Staff Time Saved</h4>
                  <p className="text-2xl font-bold text-blue-400">14 hrs/wk</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-300">ROI</h4>
                  <p className="text-2xl font-bold text-blue-400">215%</p>
                </div>
              </div>
            </div>
            
            <Link 
              href="#"
              className="text-blue-400 inline-flex items-center font-semibold hover:text-blue-300 transition-colors"
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