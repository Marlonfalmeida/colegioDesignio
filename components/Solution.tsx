// @ts-nocheck
import React from 'react';
import Button from './Button';

const Solution: React.FC = () => {
  return (
    <section id="proposta" className="py-20 bg-brand-purple overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-brand-yellow/20 rounded-[40px] rotate-3 blur-lg"></div>
            <img
              src="https://www.sistemagalileu.com.br/wp-content/uploads/2024/01/acolhimento-alunos-professores-1024x730.jpg"
              alt="Professora mentora ajudando aluno em ambiente acolhedor"
              className="relative rounded-[40px] border-4 border-brand-lime shadow-2xl w-full object-cover z-10"
            />
            <div className="absolute -bottom-6 -right-6 z-20 bg-brand-white p-6 rounded-2xl shadow-lg max-w-xs hidden md:block">
              <p className="font-heading font-bold text-brand-purple text-lg">&quot;Educação além do conteúdo&quot;</p>
              <div className="w-12 h-1 bg-brand-lime mt-2"></div>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2 text-white order-1 lg:order-2">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              A solução que você busca <span className="text-brand-lime">está aqui</span>
            </h2>

            <p className="text-lg text-gray-200 mb-6 leading-relaxed">
              O Colégio Desígnio une <strong>imersão bilíngue</strong>, <strong>formação cristã</strong>, ensino de qualidade e acolhimento familiar.
            </p>

            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              Tudo pensado para que seu filho viva o melhor da escola — por dentro e por fora. Porque educação vai muito além de conteúdo: <strong>é sobre quem seu filho está se tornando.</strong>
            </p>

            <ul className="space-y-4 mb-10">
              {['Metodologia Ativa', 'Professores Mentores', 'Ambiente Seguro'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-lime flex items-center justify-center text-brand-purple font-bold">
                    ✓
                  </div>
                  <span className="font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <Button variant="primary">
              Conhecer a Escola
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Solution;