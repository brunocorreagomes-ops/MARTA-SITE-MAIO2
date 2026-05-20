import { useState, useEffect } from 'react';

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  service: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    id: '1',
    quote: "Fazer meu mapa numerológico online com a Marta foi um divisor de águas. O material personalizado que recebi é um guia meticuloso que consulto diariamente. A distância não diminuiu em nada a conexão, pelo contrário, deixou tudo mais confortável.",
    author: "Carolina S.",
    service: "Numerologia Online"
  },
  {
    id: '2',
    quote: "A harmonização à distância pela radiestesia trouxe uma leveza imediata para minha casa e meus negócios. O relatório detalhado me ajudou a entender padrões e pontos de energia que eu jamais imaginaria, de forma muito clara.",
    author: "Mariana L.",
    service: "Radiestesia à Distância"
  },
  {
    id: '3',
    quote: "A leitura do baralho cigano online me deu a direção estratégica e acolhedora que eu precisava. O atendimento é primoroso, superou todas as minhas expectativas e me passou muita confiança para os próximos passos.",
    author: "Juliana M.",
    service: "Baralho Cigano Online"
  }
];

export function useTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('@marta-terapia:testimonials');
    if (saved) {
      setTestimonials(JSON.parse(saved));
    } else {
      setTestimonials(defaultTestimonials);
      localStorage.setItem('@marta-terapia:testimonials', JSON.stringify(defaultTestimonials));
    }
  }, []);

  const addTestimonial = (testimonial: Omit<Testimonial, 'id'>) => {
    const newTestimonial = { ...testimonial, id: crypto.randomUUID() };
    const updated = [...testimonials, newTestimonial];
    setTestimonials(updated);
    localStorage.setItem('@marta-terapia:testimonials', JSON.stringify(updated));
  };

  const updateTestimonial = (updatedTestimonial: Testimonial) => {
    const updated = testimonials.map(t => t.id === updatedTestimonial.id ? updatedTestimonial : t);
    setTestimonials(updated);
    localStorage.setItem('@marta-terapia:testimonials', JSON.stringify(updated));
  };

  const removeTestimonial = (id: string) => {
    const updated = testimonials.filter(t => t.id !== id);
    setTestimonials(updated);
    localStorage.setItem('@marta-terapia:testimonials', JSON.stringify(updated));
  };

  return { testimonials, addTestimonial, updateTestimonial, removeTestimonial };
}
