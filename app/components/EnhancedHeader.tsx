'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';

export const EnhancedHeader = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRefs = useRef<{[key: string]: HTMLDivElement | null}>({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && 
          dropdownRefs.current[activeDropdown] && 
          !dropdownRefs.current[activeDropdown]?.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const navigateTo = (href: string) => {
    setActiveDropdown(null);
    setIsOpen(false);
    router.push(href);
  };

  const navigation = [
    { 
      name: 'Solutions', 
      href: '/solutions',
      dropdown: [
        { name: 'AI-Powered Scheduling', href: '/solutions/ai-scheduling' },
        { name: 'Analytics Dashboard', href: '/solutions/analytics' },
        { name: 'Management Assistants', href: '/solutions/assistants' }
      ]
    },
    { 
      name: 'Features', 
      href: '/features',
      dropdown: [
        { name: 'Customizable Modules', href: '/features/modules' },
        { name: 'Enterprise Security', href: '/features/security' },
        { name: 'Human Connection', href: '/features/human-connection' }
      ]
    },
    { 
      name: 'Results', 
      href: '/results',
      dropdown: [
        { name: 'ROI Analysis', href: '/results/roi' },
        { name: 'Case Studies', href: '/results/case-studies' },
        { name: 'Testimonials', href: '/results/testimonials' }
      ]
    },
    { 
      name: 'About', 
      href: '/about',
      dropdown: [
        { name: 'Our Difference', href: '/about/difference' },
        { name: 'Roadmap', href: '/about/roadmap' },
        { name: 'Enterprise', href: '/about/enterprise' }
      ]
    },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/70 backdrop-blur-md shadow-sm' 
        : 'bg-black/30 backdrop-blur-lg'
    }`}>
      <nav className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              Bracquets
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <div 
                key={item.name}
                ref={el => dropdownRefs.current[item.name] = el} 
                className="relative group"
              >
                {item.dropdown ? (
                  <button 
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center text-gray-300 hover:text-white transition-colors py-2"
                  >
                    {item.name}
                    <ChevronDown 
                      className={`ml-1 w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} 
                    />
                  </button>
                ) : (
                  <button
                    onClick={() => navigateTo(item.href)}
                    className="text-gray-300 hover:text-white transition-colors py-2"
                  >
                    {item.name}
                  </button>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-black/80 backdrop-blur-lg border border-white/10 z-50 overflow-hidden">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      {item.dropdown.map((subItem) => (
                        <button 
                          key={subItem.name} 
                          onClick={() => navigateTo(subItem.href)}
                          className="block w-full text-left px-4 py-2 text-gray-200 hover:bg-white/20 hover:text-white transition-colors"
                        >
                          {subItem.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <div className="ml-6 flex items-center">
              <button 
                onClick={() => navigateTo('/contact')}
                className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
              >
                Request Demo
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 pb-6 space-y-2">
            {navigation.map((item) => (
              <div key={item.name} className="w-full">
                {item.dropdown ? (
                  <div className="w-full">
                    <button 
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between w-full text-gray-300 hover:text-white transition-colors py-2"
                    >
                      <span>{item.name}</span>
                      <ChevronDown 
                        className={`ml-1 w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} 
                      />
                    </button>
                    
                    {activeDropdown === item.name && (
                      <div className="ml-4 mt-1 space-y-1 border-l border-white/10 pl-4">
                        {item.dropdown.map((subItem) => (
                          <button 
                            key={subItem.name} 
                            onClick={() => navigateTo(subItem.href)}
                            className="block w-full text-left py-2 text-gray-400 hover:text-white transition-colors"
                          >
                            {subItem.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => navigateTo(item.href)}
                    className="block w-full text-left py-2 text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
            <div className="pt-6 border-t border-white/10">
              <button 
                onClick={() => navigateTo('/contact')}
                className="block w-full text-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
              >
                Request Demo
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};