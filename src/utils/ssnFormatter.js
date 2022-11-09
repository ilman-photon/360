export function formatSocialSecurity(val) {
  // val = val.replace(/\D/g, "");
  // val = val.replace(/^(\d{3})/, "***-");
  // val = val.replace(/-(\d{3})/, "-***-");
  // val = val.replace(/(\d)-(\d{4}).*/, "$1-$2");
  // return val || "-";
  if (val) {
    const splitted = val.split("*****");
    const numberSplitted = splitted[splitted.length - 1].split("");
    numberSplitted.shift();
    return `***-***-${splitted[splitted.length - 1]}`;
  }
  return "-";
}
