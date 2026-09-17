"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  HardHat,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Users,
  X,
} from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "Gestão em SST",
    text: "Implementação e acompanhamento de sistemas de gestão em Segurança e Saúde no Trabalho.",
  },
  {
    icon: ClipboardCheck,
    title: "PGR, GRO e inventários",
    text: "Elaboração de PGR, GRO e inventários de riscos físicos, químicos, biológicos e ergonômicos.",
  },
  {
    icon: FileText,
    title: "Laudos e avaliações",
    text: "LTCAT, LIP, AET, insalubridade, periculosidade e análises ergonômicas do trabalho.",
  },
  {
    icon: Users,
    title: "Treinamentos",
    text: "Capacitações normativas e comportamentais para equipes mais preparadas e conscientes.",
  },
  {
    icon: HardHat,
    title: "Gestão de EPI",
    text: "Seleção, fornecimento, controle, registro e treinamento para o uso correto de EPI.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Obras e projetos",
    text: "Assessoria em obras, projetos e instalações conforme as Normas Regulamentadoras aplicáveis.",
  },
  {
    icon: FileText,
    title: "Documentações normativas",
    text: "Elaboração e gestão de documentos conforme as Normas Regulamentadoras (NRs).",
  },
  {
    icon: Users,
    title: "CIPA e comissões",
    text: "Implantação, treinamento e acompanhamento da CIPA e outras comissões internas.",
  },
  {
    icon: BarChart3,
    title: "Assistente técnico",
    text: "Apoio técnico em perícias trabalhistas, análise de documentos e elaboração de relatórios.",
  },
];

