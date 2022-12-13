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
  if (!date) {
    return "-";
  } else {
    const momentDate = new moment(date);
    return momentDate.format("dddd, MMM DD, YYYY, [AT] h:mm A [EST]");
  }
}

function isValidDate(date) {
  return date instanceof Date && !isNaN(date);
}

export function ddmmyyDateFormat(date) {
  if (isValidDate(new Date(date))) {
    const momentDate = new moment(date);
    return momentDate.format("DD/MM/YYYY");
  } else {
    return "-";
  }
}

export function mmddyyDateFormat(date) {
  if (isValidDate(new Date(date))) {
    const momentDate = new moment(date);
    return momentDate.format("MM/DD/YYYY");
  } else {
    return "-";
  }
}

export function yyyymmddDateFormat(date) {
  const momentDate = new moment(date);
  return momentDate.format("YYYY-MM-DD");
}

export function fullDateFormat(data) {
  if (!data) {
    return "-";
  } else {
    const date = new Date(data);
    const momentDate = new moment(date);
    const timezone = moment.tz.guess();
    const dateTimezone = momentDate.tz(timezone);
    return dateTimezone.format("h:mm a z, ddd, MMM D, YYYY");
  }
}

export function hourDateFormat(date) {
  const momentDate = new moment(date);
  return momentDate.format("HH:mm");
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

export function convertTime24to12(time) {
  // Check correct time format and split into components
  time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [
    time,
  ];

  if (time.length > 1) {
    // If time format correct
    time = time.slice(1); // Remove full string match value
    time[5] = +time[0] < 12 ? "am" : "pm"; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
    time[0] = +time[0] < 10 ? `0${time[0]}` : time[0];
  }

  return time.join(""); // return adjusted time or original string
}

export const upcomingAppointmentDate = (data) => {
  if (!data) {
    return "-";
  } else {
    const date = new Date(data);
    const momentDate = new moment(date);
    const timezone = moment.tz.guess();
    const americaTimezone = momentDate.tz(timezone);
    return americaTimezone.format("dddd, MMM DD - h:mmA z");
  }
};
