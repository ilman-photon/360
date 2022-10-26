import { act, fireEvent, render, waitFor } from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import { Provider } from "react-redux";
import Appointment from "../../src/pages/patient/appointment";
import store from "../../src/store/store";
import constants, { TEST_ID } from "../../src/utils/constants";
import mediaQuery from "css-mediaquery";
import { Login } from "../../src/components/organisms/Login/login";
import Appointments from "../../src/pages/patient/appointments";
import RescheduleAppointments from "../../src/pages/patient/appointments/[appointmentId]/reschedule";
import FilterResult from "../../src/components/molecules/FilterResult/filterResult";
import ScheduleAppointmentPage from "../../src/pages/patient/schedule-appointment";
const useRouter = jest.spyOn(require("next/router"), "useRouter");

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint5/EPP-1602.feature",
  {
    tagFilter: "@included and not @excluded",
  }
);

useRouter.mockReturnValue({
  back: jest.fn(),
  push: jest.fn(),
  query: {
    reschedule: true,
  },
  replace: jest.fn(),
});
window.scrollTo = jest.fn();

const providerList = [
  {
    providerId: "1",
    address: {
      addressLine1: "51 West 51st Street",
      addressLine2: "Floor 3, Suite 320 Midtown",
      city: "Florida",
      state: "FR",
      zipcode: "54231",
    },
    rating: "5",
    name: "Paul Wagner Md",
    phoneNumber: "(123) 123-4567",
    distance: "10 mi",
    image: "/doctor.png",
    from: "2022-09-19",
    to: "2022-09-24",
    availability: [
      {
        date: "2022-09-19",
        list: [
          {
            time: "11:30am",
            key: 12222,
          },
        ],
      },
      {
        date: "2022-09-20",
        list: [
          {
            time: "08:00am",
            key: 12223,
          },
          {
            time: "10:30am",
            key: 12224,
          },
          {
            time: "11:00am",
            key: 12225,
          },
          {
            time: "12:00pm",
            key: 12226,
          },
          {
            time: "13:00pm",
            key: 12227,
          },
          {
            time: "14:00pm",
            key: 12228,
          },
        ],
      },
      {
        date: "2022-09-21",
        list: [
          {
            time: "08:30am",
            key: 12229,
          },
          {
            time: "10:30am",
            key: 12230,
          },
        ],
      },
      {
        date: "2022-09-22",
        list: [
          {
            time: "09:30am",
            key: 12237,
          },
          {
            time: "11:00am",
            key: 12238,
          },
        ],
      },
      {
        date: "2022-09-23",
        list: [
          {
            time: "09:30am",
            key: 12239,
          },
        ],
      },
      {
        date: "2022-09-24",
        list: [
          {
            time: "09:30am",
            key: 12240,
          },
        ],
      },
    ],
    coordinate: {
      latitude: 32.751204,
      longitude: -117.1641166,
    },
  },
  {
    providerId: "2",
    address: {
      addressLine1: "51 West 51st Street",
      addressLine2: "Floor 3, Suite 320 Midtown",
      city: "Florida",
      state: "FR",
      zipcode: "54231",
    },
    rating: "5",
    name: "Paul Wagner Md",
    phoneNumber: "(123) 123-4567",
    distance: "10 mi",
    image: "/doctor.png",
    from: "2022-09-19",
    to: "2022-09-24",
    availability: [
      {
        date: "2022-09-19",
        list: [
          {
            time: "11:30am",
            key: 12222,
          },
        ],
      },
      {
        date: "2022-09-20",
        list: [
          {
            time: "08:00am",
            key: 12223,
          },
          {
            time: "10:30am",
            key: 12224,
          },
          {
            time: "11:00am",
            key: 12225,
          },
          {
            time: "12:00pm",
            key: 12226,
          },
          {
            time: "13:00pm",
            key: 12227,
          },
          {
            time: "14:00pm",
            key: 12228,
          },
        ],
      },
      {
        date: "2022-09-21",
        list: [
          {
            time: "08:30am",
            key: 12229,
          },
        ],
      },
      {
        date: "2022-09-22",
        list: [
          {
            time: "09:30am",
            key: 12237,
          },
          {
            time: "11:00am",
            key: 12238,
          },
        ],
      },
      {
        date: "2022-09-23",
        list: [
          {
            time: "09:30am",
            key: 12239,
          },
        ],
      },
      {
        date: "2022-09-24",
        list: [
          {
            time: "09:30am",
            key: 12240,
          },
        ],
      },
    ],
    coordinate: {
      latitude: 32.751204,
      longitude: -117.1641166,
    },
  },
  {
    providerId: "3",
    name: "Paul Wagner Md",
    address: {
      addressLine1: "51 West 51st Street",
      addressLine2: "Floor 3, Suite 320 Midtown",
      city: "Florida",
      state: "FR",
      zipcode: "54231",
    },
    rating: "5",
    phoneNumber: "(123) 123-4567",
    distance: "10 mi",
    image: "/doctor.png",
    from: "2022-09-19",
    to: "2022-09-24",
    availability: [
      {
        date: "2022-09-19",
        list: [
          {
            time: "11:30am",
            key: 12222,
          },
        ],
      },
      {
        date: "2022-09-20",
        list: [
          {
            time: "08:00am",
            key: 12223,
          },
          {
            time: "10:30am",
            key: 12224,
          },
          {
            time: "11:00am",
            key: 12225,
          },
          {
            time: "12:00pm",
            key: 12226,
          },
          {
            time: "13:00pm",
            key: 12227,
          },
          {
            time: "14:00pm",
            key: 12228,
          },
        ],
      },
      {
        date: "2022-09-21",
        list: [
          {
            time: "08:30am",
            key: 12229,
          },
          {
            time: "10:30am",
            key: 12230,
          },
        ],
      },
      {
        date: "2022-09-22",
        list: [
          {
            time: "09:30am",
            key: 12237,
          },
          {
            time: "11:00am",
            key: 12238,
          },
        ],
      },
      {
        date: "2022-09-23",
        list: [
          {
            time: "09:30am",
            key: 12239,
          },
        ],
      },
      {
        date: "2022-09-24",
        list: [
          {
            time: "09:30am",
            key: 12240,
          },
        ],
      },
    ],
    coordinate: {
      latitude: 32.751204,
      longitude: -117.1641166,
    },
  },
];

