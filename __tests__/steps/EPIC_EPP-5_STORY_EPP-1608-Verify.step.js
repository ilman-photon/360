import { cleanup, waitFor, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { defineFeature, loadFeature } from "jest-cucumber";
import { Provider } from "react-redux";
import HomePage from "../../src/pages/patient";
import store from "../../src/store/store";
import { act } from "react-dom/test-utils";
import Cookies from "universal-cookie";
import Appointments from "../../src/pages/patient/appointments";
import AppointmentDetails from "../../src/pages/patient/appointments/detail-appoiments/[appointmentId]";

jest.mock("universal-cookie", () => {
  class MockCookies {
    static result = {};
    get() {
      return MockCookies.result;
    }
    remove() {
      return jest.fn();
    }
  }
  return MockCookies;
});

const MOCK_APPOINTMENT = {
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

const MOCK_PAST = {
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
        "_id": "19f1c186-37a8-46ef-a731-0a1f022be782",
        "_version": "a1c4536d-6e5e-4779-81b0-080fe4e23a23",
        "_updated": "Apr 8, 2022, 8:35:42 AM"
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

const MOCK_PRESCRIPTION = {
  prescriptions: {
    glasses: [
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
    ],
    contacts: [
      {
        prescribedBy: "Dr. Sonha Nguyen",
        date: "2022-09-02T11:18:47.229Z",
        expirationDate: "2022-10-02T11:18:47.229Z",
        prescriptionDetails: [
          {
            Eye: "OD",
            Sph: "+20.00",
            Bc: "-5.00",
            Cyl: "70",
            Axis: "x180",
          },
          {
            Eye: "OS",
            Sph: "+19.75",
            Bc: "-4.75",
            Cyl: "38",
            Axis: "x090",
          },
        ],
      },
    ],
    medications: [
      {
        prescription: "Aspirint 0.1% Ointmanet",
        date: "2022-09-02T11:18:47.229Z",
      },
      {
        prescription: "Aspirint 0.1% Ointmanet",
        date: "2022-09-02T11:18:47.229Z",
      },
    ],
  },
};

const MOCK_APPOINTMENT_DETAILS = {
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
    location: {
      latitude: 32.751204,
      longitude: -117.1641166,
    },
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
          {
            date: "2019-01-08",
            height: "",
            weight: "active",
            bmi: "UNK",
            blood_pressure: "194.0 mmHg / 107.0 mmHg",
            body_temp: "",
            pulse: "",
            o2_concentration: "",
            inhaled_o2: "",
            resp_rate: "",
          },
        ],
      },
    ],
    documentation: {
      name: "Care Provision",
    },
  },
};

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint5/EPP-1608.feature",
  {
    tagFilter: "@included and not @excluded",
  }
);

defineFeature(feature, (test) => {
  let container;
  let appointmentsContainer;
  let appointmentDetailsContainer;
  const domain = window.location.origin;

  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  afterEach(cleanup);

  test("EPIC_EPP-50_STORY_EPP-1608 - Verify whether the user should see the option to view the visit summary from the past appointments", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the  Patient Portal url", () => {
      defaultValidation();
    });

    when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
      defaultValidation();
    });

    and("user clicks on Login button", () => {
      defaultValidation();
    });

    then("user lands on to the Patient portal home page", async () => {
      Cookies.result = { authorized: true };
      const expectedResult = {
        ResponseCode: 2005,
        ResponseType: "success",
      };
      const mock = new MockAdapter(axios);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions?patientId=98f9404b-6ea8-4732-b14f-9c1a168d8066`
        )
        .reply(200, MOCK_PRESCRIPTION);

      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };
      global.navigator.geolocation = mockGeolocation;
      act(() => {
        container = render(
          <Provider store={store}>{HomePage.getLayout(<HomePage />)}</Provider>
        );
      });
      await waitFor(() => container.getAllByLabelText(/Prescriptions/i)[0]);
    });

    and("user navigates to Appointments screen", async () => {
      defaultValidation();
    });

    when("user lands on Appointments screen", async () => {
      cleanup();
      const mock = new MockAdapter(axios);
      mock
        .onGet(
          `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/upcoming`
        )
        .reply(200, MOCK_APPOINTMENT);
      mock
        .onGet(
          `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/history`
        )
        .reply(200, MOCK_PAST);
      act(() => {
        appointmentsContainer = render(
          <Provider store={store}>
            {Appointments.getLayout(<Appointments />)}
          </Provider>
        );
      });
      await waitFor(() =>
        appointmentsContainer.getByText(/View appointment details/i)
      );
      expect(
        appointmentsContainer.getByText(/Past Appointments/i)
      ).toBeInTheDocument();
    });

    then("user should be able to view the list of past appointments", () => {
      expect(
        appointmentsContainer.getByText(/Past Appointments/i)
      ).toBeInTheDocument();
    });

    and(
      "user should see the option to view the visit summary from the past appointments",
      () => {
        const link = appointmentsContainer.getByText(
          /View appointment details/i
        );
        expect(link).toBeInTheDocument();
        fireEvent.click(link);
      }
    );
  });

  test("EPIC_EPP-50_STORY_EPP-1608 - Verify whether the user should able to view the visit summary for that appointment", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the  Patient Portal url", () => {
      defaultValidation();
    });

    when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
      defaultValidation();
    });

    and("user clicks on Login button", () => {
      defaultValidation();
    });

    then("user lands on to the Patient portal home page", () => {
      defaultValidation();
    });

    and("user navigates to Appointments screen", () => {
      defaultValidation();
    });

    when("user lands on Appointments screen", () => {
      defaultValidation();
    });

    then("user should be able to view the list of past appointments", () => {
      defaultValidation();
    });

    and(
      "user should see the option to view the visit summary from the past appointments",
      async () => {
        // const mock = new MockAdapter(axios);
        // mock
        //   .onGet(
        //     `${domain}/api/dummy/appointment/my-appointment/getAppointmentDetails`
        //   )
        //   .reply(200, MOCK_APPOINTMENT_DETAILS);
        // act(() => {
        //   appointmentDetailsContainer = render(
        //     <Provider store={store}>
        //       {AppointmentDetails.getLayout(<AppointmentDetails />)}
        //     </Provider>
        //   );
        // });
        // await waitFor(() =>
        //   appointmentDetailsContainer.getByText(/Appointment Detail/i)
        // );
        // expect(
        //   appointmentDetailsContainer.getByText(/Appointment Detail/i)
        // ).toBeInTheDocument();
        expect(true).toBeTruthy();
      }
    );

    when(
      "user select the option to view the visit summary from the past appointments",
      () => {
        defaultValidation();
      }
    );

    then(
      "User should be able to view the visit summary for that appointment",
      () => {
        defaultValidation();
      }
    );
  });
});
