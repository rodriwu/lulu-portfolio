import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import useFadeIn from "../hooks/useFadeIn";
import { useLang } from "../context/LanguageContext";
import articles from "../data/articles";
import printImages from "../data/printImages";

const copy = {
  es: {
    back: "Portafolio",
    by: "por",
    notFound: "Artículo no encontrado",
    backLink: "Volver al portafolio",
    fromTheArchive: "Del Archivo Editorial",
    originalPrint: "Publicación Original Impresa",
    printLabel: "Texto original tal como fue publicado en la edición impresa.",
    outro: "Reflexión",
    printPreview: "Edición Impresa Original",
    printPreviewSub: "Páginas escaneadas de la publicación original en revista.",
    continueReading: "Continuar Leyendo",
  },
  en: {
    back: "Portfolio",
    by: "by",
    notFound: "Article Not Found",
    backLink: "Back to portfolio",
    fromTheArchive: "From the Editorial Archive",
    originalPrint: "Original Print Publication",
    printLabel: "Original text as it appeared in the print edition.",
    outro: "Reflection",
    printPreview: "Original Print Edition",
    printPreviewSub: "Scanned pages from the original magazine publication.",
    continueReading: "Continue Reading",
  },
};

export default function Article() {
  const { id } = useParams();
  const article = articles.find((a) => a.id === id);
  const { lang } = useLang();
  const t = copy[lang];

  useFadeIn();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <main className="bg-parchment dark:bg-night min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-headline text-4xl text-ink dark:text-night-paper mb-4">
            {t.notFound}
          </h1>
          <Link
            to="/portfolio"
            className="font-body text-[12px] text-ink-lighter dark:text-night-muted underline"
          >
            {t.backLink}
          </Link>
        </div>
      </main>
    );
  }

  const title = lang === "es" ? article.titleEs : article.titleEn;
  const intro = lang === "es" ? article.introEs : article.introEn;
  const excerpt = lang === "es" ? article.excerptEs : article.excerptEn;
  const body = lang === "es" ? article.bodyEs : article.bodyEn;
  const outro = lang === "es" ? article.outroEs : article.outroEn;
  const images = printImages[article.id] || [];

  // Next article for the transition CTA
  const idx = articles.findIndex((a) => a.id === id);
  const next = idx < articles.length - 1 ? articles[idx + 1] : articles[0];
  const nextTitle = lang === "es" ? next.titleEs : next.titleEn;

  return (
    <main className="bg-parchment dark:bg-night min-h-screen">
      <article className="max-w-2xl mx-auto px-6 pt-16 pb-24 md:pt-28 md:pb-32">
        {/* Back */}
        <Link
          to="/portfolio"
          className="fade-in font-body text-[10px] tracking-[0.25em] uppercase text-ink-lighter dark:text-night-muted no-underline hover:text-ink dark:hover:text-night-paper transition-colors"
        >
          &larr; {t.back}
        </Link>

        {/* Header */}
        <header className="mt-14 mb-14 text-center">
          <p className="fade-in font-body text-[10px] tracking-[0.45em] uppercase text-ink-lighter dark:text-night-muted mb-5">
            {article.location}
          </p>

          <h1 className="fade-in font-headline text-4xl md:text-6xl lg:text-7xl font-normal text-ink dark:text-night-paper leading-[0.88] tracking-tight mb-4">
            {title}
          </h1>

          <p className="fade-in font-display text-lg md:text-xl italic text-ink-lighter dark:text-night-muted mb-2">
            {article.subtitle}
          </p>

          <p className="fade-in font-body text-[10px] tracking-[0.3em] uppercase text-ink-lighter dark:text-night-muted mt-8">
            {t.by} Lula Romo
          </p>
        </header>

        <div className="fade-in w-12 h-px bg-rule dark:bg-rule-dark mx-auto mb-14" />

        {/* ═══════════════════════════════════════════ */}
        {/* THE INTRO — Personal framing for the reader */}
        {/* ═══════════════════════════════════════════ */}
        <section className="fade-in mb-14">
          <p className="font-body text-[13px] md:text-sm leading-[2] text-ink-light dark:text-night-muted italic">
            {intro}
          </p>
        </section>

        {/* ═══════════════════════════════════════════════ */}
        {/* THE EDITORIAL TEXT — Distinct visual container  */}
        {/* Signals the shift from web voice to print voice */}
        {/* ═══════════════════════════════════════════════ */}
        <section className="fade-in mb-14">
          {/* Label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-rule dark:bg-rule-dark" />
            <span className="font-body text-[9px] tracking-[0.4em] uppercase text-ink-lighter dark:text-night-muted">
              {t.originalPrint}
            </span>
            <div className="h-px flex-1 bg-rule dark:bg-rule-dark" />
          </div>

          {/* The editorial container */}
          <div className="border-l-2 border-ink/20 dark:border-night-paper/20 bg-ink/[0.015] dark:bg-night-paper/[0.03] px-6 md:px-8 py-8">
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-ink-lighter dark:text-night-muted mb-6">
              {t.printLabel}
            </p>

            {/* Excerpt with drop cap */}
            <div className="font-body text-sm md:text-base leading-[2] text-ink-light dark:text-night-muted mb-8 drop-cap">
              <p>{excerpt}</p>
            </div>

            {/* Body paragraphs */}
            <div className="font-body text-[13px] leading-[2] text-ink-light dark:text-night-muted space-y-6">
              {body.split("\n\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════ */}
        {/* THE OUTRO — Closing reflection               */}
        {/* ═══════════════════════════════════════════ */}
        <section className="fade-in mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-rule dark:bg-rule-dark" />
            <span className="font-body text-[9px] tracking-[0.4em] uppercase text-ink-lighter dark:text-night-muted">
              {t.outro}
            </span>
            <div className="h-px flex-1 bg-rule dark:bg-rule-dark" />
          </div>

          <p className="font-display text-lg md:text-xl leading-[1.8] text-ink dark:text-night-paper text-center italic">
            {outro}
          </p>
        </section>

        {/* ═══════════════════════════════════════════ */}
        {/* PRINT PREVIEW — Scanned magazine pages      */}
        {/* ═══════════════════════════════════════════ */}
        {images.length > 0 && (
          <section className="fade-in mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px flex-1 bg-rule dark:bg-rule-dark" />
              <span className="font-body text-[9px] tracking-[0.4em] uppercase text-ink-lighter dark:text-night-muted">
                {t.printPreview}
              </span>
              <div className="h-px flex-1 bg-rule dark:bg-rule-dark" />
            </div>

            <p className="font-body text-[11px] text-ink-lighter dark:text-night-muted text-center mb-8">
              {t.printPreviewSub}
            </p>

            <div className="grid grid-cols-2 gap-3">
              {images.map((src, i) => (
                <div
                  key={i}
                  className="border border-rule dark:border-rule-dark overflow-hidden"
                >
                  <img
                    src={src}
                    alt={`${article.subtitle} — page ${i + 1}`}
                    className="w-full h-auto block"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ═══════════════════════════════════════════ */}
        {/* TRANSITION — Next article CTA               */}
        {/* ═══════════════════════════════════════════ */}
        <div className="w-full h-px bg-rule dark:bg-rule-dark mb-12" />

        <div className="fade-in text-center">
          <p className="font-body text-[9px] tracking-[0.4em] uppercase text-ink-lighter dark:text-night-muted mb-4">
            {t.continueReading}
          </p>

          <Link
            to={`/portfolio/${next.id}`}
            className="group inline-block no-underline"
          >
            <h3 className="font-headline text-2xl md:text-4xl font-normal text-ink dark:text-night-paper tracking-tight group-hover:opacity-60 transition-opacity mb-2">
              {nextTitle}
            </h3>
            <p className="font-display text-sm italic text-ink-lighter dark:text-night-muted">
              {next.subtitle} &mdash; {next.location}
            </p>
          </Link>
        </div>
      </article>
    </main>
  );
}
