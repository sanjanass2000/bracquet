'use client';

import React from 'react';
import { CheckCircle, Star, Shield, Clock } from 'lucide-react';

const DifferentiationSection = () => {
  return (
    <section id="difference" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
          What Makes Us Different
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-lg p-8">
              <div className="flex items-start mb-4">
                <Star className="text-yellow-400 mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Exclusive Focus on Excellence</h3>
                  <p className="text-gray-300">
                    We partner exclusively with prestigious clubs that value quality and tradition. Our selective approach ensures we deliver unparalleled attention to each client.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-lg p-8">
              <div className="flex items-start mb-4">
                <Shield className="text-blue-400 mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Bespoke Customization</h3>
                  <p className="text-gray-300">
                    We don't just customize features—we capture your club's unique social nuances, traditions, and member hierarchies in every aspect of our solution.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-lg p-8">
              <div className="flex items-start mb-4">
                <Clock className="text-purple-400 mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Human Connection First</h3>
                  <p className="text-gray-300">
                    Our technology exists to enhance human connections, not replace them. We give time back to your staff so they can focus on creating exceptional member experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">The Bracquets Difference</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="text-blue-400 mr-3 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">
                  We understand the delicate balance between tradition and innovation at prestigious clubs
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-blue-400 mr-3 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">
                  Our team includes former club managers and tennis professionals who understand your challenges
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-blue-400 mr-3 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">
                  We offer white-glove implementation with dedicated support throughout your journey
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-blue-400 mr-3 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">
                  Our AI technology is designed specifically for the unique needs of racquet clubs
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-blue-400 mr-3 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">
                  We maintain ongoing partnerships to ensure your club stays at the forefront of innovation
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentiationSection; 