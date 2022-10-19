import moment from "moment";
import constants from "./constants";
import {
  convertTime24to12,
  mmddyyDateFormat,
  yyyymmddDateFormat,
} from "./dateFormatter";

function isValidDate(d) {
  return d instanceof Date && !isNaN(d);
}

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
        id: item.code,
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
  if (availability[currentDateIndex]?.list.length > 0) {
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

export function getProvideOverlay(
  providerDataOverview,
  listOfProvider,
  startDate,
  endDate
) {
  const providerDataTmp = { ...providerDataOverview };
  for (let index = 0; index < listOfProvider.length; index++) {
    if (providerDataTmp.providerId === listOfProvider[index].providerId) {
      providerDataTmp.availability = listOfProvider[index].availability;
      break;
    }
  }

  if (listOfProvider?.length === 0) {
    const getRangeDate = getDates(
      new Date(startDate),
      new Date(endDate),
      false
    );
    providerDataTmp.availability = createAvailableTimeSlot(
      providerDataTmp,
      getRangeDate
    );
  }
  return providerDataTmp;
}

export function updateProviderTimeSchedule(
  providerList,
  listOfProvider,
  startDate,
  endDate
) {
  const updateProviderList = [];
  for (let index = 0; index < providerList.length; index++) {
    const currentProvider = listOfProvider.find(
      (item) => item.providerId === providerList[index].providerId
    );
    const providerDataTmp = { ...providerList[index] };
    if (currentProvider) {
      providerDataTmp.availability = currentProvider.availability;
    } else {
      const getRangeDate = getDates(
        new Date(startDate),
        new Date(endDate),
        false
      );
      providerDataTmp.availability = createAvailableTimeSlot(
        providerDataTmp,
        getRangeDate
      );
    }
    updateProviderList.push(providerDataTmp);
  }
  return updateProviderList;
}

function parsePrescriptionItemData(prescriptionData, key) {
  const data = [];
  let latestDate = "";
  for (const itemData of prescriptionData) {
    itemData.prescriptionDetails = parsePrescriptionDetailsData(
      [...itemData.prescriptionDetails],
      key
    );
    const itemDate = new Date(itemData.date);
    if (isValidDate(itemDate)) {
      if (!latestDate) {
        latestDate = itemDate;
      } else {
        latestDate = latestDate > itemDate ? latestDate : itemDate;
      }
    }

    itemData.date = mmddyyDateFormat(itemData.date);
    itemData.expirationDate = mmddyyDateFormat(itemData.expirationDate);
    data.push(itemData);
  }

  return { data, latestDate };
}

function getLatestDate(glassesDate, contactDate, medicationDate) {
  const listDate = [
    { name: "contact", date: contactDate, tab: 1 },
    { name: "glasses", date: glassesDate, tab: 0 },
    { name: "medication", date: medicationDate, tab: 2 },
  ];
  const result = listDate
    .filter((item) => item.date !== null)
    .map((v) => {
      return v && v.date && v.date.getTime();
    });
  const getMinDate = Math.max(...result);
  let activeTab = listDate.find(
    (item) => item.date && item.date.getTime() === getMinDate
  );

  return activeTab?.tab !== undefined ? activeTab.tab : 1;
}

function parsePrescriptionItemMedication(medications) {
  const filterData = [
    {
      name: "Filter By",
      checklist: [
        {
          name: "All",
          checked: false,
          type: "general",
        },
        {
          name: "Refill Requested",
          checked: false,
          type: "general",
        },
        {
          name: "Active",
          checked: false,
          type: "general",
        },
      ],
    },
    {
      name: "Providers",
      checklist: [],
    },
  ];
  const filterProvider = [];
  const past = [];
  const active = [];
  let latestDateMedic = "";
  for (const element of medications) {
    const date = element.date;
    const expiratedDate = element.expiredDate || "-";

    const medicationData = {};
    medicationData.id = element.id;
    medicationData.prescription = element.prescription;
    medicationData.date = mmddyyDateFormat(date);
    medicationData.prescribedBy = element.providerName;
    medicationData.isShowRequestRefill = isValidDate(new Date(expiratedDate))
      ? moment().isSameOrBefore(expiratedDate)
      : "-";
    medicationData.expirationDate = mmddyyDateFormat(expiratedDate);
    medicationData.fillRequestDate = mmddyyDateFormat(element.fillRequestDate);
    medicationData.timeRemaining = element.timeRemaining;
    medicationData.dose = element.dose;
    medicationData.status = element.status || "";
    medicationData.statusDetails =
      "CVS Pharmacy, 123 Broadway Blvd, New Jersey, NY 12889";
    medicationData.type = element.type;
    medicationData.providerNPI = element.providerNPI;

    if (medicationData.type === "active") {
      active.push(medicationData);
      const itemDate = new Date(date);
      if (isValidDate(itemDate)) {
        if (!latestDateMedic) {
          latestDateMedic = itemDate;
        } else {
          latestDateMedic =
            latestDateMedic > itemDate ? latestDateMedic : itemDate;
        }
      }
    } else {
      past.push(medicationData);
    }
    filterProvider.push({
      name: element.providerName,
      checked: false,
      type: "provider",
    });
  }
  filterData[1].checklist.push(...filterProvider);
  return { active, past, latestDateMedic, filterProvider: filterData };
}

export function parsePrescriptionData(prescriptions) {
  let filterData = [];
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
    const { active, past, latestDateMedic, filterProvider } =
      parsePrescriptionItemMedication(medications);
    medicationDate = latestDateMedic;

    parsePrescriptions["medications"] = {
      active: active,
      past: past,
    };

    filterData = filterProvider;
  }

  return {
    parsePrescriptions,
    activeTab: getLatestDate(glassesDate, contactDate, medicationDate),
    filterProvider: filterData,
  };
}

