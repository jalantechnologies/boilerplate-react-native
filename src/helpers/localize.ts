import * as RNLocalize from "react-native-localize";

const getUserDeviceLanguage = () => {
  const locales = RNLocalize.getLocales();
  if (Array.isArray(locales)) {
    return locales[0].languageCode;
  }
};
const getUserTimeZone = () => {
  return RNLocalize.getTimeZone();
};

const getUserCalendarFormat = () => {
  return RNLocalize.getCalendar();
};

export { getUserDeviceLanguage, getUserTimeZone, getUserCalendarFormat };
