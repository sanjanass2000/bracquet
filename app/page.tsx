// File: app/page.tsx
'use client';

import Image from 'next/image';
import Navbar from './components/Navbar';
import DashboardCards from './components/DashboardCards';
import SolutionsRoadmap from '../components/SolutionsRoadmap';
import { ChevronRight, Calendar, Clock, Settings } from 'lucide-react';

const features = [
  {
    icon: <Calendar />,
    title: "Customized Scheduling Rules",
    description: "Built around your club's unique booking policies, member categories, and court allocation preferences."
  },
  {
    icon: <Clock />,
    title: "Tailored Time Management",
    description: "Custom peak time rules, waitlist management, and rotation systems designed for your membership structure."
  },
  {
    icon: <Settings />,
    title: "Seamless Integration",
    description: "Built to work with your existing club management software and member database systems."
  }
];

export default function Home() {
  return (
    <main className={`min-h-screen bg-neutral-50`}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center font-mono">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.png"
            alt="Tennis court background"
            fill={true}
            priority={true}
            className="object-cover brightness-110"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
          <div className="max-w-3xl backdrop-blur-lg bg-white/30 p-12 rounded-lg">
            <h1 className="text-6xl mb-6 text-[var(--neutral-dark)] font-mono font-semibold">
              Elevate your club&apos;s court management experience.
            </h1>
            <p className="text-xl text-[var(--neutral-brown)] mb-8 font-medium">
              We craft custom tennis and pickleball booking platforms tailored to your club&apos;s unique traditions, rules, and member preferences.
            </p>
            <div className="flex gap-4">
              <button className="bg-[var(--neutral-brown)] text-white px-8 py-4 rounded-full inline-flex items-center gap-2 hover:bg-[var(--primary-blue)] transition-all duration-300 shadow-lg hover:shadow-xl">
                Request Custom Solution
                <ChevronRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-[var(--neutral-brown)] text-[var(--neutral-brown)] px-8 py-4 rounded-full hover:bg-[var(--neutral-brown)] hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-[var(--neutral-light)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[var(--primary-blue)] font-medium tracking-wider">SOLUTIONS</span>
            <h2 className="text-4xl mt-4 text-[var(--neutral-dark)] font-mono font-semibold">
              Custom Solutions Tailored to Your Club
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} 
                   className="bg-white p-8 rounded-lg hover:shadow-xl transition-all duration-300 border border-[var(--neutral-beige)]">
                <div className="w-12 h-12 text-[var(--primary-blue)] mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl mb-4 text-[var(--neutral-dark)] font-mono font-semibold">
                  {feature.title}
                </h3>
                <p className="text-[var(--neutral-brown)]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Roadmap Section */}
      <SolutionsRoadmap />

      {/* About Section */}
      <section id="about" className="py-24 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#0077BE] font-medium">ABOUT US</span>
              <h2 className="text-4xl font-mono mt-4 mb-8">Crafting Elite Club Experiences</h2>
              <p className="text-neutral-300 text-lg mb-6">
                At Bracquet, we specialize in creating bespoke booking solutions for prestigious tennis and pickleball facilities. Unlike one-size-fits-all platforms, we build custom systems that preserve and enhance your club&apos;s unique character and traditions.
              </p>
              <button className="text-white border-2 border-white px-8 py-4 rounded-full hover:bg-white hover:text-neutral-900 transition-colors">
                Learn More
              </button>
            </div>
            <DashboardCards />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-[var(--neutral-brown)] font-medium">GET IN TOUCH</span>
          <h2 className="text-4xl text-[var(--neutral-brown)] font-mono mt-4 mb-8">Ready to Elevate Your Club&apos;s Experience?</h2>
          <p className="text-neutral-600 mb-12 max-w-2xl mx-auto text-lg fobt-mono">
            Contact us to discuss how we can create a custom solution that perfectly matches your club&apos;s needs. We pride ourselves in our attention to detail for you.
          </p>
          <button className="bg-[var(--neutral-brown)] text-white px-8 py-4 rounded-full inline-flex items-center gap-2 hover:bg-[#FF3232]/90 transition-colors">
            Schedule a Consultation
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Placeholder for Case Studies section */}
      <section id="case-studies" className="hidden">
        {/* This section can be developed later */}
      </section>
    </main>
  );
}