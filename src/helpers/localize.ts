import * as RNLocalize from "react-native-localize";

function getUserDeviceLanguage() {
  const locales = RNLocalize.getLocales();

  if (Array.isArray(locales)) {
    return locales[0].languageCode;
  }
}
function getUserTimeZone() {
  return RNLocalize.getTimeZone();
}

function getUserCalendarFormat() {
  return RNLocalize.getCalendar();
}

export { getUserDeviceLanguage, getUserTimeZone, getUserCalendarFormat };
