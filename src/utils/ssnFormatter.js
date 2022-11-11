export function formatSocialSecurity(val) {
  if (val) {
    const splitted = val.split("*****");
    const numberSplitted = splitted[splitted.length - 1].split("");
    numberSplitted.shift();
    return `***-***-${splitted[splitted.length - 1]}`;
  }
  return "-";
}
