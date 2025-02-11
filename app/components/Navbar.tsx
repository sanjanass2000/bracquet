// File: components/Navbar.tsx
import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-md shadow-sm' 
        : 'bg-white/80 backdrop-blur-md shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6 font-mono">
        <div className="flex justify-between h-20 items-center">
          <div className="text-2xl font-mono text-black">Bracquets</div>
          <div className="flex items-center gap-12">
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-neutral-700 hover:text-[#FF3232] transition-colors">Solutions</a>
              <a href="#about" className="text-neutral-700 hover:text-[#FF3232] transition-colors">About</a>
              <a href="#contact" className="text-neutral-700 hover:text-[#FF3232] transition-colors">Contact</a>
            </div>
            <button className="bg-[#8B7355] text-white px-6 py-2 rounded-full inline-flex items-center gap-2 hover:bg-[#0077BE]/90 transition-colors">
              Schedule a meeting
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;