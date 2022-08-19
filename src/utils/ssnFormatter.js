export function formatSocialSecurity(val) {
  val = val.replace(/\D/g, "");
  val = val.replace(/^(\d{3})/, "***-");
  val = val.replace(/-(\d{3})/, "-***-");
  val = val.replace(/(\d)-(\d{4}).*/, "$1-$2");
  return val;
}
