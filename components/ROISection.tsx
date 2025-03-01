'use client';

import React from 'react';
import { TrendingUp, Clock, Users, DollarSign } from 'lucide-react';
import Link from 'next/link';

const ROISection = () => {
  return (
    <section id="roi" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
          The AI Advantage
        </h2>
        
        <p className="text-xl text-gray-300 mb-16 max-w-3xl">
          For prestigious racquet clubs, embracing AI-forward solutions isn't just about innovation—it's about maintaining your competitive edge and elevating the member experience.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center backdrop-blur-lg bg-white/5 border border-white/10 rounded-lg p-8 mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white">Measurable Returns</h3>
            <p className="text-gray-300 mb-8">
              Our clients consistently report significant improvements across key performance indicators after implementing our platform:
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                <TrendingUp className="w-8 h-8 text-blue-400 mb-3" />
                <h4 className="text-lg font-semibold text-white mb-2">Court Utilization</h4>
                <p className="text-3xl font-bold text-blue-400">+32%</p>
                <p className="text-sm text-gray-400 mt-2">Average increase across all clubs</p>
              </div>
              
              <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                <Clock className="w-8 h-8 text-purple-400 mb-3" />
                <h4 className="text-lg font-semibold text-white mb-2">Staff Time Saved</h4>
                <p className="text-3xl font-bold text-purple-400">18 hrs/wk</p>
                <p className="text-sm text-gray-400 mt-2">Average per administrative staff</p>
              </div>
              
              <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                <Users className="w-8 h-8 text-green-400 mb-3" />
                <h4 className="text-lg font-semibold text-white mb-2">Member Satisfaction</h4>
                <p className="text-3xl font-bold text-green-400">+41%</p>
                <p className="text-sm text-gray-400 mt-2">Increase in satisfaction scores</p>
              </div>
              
              <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                <DollarSign className="w-8 h-8 text-blue-400 mb-3" />
                <h4 className="text-lg font-semibold text-white mb-2">Revenue Growth</h4>
                <p className="text-3xl font-bold text-blue-400">22%</p>
                <p className="text-sm text-gray-400 mt-2">Average annual increase</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white/5 p-6 rounded-lg border border-white/10">
              <h4 className="text-xl font-semibold text-white mb-4">ROI Timeline</h4>
              <div className="relative pt-6">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-white/10"></div>
                
                <div className="relative pl-12 mb-8">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-blue-500/20 border border-blue-400 flex items-center justify-center">
                    <span className="text-blue-400 font-bold">1</span>
                  </div>
                  <h5 className="text-white font-medium mb-2">Month 1-2</h5>
                  <p className="text-gray-300 text-sm">Implementation and staff training completed</p>
                </div>
                
                <div className="relative pl-12 mb-8">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-purple-500/20 border border-purple-400 flex items-center justify-center">
                    <span className="text-purple-400 font-bold">2</span>
                  </div>
                  <h5 className="text-white font-medium mb-2">Month 3-4</h5>
                  <p className="text-gray-300 text-sm">Operational efficiency improvements begin</p>
                </div>
                
                <div className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-green-500/20 border border-green-400 flex items-center justify-center">
                    <span className="text-green-400 font-bold">3</span>
                  </div>
                  <h5 className="text-white font-medium mb-2">Month 6</h5>
                  <p className="text-gray-300 text-sm">Full ROI achieved with ongoing benefits</p>
                </div>
              </div>
            </div>
            
            <Link 
              href="#contact"
              className="block text-center px-6 py-4 bg-blue-500 hover:bg-blue-400 text-white rounded-lg transition-colors font-medium"
            >
              Get Your Custom ROI Analysis
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROISection; 