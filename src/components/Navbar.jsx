import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useLang } from "../context/LanguageContext";

const labels = {
  es: {
    home: "Inicio",
    about: "Sobre Mí",
    portfolio: "Portafolio",
    contact: "Contacto",
  },
  en: {
    home: "Home",
    about: "About",
    portfolio: "Portfolio",
    contact: "Contact",
  },
};

export default function Navbar({ dark, setDark }) {
  const { pathname } = useLocation();
  const { lang, setLang, remembered } = useLang();
  const t = labels[lang] || labels.en;

  const links = [
    { to: "/", label: t.home },
    { to: "/about", label: t.about },
    { to: "/portfolio", label: t.portfolio },
    { to: "/contact", label: t.contact },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-rule dark:border-rule-dark bg-parchment/90 dark:bg-night/90 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link
          to="/"
          className="font-headline text-xl md:text-2xl font-normal tracking-wider text-ink dark:text-night-paper no-underline hover:opacity-70 transition-opacity"
        >
          <span className="hidden md:inline">Lula Romo</span>
          <span className="md:hidden">L.R.</span>
        </Link>

        <div className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-7 list-none m-0 p-0">
            {links.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`font-body text-[11px] tracking-[0.25em] uppercase no-underline transition-colors ${
                    pathname === to
                      ? "text-ink dark:text-night-paper"
                      : "text-ink-lighter dark:text-night-muted hover:text-ink dark:hover:text-night-paper"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Language toggle */}
          <div className="flex items-center border border-rule dark:border-rule-dark">
            <button
              onClick={() => setLang("es", remembered)}
              className={`font-body text-[10px] tracking-widest uppercase px-2.5 py-1.5 border-none cursor-pointer transition-colors ${
                lang === "es"
                  ? "bg-ink text-parchment dark:bg-night-paper dark:text-night"
                  : "bg-transparent text-ink-lighter dark:text-night-muted hover:text-ink dark:hover:text-night-paper"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLang("en", remembered)}
              className={`font-body text-[10px] tracking-widest uppercase px-2.5 py-1.5 border-none cursor-pointer transition-colors ${
                lang === "en"
                  ? "bg-ink text-parchment dark:bg-night-paper dark:text-night"
                  : "bg-transparent text-ink-lighter dark:text-night-muted hover:text-ink dark:hover:text-night-paper"
              }`}
            >
              EN
            </button>
          </div>

          {/* Dark/Light toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-rule dark:border-rule-dark text-ink-lighter dark:text-night-muted hover:text-ink dark:hover:text-night-paper hover:border-ink dark:hover:border-night-muted transition-colors bg-transparent cursor-pointer"
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {dark ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Mobile menu */}
          <MobileMenu links={links} pathname={pathname} />
        </div>
      </div>
    </nav>
  );
}

function MobileMenu({ links, pathname }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    function handleClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="md:hidden relative" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="w-9 h-9 flex items-center justify-center text-ink dark:text-night-paper bg-transparent border-none cursor-pointer"
        aria-label="Menu"
      >
        {open ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>
      {open && (
        <div className="absolute right-0 top-12 bg-parchment dark:bg-night border border-rule dark:border-rule-dark py-3 px-6 min-w-[160px] z-50">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={`block py-2 font-body text-[11px] tracking-[0.25em] uppercase no-underline ${
                pathname === to
                  ? "text-ink dark:text-night-paper"
                  : "text-ink-lighter dark:text-night-muted"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
