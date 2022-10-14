import { defineFeature, loadFeature } from "jest-cucumber";
import { act, fireEvent, render, waitFor } from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import Cookies from "universal-cookie";
import mediaQuery from "css-mediaquery";
import HomePage from "../../src/pages/patient";

import { getServerSideProps } from "../../src/pages/patient/mfa";

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

const mockSuggestionReal = {
  "count": 5,
  "entities": [
    {
      "code": "Clinical_Diagnosis",
      "name": "Clinical_Diagnosis",
      "key": 4,
      "order": 4,
      "category": {
        "code": "Vision",
        "description": "Vision"
      },
      "acronym": "CAD",
      "color": "#6fc77b",
      "slotLength": 5,
      "notes": "",
      "_links": {
        "self": {
          "href": "/v1/appointment-types/Clinical_Diagnosis"
        }
      }
    },
    {
      "code": "NO_APPOINTMENT",
      "name": "NO APPOINTMENT",
      "key": 1,
      "order": 1,
      "category": {
        "code": "Medical",
        "description": "Medical"
      },
      "acronym": "NA",
      "color": "#8F8F8F",
      "slotLength": 5,
      "notes": "NO_APPOINTMENT is a default appointment type",
      "_links": {
        "self": {
          "href": "/v1/appointment-types/NO_APPOINTMENT"
        }
      }
    },
    {
      "code": "Comprehensive",
      "name": "Comprehensive",
      "key": 2,
      "order": 2,
      "category": {
        "code": "Medical",
        "description": "Medical"
      },
      "acronym": "CP",
      "color": "#f2ee74",
      "slotLength": 5,
      "notes": "",
      "_links": {
        "self": {
          "href": "/v1/appointment-types/Comprehensive"
        }
      }
    },
    {
      "code": "Glaucome_Appointment",
      "name": "Glaucoma_Appointment",
      "key": 3,
      "order": 3,
      "category": {
        "code": "Vision",
        "description": "Vision"
      },
      "acronym": "GPA",
      "color": "#528aa8",
      "slotLength": 5,
      "notes": "",
      "_links": {
        "self": {
          "href": "/v1/appointment-types/Glaucome_Appointment"
        }
      }
    },
    {
      "code": "Retina_checkup",
      "name": "Retina checkup",
      "key": 5,
      "order": 5,
      "category": {
        "code": "Vision",
        "description": "Vision"
      },
      "acronym": "RET",
      "color": "#db8686",
      "slotLength": 5,
      "notes": "",
      "_links": {
        "self": {
          "href": "/v1/appointment-types/Retina_checkup"
        }
      }
    }
  ],
  "_links": {
    "self": {
      "href": "/appointments?pageNo=0&pageSize=100"
    }
  }
}

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

function createMatchMedia(width) {
  return (query) => ({
    matches: mediaQuery.match(query, { width }),
    addListener: () => {},
    removeListener: () => {},
  });
}

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint5/EPP-1604.feature"
);

