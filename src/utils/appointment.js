import moment from "moment";
import constants from "./constants";
import {
  convertTime24to12,
  ddmmyyDateFormat,
  mmddyyDateFormat,
  yyyymmddDateFormat,
} from "./dateFormatter";

export const TEMP_DATA_CONTACTS = {
  count: 1,
  entities: [
    {
      expirationDate: "01/06/2025",
      startDate: "01/10/2022",
      clrx: {
        clrx: {
          od: {
            t: false,
            bc: "11.2",
            add: "111",
            bc2: "11.2",
            axis: "111",
            diam: "14",
            lens: {
              sku: 409374,
              name: "EDGE III DW",
            },
            sph2: "15.5",
            type: "SCL",
            color: "black",
            notes: "India ttterrsting",
            segHt: "11.1",
            skirt: "11.1",
            addOns: "11.1",
            sphere: "10.1",
            cylinder: "",
            material: "soft",
            opticZone: "10.5",
            thickness: "105.",
            intermCurve: "test",
            periphCurve: "test",
          },
          os: {
            t: false,
            bc: "8.3",
            add: "11.2",
            bc2: "22.3",
            axis: "000",
            diam: "14",
            lens: {
              sku: 409374,
              name: "EDGE III DW",
            },
            sph2: "",
            type: "SCL",
            color: "black",
            notes: "test",
            segHt: "11.3",
            skirt: "11.8",
            addOns: "33.7",
            sphere: "55.7",
            cylinder: "11.0",
            material: "soft",
            opticZone: "44.8",
            thickness: "11.6",
            intermCurve: "54.0",
            periphCurve: "20.6",
          },
          mono: true,
          notes: "test notes",
          eyeDom: "OD",
          finalRx: "false",
          trialRx: "false",
        },
      },
      provider: {
        firstName: "indraku",
        lastName: "kumar",
        designation: "Mr",
        providerDetails: {
          isProvider: true,
        },
        _id: "2818ef11-208b-4f43-b471-06ad495381f1",
        _links: {
          self: {
            href: "/v1/template-users/2818ef11-208b-4f43-b471-06ad495381f1",
          },
        },
      },
      patient: {
        firstName: "naina",
        lastName: "naina ",
        mrn: "UNY323737",
        dob: "10/7/92, 12:00 AM",
        sex: "3",
        status: "UPDATED",
        _id: "d6ba6289-4190-4346-8dd7-34a1d81447e2",
        _version: "ab6a730f-adc2-4f79-aa8d-648ad901b8cf",
        _created: "Oct 7, 2022, 2:40:07 PM",
        _updated: "Oct 7, 2022, 3:57:12 PM",
        _createdBy: {
          _id: "981ad89e-7fee-42d8-92ec-c34324d862a0",
          _links: {
            self: {
              href: "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0",
            },
          },
        },
        _updatedBy: {
          _id: "981ad89e-7fee-42d8-92ec-c34324d862a0",
          _links: {
            self: {
              href: "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0",
            },
          },
        },
      },
      _links: {
        self: {
          href: "/v1/exam-sheet-entry/bf3410cf-3e8f-4dd7-95b6-184dc93bc1f7",
        },
      },
      _id: "bf3410cf-3e8f-4dd7-95b6-184dc93bc1f7",
    },
  ],
  _links: {
    self: {
      href: "/emr?pageNo=0&pageSize=100",
    },
  },
};

