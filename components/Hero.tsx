// @ts-nocheck
import React from 'react';
import Button from './Button';
import { CheckCircle, Languages } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-brand-purple overflow-hidden flex items-center pt-24 pb-12 lg:pt-32">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-brand-purpleLight rounded-l-[100px] opacity-20 transform translate-x-1/4 skew-x-12 z-0"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-brand-yellow rounded-full blur-3xl opacity-20 animate-pulse"></div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">

        {/* Content Column */}
        <div className="text-left space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <span className="w-2 h-2 rounded-full bg-brand-lime animate-ping"></span>
            <span className="text-brand-lime font-bold text-sm tracking-wide uppercase">Matrículas Abertas 2026</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight">
            Seu filho crescendo com <span className="text-brand-yellow">valores</span>, <span className="text-brand-lime">propósito</span> e <span className="text-brand-yellow">inglês</span> de verdade.
          </h1>

          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-lg">
            No Colégio Desígnio, seu filho aprende inglês de verdade, cresce em segurança e desenvolve caráter. Uma educação completa: bilíngue, cristã e acolhedora.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" withIcon>
              Quero Agendar uma Visita
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-brand-purple">
              Conheça Nossa Proposta
            </Button>
          </div>

          <div className="pt-4 flex flex-wrap gap-4 text-sm text-gray-300 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-brand-lime w-5 h-5" />
              <span>Educação Infantil ao Médio</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-brand-lime w-5 h-5" />
              <span>Imersão Total</span>
            </div>
          </div>
        </div>

        {/* Image Column */}
        <div className="relative group">
          <div className="absolute inset-0 bg-brand-lime rounded-[3rem] transform rotate-3 translate-x-2 translate-y-2 transition-transform group-hover:rotate-1"></div>
          <div className="relative rounded-[3rem] overflow-hidden border-4 border-white shadow-2xl aspect-[4/5] lg:aspect-square">
            <img
              src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Alunos felizes em sala de aula bilíngue interagindo"
              className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
            />
            {/* Floating Badge */}
            <div className="absolute bottom-8 left-8 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 max-w-[220px]">
              <div className="bg-brand-purple/10 p-3 rounded-full">
                <Languages className="w-6 h-6 text-brand-purple" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold">Método</p>
                <p className="text-brand-purple font-bold leading-tight">100% Bilíngue</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;