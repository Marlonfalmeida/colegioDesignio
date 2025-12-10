import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    text: "Meu filho evoluiu no inglês e se tornou mais seguro. A escola realmente nos escuta e participa da vida dele.",
    author: "Ana Souza",
    role: "Mãe de aluno do 4º Ano"
  },
  {
    id: 2,
    text: "É acolhedora, tem valores inegociáveis, excelente ensino e professores que se importam com o coração da criança.",
    author: "Carlos Mendes",
    role: "Pai de alunos da Ed. Infantil"
  },
  {
    id: 3,
    text: "Finalmente encontramos uma escola que une fé, qualidade acadêmica e um cuidado genuíno com as famílias.",
    author: "Fernanda Lima",
    role: "Mãe de aluno do Fundamental II"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 bg-brand-purple relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(#CCFF00_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white text-center mb-16">
          O que os pais <span className="text-brand-yellow">dizem</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonialsData.map((t) => (
            <div key={t.id} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-brand-yellow fill-brand-yellow" />
                ))}
              </div>
              <p className="text-lg text-white mb-6 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-lime flex items-center justify-center font-bold text-brand-purple text-xl">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-white">{t.author}</p>
                  <p className="text-sm text-brand-lime">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;