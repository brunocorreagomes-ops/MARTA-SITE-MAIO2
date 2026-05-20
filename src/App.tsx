/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Hand, Layers, Calculator, Sparkles, Instagram, Facebook, Quote, ChevronUp, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.title = "Marta Ana Chiconato | Terapia Integrativa em Indaiatuba";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Terapia Integrativa e Espaço de Equilíbrio em Indaiatuba. Redescubra o autoconhecimento e bem-estar físico e mental com Marta Ana Chiconato. Atendimento presencial e online.');
    }

    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToId = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'bg-blush-sand/90 backdrop-blur-xl shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center">
            <img loading="lazy" src="https://i.ibb.co/ZRyY8vsp/marta-logo-site.webp" alt="Marta Ana Chiconato" className="h-12 md:h-14 object-contain" />
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            <a href="#jornada" onClick={(e) => scrollToId(e, 'jornada')} className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-warm-ink/70 hover:text-bordeaux transition-colors">Jornada</a>
            <a href="#servicos" onClick={(e) => scrollToId(e, 'servicos')} className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-warm-ink/70 hover:text-bordeaux transition-colors">Serviços</a>
            <a href="#sobre" onClick={(e) => scrollToId(e, 'sobre')} className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-warm-ink/70 hover:text-bordeaux transition-colors">Sobre</a>
            <a href="#faq" onClick={(e) => scrollToId(e, 'faq')} className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-warm-ink/70 hover:text-bordeaux transition-colors">Dúvidas Frequentes</a>
            <a href="https://wa.me/5519999220089?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20maiores%20informa%C3%A7%C3%B5es%20sobre%20as%20consultas." target="_blank" rel="noopener noreferrer" className="bg-bordeaux text-blush-sand px-7 py-3 rounded-full font-body text-xs font-semibold uppercase tracking-widest hover:bg-bordeaux/90 transition-all hover:shadow-[0_0_20px_rgba(197,160,122,0.3)]">
              Agendar Consulta
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-bordeaux p-2">
            {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-blush-sand/95 backdrop-blur-lg transform transition-transform duration-500 md:hidden flex flex-col items-center justify-center gap-8 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <a href="#jornada" onClick={(e) => scrollToId(e, 'jornada')} className="font-display text-3xl text-bordeaux">Jornada</a>
        <a href="#servicos" onClick={(e) => scrollToId(e, 'servicos')} className="font-display text-3xl text-bordeaux">Serviços</a>
        <a href="#sobre" onClick={(e) => scrollToId(e, 'sobre')} className="font-display text-3xl text-bordeaux">Sobre</a>
        <a href="#faq" onClick={(e) => scrollToId(e, 'faq')} className="font-display text-3xl text-bordeaux">Dúvidas Frequentes</a>
        <a href="https://wa.me/5519999220089?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20maiores%20informa%C3%A7%C3%B5es%20sobre%20as%20consultas." target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="bg-bordeaux text-blush-sand px-8 py-4 rounded-full font-body text-sm font-semibold uppercase tracking-widest mt-4">
          Agendar Consulta
        </a>
      </div>
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-28 pb-16 md:pt-24 md:pb-12 overflow-hidden">
      {/* Soft Glow Background Element */}
      <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-dusty-rose/40 blur-[100px] pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 lg:gap-20 items-center relative z-10 w-full">
        <div className="order-2 md:order-1 md:col-span-6 lg:col-span-5 space-y-6 md:space-y-8 flex flex-col items-center md:items-start text-center md:text-left mt-4 md:mt-0">
          <div className="inline-block px-4 py-1.5 border border-rose-gold/60 rounded-full text-rose-gold font-body text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] bg-white/30 backdrop-blur-sm">
            Experiência Premium
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] text-bordeaux font-semibold leading-[1.15] md:leading-[1.1] tracking-tight">
            A Jornada do Autoconhecimento.
          </h1>
          <p className="font-body text-base lg:text-lg text-warm-ink/80 leading-relaxed font-light max-w-[20rem] sm:max-w-md">
            Um espaço dedicado ao seu equilíbrio. Redescubra a clareza e a paz interior através de práticas ancestrais em um ambiente de luxo minimalista.
          </p>
          <div className="pt-2 md:pt-4">
            <a href="https://wa.me/5519999220089?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20maiores%20informa%C3%A7%C3%B5es%20para%20agendar%20uma%20sess%C3%A3o." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-bordeaux text-blush-sand px-6 py-3.5 md:px-8 md:py-4 rounded-full font-body text-xs md:text-sm font-semibold uppercase tracking-widest hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(89,32,37,0.2)]">
              Agendar Sessão
              <ArrowRight size={18} strokeWidth={2} />
            </a>
          </div>
        </div>
        
        <div className="order-1 md:order-2 md:col-span-6 lg:col-span-7 flex justify-center md:justify-end relative">
          <div className="relative w-full max-w-[340px] sm:max-w-[440px] md:max-w-[500px] aspect-square md:aspect-[4/5] rounded-[40px_16px_40px_16px] md:rounded-[100px_40px_100px_40px] overflow-hidden shadow-xl md:shadow-2xl">
            <img 
              loading="lazy"
              src="https://i.ibb.co/cXbDVjF6/marta-site05.webp" 
              alt="Marta Ana Chiconato - Terapia Holística" 
              className="w-full h-full object-cover object-top transform hover:scale-105 transition-transform duration-1000"
            />
          </div>
          

        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section id="jornada" className="py-24 md:py-32 bg-dusty-rose/15">
      <div className="max-w-[800px] mx-auto px-6 text-center space-y-10">
        <span className="font-body text-xs font-semibold text-rose-gold tracking-[0.2em] uppercase">
          Manifesto
        </span>
        <h2 className="font-display text-4xl md:text-5xl text-bordeaux italic font-medium leading-tight text-balance">
          "A cura não é apenas o alívio do sintoma, mas o retorno estratégico ao seu centro."
        </h2>
        <div className="space-y-6">
          <p className="font-body text-lg text-warm-ink/80 leading-relaxed font-light text-balance mx-auto">
            Não existe um único caminho para o equilíbrio. O que propomos aqui é uma desconstrução do óbvio. Menos misticismo vazio, mais autonomia real.
            No silêncio do nosso refúgio, a paz encontra a estratégia para uma vida plena.
          </p>
        </div>
        <div className="pt-8 flex justify-center">
          <div className="h-20 w-px bg-rose-gold/40"></div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const [activeServiceIndex, setActiveServiceIndex] = useState<number | null>(null);

  const services = [
    {
      icon: Hand,
      title: 'Reiki',
      desc: 'Canalização de energia vital para harmonização profunda dos centros energéticos e redução imediata do estresse.',
      tag: 'Restaurativo & Sutil',
      fullDesc: 'O Reiki é uma técnica milenar de imposição de mãos que atua diretamente nos chakras, promovendo um alinhamento energético profundo. Durante a sessão, o paciente experimenta um relaxamento intenso, aliviando tensões físicas e mentais acumuladas. É ideal para quem busca reequilíbrio emocional, clareza mental e uma pausa restauradora no ritmo acelerado do dia a dia.',
      image: 'https://i.ibb.co/tPF5XdQX/marta-reiki-luxury.webp'
    },
    {
      icon: Layers,
      title: 'Baralho Cigano',
      desc: 'Aconselhamento terapêutico e orientação estratégica através da simbologia milenar para clareza em decisões.',
      tag: 'Clareza & Direção',
      fullDesc: 'Mais do que previsão, o Baralho Cigano é uma ferramenta de autoconhecimento e planejamento estratégico. Através da leitura dos arquétipos e das cartas, desvendamos cenários ocultos e padrões de comportamento. Essa técnica oferece um mapa claro para a tomada de decisões importantes, ajudando você a alinhar suas ações com seus propósitos mais verdadeiros e a navegar pelos desafios com confiança.',
      image: 'https://i.ibb.co/fdQXYHry/marta-tarot-luxury.webp'
    },
    {
      icon: Calculator,
      title: 'Numerologia',
      desc: 'Mapeamento do seu propósito de vida, entregue de forma online com material estruturado e personalizado.',
      tag: 'Estratégia & Online',
      fullDesc: 'A Numerologia Terapêutica é o estudo vibracional dos seus números desde o nascimento. Para garantir a profundidade do estudo e a elaboração minuciosa de um material rico e 100% personalizado que servirá como seu guia estratégico de vida, os atendimentos desta especialidade possuem foco exclusivo no formato online.',
      image: 'https://i.ibb.co/nNGpQyHj/marta-numerologia-luxury.webp'
    },
    {
      icon: Sparkles,
      title: 'Radiestesia',
      desc: 'Diagnóstico e reequilíbrio energético estruturado com foco em atendimentos à distância e relatórios precisos.',
      tag: 'Limpeza à Distância',
      fullDesc: 'A Radiestesia trabalha no rastreio e na harmonização das frequências eletromagnéticas. Por exigir muita concentração e a preparação de matrizes e gráficos exclusivos antes da finalização, o trabalho é realizado prioritariamente no campo sutil, à distância e com repasse online, não exigindo a presença física mas garantindo a mesma força vibracional.',
      image: 'https://i.ibb.co/1GLJqJYz/marta-radiestesia-luxury.webp'
    }
  ];

  const activeService = activeServiceIndex !== null ? services[activeServiceIndex] : null;

  return (
    <section id="servicos" className="py-24 md:py-32 relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="font-body text-xs font-semibold text-rose-gold uppercase tracking-[0.15em] mb-4 block">
              Especialidades
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-bordeaux font-medium leading-tight">
              Portais de Transformação
            </h2>
          </div>
          <p className="font-body text-base font-light text-warm-ink/70 max-w-sm mb-2">
            Técnicas selecionadas para harmonizar frequências e expandir sua visão sobre a vida e propósito.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i} 
              layoutId={`service-card-${i}`}
              onClick={() => setActiveServiceIndex(i)}
              className="group relative p-6 sm:p-8 rounded-[32px] bg-white transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] border border-warm-ink/5 hover:border-dusty-rose/60 hover:shadow-[0_40px_80px_-20px_rgba(89,32,37,0.2)] hover:-translate-y-4 will-change-transform flex flex-col justify-between items-start h-full cursor-pointer"
            >
              <div className="w-full">
                <motion.div layoutId={`service-image-${i}`} className="w-full aspect-[4/3] sm:aspect-square lg:aspect-[4/3] mb-8 overflow-hidden rounded-2xl relative shadow-sm">
                  <img loading="lazy" src={s.image} alt={s.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-md text-bordeaux flex items-center justify-center shadow-lg">
                    <s.icon size={24} strokeWidth={1.5} />
                  </div>
                </motion.div>
                <motion.h3 layoutId={`service-title-${i}`} className="font-display text-2xl text-bordeaux mb-4 font-medium">{s.title}</motion.h3>
                <motion.p layoutId={`service-desc-${i}`} className="font-body text-base font-light text-warm-ink/75 leading-relaxed mb-8 transition-opacity duration-500 group-hover:opacity-80">
                  {s.desc}
                </motion.p>
              </div>
              <div className="flex justify-between items-center w-full mt-auto">
                <motion.span layoutId={`service-tag-${i}`} className="font-body text-[10px] font-semibold text-rose-gold/80 uppercase tracking-widest">
                  {s.tag}
                </motion.span>
                <span className="font-body text-xl font-light text-rose-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  +
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeService && activeServiceIndex !== null && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-warm-ink/40 backdrop-blur-sm" 
              onClick={() => setActiveServiceIndex(null)}
            ></motion.div>

            <motion.div 
              layoutId={`service-card-${activeServiceIndex}`}
              className="bg-blush-sand rounded-[32px] max-w-2xl w-full relative z-10 shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
            >
              <div className="w-full h-56 md:h-72 relative shrink-0">
                 <motion.img loading="lazy" layoutId={`service-image-${activeServiceIndex}`} src={activeService.image} className="w-full h-full object-cover" alt={activeService.title} />
                 <div className="absolute inset-0 bg-gradient-to-t from-blush-sand via-blush-sand/40 to-transparent"></div>
                 <button onClick={() => setActiveServiceIndex(null)} className="absolute top-6 right-6 md:top-8 md:right-8 z-20 text-warm-ink/60 hover:text-bordeaux transition-colors bg-white/90 backdrop-blur-md rounded-full p-2 shadow-sm flex items-center justify-center">
                   <X size={20} strokeWidth={1.5} />
                 </button>
                 <div className="absolute bottom-6 left-8 md:left-12 w-16 h-16 rounded-2xl bg-white/80 backdrop-blur-md text-bordeaux flex items-center justify-center shadow-lg">
                   <activeService.icon size={32} strokeWidth={1.5} />
                 </div>
              </div>

              <div className="p-8 md:p-12 pt-4 overflow-y-auto">
                <motion.h3 layoutId={`service-title-${activeServiceIndex}`} className="font-display text-3xl md:text-4xl text-bordeaux mb-4 font-medium leading-tight">{activeService.title}</motion.h3>
                <motion.span layoutId={`service-tag-${activeServiceIndex}`} className="font-body text-[10px] font-semibold text-rose-gold/90 uppercase tracking-widest block mb-8">
                  {activeService.tag}
                </motion.span>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="font-body text-base md:text-lg font-light text-warm-ink/80 leading-relaxed mb-10 text-balance"
                >
                  {activeService.fullDesc}
                </motion.p>
                <motion.a 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  href={`https://wa.me/5519999220089?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20maiores%20informa%C3%A7%C3%B5es%20sobre%20a%20sess%C3%A3o%20de%20${activeService.title}.`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => setActiveServiceIndex(null)} 
                  className="inline-block bg-bordeaux text-white px-8 py-5 rounded-full font-body text-sm font-semibold uppercase tracking-widest hover:bg-bordeaux/90 transition-all text-center w-full sm:w-auto shadow-lg shadow-bordeaux/20 hover:shadow-xl self-start hover:-translate-y-1"
                >
                  Agendar {activeService.title}
                </motion.a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        <div className="lg:col-span-6 relative order-2 lg:order-1 flex flex-col items-center lg:items-start pt-10 lg:pt-0">
          <h3 className="font-display text-3xl md:text-4xl text-bordeaux mb-8 font-medium relative z-10 text-center lg:text-left w-full">
            A Guardiã do Espaço
          </h3>
          <div className="w-full relative">
            {/* Decorative frame */}
            <div className="absolute -inset-4 md:-inset-6 border border-rose-gold/30 rounded-[60px_120px] -rotate-2 scale-95 lg:scale-100 hidden sm:block"></div>
            
            <div className="relative overflow-hidden rounded-[40px_100px] shadow-2xl aspect-[4/5] md:aspect-auto md:h-[700px] w-full">
              <img 
                loading="lazy"
                src="https://i.ibb.co/cXbDVjF6/marta-site05.webp" 
                alt="Marta Ana Chiconato - Terapia Integrativa" 
                className="w-full h-full object-cover object-center grayscale-[30%] sepia-[15%] contrast-[1.1] transform hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-bordeaux/10 mix-blend-multiply" />
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-10 order-1 lg:order-2 flex flex-col justify-center">
          <div>
            <span className="font-body text-xs font-semibold text-rose-gold uppercase tracking-[0.2em] mb-4 block">
              Sobre a Terapeuta
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-bordeaux font-semibold leading-tight">
              Marta Ana Chiconato
            </h2>
          </div>
          
          <div className="space-y-6 font-body text-lg text-warm-ink/80 font-light leading-relaxed">
            <p>
              Minha missão é ser a ponte entre o seu estado atual e a sua melhor versão vibracional. Com anos de dedicação às terapias integrativas, entendo que cada pessoa carrega um universo único que merece ser decifrado com respeito e precisão.
            </p>
            <p>
              Através da "Quietude Estratégica", unimos a sensibilidade espiritual com uma visão clara de bem-estar, proporcionando um acolhimento arquitetado para a sua evolução — seja em nosso espaço presencial ou em nossos cuidados online.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      quote: "Fazer meu mapa numerológico online com a Marta foi um divisor de águas. O material personalizado que recebi é um guia meticuloso que consulto diariamente. A distância não diminuiu em nada a conexão, pelo contrário, deixou tudo mais confortável.",
      author: "Carolina S.",
      service: "Numerologia Online"
    },
    {
      quote: "A harmonização à distância pela radiestesia trouxe uma leveza imediata para minha casa e meus negócios. O relatório detalhado me ajudou a entender padrões e pontos de energia que eu jamais imaginaria, de forma muito clara.",
      author: "Mariana L.",
      service: "Radiestesia à Distância"
    },
    {
      quote: "A leitura do baralho cigano online me deu a direção estratégica e acolhedora que eu precisava. O atendimento é primoroso, superou todas as minhas expectativas e me passou muita confiança para os próximos passos.",
      author: "Juliana M.",
      service: "Baralho Cigano Online"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (testimonials.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  if (testimonials.length === 0) return null;

  return (
    <section className="py-24 md:py-32 bg-dusty-rose/10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <span className="font-body text-xs font-semibold text-rose-gold uppercase tracking-[0.2em] mb-4 block">
            Vozes da Jornada
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-bordeaux font-medium leading-tight max-w-2xl mx-auto">
            A transformação através do formato online
          </h2>
        </div>
        
        <div className="relative max-w-4xl mx-auto flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-white p-10 md:p-14 rounded-[40px] shadow-sm border border-warm-ink/5 w-full flex flex-col items-center text-center"
            >
              <Quote size={40} className="text-rose-gold/40 mb-8" strokeWidth={1} />
              <p className="font-body text-xl md:text-2xl font-light text-warm-ink/80 leading-relaxed mb-10 text-balance max-w-2xl">
                "{testimonials[currentIndex].quote}"
              </p>
              <div>
                <h4 className="font-body text-sm font-bold text-bordeaux uppercase tracking-widest mb-1">{testimonials[currentIndex].author}</h4>
                <span className="font-body text-[10px] font-semibold text-rose-gold uppercase tracking-widest">{testimonials[currentIndex].service}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {testimonials.length > 1 && (
            <div className="flex gap-3 justify-center mt-12">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === currentIndex ? 'bg-bordeaux scale-125' : 'bg-bordeaux/20 hover:bg-bordeaux/40'
                  }`}
                  aria-label={`Ir para depoimento ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato" className="py-24 md:py-32 px-6">
      <div className="max-w-[1200px] mx-auto text-center bg-bordeaux rounded-[40px] md:rounded-[60px] py-24 md:py-32 relative overflow-hidden px-6">
        <div className="absolute inset-0 bg-warm-ink opacity-20 pointer-events-none mix-blend-multiply"></div>
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[150%] bg-white/5 blur-[120px] rounded-full rotate-45 pointer-events-none"></div>
        
        <div className="relative z-10 space-y-8 flex flex-col items-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-blush-sand font-medium mb-4 text-balance">
            Pronta para iniciar seu retorno?
          </h2>
          <p className="font-body text-lg text-dusty-rose/80 font-light max-w-xl mx-auto mb-10 text-balance">
            Escolha um momento para si e permita que o equilíbrio volte a ser sua prioridade. Entre em contato para agendar sua consulta presencial ou online.
          </p>
          
          <div className="flex justify-center w-full max-w-sm mx-auto">
            <a href="https://wa.me/5519999220089?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20maiores%20informa%C3%A7%C3%B5es%20para%20iniciar%20minha%20jornada%20e%20agendar%20uma%20consulta." target="_blank" rel="noopener noreferrer" className="w-full bg-rose-gold text-white px-8 py-5 rounded-full font-body text-sm font-semibold uppercase tracking-widest hover:bg-white hover:text-bordeaux transition-all duration-300 text-center shadow-lg hover:shadow-[0_0_40px_rgba(197,160,122,0.4)]">
              Agendar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const scrollToMenuId = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white border-t border-dusty-rose/30 mt-12">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center">
              <img loading="lazy" src="https://i.ibb.co/ZRyY8vsp/marta-logo-site.webp" alt="Marta Ana Chiconato" className="h-14 object-contain" />
            </div>
            <p className="font-body text-base font-light text-warm-ink/70 max-w-sm leading-relaxed">
              Terapia Integrativa.
            </p>
            <address className="not-italic font-body text-sm font-light text-warm-ink/60 mt-4 leading-relaxed">
              Av. Fábio Ferraz Bicudo, 937<br/>
              Jardim Esplanada — Indaiatuba, SP<br/>
              CEP: 13331-590
            </address>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-8">
            <div className="space-y-6">
              <h4 className="font-body text-xs font-semibold text-rose-gold uppercase tracking-widest">Navegação</h4>
              <ul className="space-y-4 font-body text-sm font-light text-warm-ink/80">
                <li><a href="#jornada" onClick={(e) => scrollToMenuId(e, 'jornada')} className="hover:text-bordeaux transition-colors">A Jornada</a></li>
                <li><a href="#servicos" onClick={(e) => scrollToMenuId(e, 'servicos')} className="hover:text-bordeaux transition-colors">Serviços</a></li>
                <li><a href="#sobre" onClick={(e) => scrollToMenuId(e, 'sobre')} className="hover:text-bordeaux transition-colors">Marta Ana</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="font-body text-xs font-semibold text-rose-gold uppercase tracking-widest">Suporte</h4>
              <ul className="space-y-4 font-body text-sm font-light text-warm-ink/80">
                <li><a href="#faq" onClick={(e) => scrollToMenuId(e, 'faq')} className="hover:text-bordeaux transition-colors">FAQ</a></li>
                <li><Link to="/privacidade" className="hover:text-bordeaux transition-colors">Privacidade</Link></li>
                <li><Link to="/termos" className="hover:text-bordeaux transition-colors">Termos</Link></li>
              </ul>
            </div>
            <div className="space-y-6 hidden md:block">
              <h4 className="font-body text-xs font-semibold text-rose-gold uppercase tracking-widest">Social</h4>
              <ul className="space-y-4 font-body text-sm font-light text-warm-ink/80">
                <li>
                  <a href="https://instagram.com/martaana.terapia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-bordeaux transition-colors">
                    <Instagram size={16} strokeWidth={1.5} />
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/profile.php?id=61576445813285" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-bordeaux transition-colors">
                    <Facebook size={16} strokeWidth={1.5} />
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        <div className="border-t border-dusty-rose/30 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
          <div className="font-body text-xs font-light text-warm-ink/50 text-center md:text-left">
            <p>
              © {new Date().getFullYear()} Marta Ana Chiconato. Todos os direitos reservados.
            </p>
            <p className="mt-2 md:mt-1">
              Desenvolvido estrategicamente por <a href="https://www.orvalia.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-bordeaux transition-colors font-medium border-b border-transparent hover:border-bordeaux">Orvalia Studio</a>
            </p>
          </div>
          <div className="flex gap-6 md:hidden">
             <a href="https://instagram.com/martaana.terapia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 font-body text-xs font-light text-warm-ink/70 uppercase tracking-wider hover:text-bordeaux transition-colors">
               <Instagram size={14} strokeWidth={1.5} /> Insta
             </a>
             <a href="https://www.facebook.com/profile.php?id=61576445813285" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 font-body text-xs font-light text-warm-ink/70 uppercase tracking-wider hover:text-bordeaux transition-colors">
               <Facebook size={14} strokeWidth={1.5} /> Face
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const faqs = [
  {
    question: "O que é a Terapia Integrativa e como ela pode me ajudar?",
    answer: "A Terapia Integrativa é uma abordagem voltada para o indivíduo como um todo — mente, corpo e energia. Ela ajuda a liberar bloqueios emocionais, reduzir a ansiedade e promover um profundo autoconhecimento, restaurando o seu equilíbrio natural e a clareza mental para lidar com os desafios da vida."
  },
  {
    question: "Como funciona a consulta presencial em Indaiatuba?",
    answer: "Nosso espaço de atendimento presencial oferece um ambiente de acolhimento focado no seu bem-estar, localizado em ponto de fácil acesso na Av. Fábio Ferraz Bicudo, 937, no Jardim Esplanada, em Indaiatuba - SP. O espaço é desenhado de forma minimalista para proporcionar silêncio, tranquilidade e privacidade."
  },
  {
    question: "Posso realizar a terapia online ou apenas presencial?",
    answer: "Oferecemos flexibilidade total para o seu momento. Você pode agendar sessões presenciais em nosso espaço em Indaiatuba ou optar pelas sessões de cuidado online, que entregam a mesma profundidade, empatia e excelentes resultados na jornada de autoconhecimento, no conforto da sua casa."
  },
  {
    question: "Como é a abordagem focada no autoconhecimento?",
    answer: "Trabalhamos através da 'Quietude Estratégica', um método que foca em promover pausas conscientes, aliada a ferramentas terapêuticas holísticas que permitem escutar sua voz interior. É uma jornada contínua onde mapeamos juntos as razões do seu estado atual e as transformamos de dentro para fora."
  },
  {
    question: "Qual é a duração ideal e a frequência das consultas?",
    answer: "Cada sessão dura cerca de 60 a 90 minutos, a depender do fluxo do seu processo. A frequência inicial recomendada geralmente é semanal ou quinzenal, para construirmos uma base sólida, mas é sempre adaptada de forma personalizada às suas necessidades e ao momento de vida em que você se encontra."
  }
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="font-body text-xs font-semibold text-rose-gold uppercase tracking-[0.2em] mb-4 block">
            Esclarecimentos
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-bordeaux font-semibold leading-tight">
            Dúvidas Frequentes
          </h2>
          <p className="mt-6 text-warm-ink/70 font-body text-lg leading-relaxed max-w-2xl mx-auto">
            Informações sobre o processo terapêutico, nossos serviços e os detalhes para os seus atendimentos presenciais ou online.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-warm-ink/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-dusty-rose/40"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center bg-white hover:bg-surface-bright transition-colors focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-display text-lg text-bordeaux font-medium pr-8">
                  {faq.question}
                </span>
                <span className={`text-rose-gold transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <ChevronDown size={20} strokeWidth={2} />
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pt-2 font-body text-warm-ink/80 leading-relaxed font-light">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-rose-gold text-white shadow-lg transition-all duration-300 hover:bg-bordeaux hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-rose-gold focus:ring-offset-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Voltar ao topo"
    >
      <ChevronUp size={24} strokeWidth={2} />
    </button>
  );
}

export default function App() {
  return (
    <div className="bg-blush-sand text-warm-ink font-body min-h-screen overflow-x-hidden selection:bg-rose-gold selection:text-white">
      <Navbar />
      <Hero />
      <Manifesto />
      <Services />
      <About />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}
