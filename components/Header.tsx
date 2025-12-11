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
            <img src="../img/favicon.png" alt="logo do colégio desígnio" />
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