'use client';

import React from 'react';
import { Shield, Lock, Headphones, Server, Code } from 'lucide-react';
import Link from 'next/link';

const EnterpriseSection = () => {
  return (
    <section id="enterprise" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
          Enterprise-Grade Quality
        </h2>
        
        <p className="text-xl text-gray-300 mb-16 max-w-3xl">
          Prestigious clubs deserve technology that matches their standards. Our platform delivers enterprise-level security, reliability, and performance.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-lg p-8">
              <div className="flex items-start">
                <Shield className="text-blue-400 mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Bank-Level Security</h3>
                  <p className="text-gray-300">
                    Your data is protected with enterprise-grade encryption, secure authentication, and comprehensive access controls that meet the highest industry standards.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-lg p-8">
              <div className="flex items-start">
                <Server className="text-purple-400 mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">99.9% Uptime Guarantee</h3>
                  <p className="text-gray-300">
                    Our cloud infrastructure ensures your platform is always available when your members need it, with redundant systems and continuous monitoring.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-lg p-8">
              <div className="flex items-start">
                <Headphones className="text-green-400 mr-3 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">White-Glove Support</h3>
                  <p className="text-gray-300">
                    Our dedicated support team is available 24/7 to assist with any questions or issues, ensuring your club's operations run smoothly at all times.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Built for Prestigious Clubs</h3>
            <p className="text-gray-300 mb-8">
              Our platform is designed specifically for the unique needs of high-end racquet clubs, with features that cater to discerning members and exacting standards:
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Lock className="text-blue-400 mr-3 mt-1 flex-shrink-0" size={18} />
                <div>
                  <h4 className="text-white font-medium">Advanced Privacy Controls</h4>
                  <p className="text-sm text-gray-400">Granular permissions and privacy settings that respect member confidentiality</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <Code className="text-purple-400 mr-3 mt-1 flex-shrink-0" size={18} />
                <div>
                  <h4 className="text-white font-medium">Custom API Integration</h4>
                  <p className="text-sm text-gray-400">Seamless connection with your existing systems and third-party services</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <Server className="text-green-400 mr-3 mt-1 flex-shrink-0" size={18} />
                <div>
                  <h4 className="text-white font-medium">Dedicated Infrastructure</h4>
                  <p className="text-sm text-gray-400">Optional private cloud deployment for ultimate performance and security</p>
                </div>
              </li>
            </ul>
            
            <Link 
              href="#contact"
              className="block text-center px-6 py-4 bg-blue-500 hover:bg-blue-400 text-white rounded-lg transition-colors font-medium"
            >
              Schedule a Security Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSection; 