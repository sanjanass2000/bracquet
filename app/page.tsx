// 'use client';

// import React, { useState, useEffect } from 'react';
// import { Calendar, Clock, Settings, ChevronRight } from 'lucide-react';
// import { Playfair_Display, Cormorant } from 'next/font/google';
// import SolutionsRoadmap from '@/components/SolutionsRoadmap';

// const playfair = Playfair_Display({ subsets: ['latin'] });
// const cormorant = Cormorant({ subsets: ['latin'] });

// export default function Home() {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className={`min-h-screen ${cormorant.className}`} style={{ backgroundColor: '#f5f1ed' }}>
//       {/* Navigation */}
//       <nav className={`fixed w-full z-50 transition-all duration-300 ${
//         isScrolled 
//           ? 'bg-[#252323]/80 backdrop-blur-md border-b border-[#a99985]/20 shadow-lg' 
//           : 'bg-transparent'
//       }`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16 items-center">
//             <div className={`text-2xl font-bold text-[#a99985] ${playfair.className}`}>Bracquet</div>
//             <div className="flex space-x-8 text-lg">
//               <a href="#features" className="text-[#e3d4c1] hover:text-[#252323] transition-colors">Solutions</a>
//               <a href="#about" className="text-[#e3d4c1] hover:text-[#252323] transition-colors">About</a>
//               <a href="#contact" className="text-[#e3d4c1] hover:text-[#252323] transition-colors">Contact</a>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <div className="relative min-h-screen flex items-center justify-center pt-16" 
//            style={{ 
//              background: 'linear-gradient(135deg, #252323 0%, #70798c 100%)'
//            }}>
//         <div className="absolute inset-0">
//           <div className="absolute top-0 left-0 right-0 h-96 bg-[#a99985] blur-[120px] opacity-[0.15]"></div>
//         </div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center relative z-10">
//           <span className="text-[#dad2bc] font-medium tracking-wider">TENNIS & PICKLEBALL MANAGEMENT</span>
//           <h1 className={`text-6xl text-[#f5f1ed] mb-6 mt-4 ${playfair.className}`}>
//             Personalized Court Management <br />Solutions for Elite Clubs
//           </h1>
//           <p className="text-xl text-[#dad2bc] mb-12 max-w-2xl mx-auto">
//             We craft custom tennis and pickleball booking platforms tailored to your club's unique traditions, rules, and member preferences.
//           </p>
//           <button 
//             style={{ backgroundColor: '#a99985' }} 
//             className="hover:opacity-90 text-[#252323] px-8 py-4 rounded-none text-lg inline-flex items-center transition-all duration-300 hover:scale-105"
//           >
//             Request Custom Solution
//             <ChevronRight className="ml-2" />
//           </button>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div id="features" className="py-24" style={{ backgroundColor: '#f5f1ed' }}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-4">
//             <span className="text-[#70798c] font-medium tracking-wider">SOLUTIONS</span>
//           </div>
//           <h2 className={`text-4xl font-bold text-center mb-16 text-[#252323] ${playfair.className}`}>
//             Custom Solutions Tailored to Your Club
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: <Calendar className="w-full h-full text-[#70798c]" />,
//                 title: "Customized Scheduling Rules",
//                 description: "Built around your club's unique booking policies, member categories, and court allocation preferences."
//               },
//               {
//                 icon: <Clock className="w-full h-full text-[#70798c]" />,
//                 title: "Tailored Time Management",
//                 description: "Custom peak time rules, waitlist management, and rotation systems designed for your membership structure."
//               },
//               {
//                 icon: <Settings className="w-full h-full text-[#70798c]" />,
//                 title: "Seamless Integration",
//                 description: "Built to work with your existing club management software and member database systems."
//               }
//             ].map((feature, index) => (
//               <div
//                 key={index}
//                 className="p-8 rounded-none shadow-lg transform hover:scale-105 transition-transform duration-300 border border-[#a99985]/20"
//                 style={{ 
//                   backgroundColor: '#dad2bc'
//                 }}
//               >
//                 <div className="flex flex-col items-center text-center">
//                   <div className="w-16 h-16 mb-6 relative">
//                     <div className="absolute inset-0 bg-[#70798c] blur-[20px] opacity-20"></div>
//                     {feature.icon}
//                   </div>
//                   <h3 className={`text-2xl font-semibold mb-4 text-[#252323] ${playfair.className}`}>{feature.title}</h3>
//                   <p className="text-[#252323]/80">{feature.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Solutions Roadmap Section */}
//       <SolutionsRoadmap />

