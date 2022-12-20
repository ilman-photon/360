import moment from "moment";
import { Api } from "../pages/api/api";
import { setFilterBy, setProviderListData } from "../store/appointment";
import constants from "./constants";
import {
  convertTime24to12,
  mmddyyDateFormat,
  yyyymmddDateFormat,
} from "./dateFormatter";
import { getCoords, getDistanceMatrix } from "./getCity";

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

export function getAppointmentTypeOnTimeSlot(scheduleData, timeSlot) {
  let appointmentType = "";
  for (let index = 0; index < scheduleData?.list?.length; index++) {
    if (scheduleData.list[index]?.time === timeSlot) {
      appointmentType = scheduleData.list[index].appointmentCode;
      break;
    }
  }

  return appointmentType;
}

export function parseDateWeekList(availabilities) {
  const dateList = [];
  if (availabilities.length > 0) {
    for (let availability of availabilities) {
      dateList.push(availability && availability.date ? availability.date : "");
    }
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

export function parseScheduleDataWeekOverlay(availabilities) {
  const scheduleData = {};
  if (availabilities.length > 0) {
    for (let availability of availabilities) {
      const schedule = [];
      for (const availabilityList of availability.list) {
        if (availabilityList) {
          schedule.push(availabilityList.time);
        }
      }
      scheduleData[getDayName(new Date(availability.date))] = schedule;
    }
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
  const indexProviderAvailability = listOfProvider.findIndex((provider) => {
    return provider.providerId === providerDataTmp.providerId;
  });

  /** Fix Bugs EPP-11011 */
  /** Data Available */
  if (indexProviderAvailability > -1) {
    /** Data is available */
    providerDataTmp.availability =
      listOfProvider[indexProviderAvailability].availability;
  } else {
    /** Data not Available */
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

export function parsePrescriptionItemData(prescriptionData, key) {
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

    itemData.date = itemData.date ? mmddyyDateFormat(itemData.date) : "N/A";
    itemData.expirationDate = itemData.expirationDate
      ? mmddyyDateFormat(itemData.expirationDate)
      : "N/A";
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
    medicationData.drug = element.drug;

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
    const fProvider = filterProvider.find(
      (item) => item.name === element.providerName
    );
    if (!fProvider) {
      filterProvider.push({
        name: element.providerName,
        checked: false,
        type: "provider",
      });
    }
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
          sph: prescription.sph || "-",
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

  for (let i = 0; i < data.appointmentInfo.contents.length; i++) {
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

export function compareDate(date) {
  return new Date() > new Date(date);
}

export function getDateCount(date1, date2) {
  const date1D = new Date(date1);
  const date2D = new Date(date2);
  return date1D.getDay() - date2D.getDay() + 1;
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
      appointmentCode: timeSlot?.appointmentType?.code,
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

function getProviderAddres(providerAddress) {
  return {
    addressLine1: providerAddress?.addressLine1 || "",
    addressLine2: "",
    city: providerAddress?.city || "",
    state: providerAddress?.state || "",
    zip: providerAddress?.zip || "",
  };
}

export function addLanguageFilter(provider, languageList) {
  const languageKeyList = ["language1", "language2", "language3"];
  const filterLanguage = [];
  for (const key of languageKeyList) {
    const language = provider[key];
    const isSameData = languageList.find((item) => item.name === language);
    if (!isSameData && language) {
      languageList.push({
        name: language,
        type: "languange",
        checked: false,
      });
    }

    if (language) {
      filterLanguage.push(language);
    }
  }

  return { languageList, filterLanguage };
}

export function addGenderFilter(sex, genderList) {
  let gender = "";
  if (sex) {
    if (sex === 11) {
      gender = "Male";
    } else if (sex === 12) {
      gender = "Female";
    } else {
      gender = "Non-Binary";
    }

    const isSameData = genderList.find((item) => item.name === gender);

    if (!isSameData) {
      genderList.push({
        name: gender,
        type: "gender",
        checked: false,
      });
    }
  }
  return { genderList, gender };
}

export async function parseProviderListData(
  response,
  startDate,
  endDate,
  googleApiKey,
  currentCoordinate
) {
  startDate = yyyymmddDateFormat(startDate);
  endDate = yyyymmddDateFormat(endDate);
  let languageFilter = [];
  let genderFilter = [];
  const data = {
    listOfProvider: [],
    filterbyData: [
      {
        name: "Available Today",
        type: "general",
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
            lat: "",
            lng: "",
          },
          filters: {},
        };

        providerTemp.providerId = providerId;
        providerTemp.providerTemplateId = providerTempItem._id;
        providerTemp.name = `${provider.designation || ""} ${
          provider.firstName
        } ${provider.lastName}`;
        providerTemp.availability.push(availabilityDate);
        providerTemp.filters["isAvailableToday"] = setAvailableToday(
          availabilityDate.date
        );
        providerTemp.address = getProviderAddres(office);
        providerTemp.rating = provider.rating;
        providerTemp.phoneNumber = provider.workPhone;
        providerTemp.image = provider?.profilePhoto?.digitalAsset || null;

        providerTemp.coordinate = await getCoords(googleApiKey, office);

        providerTemp.distance = await getDistanceMatrix(
          // { lat: 36.8493937, lng: -76.0106753 }, // Testing from 1456 Reynard Dr, Virginia Beach, VA 23451, USA
          // { lat: -6.2268686, lng: 106.8335146}, // Testing from Jakarta Selatan
          currentCoordinate,
          providerTemp.coordinate
        );

        data.listOfProvider.push(providerTemp);

        const { languageList, filterLanguage } = addLanguageFilter(
          provider,
          languageFilter
        );
        const { genderList, gender } = addGenderFilter(
          provider?.sex?.key,
          genderFilter
        );
        languageFilter = languageList;
        genderFilter = genderList;

        providerTemp.filters["language"] = filterLanguage;
        providerTemp.filters["gender"] = gender;
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

  if (languageFilter.length > 0) {
    data.filterbyData.push({
      name: "Language",
      checklist: languageFilter,
    });
  }

  if (genderFilter.length > 0) {
    data.filterbyData.push({
      name: "Gender",
      checklist: genderFilter,
    });
  }
  return data;
}

export function onCalledGetAppointmentTypesAPI(insuranceCarrierList, callback) {
  const api = new Api();
  api
    .getAppointmentTypes()
    .then(function (response) {
      const filterSuggestion = {
        purposeOfVisit: parsePurposeOfVisit(response?.entities || []),
        insuranceCarrier: parseInsuranceCarrier(insuranceCarrierList),
      };
      callback(filterSuggestion);
    })
    .catch(function () {
      //Handle error getsuggestion
    });
}

export async function onCallSubmitFilterAPI(
  requestData,
  filterSuggestionData,
  dispatch,
  router
) {
  const startDateRequest = getMondayOfCurrentWeek(requestData.date);
  const endDateRequest = getSaturdayOfCurrentWeek(requestData.date);
  const api = new Api();
  api
    .submitFilter(requestData.location, requestData, filterSuggestionData)
    .then(async function (response) {
      const parseProviderData = await parseProviderListData(
        response,
        startDateRequest,
        endDateRequest,
        process.env.NEXT_PUBLIC_EMBED_API,
        {
          lat: 0,
          lng: 0,
        }
      );
      if (response?.offices?.length > 0) {
        dispatch(setProviderListData(parseProviderData?.listOfProvider));
      } else {
        dispatch(setProviderListData([]));
      }
      dispatch(setFilterBy(parseProviderData.filterbyData));
    })
    .catch(function () {
      dispatch(setProviderListData([]));
    })
    .finally(function () {
      router.push("/patient/appointment");
    });
}

export function getLocationName(location) {
  if (location.indexOf(",") > -1) {
    const tempLocation = location.split(",");
    return tempLocation[0];
  } else {
    return location;
  }
}
