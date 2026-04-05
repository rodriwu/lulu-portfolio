import { useEffect } from "react";
import useFadeIn from "../hooks/useFadeIn";
import { useLang } from "../context/LanguageContext";

const copy = {
  es: {
    label: "Sobre la Autora",
    bio: [
      "Maria de Lourdes Romo López — conocida en el mundo editorial como Lula Romo — es periodista de formación y escritora de vocación. Egresada de la prestigiosa Escuela de Periodismo Carlos Septién García, una de las instituciones más reconocidas de México en la formación de comunicadores, Lula forjó su carrera en el exigente mundo del periodismo editorial impreso.",
      "Durante años, su pluma se especializó en periodismo de viajes y hospitalidad de lujo, colaborando con publicaciones editoriales donde sus reportajes bilingües — redactados con igual maestría en español e inglés — recorrieron los destinos más exclusivos del mundo. Desde los palacios flotantes de Udaipur hasta la majestuosidad del Burj Al Arab en Dubai; desde las playas de Barbados hasta las calles coloniales de Puebla, su trabajo capturó la esencia de cada lugar con una prosa literaria, sobria y evocadora.",
      "Completamente bilingüe, Lula ha ejercido también como profesora de inglés y español, una faceta que refleja su profundo amor por los idiomas y su habilidad única para adaptar sus propias obras de un idioma al otro sin perder el tono, la cadencia ni la intención original del texto. Sus artículos no son traducciones: son adaptaciones literarias realizadas por la misma autora, cada una pensada para resonar con su audiencia respectiva.",
      "Después de algunos años alejada del mundo editorial, Lula regresa ahora al ámbito de la escritura para presentarse en el espacio digital — un terreno nuevo para una periodista de formación tradicional, pero un paso natural para quien entiende que las historias bien contadas trascienden cualquier formato.",
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
    label: "About the Author",
    bio: [
      "Maria de Lourdes Romo López — known in the editorial world as Lula Romo — is a journalist by training and a writer by vocation. A graduate of the prestigious Escuela de Periodismo Carlos Septién García, one of Mexico's most distinguished institutions for the formation of communicators, Lula built her career in the demanding world of print editorial journalism.",
      "For years, her pen specialized in luxury travel and hospitality journalism, contributing to editorial publications where her bilingual features — written with equal mastery in Spanish and English — traversed the most exclusive destinations on earth. From the floating palaces of Udaipur to the majesty of the Burj Al Arab in Dubai; from the beaches of Barbados to the colonial streets of Puebla, her work captured the essence of each place with literary, sober, and evocative prose.",
      "Fully bilingual, Lula has also served as an English and Spanish teacher — a facet that reflects her deep love for languages and her unique ability to adapt her own works from one language to the other without losing the tone, cadence, or original intent of the text. Her articles are not translations: they are literary adaptations crafted by the same author, each one designed to resonate with its respective audience.",
      "After a few years away from the editorial world, Lula now returns to the realm of writing to introduce herself to the digital space — new territory for a traditionally trained journalist, but a natural step for someone who understands that well-told stories transcend any format.",
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
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-24 md:pt-32 md:pb-32">
        <p className="fade-in font-body text-[10px] tracking-[0.45em] uppercase text-ink-lighter dark:text-night-muted mb-6 text-center">
          {t.label}
        </p>

        <h1 className="fade-in font-headline text-5xl md:text-8xl lg:text-[9rem] font-normal text-ink dark:text-night-paper text-center leading-[0.85] tracking-tight mb-8">
          Maria de
          <br />
          Lourdes
        </h1>

        {/* Portrait — small, humble */}
        <div className="fade-in flex justify-center mb-6">
          <div className="w-[64px] h-[64px] border-2 border-ink/15 dark:border-night-paper/15">
            <img
              src="/portrait.png"
              alt="Lula Romo"
              className="w-full h-full object-cover grayscale dark:grayscale-0"
            />
          </div>
        </div>

        <p className="fade-in font-display text-xl md:text-2xl italic text-ink-lighter dark:text-night-muted text-center mb-16">
          "Lula Romo"
        </p>

        <div className="fade-in w-12 h-px bg-rule dark:bg-rule-dark mx-auto mb-16" />

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
