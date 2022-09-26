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
      name: "optometry",
      description: "Get detailed eye exam",
    },
    {
      id: "4",
      name: "ophthalmology",
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
      mock
        .onGet(
          `${domain}/api/dummy/appointment/create-appointment/getSugestion`
        )
        .reply(200, MOCK_SUGESTION);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/my-appointment/getAllAppointment`
        )
        .reply(200, MOCK_APPOINTMENT);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions`
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
      await waitFor(() => container.getByText("Get Direction"));
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
        expect(container.getByText("Cancel")).toBeInTheDocument();
        expect(container.getByText("Reschedule")).toBeInTheDocument();
      }
    );

    when("User clicks on the option to cancel an appointment", () => {
      const cancelButton = container.getByRole("button", { name: "Cancel" });
      fireEvent.click(cancelButton);
    });

    then(
      "User should see “Are you sure you want to cancel?” as confirmation message",
      async () => {
        await waitFor(() => container.getByText(/cancelTitle/i));
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
      mock
        .onGet(
          `${domain}/api/dummy/appointment/create-appointment/getSugestion`
        )
        .reply(200, MOCK_SUGESTION);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/my-appointment/getAllAppointment`
        )
        .reply(200, MOCK_APPOINTMENT);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions`
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
      await waitFor(() => container.getByText("Get Direction"));
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
        expect(container.getByText("Cancel")).toBeInTheDocument();
        expect(container.getByText("Reschedule")).toBeInTheDocument();
      }
    );

    when("User clicks on the option to cancel an appointment", () => {
      const cancelButton = container.getByRole("button", { name: "Cancel" });
      fireEvent.click(cancelButton);
    });

    then(
      "User should see “Are you sure you want to cancel?” as confirmation message",
      async () => {
        await waitFor(() => container.getByText(/cancelTitle/i));
      }
    );

    and(/^User should see "(.*)" option$/, (arg0) => {
      const cancelButton = container.getByRole("button", {
        name: /btnCancel/i,
      });
      const KeepButton = container.getByRole("button", { name: /btnKeep/i });
      expect(cancelButton).toBeTruthy();
      expect(KeepButton).toBeTruthy();
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
      mock
        .onGet(
          `${domain}/api/dummy/appointment/create-appointment/getSugestion`
        )
        .reply(200, MOCK_SUGESTION);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/my-appointment/getAllAppointment`
        )
        .reply(200, MOCK_APPOINTMENT);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions`
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
      await waitFor(() => container.getByText("Get Direction"));
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
        expect(container.getByText("Cancel")).toBeInTheDocument();
        expect(container.getByText("Reschedule")).toBeInTheDocument();
      }
    );

    when("User clicks on the option to cancel an appointment", () => {
      const cancelButton = container.getByRole("button", { name: "Cancel" });
      fireEvent.click(cancelButton);
    });

    then(
      "User should see “Are you sure you want to cancel?” as confirmation message",
      async () => {
        await waitFor(() => container.getByText(/cancelTitle/i));
      }
    );

    and(/^User should see "(.*)" option$/, (arg0) => {
      const cancelButton = container.getByRole("button", {
        name: /btnCancel/i,
      });
      const KeepButton = container.getByRole("button", { name: /btnKeep/i });
      expect(cancelButton).toBeTruthy();
      expect(KeepButton).toBeTruthy();
    });

    when(/^User selects on "(.*)" option$/, (arg0) => {
      const cancelButton = container.getByRole("button", {
        name: /btnCancel/i,
      });
      fireEvent.click(cancelButton);
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
      mock
        .onGet(
          `${domain}/api/dummy/appointment/create-appointment/getSugestion`
        )
        .reply(200, MOCK_SUGESTION);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/my-appointment/getAllAppointment`
        )
        .reply(200, MOCK_APPOINTMENT);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions`
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
      await waitFor(() => container.getByText("Get Direction"));
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
        expect(container.getByText("Cancel")).toBeInTheDocument();
        expect(container.getByText("Reschedule")).toBeInTheDocument();
      }
    );

    when("User clicks on the option to cancel an appointment", () => {
      const cancelButton = container.getByRole("button", { name: "Cancel" });
      fireEvent.click(cancelButton);
    });

    then(
      "User should see “Are you sure you want to cancel?” as confirmation message",
      async () => {
        await waitFor(() => container.getByText(/cancelTitle/i));
      }
    );

    and(/^User should see "(.*)" option$/, (arg0) => {
      const cancelButton = container.getByRole("button", {
        name: /btnCancel/i,
      });
      const KeepButton = container.getByRole("button", { name: /btnKeep/i });
      expect(cancelButton).toBeTruthy();
      expect(KeepButton).toBeTruthy();
    });

    when(/^User selects on "(.*)" option$/, (arg0) => {
      const cancelButton = container.getByRole("button", {
        name: /btnCancel/i,
      });
      fireEvent.click(cancelButton);
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
      mock
        .onGet(
          `${domain}/api/dummy/appointment/create-appointment/getSugestion`
        )
        .reply(200, MOCK_SUGESTION);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/my-appointment/getAllAppointment`
        )
        .reply(200, MOCK_APPOINTMENT);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions`
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
      await waitFor(() => container.getByText("Get Direction"));
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
        expect(container.getByText("Cancel")).toBeInTheDocument();
        expect(container.getByText("Reschedule")).toBeInTheDocument();
      }
    );

    when("User clicks on the option to cancel an appointment", () => {
      const cancelButton = container.getByRole("button", { name: "Cancel" });
      fireEvent.click(cancelButton);
    });

    then(
      "User should see “Are you sure you want to cancel?” as confirmation message",
      async () => {
        await waitFor(() => container.getByText(/cancelTitle/i));
      }
    );

    and(/^User should see "(.*)" option$/, (arg0) => {
      const cancelButton = container.getByRole("button", {
        name: /btnCancel/i,
      });
      const KeepButton = container.getByRole("button", { name: /btnKeep/i });
      expect(cancelButton).toBeTruthy();
      expect(KeepButton).toBeTruthy();
    });

    when(/^User selects on "(.*)" option$/, (arg0) => {
      const keepButton = container.getByRole("button", { name: /btnKeep/i });
      fireEvent.click(keepButton);
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
      mock
        .onGet(
          `${domain}/api/dummy/appointment/create-appointment/getSugestion`
        )
        .reply(200, MOCK_SUGESTION);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/my-appointment/getAllAppointment`
        )
        .reply(200, MOCK_APPOINTMENT);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions`
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
      await waitFor(() => container.getByText("Get Direction"));
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
        expect(container.getByText("Cancel")).toBeInTheDocument();
        expect(container.getByText("Reschedule")).toBeInTheDocument();
      }
    );

    when("User clicks on the option to cancel an appointment", () => {
      const cancelButton = container.getByRole("button", { name: "Cancel" });
      fireEvent.click(cancelButton);
    });

    then(
      "User should see “Are you sure you want to cancel?” as confirmation message",
      async () => {
        await waitFor(() => container.getByText(/cancelTitle/i));
      }
    );

    and(/^User should see "(.*)" option$/, (arg0) => {
      const cancelButton = container.getByRole("button", {
        name: /btnCancel/i,
      });
      const KeepButton = container.getByRole("button", { name: /btnKeep/i });
      expect(cancelButton).toBeTruthy();
      expect(KeepButton).toBeTruthy();
    });

    when(/^User selects on "(.*)" option$/, (arg0) => {
      const cancelButton = container.getByRole("button", {
        name: /btnCancel/i,
      });
      fireEvent.click(cancelButton);
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
      mock
        .onGet(
          `${domain}/api/dummy/appointment/create-appointment/getSugestion`
        )
        .reply(200, MOCK_SUGESTION);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/my-appointment/getAllAppointment`
        )
        .reply(200, MOCK_APPOINTMENT);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions`
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
      await waitFor(() => container.getByText("Get Direction"));
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
        expect(container.getByText("Cancel")).toBeInTheDocument();
        expect(container.getByText("Reschedule")).toBeInTheDocument();
      }
    );

    when("User clicks on the option to cancel an appointment", () => {
      const cancelButton = container.getByRole("button", { name: "Cancel" });
      fireEvent.click(cancelButton);
    });

    then(
      "User should see “Are you sure you want to cancel?” as confirmation message",
      async () => {
        await waitFor(() => container.getByText(/cancelTitle/i));
      }
    );

    and(/^User should see "(.*)" option$/, (arg0) => {
      const cancelButton = container.getByRole("button", {
        name: /btnCancel/i,
      });
      const KeepButton = container.getByRole("button", { name: /btnKeep/i });
      expect(cancelButton).toBeTruthy();
      expect(KeepButton).toBeTruthy();
    });

    when(/^User selects on "(.*)" option$/, (arg0) => {
      const cancelButton = container.getByRole("button", {
        name: /btnCancel/i,
      });
      fireEvent.click(cancelButton);
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
      mock
        .onGet(
          `${domain}/api/dummy/appointment/create-appointment/getSugestion`
        )
        .reply(200, MOCK_SUGESTION);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/my-appointment/getAllAppointment`
        )
        .reply(200, MOCK_APPOINTMENT);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions`
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
      await waitFor(() => container.getByText("Get Direction"));
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
        expect(container.getByText("Cancel")).toBeInTheDocument();
        expect(container.getByText("Reschedule")).toBeInTheDocument();
      }
    );

    when("User clicks on the option to cancel an appointment", () => {
      const cancelButton = container.getByRole("button", { name: "Cancel" });
      fireEvent.click(cancelButton);
    });

    then(
      "User should see “Are you sure you want to cancel?” as confirmation message",
      async () => {
        await waitFor(() => container.getByText(/cancelTitle/i));
      }
    );

    and(/^User should see "(.*)" option$/, (arg0) => {
      const cancelButton = container.getByRole("button", {
        name: /btnCancel/i,
      });
      const KeepButton = container.getByRole("button", { name: /btnKeep/i });
      expect(cancelButton).toBeTruthy();
      expect(KeepButton).toBeTruthy();
    });

    when(/^User selects on "(.*)" option$/, (arg0) => {
      const cancelButton = container.getByRole("button", {
        name: /btnCancel/i,
      });
      fireEvent.click(cancelButton);
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
      mock
        .onGet(
          `${domain}/api/dummy/appointment/create-appointment/getSugestion`
        )
        .reply(200, MOCK_SUGESTION);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/my-appointment/getAllAppointment`
        )
        .reply(200, MOCK_APPOINTMENT);
      mock
        .onGet(
          `${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions`
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
      await waitFor(() => container.getByText("Get Direction"));
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
        expect(container.getByText("Cancel")).toBeInTheDocument();
        expect(container.getByText("Reschedule")).toBeInTheDocument();
      }
    );

    when("User clicks on the option to cancel an appointment", () => {
      const cancelButton = container.getByRole("button", { name: "Cancel" });
      fireEvent.click(cancelButton);
    });

    then(
      "User should see “Are you sure you want to cancel?” as confirmation message",
      async () => {
        await waitFor(() => container.getByText(/cancelTitle/i));
      }
    );

    and(/^User should see "(.*)" option$/, (arg0) => {
      const cancelButton = container.getByRole("button", {
        name: /btnCancel/i,
      });
      const KeepButton = container.getByRole("button", { name: /btnKeep/i });
      expect(cancelButton).toBeTruthy();
      expect(KeepButton).toBeTruthy();
    });

    when(/^User selects on "(.*)" option$/, (arg0) => {
      const cancelButton = container.getByRole("button", {
        name: /btnCancel/i,
      });
      fireEvent.click(cancelButton);
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
