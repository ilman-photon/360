export function formatDate(payload) {
  if (!payload) {
    return "-";
  }
  const date = new Date(payload);
  return date
    .toLocaleString("en-US", {
      weekday: "long", // long, short, narrow
      day: "numeric", // numeric, 2-digit
      year: "numeric", // numeric, 2-digit
      month: "long", // numeric, 2-digit, long, short, narrow
      hour: "numeric", // numeric, 2-digit
      minute: "numeric", // numeric, 2-digit
      second: "numeric", // numeric, 2-digit
    })
    .replace(/at/, "-");
}