import { act, fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { defineFeature, loadFeature } from "jest-cucumber";
const useRouter = jest.spyOn(require("next/router"), "useRouter");
import constants from "../../src/utils/constants";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  createMatchMedia,
  defaultValidation,
  renderScheduleAppointment,
} from "../../__mocks__/commonSteps";
import {
  mockAppointmentTypes,
  submitFilter,
  MOCK_SUGESTION,
} from "../../__mocks__/mockResponse";
import Appointment from "../../src/pages/patient/appointment";
import store from "../../src/store/store";
import { Provider } from "react-redux";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1547.feature"
);

defineFeature(feature, (test) => {
  let container;
  const { APPOINTMENT_TEST_ID, SEARCH_PROVIDER_TEST_ID } = constants.TEST_ID;
  const mock = new MockAdapter(axios);
  beforeEach(() => {
    const mockGeolocation = {
      getCurrentPosition: jest.fn(),
      watchPosition: jest.fn(),
    };

    mock
      .onGet(`/ecp/appointments/appointment-types`)
      .reply(200, mockAppointmentTypes);
    mock
      .onPut(`/ecp/appointments/available-slot?searchText=Texas`)
      .reply(200, submitFilter);
    global.navigator.geolocation = mockGeolocation;
    window.matchMedia = createMatchMedia("1920px");
  });

  test("EPIC_EPP-44_STORY_EPP-1547 -Verify if user able to view system date by default set as todays date", ({
    given,
    when,
    then,
    and,
  }) => {
    given("user launch the Marketing Site URL", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    then("User lands on to the screen", async () => {
      const mock = new MockAdapter(axios);
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn()
      };

      const domain = window.location.origin;
      mock.onGet(`/ecp/appointments/appointment-types`).reply(200, MOCK_SUGESTION);
      mock.onPut(`/ecp/appointments/available-slot?searchText=Texas`).reply(400, {});
      window = Object.assign(window, { innerWidth: 1500 });
      global.navigator.geolocation = mockGeolocation;
      container = render(
        <Provider store={store}>
          {Appointment.getLayout(<Appointment />)}
        </Provider>
      );
    });

    when(/^user navigate to "(.*)" calender field$/, (arg0) => {
      const dateField = container.getByText(/date/i)[0];
    });

    and(
      "user should see today’s date as date of appointment by default",
      () => { }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1547 -Verify if user able to change the date of appointment", ({
    given,
    when,
    then,
    and,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    then("User lands on to the screen", async () => {
      const mock = new MockAdapter(axios);
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn()
      };

      const domain = window.location.origin;
      mock.onGet(`/ecp/appointments/appointment-types`).reply(200, MOCK_SUGESTION);
      mock.onPut(`/ecp/appointments/available-slot?searchText=Texas`).reply(400, {});
      window = Object.assign(window, { innerWidth: 1500 });
      global.navigator.geolocation = mockGeolocation;
      container = render(
        <Provider store={store}>
          {Appointment.getLayout(<Appointment />)}
        </Provider>
      );;
    });

    when("user navigate to date calender field", () => {
      const dateField = container.getAllByLabelText(/date/i)[0];
    });

    and(
      "user should see today’s date as date of appointment by default",
      () => { }
    );

    when(/^user change the "(.*)" of appointment$/, (arg0) => {
      defaultValidation();
    });

    then("user should see change in the date", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1547 - Verify if user not be able to select past dates (< today)", ({
    given,
    when,
    then,
    and,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    then("User lands on to the screen", async () => {
      const mock = new MockAdapter(axios);
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn()
      };

      const domain = window.location.origin;
      mock.onGet(`/ecp/appointments/appointment-types`).reply(200, MOCK_SUGESTION);
      mock.onPut(`/ecp/appointments/available-slot?searchText=Texas`).reply(400, {});
      window = Object.assign(window, { innerWidth: 1500 });
      global.navigator.geolocation = mockGeolocation;
      container = render(
        <Provider store={store}>
          {Appointment.getLayout(<Appointment />)}
        </Provider>
      );;
    });

    when("user navigate to date calender field", () => {
      const dateField = container.getAllByLabelText(/date/i)[0];
    });

    and(/^user should see today’s "(.*)" as date of appointment by default$/, (arg0) => {
      const dateField = container.getAllByLabelText(/date/i)[0];
    });

    when(
      "user click on Date calender & select past dates from today's date",
      () => {
        const dateField = container.getAllByLabelText(/date/i)[0];
      }
    );

    then(
      "user should not able to select past dates from today's date",
      () => {
        const dateField = container.getAllByLabelText(/date/i)[0];
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1547 -Verify if user not allow to select a date that  3 months greater than today’s date", ({
    given,
    when,
    then,
    and,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    then("User lands on to the screen", async () => {
      const mock = new MockAdapter(axios);
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn()
      };

      const domain = window.location.origin;
      mock.onGet(`/ecp/appointments/appointment-types`).reply(200, MOCK_SUGESTION);
      mock.onPut(`/ecp/appointments/available-slot?searchText=Texas`).reply(400, {});
      window = Object.assign(window, { innerWidth: 1500 });
      global.navigator.geolocation = mockGeolocation;
      container = render(
        <Provider store={store}>
          {Appointment.getLayout(<Appointment />)}
        </Provider>
      );;
    });

    when("user navigate to date calender field", () => {
      const dateField = container.getAllByLabelText(/date/i)[0];
    });

    and(
      /^user should see today’s "(.*)" as date of appointment by default$/,
      (arg0) => { }
    );

    when(
      /^user click on Date calender & select (\d+) months greater than today's date$/,
      (arg0) => { }
    );

    then(
      /^user should not able to select the date (\d+) months greater than today's date$/,
      (arg0) => { }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1547 -Verify if user able to select any date within 3 month", ({
    given,
    when,
    then,
    and,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    then("User lands on to the screen", async () => {
      const mock = new MockAdapter(axios);
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn()
      };

      const domain = window.location.origin;
      mock.onGet(`/ecp/appointments/appointment-types`).reply(200, MOCK_SUGESTION);
      mock.onPut(`/ecp/appointments/available-slot?searchText=Texas`).reply(400, {});
      window = Object.assign(window, { innerWidth: 1500 });
      global.navigator.geolocation = mockGeolocation;
      container = render(
        <Provider store={store}>
          {Appointment.getLayout(<Appointment />)}
        </Provider>
      );;
    });

    when("user navigate to date calender field", () => {
      const dateField = container.getAllByLabelText(/date/i)[0];
    });

    and(
      /^user should see today’s "(.*)" as date of appointment by default$/,
      (arg0) => { }
    );

    when(
      /^user click on Date calender & select  the date within (\d+) months$/,
      (arg0) => { }
    );

    then(
      /^user should able to select the date  within (\d+) months$/,
      (arg0) => { }
    );
  });
});
