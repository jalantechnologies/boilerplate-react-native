import I18n from "i18n-js";
import de from "../assets/locales/de";
import en from "../assets/locales/en";
import { getUserDeviceLanguage } from "./localize";
const locales = getUserDeviceLanguage();

if (Array.isArray(locales)) {
  I18n.locale = locales[0].languageTag;
}

I18n.fallbacks = true;
I18n.translations = {
  en,
  de
};

export default I18n;
