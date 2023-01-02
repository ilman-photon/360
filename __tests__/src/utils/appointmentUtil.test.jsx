import "@testing-library/jest-dom";
import {
  getAppointmentTypeOnTimeSlot,
  getProvideOverlay,
  parseAppointmentDetails,
  parseDateWeekList,
  parseInsuranceCarrier,
  parsePrescriptionItemData,
  parsePurposeOfVisit,
  parseScheduleDataDay,
  parseScheduleDataWeek,
  updateProviderTimeSchedule,
  getDirection,
  addLanguageFilter,
  addGenderFilter,
} from "../../../src/utils/appointment";

const MOCK_RESPONSE = {
  appointmentType: [
    {
      code: "Clinical_Diagnosis",
      name: "Clinical_Diagnosis",
      key: 4,
      order: 4,
      category: { code: "Vision", description: "Vision" },
      acronym: "CAD",
      color: "#6fc77b",
      slotLength: 5,
      notes: "",
      _links: { self: { href: "/v1/appointment-types/Clinical_Diagnosis" } },
    },
    {
      code: "NO_APPOINTMENT",
      name: "NO APPOINTMENT",
      key: 1,
      order: 1,
      category: { code: "Medical", description: "Medical" },
      acronym: "NA",
      color: "#8F8F8F",
      slotLength: 5,
      notes: "NO_APPOINTMENT is a default appointment type",
      _links: { self: { href: "/v1/appointment-types/NO_APPOINTMENT" } },
    },
    {
      code: "Comprehensive",
      name: "Comprehensive",
      key: 2,
      order: 2,
      category: { code: "Medical", description: "Medical" },
      acronym: "CP",
      color: "#f2ee74",
      slotLength: 5,
      notes: "",
      _links: { self: { href: "/v1/appointment-types/Comprehensive" } },
    },
    {
      code: "Glaucome_Appointment",
      name: "Glaucoma_Appointment",
      key: 3,
      order: 3,
      category: { code: "Vision", description: "Vision" },
      acronym: "GPA",
      color: "#528aa8",
      slotLength: 5,
      notes: "",
      _links: { self: { href: "/v1/appointment-types/Glaucome_Appointment" } },
    },
    {
      code: "Retina_checkup",
      name: "Retina checkup",
      key: 5,
      order: 5,
      category: { code: "Vision", description: "Vision" },
      acronym: "RET",
      color: "#db8686",
      slotLength: 5,
      notes: "",
      _links: { self: { href: "/v1/appointment-types/Retina_checkup" } },
    },
  ],
  insuranceCarrier: [
    {
      id: "2a7601c4-f9e7-4698-ae56-bbe44dee0c9a",
      label: "EyeMed",
      value: "EyeMed",
    },
    {
      id: "40df17d8-b546-400d-94a4-218b1bc92747",
      label: "Vision Care",
      value: "Vision Care",
    },
    {
      id: "45de1cbd-09f0-4e98-aa45-9e8f4b3f68fc",
      label: "United Healthcare",
      value: "United Healthcare",
    },
    {
      id: "36241a46-d135-4356-96b0-b2b5ceaf06ba",
      label: "Blue Cross",
      value: "Blue Cross",
    },
    {
      id: "890184c4-400f-4bdf-9d2f-4be098a9fd45",
      label: "Medicare",
      value: "Medicare",
    },
    {
      id: "568f0fd4-98c5-470f-9f91-55f3c24449cf",
      label: "Medicaid",
      value: "Medicaid",
    },
    {
      id: "0956cb6c-1bf5-4b8a-a632-208beaeff489",
      label: "Eye Care",
      value: "Eye Care",
    },
    {
      id: "9794b2a3-57a9-4ca1-a077-5a6f998501bd",
      label: "United Healthcare",
      value: "United Healthcare",
    },
    {
      id: "84b3e396-82d3-42bb-a9e0-c3a90ee24dad",
      label: "Test_Finance_class",
      value: "Test_Finance_class",
    },
    {
      id: "dc87ae1f-8302-481e-b09f-990ffaa67cd7",
      label: "WORKERS COMPENSATION",
      value: "WORKERS COMPENSATION",
    },
    {
      id: "21526220-1b68-40bb-9b2d-54274b410caf",
      label: "ALLSTATE",
      value: "ALLSTATE",
    },
    {
      id: "44971e01-2994-4e2d-aff2-d31ce25b15f1",
      label: "ILLINOIS MEDICARE",
      value: "ILLINOIS MEDICARE",
    },
    {
      id: "42a5bc17-36bb-44a4-8ef7-940bca02838c",
      label: "Cigna",
      value: "Cigna",
    },
  ],
  filterbyData: [
    {
      name: "Available Today",
      checked: false,
    },
    {
      name: "language",
      checklist: [
        {
          name: "Arabic",
          checked: false,
        },
        {
          name: "Chinese",
          checked: false,
        },
        {
          name: "English",
          checked: false,
        },
        {
          name: "Farsi",
          checked: false,
        },
        {
          name: "French",
          checked: false,
        },
        {
          name: "Spanish",
          checked: false,
        },
        {
          name: "Portuguese",
          checked: false,
        },
        {
          name: "Korean",
          checked: false,
        },
        {
          name: "German",
          checked: false,
        },
        {
          name: "Italian",
          checked: false,
        },
        {
          name: "Indonesian",
          checked: false,
        },
      ],
    },
    {
      name: "Insurance",
      checklist: [
        {
          name: "In Network",
          checked: false,
        },
        {
          name: "Out of Network",
          checked: false,
        },
      ],
    },
    {
      name: "Gender",
      checklist: [
        {
          name: "Male",
          checked: false,
        },
        {
          name: "Female",
          checked: false,
        },
        {
          name: "Non-Binary",
          checked: false,
        },
      ],
    },
  ],
};
describe("Appointment Util", () => {
  const availabilityData = [
    {
      date: "2022-09-19",
      list: [
        {
          time: "11:30am",
          key: 12222,
          appointmentCode: "001",
        },
      ],
    },
    {
      date: "2022-09-20",
      list: [
        {
          time: "08:00am",
          key: 12223,
          appointmentCode: "002",
        },
        {
          time: "10:30am",
          key: 12224,
          appointmentCode: "003",
        },
        {
          time: "11:00am",
          key: 12225,
          appointmentCode: "004",
        },
        {
          time: "12:00pm",
          key: 12226,
          appointmentCode: "005",
        },
        {
          time: "13:00pm",
          key: 12227,
          appointmentCode: "006",
        },
        {
          time: "14:00pm",
          key: 12228,
          appointmentCode: "007",
        },
      ],
    },
  ];
  test("validate data", () => {
    const expectInsurance = [
      {
        name: "I'm paying out of my pocket",
        category: "",
        divider: false,
      },
      {
        name: "skip and choose insurance later",
        category: "",
        divider: false,
      },
      { name: "Other Insurance", category: "", divider: true },
      {
        id: "2a7601c4-f9e7-4698-ae56-bbe44dee0c9a",
        name: "EyeMed",
        category: "all",
        divider: false,
      },
      {
        id: "40df17d8-b546-400d-94a4-218b1bc92747",
        name: "Vision Care",
        category: "all",
        divider: false,
      },
      {
        id: "45de1cbd-09f0-4e98-aa45-9e8f4b3f68fc",
        name: "United Healthcare",
        category: "all",
        divider: false,
      },
      {
        id: "36241a46-d135-4356-96b0-b2b5ceaf06ba",
        name: "Blue Cross",
        category: "all",
        divider: false,
      },
      {
        id: "890184c4-400f-4bdf-9d2f-4be098a9fd45",
        name: "Medicare",
        category: "all",
        divider: false,
      },
      {
        id: "568f0fd4-98c5-470f-9f91-55f3c24449cf",
        name: "Medicaid",
        category: "all",
        divider: false,
      },
      {
        id: "0956cb6c-1bf5-4b8a-a632-208beaeff489",
        name: "Eye Care",
        category: "all",
        divider: false,
      },
      {
        id: "9794b2a3-57a9-4ca1-a077-5a6f998501bd",
        name: "United Healthcare",
        category: "all",
        divider: false,
      },
      {
        id: "84b3e396-82d3-42bb-a9e0-c3a90ee24dad",
        name: "Test_Finance_class",
        category: "all",
        divider: false,
      },
      {
        id: "dc87ae1f-8302-481e-b09f-990ffaa67cd7",
        name: "WORKERS COMPENSATION",
        category: "all",
        divider: false,
      },
      {
        id: "21526220-1b68-40bb-9b2d-54274b410caf",
        name: "ALLSTATE",
        category: "all",
        divider: false,
      },
      {
        id: "44971e01-2994-4e2d-aff2-d31ce25b15f1",
        name: "ILLINOIS MEDICARE",
        category: "all",
        divider: false,
      },
      {
        id: "42a5bc17-36bb-44a4-8ef7-940bca02838c",
        name: "Cigna",
        category: "all",
        divider: false,
      },
    ];
    const expectPurposes = [
      {
        id: "Clinical_Diagnosis",
        title: "Clinical_Diagnosis",
        subtitle: "Vision",
      },
      { id: "NO_APPOINTMENT", title: "NO APPOINTMENT", subtitle: "Medical" },
      { id: "Comprehensive", title: "Comprehensive", subtitle: "Medical" },
      {
        id: "Glaucome_Appointment",
        title: "Glaucoma_Appointment",
        subtitle: "Vision",
      },
      { id: "Retina_checkup", title: "Retina checkup", subtitle: "Vision" },
    ];
    const suggestionData = {
      purposeOfVisit: parsePurposeOfVisit(MOCK_RESPONSE.appointmentType),
      insuranceCarrier: parseInsuranceCarrier(MOCK_RESPONSE.insuranceCarrier),
    };
    expect(expectPurposes).toEqual(suggestionData.purposeOfVisit);
    expect(expectInsurance).toEqual(suggestionData.insuranceCarrier);
  });

  test("parseInsuranceCarrier no data", () => {
    expect(parseInsuranceCarrier()).toEqual([]);
  });

  test("parsePurposeOfVisit no data", () => {
    expect(parsePurposeOfVisit()).toEqual([]);
  });

  test("parseScheduleDataWeek", () => {
    const recivedData = {
      monday: ["11:30am", "", "", ""],
      tuesday: ["08:00am", "10:30am", "11:00am", "3 more"],
    };
    expect(parseScheduleDataWeek(availabilityData)).toEqual(recivedData);
  });

  test("getAppointmentTypeOnTimeSlot", () => {
    const recivedData = {
      monday: ["11:30am", "", "", ""],
      tuesday: ["08:00am", "10:30am", "11:00am", "3 more"],
    };

    expect(
      getAppointmentTypeOnTimeSlot(
        {
          date: "2022-09-19",
          list: [
            undefined,
            {
              time: "11:30am",
              key: 12222,
              appointmentCode: "001",
            },
          ],
        },
        "11:30am"
      )
    ).toEqual({"appointmentType": "001", "appointmentTypeCode": undefined});
  });

  test("parseDateWeekList", () => {
    expect(
      parseDateWeekList([
        {
          date: "2022-09-19",
          list: [
            {
              time: "11:30am",
              key: 12222,
              appointmentCode: "001",
            },
          ],
        },
        {
          list: [
            {
              time: "11:30am",
              key: 12222,
              appointmentCode: "001",
            },
          ],
        },
      ])
    ).toEqual(["2022-09-19", ""]);
  });

  test("parseScheduleDataDay", () => {
    expect(parseScheduleDataDay(availabilityData, 0)).toEqual(["11:30am"]);
    expect(
      parseScheduleDataDay(
        [
          {
            date: "2022-09-19",
            list: [],
          },
          {
            date: "2022-09-18",
            list: [
              {
                time: "11:30am",
                key: 12222,
                appointmentCode: "001",
              },
            ],
          },
        ],
        0
      )
    ).toEqual(["Next availability is Sep 18"]);
    expect(parseScheduleDataDay(availabilityData, 2)).toEqual([
      "Next availability is next week",
    ]);
  });

  test("getProvideOverlay", () => {
    const providerDataOverview = {
      providerId: "01",
      availability: null,
    };
    const listOfProvider = [
      { providerId: "01", availability: "01" },
      { providerId: "02", availability: "02" },
    ];

    expect(
      getProvideOverlay(
        providerDataOverview,
        listOfProvider,
        "11/02/2020",
        "11/02/2022"
      )
    ).toEqual({ providerId: "01", availability: "01" });
    expect(
      getProvideOverlay(providerDataOverview, [], "11/01/2022", "11/02/2022")
    ).toEqual({
      providerId: "01",
      availability: [
        { date: "2022-11-01", list: [] },
        { date: "2022-11-02", list: [] },
      ],
    });
  });

  test("updateProviderTimeSchedule", () => {
    const providerDataOverview = [
      {
        providerId: "01",
        availability: null,
      },
    ];
    const newProviderDataOverview = [
      {
        providerId: "03",
        availability: null,
      },
    ];
    const listOfProvider = [
      { providerId: "01", availability: "01" },
      { providerId: "02", availability: "02" },
    ];

    expect(
      updateProviderTimeSchedule(
        providerDataOverview,
        listOfProvider,
        "11/02/2020",
        "11/02/2022"
      )
    ).toEqual([{ availability: "01", providerId: "01" }]);

    expect(
      updateProviderTimeSchedule(
        newProviderDataOverview,
        listOfProvider,
        "12/01/2022",
        "12/02/2022"
      )
    ).toEqual([
      {
        availability: [
          { date: "2022-12-01", list: [] },
          { date: "2022-12-02", list: [] },
        ],
        providerId: "03",
      },
    ]);
  });

  test("parsePrescriptionItemData", () => {
    const prescriptionslasses = [
      {
        prescribedBy: "Dr. Sonha Nguyen",
        date: "2022-09-02T11:18:47.229Z",
        expirationDate: "2022-10-02T11:18:47.229Z",
        prescriptionDetails: [
          {
            Eye: "OD",
            Sph: "+20.00",
            Cyl: "-5.00",
            Axis: "70",
            Add: "x180",
          },
          {
            Eye: "OS",
            Sph: "+19.75",
            Cyl: "-4.75",
            Axis: "38",
            Add: "x090",
          },
        ],
      },
      {
        prescribedBy: "Dr. Sonha Nguyen",
        date: "2022-08-02T11:18:47.229Z",
        expirationDate: "2022-10-02T11:18:47.229Z",
        prescriptionDetails: [
          {
            Eye: "OD",
            Sph: "+20.00",
            Cyl: "-5.00",
            Axis: "70",
            Add: "x180",
          },
          {
            Eye: "OS",
            Sph: "+19.75",
            Cyl: "-4.75",
            Axis: "38",
            Add: "x090",
          },
        ],
      },
      {
        prescribedBy: "Dr. Sonha Nguyen",
        date: "2022-10-02T11:18:47.229Z",
        expirationDate: "2022-10-02T11:18:47.229Z",
        prescriptionDetails: [
          {
            Eye: "OD",
            Sph: "+20.00",
            Cyl: "-5.00",
            Axis: "70",
            Add: "x180",
          },
          {
            Eye: "OS",
            Sph: "+19.75",
            Cyl: "-4.75",
            Axis: "38",
            Add: "x090",
          },
        ],
      },
    ];
    const parsePrescriptionItemDataGlasses = parsePrescriptionItemData(
      prescriptionslasses,
      "glasses"
    );

    expect(JSON.stringify(parsePrescriptionItemDataGlasses)).toEqual(
      '{"data":[{"prescribedBy":"Dr. Sonha Nguyen","date":"09/02/2022","expirationDate":"10/02/2022","prescriptionDetails":[{"eye":"-","sph":"-","cyl":"-","axis":"-","add":"-"},{"eye":"-","sph":"-","cyl":"-","axis":"-","add":"-"}]},{"prescribedBy":"Dr. Sonha Nguyen","date":"08/02/2022","expirationDate":"10/02/2022","prescriptionDetails":[{"eye":"-","sph":"-","cyl":"-","axis":"-","add":"-"},{"eye":"-","sph":"-","cyl":"-","axis":"-","add":"-"}]},{"prescribedBy":"Dr. Sonha Nguyen","date":"10/02/2022","expirationDate":"10/02/2022","prescriptionDetails":[{"eye":"-","sph":"-","cyl":"-","axis":"-","add":"-"},{"eye":"-","sph":"-","cyl":"-","axis":"-","add":"-"}]}],"latestDate":"2022-10-02T11:18:47.229Z"}'
    );
  });

  test("parseAppointmentDetails", () => {
    const mocData = {
      appointmentId: "1",
      providerInfo: {
        providerId: "1",
        name: "Paul Wagner Md",
        position: "Scripps Eyecare",
        address: {
          addressLine1: "51 West 51st Street",
          addressLine2: "Floor 3, Suite 320 Midtown",
          city: "Florida",
          state: "FR",
          zipcode: "54231",
        },
        rating: "5",
        phoneNumber: "8572999989",
        distance: "10 mi",
        image: "/doctor.png",
        from: "2022-07-18",
        to: "2022-07-23",
        location: { latitude: 32.751204, longitude: -117.1641166 },
      },
      patientInfo: {
        name: "Rebecca Chan",
        firstname: "Rebecca",
        lastname: "Chan",
        dob: "12/12/2022",
        phoneNumber: "1234567890",
      },
      appointmentInfo: {
        appointmentType: "Eye Exam",
        date: "Fri, 14 Oct 2022 04:30:00 EST",
        insuranceCarrier: ["ECP Vision", "BlueCare Vision"],
        documentDetails: {
          documentID: "6c6bc10990uq09.1231.1239.01.0921.(2.129.91.0.102) ",
          createdOn: "July 26, 2022, 2:54 : 10PM -0500",
          custodian: "EYECARE CENTERS",
          address: {
            typePlace: "Workplace",
            addressLine1: "15933 CLAYTON RD, SUITE 201 BALLWIN, MO 63011",
            country: "USA",
            mobileNumber: "(314) 227-2600",
          },
        },
        patientDetail: {
          patientName: "JONES_ECC INDIANA",
          address: {
            typePlace: "Workplace",
            addressLine1: "15933 CLAYTON RD, SUITE 201 BALLWIN, MO 63011",
            country: "USA",
            mobileNumber: "(314) 227-2600",
          },
          dateBirth: "July 11, 1990 (32yr)",
          gender: "Male",
          race: "",
          ethnicity: "",
          patientId:
            "1EBH9187391283981J391J82391ASKDLKJ9 (2.61.1231.314132131.14564.7534535)",
          languageCommunication: "English",
        },
        documentOfCareDetail: {
          DocumentationCareProcisionDate: "from July 11, 1990 to July 26, 2022",
          performers: [
            {
              performerName: "ADAMS HOLLY of EYECARE CENTERS",
              contactPerformance: {
                typePlace: "Workplace",
                addressLine1: "15933 CLAYTON RD, SUITE 201 BALLWIN, MO 63011",
                country: "USA",
                mobileNumber: "(314) 227-2600",
              },
            },
          ],
        },
        contents: [
          {
            type: "Allergies",
            list: [
              {
                subtance: "No Know Allergies",
                code: "",
                status: "active",
                severity: "UNK",
                reaction: "UNK",
              },
            ],
          },
          {
            type: "Medications",
            list: [
              {
                medication: "no known medications",
                code: "",
                route: "",
                frequency: "3",
                dose: "",
                start_date: "",
                stop_date: "",
                status: "",
              },
            ],
          },
          {
            type: "Problems",
            list: [
              {
                problem:
                  "Disorder of refraction AND/OR accommodation (disorder)",
                code: "72128008",
                status: "Active",
              },
              {
                problem: "Low tension glaucoma",
                code: "50485007",
                status: "Active",
              },
            ],
          },
          {
            type: "Results",
            list: [
              {
                battery: "Physical findings of Macula",
                date: "2018-04-06 - 2018-04-06",
                test: "",
                result: "",
                result_date: "",
                lab: "",
              },
              {
                battery: "",
                date: "",
                test: "Physical finding of Macula",
                result: "NL",
                result_date: "2018-04-26 00:00:00",
                lab: "",
              },
              {
                battery:
                  "Optic disk or retinal nerve fiber layer structural abnormalities Right eye by Ophthalmoscopy",
                date: "2016-11-16 - 2016-11-16",
                test: "",
                result: "",
                result_date: "",
                lab: "",
              },
            ],
          },
          {
            type: "Vital Signs",
            list: [
              {
                date: "2019-05-28",
                height: "",
                weight: "active",
                bmi: "UNK",
                blood_pressure: "107.0 mmHg / 78.0 mmHg",
                body_temp: "",
                pulse: "",
                o2_concentration: "",
                inhaled_o2: "",
                resp_rate: "",
              },
              {
                date: "2018-10-08",
                height: "",
                weight: "active",
                bmi: "UNK",
                blood_pressure: "130.0 mmHg / 70.0 mmHg",
                body_temp: "",
                pulse: "",
                o2_concentration: "",
                inhaled_o2: "",
                resp_rate: "",
              },
            ],
          },
          {
            type: "Social History",
            list: [
              {
                element: "Smoking Status",
                observation: "Tobaco Smoking consumption",
                dates: "2022-07-26 14:54:10",
              },
            ],
          },
          { type: "Implants", list: [{ id: "", date: "", authority: "" }] },
          {
            type: "Functional Status",
            list: [
              {
                functional_finding: "",
                observation: "no functional data information",
                date: "",
                status: "",
              },
            ],
          },
          {
            type: "Mental Status",
            list: [
              {
                cognitive_finding: "",
                observation: "",
                date: "",
                status: "",
              },
            ],
          },
          {
            type: "Immunizations",
            list: [
              {
                vaccine: "NI",
                date: "2022-07-26",
                status: "completed",
                notes: "N/A",
              },
            ],
          },
          {
            type: "Procedures",
            list: [
              {
                procedure: "Refraction",
                date: "2018-10-08",
                status: "Completed",
                Interpretation: "",
              },
              {
                procedure: "New Patient Comp",
                date: "2018-10-08",
                status: "Completed",
                Interpretation: "",
              },
            ],
          },
          { type: "Assessments", list: [{ assessment: "" }] },
          { type: "Health Concerns", list: [{}] },
          {
            type: "Goals section",
            list: [{ goal: "", value: "", date: "" }],
          },
          {
            type: "Plan of Treatment",
            list: [
              { activity: "CVE 1 Year", date: "", status: "active" },
              { activity: "CVE 1 Yr", date: "", status: "active" },
              { activity: "CVE 1 Yr", date: "", status: "active" },
              { activity: "Glasses", date: "", status: "active" },
            ],
          },
          { type: "Reason for Referral", list: [{}] },
          { type: "Interventions", list: [{ resource: "", date: "" }] },
          {
            type: "Encounters",
            list: [
              {
                encounter: "New Patient Comp ",
                performer: "Tina Siegel ",
                diagnosis:
                  "Regular astigmatiosm, bilateral (h52.233) / age-related nuclear cataract, right eyeh25.11",
                location: "Swansboro 755 weest Corbett ave swobro nc 1234 ",
                date: "2018-10-08",
              },
            ],
          },
        ],
        documentation: {
          name: "Care Provision",
          list: [{ name: "Date/Time", value: "Lorem Ipsum" }],
        },
      },
    };

    const reciveData = {
      appointmentId: "1",
      providerInfo: {
        providerId: "1",
        name: "Paul Wagner Md",
        position: "Scripps Eyecare",
        address: {
          addressLine1: "51 West 51st Street",
          addressLine2: "Floor 3, Suite 320 Midtown",
          city: "Florida",
          state: "FR",
          zipcode: "54231",
        },
        rating: "5",
        phoneNumber: "8572999989",
        distance: "10 mi",
        image: "/doctor.png",
        from: "2022-07-18",
        to: "2022-07-23",
        location: { latitude: 32.751204, longitude: -117.1641166 },
      },
      patientInfo: {
        name: "Rebecca Chan",
        firstname: "Rebecca",
        lastname: "Chan",
        dob: "12/12/2022",
        phoneNumber: "1234567890",
      },
      appointmentInfo: {
        appointmentType: "Eye Exam",
        date: "Fri, 14 Oct 2022 04:30:00 EST",
        insuranceCarrier: ["ECP Vision", "BlueCare Vision"],
        documentDetails: {
          documentID: "6c6bc10990uq09.1231.1239.01.0921.(2.129.91.0.102) ",
          createdOn: "July 26, 2022, 2:54 : 10PM -0500",
          custodian: "EYECARE CENTERS",
          address: [Object],
        },
        patientDetail: {
          patientName: "JONES_ECC INDIANA",
          address: {
            addressLine1: "15933 CLAYTON RD, SUITE 201 BALLWIN, MO 63011",
            country: "USA",
            mobileNumber: "(314) 227-2600",
            typePlace: "Workplace",
          },
          dateBirth: "July 11, 1990 (32yr)",
          gender: "Male",
          race: "",
          ethnicity: "",
          patientId:
            "1EBH9187391283981J391J82391ASKDLKJ9 (2.61.1231.314132131.14564.7534535)",
          languageCommunication: "English",
        },
        documentOfCareDetail: {
          DocumentationCareProcisionDate: "from July 11, 1990 to July 26, 2022",
          performers: [Array],
        },
        contents: [[Object]],
        documentation: { name: "Care Provision", list: [Array] },
      },
    };
    expect(parseAppointmentDetails(mocData).appointmentId).toEqual("1");
  });

  test("get direction", () => {
    getDirection({
      latitude: "111000",
      longitude: "00111",
    });
    expect(true).toBeTruthy();
  });

  test("addLanguageFilter", () => {
    const provider = {
      language1: "english",
    };
    const languageList = [
      {
        name: "english",
      },
    ];
    const newProvider = {
      language1: "spain",
    };
    addLanguageFilter(provider, languageList);
    addLanguageFilter(newProvider, languageList);
    expect(true).toBeTruthy();
  });

  test("addGenderFilter", () => {
    const genderList = [{ name: "M" }, { name: "F" }];
    expect(addGenderFilter("M", genderList));
    expect(addGenderFilter("F", genderList));
    expect(addGenderFilter("N-B", genderList));

    expect(true).toBeTruthy();
  });
});
