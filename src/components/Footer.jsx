import { useLang } from "../context/LanguageContext";

export default function Footer() {
  const { lang } = useLang();

  return (
    <footer className="border-t border-rule dark:border-rule-dark mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-base text-ink-lighter dark:text-night-muted italic">
          {lang === "es"
            ? '"La palabra escrita es el único refugio que no pide permiso."'
            : '"The written word is the only refuge that asks no permission."'}
        </p>
        <p className="font-body text-[10px] tracking-[0.3em] uppercase text-ink-lighter dark:text-night-muted">
          &copy; {new Date().getFullYear()} Lula Romo
        </p>
      </div>
    </footer>
  );
}
