// components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import { Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[var(--neutral-dark)] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-mono mb-6">Bracquets</h3>
            <p className="text-neutral-300 mb-4">
              Custom court management solutions for prestigious clubs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[var(--primary-blue)] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-[var(--primary-blue)] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-[var(--primary-blue)] transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><Link href="#features" className="text-neutral-300 hover:text-white transition-colors">Features</Link></li>
              <li><Link href="#roadmap" className="text-neutral-300 hover:text-white transition-colors">Roadmap</Link></li>
              <li><Link href="#case-studies" className="text-neutral-300 hover:text-white transition-colors">Case Studies</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-neutral-300 hover:text-white transition-colors">About</Link></li>
              <li><Link href="#" className="text-neutral-300 hover:text-white transition-colors">Team</Link></li>
              <li><Link href="#" className="text-neutral-300 hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Mail size={16} className="mt-1 mr-2" />
                <span className="text-neutral-300">info@bracquets.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={16} className="mt-1 mr-2" />
                <span className="text-neutral-300">(512) 555-1234</span>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mt-1 mr-2" />
                <span className="text-neutral-300">Austin, TX</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Bracquets. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;