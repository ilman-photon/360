import constants from "./constants";
import { ddmmyyDateFormat } from "./dateFormatter";

export function parseInsuranceCarrier(insuranceCarrierData) {
  if (insuranceCarrierData && insuranceCarrierData.length > 0) {
    const defaultInsurance = [
      {
        id: "1",
        label: "I'm paying out of my pocket",
        category: "general",
      },
      {
        id: "2",
        label: "skip and choose insurance later",
        category: "general",
      },
      {
        id: "3",
        label: "Other Insurance",
        category: "general",
      },
    ];

    const allInsuranceData = [...defaultInsurance, ...insuranceCarrierData];
    const data = [];
    for (let index = 0; index < allInsuranceData.length; index++) {
      const insuranceItem = {
        id: allInsuranceData[index].id,
        name: allInsuranceData[index].label,
        category: allInsuranceData[index].category !== "general" ? `all` : "",
        divider:
          allInsuranceData[index].category === "general" &&
          index === defaultInsurance.length - 1,
      };
      data.push(insuranceItem);
    }
    return data;
  }
  return [];
}

export function parsePurposeOfVisit(appointmentType) {
  if (appointmentType && appointmentType.length > 0) {
    const data = [];
    for (const item of appointmentType) {
      const purposeOfVisitItem = {
        id: `${item.key}`,
        title: item.name,
        subtitle: item.category?.description || "",
      };
      data.push(purposeOfVisitItem);
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

export function timeInWeekACLabel(startDate, endDate) {
  return startDate && endDate
    ? `${getDateName(new Date(startDate))} until ${getDateName(
        new Date(endDate)
      )}`
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
    dateArray.push(currentDate);
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

function parsePrescriptionItemData(prescriptionData, key) {
  const data = [];
  let latestDate = "";
  for (const itemData of prescriptionData) {
    itemData.prescriptionDetails = parsePrescriptionDetailsData(
      [...itemData.prescriptionDetails],
      key
    );

    if (!latestDate) {
      latestDate = new Date(itemData.date);
    } else {
      latestDate =
        latestDate < new Date(itemData.date)
          ? latestDate
          : new Date(itemData.date);
    }

    itemData.date = ddmmyyDateFormat(itemData.date);
    itemData.expirationDate = ddmmyyDateFormat(itemData.expirationDate);
    data.push(itemData);
  }

  return { data, latestDate };
}

function getLatestDate(glassesDate, contactDate, medicationDate) {
  if (
    (glassesDate &&
      glassesDate <= contactDate &&
      glassesDate <= medicationDate) ||
    (glassesDate && !contactDate && !medicationDate)
  ) {
    return 0;
  } else if (
    (contactDate && contactDate <= medicationDate) ||
    (!glassesDate && contactDate && !medicationDate)
  ) {
    return 1;
  } else {
    return 2;
  }
}

function parsePrescriptionItemMedication(medications) {
  const past = [];
  const active = [];
  let latestDateMedic = "";
  for (let index = 0; index < medications.length; index++) {
    const date = medications[index].date;

    const medicationData = {};
    medicationData.id = medications[index].id;
    medicationData.prescription = medications[index].prescription;
    medicationData.date = ddmmyyDateFormat(date);
    medicationData.prescribedBy = "Dr. Philip Morris";
    medicationData.expirationDate = ddmmyyDateFormat(
      medications[index].expiredDate || "2022-10-02T11:18:47.229Z"
    );
    medicationData.fillRequestDate = ddmmyyDateFormat(
      "2022-09-02T11:18:47.229Z"
    );
    medicationData.timeRemaining = "Take 2 times a day";
    medicationData.dose = "0.5 mL";
    medicationData.status = medications[index].status || "";
    medicationData.statusDetails =
      "CVS Pharmacy, 123 Broadway Blvd, New Jersey, NY 12889";
    medicationData.type = index % 2 == 0 ? "active" : "past";

    if (medicationData.type === "active") {
      active.push(medicationData);
    } else {
      past.push(medicationData);
    }

    if (!latestDateMedic) {
      latestDateMedic = new Date(date);
    } else {
      latestDateMedic =
        latestDateMedic < new Date(date) ? latestDateMedic : new Date(date);
    }
  }
  return { active, past, latestDateMedic };
}

export function parsePrescriptionData(prescriptions) {
  const parsePrescriptions = { glasses: [], contacts: [], medications: [] };
  let glassesDate = null;
  let contactDate = null;
  let medicationDate = null;
  if (prescriptions.glasses && prescriptions.glasses.length > 0) {
    const { data, latestDate } = parsePrescriptionItemData(
      prescriptions.glasses,
      "glasses"
    );
    parsePrescriptions["glasses"] = data;
    glassesDate = latestDate;
  }

  if (prescriptions.contacts && prescriptions.contacts.length > 0) {
    const { data, latestDate } = parsePrescriptionItemData(
      prescriptions.contacts,
      "contacts"
    );
    parsePrescriptions["contacts"] = data;
    contactDate = latestDate;
  }

  if (prescriptions.medications && prescriptions.medications.length > 0) {
    const medications = prescriptions.medications;
    const { active, past, latestDateMedic } =
      parsePrescriptionItemMedication(medications);
    medicationDate = latestDateMedic;

    parsePrescriptions["medications"] = {
      active: active,
      past: past,
    };
  }
  return {
    parsePrescriptions,
    activeTab: getLatestDate(glassesDate, contactDate, medicationDate),
  };
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

export function isPrevArrowDisable(dateList, currentDate = null) {
  if (currentDate) {
    return new Date() > currentDate;
  } else {
    return (
      new Date() >
      (dateList?.dateRange?.length > 0 ? dateList.dateRange[0] : null)
    );
  }
}

export function parseAppointmentDetails(appointmentDetails) {
  const data = JSON.parse(JSON.stringify(appointmentDetails));

  data.appointmentInfo.documentation.list = [
    {
      name: "Date/Time",
      value: "Lorem Ipsum",
    },
    {
      name: "Performer",
      value: "Lorem Ipsum",
    },
    {
      name: "Performer",
      value: "Lorem Ipsum",
    },
    {
      name: "Performer",
      value: "Lorem Ipsum",
    },
    {
      name: "Performer",
      value: "Lorem Ipsum",
    },
    {
      name: "Performer",
      value: "Lorem Ipsum",
    },
    {
      name: "Performer",
      value: "Lorem Ipsum",
    },
  ];

  for (let i = 0; i < data.appointmentInfo.contents; i++) {
    let headers = [];
    switch (data.appointmentInfo.contents[i].type.toLowerCase()) {
      case "allergies":
        headers = ["Subtance", "Code", "Status", "Severity", "Reaction"];
        break;
      case "results":
        headers = ["Battery", "Date", "Test", "Result", "Result Date", "Lab"];
        break;
      case "vital signs":
        headers = [
          "Date",
          "Height",
          "Weight",
          "BMI",
          "Blood Pressure",
          "Body Temp.",
          "Pulse",
          "O2 Concentration",
          "Inhaled O2",
          "Resp. Rate",
        ];
        break;
      default:
        break;
    }
    data.appointmentInfo.contents[i].headers = headers;
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
