
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

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
          <a href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-convrt-purple to-convrt-purple-hover flex items-center justify-center text-white font-bold text-lg">
              K
            </div>
            <span className="text-xl font-bold text-convrt-dark-blue">Kabir - Your Data Partner</span>
          </a>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-convrt-dark-blue/80 hover:text-convrt-dark-blue font-medium transition-colors">
            About
          </a>
          <a href="#services" className="text-convrt-dark-blue/80 hover:text-convrt-dark-blue font-medium transition-colors">
            Services
          </a>
          <a href="#case-study" className="text-convrt-dark-blue/80 hover:text-convrt-dark-blue font-medium transition-colors">
            Case Study
          </a>
          <a href="#testimonials" className="text-convrt-dark-blue/80 hover:text-convrt-dark-blue font-medium transition-colors">
            Testimonials
          </a>
          <a href="#consultation" className="button-primary">
            Book Consultation
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
              href="#about" 
              className="text-convrt-dark-blue/80 hover:text-convrt-dark-blue font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#services" 
              className="text-convrt-dark-blue/80 hover:text-convrt-dark-blue font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#case-study" 
              className="text-convrt-dark-blue/80 hover:text-convrt-dark-blue font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Case Study
            </a>
            <a 
              href="#testimonials" 
              className="text-convrt-dark-blue/80 hover:text-convrt-dark-blue font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#consultation" 
              className="button-primary w-full text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
