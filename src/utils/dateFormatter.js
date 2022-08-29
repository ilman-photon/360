export function convertToDate(date) {
  //  Convert a "dd/MM/yyyy" string into a Date object
  const text = date.toLocaleString();
  return text.split(",")[0];
}
