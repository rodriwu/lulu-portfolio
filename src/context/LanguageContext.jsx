import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    return localStorage.getItem("lang") || null;
  });

  const [remembered, setRemembered] = useState(() => {
    return localStorage.getItem("lang-remember") === "true";
  });

  function setLang(newLang, remember = remembered) {
    setLangState(newLang);
    if (remember) {
      localStorage.setItem("lang", newLang);
      localStorage.setItem("lang-remember", "true");
      setRemembered(true);
    } else {
      localStorage.removeItem("lang");
      localStorage.removeItem("lang-remember");
      setRemembered(false);
    }
  }

  function chooseLang(newLang, remember) {
    setRemembered(remember);
    if (remember) {
      localStorage.setItem("lang", newLang);
      localStorage.setItem("lang-remember", "true");
    }
    setLangState(newLang);
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, chooseLang, remembered }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
