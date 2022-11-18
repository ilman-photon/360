import { formatPhoneNumber } from "./phoneFormatter";

export const maskingPhone = (val) => {
  val = formatPhoneNumber(val);
  val = val.replace(" ", "");
  let char = "";
  for (let i = 0; i < val.length; i++) {
    const isShowNumber = i == 1 || i == val.length - 1 || i == val.length - 2;
    const isShowSparator = val[i] == "(" || val[i] == ")" || val[i] == "-";
    if (isShowNumber || isShowSparator) {
      char += val[i];
    } else {
      char += "*";
    }
  }
  return char;
};

export const maskingEmail = (val) => {
  const splitedValue = val.split("@");
  const username = splitedValue[0];
  let maskedUsername = "";
  for (let i = 0; i < username.length; i++) {
    if (i === 0) {
      maskedUsername += val[i];
    } else {
      maskedUsername += "*";
    }
  }
  return `${maskedUsername}@${splitedValue[1]}`;
};
