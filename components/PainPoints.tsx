// @ts-nocheck
import React from 'react';
import { ShieldAlert, HeartCrack, MessageSquareWarning } from 'lucide-react';

const PainPoints: React.FC = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-purple mb-4">
            Por que tantos pais estão <span className="text-red-500 underline decoration-brand-yellow decoration-4 underline-offset-4">preocupados</span> hoje?
          </h2>
          <p className="text-lg text-gray-600">
            Você não está sozinho. Essas preocupações são reais e nós escutamos isso todos os dias.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-6 text-red-500 group-hover:scale-110 transition-transform">
              <ShieldAlert size={32} />
            </div>
            <h3 className="text-xl font-bold text-brand-purple mb-3">Segurança e Ambiente</h3>
            <div className="relative">
              <span className="absolute -top-2 -left-2 text-4xl text-gray-200 font-serif">"</span>
              <p className="text-gray-600 italic relative z-10 pl-4">
                Quero uma escola onde meu filho esteja seguro. Tenho medo de más influências.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6 text-yellow-600 group-hover:scale-110 transition-transform">
              <HeartCrack size={32} />
            </div>
            <h3 className="text-xl font-bold text-brand-purple mb-3">Perda de Valores</h3>
            <div className="relative">
              <span className="absolute -top-2 -left-2 text-4xl text-gray-200 font-serif">"</span>
              <p className="text-gray-600 italic relative z-10 pl-4">
                Tenho medo de ele perder os valores que ensinamos em casa. O mundo está muito confuso.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
              <MessageSquareWarning size={32} />
            </div>
            <h3 className="text-xl font-bold text-brand-purple mb-3">Ensino Superficial</h3>
            <div className="relative">
              <span className="absolute -top-2 -left-2 text-4xl text-gray-200 font-serif">"</span>
              <p className="text-gray-600 italic relative z-10 pl-4">
                Quero inglês de verdade, não só uma aulinha. A escola hoje em dia parece fraca.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl font-medium text-brand-purple mb-6">
            É por isso que criamos um ambiente onde seu filho aprende, cresce e se sente <span className="bg-brand-yellow px-2 py-1 rounded-lg transform -rotate-1 inline-block">amado</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;