const upcoming = {
  "count": 1,
  "entities": [
    {
      "appointmentType": {
        "code": "Retina_checkup",
        "name": "Retina checkup"
      },
      "patient": {
        "firstName": "demo",
        "lastName": "nikita",
        "dob": "11/25/1992",
        "age": "29",
        "sex": "1",
        "patientDetails": {
          "isFlagNew": false,
          "isFlagInCollection": false,
          "isFlagBadCheck": false,
          "isFlagDeceased": false,
          "isFlagChartless": false,
          "_id": "bc5335d3-e802-47bc-afb5-d30241b4ea66",
          "_version": "209451a6-2b8b-4729-8c0a-2859beeef5b5",
          "_created": "Jul 4, 2022, 4:42:40 AM",
          "_updated": "Aug 25, 2022, 10:31:54 AM",
          "_createdBy": {
            "_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
            "_links": {
              "self": {
                "href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
              }
            }
          },
          "_updatedBy": {
            "_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
            "_links": {
              "self": {
                "href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
              }
            }
          }
        },
        "isEmergencyContactAvailable": false,
        "contactPrefrence": false,
        "status": "UPDATED",
        "_id": "fd7beec7-1a6a-49f2-afd9-ebca6fb78568",
        "_version": "22dc0908-8d27-46e4-b5ec-6035e7e11f33",
        "_created": "Jul 4, 2022, 4:42:40 AM",
        "_updated": "Aug 25, 2022, 10:31:54 AM",
        "_createdBy": {
          "_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
          "_links": {
            "self": {
              "href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
            }
          }
        },
        "_updatedBy": {
          "_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
          "_links": {
            "self": {
              "href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
            }
          }
        }
      },
      "provider": {
        "firstName": "Todd",
        "lastName": "Bellamy",
        "designation": "MBBS, MD",
        "inHouse": false,
        "_id": "c68ced42-dfad-452a-acf0-0cee3a066157",
        "_version": "585d1501-cfad-4123-b2c8-950a32403563",
        "_updated": "Feb 15, 2022, 7:07:35 AM"
      },
      "office": {
        "name": "Ballwin",
        "_id": "4cd970a0-8529-4b44-a4c5-99c9f4e8d078",
        "_version": "0c381712-420e-4705-bb6d-f0226ceb5b12",
        "_updated": "Sep 17, 2022, 10:14:52 AM",
        "_updatedBy": {
          "_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
          "_links": {
            "self": {
              "href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
            }
          }
        }
      },
      "appointmentDate": "09/15/2022",
      "appointmentTime": "11:10",
      "appointmentEndTime": "11:15",
      "appointmentLength": 5,
      "confirmationDetail": {
        "confirmationDate": "09/15/2022",
        "confirmationTime": "15:32",
        "confirmationBy": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
      },
      "appointmentHistory": [],
      "state": {
        "subState": {
          "subState": "WAITING_FOR_TECHNICIAN",
          "_id": "dbc73dfa-95c9-48dc-84e8-094ec1d98c6e",
          "_version": "d7596191-7ca5-4b72-9a61-a65923b349ca",
          "_created": "Sep 15, 2022, 10:02:54 AM",
          "_updated": "Sep 15, 2022, 10:02:54 AM",
          "_createdBy": {
            "_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
            "_links": {
              "self": {
                "href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
              }
            }
          }
        },
        "state": "CHECK_IN",
        "_id": "4fd867ef-5344-46df-9d0b-8467bc34a076",
        "_version": "348aac2a-180b-486d-858b-16edab665b5a",
        "_created": "Sep 15, 2022, 10:02:54 AM",
        "_updated": "Sep 15, 2022, 10:02:54 AM",
        "_createdBy": {
          "_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
          "_links": {
            "self": {
              "href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
            }
          }
        }
      },
      "newPatient": false,
      "insurancePayers": [],
      "override": false,
      "quickAppointmentflag": false,
      "status": "CREATED",
      "primaryMember": false,
      "confirmed": false,
      "_links": {
        "self": {
          "href": "/v1/appointments/ba852d09-da44-4b8d-8e83-63a27f5f540e"
        }
      },
      "_id": "ba852d09-da44-4b8d-8e83-63a27f5f540e",
      "_version": "03a4a6d7-2f14-4f6c-96b0-b8a67fa26505",
      "_created": "Sep 15, 2022, 10:02:54 AM",
      "_updated": "Sep 15, 2022, 10:02:54 AM",
      "_createdBy": {
        "_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
        "_links": {
          "self": {
            "href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
          }
        }
      },
      "_updatedBy": null
    }
  ],
  "_links": {
    "self": {
      "href": "/appointments?pageNo=0&pageSize=100"
    }
  }
};

