// components/SolutionsRoadmap.tsx
import React from 'react';
import { Calendar, Bot, TrendingUp } from 'lucide-react';

const SolutionsRoadmap = () => {
  const roadmapSteps = [
    {
      icon: <Calendar className="w-12 h-12 mb-4 text-[#0077BE]" />,
      phase: "Phase 1: Operational Excellence",
      title: "Schedule & Booking Management",
      description: "Streamline your club's operations with our advanced scheduling and booking system. Improve court utilization, manage member bookings, and optimize resource allocation for maximum efficiency.",
      features: [
        "Automated court booking system",
        "Real-time availability updates",
        "Resource management dashboard",
        "Staff scheduling optimization"
      ]
    },
    {
      icon: <Bot className="w-12 h-12 mb-4 text-[#0077BE]" />,
      phase: "Phase 2: AI Integration",
      title: "Intelligent Automation",
      description: "Introduce AI-powered automation to handle routine tasks and enhance member experience. Our smart booking assistant helps manage reservations and member inquiries 24/7.",
      features: [
        "AI booking assistant",
        "Automated member communications",
        "Smart capacity management",
        "Predictive maintenance alerts"
      ]
    },
    {
      icon: <TrendingUp className="w-12 h-12 mb-4 text-[#0077BE]" />,
      phase: "Phase 3: Enhanced Analytics",
      title: "Performance & Training Insights",
      description: "Leverage advanced analytics to improve training programs and member experience. Incorporate coach feedback and performance data to create personalized improvement plans.",
      features: [
        "Coach feedback integration",
        "Training session analytics",
        "Performance tracking",
        "Personalized member recommendations"
      ]
    }
  ];

  return (
    <section id="roadmap" className="py-24 bg-[var(--neutral-light)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-4">
          <span className="text-[#0077BE] font-medium tracking-wider">ROADMAP</span>
        </div>
        <h2 className="text-4xl font-mono font-semibold text-center mb-16 text-[var(--neutral-dark)]">
          Solutions Roadmap
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {roadmapSteps.map((step, index) => (
            <div
              key={index}
              className="p-8 rounded-lg shadow-lg transform hover:translate-y-[-5px] transition-transform duration-300 border border-[var(--neutral-beige)] bg-white"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-6 relative">
                  <div className="absolute inset-0 bg-[#0077BE] blur-[20px] opacity-20"></div>
                  {step.icon}
                </div>
                <div className="text-sm font-semibold text-[#0077BE] mb-2">
                  {step.phase}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-[var(--neutral-dark)] font-mono">
                  {step.title}
                </h3>
                <p className="text-[var(--neutral-brown)] mb-6">
                  {step.description}
                </p>
                <ul className="space-y-2 text-left w-full">
                  {step.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start text-[var(--neutral-brown)]">
                      <span className="mr-2 text-[#0077BE]">•</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsRoadmap;