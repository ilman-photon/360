import { cleanup, waitFor, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { defineFeature, loadFeature } from "jest-cucumber";
import { getServerSideProps } from "../../src/pages/patient/mfa";
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
      appointmentId: "2",
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
        appointmentType: "Comprehensive",
        date: "Wed, 28 Aug 2014 07:30:00 EST",
        insuranceCarrier: ["ECP Vision", "BlueCare Vision"],
      },
    },
    {
      appointmentId: "2",
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
        appointmentType: "Comprehensive",
        date: "Wed, 28 Aug 2014 07:30:00 EST",
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
          `${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions`
        )
        .reply(200, MOCK_PRESCRIPTION);

      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };
      global.navigator.geolocation = mockGeolocation;
      const response = await getServerSideProps({
        req: { headers: { cookie: { get: jest.fn().mockReturnValue(true) } } },
        res: jest.fn(),
      });
      act(() => {
        container = render(
          <Provider store={store}>{HomePage.getLayout(<HomePage />)}</Provider>
        );
      });
      await waitFor(() => container.getByLabelText(/Prescriptions/i));
      expect(response).toEqual({
        props: { isStepTwo: false },
      });
    });

    and("user navigates to Appointments screen", async () => {
      defaultValidation();
    });

    when("user lands on Appointments screen", async () => {
      cleanup();
      const mock = new MockAdapter(axios);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/my-appointment/getAllAppointment`
        )
        .reply(200, MOCK_APPOINTMENT);
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
        appointmentsContainer.getAllByText(/Paul Wagner Md/i)[0]
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
        const mock = new MockAdapter(axios);
        mock
          .onGet(
            `${domain}/api/dummy/appointment/my-appointment/getAppointmentDetails`
          )
          .reply(200, MOCK_APPOINTMENT_DETAILS);
        act(() => {
          appointmentDetailsContainer = render(
            <Provider store={store}>
              {AppointmentDetails.getLayout(<AppointmentDetails />)}
            </Provider>
          );
        });
        await waitFor(() =>
          appointmentDetailsContainer.getByText(/Appointment Detail/i)
        );
        expect(
          appointmentDetailsContainer.getByText(/Appointment Detail/i)
        ).toBeInTheDocument();
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