const history = {
  "count": 1,
  "entities": [
    {
      "appointmentType": {
        "code": "Glaucome_Appointment",
        "name": "Glaucoma_Appointment"
      },
      "patient": {
        "firstName": "demo",
        "lastName": "nikita",
        "dob": "11/25/1992",
        "age": "29",
        "sex": "1",
        "patientDetails": {
          "isFlagNew": false,
          "isFlagInCollection": false,
          "isFlagBadCheck": false,
          "isFlagDeceased": false,
          "isFlagChartless": false,
          "_id": "bc5335d3-e802-47bc-afb5-d30241b4ea66",
          "_version": "209451a6-2b8b-4729-8c0a-2859beeef5b5",
          "_created": "Jul 4, 2022, 4:42:40 AM",
          "_updated": "Aug 25, 2022, 10:31:54 AM",
          "_createdBy": {
            "_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
            "_links": {
              "self": {
                "href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
              }
            }
          },
          "_updatedBy": {
            "_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
            "_links": {
              "self": {
                "href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
              }
            }
          }
        },
        "isEmergencyContactAvailable": false,
        "contactPrefrence": false,
        "specialService": {
          "isHearingImpaired": false,
          "isMobilityImpaired": false,
          "interpreterService": {
            "interpreterServiceRequired": false,
            "interpreterRequired": false
          }
        },
        "status": "UPDATED",
        "_id": "fd7beec7-1a6a-49f2-afd9-ebca6fb78568",
        "_version": "22dc0908-8d27-46e4-b5ec-6035e7e11f33",
        "_created": "Jul 4, 2022, 4:42:40 AM",
        "_updated": "Aug 25, 2022, 10:31:54 AM",
        "_createdBy": {
          "_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
          "_links": {
            "self": {
              "href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
            }
          }
        },
        "_updatedBy": {
          "_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
          "_links": {
            "self": {
              "href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
            }
          }
        }
      },
      "provider": {
        "firstName": "Steve",
        "lastName": "Adam",
        "designation": "Dr",
        "inHouse": false,
        "workPhone": "3219898898",
        "rating": 9,
        "profilePhoto": {
          "digitalAsset": {
            "uid": "d72b0b16-99ab-4ae4-aba3-13b81930b68a",
            "fileName": "test",
            "assetUrl": "/v1/patient",
            "_version": "d72b0b16-99ab-4ae4-aba3-13b81930b77a"
          }
        },
        "address": {
          "addressLine1": "800 14th St Apt B",
          "city": "Virginia Beach",
          "state": "VA",
          "zip": "23451"
        },
        "_id": "19f1c186-37a8-46ef-a731-0a1f022be782",
        "_version": "6b5fb285-bcca-4a3f-8a47-369fe2babf8b",
        "_updated": "Oct 17, 2022, 5:53:20 PM",
        "_updatedBy": {
          "_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
          "_links": {
            "self": {
              "href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
            }
          }
        }
      },
      "office": {
        "name": "Ballwin",
        "_id": "4cd970a0-8529-4b44-a4c5-99c9f4e8d078",
        "_version": "0c381712-420e-4705-bb6d-f0226ceb5b12",
        "_updated": "Sep 17, 2022, 10:14:52 AM",
        "_updatedBy": {
          "_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
          "_links": {
            "self": {
              "href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
            }
          }
        }
      },
      "appointmentDate": "09/15/2022",
      "appointmentTime": "19:20",
      "appointmentEndTime": "19:25",
      "appointmentLength": 5,
      "isConfirmed": true,
      "confirmationDetail": {
        "confirmationDate": "09/15/2022",
        "confirmationTime": "16:51",
        "confirmationBy": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
      },
      "appointmentHistory": [],
      "state": {
        "subState": {
          "subState": "UPDATED",
          "_id": "42dc9428-c7a0-4c71-94bb-b1240b45d0f5",
          "_version": "ccc0145a-0975-42c9-94b1-94028a834438",
          "_created": "Sep 15, 2022, 9:30:00 PM",
          "_updated": "Sep 15, 2022, 9:30:00 PM",
          "_createdBy": {
            "_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
            "_links": {
              "self": {
                "href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
              }
            }
          }
        },
        "state": "NO_SHOW",
        "_id": "5252e529-1d52-4490-981a-3693a9388a87",
        "_version": "aa52376a-93b8-4362-ac1a-c707b17b2d9d",
        "_created": "Sep 15, 2022, 11:21:05 AM",
        "_updated": "Sep 15, 2022, 9:30:00 PM",
        "_createdBy": {
          "_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
          "_links": {
            "self": {
              "href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
            }
          }
        },
        "_updatedBy": {
          "_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
          "_links": {
            "self": {
              "href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
            }
          }
        }
      },
      "notes": [],
      "allowCreate": false,
      "paymentMethod": {
        "noInsuranceInformation": {},
        "insuranceInfoUsedForBilling": {
          "financialClassBasedInformation": {}
        },
        "paymentMode": "SELF_PAY"
      },
      "appointmentNo": 1000000911,
      "newPatient": false,
      "insurancePayers": [],
      "override": false,
      "quickAppointmentflag": false,
      "isPrimaryMember": true,
      "status": "UPDATED",
      "_links": {
        "self": {
          "href": "/v1/appointments/e701cfa3-a968-4cb8-bdc4-8f0f0504584a"
        }
      },
      "_id": "e701cfa3-a968-4cb8-bdc4-8f0f0504584a",
      "_version": "73fc4151-63f8-41d8-9b14-56518724e2ae",
      "_created": "Sep 15, 2022, 11:21:05 AM",
      "_updated": "Sep 15, 2022, 9:30:00 PM",
      "_createdBy": {
        "_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
        "_links": {
          "self": {
            "href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
          }
        }
      },
      "_updatedBy": {
        "_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
        "_links": {
          "self": {
            "href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
          }
        }
      }
    },
  ]
}

