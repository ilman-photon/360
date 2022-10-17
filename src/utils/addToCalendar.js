import { atcb_action } from "add-to-calendar-button";
import moment from "moment";

export const addToCalendar = (data) => {
  const date = new Date(data.date);
  const momentDateRaw = new moment(date);
  const momentDate = momentDateRaw.tz("America/New_York");
  const startDate = momentDate.format("YYYY-MM-DD");
  const endDate = momentDate.format("YYYY-MM-DD");
  const startTime = momentDate.format("hh:mm");
  const endTime = momentDate.add(1, "hours").format("hh:mm");
  atcb_action({
    startDate,
    endDate,
    startTime,
    endTime,
    name: data.name,
    description: data.description,
    location: data.location,
    options: ["Apple", "Google", "Microsoft365", "Outlook.com", "Yahoo"],
    timeZone: "America/New_York",
    iCalFileName: data.name,
    inline: true,
    trigger: "click",
    background: false,
  });
};
