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
import Appointment from "../../src/pages/patient/appointment";
import Appointments from "../../src/pages/patient/appointments";
import RescheduleAppointments from "../../src/pages/patient/appointments/[appointmentId]/reschedule";

import { getServerSideProps } from "../../src/pages/patient/mfa";
import { TEST_ID } from "../../src/utils/constants";

const MOCK_APPOINTMENT = {
  appointmentList: [
    {
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
        date: "Thu, 12 Jan 2023 04:30:00 EST",
        insuranceCarrier: ["ECP Vision", "BlueCare Vision"],
      },
    },
    {
      appointmentId: "1",
      providerInfo: {
        providerId: "1",
        name: "Dr. Sonha Nguyen",
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
        date: "Thu, 12 Jan 2023 04:30:00 EST",
        insuranceCarrier: ["ECP Vision", "BlueCare Vision"],
      },
    },
  ],
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

const MOCK_SUGESTION = {
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
  "count": 0,
  "entities": []
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
    addListener: () => { },
    removeListener: () => { },
  });
}

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint5/EPP-1603.feature"
);

defineFeature(feature, (test) => {
  let container;

  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  const renderReschedule = () => {
    container.rerender(
      <Provider store={store}>
        {Appointment.getLayout(<RescheduleAppointments />)}
      </Provider>
    );
  };

  const renderAppointment = () => {
    container.rerender(
      <Provider store={store}>
        {Appointment.getLayout(<Appointment />)}
      </Provider>
    );
  };

  const renderUpcoming = () => {
    container.rerender(
      <Provider store={store}>
        {Appointments.getLayout(<Appointments />)}
      </Provider>
    );
  };

  beforeAll(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date(2020, 3, 1));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test("EPIC_EPP-45_STORY_EPP-1603 - Verify user should receive an text message based on their registered phone number when user reshedule upcoming appointment list", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal url", () => {
      defaultValidation();
    });

    when("user is logged in to the application", () => {
      defaultValidation();
    });

    and("user clicks to “Appointments” menu", () => {
      defaultValidation();
    });

    then("user navigates to “Appointments” screen", () => {
      defaultValidation();
    });

    and("user lands on 'Appointments' screen", async () => {
      Cookies.result = { authorized: true };
      const expectedResult = {
        ResponseCode: 2005,
        ResponseType: "success",
      };
      const mock = new MockAdapter(axios);
      const domain = window.location.origin;
      mock.onPost(`/ecp/patient/logout`).reply(200, expectedResult);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/create-appointment/getSugestion`
        )
        .reply(200, MOCK_SUGESTION);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/my-appointment/getAllAppointment/98f9404b-6ea8-4732-b14f-9c1a168d8066`
        )
        .reply(200, MOCK_APPOINTMENT);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions?patientId=98f9404b-6ea8-4732-b14f-9c1a168d8066`
        )
        .reply(200, MOCK_PRESCRIPTION);
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
      await waitFor(() => container.getByText("Get Direction"));
      expect(response).toEqual({
        props: {
          isStepTwo: false,
        },
      });
    });

    and("user should see list of upcoming appointment", () => {
      defaultValidation();
    });

    and("user should see reschedule and cancel each of them", async () => {
      await waitFor(() => {
        container.getAllByText("Cancel")[0];
        container.getAllByText("Reschedule")[0];
      });
    });

    and("user clicks on the reschedule an appointment", async () => {
      const rescheduleButton = container.getByRole("button", {
        name: "Reschedule",
      });
      fireEvent.click(rescheduleButton);

      renderReschedule();

      await waitFor(() => container.getByText("Reschedule Appointment"));
    });

    and("user view the selected location and able to change", async () => {
      expect(container.getByText(/location/i)).toBeInTheDocument();
      expect(container.getByText(/appointmentDetails/i)).toBeInTheDocument();
      const editButton = container.getAllByRole("button", { name: /Edit/i })[0];
      fireEvent.click(editButton);
    });

    and(
      "user view the selected Date of the appointment and able to change",
      async () => {
        renderAppointment();
      }
    );

    and("user view the selected time-slot and able to change", async () => {
      defaultValidation();
    });

    and(
      "user view the selected purpose of visit and able to change",
      async () => {
        const pusposeField = container.getByText(/Purpose of Visit/i);
        fireEvent.click(pusposeField);
        await waitFor(() => {
          const cancelButton = container.getByText(/Cancel/i);
          expect(container.getByText(/Cancel/i)).toBeInTheDocument();
          fireEvent.click(cancelButton);
        });
      }
    );

    and(
      "user view the selected Insurance Career and able to change",
      async () => {
        const insuranceField = container.getByText(/Insurance Carrier/i);
        fireEvent.click(insuranceField);
        await waitFor(() => container.getByText(/Cancel/i));
        const cancelButton = container.getByText(/Cancel/i);
        expect(container.getByText(/Cancel/i)).toBeInTheDocument();
        fireEvent.click(cancelButton);
      }
    );

    then("user navigates to review the updated details", () => {
      defaultValidation();
    });

    and("user view an option to reschedule the appointment", () => {
      defaultValidation();
    });

    and(
      "user prompted with a confirmation message “Are you sure you want to reschedule?” with option to confirm and deny",
      () => {
        defaultValidation();
      }
    );

    and("user clicks on the confirm botton", () => {
      defaultValidation();
    });

    and(
      "user receive the text message regarding the rescheduled Appointment",
      () => {
        defaultValidation();
      }
    );

    and(
      "user navigated to 'Appointments' screen to see the updated details under upcoming appointments",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-45_STORY_EPP-1603 - Verify user should receive an email and text message based on their registered email and phone number when user reshedulle upcoming appointment list", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal url", () => {
      defaultValidation();
    });

    when("user is logged in to the application", () => {
      defaultValidation();
    });

    and("user clicks to “Appointments” menu", () => {
      defaultValidation();
    });

    then("user navigates to “Appointments” screen", () => {
      defaultValidation();
    });

    and("user lands on 'Appointments' screen", async () => {
      Cookies.result = { authorized: true };
      const expectedResult = {
        ResponseCode: 2005,
        ResponseType: "success",
      };
      const mock = new MockAdapter(axios);
      const domain = window.location.origin;
      mock.onPost(`/ecp/patient/logout`).reply(200, expectedResult);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/create-appointment/getSugestion`
        )
        .reply(200, MOCK_SUGESTION);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/my-appointment/getAllAppointment/98f9404b-6ea8-4732-b14f-9c1a168d8066`
        )
        .reply(200, MOCK_APPOINTMENT);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions?patientId=98f9404b-6ea8-4732-b14f-9c1a168d8066`
        )
        .reply(200, MOCK_PRESCRIPTION);
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
      await waitFor(() => container.getByText("Get Direction"));
      expect(response).toEqual({
        props: {
          isStepTwo: false,
        },
      });
    });

    and("user should see list of upcoming appointment", async () => {
      const editButton = container.getByText("View Appointments");
      fireEvent.click(editButton);

      renderUpcoming();

      await waitFor(() => {
        container.getByText(/Upcoming appointments/i);
      });
    });

    and("user should see reschedule and cancel each of them", async () => {
      await waitFor(() => {
        container.getAllByText("Cancel")[0];
        container.getAllByText("Reschedule")[0];
      });
    });

    and("user clicks on the reschedule an appointment", async () => {
      const rescheduleButton = container.getAllByTestId(
        TEST_ID.APPOINTMENTS_TEST_ID.cancelAppointmentButton
      )[0];
      fireEvent.click(rescheduleButton);

      renderReschedule();

      await waitFor(() => container.getByText("Reschedule Appointment"));
    });

    and("user view the selected location and able to change", () => {
      expect(container.getByText(/location/i)).toBeInTheDocument();
      expect(container.getByText(/appointmentDetails/i)).toBeInTheDocument();
      const editButton = container.getAllByRole("button", { name: /Edit/i })[0];
      fireEvent.click(editButton);
    });

    and(
      "user view the selected Date of the appointment and able to change",
      () => {
        renderAppointment();
      }
    );

    and("user view the selected time-slot and able to change", () => {
      defaultValidation();
    });

    and(
      "user view the selected purpose of visit and able to change",
      async () => {
        const pusposeField = container.getByText(/Purpose of Visit/i);
        fireEvent.click(pusposeField);
        await waitFor(() => container.getByText(/Cancel/i));
        const cancelButton = container.getByText(/Cancel/i);
        expect(container.getByText(/Cancel/i)).toBeInTheDocument();
        fireEvent.click(cancelButton);
      }
    );

    and(
      "user view the selected Insurance Career and able to change",
      async () => {
        const insuranceField = container.getByText(/Insurance Carrier/i);
        fireEvent.click(insuranceField);
        await waitFor(() => container.getByText(/Cancel/i));
        const cancelButton = container.getByText(/Cancel/i);
        expect(container.getByText(/Cancel/i)).toBeInTheDocument();
        fireEvent.click(cancelButton);
      }
    );

    then("user navigates to review the updated details", () => {
      defaultValidation();
    });

    and("user view an option to reschedule the appointment", () => {
      defaultValidation();
    });

    and(
      "user prompted with a confirmation message “Are you sure you want to reschedule?” with option to confirm and deny",
      () => {
        defaultValidation();
      }
    );

    and("user clicks on the confirm botton", () => {
      defaultValidation();
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
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-45_STORY_EPP-1603 - Negative Test Cases-Verify  when the service is unavailable", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal url", () => {
      defaultValidation();
    });

    when("user is logged in to the application", () => {
      defaultValidation();
    });

    and("user clicks to “Appointments” menu", () => {
      defaultValidation();
    });

    then("user navigates to “Appointments” screen", () => {
      defaultValidation();
    });

    and("user lands on 'Appointments' screen", async () => {
      Cookies.result = { authorized: true };
      const expectedResult = {
        ResponseCode: 2005,
        ResponseType: "success",
      };
      const mock = new MockAdapter(axios);
      const domain = window.location.origin;
      mock.onPost(`/ecp/patient/logout`).reply(200, expectedResult);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/create-appointment/getSugestion`
        )
        .reply(200, MOCK_SUGESTION);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/my-appointment/getAllAppointment/98f9404b-6ea8-4732-b14f-9c1a168d8066`
        )
        .reply(200, MOCK_APPOINTMENT);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions?patientId=98f9404b-6ea8-4732-b14f-9c1a168d8066`
        )
        .reply(200, MOCK_PRESCRIPTION);
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
      await waitFor(() => container.getByText("Get Direction"));
      expect(response).toEqual({
        props: {
          isStepTwo: false,
        },
      });
    });

    and("user should see list of upcoming appointment", async () => {
      const editButton = container.getByText("View Appointments");
      fireEvent.click(editButton);

      renderUpcoming();

      await waitFor(() => {
        container.getByText(/Upcoming appointments/i);
      });
    });

    and("user should see reschedule and cancel each of them", async () => {
      await waitFor(() => {
        container.getAllByText("Cancel")[0];
        container.getAllByText("Reschedule")[0];
      });
    });

    and("user clicks on the reschedule the appointment", () => {
      defaultValidation();
    });

    and(
      /^user not able to reschedule the appointment which is in (\d+) hours before the time of appointment$/,
      (arg0) => {
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

  test("EPIC_EPP-45_STORY_EPP-1603 - Negative Test Cases-Verify User navigates to “Appointments” screen when user refresh the page", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal url", () => {
      defaultValidation();
    });

    when("user is logged in to the application", () => {
      defaultValidation();
    });

    and("user clicks to “Appointments” menu", () => {
      defaultValidation();
    });

    then("user navigates to “Appointments” screen", () => {
      defaultValidation();
    });

    and("user lands on 'Appointments' screen", async () => {
      Cookies.result = { authorized: true };
      const expectedResult = {
        ResponseCode: 2005,
        ResponseType: "success",
      };
      const mock = new MockAdapter(axios);
      const domain = window.location.origin;
      mock.onPost(`/ecp/patient/logout`).reply(200, expectedResult);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/create-appointment/getSugestion`
        )
        .reply(200, MOCK_SUGESTION);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/my-appointment/getAllAppointment/98f9404b-6ea8-4732-b14f-9c1a168d8066`
        )
        .reply(200, MOCK_APPOINTMENT);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions?patientId=98f9404b-6ea8-4732-b14f-9c1a168d8066`
        )
        .reply(200, MOCK_PRESCRIPTION);
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
      await waitFor(() => container.getByText("Get Direction"));
      expect(response).toEqual({
        props: {
          isStepTwo: false,
        },
      });
    });

    and("user should see list of upcoming appointment", async () => {
      const editButton = container.getByText("View Appointments");
      fireEvent.click(editButton);

      renderUpcoming();

      await waitFor(() => {
        container.getByText(/Upcoming appointments/i);
      });
    });

    and("user should see reschedule and cancel each of them", async () => {
      await waitFor(() => {
        container.getAllByText("Cancel")[0];
        container.getAllByText("Reschedule")[0];
      });
    });

    and("user clicks on the reschedule the appointment", () => {
      defaultValidation();
    });

    and(
      /^user not able to reschedule the appointment which is in (\d+) hours before the time of appointment$/,
      (arg0) => {
        defaultValidation();
      }
    );

    when("User refresh the page", () => {
      defaultValidation();
    });

    then("User navigates to “Appointments” screen", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-45_STORY_EPP-1603 - Verify the user is not able to reschedule the upcoming appointment 4 hours before the time of appointment", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal url", () => {
      defaultValidation();
    });

    when("user is logged in to the application", () => {
      defaultValidation();
    });

    and("user clicks to “Appointments” menu", () => {
      defaultValidation();
    });

    then("user navigates to “Appointments” screen", () => {
      defaultValidation();
    });

    and("user lands on 'Appointments' screen", async () => {
      Cookies.result = { authorized: true };
      const expectedResult = {
        ResponseCode: 2005,
        ResponseType: "success",
      };
      const mock = new MockAdapter(axios);
      const domain = window.location.origin;
      mock.onPost(`/ecp/patient/logout`).reply(200, expectedResult);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/create-appointment/getSugestion`
        )
        .reply(200, MOCK_SUGESTION);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/my-appointment/getAllAppointment/98f9404b-6ea8-4732-b14f-9c1a168d8066`
        )
        .reply(200, MOCK_APPOINTMENT);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions?patientId=98f9404b-6ea8-4732-b14f-9c1a168d8066`
        )
        .reply(200, MOCK_PRESCRIPTION);
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
      await waitFor(() => container.getByText("Get Direction"));
      expect(response).toEqual({
        props: {
          isStepTwo: false,
        },
      });
    });

    and("user should see list of upcoming appointment", async () => {
      const editButton = container.getByText("View Appointments");
      fireEvent.click(editButton);

      renderUpcoming();

      await waitFor(() => {
        container.getByText(/Upcoming appointments/i);
      });
    });

    and("user should see reschedule and cancel each of them", async () => {
      await waitFor(() => {
        container.getAllByText("Cancel")[0];
        container.getAllByText("Reschedule")[0];
      });
    });

    and("user clicks on the reschedule the appointment", () => {
      defaultValidation();
    });

    and(
      /^user not able to reschedule the appointment which is in (\d+) hours before the time of appointment$/,
      (arg0) => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-45_STORY_EPP-1603 - Verify the user to reschedule the upcoming appointment 5 hours before the time of the appointment", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal url", () => {
      defaultValidation();
    });

    when("user is logged in to the application", () => {
      defaultValidation();
    });

    and("user clicks to “Appointments” menu", () => {
      defaultValidation();
    });

    then("user navigates to “Appointments” screen", () => {
      defaultValidation();
    });

    and("user lands on 'Appointments' screen", async () => {
      Cookies.result = { authorized: true };
      const expectedResult = {
        ResponseCode: 2005,
        ResponseType: "success",
      };
      const mock = new MockAdapter(axios);
      const domain = window.location.origin;
      mock.onPost(`/ecp/patient/logout`).reply(200, expectedResult);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/create-appointment/getSugestion`
        )
        .reply(200, MOCK_SUGESTION);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/my-appointment/getAllAppointment/98f9404b-6ea8-4732-b14f-9c1a168d8066`
        )
        .reply(200, MOCK_APPOINTMENT);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions?patientId=98f9404b-6ea8-4732-b14f-9c1a168d8066`
        )
        .reply(200, MOCK_PRESCRIPTION);
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
      await waitFor(() => container.getByText("Get Direction"));
      expect(response).toEqual({
        props: {
          isStepTwo: false,
        },
      });
    });

    and("user should see list of upcoming appointment", async () => {
      const editButton = container.getByText("View Appointments");
      fireEvent.click(editButton);

      renderUpcoming();

      await waitFor(() => {
        container.getByText(/Upcoming appointments/i);
      });
    });

    and("user should see reschedule and cancel each of them", async () => {
      await waitFor(() => {
        container.getAllByText("Cancel")[0];
        container.getAllByText("Reschedule")[0];
      });
    });

    and("user clicks on the reschedule the appointment", () => {
      defaultValidation();
    });

    and(
      /^user reschedule the appointment which is in (\d+) hours before the time of the appointment$/,
      (arg0) => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-45_STORY_EPP-1603 - Negative Test Cases-Verify user should see the error message when the internet service is unavailable", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal url", () => {
      defaultValidation();
    });

    when("user is logged in to the application", () => {
      defaultValidation();
    });

    and("user clicks to “Appointments” menu", () => {
      defaultValidation();
    });

    then("user navigates to “Appointments” screen", () => {
      defaultValidation();
    });

    and("user lands on 'Appointments' screen", async () => {
      Cookies.result = { authorized: true };
      const expectedResult = {
        ResponseCode: 2005,
        ResponseType: "success",
      };
      const mock = new MockAdapter(axios);
      const domain = window.location.origin;
      mock.onPost(`/ecp/patient/logout`).reply(200, expectedResult);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/create-appointment/getSugestion`
        )
        .reply(200, MOCK_SUGESTION);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/my-appointment/getAllAppointment/98f9404b-6ea8-4732-b14f-9c1a168d8066`
        )
        .reply(200, MOCK_APPOINTMENT);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions?patientId=98f9404b-6ea8-4732-b14f-9c1a168d8066`
        )
        .reply(200, MOCK_PRESCRIPTION);
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
      await waitFor(() => container.getByText("Get Direction"));
      expect(response).toEqual({
        props: {
          isStepTwo: false,
        },
      });
    });

    and("user should see list of upcoming appointment", async () => {
      const editButton = container.getByText("View Appointments");
      fireEvent.click(editButton);

      renderUpcoming();

      await waitFor(() => {
        container.getByText(/Upcoming appointments/i);
      });
    });

    and("user should see reschedule and cancel each of them", async () => {
      await waitFor(() => {
        container.getAllByText("Cancel")[0];
        container.getAllByText("Reschedule")[0];
      });
    });

    and("user clicks on the reschedule the appointment", async () => {
      const rescheduleButton = container.getAllByTestId(
        TEST_ID.APPOINTMENTS_TEST_ID.cancelAppointmentButton
      )[0];
      fireEvent.click(rescheduleButton);

      renderReschedule();

      await waitFor(() => container.getByText("Reschedule Appointment"));
    });

    and(
      /^user not able to reschedule the appointment which is in (\d+) hours before the time of appointment$/,
      (arg0) => {
        defaultValidation();
      }
    );

    and("the internet service is unavailable", () => {
      defaultValidation();
    });

    then("user should see the appropriate error message", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-45_STORY_EPP-1603 - Verify User should not see the any errors script when user clicks F12 on the console", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal url", () => {
      defaultValidation();
    });

    when("user is logged in to the application", () => {
      defaultValidation();
    });

    and("user clicks to “Appointments” menu", () => {
      defaultValidation();
    });

    then("user navigates to “Appointments” screen", () => {
      defaultValidation();
    });

    and("user lands on 'Appointments' screen", async () => {
      Cookies.result = { authorized: true };
      const expectedResult = {
        ResponseCode: 2005,
        ResponseType: "success",
      };
      const mock = new MockAdapter(axios);
      const domain = window.location.origin;
      mock.onPost(`/ecp/patient/logout`).reply(200, expectedResult);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/create-appointment/getSugestion`
        )
        .reply(200, MOCK_SUGESTION);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/my-appointment/getAllAppointment/98f9404b-6ea8-4732-b14f-9c1a168d8066`
        )
        .reply(200, MOCK_APPOINTMENT);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions?patientId=98f9404b-6ea8-4732-b14f-9c1a168d8066`
        )
        .reply(200, MOCK_PRESCRIPTION);
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
      await waitFor(() => container.getByText("Get Direction"));
      expect(response).toEqual({
        props: {
          isStepTwo: false,
        },
      });
    });

    and("user should see list of upcoming appointment", async () => {
      const editButton = container.getByText("View Appointments");
      fireEvent.click(editButton);

      renderUpcoming();

      await waitFor(() => {
        container.getByText(/Upcoming appointments/i);
      });
    });

    and("user should see reschedule and cancel each of them", async () => {
      await waitFor(() => {
        container.getAllByText("Cancel")[0];
        container.getAllByText("Reschedule")[0];
      });
    });

    and("user clicks on the reschedule the appointment", async () => {
      const rescheduleButton = container.getAllByTestId(
        TEST_ID.APPOINTMENTS_TEST_ID.cancelAppointmentButton
      )[0];
      fireEvent.click(rescheduleButton);

      renderReschedule();

      await waitFor(() => container.getByText("Reschedule Appointment"));
    });

    and(
      /^user not able to reschedule the appointment which is in (\d+) hours before the time of appointment$/,
      (arg0) => {
        defaultValidation();
      }
    );

    when(/^user clicks on F(\d+) on the console$/, (arg0) => {
      defaultValidation();
    });

    then("user should not to see any errors script", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-45_STORY_EPP-1603 - Verify user should receive an email based on their registered mail-id when user reshedulle upcoming appointment list", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal url", () => {
      defaultValidation();
    });

    when("user is logged in to the application", () => {
      defaultValidation();
    });

    and("user clicks to “Appointments” menu", () => {
      defaultValidation();
    });

    then("user navigates to “Appointments” screen", () => {
      defaultValidation();
    });

    and("user lands on 'Appointments' screen", () => {
      defaultValidation();
    });

    and("user should see list of upcoming appointment", () => {
      defaultValidation();
    });

    and("user should see reschedule and cancel each of them", () => {
      defaultValidation();
    });

    and("user clicks on the reschedule an appointment", () => {
      defaultValidation();
    });

    and("user view the selected location and able to change", () => {
      defaultValidation();
    });

    and(
      "user view the selected Date of the appointment and able to change",
      () => {
        defaultValidation();
      }
    );

    and("user view the selected time-slot and able to change", () => {
      defaultValidation();
    });

    and("user view the selected purpose of visit and able to change", () => {
      defaultValidation();
    });

    and("user view the selected Insurance Career and able to change", () => {
      defaultValidation();
    });

    then("user navigates to review the updated details", () => {
      defaultValidation();
    });

    and("user view an option to reschedule the appointment", () => {
      defaultValidation();
    });

    and(
      "user prompted with a confirmation message “Are you sure you want to reschedule?” with option to confirm and deny",
      () => {
        defaultValidation();
      }
    );

    and("user clicks on the confirm botton", () => {
      defaultValidation();
    });

    and("user receive an email regarding the reschedule", () => {
      defaultValidation();
    });

    and(
      "user navigated to 'Appointments' screen to see the updated details under upcoming appointments",
      () => {
        defaultValidation();
      }
    );
  });
});
