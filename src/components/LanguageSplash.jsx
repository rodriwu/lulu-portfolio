import { useState } from "react";
import { useLang } from "../context/LanguageContext";

export default function LanguageSplash() {
  const { chooseLang } = useLang();
  const [remember, setRemember] = useState(false);
  const [exiting, setExiting] = useState(false);

  function handleChoice(lang) {
    setExiting(true);
    // Mark that we just came from splash so Home can play the entrance animation
    sessionStorage.setItem("from-splash", "true");
    setTimeout(() => {
      chooseLang(lang, remember);
    }, 1100);
  }

  const nameLetters = "Lula Romo".split("");

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center ${
        exiting ? "splash-exit" : ""
      }`}
    >
      {/* Background layer (fades separately) */}
      <div className="splash-bg absolute inset-0 bg-parchment dark:bg-night" />

      {/* Portrait — B&W, center, transitions on exit */}
      <div
        className="portrait-transition relative z-10 mb-10 opacity-0"
        style={{ animation: "letterIn 0.8s ease-out 0.2s forwards" }}
      >
        <div className="w-24 h-24 md:w-28 md:h-28 mx-auto border-2 border-ink/20 dark:border-night-paper/20 overflow-hidden">
          <img
            src="/portrait.png"
            alt="Lula Romo"
            className="w-full h-full object-cover grayscale"
          />
        </div>
      </div>

      {/* Everything below is text that fades out together */}
      <div className="splash-text-fade relative z-10 flex flex-col items-center">
        {/* Animated name */}
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-normal text-ink dark:text-night-paper tracking-tight mb-6">
          {nameLetters.map((letter, i) => (
            <span
              key={i}
              className="splash-letter"
              style={{ animationDelay: `${0.4 + i * 0.06}s` }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p
          className="font-display text-lg md:text-xl text-ink-lighter dark:text-night-muted italic tracking-wide mb-16 opacity-0"
          style={{ animation: "letterIn 0.6s ease-out 1.2s forwards" }}
        >
          Writer & Journalist
        </p>

        {/* Divider */}
        <div
          className="w-12 h-px bg-rule dark:bg-rule-dark mb-12 opacity-0"
          style={{ animation: "letterIn 0.5s ease-out 1.5s forwards" }}
        />

        {/* Language prompt */}
        <p
          className="font-body text-xs tracking-[0.4em] uppercase text-ink-lighter dark:text-night-muted mb-8 opacity-0"
          style={{ animation: "letterIn 0.5s ease-out 1.7s forwards" }}
        >
          Choose your language
        </p>

        {/* Language buttons */}
        <div
          className="flex items-center gap-6 mb-10 opacity-0"
          style={{ animation: "letterIn 0.5s ease-out 1.9s forwards" }}
        >
          <button
            onClick={() => handleChoice("es")}
            className="font-headline text-2xl md:text-3xl tracking-wide text-ink dark:text-night-paper bg-transparent border-none cursor-pointer hover:opacity-60 transition-opacity px-6 py-3"
          >
            Español
          </button>

          <span className="text-rule dark:text-rule-dark text-2xl font-light">
            /
          </span>

          <button
            onClick={() => handleChoice("en")}
            className="font-headline text-2xl md:text-3xl tracking-wide text-ink dark:text-night-paper bg-transparent border-none cursor-pointer hover:opacity-60 transition-opacity px-6 py-3"
          >
            English
          </button>
        </div>

        {/* Remember checkbox */}
        <label
          className="flex items-center gap-3 cursor-pointer opacity-0"
          style={{ animation: "letterIn 0.5s ease-out 2.1s forwards" }}
        >
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            className="w-4 h-4 accent-ink dark:accent-night-paper cursor-pointer"
          />
          <span className="font-body text-xs tracking-wider text-ink-lighter dark:text-night-muted">
            Remember my choice
          </span>
        </label>
      </div>
    </div>
  );
}
