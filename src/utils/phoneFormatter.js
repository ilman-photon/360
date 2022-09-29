import { Regex } from "./regex";

export function formatPhoneNumber(
  phoneNumberString,
  isMasked = false,
  setPassword = false
) {
  const cleaned = ("" + phoneNumberString).replace(/\D/g, "");
  const match = cleaned.match(Regex.isTenDigitPhone);

  if (match) {
    let first = match[1];
    let middle = match[2];
    let last = match[3];
    if (isMasked && Regex.REGEX_PHONE_NUMBER_ONLY.test(cleaned)) {
      if (setPassword) {
        middle = `**${middle.charAt(middle.length - 1)}`;
        last = `***${last.charAt(last.length - 2)}${last.charAt(
          last.length - 1
        )}`;
      } else {
        first = `${first.charAt(0)}**`;
        middle = `***`;
        last = `***${last.charAt(last.length - 2)}${last.charAt(
          last.length - 1
        )}`;
      }
    }
    return "(" + first + ") " + middle + "-" + last;
  }
  return phoneNumberString;
}
