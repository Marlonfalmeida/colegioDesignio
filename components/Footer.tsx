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
            <img src="data:image/png;base64,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" alt="logo do colégio desígnio" className="w-8" />
                <img src=".img/favicon.png" alt="logo do colégio desígnio" className="w-6" />
                {/* <span className="text-brand-purple font-black text-lg">D </span> */}
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