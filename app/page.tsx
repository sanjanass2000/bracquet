// File: app/page.tsx
'use client';

import Navbar from './components/Navbar';
import DashboardCards from './components/DashboardCards';
import SolutionsRoadmap from '../components/SolutionsRoadmap';
import { Calendar, Clock, Settings } from 'lucide-react';

// Import new enhanced components
import EnhancedHero from './components/EnhancedHero';
import TestimonialsSection from '../components/TestimonialsSection';
import CaseStudySection from '../components/CaseStudySection';
import ContactFormSection from '../components/ContactFormSection';

const features = [
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Customized Scheduling Rules",
    description: "Built around your club's unique booking policies, member categories, and court allocation preferences."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Tailored Time Management",
    description: "Custom peak time rules, waitlist management, and rotation systems designed for your membership structure."
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Seamless Integration",
    description: "Built to work with your existing club management software and member database systems."
  }
];

export default function Home() {
  return (
    <main className={`min-h-screen bg-neutral-50`}>
      <Navbar />
      
      {/* Enhanced Hero Section */}
      <EnhancedHero />

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
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Case Study Section */}
      <CaseStudySection />

      {/* About Section */}
      <section id="about" className="py-24 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#0077BE] font-medium">ABOUT US</span>
              <h2 className="text-4xl font-mono mt-4 mb-8">The Bracquets Approach</h2>
              <p className="text-neutral-300 text-lg mb-6">
                Founded by former club managers and tennis professionals, Bracquets was born from firsthand experience with the limitations of generic booking systems.
              </p>
              <p className="text-neutral-300 text-lg mb-6">
                We understand that prestigious clubs like Austin Country Club maintain unique traditions and protocols that define your member experience. Our mission is to create technology that enhances those traditions rather than replacing them.
              </p>
              <p className="text-neutral-300 text-lg mb-6">
                Every solution we build begins with a thorough discovery process, working closely with your tennis staff, management team, and even member representatives to ensure we truly understand what makes your club special.
              </p>
              <button className="text-white border-2 border-white px-8 py-4 rounded-full hover:bg-white hover:text-neutral-900 transition-colors">
                Our Process
              </button>
            </div>
            <DashboardCards />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactFormSection />
    </main>
  );
}