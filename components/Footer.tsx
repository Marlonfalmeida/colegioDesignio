// @ts-nocheck
import React from 'react';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-purple pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">

          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-lime rounded-lg transform rotate-3 flex items-center justify-center">
                <span className="text-brand-purple font-black text-lg">D</span>
              </div>
              <span className="text-xl font-heading font-bold text-white">
                Colégio <span className="text-brand-lime">Desígnio</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Educando com propósito, valores cristãos e excelência bilíngue para formar líderes do futuro.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/colegiodesignio/" target="_blank" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-lime hover:text-brand-purple transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/p/Col%C3%A9gio-Des%C3%ADgnio-100086492710474/" target="_blank" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-lime hover:text-brand-purple transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Explorar</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#proposta" className="hover:text-brand-lime transition-colors">A Proposta</a></li>
              <li><a href="#beneficios" className="hover:text-brand-lime transition-colors">Diferenciais</a></li>
              <li><a href="#depoimentos" className="hover:text-brand-lime transition-colors">Depoimentos</a></li>
              <li><a href="#" className="hover:text-brand-lime transition-colors">Trabalhe Conosco</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contato</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-brand-lime mt-1" />
                <span>(21) 98262-4344</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-brand-lime mt-1" />
                <span>contato@colegiodesignio.com.br</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-lime mt-1" />
                <span>Estr. Francisco da Cruz Nunes, 14 Cantagalo, Niterói - RJ - 24350-310</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="text-white font-bold mb-6">Venha nos conhecer</h4>
            <p className="text-gray-400 text-sm mb-4">Agende uma visita e descubra como podemos transformar a educação do seu filho.</p>
            <button className="w-full bg-brand-lime text-brand-purple font-bold py-3 rounded-xl hover:bg-white transition-colors">
              Agendar Visita
            </button>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Colégio Desígnio. Todos os direitos reservados. Design moderno e valores eternos. <a href="https://www.marlonfalmeida.com.br" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition-colors" >Marlon Almeida</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;