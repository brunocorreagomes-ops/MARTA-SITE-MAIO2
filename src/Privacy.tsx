import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Privacy() {
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
            Política de Privacidade
          </h1>
          <p className="font-body text-warm-ink/70">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>

        <div className="space-y-10 font-body text-lg text-warm-ink/80 font-light leading-relaxed">
          <section>
            <h2 className="font-display text-2xl text-bordeaux font-medium mb-4">1. Introdução</h2>
            <p className="mb-4">
              A privacidade e a segurança dos dados dos nossos clientes e usuários são prioridades para Marta Ana Chiconato - Terapia Integrativa. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-bordeaux font-medium mb-4">2. Dados que Coletamos</h2>
            <p className="mb-4">Coletamos informações necessárias para a prestação de nossos serviços terapêuticos e para o atendimento aos interagentes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Dados de Contato:</strong> Nome, telefone (WhatsApp) e e-mail.</li>
              <li><strong>Dados para Atendimento:</strong> Data de nascimento e nome completo de batismo (essenciais para serviços como Numerologia e Radiestesia).</li>
              <li><strong>Dados Sensíveis:</strong> Informações relatadas durante as sessões (histórico pessoal, queixas físicas/emocionais), que são tratadas sob rigoroso sigilo terapêutico.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-bordeaux font-medium mb-4">3. Como Usamos Seus Dados</h2>
            <p className="mb-4">O uso de seus dados tem as seguintes finalidades exclusivas:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Realização dos serviços contratados (presenciais ou online).</li>
              <li>Comunicação sobre agendamentos, remarcações e envio de relatórios e mapas.</li>
              <li>Montagem do prontuário do interagente para acompanhamento das sessões.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-bordeaux font-medium mb-4">4. Sigilo e Compartilhamento</h2>
            <p className="mb-4">
              Os dados coletados e as informações tratadas durante as sessões enquadram-se na cláusula de sigilo. <strong>Nós não vendemos, alugamos ou compartilhamos suas informações pessoais</strong> com terceiros para fins de marketing ou qualquer outra finalidade, exceto mediante exigência legal ou com o seu consentimento prévio e explícito.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-bordeaux font-medium mb-4">5. Armazenamento e Segurança</h2>
            <p className="mb-4">
              Implementamos medidas administrativas e técnicas para proteger suas informações pessoais contra acessos não autorizados, perdas, destruição ou alterações. Os prontuários físicos e digitais são restritos exclusivamente à terapeuta.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-bordeaux font-medium mb-4">6. Seus Direitos (LGPD)</h2>
            <p className="mb-4">De acordo com a LGPD, você tem o direito de:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Confirmar a existência do tratamento de dados.</li>
              <li>Acessar seus dados pessoais.</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
              <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade com a lei.</li>
              <li>Revogar o seu consentimento.</li>
            </ul>
            <p className="mt-4">
              Para exercer qualquer um destes direitos, entre em contato através do nosso WhatsApp oficial.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
