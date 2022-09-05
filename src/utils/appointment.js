import constants from "./constants";

export function parseSuggestionData(suggestionData) {
  return {
    purposeOfVisit: parsePurposeOfVisit(suggestionData.appointmentType),
    insuranceCarrier: parseInsuranceCarrier(suggestionData.insuranceCarrier),
  };
}

function parsePurposeOfVisit(appointmentData) {
  if (appointmentData && appointmentData.length > 0) {
    const data = [];
    for (const item of appointmentData) {
      const purposeOfVisitItem = {
        id: item.id,
        title: item.name,
        subtitle: item.description,
      };
      data.push(purposeOfVisitItem);
    }
    return data;
  }
  return [];
}

function parseInsuranceCarrier(insuranceCarrierData) {
  if (insuranceCarrierData) {
    const data = [];
    for (const [category, insuranceCarrierList] of Object.entries(
      insuranceCarrierData
    )) {
      for (let i = 0; i < insuranceCarrierList.length; i++) {
        const itemData = {
          id: insuranceCarrierList[i].id,
          name: insuranceCarrierList[i].name,
          category: category !== "general" ? `${category} carriers` : "",
          divider:
            category === "general" && i === insuranceCarrierList.length - 1,
        };
        data.push(itemData);
      }
    }
    return data;
  }
  return [];
}

export function parseScheduleDataWeek(availability) {
  const dayNames = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  let scheduleData = {};

  for (let index = 0; index < availability.length; index++) {
    const day = dayNames[index];
    const schedule = getScheduleData(availability[index]);

    //Add empty field
    if (schedule.length < 4) {
      const limitEmpty = 4 - schedule.length;
      for (let indexEmpty = 0; indexEmpty < limitEmpty; indexEmpty++) {
        schedule.push("");
      }
    }
    scheduleData[day] = schedule;
  }

  return scheduleData;
}

function getScheduleData(availabilityData) {
  const schedule = [];
  let more = 0;
  for (
    let indexList = 0;
    indexList < availabilityData.list.length;
    indexList++
  ) {
    if (indexList >= 3) {
      more++;
      if (indexList === availabilityData.list.length - 1) {
        schedule.push(`${more} more`);
      }
    } else {
      schedule.push(availabilityData.list[indexList].time);
    }
  }
  return schedule;
}

export function parseScheduleDataDay(availability, currentDateIndex) {
  let scheduleData = [];
  if (availability[currentDateIndex].list > 0) {
    scheduleData = availability[currentDateIndex].list;
  } else {
    for (let index = currentDateIndex; index < availability.length; index++) {
      if (availability[index].list > 0) {
        scheduleData.push();
      }
    }

    if (scheduleData.length > 0) {
      scheduleData.push("Next availability is next week");
    }
  }

  return scheduleData;
}

function getNextAvailabilityLabel(date) {}

export function setRangeDateData(response) {
  return {
    startDate: response?.listOfProvider[0].from,
    endDate: response?.listOfProvider[0].to,
  };
}

Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

//This for week dates
export function getDates(startDate, stopDate, isDayView = false) {
  let dateArray = new Array();
  let currentDate = startDate;
  while (currentDate <= stopDate) {
    dateArray.push(new Date(currentDate));
    currentDate = currentDate.addDays(1);
  }
  return {
    dateRange: dateArray,
    dateListName: !isDayView
      ? getDateListName(dateArray)
      : getDayListName(dateArray),
  };
}

function getDateListName(dateArray) {
  const dateWeek = [];
  for (let date of dateArray) {
    const month = constants.MONTH_NAME[date.getMonth()];
    dateWeek.push(`${month} ${date.getDate()}`);
  }

  return dateWeek;
}

function getDayListName(dateArray) {
  const dateDay = [];
  for (let date of dateArray) {
    const month = constants.MONTH_NAME[date.getMonth()];
    const dayName = constants.DAY_NAME[date.getDay() - 1];
    dateDay.push(`${dayName}, ${month} ${date.getDate()}`);
  }

  return dateDay;
}
