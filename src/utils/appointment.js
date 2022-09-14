import constants from "./constants";
import { ddmmyyDateFormat } from "./dateFormatter";

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
  const scheduleData = {};

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

export function parseDateWeekList(availability) {
  const dateList = [];
  for (let index = 0; index < availability.length; index++) {
    dateList.push(
      availability[index] && availability[index].date
        ? availability[index].date
        : ""
    );
  }
  return dateList;
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
  const scheduleData = [];
  if (availability[currentDateIndex].list.length > 0) {
    const maxLength =
      availability[currentDateIndex].list.length <= 4
        ? availability[currentDateIndex].list.length
        : 4;
    for (let indexList = 0; indexList < maxLength; indexList++) {
      scheduleData.push(availability[currentDateIndex].list[indexList].time);
    }
  } else {
    for (let index = currentDateIndex; index < availability.length; index++) {
      if (availability[index].list.length > 0) {
        scheduleData.push(
          `Next availability is ${getNextAvailabilityLabel(
            availability[index].date
          )}`
        );
        break;
      }
    }

    if (scheduleData.length <= 0) {
      scheduleData.push("Next availability is next week");
    }
  }
  return scheduleData;
}

export function parseScheduleDataWeekOverlay(availability) {
  const scheduleData = {};

  for (let index = 0; index < availability.length; index++) {
    const schedule = [];
    for (
      let indexList = 0;
      indexList < availability[index].list.length;
      indexList++
    ) {
      if (availability[index].list[indexList]) {
        schedule.push(availability[index].list[indexList].time);
      }
    }
    scheduleData[getDayName(new Date(availability[index].date))] = schedule;
  }

  return scheduleData;
}

function getNextAvailabilityLabel(date) {
  const tempDate = new Date(date);
  const month = constants.MONTH_NAME[tempDate.getMonth()];
  return `${month} ${tempDate.getDate()}`;
}

export function setRangeDateData(response) {
  return {
    startDate: response[0] ? response[0].from : "",
    endDate: response[0] ? response[0].to : "",
  };
}

export function timeInWeekLabel(startDate, endDate) {
  return startDate && endDate
    ? `${getDateName(new Date(startDate))} - ${getDateName(new Date(endDate))}`
    : "";
}

Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

//This for week dates
export function getDates(startDate, stopDate, isDayView = false) {
  const dateArray = [];
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
  for (const date of dateArray) {
    dateWeek.push(getDateName(date));
  }
  return dateWeek;
}

function getDateName(date) {
  const month = constants.MONTH_NAME[date.getMonth()];
  return `${month} ${date.getDate()}`;
}

function getDayListName(dateArray) {
  const dateDay = [];
  for (const date of dateArray) {
    dateDay.push(getDayName(date));
  }
  return dateDay;
}

function getDayName(date) {
  const month = constants.MONTH_NAME[date.getMonth()];
  const dayName = constants.DAY_NAME[date.getDay() - 1];
  return `${dayName}, ${month} ${date.getDate()}`;
}

export function getProvideOverlay(providerId, listOfProvider) {
  let providerOverlay = {};
  for (let index = 0; index < listOfProvider.length; index++) {
    if (providerId === listOfProvider[index].providerId) {
      providerOverlay = listOfProvider[index];
    }
  }
  return providerOverlay;
}

export function parsePrescriptionData(prescriptions) {
  const parsePrescriptions = {};
  if (prescriptions.glasses && prescriptions.glasses.length > 0) {
    const glasses = prescriptions.glasses[0];
    glasses.prescriptionDetails = parsePrescriptionDetailsData(
      [...glasses.prescriptionDetails],
      "glasses"
    );

    glasses.date = ddmmyyDateFormat(glasses.date);
    glasses.expirationDate = ddmmyyDateFormat(glasses.expirationDate);
    parsePrescriptions["glasses"] = glasses;
  }

  if (prescriptions.contacts && prescriptions.contacts.length > 0) {
    const contacts = prescriptions.contacts[0];
    contacts.prescriptionDetails = parsePrescriptionDetailsData(
      [...contacts.prescriptionDetails],
      "contacts"
    );
    contacts.date = ddmmyyDateFormat(contacts.date);
    contacts.expirationDate = ddmmyyDateFormat(contacts.expirationDate);
    parsePrescriptions["contacts"] = contacts;
  }

  if (prescriptions.medications && prescriptions.medications.length > 0) {
    const medications = prescriptions.medications;

    for (let index = 0; index < medications.length; index++) {
      medications[index].date = ddmmyyDateFormat(medications[index].date);
    }
    parsePrescriptions["medications"] = medications;
  }
  return parsePrescriptions;
}

function parsePrescriptionDetailsData(prescriptionDetails, type) {
  const data = [];
  for (const prescription of prescriptionDetails) {
    if (type === "glasses") {
      data.push(
        createGlassesDataTable({
          eye: prescription.Eye,
          sph: prescription.Sph,
          cyl: prescription.Cyl,
          axis: prescription.Axis,
          add: prescription.Add,
        })
      );
    } else {
      data.push(
        createContactDataTable({
          eye: prescription.Eye,
          sph: prescription.Sph,
          bc: prescription.Bc,
          cyl: prescription.Cyl,
          axis: prescription.Axis,
        })
      );
    }
  }
  return data;
}

function createGlassesDataTable({ eye, sph, cyl, axis, add }) {
  return { eye, sph, cyl, axis, add };
}

function createContactDataTable({ eye, sph, bc, cyl, axis }) {
  return { eye, sph, bc, cyl, axis };
}

export function parseAppointmentCardData(appointmentData) {
  let data = {};
  if (appointmentData && appointmentData.length > 0) {
    data = appointmentData[0];
  }
  return data;
}

export function getDirection(providerCordinate) {
  window.open(
    `https://maps.google.com?q=${providerCordinate.latitude},${providerCordinate.longitude}`,
    "_blank",
    "noopener,noreferrer"
  );
}
