import { useTranslation } from "react-i18next";

// default json
export function Locale(prefix, translation) {
  const config = {};
  if (prefix) {
    config.keyPrefix = prefix;
  }
  return useTranslation("translation", config);
}
// SSR json

export default Locale;
