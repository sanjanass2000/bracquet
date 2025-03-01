'use client';

import { Calendar, BarChart2, Bot, Clock, Users, TrendingUp, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export const SolutionsRoadmap = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const solutions = [
    {
      icon: <Calendar className="w-6 h-6 text-blue-400" />,
      title: "Intelligent Scheduling",
      description: "AI-powered court allocation that maximizes utilization while respecting member hierarchies and traditions.",
      benefits: [
        "Increase court utilization by up to 30%",
        "Reduce scheduling conflicts by 85%",
        "Automate waitlists and cancellations",
        "Preserve member booking privileges"
      ]
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-purple-400" />,
      title: "Analytics at Your Fingertips",
      description: "Real-time insights that transform data into actionable strategies for growth and member satisfaction.",
      benefits: [
        "Track member engagement patterns",
        "Identify revenue optimization opportunities",
        "Forecast seasonal demand with precision",
        "Measure program performance metrics"
      ]
    },
    {
      icon: <Bot className="w-6 h-6 text-green-400" />,
      title: "Intelligent Management Assistants",
      description: "AI agents that handle routine tasks, freeing your staff to focus on creating exceptional member experiences.",
      benefits: [
        "Automate member communications",
        "Provide 24/7 member support",
        "Streamline administrative workflows",
        "Enhance decision-making with AI insights"
      ]
    }
  ];

  return (
    <section id="solutions" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
          Solutions That Transform
        </h2>
        
        <p className="text-xl text-gray-300 mb-16 max-w-3xl">
          Our platform enhances member satisfaction, increases revenue, and gives back valuable time—all while maintaining the human connection that makes your club special.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {solutions.map((solution, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`backdrop-blur-lg ${
                activeTab === index 
                  ? 'bg-white/10 border-blue-400' 
                  : 'bg-white/5 border-white/10 hover:bg-white/8'
              } border rounded-lg p-8 text-left transition-all duration-300`}
            >
              <div className="flex items-center mb-4">
                {solution.icon}
                <h3 className="text-xl font-semibold ml-3 text-white">{solution.title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{solution.description}</p>
            </button>
          ))}
        </div>

        <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-lg p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">{solutions[activeTab].title}</h3>
              <ul className="space-y-4">
                {solutions[activeTab].benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className={`w-2 h-2 ${
                      activeTab === 0 ? 'bg-blue-400' : 
                      activeTab === 1 ? 'bg-purple-400' : 'bg-green-400'
                    } rounded-full`} />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href="#contact"
                className={`mt-8 inline-flex items-center px-6 py-3 rounded-lg ${
                  activeTab === 0 ? 'bg-blue-500 hover:bg-blue-400' : 
                  activeTab === 1 ? 'bg-purple-500 hover:bg-purple-400' : 
                  'bg-green-500 hover:bg-green-400'
                } text-white transition-colors font-medium`}
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <div className={`absolute inset-0 ${
                activeTab === 0 
                  ? 'bg-gradient-to-b from-blue-500/20 to-blue-900/20' 
                  : activeTab === 1 
                  ? 'bg-gradient-to-b from-purple-500/20 to-purple-900/20'
                  : 'bg-gradient-to-b from-green-500/20 to-green-900/20'
              }`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 