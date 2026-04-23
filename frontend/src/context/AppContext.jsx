import React, { createContext, useContext, useEffect, useState } from "react";
import { translations } from "../mock";

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return localStorage.getItem("cv-theme") || "dark";
  });
  const [lang, setLang] = useState(() => {
    if (typeof window === "undefined") return "en";
    return localStorage.getItem("cv-lang") || "en";
  });
  const [focusMode, setFocusMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.setAttribute("data-theme", "dark");
    } else {
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light");
    }
    localStorage.setItem("cv-theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("cv-lang", lang);
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  const toggleTheme = () => setTheme((p) => (p === "dark" ? "light" : "dark"));
  const toggleFocus = () => setFocusMode((p) => !p);

  const t = translations[lang] || translations.en;

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
        lang,
        setLang,
        focusMode,
        toggleFocus,
        t,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
};