//       {/* About Section */}
//       <div id="about" className="py-24 relative overflow-hidden" 
//            style={{ backgroundColor: '#252323' }}>
//         <div className="absolute inset-0">
//           <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#a99985] blur-[100px] opacity-10"></div>
//           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#a99985] blur-[100px] opacity-10"></div>
//         </div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="text-center mb-4">
//             <span className="text-[#dad2bc] font-medium tracking-wider">ABOUT US</span>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
//             <div>
//               <h2 className={`text-4xl font-bold mb-8 text-[#f5f1ed] ${playfair.className}`}>Crafting Elite Club Experiences</h2>
//               <p className="text-[#dad2bc] mb-6 text-lg">
//                 At Bracquet, we specialize in creating bespoke booking solutions for prestigious tennis and pickleball facilities. Unlike one-size-fits-all platforms, we build custom systems that preserve and enhance your club's unique character and traditions.
//               </p>
//               <p className="text-[#dad2bc] text-lg">
//                 Founded by club industry veterans, we understand that each club's needs are unique. Our team works closely with you to develop a solution that reflects your club's values, upholds its traditions, and delights your members.
//               </p>
//             </div>
//             <div className="grid grid-cols-2 gap-4">
//               {[...Array(4)].map((_, index) => (
//                 <div key={index} className="aspect-square rounded-none shadow-lg relative overflow-hidden border border-[#a99985]/10">
//                   <div className={`absolute inset-0 bg-gradient-to-${['br', 'bl', 'tr', 'tl'][index]} from-[#70798c] to-[#252323]`}></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Contact Section */}
//       <div id="contact" className="py-24" style={{ backgroundColor: '#f5f1ed' }}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <span className="text-[#70798c] font-medium tracking-wider">GET IN TOUCH</span>
//             <h2 className={`text-4xl font-bold text-[#252323] mt-4 mb-8 ${playfair.className}`}>Ready to Elevate Your Club's Experience?</h2>
//             <p className="text-[#252323]/80 mb-12 max-w-2xl mx-auto text-lg">
//               Contact us to discuss how we can create a custom solution that perfectly matches your club's needs.
//             </p>
//             <div className="flex justify-center space-x-4">
//               <button 
//                 style={{ backgroundColor: '#70798c' }} 
//                 className="hover:opacity-90 text-[#f5f1ed] px-8 py-4 rounded-none text-lg transition-all duration-300 hover:scale-105"
//               >
//                 Schedule a Consultation
//               </button>
//               <button 
//                 className="border-2 border-[#70798c] text-[#70798c] px-8 py-4 rounded-none text-lg transition-all duration-300 hover:scale-105"
//               >
//                 View Case Studies
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="py-12 border-t border-[#a99985]/20" style={{ backgroundColor: '#252323' }}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div>
//               <div className={`text-2xl font-bold text-[#f5f1ed] mb-4 ${playfair.className}`}>Bracquet</div>
//               <p className="text-[#dad2bc]">Creating bespoke court management solutions for prestigious clubs.</p>
//             </div>
//             <div>
//               <h3 className={`text-[#f5f1ed] font-semibold mb-4 ${playfair.className}`}>Solutions</h3>
//               <ul className="space-y-2 text-[#dad2bc]">
//                 <li>Custom Development</li>
//                 <li>Integration Services</li>
//                 <li>Consulting</li>
//               </ul>
//             </div>
//             <div>
//               <h3 className={`text-[#f5f1ed] font-semibold mb-4 ${playfair.className}`}>Company</h3>
//               <ul className="space-y-2 text-[#dad2bc]">
//                 <li>About</li>
//                 <li>Case Studies</li>
//                 <li>Contact</li>
//               </ul>
//             </div>
//             <div>
//               <h3 className={`text-[#f5f1ed] font-semibold mb-4 ${playfair.className}`}>Legal</h3>
//               <ul className="space-y-2 text-[#dad2bc]">
//                 <li>Privacy Policy</li>
//                 <li>Terms of Service</li>
//                 <li>Cookie Policy</li>
//               </ul>
//             </div>
//           </div>
//           <div className="border-t border-[#a99985]/20 mt-12 pt-8 text-center text-[#dad2bc]">
//             <p>&copy; 2025 Bracquet. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }



// File: app/page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from './components/Navbar';
import { ChevronRight, Calendar, Clock, Settings } from 'lucide-react';
import { url } from 'inspector';

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
              Elevate your club's court management experience.
            </h1>
            <p className="text-xl text-[var(--neutral-brown)] mb-8 font-medium">
              We craft custom tennis and pickleball booking platforms tailored to your club's unique traditions, rules, and member preferences.
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
      <section className="py-24 bg-[var(--neutral-light)]">
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

      {/* About Section */}
      <section className="py-24 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#0077BE] font-medium">ABOUT US</span>
              <h2 className="text-4xl font-mono mt-4 mb-8">Crafting Elite Club Experiences</h2>
              <p className="text-neutral-300 text-lg mb-6">
                At Bracquet, we specialize in creating bespoke booking solutions for prestigious tennis and pickleball facilities. Unlike one-size-fits-all platforms, we build custom systems that preserve and enhance your club's unique character and traditions.
              </p>
              <button className="text-white border-2 border-white px-8 py-4 rounded-full hover:bg-white hover:text-neutral-900 transition-colors">
                Learn More
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="aspect-square bg-neutral-800 rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-[var(--neutral-brown)] font-medium">GET IN TOUCH</span>
          <h2 className="text-4xl text-[var(--neutral-brown)] font-mono mt-4 mb-8">Ready to Elevate Your Club's Experience?</h2>
          <p className="text-neutral-600 mb-12 max-w-2xl mx-auto text-lg fobt-mono">
            Contact us to discuss how we can create a custom solution that perfectly matches your club's needs.
          </p>
          <button className="bg-[var(--neutral-brown)] text-white px-8 py-4 rounded-full inline-flex items-center gap-2 hover:bg-[#FF3232]/90 transition-colors">
            Schedule a Consultation
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </main>
  );
}