'use client';

import React, { useState } from 'react';
import { Users, Calendar, BarChart2, Bot, CreditCard, ShoppingBag, Smartphone, MessageCircle, Shield, Settings } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: <Users className="w-6 h-6 text-blue-400" />,
    title: "Role-Based Access",
    description: "Customizable login module with role-based permissions for members, staff, and administrators.",
    details: "Secure authentication with customizable roles and permissions. Seamlessly integrate with existing member databases or start fresh with our system."
  },
  {
    icon: <Calendar className="w-6 h-6 text-blue-400" />,
    title: "Member Portal",
    description: "Intuitive interface for court reservations, ladder rankings, event registrations, and club announcements.",
    details: "Members can easily book courts, join clinics, register for tournaments, and stay updated with club news through a beautiful, user-friendly interface."
  },
  {
    icon: <Settings className="w-6 h-6 text-purple-400" />,
    title: "Admin Dashboard",
    description: "Comprehensive controls for managing all aspects of your club with real-time analytics and reporting.",
    details: "Powerful tools for staff to manage court schedules, member accounts, program enrollments, and facility operations with intuitive controls."
  },
  {
    icon: <BarChart2 className="w-6 h-6 text-purple-400" />,
    title: "AI-Powered Analytics",
    description: "Intelligent insights from your club's data sources to drive strategic decisions and optimize operations.",
    details: "Our RAG-based analytics engine connects to your existing data sources to provide actionable insights on member engagement, revenue streams, and operational efficiency."
  },
  {
    icon: <Bot className="w-6 h-6 text-green-400" />,
    title: "Personalized AI Assistants",
    description: "Custom AI assistants for members and staff that enhance the club experience and operational efficiency.",
    details: "Voice-enabled AI assistants help members navigate the platform while providing staff with coaching and management support tailored to your club's needs."
  },
  {
    icon: <CreditCard className="w-6 h-6 text-green-400" />,
    title: "Payment Integration",
    description: "Seamless payment processing for court fees, membership dues, pro shop purchases, and event registrations.",
    details: "Integrate with popular payment processors or use our secure payment system to handle all financial transactions with detailed reporting."
  },
  {
    icon: <ShoppingBag className="w-6 h-6 text-blue-400" />,
    title: "Pro Shop Management",
    description: "Inventory tracking, online storefront, and point-of-sale system for your club's retail operations.",
    details: "Manage inventory, process sales, and provide members with an online shopping experience for equipment, apparel, and accessories."
  },
  {
    icon: <Smartphone className="w-6 h-6 text-purple-400" />,
    title: "Mobile Application",
    description: "Native mobile apps for iOS and Android that provide members with on-the-go access to all club features.",
    details: "Members can book courts, register for events, and receive notifications from anywhere with our beautifully designed mobile applications."
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-green-400" />,
    title: "Communication Platform",
    description: "Integrated messaging system for members and staff to connect, coordinate, and build community.",
    details: "Foster community with direct messaging, group chats, announcements, and event coordination tools that keep everyone connected."
  }
];

const CustomizableFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
          Modular Features
        </h2>
        
        <p className="text-xl text-gray-300 mb-16 max-w-3xl">
          Our platform is designed with flexibility in mind. Choose only the features your club needs, with seamless integration and the ability to add more as you grow.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              onClick={() => setActiveFeature(index)}
              className={`backdrop-blur-lg ${
                activeFeature === index 
                  ? 'bg-white/10 border-blue-400' 
                  : 'bg-white/5 border-white/10 hover:bg-white/8'
              } border rounded-lg p-6 cursor-pointer transition-all duration-300`}
            >
              <div className="flex items-center mb-3">
                {feature.icon}
                <h3 className="text-lg font-semibold ml-3 text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-lg p-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold mb-4 text-white">{features[activeFeature].title}</h3>
              <p className="text-gray-300 mb-6">{features[activeFeature].details}</p>
              <Link 
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-400 text-white transition-colors font-medium"
              >
                Learn More
                <Shield className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="md:w-1/3 bg-white/5 p-6 rounded-lg border border-white/10">
              <h4 className="text-lg font-medium mb-4 text-white">Why It Matters</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3" />
                  <span className="text-gray-300 text-sm">Enhances member experience</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3" />
                  <span className="text-gray-300 text-sm">Streamlines operations</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3" />
                  <span className="text-gray-300 text-sm">Increases revenue potential</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3" />
                  <span className="text-gray-300 text-sm">Saves staff time</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizableFeatures; 