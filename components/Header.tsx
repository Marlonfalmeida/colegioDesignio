// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? '!bg-[#2e0249] bg-opacity-100 backdrop-filter-none shadow-lg py-2' : 'bg-transparent py-4'
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo Area */}
        <div className="flex items-center gap-2 z-50">
          <div className="w-10 h-10 bg-brand-lime rounded-lg transform rotate-3 flex items-center justify-center">
            <img src="data:image/png;base64,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" alt="logo do colégio desígnio" className="w-8" />
            {/* <span className="text-brand-purple font-black text-xl">D</span> */}
          </div>
          <span className={`text-2xl font-heading font-bold tracking-tight ${isScrolled ? 'text-white' : 'text-white'}`}>
            Colégio <span className="text-brand-lime">Desígnio</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#proposta" className="text-white hover:text-brand-lime font-medium transition-colors">A Proposta</a>
          <a href="#beneficios" className="text-white hover:text-brand-lime font-medium transition-colors">Benefícios</a>
          <a href="#depoimentos" className="text-white hover:text-brand-lime font-medium transition-colors">Depoimentos</a>
          <Button variant="primary" className="py-2 px-6 text-sm">
            Agendar Visita
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-brand-purple flex flex-col items-center justify-center gap-8 z-40 md:hidden">
            <a onClick={() => setMobileMenuOpen(false)} href="#proposta" className="text-2xl text-white font-bold">A Proposta</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#beneficios" className="text-2xl text-white font-bold">Benefícios</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#depoimentos" className="text-2xl text-white font-bold">Depoimentos</a>
            <Button onClick={() => setMobileMenuOpen(false)} variant="primary" fullWidth className="max-w-xs">
              Agendar Visita
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;