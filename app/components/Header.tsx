'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'Features', href: '#features' },
    { name: 'Enterprise', href: '#enterprise' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed w-full z-50">
      <div className="backdrop-blur-lg bg-black/30 border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                Bracquets
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="ml-8 flex items-center gap-4">
                <button className="px-4 py-2 text-gray-300 hover:text-white transition-colors">
                  Sign In
                </button>
                <button className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors">
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
            <div className="md:hidden py-4">
              <div className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
                  <button className="text-gray-300 hover:text-white transition-colors">
                    Sign In
                  </button>
                  <button className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors">
                    Request Demo
                  </button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}; 