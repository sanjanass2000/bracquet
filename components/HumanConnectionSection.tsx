'use client';

import React from 'react';
import { Users, Heart, Clock, Zap } from 'lucide-react';

const HumanConnectionSection = () => {
  return (
    <section id="human-connection" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
          Enhancing Human Connection
        </h2>
        
        <p className="text-xl text-gray-300 mb-16 max-w-3xl">
          Technology should enhance relationships, not replace them. Our platform gives time back to your staff and members, allowing them to focus on what truly matters.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-all duration-300">
            <Users className="w-10 h-10 text-blue-400 mb-6" />
            <h3 className="text-xl font-semibold text-white mb-4">For Members</h3>
            <p className="text-gray-300 mb-6">
              Simplified booking, seamless communication, and personalized experiences that enhance club engagement and satisfaction.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3" />
                <span className="text-gray-300 text-sm">Effortless court reservations</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3" />
                <span className="text-gray-300 text-sm">Personalized AI assistance</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3" />
                <span className="text-gray-300 text-sm">More time for playing and socializing</span>
              </li>
            </ul>
          </div>
          
          <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-all duration-300">
            <Heart className="w-10 h-10 text-purple-400 mb-6" />
            <h3 className="text-xl font-semibold text-white mb-4">For Staff</h3>
            <p className="text-gray-300 mb-6">
              Automated administrative tasks and intelligent tools that free your team to deliver exceptional service.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3" />
                <span className="text-gray-300 text-sm">Reduced administrative burden</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3" />
                <span className="text-gray-300 text-sm">AI-powered decision support</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3" />
                <span className="text-gray-300 text-sm">More time for member interaction</span>
              </li>
            </ul>
          </div>
          
          <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-all duration-300">
            <Zap className="w-10 h-10 text-green-400 mb-6" />
            <h3 className="text-xl font-semibold text-white mb-4">For the Club</h3>
            <p className="text-gray-300 mb-6">
              A thriving community where technology enhances tradition rather than replacing it.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3" />
                <span className="text-gray-300 text-sm">Stronger member relationships</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3" />
                <span className="text-gray-300 text-sm">Enhanced club culture and community</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3" />
                <span className="text-gray-300 text-sm">Preserved traditions with modern efficiency</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Technology That Serves People</h3>
              <p className="text-gray-300 mb-6">
                Our platform is designed with a fundamental understanding that technology should serve people, not the other way around. By automating routine tasks and providing intelligent insights, we free your staff and members to focus on what truly matters: building relationships and enjoying the sport.
              </p>
              <p className="text-gray-300">
                The result is a club where technology enhances the human experience rather than replacing it—where tradition and innovation coexist harmoniously to create an exceptional environment for everyone.
              </p>
            </div>
            
            <div className="bg-white/5 p-8 rounded-lg border border-white/10">
              <Clock className="w-12 h-12 text-blue-400 mb-6" />
              <h4 className="text-xl font-semibold text-white mb-4">Time Reclaimed</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">For Members</span>
                  <span className="text-blue-400 font-bold">3.5 hrs/week</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full">
                  <div className="bg-blue-400 h-2 rounded-full" style={{ width: '70%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">For Staff</span>
                  <span className="text-purple-400 font-bold">18 hrs/week</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full">
                  <div className="bg-purple-400 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">For Management</span>
                  <span className="text-green-400 font-bold">12 hrs/week</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full">
                  <div className="bg-green-400 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanConnectionSection; 