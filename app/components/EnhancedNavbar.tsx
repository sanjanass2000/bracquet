'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const EnhancedNavbar = () => {
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
          <Link href="/" className="text-2xl font-bold text-[var(--color-neutral-dark)]">Bracquets</Link>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex space-x-8">
              <div ref={dropdownRef} className="relative">
                <button 
                  onClick={toggleSolutions}
                  className="flex items-center text-[var(--color-neutral-dark)] hover:text-[var(--color-accent)] transition-colors"
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
              
              <Link href="#about" className="text-[var(--color-neutral-dark)] hover:text-[var(--color-accent)] transition-colors">
                About
              </Link>
              <Link href="#contact" className="text-[var(--color-neutral-dark)] hover:text-[var(--color-accent)] transition-colors">
                Contact
              </Link>
            </div>
            <Link href="#contact" className="bg-[var(--color-secondary)] text-white px-6 py-2 rounded-full inline-flex items-center gap-2 hover:bg-[var(--color-primary)] transition-colors">
              Schedule a meeting
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default EnhancedNavbar; 