const faqs = [
  [
    "Minha empresa precisa do PGR?",
    "O PGR é uma obrigação para a maioria das empresas e deve refletir os riscos reais do ambiente de trabalho. Fazemos o diagnóstico e estruturamos a documentação adequada ao seu negócio.",
  ],
  [
    "Vocês atendem quais segmentos?",
    "Atendemos empresas de comércio, serviços, indústria, construção civil e operações que precisam organizar seus processos de SST com clareza e acompanhamento técnico.",
  ],
  [
    "Como funciona o primeiro atendimento?",
    "Você nos conta o momento atual da empresa, os desafios e os documentos já existentes. Em seguida, orientamos os próximos passos e montamos uma proposta sob medida.",
  ],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  async function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        },
      );
    } catch {
      /* o formulário continua útil mesmo sem backend local disponível */
    }
    setSent(true);
    setSending(false);
    form.reset();
  }

  return (
    <div className="site-shell">
      <div className="topbar">
        <div className="container topbar-inner">
          <span>
            <span className="pulse-dot" /> Atendimento técnico para empresas de
            todos os portes
          </span>
          <a href="tel:+5531985803190">
            <Phone size={14} /> (31) 98580-3190
          </a>
        </div>
      </div>
      <header className="header">
        <div className="container nav-wrap">
          <a
            href="#inicio"
            className="brand"
            aria-label="SeguraMais SST início"
          >
            <span className="brand-mark">
              <ShieldCheck size={25} />
            </span>
            <span>
              <strong>SeguraMais</strong>
              <small>CONSULTORIA EM SST</small>
            </span>
          </a>
          <nav className={menuOpen ? "nav mobile-open" : "nav"}>
            <a href="#servicos" onClick={() => setMenuOpen(false)}>
              Serviços
            </a>
            <a href="#sobre" onClick={() => setMenuOpen(false)}>
              A consultoria
            </a>
            <a href="#processo" onClick={() => setMenuOpen(false)}>
              Como atuamos
            </a>
            <a
              href="#contato"
              className="nav-cta"
              onClick={() => setMenuOpen(false)}
            >
              Fale conosco <ArrowRight size={16} />
            </a>
          </nav>
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-grid container">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="eyebrow-line" /> SEGURANÇA QUE GERA CONFIANÇA
              </div>
              <h1>
                Protegemos pessoas. <em>Fortalecemos negócios.</em>
              </h1>
              <p className="hero-lead">
                Consultoria especializada em Segurança e Saúde do Trabalho para
                transformar prevenção em cultura, conformidade e resultados.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#contato">
                  Avaliar minha empresa <ArrowRight size={18} />
                </a>
                <a className="text-link" href="#servicos">
                  Conheça nossas soluções <span>↓</span>
                </a>
              </div>
              <div className="hero-proof">
                <div className="proof-avatars">
                  <span>EM</span>
                  <span>TM</span>
                  <span>
                    <ShieldCheck size={15} />
                  </span>
                </div>
                <div>
                  <strong>Responsabilidade técnica</strong>
                  <small>Eng. Edna Maria e Eng. Thais Martins</small>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="visual-panel">
                <img
                  src="/referencia-seguranca.jpeg"
                  alt="Equipamentos de proteção e consultoria em segurança do trabalho"
                />
                <div className="visual-overlay">
                  <span className="mini-icon">
                    <CheckCircle2 size={18} />
                  </span>
                  <span>
                    <b>Conformidade na prática</b>
                    <small>Prevenção é uma escolha diária</small>
                  </span>
                </div>
              </div>
              <div className="stamp">
                <ShieldCheck size={21} />
                <span>
                  VIDAS
                  <br />
                  <b>EM PRIMEIRO</b>
                  <br />
                  LUGAR
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="metrics">
          <div className="container metrics-grid">
            <div>
              <strong>01</strong>
              <span>
                Diagnóstico
                <br />
                personalizado
              </span>
            </div>
            <div>
              <strong>02</strong>
              <span>
                Plano de ação
                <br />
                que funciona
              </span>
            </div>
            <div>
              <strong>03</strong>
              <span>
                Acompanhamento
                <br />
                próximo
              </span>
            </div>
            <div className="metric-callout">
              <ShieldCheck size={24} />
              <span>
                Mais segurança.
                <br />
                <b>Mais tranquilidade.</b>
              </span>
            </div>
          </div>
        </section>

        <section className="section services-section" id="servicos">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow dark">
                  <span className="eyebrow-line" /> O QUE FAZEMOS
                </div>
                <h2>
                  Segurança do trabalho
                  <br />
                  <em>sem complicação.</em>
                </h2>
              </div>
              <p>
                Da documentação à mudança de comportamento, cuidamos de cada
                etapa para sua empresa operar com mais segurança e conformidade.
              </p>
            </div>
            <div className="service-grid">
              {services.map(({ icon: Icon, title, text }) => (
                <article className="service-card" key={title}>
                  <div className="service-icon">
                    <Icon size={23} />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <a href="#contato" aria-label={`Saiba mais sobre ${title}`}>
                    <ArrowRight size={17} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section about-section" id="sobre">
          <div className="container about-grid">
            <div className="about-photo">
              <div className="photo-frame">
                <img
                  src="/referencia-seguranca.jpeg"
                  alt="Referência visual da consultoria"
                />
              </div>
              <div className="experience-card">
                <strong>+10</strong>
                <span>
                  frentes de atuação
                  <br />
                  em SST
                </span>
              </div>
            </div>
            <div className="about-copy">
              <div className="eyebrow dark">
                <span className="eyebrow-line" /> A CONSULTORIA
              </div>
              <h2>
                Conhecimento técnico para decisões <em>mais seguras.</em>
              </h2>
              <p>
                Somos uma consultoria próxima, técnica e comprometida com a
                realidade de cada operação. Nosso trabalho é traduzir as
                exigências legais em rotinas claras, documentos consistentes e
                atitudes que protegem de verdade.
              </p>
              <div className="check-list">
                <span>
                  <CheckCircle2 size={19} /> Atendimento personalizado
                </span>
                <span>
                  <CheckCircle2 size={19} /> Responsabilidade técnica registrada
                </span>
                <span>
                  <CheckCircle2 size={19} /> Foco em prevenção e resultado
                </span>
              </div>
              <a href="#contato" className="button dark-button">
                Conversar com uma especialista <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>

        <section className="process-section" id="processo">
          <div className="container">
            <div className="center-heading">
              <div className="eyebrow">
                <span className="eyebrow-line" /> COMO ATUAMOS
              </div>
              <h2>
                Um caminho claro para
                <br />
                <em>uma empresa mais segura.</em>
              </h2>
            </div>
            <div className="process-grid">
              <div>
                <span>01</span>
                <h3>Entender</h3>
                <p>
                  Conhecemos sua operação, seus riscos e os desafios que sua
                  equipe enfrenta.
                </p>
              </div>
              <div>
                <span>02</span>
                <h3>Estruturar</h3>
                <p>
                  Criamos documentos e soluções compatíveis com sua realidade e
                  suas metas.
                </p>
              </div>
              <div>
                <span>03</span>
                <h3>Acompanhar</h3>
                <p>
                  Estamos ao lado da sua empresa para transformar plano em
                  prática contínua.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contato">
          <div className="container contact-grid">
            <div className="contact-intro">
              <div className="eyebrow dark">
                <span className="eyebrow-line" /> VAMOS CONVERSAR
              </div>
              <h2>
                O próximo passo para uma operação <em>mais protegida</em> começa
                aqui.
              </h2>
              <p>
                Conte um pouco sobre sua empresa. Retornaremos para entender sua
                necessidade e indicar o melhor caminho.
              </p>
              <div className="contact-details">
                <a href="tel:+5531985803190">
                  <span>
                    <Phone size={19} />
                  </span>
                  <div>
                    <small>Telefone / WhatsApp</small>
                    <b>(31) 98580-3190</b>
                  </div>
                </a>
                <a href="mailto:eoribeiro2015@gmail.com">
                  <span>
                    <Mail size={19} />
                  </span>
                  <div>
                    <small>E-mail</small>
                    <b>eoribeiro2015@gmail.com</b>
                  </div>
                </a>
              </div>
            </div>
            <form className="contact-form" onSubmit={submitContact}>
              <div className="form-title">
                <MessageCircle size={21} />
                <span>Solicite um contato</span>
              </div>
              <label>
                Seu nome
                <input
                  name="name"
                  required
                  placeholder="Como podemos chamar você?"
                />
              </label>
              <label>
                Empresa
                <input name="company" placeholder="Nome da empresa" />
              </label>
              <label>
                Como podemos ajudar?
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Conte brevemente o que você precisa..."
                />
              </label>
              <button className="button primary full" disabled={sending}>
                {sending ? "Enviando..." : "Quero falar com uma especialista"}{" "}
                <ArrowRight size={18} />
              </button>
              {sent && (
                <p className="success-message">
                  <CheckCircle2 size={17} /> Obrigado! Sua mensagem foi
                  registrada. Em breve entraremos em contato.
                </p>
              )}
            </form>
          </div>
        </section>

        <section className="section faq-section">
          <div className="container faq-grid">
            <div>
              <div className="eyebrow dark">
                <span className="eyebrow-line" /> DÚVIDAS FREQUENTES
              </div>
              <h2>
                Informação também é <em>prevenção.</em>
              </h2>
            </div>
            <div className="faq-list">
              {faqs.map(([question, answer]) => (
                <details key={question}>
                  <summary>
                    {question}
                    <span>+</span>
                  </summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-top">
          <a href="#inicio" className="brand footer-brand">
            <span className="brand-mark">
              <ShieldCheck size={25} />
            </span>
            <span>
              <strong>SeguraMais</strong>
              <small>CONSULTORIA EM SST</small>
            </span>
          </a>
          <p>
            Segurança é valor. Prevenção é escolha.
            <br />
            <b>Resultados são consequência.</b>
          </p>
          <div className="footer-links">
            <a href="#servicos">Serviços</a>
            <a href="#sobre">Sobre nós</a>
            <a href="#contato">Contato</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>
            © 2026 SeguraMais Consultoria. Todos os direitos reservados.
          </span>
          <span>
            Eng. Edna Maria Ribeiro · CREA-MG 211714D
            <br className="mobile-break" /> Eng. Thais Martins Soares · CREA-MG
            112179D
          </span>
        </div>
      </footer>
    </div>
  );
}

// A identidade textual, contatos e serviços ficam centralizados nesta página para facilitar futuras atualizações.
// A imagem de referência está em frontend/public/referencia-seguranca.jpeg.
//"}},{
