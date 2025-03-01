// components/EnhancedUIComponents.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ChevronDown, CheckCircle, Brain, BarChart2, DollarSign, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Enhanced Navbar with smooth background transition
export const EnhancedNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSolutionsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleSolutions = () => {
    setSolutionsOpen(!solutionsOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 font-mono">
        <div className="flex justify-between h-20 items-center">
          <Link href="/" className="text-2xl font-bold text-[var(--neutral-dark)]">Bracquets</Link>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex space-x-8">
              <div ref={dropdownRef} className="relative">
                <button 
                  onClick={toggleSolutions}
                  className="flex items-center text-[var(--neutral-dark)] hover:text-[var(--primary-red)] transition-colors"
                >
                  Solutions
                  <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {solutionsOpen && (
                  <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      <Link 
                        href="#features" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setSolutionsOpen(false)}
                      >
                        Features
                      </Link>
                      <Link 
                        href="#roadmap" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setSolutionsOpen(false)}
                      >
                        Roadmap
                      </Link>
                      <Link 
                        href="#case-studies" 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setSolutionsOpen(false)}
                      >
                        Case Studies
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              
              <Link href="#about" className="text-[var(--neutral-dark)] hover:text-[var(--primary-red)] transition-colors">
                About
              </Link>
              <Link href="#contact" className="text-[var(--neutral-dark)] hover:text-[var(--primary-red)] transition-colors">
                Contact
              </Link>
            </div>
            <Link href="#contact" className="bg-[var(--neutral-brown)] text-white px-6 py-2 rounded-full inline-flex items-center gap-2 hover:bg-[var(--primary-blue)] transition-colors">
              Schedule a meeting
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Enhanced Hero Section with Animation
export const AnimatedHero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 font-mono">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <div className="w-full h-full relative">
          <Image
            src="/images/hero-bg.png"
            alt="Tennis court background"
            fill
            priority
            className="object-cover brightness-105"
          />
        </div>
        <div className="absolute inset-0 hero-gradient" />
      </div>
      
      {/* Abstract blob animations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply opacity-20 animate-blob"></div>
        <div className="absolute top-40 -left-20 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-40 right-60 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
        <div className="max-w-3xl backdrop-blur-lg bg-white/30 p-12 rounded-lg">
          <span className="inline-block px-4 py-1 bg-[var(--primary-blue)] text-white rounded-full text-sm font-semibold mb-4">
            Trusted by Elite Club Managers
          </span>
          <h1 className="text-5xl md:text-6xl mb-6 text-[var(--neutral-dark)] font-mono font-semibold">
            Custom Court Management 
            <span className="bg-gradient-to-r from-[var(--primary-blue)] to-[var(--neutral-brown)] text-transparent bg-clip-text"> Designed for Prestigious Clubs</span>
          </h1>
          <p className="text-xl text-[var(--neutral-dark)] mb-8 font-medium">
            We create bespoke tennis and pickleball scheduling solutions that honor your club&apos;s traditions while providing modern technological advantages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="#contact" 
              className="bg-[var(--neutral-brown)] text-white px-8 py-4 rounded-full inline-flex items-center justify-center sm:justify-start gap-2 hover:bg-[var(--primary-blue)] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Schedule a Demo
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link 
              href="#case-studies" 
              className="border-2 border-[var(--neutral-brown)] text-[var(--neutral-brown)] px-8 py-4 rounded-full inline-flex items-center justify-center sm:justify-start hover:bg-[var(--neutral-brown)] hover:text-white transition-all duration-300"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// New AI Intelligence Section
export const AIIntelligenceSection = () => {
  return (
    <section id="ai-intelligence" className="py-24 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[var(--primary-blue)] font-medium tracking-wider">AI-POWERED</span>
          <h2 className="text-4xl mt-4 font-mono font-semibold">
            Intelligent Court Management
          </h2>
          <p className="mt-4 text-neutral-300 max-w-2xl mx-auto">
            Our AI-driven solutions optimize your club&apos;s operations while increasing ROI through smart automation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-neutral-800/50 backdrop-blur p-8 rounded-xl border border-neutral-700 hover:border-[var(--primary-blue)] transition-all duration-300">
            <div className="w-14 h-14 mb-6 bg-gradient-to-br from-[var(--primary-blue)] to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Predictive Booking Intelligence</h3>
            <p className="text-neutral-300 mb-4">
              AI algorithms analyze historical data to predict peak demand, optimize court allocation, and maximize utilization.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-neutral-200">25% increase in court utilization</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-neutral-200">Dynamic pricing recommendations</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-neutral-200">Automated maintenance scheduling</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-neutral-800/50 backdrop-blur p-8 rounded-xl border border-neutral-700 hover:border-[var(--primary-blue)] transition-all duration-300">
            <div className="w-14 h-14 mb-6 bg-gradient-to-br from-[var(--primary-blue)] to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
              <BarChart2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Smart Member Analytics</h3>
            <p className="text-neutral-300 mb-4">
              Advanced analytics track member behavior, preferences, and patterns to enhance satisfaction and engagement.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-neutral-200">Personalized member recommendations</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-neutral-200">Usage trend identification</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-neutral-200">30% increase in member engagement</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-neutral-800/50 backdrop-blur p-8 rounded-xl border border-neutral-700 hover:border-[var(--primary-blue)] transition-all duration-300">
            <div className="w-14 h-14 mb-6 bg-gradient-to-br from-[var(--primary-blue)] to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">ROI Optimization</h3>
            <p className="text-neutral-300 mb-4">
              AI-driven insights help maximize revenue while reducing operational costs and staffing requirements.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-neutral-200">15-20% reduction in operating costs</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-neutral-200">Revenue optimization suggestions</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-neutral-200">Automated billing and invoicing</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            href="#contact" 
            className="inline-flex items-center bg-[var(--primary-blue)] hover:bg-[var(--primary-blue)]/80 text-white py-3 px-8 rounded-md transition-colors"
          >
            <span>See How AI Can Boost Your Club&apos;s Performance</span>
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

// ROI Calculator Component
export const ROICalculator = () => {
  const [courts, setCourts] = useState(10);
  const [hoursPerDay, setHoursPerDay] = useState(12);
  const [currentUtilization, setCurrentUtilization] = useState(65);
  const [courtRate, setCourtRate] = useState(30);
  
  // Calculate potential ROI
  const daysPerYear = 365;
  const currentRevenue = courts * hoursPerDay * (currentUtilization / 100) * courtRate * daysPerYear;
  const improvedUtilization = Math.min(currentUtilization + 20, 95); // Cap at 95%
  const potentialRevenue = courts * hoursPerDay * (improvedUtilization / 100) * courtRate * daysPerYear;
  const additionalRevenue = potentialRevenue - currentRevenue;
  
  return (
    <section id="roi-calculator" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-[var(--primary-blue)] font-medium tracking-wider">ROI POTENTIAL</span>
          <h2 className="text-3xl font-mono font-semibold mt-2 mb-4 text-[var(--neutral-dark)]">
            Calculate Your Club&apos;s Revenue Potential
          </h2>
          <p className="text-[var(--neutral-brown)] max-w-2xl mx-auto">
            See how Bracquets&apos; intelligent court management can increase your club&apos;s revenue through improved utilization.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-[var(--neutral-light)] p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-6 text-[var(--neutral-dark)]">Club Details</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[var(--neutral-brown)] mb-1">Number of Courts</label>
                <input 
                  type="range" 
                  min="1" 
                  max="30" 
                  value={courts} 
                  onChange={(e) => setCourts(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between mt-1 text-sm text-[var(--neutral-brown)]">
                  <span>1</span>
                  <span>{courts} courts</span>
                  <span>30</span>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[var(--neutral-brown)] mb-1">Operating Hours Per Day</label>
                <input 
                  type="range" 
                  min="6" 
                  max="24" 
                  value={hoursPerDay} 
                  onChange={(e) => setHoursPerDay(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between mt-1 text-sm text-[var(--neutral-brown)]">
                  <span>6h</span>
                  <span>{hoursPerDay} hours</span>
                  <span>24h</span>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[var(--neutral-brown)] mb-1">Current Utilization Rate</label>
                <input 
                  type="range" 
                  min="30" 
                  max="90" 
                  value={currentUtilization} 
                  onChange={(e) => setCurrentUtilization(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between mt-1 text-sm text-[var(--neutral-brown)]">
                  <span>30%</span>
                  <span>{currentUtilization}%</span>
                  <span>90%</span>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[var(--neutral-brown)] mb-1">Average Court Rate ($/hour)</label>
                <input 
                  type="range" 
                  min="10" 
                  max="100" 
                  value={courtRate} 
                  onChange={(e) => setCourtRate(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between mt-1 text-sm text-[var(--neutral-brown)]">
                  <span>$10</span>
                  <span>${courtRate}/hr</span>
                  <span>$100</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-[var(--primary-blue)]/10 to-[var(--neutral-brown)]/10 p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-6 text-[var(--neutral-dark)]">Your Potential ROI</h3>
            <div className="space-y-6">
              <div>
                <p className="text-sm text-[var(--neutral-brown)] mb-1">Current Annual Revenue</p>
                <p className="text-2xl font-bold text-[var(--neutral-dark)]">${currentRevenue.toLocaleString()}</p>
              </div>
              
              <div>
                <p className="text-sm text-[var(--neutral-brown)] mb-1">Potential Annual Revenue</p>
                <p className="text-2xl font-bold text-[var(--primary-blue)]">${potentialRevenue.toLocaleString()}</p>
              </div>
              
              <div className="pt-4 border-t border-neutral-200">
                <p className="text-sm text-[var(--neutral-brown)] mb-1">Additional Annual Revenue</p>
                <p className="text-3xl font-bold text-green-600">+${additionalRevenue.toLocaleString()}</p>
                <p className="text-sm text-[var(--neutral-brown)] mt-1">
                  Based on {improvedUtilization - currentUtilization}% improved utilization rate
                </p>
              </div>
              
              <div className="pt-4">
                <Link 
                  href="#contact" 
                  className="inline-flex items-center bg-[var(--neutral-brown)] hover:bg-[var(--primary-blue)] text-white py-3 px-6 rounded-full transition-colors w-full justify-center"
                >
                  Get Your Customized ROI Analysis
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Enhanced Case Study Section
export const EnhancedCaseStudySection = () => {
  return (
    <section id="case-studies" className="py-24 bg-[var(--neutral-light)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[var(--primary-blue)] font-medium tracking-wider">PROVEN RESULTS</span>
          <h2 className="text-4xl mt-2 font-mono font-semibold text-[var(--neutral-dark)]">
            Success Stories
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="rounded-lg overflow-hidden h-full">
            <div className="bg-gradient-to-br from-[var(--primary-blue)]/20 to-[var(--neutral-brown)]/20 w-full h-full min-h-[300px] rounded-lg flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold">Riviera Analytics</h3>
                  <span className="text-xs text-neutral-500">Month over Month</span>
                </div>
                <div className="h-40 flex items-end space-x-2">
                  {[35, 42, 58, 69, 85, 78, 92].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center">
                      <div 
                        className="w-full bg-[var(--primary-blue)]" 
                        style={{ height: `${h}%` }}
                      ></div>
                      <span className="text-xs mt-1">{['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'][i]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-[var(--neutral-dark)]">
              Riviera Tennis Club
            </h3>
            <p className="text-[var(--neutral-brown)] mb-4">
              A prestigious club with 12 courts and over 500 tennis-playing members faced several operational challenges:
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
            </ul>
            
            <div className="bg-[var(--neutral-light)] p-6 rounded-lg mb-6">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold text-[var(--neutral-dark)]">Court Utilization</h4>
                  <p className="text-2xl font-bold text-green-600">+28%</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--neutral-dark)]">Staff Time Saved</h4>
                  <p className="text-2xl font-bold text-green-600">14 hrs/wk</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[var(--neutral-dark)]">ROI</h4>
                  <p className="text-2xl font-bold text-green-600">215%</p>
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              club: "Oakridge Country Club",
              challenge: "Inefficient scheduling system causing member dissatisfaction",
              result: "92% member satisfaction after implementation",
              roi: "185% ROI in first year"
            },
            {
              club: "Bayside Tennis Association",
              challenge: "Manual booking process requiring 25+ staff hours weekly",
              result: "Reduced admin time by 85%",
              roi: "163% ROI in first year"
            },
            {
              club: "Westlake Sports Club",
              challenge: "Low court utilization during off-peak hours",
              result: "31% increase in overall court usage",
              roi: "237% ROI in first year"
            }
          ].map((study, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-[var(--neutral-dark)]">{study.club}</h3>
              <p className="text-[var(--neutral-brown)] mb-4">{study.challenge}</p>
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} />
                  <span className="text-[var(--neutral-dark)] font-medium">{study.result}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} />
                  <span className="text-[var(--neutral-dark)] font-medium">{study.roi}</span>
                </div>
              </div>
              <Link href="#" className="text-[var(--primary-blue)] text-sm font-medium hover:underline inline-flex items-center">
                View Details
                <ChevronRight size={14} className="ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const UIComponents = () => {
  return (
    <>
      <AIIntelligenceSection />
      <ROICalculator />
      <EnhancedCaseStudySection />
      <ContactFormSection />
      <TestimonialsSection />
    </>
  );
};

// Add the ContactFormSection component
export const ContactFormSection = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-[var(--primary-blue)] font-medium tracking-wider">GET IN TOUCH</span>
          <h2 className="text-3xl font-mono font-semibold mt-2 mb-4 text-[var(--neutral-dark)]">
            Schedule a Demo
          </h2>
          <p className="text-[var(--neutral-brown)] max-w-2xl mx-auto">
            See how our solutions can transform your club's operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-[var(--neutral-light)] p-8 rounded-xl">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[var(--neutral-brown)] mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--primary-blue)] focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[var(--neutral-brown)] mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--primary-blue)] focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[var(--neutral-brown)] mb-1">
                  Club Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--primary-blue)] focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[var(--neutral-brown)] mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[var(--primary-blue)] focus:border-transparent"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[var(--neutral-brown)] hover:bg-[var(--primary-blue)] text-white py-3 px-6 rounded-full transition-colors"
              >
                Request Demo
              </button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[var(--neutral-dark)]">
                Why Schedule a Demo?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-[var(--neutral-brown)]">
                    See our intelligent court management system in action
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-[var(--neutral-brown)]">
                    Get a personalized ROI analysis for your club
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-[var(--neutral-brown)]">
                    Learn about our implementation process and timeline
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-[var(--primary-blue)]/10 to-[var(--neutral-brown)]/10 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-[var(--neutral-dark)]">
                Ready to Transform Your Club?
              </h3>
              <p className="text-[var(--neutral-brown)]">
                Join the growing number of prestigious clubs using our solutions to optimize their operations and enhance member experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Add the TestimonialsSection component
export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-[var(--neutral-light)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[var(--primary-blue)] font-medium tracking-wider">TESTIMONIALS</span>
          <h2 className="text-4xl mt-2 font-mono font-semibold text-[var(--neutral-dark)]">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Thompson",
              role: "Club Manager",
              club: "Oakridge Tennis Club",
              quote: "The intelligent scheduling system has transformed how we manage our courts. Member satisfaction is at an all-time high."
            },
            {
              name: "Michael Chen",
              role: "Operations Director",
              club: "Westside Athletic Club",
              quote: "Implementation was smooth and the ROI has exceeded our expectations. The analytics provide invaluable insights."
            },
            {
              name: "Amanda Rodriguez",
              role: "Tennis Director",
              club: "Harbor Point Sports",
              quote: "The automated court management has freed up our staff to focus on what matters most - our members."
            }
          ].map((testimonial, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md">
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-[var(--neutral-brown)] mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-[var(--neutral-dark)]">{testimonial.name}</p>
                <p className="text-sm text-[var(--neutral-brown)]">{testimonial.role}</p>
                <p className="text-sm text-[var(--primary-blue)]">{testimonial.club}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};