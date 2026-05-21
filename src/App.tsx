/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, Hand, Layers, Calculator, Sparkles, Instagram, Facebook, Quote, ChevronUp, ChevronDown, MessageCircle, Copy, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';

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
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="relative min-h-[95vh] flex items-center pt-28 pb-16 md:pt-24 md:pb-12 overflow-hidden">
      {/* Soft Glow Background Element */}
      <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-dusty-rose/40 blur-[100px] pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 lg:gap-20 items-center relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 md:order-1 md:col-span-6 lg:col-span-5 space-y-6 md:space-y-8 flex flex-col items-center md:items-start text-center md:text-left mt-4 md:mt-0"
        >
          <div className="inline-block px-4 py-1.5 border border-rose-gold/60 rounded-full text-rose-gold font-body text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] bg-white/30 backdrop-blur-sm">
            Experiência Premium
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] text-bordeaux font-semibold leading-[1.15] md:leading-[1.1] tracking-tight">
            Clareza Mental, Foco & Alinhamento de Alto Padrão.
          </h1>
          <p className="font-body text-base lg:text-lg text-warm-ink/80 leading-normal font-normal max-w-[20rem] sm:max-w-md">
            Silencie a sobrecarga mental, desate nós emocionais e blinde sua energia. Um espaço de alto padrão dedicado a elevar sua vitalidade através de terapias integrativas com foco em clareza, direcionamento e bem-estar profundo.
          </p>
          <div className="pt-2 md:pt-4">
            <a href="https://wa.me/5519999220089?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20maiores%20informa%C3%A7%C3%B5es%20para%20agendar%20uma%20sess%C3%A3o." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-bordeaux text-blush-sand px-6 py-3.5 md:px-8 md:py-4 rounded-full font-body text-xs md:text-sm font-semibold uppercase tracking-widest hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(89,32,37,0.2)]">
              Agendar Sessão
              <ArrowRight size={18} strokeWidth={2} />
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="order-1 md:order-2 md:col-span-6 lg:col-span-7 flex justify-center md:justify-end relative"
        >
          <div className="relative w-full max-w-[340px] sm:max-w-[440px] md:max-w-[500px] aspect-square md:aspect-[4/5] rounded-[40px_16px_40px_16px] md:rounded-[100px_40px_100px_40px] overflow-hidden shadow-xl md:shadow-2xl">
            <motion.img 
              style={{ y, scale: 1.15 }}
              loading="lazy"
              src="https://i.ibb.co/cXbDVjF6/marta-site05.webp" 
              alt="Marta Ana Chiconato - Terapia Holística" 
              className="w-full h-full object-cover object-[center_22%] md:object-top transform hover:scale-105 transition-transform duration-1000"
            />
          </div>
          

        </motion.div>
      </div>
    </section>
  );
}

