import { useEffect } from "react";
import useFadeIn from "../hooks/useFadeIn";
import { useLang } from "../context/LanguageContext";

const copy = {
  es: {
    label: "Contacto",
    title: "Conectemos",
    body: "Para colaboraciones editoriales, encargos de escritura, clases de idiomas o simplemente para compartir una palabra\u00A0— será un placer escucharle.",
    also: "También en",
    servicesTitle: "Servicios",
    services: [
      {
        name: "Clases de Inglés",
        desc: "Instrucción personalizada de inglés para individuos o grupos, adaptada a todos los niveles de competencia.",
      },
      {
        name: "Traducción",
        desc: "Traducción profesional español–inglés e inglés–español con sensibilidad literaria y precisión editorial.",
      },
      {
        name: "Corrección de Estilo",
        desc: "Revisión y corrección de textos en español e inglés — desde manuscritos hasta comunicación corporativa.",
      },
      {
        name: "Revisión de Portafolio",
        desc: "Evaluación y retroalimentación editorial de portafolios escritos, para individuos o grupos.",
      },
    ],
  },
  en: {
    label: "Contact",
    title: "Let\u2019s Connect",
    body: "For editorial collaborations, writing commissions, language instruction, or simply to share a word\u00A0— I would be delighted to hear from you.",
    also: "Also find me on",
    servicesTitle: "Services",
    services: [
      {
        name: "English Language Instruction",
        desc: "Personalized English lessons for individuals or groups, tailored to all proficiency levels.",
      },
      {
        name: "Translation",
        desc: "Professional Spanish–English and English–Spanish translation with literary sensibility and editorial precision.",
      },
      {
        name: "Copy & Style Correction",
        desc: "Editing and proofreading in Spanish and English — from manuscripts to corporate communications.",
      },
      {
        name: "Portfolio Review",
        desc: "Editorial evaluation and feedback on written portfolios, for individuals or groups.",
      },
    ],
  },
};

export default function Contact() {
  useFadeIn();
  const { lang } = useLang();
  const t = copy[lang];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-parchment dark:bg-night min-h-screen">
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-24 md:pt-32 md:pb-32 text-center">
        <p className="fade-in font-body text-[10px] tracking-[0.45em] uppercase text-ink-lighter dark:text-night-muted mb-6">
          {t.label}
        </p>

        <h1 className="fade-in font-headline text-5xl md:text-7xl lg:text-8xl font-normal text-ink dark:text-night-paper leading-[0.85] tracking-tight mb-16">
          {t.title}
        </h1>

        <div className="fade-in w-12 h-px bg-rule dark:bg-rule-dark mx-auto mb-16" />

        <p className="fade-in font-body text-[13px] md:text-sm leading-[2] text-ink-light dark:text-night-muted max-w-md mx-auto mb-16">
          {t.body}
        </p>

        <div className="fade-in mb-16">
          <a
            href="mailto:lularomo@gmail.com"
            className="font-headline text-2xl md:text-3xl text-ink dark:text-night-paper no-underline hover:opacity-70 transition-opacity border-b border-rule dark:border-rule-dark pb-2"
          >
            lularomo@gmail.com
          </a>
        </div>

        <div className="fade-in w-full h-px bg-rule dark:bg-rule-dark mb-16" />

        <div className="fade-in">
          <p className="font-body text-[10px] tracking-[0.35em] uppercase text-ink-lighter dark:text-night-muted mb-8">
            {t.also}
          </p>
          <div className="flex items-center justify-center gap-10">
            <a
              href="#"
              className="font-body text-[11px] tracking-[0.2em] uppercase text-ink-lighter dark:text-night-muted no-underline hover:text-ink dark:hover:text-night-paper transition-colors border-b border-transparent hover:border-ink dark:hover:border-night-paper pb-1"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="font-body text-[11px] tracking-[0.2em] uppercase text-ink-lighter dark:text-night-muted no-underline hover:text-ink dark:hover:text-night-paper transition-colors border-b border-transparent hover:border-ink dark:hover:border-night-paper pb-1"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Services */}
        <div className="fade-in w-full h-px bg-rule dark:bg-rule-dark mt-16 mb-16" />

        <div className="fade-in">
          <h2 className="font-headline text-3xl md:text-4xl font-normal text-ink dark:text-night-paper tracking-tight mb-4">
            {t.servicesTitle}
          </h2>
          <div className="w-12 h-px bg-rule dark:bg-rule-dark mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-10 text-left max-w-2xl mx-auto">
            {t.services.map(({ name, desc }) => (
              <div key={name}>
                <h3 className="font-display text-lg font-semibold text-ink dark:text-night-paper mb-2 tracking-wide">
                  {name}
                </h3>
                <p className="font-body text-[12px] leading-[1.9] text-ink-light dark:text-night-muted">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
