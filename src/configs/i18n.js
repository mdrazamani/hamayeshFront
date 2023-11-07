import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

function determineLanguage() {
    const detectedLanguage = process.env.REACT_APP_DEFAULT_LANGUAGE;
    if (
        detectedLanguage.startsWith("fa") &&
        process.env.REACT_APP_DEFAULT_LANGUAGE === "fa"
    ) {
        return "fa";
    }
    return detectedLanguage || "en";
}

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        lng: determineLanguage(),
        fallbackLng: process.env.REACT_APP_DEFAULT_LANGUAGE,
        debug: true,
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: "/locales/{{lng}}/{{ns}}.json",
        },
    });

export default i18n;
