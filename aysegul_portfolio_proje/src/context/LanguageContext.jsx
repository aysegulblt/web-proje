import { createContext, useContext, useEffect, useState } from "react";
import tr from "../data/locales/tr.json";
import en from "../data/locales/en.json";

const LanguageContext = createContext();

const languages = {
  tr,
  en,
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("tr");

  useEffect(() => {
    const storedLang = localStorage.getItem("language");
    if (storedLang && languages[storedLang]) {
      setLang(storedLang);
    }
  }, []);

  const changeLanguage = (newLang) => {
    if (!languages[newLang]) return;
    setLang(newLang);
    localStorage.setItem("language", newLang);
  };

  const t = (key) => {
    const keys = key.split(".");
    let value = languages[lang];

    for (let k of keys) {
      value = value?.[k];
      if (!value) return key;
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
