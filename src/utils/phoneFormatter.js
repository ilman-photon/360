import { Regex } from "./regex";

export function formatPhoneNumber(phoneNumberString) {
  let cleaned = ("" + phoneNumberString).replace(/\D/g, "");
  const match = cleaned.match(Regex.isValidPhoneFormat);
  if (match) {
    return "(" + match[1] + ") " + match[2] + "-" + match[3];
  }
  return null;
}