function parsePrescriptionDetailsData(prescriptionDetails, type) {
  const data = [];
  for (const prescription of prescriptionDetails) {
    if (type === "glasses") {
      data.push(
        createGlassesDataTable({
          eye: prescription.eye || "-",
          sph: prescription.sph || "-",
          cyl: prescription.cyl || "-",
          axis: prescription.axis || "-",
          add: prescription.add || "-",
        })
      );
    } else {
      data.push(
        createContactDataTable({
          eye: prescription.eye || "-",
          sph: prescription.eye || "-",
          bc: prescription.bc || "-",
          cyl: prescription.cyl || "-",
          axis: prescription.axis || "-",
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

export function getMondayOfCurrentWeek(date) {
  const today = new Date(date);
  const first = today.getDate() - today.getDay() + 1;

  const monday = new Date(today.setDate(first));
  return mmddyyDateFormat(monday);
}

export function getSaturdayOfCurrentWeek(date) {
  const today = new Date(date);
  const six = today.getDate() - today.getDay() + 6;

  const saturday = new Date(today.setDate(six));
  return mmddyyDateFormat(saturday);
}

function parseTimeSlotAppointment(timeSlotList) {
  const list = [];
  for (const timeSlot of timeSlotList) {
    let slotTemp = {
      time: convertTime24to12(`${timeSlot.startHHMM}`),
      key: timeSlot._id,
    };
    list.push(slotTemp);
  }
  return list;
}

function createAvailableTimeSlot(providerData, getRangeDate) {
  const availabilityList = [];
  for (const dateItem of getRangeDate.dateRange) {
    const availability = {
      date: yyyymmddDateFormat(dateItem),
      list: [],
    };
    const isSameAvailability =
      providerData?.availability?.find(
        (item) => new Date(item.date).getDate() === dateItem.getDate()
      ) || null;
    if (isSameAvailability) {
      availability.list = isSameAvailability.list;
    }
    availabilityList.push(availability);
  }
  return availabilityList;
}

function setAvailableToday(dateSchedule) {
  const newDate = new moment().format("YYYY-MM-DD");
  return dateSchedule === newDate;
}

export function parseProviderListData(response, startDate, endDate) {
  startDate = yyyymmddDateFormat(startDate);
  endDate = yyyymmddDateFormat(endDate);
  const data = {
    listOfProvider: [],
    filterbyData: [
      {
        name: "Available Today",
        checked: false,
      },
    ],
  };
  const offices = response.offices || [];
  for (const item of offices) {
    const office = item.office;
    for (const providerTempItem of item.providerTemplate) {
      const provider = providerTempItem.provider;
      const providerId = provider._id;
      const dateSchedule = new Date(providerTempItem.scheduleDate);
      const availabilityDate = {
        date: new moment(dateSchedule).format("YYYY-MM-DD"),
        list: parseTimeSlotAppointment(providerTempItem.slots),
      };
      const currentProvider = data.listOfProvider
        ? data.listOfProvider.find((item) => item.providerId === providerId)
        : [];
      if (data.listOfProvider.length === 0 || !currentProvider) {
        const providerTemp = {
          providerId: "",
          providerTemplateId: "",
          office: {
            name: office.name,
            id: office._id,
          },
          address: {
            addressLine1: "",
            addressLine2: "",
            city: "",
            state: "",
            zipcode: "",
          },
          rating: "",
          name: "",
          phoneNumber: "",
          distance: "",
          image: "",
          from: startDate,
          to: endDate,
          availability: [],
          coordinate: {
            latitude: "",
            longitude: "",
          },
          filters: {},
        };

        providerTemp.providerId = providerId;
        providerTemp.providerTemplateId = providerTempItem._id;
        providerTemp.name = `${provider.designation} ${provider.firstName} ${provider.lastName}`;
        providerTemp.availability.push(availabilityDate);
        providerTemp.filters["isAvailableToday"] = setAvailableToday(
          availabilityDate.date
        );
        data.listOfProvider.push(providerTemp);
      } else if (data.listOfProvider.length > 0 && currentProvider) {
        const isSameDate = currentProvider.availability.find(
          (item) => item.date === availabilityDate.date
        );
        if (!isSameDate) {
          currentProvider.availability.push(availabilityDate);
          for (const [key, value] of Object.entries(currentProvider.filters)) {
            if (!currentProvider[key]) {
              currentProvider[key] = setAvailableToday(availabilityDate.date);
            }
          }
        }
      }
    }
  }

  const getRangeDate = getDates(new Date(startDate), new Date(endDate), false);
  for (const providerData of data.listOfProvider) {
    providerData.availability = createAvailableTimeSlot(
      providerData,
      getRangeDate
    );
  }

  return data;
}
