import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useFadeIn from "../hooks/useFadeIn";
import { useLang } from "../context/LanguageContext";
import articles from "../data/articles";

const copy = {
  es: {
    tagline: "Escritora \u00B7 Periodista \u00B7 Autora Bilingüe",
    bio: "Periodista egresada de la Escuela de Periodismo Carlos Septién García. Escritora bilingüe con experiencia en periodismo editorial de viajes y hospitalidad de lujo. Mi pluma ha recorrido el mundo\u00A0— de los palacios flotantes de Udaipur a los rascacielos de Manhattan\u00A0— siempre en dos idiomas, siempre con la misma convicción: que cada lugar merece ser contado con la dignidad de la palabra escrita.",
    cta: "Escríbeme",
    selected: "Obras Selectas",
    viewAll: "Ver Todas las Obras",
  },
  en: {
    tagline: "Writer \u00B7 Journalist \u00B7 Bilingual Author",
    bio: "A journalist trained at the prestigious Escuela de Periodismo Carlos Septién García. A bilingual writer with a career rooted in editorial travel journalism and luxury hospitality. My pen has traveled the world\u00A0— from the floating palaces of Udaipur to the skyscrapers of Manhattan\u00A0— always in two languages, always with the same conviction: that every place deserves to be told with the dignity of the written word.",
    cta: "Get in Touch",
    selected: "Selected Works",
    viewAll: "View All Works",
  },
};

export default function Home() {
  useFadeIn();
  const { lang } = useLang();
  const t = copy[lang];

  // Check if we just came from the splash screen
  const [fromSplash, setFromSplash] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("from-splash") === "true") {
      setFromSplash(true);
      sessionStorage.removeItem("from-splash");
    }
    window.scrollTo(0, 0);
  }, []);

  const featured = articles.slice(0, 5);

  // B&W in light mode, color in dark mode
  const imgFilter = "grayscale dark:grayscale-0";

  return (
    <main className="bg-parchment dark:bg-night min-h-screen">
      {/* Hero */}
      <section className="relative max-w-4xl mx-auto px-6 pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Portrait — desktop: large, absolute, tilted */}
        <div
          className={`hidden md:block absolute -right-8 lg:right-4 top-16 lg:top-12 z-0 pointer-events-none ${
            fromSplash ? "portrait-entrance" : "fade-in"
          }`}
        >
          <div
            className="w-[220px] lg:w-[280px] h-[220px] lg:h-[280px] border-[3px] border-ink/10 dark:border-night-paper/10 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.04)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.03)] overflow-hidden pointer-events-auto hover:scale-105 transition-transform duration-300"
            style={{ transform: fromSplash ? undefined : "rotate(3deg)" }}
          >
            <img
              src="/portrait.png"
              alt="Lula Romo"
              className={`w-full h-full object-cover ${imgFilter}`}
            />
          </div>
        </div>

        {/* Portrait — mobile */}
        <div
          className={`md:hidden mb-12 flex justify-center ${
            fromSplash ? "portrait-entrance-mobile" : "fade-in"
          }`}
        >
          <div
            className="w-[180px] h-[180px] border-[3px] border-ink/10 dark:border-night-paper/10 overflow-hidden hover:scale-105 transition-transform duration-300"
            style={{ transform: fromSplash ? undefined : "rotate(2deg)" }}
          >
            <img
              src="/portrait.png"
              alt="Lula Romo"
              className={`w-full h-full object-cover ${imgFilter}`}
            />
          </div>
        </div>

        {/* Text */}
        <div className="relative z-10 text-left md:max-w-[65%]">
          <p className="fade-in font-body text-[10px] tracking-[0.45em] uppercase text-ink-lighter dark:text-night-muted mb-6">
            {t.tagline}
          </p>

          <h1 className="fade-in font-headline text-7xl md:text-[9rem] lg:text-[11rem] font-normal text-ink dark:text-night-paper leading-[0.85] tracking-tight mb-8">
            Lula
            <br />
            Romo
          </h1>

          <div className="fade-in w-12 h-px bg-rule dark:bg-rule-dark mb-10" />

          <p className="fade-in font-body text-[13px] md:text-sm leading-[1.9] text-ink-light dark:text-night-muted max-w-xl">
            {t.bio}
          </p>

          <div className="fade-in mt-14">
            <Link
              to="/contact"
              className="font-body text-[10px] tracking-[0.35em] uppercase text-ink-lighter dark:text-night-muted no-underline hover:text-ink dark:hover:text-night-paper border-b border-ink-lighter dark:border-night-muted hover:border-ink dark:hover:border-night-paper pb-1 transition-colors"
            >
              {t.cta} &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-rule dark:border-rule-dark" />
      </div>

      {/* Selected Works */}
      <section className="max-w-4xl mx-auto px-6 py-20 md:py-28">
        <h2 className="fade-in font-headline text-4xl md:text-5xl font-normal text-ink dark:text-night-paper text-center tracking-tight mb-16">
          {t.selected}
        </h2>

        <div className="stagger space-y-0">
          {featured.map((article, i) => {
            const title = lang === "es" ? article.titleEs : article.titleEn;
            const altTitle = lang === "es" ? article.titleEn : article.titleEs;
            return (
              <Link
                key={article.id}
                to={`/portfolio/${article.id}`}
                className="fade-in group block border-b border-rule dark:border-rule-dark py-5 no-underline transition-colors hover:bg-ink/[0.02] dark:hover:bg-night-paper/[0.03] px-4 -mx-4"
              >
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-8">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-xl text-ink-lighter dark:text-night-muted font-light">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-xl md:text-2xl font-normal text-ink dark:text-night-paper group-hover:opacity-70 transition-opacity">
                      {title}
                    </h3>
                  </div>
                  <span className="font-body text-[10px] tracking-wider text-ink-lighter dark:text-night-muted uppercase ml-9 md:ml-0">
                    {article.location}
                  </span>
                </div>
                <p className="font-body text-[12px] text-ink-lighter dark:text-night-muted italic mt-1 ml-9">
                  {altTitle} — {article.subtitle}
                </p>
              </Link>
            );
          })}
        </div>

        <div className="fade-in text-center mt-16">
          <Link
            to="/portfolio"
            className="font-body text-[10px] tracking-[0.35em] uppercase text-ink-lighter dark:text-night-muted hover:text-ink dark:hover:text-night-paper no-underline border-b border-ink-lighter dark:border-night-muted hover:border-ink dark:hover:border-night-paper pb-1 transition-colors"
          >
            {t.viewAll} &rarr;
          </Link>
        </div>
      </section>
    </main>
  );
}
