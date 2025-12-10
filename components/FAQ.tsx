import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FaqItem } from '../types';

const faqData: FaqItem[] = [
  {
    question: "Quais faixas escolares o Colégio Desígnio atende?",
    answer: "Atendemos todas as faixas: Educação Infantil (a partir de 2 anos), Ensino Fundamental I, Ensino Fundamental II e Ensino Médio, com currículo adaptado para cada fase."
  },
  {
    question: "A escola é realmente bilíngue?",
    answer: "Sim. Trabalhamos com imersão bilíngue real, onde o inglês não é apenas uma matéria, mas faz parte do cotidiano, das brincadeiras e de projetos interdisciplinares, garantindo aprendizado natural."
  },
  {
    question: "Como funciona a formação cristã?",
    answer: "Valores cristãos estão presentes no ambiente, nas práticas diárias e no desenvolvimento socioemocional. Não somos uma igreja, mas uma escola confessional que acolhe com amor e ensina princípios bíblicos de vida."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-purple text-center mb-12">
          Perguntas Frequentes
        </h2>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-brand-purple/50">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 bg-gray-50 text-left focus:outline-none"
              >
                <span className="text-lg font-bold text-brand-purple">{item.question}</span>
                {openIndex === index ? (
                  <Minus className="text-brand-lime flex-shrink-0" />
                ) : (
                  <Plus className="text-brand-purple flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`bg-white px-6 transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-48 py-6 opacity-100' : 'max-h-0 py-0 opacity-0'
                }`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;