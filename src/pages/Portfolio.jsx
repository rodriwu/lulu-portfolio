import { Link } from "react-router-dom";
import { useEffect } from "react";
import useFadeIn from "../hooks/useFadeIn";
import { useLang } from "../context/LanguageContext";
import articles from "../data/articles";

const copy = {
  es: {
    label: "Portafolio",
    title: "Obras Publicadas",
    hotels: "Hoteles y Hospitalidad",
    travel: "Viajes y Destinos",
  },
  en: {
    label: "Portfolio",
    title: "Published Works",
    hotels: "Hotels & Hospitality",
    travel: "Travel & Destinations",
  },
};

export default function Portfolio() {
  useFadeIn();
  const { lang } = useLang();
  const t = copy[lang];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const hotels = articles.filter((a) => a.category === "hotel");
  const travel = articles.filter((a) => a.category === "travel");

  return (
    <main className="bg-parchment dark:bg-night min-h-screen">
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-24 md:pt-32 md:pb-32">
        <p className="fade-in font-body text-[10px] tracking-[0.45em] uppercase text-ink-lighter dark:text-night-muted mb-6 text-center">
          {t.label}
        </p>

        <h1 className="fade-in font-headline text-5xl md:text-7xl lg:text-8xl font-normal text-ink dark:text-night-paper text-center leading-[0.85] tracking-tight mb-20">
          {t.title}
        </h1>

        {/* Hotels */}
        <div className="fade-in mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-rule dark:bg-rule-dark" />
            <h2 className="font-display text-lg md:text-xl font-normal text-ink dark:text-night-paper whitespace-nowrap tracking-wide">
              {t.hotels}
            </h2>
            <div className="h-px flex-1 bg-rule dark:bg-rule-dark" />
          </div>

          <div className="stagger">
            {hotels.map((article, i) => (
              <ArticleRow key={article.id} article={article} index={i} lang={lang} />
            ))}
          </div>
        </div>

        {/* Travel */}
        {travel.length > 0 && (
          <div className="fade-in">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px flex-1 bg-rule dark:bg-rule-dark" />
              <h2 className="font-display text-lg md:text-xl font-normal text-ink dark:text-night-paper whitespace-nowrap tracking-wide">
                {t.travel}
              </h2>
              <div className="h-px flex-1 bg-rule dark:bg-rule-dark" />
            </div>

            <div className="stagger">
              {travel.map((article, i) => (
                <ArticleRow key={article.id} article={article} index={i} lang={lang} />
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

function ArticleRow({ article, index, lang }) {
  const title = lang === "es" ? article.titleEs : article.titleEn;
  const altTitle = lang === "es" ? article.titleEn : article.titleEs;

  return (
    <Link
      to={`/portfolio/${article.id}`}
      className="fade-in group block border-b border-rule dark:border-rule-dark py-5 no-underline transition-colors hover:bg-ink/[0.02] dark:hover:bg-night-paper/[0.03] px-4 -mx-4"
    >
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-6">
        <div className="flex items-baseline gap-4 min-w-0">
          <span className="font-display text-lg text-ink-lighter dark:text-night-muted font-light shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="min-w-0">
            <h3 className="font-display text-lg md:text-xl font-normal text-ink dark:text-night-paper group-hover:opacity-70 transition-opacity">
              {title}
            </h3>
            <p className="font-body text-[12px] text-ink-lighter dark:text-night-muted italic mt-0.5">
              {altTitle}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 ml-9 md:ml-0 shrink-0">
          <span className="font-body text-[10px] tracking-wider text-ink-lighter dark:text-night-muted uppercase">
            {article.location}
          </span>
          <span className="font-body text-[9px] tracking-wider text-ink-lighter dark:text-night-muted border border-rule dark:border-rule-dark px-2 py-0.5 uppercase">
            {article.languages.join(" / ")}
          </span>
        </div>
      </div>

      <p className="font-body text-[12px] text-ink-lighter dark:text-night-muted mt-1.5 ml-9">
        {article.subtitle}
      </p>
    </Link>
  );
}
