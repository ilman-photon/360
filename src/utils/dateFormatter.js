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

export function formatAppointmentDate(date, tzone) {
  if (!date) {
    return "-";
  } else {
    const momentDate = new moment(date).format(
      "dddd, MMM DD, YYYY, [AT] h:mm A"
    );
    const timezone = tzone
      ? new moment.tz(tzone).format("z")
      : new moment.tz(moment.tz.guess()).format("z");
    return `${momentDate} ${timezone}`;
  }
}

export function formatAppointmentDateWithoutTime(date) {
  if (!date) {
    return "-";
  } else {
    const momentDate = new moment(date);
    return momentDate.format("dddd, MMM DD, YYYY");
  }
}

export function formatAppointmentTime(date) {
  if (!date) {
    return "-";
  } else {
    const momentDate = new moment(date);
    return momentDate.format("h:mm A");
  }
}

export function formatRescheduleDate(date) {
  if (!date) {
    return "-";
  } else {
    const momentDate = new moment(date);
    return momentDate.format("MM/DD/YYYY, hh:mmA");
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

export function checkPastDate(date) {
  return new Date(date).getDate() < new Date().getDate();
}

export function fullDateFormat(data, tzone) {
  if (!data) {
    return "-";
  } else {
    const momentTime = new moment(data).format("h:mm a");
    const momentDate = new moment(data).format("ddd, MMM D, YYYY");
    const timezone = tzone
      ? new moment.tz(tzone).format("z")
      : new moment.tz(moment.tz.guess()).format("z");
    return `${momentTime} ${timezone}, ${momentDate}`;
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

export const upcomingAppointmentDate = (data, tzone) => {
  if (!data) {
    return "-";
  } else {
    const momentDate = new moment(data).format("dddd, MMM DD - h:mmA");
    const timezone = tzone
      ? new moment.tz(tzone).format("z")
      : new moment.tz(moment.tz.guess()).format("z");

    return `${momentDate} ${timezone}`;
  }
};
