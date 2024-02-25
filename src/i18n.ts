import { createI18n } from "vue-i18n"
import en from "./locales/en.json"
import fr from "./locales/fr.json"

function loadLocaleMessages() {
  const locales = [{ en: en }, { fr: fr }]
  const messages = {}
  locales.forEach((lang) => {
    const key = Object.keys(lang)
    messages[key] = lang[key]
  })
  return messages
}

export default createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: loadLocaleMessages(),
})
