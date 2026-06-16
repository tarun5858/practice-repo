import { useState, createContext, useContext } from "react";
const LanguageContext = createContext();

const translations = {
  en: { welcome: "Welcome, Friend!", logout: "Log Out" },
  hi: { welcome: "स्वागत है, मित्र!", logout: "लॉग आउट" }
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("hi"); // Default Hindi

  // Current language ke hisab se sahi dictionary choose karna
  const text = translations[lang]; 

  return (
    <LanguageContext.Provider value={{ lang, setLang, text }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);