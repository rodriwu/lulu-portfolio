import { useEffect } from "react";
import useFadeIn from "../hooks/useFadeIn";
import { useLang } from "../context/LanguageContext";

const copy = {
  es: {
    label: "Sobre Mí",
    greeting: "Soy Lula",
    bio: [
      "Soy periodista de formación y escritora de vocación. Egresada de la prestigiosa Escuela de Periodismo Carlos Septién García, una de las instituciones más reconocidas de México en la formación de comunicadores, forjé mi carrera en el exigente mundo del periodismo editorial impreso.",
      "Durante años, mi pluma se especializó en periodismo de viajes y hospitalidad de lujo, colaborando con publicaciones editoriales donde mis reportajes bilingües — redactados con igual maestría en español e inglés — recorrieron los destinos más exclusivos del mundo. Desde los palacios flotantes de Udaipur hasta la majestuosidad del Burj Al Arab en Dubai; desde las playas de Barbados hasta las calles coloniales de Puebla, mi trabajo capturó la esencia de cada lugar con una prosa literaria, sobria y evocadora.",
      "Completamente bilingüe, he ejercido también como profesora de inglés y español, una faceta que refleja mi profundo amor por los idiomas y mi habilidad para adaptar mis propias obras de un idioma al otro sin perder el tono, la cadencia ni la intención original del texto. Mis artículos no son traducciones: son adaptaciones literarias donde cada versión está pensada para resonar con su audiencia respectiva.",
      "Después de algunos años alejada del mundo editorial, regreso ahora al ámbito de la escritura para presentarme en el espacio digital — un terreno nuevo para una periodista de formación tradicional, pero un paso natural para quien entiende que las historias bien contadas trascienden cualquier formato.",
    ],
    education: "Formación",
    educationVal: "Escuela de Periodismo Carlos Septién García\nPeriodismo",
    languages: "Idiomas",
    languagesVal: "Español — Lengua Materna\nInglés — Completamente Bilingüe",
    specialization: "Especialización",
    specializationVal: "Periodismo de Viajes y Hospitalidad de Lujo\nRedacción Editorial Bilingüe",
    teaching: "Docencia",
    teachingVal: "Profesora de Inglés y Español\nAdaptación Literaria",
    credentialsTitle: "Trayectoria",
  },
  en: {
    label: "About Me",
    greeting: "I'm Lula",
    bio: [
      "I am a journalist by training and a writer by vocation. A graduate of the prestigious Escuela de Periodismo Carlos Septién García, one of Mexico's most distinguished institutions for the formation of communicators, I built my career in the demanding world of print editorial journalism.",
      "For years, my pen specialized in luxury travel and hospitality journalism, contributing to editorial publications where my bilingual features — written with equal mastery in Spanish and English — traversed the most exclusive destinations on earth. From the floating palaces of Udaipur to the majesty of the Burj Al Arab in Dubai; from the beaches of Barbados to the colonial streets of Puebla, my work captured the essence of each place with literary, sober, and evocative prose.",
      "Fully bilingual, I have also served as an English and Spanish teacher — a facet that reflects my deep love for languages and my ability to adapt my own works from one language to the other without losing the tone, cadence, or original intent of the text. My articles are not translations: they are literary adaptations where each version is designed to resonate with its respective audience.",
      "After a few years away from the editorial world, I now return to the realm of writing to introduce myself to the digital space — new territory for a traditionally trained journalist, but a natural step for someone who understands that well-told stories transcend any format.",
    ],
    education: "Education",
    educationVal: "Escuela de Periodismo Carlos Septién García\nJournalism",
    languages: "Languages",
    languagesVal: "Spanish — Native\nEnglish — Fully Bilingual",
    specialization: "Specialization",
    specializationVal: "Luxury Travel & Hospitality Journalism\nBilingual Editorial Writing",
    teaching: "Teaching",
    teachingVal: "English & Spanish Language Instructor\nLiterary Adaptation",
    credentialsTitle: "Credentials",
  },
};

export default function About() {
  useFadeIn();
  const { lang } = useLang();
  const t = copy[lang];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const credentials = [
    { label: t.education, value: t.educationVal },
    { label: t.languages, value: t.languagesVal },
    { label: t.specialization, value: t.specializationVal },
    { label: t.teaching, value: t.teachingVal },
  ];

  return (
    <main className="bg-parchment dark:bg-night min-h-screen">
      <section className="relative max-w-4xl mx-auto px-6 pt-20 pb-24 md:pt-32 md:pb-32 overflow-hidden">
        {/* Portrait — desktop: left side, 30vw */}
        <div className="hidden md:block fade-in absolute left-6 lg:left-10 top-24 lg:top-20 z-0 pointer-events-none">
          <div className="w-[320px] lg:w-[360px] h-[415px] lg:h-[468px] border-[3px] border-ink/10 dark:border-night-paper/10 shadow-[0_8px_24px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_24px_rgba(255,255,255,0.04)] overflow-hidden pointer-events-auto hover:scale-105 transition-transform duration-300">
            <img
              src="/portrait-about.png"
              alt="Lula Romo"
              className="w-full h-full object-cover grayscale dark:grayscale-0"
            />
          </div>
        </div>

        {/* Portrait — mobile: centered */}
        <div className="fade-in md:hidden mb-8 flex justify-center">
          <div className="w-[220px] h-[286px] border-[3px] border-ink/10 dark:border-night-paper/10 overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src="/portrait-about.png"
              alt="Lula Romo"
              className="w-full h-full object-cover grayscale dark:grayscale-0"
            />
          </div>
        </div>

        {/* Text — left-aligned, pushed right with generous gap from portrait */}
        <div className="relative z-10 text-center md:text-left md:ml-[400px] lg:ml-[460px]">
          <div className="fade-in mb-4">
            <h1 className="font-headline text-6xl md:text-8xl lg:text-[10rem] font-normal text-ink dark:text-night-paper leading-[0.85] tracking-tight">
              {t.greeting}
            </h1>
          </div>

          <p className="fade-in font-body text-[10px] tracking-[0.45em] uppercase text-ink-lighter dark:text-night-muted mb-3">
            {t.label}
          </p>

          <p className="fade-in font-display text-sm text-ink-lighter dark:text-night-muted italic mb-14">
            Maria de Lourdes Romo López
          </p>

          <div className="fade-in w-12 h-px bg-rule dark:bg-rule-dark mx-auto md:mx-0 mb-14" />
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-24 md:pb-32 -mt-8">

        {/* Bio paragraphs */}
        <div className="fade-in mb-16">
          <div className="font-body text-[13px] md:text-sm leading-[2] text-ink-light dark:text-night-muted space-y-5">
            {t.bio.map((p, i) => (
              <p key={i} className={i === 0 ? "drop-cap" : ""}>
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="fade-in w-full h-px bg-rule dark:bg-rule-dark mb-16" />

        {/* Credentials */}
        <div className="fade-in">
          <h2 className="font-headline text-3xl md:text-4xl font-normal text-ink dark:text-night-paper mb-10 text-center tracking-tight">
            {t.credentialsTitle}
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {credentials.map(({ label, value }) => (
              <div key={label} className="text-center md:text-left">
                <h3 className="font-display text-base font-semibold text-ink dark:text-night-paper mb-2 tracking-wide">
                  {label}
                </h3>
                <p className="font-body text-[12px] leading-relaxed text-ink-light dark:text-night-muted whitespace-pre-line">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
