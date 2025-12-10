// @ts-nocheck
import React from 'react';
import { Globe2, Heart, Smile } from 'lucide-react';
import { Benefit } from '../types';

const benefitsData: Benefit[] = [
  {
    id: 1,
    title: "Inglês Natural, Todos os Dias",
    description: "A imersão bilíngue faz seu filho chegar à fluência naturalmente, sem decoreba, vivendo o idioma.",
    icon: Globe2,
    quote: "Quero que ele chegue à fluência sem perceber."
  },
  {
    id: 2,
    title: "Formação Cristã para a Vida",
    description: "Aqui, seu filho aprende a agir com respeito, amor, responsabilidade e propósito divino.",
    icon: Heart,
    quote: "Quero que meu filho cresça com caráter e propósito."
  },
  {
    id: 3,
    title: "Segurança e Felicidade Real",
    description: "Unimos acolhimento, disciplina positiva e uma equipe que realmente conhece cada aluno pelo nome.",
    icon: Smile,
    quote: "Quero ver meu filho feliz e aprendendo de verdade."
  }
];

const Benefits: React.FC = () => {
  return (
    <section id="beneficios" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-brand-purple font-bold tracking-wider uppercase text-sm mb-2 block">O Diferencial</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-purple">
            3 Benefícios que <span className="bg-brand-lime px-2 leading-tight inline-block text-brand-purple">transformam</span> a vida do seu filho
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {benefitsData.map((benefit) => (
            <div key={benefit.id} className="bg-white rounded-[2rem] p-8 shadow-lg border-2 border-transparent hover:border-brand-lime hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
              <div className="bg-brand-purple w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-glow">
                <benefit.icon className="text-brand-lime w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold text-brand-purple mb-4">{benefit.title}</h3>

              <div className="bg-brand-yellow/10 p-4 rounded-xl mb-6">
                <p className="text-sm font-medium text-brand-purple/80 italic">"{benefit.quote}"</p>
              </div>

              <p className="text-gray-600 leading-relaxed flex-grow">
                {benefit.description}
              </p>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <img
                  src={`https://picsum.photos/seed/benefi${benefit.id}/400/250`}
                  alt={benefit.title}
                  className="w-full h-40 object-cover rounded-xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;