const MOCK_SUGGESTION_DATA = {
  appointmentType: [
    {
      id: "1",
      name: "Eye Exam",
      description: "Test the health of your eye",
    },
    {
      id: "2",
      name: "Follow up",
      description: "See your doctor today",
    },
    {
      id: "3",
      name: "Comprehensive",
      description: "Get detailed eye exam",
    },
    {
      id: "4",
      name: "Contacts Only",
      description: "Get fitted for the right contacts",
    },
  ],
  insuranceCarrier: {
    general: [
      {
        id: "1",
        name: "I'm paying out of my pocket",
      },
      {
        id: "2",
        name: "skip and choose insurance later",
      },
      {
        id: "3",
        name: "Other Insurance",
      },
    ],
    popular: [
      {
        id: "4",
        name: "Aetna",
      },
      {
        id: "5",
        name: "Aetna",
      },
      {
        id: "6",
        name: "Blue Cross Blue Shield",
      },
      {
        id: "7",
        name: "Cigna",
      },
    ],
    all: [
      {
        id: "8",
        name: "Kaiser",
      },
    ],
  },
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

const mockSubmitFilter = {
  listOfProvider: [
    {
      providerId: "1",
      address: {
        addressLine1: "51 West 51st Street",
        addressLine2: "Floor 3, Suite 320 Midtown",
        city: "Florida",
        state: "FR",
        zipcode: "54231",
      },
      rating: "5",
      name: "Paul Wagner Md",
      phoneNumber: "(123) 123-4567",
      distance: "10 mi",
      image: "/doctor.png",
      from: "2022-09-19",
      to: "2022-09-24",
      availability: [
        {
          date: "2022-09-19",
          list: [
            {
              time: "11:30am",
              key: 12222,
            },
          ],
        },
        {
          date: "2022-09-20",
          list: [
            {
              time: "08:00am",
              key: 12223,
            },
            {
              time: "10:30am",
              key: 12224,
            },
            {
              time: "11:00am",
              key: 12225,
            },
            {
              time: "12:00pm",
              key: 12226,
            },
            {
              time: "01:00pm",
              key: 12227,
            },
            {
              time: "02:00pm",
              key: 12228,
            },
          ],
        },
        {
          date: "2022-09-21",
          list: [
            {
              time: "08:30am",
              key: 12229,
            },
            {
              time: "10:30am",
              key: 12230,
            },
            {
              time: "11:30am",
              key: 12231,
            },
            {
              time: "12:00pm",
              key: 12232,
            },
            {
              time: "01:30pm",
              key: 12233,
            },
            {
              time: "02:30pm",
              key: 12234,
            },
            {
              time: "03:30pm",
              key: 12235,
            },
            {
              time: "04:30pm",
              key: 12236,
            },
            ,
          ],
        },
        {
          date: "2022-09-22",
          list: [
            {
              time: "09:30am",
              key: 12237,
            },
            {
              time: "11:00am",
              key: 12238,
            },
          ],
        },
        {
          date: "2022-09-23",
          list: [
            {
              time: "09:30am",
              key: 12239,
            },
          ],
        },
        {
          date: "2022-09-24",
          list: [
            {
              time: "09:30am",
              key: 12240,
            },
          ],
        },
      ],
      coordinate: {
        latitude: 32.751204,
        longitude: -117.1641166,
      },
    },
    {
      providerId: "2",
      address: {
        addressLine1: "51 West 51st Street",
        addressLine2: "Floor 3, Suite 320 Midtown",
        city: "Florida",
        state: "FR",
        zipcode: "54231",
      },
      rating: "5",
      name: "Paul Wagner Nd",
      phoneNumber: "(123) 123-4567",
      distance: "10 mi",
      image: "/doctor.png",
      from: "2022-09-19",
      to: "2022-09-24",
      availability: [
        {
          date: "2022-09-19",
          list: [],
        },
        {
          date: "2022-09-20",
          list: [
            {
              time: "08:00am",
              key: 12223,
            },
            {
              time: "10:30am",
              key: 12224,
            },
            {
              time: "11:00am",
              key: 12225,
            },
            {
              time: "12:00pm",
              key: 12226,
            },
            {
              time: "01:00pm",
              key: 12227,
            },
            {
              time: "02:00pm",
              key: 12228,
            },
          ],
        },
        {
          date: "2022-09-21",
          list: [
            {
              time: "08:30am",
              key: 12229,
            },
            {
              time: "10:30am",
              key: 12230,
            },
            {
              time: "11:30am",
              key: 12231,
            },
            {
              time: "12:00pm",
              key: 12232,
            },
            {
              time: "01:30pm",
              key: 12233,
            },
            {
              time: "02:30pm",
              key: 12234,
            },
            {
              time: "03:30pm",
              key: 12235,
            },
            {
              time: "04:30pm",
              key: 12236,
            },
            ,
          ],
        },
        {
          date: "2022-09-22",
          list: [
            {
              time: "09:30am",
              key: 12237,
            },
            {
              time: "11:00am",
              key: 12238,
            },
          ],
        },
        {
          date: "2022-09-23",
          list: [],
        },
        {
          date: "2022-09-24",
          list: [
            {
              time: "09:30am",
              key: 12240,
            },
          ],
        },
      ],
      coordinate: {
        latitude: 32.751204,
        longitude: -117.1641166,
      },
    },
    {
      providerId: "3",
      name: "Paul Wagner Md",
      address: {
        addressLine1: "51 West 51st Street",
        addressLine2: "Floor 3, Suite 320 Midtown",
        city: "Florida",
        state: "FR",
        zipcode: "54231",
      },
      rating: "5",
      phoneNumber: "(123) 123-4567",
      distance: "10 mi",
      image: "/doctor.png",
      from: "2022-09-19",
      to: "2022-09-24",
      availability: [
        {
          date: "2022-09-19",
          list: [
            {
              time: "11:30am",
              key: 12222,
            },
          ],
        },
        {
          date: "2022-09-20",
          list: [
            {
              time: "08:00am",
              key: 12223,
            },
            {
              time: "10:30am",
              key: 12224,
            },
            {
              time: "11:00am",
              key: 12225,
            },
            {
              time: "12:00pm",
              key: 12226,
            },
            {
              time: "01:00pm",
              key: 12227,
            },
            {
              time: "02:00pm",
              key: 12228,
            },
          ],
        },
        {
          date: "2022-09-21",
          list: [
            {
              time: "08:30am",
              key: 12229,
            },
            {
              time: "10:30am",
              key: 12230,
            },
            {
              time: "11:30am",
              key: 12231,
            },
            {
              time: "12:00pm",
              key: 12232,
            },
            {
              time: "01:30pm",
              key: 12233,
            },
            {
              time: "02:30pm",
              key: 12234,
            },
            {
              time: "03:30pm",
              key: 12235,
            },
            {
              time: "04:30pm",
              key: 12236,
            },
            ,
          ],
        },
        {
          date: "2022-09-22",
          list: [
            {
              time: "09:30am",
              key: 12237,
            },
            {
              time: "11:00am",
              key: 12238,
            },
          ],
        },
        {
          date: "2022-09-23",
          list: [
            {
              time: "09:30am",
              key: 12239,
            },
          ],
        },
        {
          date: "2022-09-24",
          list: [],
        },
      ],
      coordinate: {
        latitude: 32.751204,
        longitude: -117.1641166,
      },
    },
  ],
  filterbyData: [
    {
      name: "Available Today",
      checked: false,
    },
    {
      name: "Language",
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

defineFeature(feature, (test) => {
  let container;
  const { APPOINTMENT_TEST_ID, SEARCH_PROVIDER_TEST_ID } = constants.TEST_ID;
  const mock = new MockAdapter(axios);

  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  function createMatchMedia(width) {
    return (query) => ({
      matches: mediaQuery.match(query, { width }),
      addListener: () => { },
      removeListener: () => { },
    });
  }

  async function isLoggedIn() {
    const mockOnLoginClicked = jest.fn((data, route, callback) => {
      callback({
        status: "success",
      });
    });
    act(() => {
      container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
    });
    const usernameField = container.getByLabelText("emailUserLabel");
    const passwordField = container.getByLabelText("passwordLabel");
    act(() => {
      fireEvent.change(usernameField, { target: { value: "wrongUserName" } });
      fireEvent.change(passwordField, { target: { value: "validPassword" } });
    });
    expect(usernameField.value).not.toEqual("validUsername");
    expect(passwordField.value).toEqual("validPassword");
    const login = container.getByRole("button", { name: /Login/i });
    fireEvent.click(login);

    const mock = new MockAdapter(axios);
    const expectedResult = {
      ResponseCode: 2001,
      ResponseType: "failure",
      userType: "patient",
    };
    mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
  }

  async function userInAppointmentsPage() {
    mock
      .onGet(
        `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/upcoming`
      )
      .reply(200, upcoming);
    mock
      .onGet(
        `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/history`
      )
      .reply(200, history);

    act(() => {
      container.rerender(
        <Provider store={store}>
          {Appointments.getLayout(<Appointments />)}
        </Provider>
      );
    });
    await waitFor(() => {
      container.getByText(/Upcoming appointments/i);
    });

    expect(container.getByText(/Upcoming appointments/i).textContent).toEqual(
      "Upcoming appointments"
    );
  }

  async function userSeeListAppointment() {
    await waitFor(() => {
      container.getByText(/Upcoming appointments/i);
    });

    expect(container.getByText(/Upcoming appointments/i).textContent).toEqual(
      "Upcoming appointments"
    );
  }

  async function userSeeRescheduleAndCancel() {
    const cancelBtn = await waitFor(
      () =>
        container.getAllByTestId(
          TEST_ID.APPOINTMENTS_TEST_ID.cancelAppointmentButton
        )[0]
    );
    const rescheduleBtn = await waitFor(
      () =>
        container.getAllByTestId(
          TEST_ID.APPOINTMENTS_TEST_ID.rescheduleAppointmentButton
        )[0]
    );
    expect(cancelBtn).toBeInTheDocument();
    expect(rescheduleBtn).toBeInTheDocument();
  }

  async function userClickReschedule() {
    const rescheduleButtons = await waitFor(() =>
      container.getAllByTestId(
        TEST_ID.APPOINTMENTS_TEST_ID.rescheduleAppointmentButton
      )
    );

    act(() => {
      fireEvent.click(rescheduleButtons[0]);
      container.rerender(
        <Provider store={store}>
          {RescheduleAppointments.getLayout(<RescheduleAppointments />)}
        </Provider>
      );
    });
    await waitFor(() => {
      container.getByText(/Reschedule Appointment/i);
      expect(
        container.getByText(/Reschedule Appointment/i)
      ).toBeInTheDocument();
    });
  }

  async function userViewLocationWithEdit() {
    await waitFor(() =>
      container.getByTestId(
        TEST_ID.SCHEDULE_APPOINTMENT_TEST_ID.APPOINTMENT_LOCATION.address
      )
    );
    const editButton = await waitFor(() =>
      container.getByTestId(
        TEST_ID.SCHEDULE_APPOINTMENT_TEST_ID.APPOINTMENT_LOCATION.editButton
      )
    );

    act(() => {
      fireEvent.click(editButton);
    });
  }

  async function userViewDateWithEdit() {
    await waitFor(() =>
      container.getByTestId(
        TEST_ID.SCHEDULE_APPOINTMENT_TEST_ID.APPOINTMENT_DETAILS.date
      )
    );
    const editButton = await waitFor(() =>
      container.getByTestId(
        TEST_ID.SCHEDULE_APPOINTMENT_TEST_ID.APPOINTMENT_DETAILS.editButton
      )
    );

    act(() => {
      fireEvent.click(editButton);
    });
  }

  async function userViewTimeSlotResult() {
    const mockGeolocation = {
      getCurrentPosition: jest.fn(),
      watchPosition: jest.fn(),
    };
    const domain = window.location.origin;
    mock
      .onGet(`${domain}/api/dummy/appointment/create-appointment/getSugestion`)
      .reply(200, MOCK_SUGGESTION_DATA);
    mock
      .onPost(`${domain}/api/dummy/appointment/create-appointment/submitFilter`)
      .reply(200, mockSubmitFilter);
    global.navigator.geolocation = mockGeolocation;
    window.matchMedia = createMatchMedia("1920px");
    act(() => {
      container.rerender(
        <Provider store={store}>
          {Appointment.getLayout(<Appointment />)}
        </Provider>
      );
    });
    await waitFor(() => {
      container.getByText(/City, state, or zip/i);
      expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
    });
  }

  async function userViewPurposeWithEdit() {
    const purposeInput = await waitFor(() =>
      container.getByTestId("select-purposes-of-visit")
    );
    act(() => {
      fireEvent.change(purposeInput, { target: { value: "Eye Exam" } });
    });
  }

  async function userViewInsuranceWithEdit() {
    const insuranceInput = await waitFor(() =>
      container.getByLabelText("Insurance Carrier")
    );
    act(() => {
      fireEvent.change(insuranceInput, { target: { value: "Aetna" } });
    });

    const searchBtn = await waitFor(() =>
      container.getByTestId(APPOINTMENT_TEST_ID.searchbtn)
    );
    fireEvent.click(searchBtn);

    const rangeDate = { startDate: "2022-10-10", endDate: "2022-10-15" };
    container.rerender(
      <FilterResult
        isDesktop={true}
        providerList={providerList}
        rangeDate={rangeDate}
        purposeOfVisitData={[]}
        insuranceCarrierData={[]}
        googleApiKey={"Test"}
        filterData={{
          location: "",
          date: "",
          purposeOfVisit: "",
          insuranceCarrier: "",
        }}
      />
    );
    expect(
      await waitFor(() =>
        container.getByTestId(APPOINTMENT_TEST_ID.FILTER_RESULT.container)
      )
    ).toBeInTheDocument();

    const timeslotButton = await waitFor(() =>
      container.getAllByTestId(SEARCH_PROVIDER_TEST_ID.hourButton)
    );
    act(() => {
      fireEvent.click(timeslotButton[0]);
    });
  }

  async function userNavigatesToSchedulePage() {
    act(() => {
      container.rerender(
        <Provider store={store}>
          {ScheduleAppointmentPage.getLayout(<ScheduleAppointmentPage />)}
        </Provider>
      );
    });
  }

  async function userViewScheduleButton() {
    await waitFor(() => container.getByText("Review Appointment Details"));

    const scheduleBtn = await waitFor(() =>
      container.getByText(/Schedule Appointment/i)
    );
    act(() => {
      fireEvent.click(scheduleBtn);
    });
  }

  async function userPromptedWithConfirmationDialog() {
    const dialogConfirmation = await waitFor(() =>
      container.getByText("Are you sure you want to reschedule?")
    );
    expect(dialogConfirmation).toBeInTheDocument();
  }

  async function userClickConfirmReschedule() {
    const confirmBtn = await waitFor(() =>
      container.getByTestId(
        TEST_ID.SCHEDULE_APPOINTMENT_TEST_ID.DIALOG_CONFIRMATION_RESCHEDULE
          .confirmBtn
      )
    );
    act(() => {
      fireEvent.click(confirmBtn);
    });
  }

  async function userClickDenyReschedule() {
    const denyBtn = await waitFor(() =>
      container.getByTestId(
        TEST_ID.SCHEDULE_APPOINTMENT_TEST_ID.CONFIRMATION_RESCHEDULE.denyBtn
      )
    );
    act(() => {
      fireEvent.click(denyBtn);
    });
  }

  test("EPIC_EPP-45_STORY_EPP-1602 - Verify user should receive an email based on their registered mail-id when user reschedule upcoming appointment list", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal url", () => {
      defaultValidation();
    });

    when("user is logged in to the application", () => {
      isLoggedIn();
    });

    and("user clicks to “Appointments” menu", async () => {
      defaultValidation();
    });

    then("user navigates to “Appointments” screen", () => {
      defaultValidation();
    });

    and("user lands on 'Appointments' screen", async () => {
      userInAppointmentsPage();
    });

    and("user should see list of upcoming appointment", async () => {
      userSeeListAppointment();
    });

    and("user should see reschedule and cancel each of them", async () => {
      userSeeRescheduleAndCancel();
    });

    and("user clicks on the reschedule an appointment", async () => {
      userClickReschedule();
    });

    and("user view the selected location and able to change", async () => {
      userViewLocationWithEdit();
    });

    and(
      "user view the selected Date of the appointment and able to change",
      async () => {
        userViewDateWithEdit();
      }
    );

    and("user view the selected time-slot and able to change", async () => {
      userViewTimeSlotResult();
    });

    and(
      "user view the selected purpose of visit and able to change",
      async () => {
        userViewPurposeWithEdit();
      }
    );

    and(
      "user view the selected Insurance Career and able to change",
      async () => {
        userViewInsuranceWithEdit();
      }
    );

    then("user navigates to review the updated details", async () => {
      userNavigatesToSchedulePage();
    });

    and("user view an option to reschedule the appointment", async () => {
      userViewScheduleButton();
    });

    and(
      "user prompted with a confirmation message “Are you sure you want to reschedule?” with option to confirm and deny",
      () => {
        userPromptedWithConfirmationDialog();
      }
    );

    and("user clicks on the confirm botton", () => {
      userClickConfirmReschedule();
    });

    and("user receive an email regarding the reschedule", () => {
      defaultValidation();
    });

    and(
      "user navigated to 'Appointments' screen to see the updated details under upcoming appointments",
      async () => {
        userInAppointmentsPage();
      }
    );
  });

  test("EPIC_EPP-45_STORY_EPP-1602 - Verify user should receive an email based on their registered phone number when user reshedulle upcoming appointment list", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal url", () => {
      defaultValidation();
    });

    when("user is logged in to the application", () => {
      isLoggedIn();
    });

    and("user clicks to “Appointments” menu", async () => {
      defaultValidation();
    });

    then("user navigates to “Appointments” screen", () => {
      defaultValidation();
    });

    and("user lands on 'Appointments' screen", async () => {
      userInAppointmentsPage();
    });

    and("user should see list of upcoming appointment", async () => {
      userSeeListAppointment();
    });

    and("user should see reschedule and cancel each of them", async () => {
      userSeeRescheduleAndCancel();
    });

    and("user clicks on the reschedule an appointment", async () => {
      userClickReschedule();
    });

    and("user view the selected location and able to change", async () => {
      userViewLocationWithEdit();
    });

    and(
      "user view the selected Date of the appointment and able to change",
      async () => {
        userViewDateWithEdit();
      }
    );

    and("user view the selected time-slot and able to change", async () => {
      userViewTimeSlotResult();
    });

    and(
      "user view the selected purpose of visit and able to change",
      async () => {
        userViewPurposeWithEdit();
      }
    );

    and(
      "user view the selected Insurance Career and able to change",
      async () => {
        userViewInsuranceWithEdit();
      }
    );

    then("user navigates to review the updated details", async () => {
      userNavigatesToSchedulePage();
    });

    and("user view an option to reschedule the appointment", async () => {
      userViewScheduleButton();
    });

    and(
      "user prompted with a confirmation message “Are you sure you want to reschedule?” with option to confirm and deny",
      () => {
        userPromptedWithConfirmationDialog();
      }
    );

    and("user clicks on the confirm botton", () => {
      userClickConfirmReschedule();
    });

    and("user receive an email regarding the reschedule", () => {
      defaultValidation();
    });

    and(
      "user navigated to 'Appointments' screen to see the updated details under upcoming appointments",
      async () => {
        userInAppointmentsPage();
      }
    );
  });

  test("EPIC_EPP-45_STORY_EPP-1602 - Verify user should receive an text message based on their registered phone number when user reshedulle upcoming appointment list", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal url", () => {
      defaultValidation();
    });

    when("user is logged in to the application", () => {
      isLoggedIn();
    });

    and("user clicks to “Appointments” menu", async () => {
      defaultValidation();
    });

    then("user navigates to “Appointments” screen", () => {
      defaultValidation();
    });

    and("user lands on 'Appointments' screen", async () => {
      userInAppointmentsPage();
    });

    and("user should see list of upcoming appointment", async () => {
      userSeeListAppointment();
    });

    and("user should see reschedule and cancel each of them", async () => {
      userSeeRescheduleAndCancel();
    });

    and("user clicks on the reschedule an appointment", async () => {
      userClickReschedule();
    });

    and("user view the selected location and able to change", async () => {
      userViewLocationWithEdit();
    });

    and(
      "user view the selected Date of the appointment and able to change",
      async () => {
        userViewDateWithEdit();
      }
    );

    and("user view the selected time-slot and able to change", async () => {
      userViewTimeSlotResult();
    });

    and(
      "user view the selected purpose of visit and able to change",
      async () => {
        userViewPurposeWithEdit();
      }
    );

    and(
      "user view the selected Insurance Career and able to change",
      async () => {
        userViewInsuranceWithEdit();
      }
    );

    then("user navigates to review the updated details", async () => {
      userNavigatesToSchedulePage();
    });

    and("user view an option to reschedule the appointment", async () => {
      userViewScheduleButton();
    });

    and(
      "user prompted with a confirmation message “Are you sure you want to reschedule?” with option to confirm and deny",
      () => {
        userPromptedWithConfirmationDialog();
      }
    );

    and("user clicks on the confirm botton", () => {
      userClickConfirmReschedule();
    });

    and(
      "user receive the text message regarding the rescheduled Appointment",
      () => {
        defaultValidation();
      }
    );

    and(
      "user navigated to 'Appointments' screen to see the updated details under upcoming appointments",
      async () => {
        userInAppointmentsPage();
      }
    );
  });

  test('EPIC_EPP-45_STORY_EPP-1602 - Verify the user is able to see the "confirm and deny" option', ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal url", () => {
      defaultValidation();
    });

    when("user is logged in to the application", () => {
      isLoggedIn();
    });

    and("user clicks to “Appointments” menu", async () => {
      defaultValidation();
    });

    then("user navigates to “Appointments” screen", () => {
      defaultValidation();
    });

    and("user lands on 'Appointments' screen", async () => {
      userInAppointmentsPage();
    });

    and("user should see list of upcoming appointment", async () => {
      userSeeListAppointment();
    });

    and("user should see reschedule and cancel each of them", async () => {
      userSeeRescheduleAndCancel();
    });

    and("user clicks on the reschedule an appointment", async () => {
      userClickReschedule();
    });

    and("user view the selected location and able to change", async () => {
      userViewLocationWithEdit();
    });

    and(
      "user view the selected Date of the appointment and able to change",
      async () => {
        userViewDateWithEdit();
      }
    );

    and("user view the selected time-slot and able to change", async () => {
      userViewTimeSlotResult();
    });

    and(
      "user view the selected purpose of visit and able to change",
      async () => {
        userViewPurposeWithEdit();
      }
    );

    and(
      "user view the selected Insurance Career and able to change",
      async () => {
        userViewInsuranceWithEdit();
      }
    );

    then("user navigates to review the updated details", async () => {
      userNavigatesToSchedulePage();
    });

    and("user view an option to reschedule the appointment", async () => {
      userViewScheduleButton();
    });

    and(
      "user prompted with a confirmation message “Are you sure you want to reschedule?” with an option to confirm and deny",
      () => {
        userPromptedWithConfirmationDialog();
      }
    );
  });

  test("EPIC_EPP-45_STORY_EPP-1602 - Verify user should be able to deny and gets redirected back to the “Appointments” screen when the user reschedules the upcoming appointment list", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal url", () => {
      defaultValidation();
    });

    when("user is logged in to the application", () => {
      isLoggedIn();
    });

    and("user clicks to “Appointments” menu", async () => {
      defaultValidation();
    });

    then("user navigates to “Appointments” screen", () => {
      defaultValidation();
    });

    and("user lands on 'Appointments' screen", async () => {
      userInAppointmentsPage();
    });

    and("user should see list of upcoming appointment", async () => {
      userSeeListAppointment();
    });

    and("user should see reschedule and cancel each of them", async () => {
      userSeeRescheduleAndCancel();
    });

    and("user clicks on the reschedule an appointment", async () => {
      userClickReschedule();
    });

    and("user view the selected location and able to change", async () => {
      userViewLocationWithEdit();
    });

    and(
      "user view the selected Date of the appointment and able to change",
      async () => {
        userViewDateWithEdit();
      }
    );

    and("user view the selected time-slot and able to change", async () => {
      userViewTimeSlotResult();
    });

    and(
      "user view the selected purpose of visit and able to change",
      async () => {
        userViewPurposeWithEdit();
      }
    );

    and(
      "user view the selected Insurance Career and able to change",
      async () => {
        userViewInsuranceWithEdit();
      }
    );

    then("user navigates to review the updated details", async () => {
      userNavigatesToSchedulePage();
    });

    and("user view an option to reschedule the appointment", async () => {
      userViewScheduleButton();
    });

    and(
      "user prompted with a confirmation message “Are you sure you want to reschedule?” with option to confirm and deny",
      () => {
        userPromptedWithConfirmationDialog();
      }
    );

    and("user clicks on the Deny button", () => {
      userClickDenyReschedule();
    });

    and(
      "user navigated to the 'Appointments' screen to see the updated details under upcoming appointments",
      () => {
        userInAppointmentsPage();
      }
    );
  });

  test("EPIC_EPP-45_STORY_EPP-1602 - Verify user should be able to deny and gets redirected back to “Appointments” screen when user reschedule upcoming appointment list within 3 seconds", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal url", () => {
      defaultValidation();
    });

    when("user is logged in to the application", () => {
      isLoggedIn();
    });

    and("user clicks to “Appointments” menu", async () => {
      defaultValidation();
    });

    then("user navigates to “Appointments” screen", () => {
      defaultValidation();
    });

    and("user lands on 'Appointments' screen", async () => {
      userInAppointmentsPage();
    });

    and("user should see list of upcoming appointment", async () => {
      userSeeListAppointment();
    });

    and("user should see reschedule and cancel each of them", async () => {
      userSeeRescheduleAndCancel();
    });

    and("user clicks on the reschedule an appointment", async () => {
      userClickReschedule();
    });

    and("user view the selected location and able to change", async () => {
      userViewLocationWithEdit();
    });

    and(
      "user view the selected Date of the appointment and able to change",
      async () => {
        userViewDateWithEdit();
      }
    );

    and("user view the selected time-slot and able to change", async () => {
      userViewTimeSlotResult();
    });

    and(
      "user view the selected purpose of visit and able to change",
      async () => {
        userViewPurposeWithEdit();
      }
    );

    and(
      "user view the selected Insurance Career and able to change",
      async () => {
        userViewInsuranceWithEdit();
      }
    );

    then("user navigates to review the updated details", async () => {
      userNavigatesToSchedulePage();
    });

    and("user view an option to reschedule the appointment", async () => {
      userViewScheduleButton();
    });

    and(
      "user prompted with a confirmation message “Are you sure you want to reschedule?” with option to confirm and deny",
      () => {
        userPromptedWithConfirmationDialog();
      }
    );

    and("user clicks on the confirm botton", () => {
      userClickConfirmReschedule();
    });

    and("user receive an email regarding the reschedule", () => {
      defaultValidation();
    });

    and(
      "user navigated to 'Appointments' screen to see the updated details under upcoming appointments",
      async () => {
        userInAppointmentsPage();
      }
    );

    and(/^User should see the page loads within (\d+) seconds$/, (arg0) => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-45_STORY_EPP-1602 - Verify user able to see “Are you sure you want to reschedule?” as a confirmation message", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal url", () => {
      defaultValidation();
    });

    when("user is logged in to the application", () => {
      isLoggedIn();
    });

    and("user clicks to “Appointments” menu", async () => {
      defaultValidation();
    });

    then("user navigates to “Appointments” screen", () => {
      defaultValidation();
    });

    and("user lands on 'Appointments' screen", async () => {
      userInAppointmentsPage();
    });

    and("user should see list of upcoming appointment", async () => {
      userSeeListAppointment();
    });

    and("user should see reschedule and cancel each of them", async () => {
      userSeeRescheduleAndCancel();
    });

    and("user clicks on the reschedule an appointment", async () => {
      userClickReschedule();
    });

    and("user view the selected location and able to change", async () => {
      userViewLocationWithEdit();
    });

    and(
      "user view the selected Date of the appointment and able to change",
      async () => {
        userViewDateWithEdit();
      }
    );

    and("user view the selected time-slot and able to change", async () => {
      userViewTimeSlotResult();
    });

    and(
      "user view the selected purpose of visit and able to change",
      async () => {
        userViewPurposeWithEdit();
      }
    );

    and(
      "user view the selected Insurance Career and able to change",
      async () => {
        userViewInsuranceWithEdit();
      }
    );

    then("user navigates to review the updated details", async () => {
      userNavigatesToSchedulePage();
    });

    and("user view an option to reschedule the appointment", async () => {
      userViewScheduleButton();
    });

    and(
      "user prompted with a confirmation message “Are you sure you want to reschedule?” with option to confirm and deny",
      () => {
        userPromptedWithConfirmationDialog();
      }
    );

    and("user clicks on the confirm botton", () => {
      userClickConfirmReschedule();
    });

    and(
      "user receive an email and text message regarding the rescheduled Appointment",
      () => {
        defaultValidation();
      }
    );

    when("user selected on their preferred method of communication", () => {
      defaultValidation();
    });

    and(
      "user navigated to 'Appointments' screen to see the updated details under upcoming appointments",
      () => {
        userInAppointmentsPage();
      }
    );
  });

  test("EPIC_EPP-45_STORY_EPP-1602 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal url", () => {
      defaultValidation();
    });

    when("user is logged in to the application", () => {
      isLoggedIn();
    });

    and("user clicks to “Appointments” menu", async () => {
      defaultValidation();
    });

    then("user navigates to “Appointments” screen", () => {
      defaultValidation();
    });

    and("user lands on 'Appointments' screen", async () => {
      userInAppointmentsPage();
    });

    and("user should see list of upcoming appointment", async () => {
      userSeeListAppointment();
    });

    and("user should see reschedule and cancel each of them", async () => {
      userSeeRescheduleAndCancel();
    });

    and("user clicks on the reschedule an appointment", async () => {
      userClickReschedule();
    });

    and("user view the selected location and able to change", async () => {
      userViewLocationWithEdit();
    });

    and(
      "user view the selected Date of the appointment and able to change",
      async () => {
        userViewDateWithEdit();
      }
    );

    and("user view the selected time-slot and able to change", async () => {
      userViewTimeSlotResult();
    });

    and(
      "user view the selected purpose of visit and able to change",
      async () => {
        userViewPurposeWithEdit();
      }
    );

    and(
      "user view the selected Insurance Career and able to change",
      async () => {
        userViewInsuranceWithEdit();
      }
    );

    then("user navigates to review the updated details", async () => {
      userNavigatesToSchedulePage();
    });

    and("user view an option to reschedule the appointment", async () => {
      userViewScheduleButton();
    });

    and(
      "user prompted with a confirmation message “Are you sure you want to reschedule?” with option to confirm and deny",
      () => {
        userPromptedWithConfirmationDialog();
      }
    );

    and("user clicks on the confirm botton", () => {
      userClickConfirmReschedule();
    });

    and("user receive an email regarding the reschedule", () => {
      defaultValidation();
    });

    and(
      "user navigated to 'Appointments' screen to see the updated details under upcoming appointments",
      async () => {
        userInAppointmentsPage();
      }
    );

    and("the internet service is unavailable", () => {
      defaultValidation();
    });

    then("user should see the appropriate error message", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-45_STORY_EPP-1602 - Negative Test Cases-Verify  when the service is unavailable", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal url", () => {
      defaultValidation();
    });

    when("user is logged in to the application", () => {
      isLoggedIn();
    });

    and("user clicks to “Appointments” menu", async () => {
      defaultValidation();
    });

    then("user navigates to “Appointments” screen", () => {
      defaultValidation();
    });

    and("user lands on 'Appointments' screen", async () => {
      userInAppointmentsPage();
    });

    and("user should see list of upcoming appointment", async () => {
      userSeeListAppointment();
    });

    and("user should see reschedule and cancel each of them", async () => {
      userSeeRescheduleAndCancel();
    });

    and("user clicks on the reschedule an appointment", async () => {
      userClickReschedule();
    });

    and("user view the selected location and able to change", async () => {
      userViewLocationWithEdit();
    });

    and(
      "user view the selected Date of the appointment and able to change",
      async () => {
        userViewDateWithEdit();
      }
    );

    and("user view the selected time-slot and able to change", async () => {
      userViewTimeSlotResult();
    });

    and(
      "user view the selected purpose of visit and able to change",
      async () => {
        userViewPurposeWithEdit();
      }
    );

    and(
      "user view the selected Insurance Career and able to change",
      async () => {
        userViewInsuranceWithEdit();
      }
    );

    then("user navigates to review the updated details", async () => {
      userNavigatesToSchedulePage();
    });

    and("user view an option to reschedule the appointment", async () => {
      userViewScheduleButton();
    });

    and(
      "user prompted with a confirmation message “Are you sure you want to reschedule?” with option to confirm and deny",
      () => {
        userPromptedWithConfirmationDialog();
      }
    );

    and("user clicks on the confirm botton", () => {
      userClickConfirmReschedule();
    });

    and("user receive an email regarding the reschedule", () => {
      defaultValidation();
    });

    and(
      "user navigated to 'Appointments' screen to see the updated details under upcoming appointments",
      async () => {
        userInAppointmentsPage();
      }
    );

    and("the service is unavailable", () => {
      defaultValidation();
    });

    then("user should see the appropriate error message", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-45_STORY_EPP-1602 - Negative Test Cases-Verify User navigates to “Appointments” screen when user refresh the page", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal url", () => {
      defaultValidation();
    });

    when("user is logged in to the application", () => {
      isLoggedIn();
    });

    and("user clicks to “Appointments” menu", async () => {
      defaultValidation();
    });

    then("user navigates to “Appointments” screen", () => {
      defaultValidation();
    });

    and("user lands on 'Appointments' screen", async () => {
      userInAppointmentsPage();
    });

    and("user should see list of upcoming appointment", async () => {
      userSeeListAppointment();
    });

    and("user should see reschedule and cancel each of them", async () => {
      userSeeRescheduleAndCancel();
    });

    and("user clicks on the reschedule an appointment", async () => {
      userClickReschedule();
    });

    and("user view the selected location and able to change", async () => {
      userViewLocationWithEdit();
    });

    and(
      "user view the selected Date of the appointment and able to change",
      async () => {
        userViewDateWithEdit();
      }
    );

    and("user view the selected time-slot and able to change", async () => {
      userViewTimeSlotResult();
    });

    and(
      "user view the selected purpose of visit and able to change",
      async () => {
        userViewPurposeWithEdit();
      }
    );

    and(
      "user view the selected Insurance Career and able to change",
      async () => {
        userViewInsuranceWithEdit();
      }
    );

    then("user navigates to review the updated details", async () => {
      userNavigatesToSchedulePage();
    });

    and("user view an option to reschedule the appointment", async () => {
      userViewScheduleButton();
    });

    and(
      "user prompted with a confirmation message “Are you sure you want to reschedule?” with option to confirm and deny",
      () => {
        userPromptedWithConfirmationDialog();
      }
    );

    and("user clicks on the confirm botton", () => {
      userClickConfirmReschedule();
    });

    and("user receive an email regarding the reschedule", () => {
      defaultValidation();
    });

    and(
      "user navigated to 'Appointments' screen to see the updated details under upcoming appointments",
      async () => {
        userInAppointmentsPage();
      }
    );

    when("User refresh the page", () => {
      defaultValidation();
    });

    then("User navigates to “Appointments” screen", () => {
      userInAppointmentsPage();
    });
  });

  test("EPIC_EPP-45_STORY_EPP-1602 - Verify User should not see the any errors script when user clicks F12 on the console", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal url", () => {
      defaultValidation();
    });

    when("user is logged in to the application", () => {
      isLoggedIn();
    });

    and("user clicks to “Appointments” menu", () => {
      defaultValidation();
    });

    then("user navigates to “Appointments” screen", () => {
      defaultValidation();
    });

    and("user lands on 'Appointments' screen", () => {
      userInAppointmentsPage();
    });

    and("user should see list of upcoming appointment", async () => {
      userSeeListAppointment();
    });

    and("user should see reschedule and cancel each of them", async () => {
      userSeeRescheduleAndCancel();
    });

    and("user clicks on the reschedule an appointment", async () => {
      userClickReschedule();
    });

    and("user view the selected location and able to change", async () => {
      userViewLocationWithEdit();
    });

    and(
      "user view the selected Date of the appointment and able to change",
      async () => {
        userViewDateWithEdit();
      }
    );

    and("user view the selected time-slot and able to change", async () => {
      userViewTimeSlotResult();
    });

    and(
      "user view the selected purpose of visit and able to change",
      async () => {
        userViewPurposeWithEdit();
      }
    );

    and(
      "user view the selected Insurance Career and able to change",
      async () => {
        userViewInsuranceWithEdit();
      }
    );

    then("user navigates to review the updated details", async () => {
      userNavigatesToSchedulePage();
    });

    and("user view an option to reschedule the appointment", async () => {
      userViewScheduleButton();
    });

    and(
      "user prompted with a confirmation message “Are you sure you want to reschedule?” with option to confirm and deny",
      () => {
        userPromptedWithConfirmationDialog();
      }
    );

    and("user clicks on the confirm botton", () => {
      userClickConfirmReschedule();
    });

    and("user receive an email regarding the reschedule", () => {
      defaultValidation();
    });

    and(
      "user navigated to 'Appointments' screen to see the updated details under upcoming appointments",
      async () => {
        userInAppointmentsPage();
      }
    );

    when(/^user clicks on F(\d+) on the console$/, (arg0) => {
      defaultValidation();
    });

    then("user should not to see any errors script", () => {
      defaultValidation();
    });
  });
});
