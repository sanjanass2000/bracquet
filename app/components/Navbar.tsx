// File: app/components/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-md border-b border-[var(--terminal-green)]/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-[var(--terminal-green)] font-bold">
            bracquets
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-neutral-400 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#security" className="text-neutral-400 hover:text-white transition-colors">
              Security
            </Link>
            <Link href="#pricing" className="text-neutral-400 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="#contact" className="text-neutral-400 hover:text-white transition-colors">
              Contact
            </Link>
            
            <button className="gradient-border rounded-md">
              <div className="px-4 py-2 bg-black rounded-md hover:bg-neutral-900 transition-colors">
                <span className="text-[var(--terminal-green)]">Login →</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};