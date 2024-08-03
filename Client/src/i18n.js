// src/i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importar las traducciones
import enTranslations from "./Locales/en/translation.json";
import esTranslations from "./Locales/es/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslations,
    },
    es: {
      translation: esTranslations,
    },
  },
  lng: "en", // Idioma por defecto
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
