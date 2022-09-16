import moment from "moment";
import "moment-timezone";

export function convertToDate(date) {
  if (!date) {
    return "";
  }

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${monthNames[monthIndex]} ${day}, ${year}`;
}

export function formatDate(payload, withTimezone) {
  if (!payload) {
    return "-";
  }
  const date = new Date(payload);
  return date.toLocaleString("en-US", {
    weekday: "long", // long, short, narrow
    day: "numeric", // numeric, 2-digit
    year: "numeric", // numeric, 2-digit
    month: "long", // numeric, 2-digit, long, short, narrow
    hour: "numeric", // numeric, 2-digit
    minute: "numeric", // numeric, 2-digit
    second: "numeric", // numeric, 2-digit
    timeZone: withTimezone ? "UTC" : null,
  });
}

export function formatAppointmentDate(date) {
  if (!date) return "-";
  const momentDate = new moment(date);
  return (
    momentDate
      // TODO: Not used for now
      // .tz("America/New_York")
      .format("dddd, MMM DD, YYYY [at] h:mm")
  );
}

export function ddmmyyDateFormat(date) {
  const momentDate = new moment(date);
  return momentDate.format("DD/MM/YYYY");
}

export function mmddyyDateFormat(date) {
  const momentDate = new moment(date);
  return momentDate.format("MM/DD/YYYY");
}

export function fullDateFormat(date) {
  const timezone = date.substring(date.length - 3);
  const momentDate = new moment(date);
  const time = momentDate.format("h:mm a");
  const formatedDateTime = momentDate.format("ddd, MMM DD, YYYY");
  return `${time} ${timezone}, ${formatedDateTime}`;
}

export const convertTime12to24 = (time12h) => {
  const [time, modifier] = time12h.split(" ");

  let [hours, minutes] = time.split(":");

  if (hours === "12") {
    hours = "00";
  }

  if (modifier === "PM") {
    hours = parseInt(hours, 10) + 12;
  }

  return `${hours}:${minutes}:00`;
};

export const upcomingAppointmentDate = (data) => {
  const date = new Date(data);
  if (!date) return "-";
  const momentDate = new moment(date);
  return momentDate.tz("America/New_York").format("dddd, MMM DD - h:mmA z");
};
