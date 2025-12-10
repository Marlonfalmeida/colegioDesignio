import React from 'react';
import Button from './Button';

const CTASection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="bg-brand-purple rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl text-center">
          
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-lime rounded-full blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-yellow rounded-full blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
              Agora é sua vez de dar esse <span className="text-brand-lime">passo</span>
            </h2>
            
            <p className="text-xl text-gray-200 mb-8">
              A vaga do seu filho e o futuro que você sonha para ele começam com um simples clique. Venha tomar um café conosco.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="primary" className="text-lg py-5 px-10 shadow-[0_0_30px_rgba(204,255,0,0.4)]" withIcon>
                Agendar Visita Agora
              </Button>
            </div>
            
            <p className="text-sm text-gray-400 mt-6">
              * Vagas limitadas para o ano letivo de 2026.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;