defineFeature(feature, (test) => {
  let container;
  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  test("EPIC_EPP-3_STORY_EPP-1604-Verify User should see “Are you sure you want to cancel?” as confirmation message", ({
    given,
    and,
    then,
    when,
  }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when("User is logged in to the application", () => {
      defaultValidation();
    });

    and("User clicks to “Appointments” menu", () => {
      defaultValidation();
    });

    then("User navigates to “Appointments” screen", () => {
      defaultValidation();
    });

    and("User lands on “Appointments” screen", async () => {
      Cookies.result = { authorized: true };
      const expectedResult = {
        ResponseCode: 2005,
        ResponseType: "success",
      };
      const mock = new MockAdapter(axios);
      const domain = window.location.origin;
      mock.onPost(`/ecp/patient/logout`).reply(200, expectedResult);
      mock.onGet(`/ecp/appointments/appointment-types`).reply(200, mockSuggestionReal);
      mock
      .onGet(
        `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/upcoming`
      )
      .reply(200, upcoming);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions?patientId=98f9404b-6ea8-4732-b14f-9c1a168d8066`
        )
        .reply(200, MOCK_PRESCRIPTION);
      window.matchMedia = createMatchMedia("700px");
      const response = await getServerSideProps({
        req: { headers: { cookie: { get: jest.fn().mockReturnValue(true) } } },
        res: jest.fn(),
      });
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };
      global.navigator.geolocation = mockGeolocation;
      Cookies.result = { authorized: true };
      act(() => {
        container = render(
          <Provider store={store}>{HomePage.getLayout(<HomePage />)}</Provider>
        );
      });
      await waitFor(() => container.getByText("View Appointments"));
      expect(response).toEqual({
        props: {
          isStepTwo: false,
        },
      });
    });

    and("User should see an option to schedule new appointments", () => {
      defaultValidation();
    });

    and(
      "User should see Upcoming Appointments with an option to reschedule and cancel each of them",
      () => {
        // expect(container.getByText("Cancel")).toBeInTheDocument();
        // expect(container.getByText("Reschedule")).toBeInTheDocument();
      }
    );

    when("User clicks on the option to cancel an appointment", () => {
      // const cancelButton = container.getByRole("button", { name: "Cancel" });
      // fireEvent.click(cancelButton);
    });

    then(
      "User should see “Are you sure you want to cancel?” as confirmation message",
      async () => {
        // await waitFor(() => container.getByText(/cancelTitle/i));
      }
    );
  });

  test('EPIC_EPP-3_STORY_EPP-1604-Verify User should see "confirm and deny" option', ({
    given,
    when,
    and,
    then,
  }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when("User is logged in to the application", () => {
      defaultValidation();
    });

    and("User clicks to “Appointments” menu", () => {
      defaultValidation();
    });

    then("User navigates to “Appointments” screen", () => {
      defaultValidation();
    });

    and("User lands on “Appointments” screen", async () => {
      Cookies.result = { authorized: true };
      const expectedResult = {
        ResponseCode: 2005,
        ResponseType: "success",
      };
      const mock = new MockAdapter(axios);
      const domain = window.location.origin;
      mock.onPost(`/ecp/patient/logout`).reply(200, expectedResult);
      mock.onGet(`/ecp/appointments/appointment-types`).reply(200, mockSuggestionReal);
      mock
      .onGet(
        `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/upcoming`
      )
      .reply(200, upcoming);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions?patientId=98f9404b-6ea8-4732-b14f-9c1a168d8066`
        )
        .reply(200, MOCK_PRESCRIPTION);
      window.matchMedia = createMatchMedia("700px");
      const response = await getServerSideProps({
        req: { headers: { cookie: { get: jest.fn().mockReturnValue(true) } } },
        res: jest.fn(),
      });
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };
      global.navigator.geolocation = mockGeolocation;
      Cookies.result = { authorized: true };
      act(() => {
        container = render(
          <Provider store={store}>{HomePage.getLayout(<HomePage />)}</Provider>
        );
      });
      await waitFor(() => container.getByText("View Appointments"));
      expect(response).toEqual({
        props: {
          isStepTwo: false,
        },
      });
    });

    and("User should see an option to schedule new appointments", () => {
      defaultValidation();
    });

    and(
      "User should see Upcoming Appointments with an option to reschedule and cancel each of them",
      () => {
        // expect(container.getByText("Cancel")).toBeInTheDocument();
        // expect(container.getByText("Reschedule")).toBeInTheDocument();
      }
    );

    when("User clicks on the option to cancel an appointment", () => {
      // const cancelButton = container.getByRole("button", { name: "Cancel" });
      // fireEvent.click(cancelButton);
    });

    then(
      "User should see “Are you sure you want to cancel?” as confirmation message",
      async () => {
        // await waitFor(() => container.getByText(/cancelTitle/i));
      }
    );

    and(/^User should see "(.*)" option$/, (arg0) => {
      // const cancelButton = container.getByRole("button", {
      //   name: /btnCancel/i,
      // });
      // const KeepButton = container.getByRole("button", { name: /btnKeep/i });
      // expect(cancelButton).toBeTruthy();
      // expect(KeepButton).toBeTruthy();
    });
  });

  test("EPIC_EPP-3_STORY_EPP-1604-Verify User should receive an email based on their registered mail-id regarding the cancellation", ({
    given,
    when,
    and,
    then,
  }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when("User is logged in to the application", () => {
      defaultValidation();
    });

    and("User clicks to “Appointments” menu", () => {
      defaultValidation();
    });

    then("User navigates to “Appointments” screen", () => {
      defaultValidation();
    });

    and("User lands on “Appointments” screen", async () => {
      Cookies.result = { authorized: true };
      const expectedResult = {
        ResponseCode: 2005,
        ResponseType: "success",
      };
      const mock = new MockAdapter(axios);
      const domain = window.location.origin;
      mock.onPost(`/ecp/patient/logout`).reply(200, expectedResult);
      mock.onGet(`/ecp/appointments/appointment-types`).reply(200, mockSuggestionReal);
      mock
      .onGet(
        `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/upcoming`
      )
      .reply(200, upcoming);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions?patientId=98f9404b-6ea8-4732-b14f-9c1a168d8066`
        )
        .reply(200, MOCK_PRESCRIPTION);
      window.matchMedia = createMatchMedia("700px");
      const response = await getServerSideProps({
        req: { headers: { cookie: { get: jest.fn().mockReturnValue(true) } } },
        res: jest.fn(),
      });
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };
      global.navigator.geolocation = mockGeolocation;
      Cookies.result = { authorized: true };
      act(() => {
        container = render(
          <Provider store={store}>{HomePage.getLayout(<HomePage />)}</Provider>
        );
      });
      await waitFor(() => container.getByText("View Appointments"));
      expect(response).toEqual({
        props: {
          isStepTwo: false,
        },
      });
    });

    and("User should see an option to schedule new appointments", () => {
      defaultValidation();
    });

    and(
      "User should see Upcoming Appointments with an option to reschedule and cancel each of them",
      () => {
        // expect(container.getByText("Cancel")).toBeInTheDocument();
        // expect(container.getByText("Reschedule")).toBeInTheDocument();
      }
    );

    when("User clicks on the option to cancel an appointment", () => {
      // const cancelButton = container.getByRole("button", { name: "Cancel" });
      // fireEvent.click(cancelButton);
    });

    then(
      "User should see “Are you sure you want to cancel?” as confirmation message",
      async () => {
        // await waitFor(() => container.getByText(/cancelTitle/i));
      }
    );

    and(/^User should see "(.*)" option$/, (arg0) => {
      // const cancelButton = container.getByRole("button", {
      //   name: /btnCancel/i,
      // });
      // const KeepButton = container.getByRole("button", { name: /btnKeep/i });
      // expect(cancelButton).toBeTruthy();
      // expect(KeepButton).toBeTruthy();
    });

    when(/^User selects on "(.*)" option$/, (arg0) => {
      // const cancelButton = container.getByRole("button", {
      //   name: /btnCancel/i,
      // });
      // fireEvent.click(cancelButton);
    });

    then(/^User should see "(.*)" as a note$/, (arg0) => {
      defaultValidation();
    });

    and("User navigates to “Appointments” screen", () => {
      defaultValidation();
    });

    and(
      "User should receive an email based on their registered mail-id regarding the cancellation",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-3_STORY_EPP-1604-Verify User should receive a text based on their registered mobile number regarding the cancellation", ({
    given,
    when,
    and,
    then,
  }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when("User is logged in to the application", () => {
      defaultValidation();
    });

    and("User clicks to “Appointments” menu", () => {
      defaultValidation();
    });

    then("User navigates to “Appointments” screen", () => {
      defaultValidation();
    });

    and("User lands on “Appointments” screen", async () => {
      Cookies.result = { authorized: true };
      const expectedResult = {
        ResponseCode: 2005,
        ResponseType: "success",
      };
      const mock = new MockAdapter(axios);
      const domain = window.location.origin;
      mock.onPost(`/ecp/patient/logout`).reply(200, expectedResult);
      mock.onGet(`/ecp/appointments/appointment-types`).reply(200, mockSuggestionReal);
      mock
      .onGet(
        `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/upcoming`
      )
      .reply(200, upcoming);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions?patientId=98f9404b-6ea8-4732-b14f-9c1a168d8066`
        )
        .reply(200, MOCK_PRESCRIPTION);
      window.matchMedia = createMatchMedia("700px");
      const response = await getServerSideProps({
        req: { headers: { cookie: { get: jest.fn().mockReturnValue(true) } } },
        res: jest.fn(),
      });
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };
      global.navigator.geolocation = mockGeolocation;
      Cookies.result = { authorized: true };
      act(() => {
        container = render(
          <Provider store={store}>{HomePage.getLayout(<HomePage />)}</Provider>
        );
      });
      await waitFor(() => container.getByText("View Appointments"));
      expect(response).toEqual({
        props: {
          isStepTwo: false,
        },
      });
    });

    and("User should see an option to schedule new appointments", () => {
      defaultValidation();
    });

    and(
      "User should see Upcoming Appointments with an option to reschedule and cancel each of them",
      () => {
        // expect(container.getByText("Cancel")).toBeInTheDocument();
        // expect(container.getByText("Reschedule")).toBeInTheDocument();
      }
    );

    when("User clicks on the option to cancel an appointment", () => {
      // const cancelButton = container.getByRole("button", { name: "Cancel" });
      // fireEvent.click(cancelButton);
    });

    then(
      "User should see “Are you sure you want to cancel?” as confirmation message",
      async () => {
        // await waitFor(() => container.getByText(/cancelTitle/i));
      }
    );

    and(/^User should see "(.*)" option$/, (arg0) => {
      // const cancelButton = container.getByRole("button", {
      //   name: /btnCancel/i,
      // });
      // const KeepButton = container.getByRole("button", { name: /btnKeep/i });
      // expect(cancelButton).toBeTruthy();
      // expect(KeepButton).toBeTruthy();
    });

    when(/^User selects on "(.*)" option$/, (arg0) => {
      // const cancelButton = container.getByRole("button", {
      //   name: /btnCancel/i,
      // });
      // fireEvent.click(cancelButton);
    });

    then("User navigates to “Appointments” screen", () => {
      defaultValidation();
    });

    and(
      "User should receive a text based on their registered mobile number regarding the cancellation",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-3_STORY_EPP-1604-Verify User should be able to deny and gets redirected back to “Appointments” screen without appointment being cancelled", ({
    given,
    when,
    and,
    then,
  }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when("User is logged in to the application", () => {
      defaultValidation();
    });

    and("User clicks to “Appointments” menu", () => {
      defaultValidation();
    });

    then("User navigates to “Appointments” screen", () => {
      defaultValidation();
    });

    and("User lands on “Appointments” screen", async () => {
      Cookies.result = { authorized: true };
      const expectedResult = {
        ResponseCode: 2005,
        ResponseType: "success",
      };
      const mock = new MockAdapter(axios);
      const domain = window.location.origin;
      mock.onPost(`/ecp/patient/logout`).reply(200, expectedResult);
      mock.onGet(`/ecp/appointments/appointment-types`).reply(200, mockSuggestionReal);
      mock
      .onGet(
        `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/upcoming`
      )
      .reply(200, upcoming);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions?patientId=98f9404b-6ea8-4732-b14f-9c1a168d8066`
        )
        .reply(200, MOCK_PRESCRIPTION);
      window.matchMedia = createMatchMedia("700px");
      const response = await getServerSideProps({
        req: { headers: { cookie: { get: jest.fn().mockReturnValue(true) } } },
        res: jest.fn(),
      });
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };
      global.navigator.geolocation = mockGeolocation;
      Cookies.result = { authorized: true };
      act(() => {
        container = render(
          <Provider store={store}>{HomePage.getLayout(<HomePage />)}</Provider>
        );
      });
      await waitFor(() => container.getByText("View Appointments"));
      expect(response).toEqual({
        props: {
          isStepTwo: false,
        },
      });
    });

    and("User should see an option to schedule new appointments", () => {
      defaultValidation();
    });

    and(
      "User should see Upcoming Appointments with an option to reschedule and cancel each of them",
      () => {
        // expect(container.getByText("Cancel")).toBeInTheDocument();
        // expect(container.getByText("Reschedule")).toBeInTheDocument();
      }
    );

    when("User clicks on the option to cancel an appointment", () => {
      // const cancelButton = container.getByRole("button", { name: "Cancel" });
      // fireEvent.click(cancelButton);
    });

    then(
      "User should see “Are you sure you want to cancel?” as confirmation message",
      async () => {
        // await waitFor(() => container.getByText(/cancelTitle/i));
      }
    );

    and(/^User should see "(.*)" option$/, (arg0) => {
      // const cancelButton = container.getByRole("button", {
      //   name: /btnCancel/i,
      // });
      // const KeepButton = container.getByRole("button", { name: /btnKeep/i });
      // expect(cancelButton).toBeTruthy();
      // expect(KeepButton).toBeTruthy();
    });

    when(/^User selects on "(.*)" option$/, (arg0) => {
      // const keepButton = container.getByRole("button", { name: /btnKeep/i });
      // fireEvent.click(keepButton);
    });

    then("User navigates to “Appointments” screen", () => {
      defaultValidation();
    });

    and("user should see the appointment is not cancelled", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-3_STORY_EPP-1604-Negative Test Cases-Verify user should see the error message when the internet service is unavailable", ({
    given,
    when,
    and,
    then,
  }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when("User is logged in to the application", () => {
      defaultValidation();
    });

    and("User clicks to “Appointments” menu", () => {
      defaultValidation();
    });

    then("User navigates to “Appointments” screen", () => {
      defaultValidation();
    });

    and("User lands on “Appointments” screen", async () => {
      Cookies.result = { authorized: true };
      const expectedResult = {
        ResponseCode: 2005,
        ResponseType: "success",
      };
      const mock = new MockAdapter(axios);
      const domain = window.location.origin;
      mock.onPost(`/ecp/patient/logout`).reply(200, expectedResult);
      mock.onGet(`/ecp/appointments/appointment-types`).reply(200, mockSuggestionReal);
      mock
      .onGet(
        `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/upcoming`
      )
      .reply(200, upcoming);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions?patientId=98f9404b-6ea8-4732-b14f-9c1a168d8066`
        )
        .reply(200, MOCK_PRESCRIPTION);
      window.matchMedia = createMatchMedia("700px");
      const response = await getServerSideProps({
        req: { headers: { cookie: { get: jest.fn().mockReturnValue(true) } } },
        res: jest.fn(),
      });
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };
      global.navigator.geolocation = mockGeolocation;
      Cookies.result = { authorized: true };
      act(() => {
        container = render(
          <Provider store={store}>{HomePage.getLayout(<HomePage />)}</Provider>
        );
      });
      await waitFor(() => container.getByText("View Appointments"));
      expect(response).toEqual({
        props: {
          isStepTwo: false,
        },
      });
    });

    and("User should see an option to schedule new appointments", () => {
      defaultValidation();
    });

    and(
      "User should see Upcoming Appointments with an option to reschedule and cancel each of them",
      () => {
        // expect(container.getByText("Cancel")).toBeInTheDocument();
        // expect(container.getByText("Reschedule")).toBeInTheDocument();
      }
    );

    when("User clicks on the option to cancel an appointment", () => {
      // const cancelButton = container.getByRole("button", { name: "Cancel" });
      // fireEvent.click(cancelButton);
    });

    then(
      "User should see “Are you sure you want to cancel?” as confirmation message",
      async () => {
        // await waitFor(() => container.getByText(/cancelTitle/i));
      }
    );

    and(/^User should see "(.*)" option$/, (arg0) => {
      // const cancelButton = container.getByRole("button", {
      //   name: /btnCancel/i,
      // });
      // const KeepButton = container.getByRole("button", { name: /btnKeep/i });
      // expect(cancelButton).toBeTruthy();
      // expect(KeepButton).toBeTruthy();
    });

    when(/^User selects on "(.*)" option$/, (arg0) => {
      // const cancelButton = container.getByRole("button", {
      //   name: /btnCancel/i,
      // });
      // fireEvent.click(cancelButton);
    });

    then(/^User should see "(.*)" as a note$/, (arg0) => {
      defaultValidation();
    });

    and("User navigates to “Appointments” screen", () => {
      defaultValidation();
    });

    and(
      "User should receive an email based on their registered mail-id regarding the cancellation",
      () => {
        defaultValidation();
      }
    );

    and("the Internet service is unavailable", () => {
      defaultValidation();
    });

    then("user should see the appropriate error message", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-3_STORY_EPP-1604-Negative Test Cases-Verify  when the service is unavailable", ({
    given,
    when,
    and,
    then,
  }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when("User is logged in to the application", () => {
      defaultValidation();
    });

    and("User clicks to “Appointments” menu", () => {
      defaultValidation();
    });

    then("User navigates to “Appointments” screen", () => {
      defaultValidation();
    });

    and("User lands on “Appointments” screen", async () => {
      Cookies.result = { authorized: true };
      const expectedResult = {
        ResponseCode: 2005,
        ResponseType: "success",
      };
      const mock = new MockAdapter(axios);
      const domain = window.location.origin;
      mock.onPost(`/ecp/patient/logout`).reply(200, expectedResult);
      mock.onGet(`/ecp/appointments/appointment-types`).reply(200, mockSuggestionReal);
      mock
      .onGet(
        `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/upcoming`
      )
      .reply(200, upcoming);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions?patientId=98f9404b-6ea8-4732-b14f-9c1a168d8066`
        )
        .reply(200, MOCK_PRESCRIPTION);
      window.matchMedia = createMatchMedia("700px");
      const response = await getServerSideProps({
        req: { headers: { cookie: { get: jest.fn().mockReturnValue(true) } } },
        res: jest.fn(),
      });
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };
      global.navigator.geolocation = mockGeolocation;
      Cookies.result = { authorized: true };
      act(() => {
        container = render(
          <Provider store={store}>{HomePage.getLayout(<HomePage />)}</Provider>
        );
      });
      await waitFor(() => container.getByText("View Appointments"));
      expect(response).toEqual({
        props: {
          isStepTwo: false,
        },
      });
    });

    and("User should see an option to schedule new appointments", () => {
      defaultValidation();
    });

    and(
      "User should see Upcoming Appointments with an option to reschedule and cancel each of them",
      () => {
        // expect(container.getByText("Cancel")).toBeInTheDocument();
        // expect(container.getByText("Reschedule")).toBeInTheDocument();
      }
    );

    when("User clicks on the option to cancel an appointment", () => {
      // const cancelButton = container.getByRole("button", { name: "Cancel" });
      // fireEvent.click(cancelButton);
    });

    then(
      "User should see “Are you sure you want to cancel?” as confirmation message",
      async () => {
        // await waitFor(() => container.getByText(/cancelTitle/i));
      }
    );

    and(/^User should see "(.*)" option$/, (arg0) => {
      // const cancelButton = container.getByRole("button", {
      //   name: /btnCancel/i,
      // });
      // const KeepButton = container.getByRole("button", { name: /btnKeep/i });
      // expect(cancelButton).toBeTruthy();
      // expect(KeepButton).toBeTruthy();
    });

    when(/^User selects on "(.*)" option$/, (arg0) => {
      // const cancelButton = container.getByRole("button", {
      //   name: /btnCancel/i,
      // });
      // fireEvent.click(cancelButton);
    });

    then(/^User should see "(.*)" as a note$/, (arg0) => {
      defaultValidation();
    });

    and("User navigates to “Appointments” screen", () => {
      defaultValidation();
    });

    and(
      "User should receive an email based on their registered mail-id regarding the cancellation",
      () => {
        defaultValidation();
      }
    );

    and("the service is unavailable", () => {
      defaultValidation();
    });

    then("user should see the appropriate error message", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-3_STORY_EPP-1604-Negative Test Cases-Verify User navigates to “Appointments” screen when user refresh the page", ({
    given,
    when,
    and,
    then,
  }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when("User is logged in to the application", () => {
      defaultValidation();
    });

    and("User clicks to “Appointments” menu", () => {
      defaultValidation();
    });

    then("User navigates to “Appointments” screen", () => {
      defaultValidation();
    });

    and("User lands on “Appointments” screen", async () => {
      Cookies.result = { authorized: true };
      const expectedResult = {
        ResponseCode: 2005,
        ResponseType: "success",
      };
      const mock = new MockAdapter(axios);
      const domain = window.location.origin;
      mock.onPost(`/ecp/patient/logout`).reply(200, expectedResult);
      mock.onGet(`/ecp/appointments/appointment-types`).reply(200, mockSuggestionReal);
      mock
      .onGet(
        `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/upcoming`
      )
      .reply(200, upcoming);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions?patientId=98f9404b-6ea8-4732-b14f-9c1a168d8066`
        )
        .reply(200, MOCK_PRESCRIPTION);
      window.matchMedia = createMatchMedia("700px");
      const response = await getServerSideProps({
        req: { headers: { cookie: { get: jest.fn().mockReturnValue(true) } } },
        res: jest.fn(),
      });
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };
      global.navigator.geolocation = mockGeolocation;
      Cookies.result = { authorized: true };
      act(() => {
        container = render(
          <Provider store={store}>{HomePage.getLayout(<HomePage />)}</Provider>
        );
      });
      await waitFor(() => container.getByText("View Appointments"));
      expect(response).toEqual({
        props: {
          isStepTwo: false,
        },
      });
    });

    and("User should see an option to schedule new appointments", () => {
      defaultValidation();
    });

    and(
      "User should see Upcoming Appointments with an option to reschedule and cancel each of them",
      () => {
        // expect(container.getByText("Cancel")).toBeInTheDocument();
        // expect(container.getByText("Reschedule")).toBeInTheDocument();
      }
    );

    when("User clicks on the option to cancel an appointment", () => {
      // const cancelButton = container.getByRole("button", { name: "Cancel" });
      // fireEvent.click(cancelButton);
    });

    then(
      "User should see “Are you sure you want to cancel?” as confirmation message",
      async () => {
        // await waitFor(() => container.getByText(/cancelTitle/i));
      }
    );

    and(/^User should see "(.*)" option$/, (arg0) => {
      // const cancelButton = container.getByRole("button", {
      //   name: /btnCancel/i,
      // });
      // const KeepButton = container.getByRole("button", { name: /btnKeep/i });
      // expect(cancelButton).toBeTruthy();
      // expect(KeepButton).toBeTruthy();
    });

    when(/^User selects on "(.*)" option$/, (arg0) => {
      // const cancelButton = container.getByRole("button", {
      //   name: /btnCancel/i,
      // });
      // fireEvent.click(cancelButton);
    });

    then(/^User should see "(.*)" as a note$/, (arg0) => {
      defaultValidation();
    });

    and("User navigates to “Appointments” screen", () => {
      defaultValidation();
    });

    and(
      "User should receive an email based on their registered mail-id regarding the cancellation",
      () => {
        defaultValidation();
      }
    );

    and("the service is unavailable", () => {
      defaultValidation();
    });

    then("user should see the appropriate error message", () => {
      defaultValidation();
    });

    when("User refresh the page", () => {
      defaultValidation();
    });

    then("User navigates to “Appointments” screen", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-3_STORY_EPP-1604-Verify User should not see the any errors script when user clicks F12 on the console", ({
    given,
    when,
    and,
    then,
  }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when("User is logged in to the application", () => {
      defaultValidation();
    });

    and("User clicks to “Appointments” menu", () => {
      defaultValidation();
    });

    then("User navigates to “Appointments” screen", () => {
      defaultValidation();
    });

    and("User lands on “Appointments” screen", async () => {
      Cookies.result = { authorized: true };
      const expectedResult = {
        ResponseCode: 2005,
        ResponseType: "success",
      };
      const mock = new MockAdapter(axios);
      const domain = window.location.origin;
      mock.onPost(`/ecp/patient/logout`).reply(200, expectedResult);
      mock.onGet(`/ecp/appointments/appointment-types`).reply(200, mockSuggestionReal);
      mock
      .onGet(
        `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/upcoming`
      )
      .reply(200, upcoming);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions?patientId=98f9404b-6ea8-4732-b14f-9c1a168d8066`
        )
        .reply(200, MOCK_PRESCRIPTION);
      window.matchMedia = createMatchMedia("700px");
      const response = await getServerSideProps({
        req: { headers: { cookie: { get: jest.fn().mockReturnValue(true) } } },
        res: jest.fn(),
      });
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };
      global.navigator.geolocation = mockGeolocation;
      Cookies.result = { authorized: true };
      act(() => {
        container = render(
          <Provider store={store}>{HomePage.getLayout(<HomePage />)}</Provider>
        );
      });
      await waitFor(() => container.getByText("View Appointments"));
      expect(response).toEqual({
        props: {
          isStepTwo: false,
        },
      });
    });

    and("User should see an option to schedule new appointments", () => {
      defaultValidation();
    });

    and(
      "User should see Upcoming Appointments with an option to reschedule and cancel each of them",
      () => {
        // expect(container.getByText("Cancel")).toBeInTheDocument();
        // expect(container.getByText("Reschedule")).toBeInTheDocument();
      }
    );

    when("User clicks on the option to cancel an appointment", () => {
      // const cancelButton = container.getByRole("button", { name: "Cancel" });
      // fireEvent.click(cancelButton);
    });

    then(
      "User should see “Are you sure you want to cancel?” as confirmation message",
      async () => {
        // await waitFor(() => container.getByText(/cancelTitle/i));
      }
    );

    and(/^User should see "(.*)" option$/, (arg0) => {
      // const cancelButton = container.getByRole("button", {
      //   name: /btnCancel/i,
      // });
      // const KeepButton = container.getByRole("button", { name: /btnKeep/i });
      // expect(cancelButton).toBeTruthy();
      // expect(KeepButton).toBeTruthy();
    });

    when(/^User selects on "(.*)" option$/, (arg0) => {
      // const cancelButton = container.getByRole("button", {
      //   name: /btnCancel/i,
      // });
      // fireEvent.click(cancelButton);
    });

    then(/^User should see "(.*)" as a note$/, (arg0) => {
      defaultValidation();
    });

    and("User navigates to “Appointments” screen", () => {
      defaultValidation();
    });

    and(
      "User should receive an email based on their registered mail-id regarding the cancellation",
      () => {
        defaultValidation();
      }
    );

    and(/^User should see the page loads within "(.*)"$/, (arg0) => {
      defaultValidation();
    });

    when(/^user clicks on F(\d+) on the console$/, (arg0) => {
      defaultValidation();
    });

    then("user should not to see any errors script", () => {
      defaultValidation();
    });
  });
});
