
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { manufacturingPath } from '@/lib/routes';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6",
        isScrolled 
          ? "bg-white/80 backdrop-blur-lg shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href={manufacturingPath()} className="flex items-center space-x-3">
            <img
              src={manufacturingPath('logo_new-nobg.png')}
              alt="Legnus Analytics Logo"
              className="w-30 h-20 rounded-xl"
            />
          </a>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {/* <a href={manufacturingPath('#about')} className="text-convrt-dark-blue/80 hover:text-convrt-dark-blue font-medium transition-colors">
            About
          </a> */}
          <a href={manufacturingPath('#how-it-works')} className="text-convrt-dark-blue/80 hover:text-convrt-dark-blue font-medium transition-colors">
            How It Works
          </a>
          <a href={manufacturingPath('#pricing')} className="text-convrt-dark-blue/80 hover:text-convrt-dark-blue font-medium transition-colors">
            Pricing
          </a>
          <a href={manufacturingPath('#case-study')} className="text-convrt-dark-blue/80 hover:text-convrt-dark-blue font-medium transition-colors">
            Case Study
          </a>
          <a href={manufacturingPath('#testimonials')} className="text-convrt-dark-blue/80 hover:text-convrt-dark-blue font-medium transition-colors">
            Testimonials
          </a>
          <a href="https://calendly.com/kabirpatel-work/30min" target="_blank" rel="noopener noreferrer" className="button-primary">
             Book Free AI Dashboard Demo
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-convrt-dark-blue" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-6">
          <div className="flex flex-col space-y-4">
            <a 
              href={manufacturingPath('#about')} 
              className="text-convrt-dark-blue/80 hover:text-convrt-dark-blue font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href={manufacturingPath('#how-it-works')} 
              className="text-convrt-dark-blue/80 hover:text-convrt-dark-blue font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href={manufacturingPath('#pricing')} 
              className="text-convrt-dark-blue/80 hover:text-convrt-dark-blue font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href={manufacturingPath('#case-study')} 
              className="text-convrt-dark-blue/80 hover:text-convrt-dark-blue font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Case Study
            </a>
            <a 
              href={manufacturingPath('#testimonials')} 
              className="text-convrt-dark-blue/80 hover:text-convrt-dark-blue font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="https://calendly.com/kabirpatel-work/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="button-primary w-full text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Free AI Dashboard Demo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