export const TEMP_DATA_GLASSES = {
  count: 2,
  entities: [
    {
      glrx: {
        od: {
          add: "-1.75",
          axis: "012",
          sphere: "+2.25",
          cylinder: "+1.50",
        },
        os: {
          add: "-1.75",
          axis: "111",
          sphere: "+2.75",
          cylinder: "+1.25",
        },
        type: "Distance",
      },
      provider: {
        firstName: "indraku",
        lastName: "kumar",
        designation: "Mr",
        providerDetails: {
          isProvider: true,
        },
        _id: "2818ef11-208b-4f43-b471-06ad495381f1",
        _links: {
          self: {
            href: "/v1/template-users/2818ef11-208b-4f43-b471-06ad495381f1",
          },
        },
      },
      patient: {
        firstName: "test",
        lastName: "newpatient",
        mrn: "NOX748652",
        dob: "10/4/90, 12:00 AM",
        sex: "1",
        status: "UPDATED",
        _id: "8a94c00a-1bf6-47b7-8ff1-485fd469937f",
        _version: "32700e55-5c49-4fa0-bb7f-9339fdca420d",
        _created: "Oct 4, 2022, 11:20:20 AM",
        _updated: "Oct 6, 2022, 5:42:16 AM",
        _createdBy: {
          _id: "981ad89e-7fee-42d8-92ec-c34324d862a0",
          _links: {
            self: {
              href: "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0",
            },
          },
        },
        _updatedBy: {
          _id: "981ad89e-7fee-42d8-92ec-c34324d862a0",
          _links: {
            self: {
              href: "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0",
            },
          },
        },
      },
      _links: {
        self: {
          href: "/v1/exam-sheet-entry/4ac901d8-cb49-4f86-9838-a0a10f9f2f85",
        },
      },
      _id: "4ac901d8-cb49-4f86-9838-a0a10f9f2f85",
    },
    {
      glrx: {
        od: {
          add: "+1.25",
          axis: "012",
          sphere: "+1.25",
          cylinder: "-2.50",
        },
        os: {
          add: "+1.25",
          sphere: "+1.50",
          cylinder: "+2.50",
        },
        type: "Distance",
      },
      provider: {
        firstName: "Steve",
        lastName: "Adam",
        _id: "19f1c186-37a8-46ef-a731-0a1f022be782",
        _links: {
          self: {
            href: "/v1/template-users/19f1c186-37a8-46ef-a731-0a1f022be782",
          },
        },
      },
      patient: {
        firstName: "test",
        lastName: "newpatient",
        mrn: "NOX748652",
        dob: "10/4/90, 12:00 AM",
        sex: "1",
        status: "UPDATED",
        _id: "8a94c00a-1bf6-47b7-8ff1-485fd469937f",
        _version: "32700e55-5c49-4fa0-bb7f-9339fdca420d",
        _created: "Oct 4, 2022, 11:20:20 AM",
        _updated: "Oct 6, 2022, 5:42:16 AM",
        _createdBy: {
          _id: "981ad89e-7fee-42d8-92ec-c34324d862a0",
          _links: {
            self: {
              href: "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0",
            },
          },
        },
        _updatedBy: {
          _id: "981ad89e-7fee-42d8-92ec-c34324d862a0",
          _links: {
            self: {
              href: "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0",
            },
          },
        },
      },
      _links: {
        self: {
          href: "/v1/exam-sheet-entry/1ca95312-7e54-4f91-8e2f-dec5a8e670df",
        },
      },
      _id: "1ca95312-7e54-4f91-8e2f-dec5a8e670df",
    },
  ],
  _links: {
    self: {
      href: "/emr?pageNo=0&pageSize=100",
    },
  },
};

export const TEMP_DATA_MEDICATION = [
  {
    Deleted: "n",
    Voided: "n",
    RcopiaID: "SB-26353646482",
    Patient: {
      RcopiaPracticeID: "222531942",
      FirstName: "FirstNikita",
      ExternalID: "",
      RcopiaID: "26151571631",
      LastName: "Dr",
    },
    NeedsReview: "n",
    Provider: {
      DEA: "AP3864421",
      Username: "pclarksoneyecare",
      NPI: "1741791705",
      FirstName: "Provider",
      ExternalID: "",
      RcopiaID: "2642957631",
      LastName: "ClarksonEyeCare",
    },
    Preparer: {
      RcopiaID: "2642957631",
      ExternalID: "",
      FirstName: "Provider",
      LastName: "ClarksonEyeCare",
    },
    Sig: {
      Drug: {
        NDCID: "00378070901",
        BrandName: "D-Penamine",
        GenericName: "penicillamine",
        Form: "tablet",
        Strength: "125 mg",
        RcopiaID: "12100000098779",
        FirstDataBankMedID: "585251",
        DrugDescription: "D-Penamine 125 mg tablet",
        Schedule: "nonscheduled",
        BrandType: "brand",
        Route: "oral",
        LegendStatus: "rx",
      },
      DoseUnit: "tablet",
      DoseTiming: "twice a day",
      Duration: "",
      Route: "by mouth",
      Quantity: "1",
      QuantityUnit: "tablet",
      Refills: "0",
      SubstitutionPermitted: "y",
      OtherNotes: "",
      PatientNotes: "as directed",
      Dose: "3",
      Action: "Take",
      Comments: "",
      MaximumDailyDoseUnit: "",
      DoseOther: "as directed",
      MaximumDailyDose: "",
    },
    CreatedDate: "10/05/2022 03:40:57 EDT",
    CompletedDate: "",
    SignedDate: "",
    StopDate: "",
    LastModifiedBy: "pclarksoneyecare",
    LastModifiedDate: "10/05/2022 03:41:00 EDT",
    Height: "",
    Weight: "",
    IntendedUse: "",
    Denied: "n",
    patientRcopiaID: "26151571631",
    _id: "323498f1-dff7-47b6-b3af-2dcc432f65ce",
    _version: "b3118e77-ad8c-4ac9-9840-1b38f6fb008e",
    _created: "Oct 5, 2022, 7:41:50 AM",
    _updated: "Oct 5, 2022, 7:41:50 AM",
    _createdBy: {
      _id: "2818ef11-208b-4f43-b471-06ad495381f1",
      _links: {
        self: {
          href: "/v1/employees/2818ef11-208b-4f43-b471-06ad495381f1",
        },
      },
    },
  },
];

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
    const expiratedDate =
      medications[index].expiredDate || "2022-12-02T11:18:47.229Z";

    const medicationData = {};
    medicationData.id = medications[index].id;
    medicationData.prescription = medications[index].prescription;
    medicationData.date = ddmmyyDateFormat(date);
    medicationData.prescribedBy = "Dr. Philip Morris";
    medicationData.isShowRequestRefill = moment().isSameOrBefore(expiratedDate);
    medicationData.expirationDate = ddmmyyDateFormat(expiratedDate);
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
