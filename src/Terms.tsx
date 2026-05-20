import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <div className="bg-blush-sand text-warm-ink font-body min-h-screen selection:bg-rose-gold selection:text-white">
      <nav className="fixed top-0 w-full z-50 bg-blush-sand/90 backdrop-blur-xl shadow-sm py-4">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center">
          <Link to="/" className="flex items-center gap-2 text-warm-ink/70 hover:text-bordeaux transition-colors font-body text-sm font-semibold uppercase tracking-widest">
            <ArrowLeft size={18} />
            Voltar
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
        <div className="mb-12">
          <span className="font-body text-xs font-semibold text-rose-gold uppercase tracking-[0.2em] mb-4 block">
            Políticas e Diretrizes
          </span>
          <h1 className="font-display text-4xl md:text-5xl text-bordeaux font-semibold leading-tight mb-6">
            Termos de Serviço
          </h1>
          <p className="font-body text-warm-ink/70">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>

        <div className="space-y-10 font-body text-lg text-warm-ink/80 font-light leading-relaxed">
          <section>
            <h2 className="font-display text-2xl text-bordeaux font-medium mb-4">1. Aceitação dos Termos</h2>
            <p className="mb-4">
              Ao acessar este site e/ou agendar uma sessão com Marta Ana Chiconato - Terapia Integrativa, você concorda com os presentes Termos de Serviço e com a nossa Política de Privacidade. Caso não concorde com algum dos termos, por favor, não prossiga com a utilização de nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-bordeaux font-medium mb-4">2. Natureza dos Serviços Terapêuticos</h2>
            <p className="mb-4">
              A <strong>Terapia Integrativa e Holística</strong> não substitui tratamentos médicos, psiquiátricos ou psicológicos convencionais. Nossos serviços atuam de forma complementar no campo energético e de autoconhecimento do indivíduo.
            </p>
            <p className="mb-4">
              O interagente (cliente) está ciente de que as práticas oferecidas (tais como Reiki, Radiestesia, Baralho Cigano e Numerologia) visam a harmonização de estados emocionais e frequência vibracional, e que os resultados dependem, em grande parte, de sua própria abertura e processo interno.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-bordeaux font-medium mb-4">3. Agendamento, Pagamento e Política de Cancelamento</h2>
            <p className="mb-4">
              Agendamentos são realizados mediante disponibilidade, confirmados via WhatsApp ou outros meios de comunicação oficiais.
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>Desmarcações e Remarcações:</strong> Devem ser comunicadas com antecedência mínima de 24 horas. O não comparecimento sem aviso prévio caracterizará a sessão como realizada (podendo reter valores adiantados, conforme acordo prévio com o interagente).</li>
              <li><strong>Pontualidade:</strong> Há uma tolerância de 15 minutos de atraso. O tempo de atraso será descontado do tempo total da sessão.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-bordeaux font-medium mb-4">4. Atendimentos Online e Ferramentas</h2>
            <p className="mb-4">
              Para os serviços online, é de responsabilidade do interagente garantir um ambiente tranquilo, conexão estável de internet e dispositivos adequados. Problemas técnicos de parte do interagente não implicam em reposição de horário se a sessão for inviabilizada de última hora, sob avaliação caso a caso.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-bordeaux font-medium mb-4">5. Direitos Autorais e Materiais Entregues</h2>
            <p className="mb-4">
              Materiais providenciados nos atendimentos, como os mapas da Numerologia Terapêutica ou Relatórios de Radiestesia, são de uso estritamente pessoal e intransferível. É proibida sua reprodução ou distribuição comercial sem autorização expressa.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-bordeaux font-medium mb-4">6. Alterações nos Termos e Serviços</h2>
            <p className="mb-4">
              Reservamo-nos o direito de modificar valores, horários e abordagens terapêuticas, bem como de revisar estes termos a qualquer momento, visando sempre a melhoria de nossas ferramentas e a conformidade legal. Recomendamos que acesse esta página periodicamente.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-bordeaux font-medium mb-4">7. Foro</h2>
            <p className="mb-4">
              Fica eleito o foro da Comarca de Indaiatuba, Estado de São Paulo, para dirimir quaisquer dúvidas ou litígios oriundos da interpretação destes Termos de Serviço.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