function Manifesto() {
  const pillars = [
    {
      num: "I",
      title: "Autonomia de Cura",
      desc: "Menos misticismo vazio e mais protagonismo real. Conduzimos você a decifrar seus próprios ritmos e resgatar o controle de seus estados emocionais e espirituais."
    },
    {
      num: "II",
      title: "Quietude Estratégica",
      desc: "A pausa consciente não é recuo, mas o maior ato de poder contemporâneo. No silêncio refinado do nosso espaço, sua mente arquiteta as próximas decisões de alto nível."
    },
    {
      num: "III",
      title: "Rigor & Sensibilidade",
      desc: "Práticas ancestrais amparadas por um refinado rigor técnico. Métodos integrativos estruturados sob medida para quem exige eficácia, elegância e acolhimento de alto padrão."
    }
  ];

  return (
    <section id="jornada" className="pt-28 pb-16 md:pt-40 md:pb-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-6 right-6 border-t border-dusty-rose/30 max-w-[1440px] mx-auto md:left-12 md:right-12" />
      
      {/* Decorative subtle ambient elements to add visual texture */}
      <div className="absolute left-[-15%] top-[40%] w-[35vw] h-[35vw] rounded-full bg-blush-sand/30 blur-[120px] pointer-events-none" />
      <div className="absolute right-[-15%] top-[15%] w-[35vw] h-[35vw] rounded-full bg-dusty-rose/20 blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[850px] mx-auto text-center space-y-6 md:space-y-8"
        >
          <span className="font-body text-[10px] md:text-xs font-semibold text-rose-gold tracking-[0.25em] uppercase px-4 py-1.5 border border-rose-gold/25 rounded-full bg-blush-sand/10 backdrop-blur-sm inline-block">
            Nossa Filosofia
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-bordeaux italic font-medium leading-tight text-balance">
            "A cura não é apenas o alívio temporário de um sintoma, mas o retorno estratégico ao seu próprio centro."
          </h2>
          <p className="font-body text-base md:text-lg text-warm-ink/80 leading-relaxed font-normal max-w-2xl mx-auto">
            Não propomos fórmulas genéricas ou dogmas rígidos. Acreditamos na potência terapêutica de um espaço planejado para o recolhimento e na eficácia de sabedorias milenares que estruturam sua força vital.
          </p>
        </motion.div>

        {/* Pillars Grid - effectively addressing the blank space with luxurious structured content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-[1100px] mx-auto mt-20 md:mt-24">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              className="flex flex-col space-y-4 md:space-y-5 p-6 md:p-8 rounded-[24px] bg-blush-sand/[0.15] border border-dusty-rose/15 hover:border-dusty-rose/30 hover:bg-blush-sand/[0.25] transition-all duration-300"
            >
              <span className="font-mono text-xs md:text-sm font-semibold text-rose-gold/70 tracking-[0.2em] uppercase leading-none block">
                {pillar.num}
              </span>
              <h3 className="font-display text-xl md:text-2xl font-medium text-bordeaux leading-snug">
                {pillar.title}
              </h3>
              <p className="font-body text-sm text-warm-ink/75 leading-relaxed font-normal">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="pt-16 md:pt-20 flex justify-center"
        >
          <div className="h-12 w-px bg-rose-gold/30"></div>
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  const [activeServiceIndex, setActiveServiceIndex] = useState<number | null>(null);

  const services = [
    {
      icon: Hand,
      title: 'Reequilíbrio Energético Estratégico',
      desc: 'Alinhamento vibracional profundo com Reiki para reduzir drasticamente o estresse, restaurar a vitalidade e restabelecer seu foco mental.',
      tag: 'Técnica: Reiki',
      fullDesc: 'Este processo de alinhamento atua diretamente na raiz dos desequilízbrios emocionais e de cansaço acumulado utilizando a consagrada técnica de Reiki. Através da harmonização de seus centros de força vital (chakras), você experimenta um relaxamento celular profundo, promovendo descompressão mental imediata, revigoramento pessoal e alívio de tensões do dia a dia.',
      image: 'https://i.ibb.co/tPF5XdQX/marta-reiki-luxury.webp'
    },
    {
      icon: Layers,
      title: 'Direcionamento Estratégico de Vida',
      desc: 'Decisões seguras e mapeamento objetivo de cenários com o Baralho Cigano para destravar caminhos profissionais e pessoais.',
      tag: 'Técnica: Baralho Cigano',
      fullDesc: 'Muito além de meras previsões, utilizamos a clareza e simbologia profunda do Baralho Cigano Terapêutico para construir um mapa inteligente direcionado aos seus maiores dilemas de vida. Ao identificar padrões repetitivos e descortinar cenários futuros sob nova perspectiva, você ganha a clareza e a segurança necessárias para as suas decisões afetivas, de carreira ou de negócios.',
      image: 'https://i.ibb.co/fdQXYHry/marta-tarot-luxury.webp'
    },
    {
      icon: Calculator,
      title: 'Mapa Prático de Propósito',
      desc: 'Dossiê do seu projeto de alma com Numerologia Terapêutica, entregue digitalmente para alinhar seus talentos e seu plano de carreira.',
      tag: 'Técnica: Numerologia',
      fullDesc: 'Um mergulho analítico e minucioso guiado pela Numerologia Terapêutica, que traduz os seus números de nascimento em diretrizes de prosperidade, vocação e realização. Você recebe um manual existencial customizado e definitivo de suas potencialidades, ideal para transições de carreira bem-sucedidas e para quem quer viver em congruência com sua real missão.',
      image: 'https://i.ibb.co/nNGpQyHj/marta-numerologia-luxury.webp'
    },
    {
      icon: Sparkles,
      title: 'Desbloqueio Vibracional à Distância',
      desc: 'Rastreamento e saneamento energético por Radiestesia para neutralizar interferências invisíveis que barram seu bem-estar e expansão.',
      tag: 'Técnica: Radiestesia',
      fullDesc: 'Identificamos, limpamos e reordenamos desequilíbrios eletromagnéticos e bloqueios de fluxo vital através do uso especializado da Radiestesia e da Mesa Radiónica. Esse tratamento é executado de forma concentrada à distância, organizando vibrações estagnadas no nível físico, relacional e financeiro. Ao final, você recebe um relatório minucioso com orientações práticas de blindagem energética.',
      image: 'https://i.ibb.co/1GLJqJYz/marta-radiestesia-luxury.webp'
    }
  ];

  const activeService = activeServiceIndex !== null ? services[activeServiceIndex] : null;

  return (
    <section id="servicos" className="pt-16 pb-48 md:pt-24 md:pb-64 relative screen-section">
      <div className="absolute top-0 left-6 right-6 border-t border-dusty-rose/30 max-w-[1440px] mx-auto md:left-12 md:right-12" />
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div className="max-w-xl">
            <span className="font-body text-xs font-semibold text-rose-gold uppercase tracking-[0.15em] mb-4 block">
              Especialidades
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-bordeaux font-medium leading-tight">
              Portais de Transformação
            </h2>
          </div>
          <p className="font-body text-base font-normal text-warm-ink/75 max-w-sm mb-2 leading-normal">
            Técnicas selecionadas para harmonizar frequências e expandir sua visão sobre a vida e propósito.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i} 
              layoutId={`service-card-${i}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
              onClick={() => setActiveServiceIndex(i)}
              className="group relative p-6 sm:p-8 rounded-[32px] bg-white transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] border border-warm-ink/5 hover:border-dusty-rose/40 hover:shadow-[0_24px_48px_-12px_rgba(89,32,37,0.08)] hover:-translate-y-2 will-change-transform flex flex-col justify-between items-start h-full cursor-pointer"
            >
              <div className="w-full">
                <motion.div layoutId={`service-image-${i}`} className="w-full aspect-[4/3] sm:aspect-square lg:aspect-[4/3] mb-8 overflow-hidden rounded-2xl relative shadow-sm">
                  <img loading="lazy" src={s.image} alt={s.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-md text-bordeaux flex items-center justify-center shadow-lg">
                    <s.icon size={24} strokeWidth={1.5} />
                  </div>
                </motion.div>
                <motion.h3 layoutId={`service-title-${i}`} className="font-display text-2xl text-bordeaux mb-4 font-medium">{s.title}</motion.h3>
                <motion.p layoutId={`service-desc-${i}`} className="font-body text-base font-normal text-warm-ink/80 leading-normal mb-8 transition-opacity duration-500 group-hover:opacity-80">
                  {s.desc}
                </motion.p>
              </div>
              <div className="flex justify-between items-end w-full mt-auto pt-4 border-t border-warm-ink/5">
                <motion.div layoutId={`service-tag-${i}`} className="flex flex-col text-left">
                  <span className="font-body text-[9px] font-semibold text-warm-ink/40 uppercase tracking-[0.2em] mb-1.5 leading-none">
                    Técnica Base
                  </span>
                  <span className="font-body text-sm sm:text-base font-semibold text-rose-gold uppercase tracking-[0.12em] leading-none">
                    {s.tag.replace('Técnica: ', '')}
                  </span>
                </motion.div>
                <span className="font-body text-xl font-normal text-rose-gold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 pb-1">
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
                <motion.div layoutId={`service-tag-${activeServiceIndex}`} className="flex flex-col text-left mb-8">
                  <span className="font-body text-[10px] font-semibold text-warm-ink/40 uppercase tracking-[0.2em] mb-1.5 leading-none">
                    Técnica Base
                  </span>
                  <span className="font-body text-base md:text-lg font-semibold text-rose-gold uppercase tracking-[0.12em] leading-none text-left">
                    {activeService.tag.replace('Técnica: ', '')}
                  </span>
                </motion.div>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="font-body text-base md:text-lg font-normal text-warm-ink/85 leading-normal mb-10 text-balance"
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
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} id="sobre" className="py-48 md:py-64 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-6 right-6 border-t border-dusty-rose/30 max-w-[1440px] mx-auto md:left-12 md:right-12" />
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-6 relative order-2 lg:order-1 flex flex-col items-center lg:items-start pt-10 lg:pt-0"
        >
          <h3 className="font-display text-3xl md:text-4xl text-bordeaux mb-8 font-medium relative z-10 text-center lg:text-left w-full">
            A Guardiã do Espaço
          </h3>
          <div className="w-full relative">
            {/* Decorative frame */}
            <div className="absolute -inset-4 md:-inset-6 border border-rose-gold/30 rounded-[60px_120px] -rotate-2 scale-95 lg:scale-100 hidden sm:block"></div>
            
            <div className="relative overflow-hidden rounded-[40px_100px] shadow-2xl aspect-[4/5] md:aspect-auto md:h-[700px] w-full">
              <motion.img 
                style={{ y, scale: 1.2 }}
                loading="lazy"
                src="https://i.ibb.co/cXbDVjF6/marta-site05.webp" 
                alt="Marta Ana Chiconato - Terapia Integrativa" 
                className="w-full h-full object-cover object-center grayscale-[30%] sepia-[15%] contrast-[1.1] transform hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-bordeaux/10 mix-blend-multiply pointer-events-none" />
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="lg:col-span-6 space-y-10 order-1 lg:order-2 flex flex-col justify-center"
        >
          <div>
            <span className="font-body text-xs font-semibold text-rose-gold uppercase tracking-[0.2em] mb-4 block">
              Sobre a Terapeuta
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-bordeaux font-semibold leading-tight">
              Marta Ana Chiconato
            </h2>
          </div>
          
          <div className="space-y-6 font-body text-base md:text-lg text-warm-ink/85 font-normal leading-normal">
            <p>
              Minha missão é ser a ponte entre o seu estado de sobrecarga e o seu centro de equilíbrio absoluto. Com anos de dedicação e estudos profundos em <strong className="font-semibold text-bordeaux">Terapia Integrativa em Indaiatuba</strong>, atuo como canalizadora e mentora holística para guiar você rumo à clareza mental e ao revigoramento pessoal.
            </p>
            <p>
              Em meu consultório físico no Jardim Esplanada — uma localização tranquila e acolhedora de <strong className="font-semibold text-bordeaux">Indaiatuba, SP</strong> — ou por meio de atendimentos online personalizados, integro as consagradas sabedorias do <strong className="font-semibold text-rose-gold">Reiki</strong>, a orientação estratégica do <strong className="font-semibold text-rose-gold">Baralho Cigano</strong>, a precisão analítica da <strong className="font-semibold text-rose-gold">Numerologia Terapêutica</strong> e a força sutil da <strong className="font-semibold text-rose-gold">Radiestesia</strong> para desatar nós energéticos e abrir caminhos de forma duradoura.
            </p>
            <p className="text-sm md:text-base text-warm-ink/75 italic border-l-2 border-rose-gold/40 pl-4 py-1">
              Seja você morador de Indaiatuba ou de cidades vizinhas da região metropolitana como Salto, Itu e Campinas, ou alguém em busca de acolhimento de alto padrão por meio das consultas online, aqui você encontra um refúgio físico e vibracional seguro, ético e de refinado rigor técnico.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      quote: "Elaborar meu mapa de propósito online com a Marta foi um divisor de águas. O material personalizado que recebi é um guia meticuloso que consulto diariamente. A distância não diminuiu em nada a conexão; pelo contrário, tornou o estudo ainda mais confortável e profundo.",
      author: "Carolina S.",
      service: "Mapa de Propósito"
    },
    {
      quote: "A harmonização à distância e o desbloqueio vibracional trouxeram uma leveza imediata para minha casa e meus negócios. O relatório detalhado me ajudou a reestruturar meus padrões e pontos de energia de forma surpreendente.",
      author: "Mariana L.",
      service: "Desbloqueio Vibracional"
    },
    {
      quote: "O direcionamento estratégico online me deu a clareza e as respostas seguras de que eu precisava. O acolhimento é primoroso, superou todas as minhas expectativas e me passou total confiança para os meus próximos passos.",
      author: "Juliana M.",
      service: "Direcionamento Estratégico"
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
    <section className="py-48 md:py-64 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-6 right-6 border-t border-dusty-rose/30 max-w-[1440px] mx-auto md:left-12 md:right-12" />
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="font-body text-xs font-semibold text-rose-gold uppercase tracking-[0.2em] mb-4 block">
            Vozes da Jornada
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-bordeaux font-medium leading-tight max-w-2xl mx-auto">
            A transformação através do formato online
          </h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="relative max-w-4xl mx-auto flex flex-col items-center"
        >
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
              <p className="font-body text-xl md:text-2xl font-normal text-warm-ink/85 leading-normal mb-10 text-balance max-w-2xl">
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
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const addressText = "Av. Fábio Ferraz Bicudo, 937 - Jardim Esplanada, Indaiatuba - SP, 13331-590";

  const handleCopy = () => {
    navigator.clipboard.writeText(addressText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contato" className="py-48 md:py-64 bg-white relative">
      <div className="absolute top-0 left-6 right-6 border-t border-dusty-rose/30 max-w-[1440px] mx-auto md:left-12 md:right-12" />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 flex flex-col items-start"
        >
          <span className="font-body text-xs font-semibold text-rose-gold uppercase tracking-[0.2em] mb-2 block">
            Contato
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-bordeaux font-medium mb-4 text-balance">
            Pronta para iniciar seu retorno?
          </h2>
          <p className="font-body text-lg text-warm-ink/85 font-normal max-w-xl mb-10 text-balance leading-normal">
            Escolha um momento para si e permita que o equilíbrio volte a ser sua prioridade. Entre em contato para agendar sua consulta presencial ou online.
          </p>
          
          <div className="flex w-full max-w-sm">
            <a href="https://wa.me/5519999220089?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20maiores%20informa%C3%A7%C3%B5es%20para%20iniciar%20minha%20jornada%20e%20agendar%20uma%20consulta." target="_blank" rel="noopener noreferrer" className="w-full bg-bordeaux text-blush-sand px-8 py-5 rounded-full font-body text-sm font-semibold uppercase tracking-widest hover:bg-rose-gold hover:text-white transition-all duration-300 text-center shadow-lg">
              Agendar por WhatsApp
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="w-full relative h-[420px] md:h-[500px] rounded-[32px] overflow-hidden shadow-xl border border-dusty-rose/20 group"
        >
          <iframe 
            src="https://maps.google.com/maps?q=Av.%20F%C3%A1bio%20Ferraz%20Bicudo%2C%20937%20-%20Jardim%20Esplanada%2C%20Indaiatuba%20-%20SP%2C%2013331-590%20(Marta%20Ana%20Chiconato%20-%20Terapia%20Integrativa)&t=&z=16&ie=UTF8&iwloc=B&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização do consultório"
            className="grayscale-[30%] contrast-[1.1] hover:grayscale-0 transition-all duration-1000 pb-[110px] sm:pb-0"
          ></iframe>

          {/* Elegant Address & Copy Overlay */}
          <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 bg-white/95 backdrop-blur-md p-4 md:p-5 rounded-[24px] border border-dusty-rose/20 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4 z-10">
            <div className="text-left">
              <span className="font-body text-[10px] md:text-xs font-semibold text-rose-gold uppercase tracking-[0.15em] mb-1 block">Nosso Espaço Presencial</span>
              <p className="font-body text-xs md:text-sm font-normal text-warm-ink/80 leading-normal">
                Av. Fábio Ferraz Bicudo, 937 — Jardim Esplanada<br className="hidden sm:inline" />
                Indaiatuba - SP, 13331-590
              </p>
            </div>
            <button 
              onClick={handleCopy}
              className={`flex items-center justify-center gap-2 px-5 py-3 rounded-full font-body text-xs font-semibold uppercase tracking-wider transition-all duration-300 self-start sm:self-center shrink-0 cursor-pointer ${
                copied 
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                  : 'bg-bordeaux text-blush-sand hover:bg-rose-gold hover:text-white border border-transparent hover:shadow-[0_4px_12px_rgba(89,32,37,0.15)] md:px-6'
              }`}
            >
              {copied ? (
                <>
                  <Check size={14} className="stroke-[2.5]" />
                  <span>Copiado!</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>Copiar Endereço</span>
                </>
              )}
            </button>
          </div>
        </motion.div>
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
    <motion.footer 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-white border-t border-dusty-rose/30 mt-12"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center">
              <img loading="lazy" src="https://i.ibb.co/ZRyY8vsp/marta-logo-site.webp" alt="Marta Ana Chiconato" className="h-14 object-contain" />
            </div>
            <p className="font-body text-base font-normal text-warm-ink/80 max-w-sm leading-normal">
              Terapia Integrativa.
            </p>
            <address className="not-italic font-body text-sm font-normal text-warm-ink/70 mt-4 leading-normal">
              Av. Fábio Ferraz Bicudo, 937<br/>
              Jardim Esplanada — Indaiatuba, SP<br/>
              CEP: 13331-590
            </address>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-8">
            <div className="space-y-6">
              <h4 className="font-body text-xs font-semibold text-rose-gold uppercase tracking-widest">Navegação</h4>
              <ul className="space-y-4 font-body text-sm font-normal text-warm-ink/80 leading-normal">
                <li><a href="#jornada" onClick={(e) => scrollToMenuId(e, 'jornada')} className="hover:text-bordeaux transition-colors">A Jornada</a></li>
                <li><a href="#servicos" onClick={(e) => scrollToMenuId(e, 'servicos')} className="hover:text-bordeaux transition-colors">Serviços</a></li>
                <li><a href="#sobre" onClick={(e) => scrollToMenuId(e, 'sobre')} className="hover:text-bordeaux transition-colors">Marta Ana</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="font-body text-xs font-semibold text-rose-gold uppercase tracking-widest">Suporte</h4>
              <ul className="space-y-4 font-body text-sm font-normal text-warm-ink/80 leading-normal">
                <li><a href="#faq" onClick={(e) => scrollToMenuId(e, 'faq')} className="hover:text-bordeaux transition-colors">FAQ</a></li>
                <li><Link to="/privacidade" className="hover:text-bordeaux transition-colors">Privacidade</Link></li>
                <li><Link to="/termos" className="hover:text-bordeaux transition-colors">Termos</Link></li>
              </ul>
            </div>
            <div className="space-y-6 hidden md:block">
              <h4 className="font-body text-xs font-semibold text-rose-gold uppercase tracking-widest">Social</h4>
              <ul className="space-y-4 font-body text-sm font-normal text-warm-ink/80 leading-normal">
                <li>
                  <a href="https://instagram.com/martaanachiconato" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-bordeaux transition-colors">
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
          <div className="font-body text-xs font-normal text-warm-ink/50 text-center md:text-left">
            <p>
              © {new Date().getFullYear()} Marta Ana Chiconato. Todos os direitos reservados.
            </p>
            <p className="mt-2 md:mt-1">
              Desenvolvido estrategicamente por <a href="https://www.orvalia.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-bordeaux transition-colors font-medium border-b border-transparent hover:border-bordeaux">Orvalia Studio</a>
            </p>
          </div>
          <div className="flex gap-6 md:hidden">
             <a href="https://instagram.com/martaanachiconato" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 font-body text-xs font-normal text-warm-ink/70 uppercase tracking-wider hover:text-bordeaux transition-colors">
               <Instagram size={14} strokeWidth={1.5} /> Insta
             </a>
             <a href="https://www.facebook.com/profile.php?id=61576445813285" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 font-body text-xs font-normal text-warm-ink/70 uppercase tracking-wider hover:text-bordeaux transition-colors">
               <Facebook size={14} strokeWidth={1.5} /> Face
             </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

const faqs = [
  {
    question: "O que é a Terapia Integrativa e como ela pode me ajudar em Indaiatuba?",
    answer: "A Terapia Integrativa é uma abordagem de saúde sob medida que trata o interagente considerando mente, corpo e seu padrão de frequência energética de forma unificada. Através do consultório de alta qualidade da terapeuta Marta Ana Chiconato em Indaiatuba, SP, ou através de suas dinâmicas de acolhimento online, ela ajuda a aliviar a sobrecarga mental do cotidiano estressante, resgatar seu foco e destravar fluxos estagnados, trazendo sustentação real para que você viva com inteireza e clareza de propósito."
  },
  {
    question: "Quais as principais especialidades oferecidas por Marta Ana Chiconato?",
    answer: "Marta disponibiliza quatro técnicas principais desenhadas para curas profundas e respostas precisas: (1) Reequilíbrio Energético Estratégico utilizando a técnica milenar de Reiki para harmonizar cansaço celular e reativar os centros vibracionais; (2) Direcionamento Estratégico de Vida através do Baralho Cigano para obter previsões reflexivas e destrinchar cenários pessoais/gerenciais; (3) Mapa Prático de Propósito ancorado na Numerologia Terapêutica de nascimento como um dossiê existencial; e (4) Desbloqueio Vibracional à Distância por meio de varreduras precisas de Radiestesia para neutralizar frequências nocivas."
  },
  {
    question: "Como funciona o atendimento presencial no Jardim Esplanada em Indaiatuba?",
    answer: "Nosso refúgio presencial em Indaiatuba é estrategicamente posicionado em uma de suas avenidas mais nobres: na Av. Fábio Ferraz Bicudo, 937 - Jardim Esplanada. Cada detalhe arquitetônico foi planejado sob a ótica da Quietude Estratégica, combinando iluminação suave, silêncio absoluto e privacidade restrita para que sua experiência física com as técnicas de Reiki e Baralho Cigano ocorra de forma premium e inesquecível."
  },
  {
    question: "É possível realizar consultas e leituras terapêuticas no formato online?",
    answer: "Sim, absolutamente. Para que a distância geográfica nunca seja um obstáculo para sua expansão pessoal, Marta Ana Chiconato estruturou atendimentos online do Baralho Cigano e entrega com precisão milimétrica e repasse de áudio o Mapa de Propósito (Numerologia) e as neutralizações e blindagens da Radiestesia à distância, estendendo seu suporte a clientes de toda a RMC (Campinas, Valinhos, Vinhedo, Salto, Itu) e do exterior."
  },
  {
    question: "Como agendar uma sessão de Terapia Integrativa com Marta em Indaiatuba?",
    answer: "Os agendamentos presenciais ou virtuais são organizados exclusivamente com marcação planejada. É possível solicitar datas de retorno ou primeiras sessões e tirar eventuais dúvidas enviando uma mensagem no WhatsApp (+55 19 99922-0089). Você será acolhido de forma individualizada para que iniciemos juntos sua reconstrução vibracional."
  }
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-48 md:py-64 bg-white relative">
      <div className="absolute top-0 left-6 right-6 border-t border-dusty-rose/30 max-w-[1440px] mx-auto md:left-12 md:right-12" />
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="font-body text-xs font-semibold text-rose-gold uppercase tracking-[0.2em] mb-4 block">
            Esclarecimentos
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-bordeaux font-semibold leading-tight">
            Dúvidas Frequentes
          </h2>
          <p className="mt-6 text-warm-ink/80 font-body text-lg font-normal leading-normal max-w-2xl mx-auto">
            Informações sobre o processo terapêutico, nossos serviços e os detalhes para os seus atendimentos presenciais ou online.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.05, ease: "easeOut" }}
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
                <div className="px-6 pb-6 pt-2 font-body text-warm-ink/85 leading-normal font-normal">
                  {faq.answer}
                </div>
              </div>
            </motion.div>
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
      className={`fixed bottom-8 right-6 md:right-8 z-50 p-3 rounded-full bg-rose-gold text-white shadow-lg transition-all duration-300 hover:bg-bordeaux hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-rose-gold focus:ring-offset-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Voltar ao topo"
    >
      <ChevronUp size={24} strokeWidth={2} />
    </button>
  );
}

function MobileCTA() {
  return (
    <a
      href="https://wa.me/5519999220089?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20maiores%20informa%C3%A7%C3%B5es%20para%20iniciar%20minha%20jornada%20e%20agendar%20uma%20consulta."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-6 right-22 md:hidden z-50 flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#25D366] text-white font-body text-xs font-semibold tracking-wider uppercase shadow-xl active:scale-95 transition-all duration-300 border border-emerald-400/30 hover:bg-[#20ba54]"
      id="mobile-bottom-cta"
    >
      <MessageCircle size={16} className="text-white shrink-0 animate-pulse" />
      <span>Agendar via WhatsApp</span>
    </a>
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
      <MobileCTA />
    </div>
  );
}
