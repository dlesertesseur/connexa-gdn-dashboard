import i18n from "i18next";
import translationES from "./locales/es/translation.json";
import { initReactI18next } from "react-i18next";

const resources = {
  // en: {
  //   translation: translationEN,
  // },
  es: {
    translation: translationES,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "es",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
