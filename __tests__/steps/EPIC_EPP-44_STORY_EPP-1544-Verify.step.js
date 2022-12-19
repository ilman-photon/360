import { act, fireEvent, render, waitFor, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { defineFeature, loadFeature } from "jest-cucumber";
const useRouter = jest.spyOn(require("next/router"), "useRouter");
import constants from "../../src/utils/constants";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  createMatchMedia,
  defaultValidation,
  renderAppointmentDetail,
  navigateToPatientPortalHome,
} from "../../__mocks__/commonSteps";
import {
  mockAppointmentTypes,
  submitFilter,
  MOCK_SUGESTION,
} from "../../__mocks__/mockResponse";
import store from "../../src/store/store";
import Appointment from "../../src/pages/patient/appointment";
import { Provider } from "react-redux";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1544.feature"
);

defineFeature(feature, (test) => {
  let container;
  const { APPOINTMENT_TEST_ID, SEARCH_PROVIDER_TEST_ID } = constants.TEST_ID;
  const mock = new MockAdapter(axios);
  beforeEach(() => {
    cleanup();
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

  test("EPIC_EPP-44_STORY_EPP-1544- Verify whether the Schedule your Eye Exam button in market site is navigating to the Appointment schedule page.", ({
    given,
    when,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      navigateToPatientPortalHome();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    then("user should see the Appointment schedule page", async () => {
      await renderAppointmentDetail();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1544- Verify whether the system is automatically taking the current location if enabled.", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      navigateToPatientPortalHome();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and("user navigates to the schedule appointment screen", async () => {
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

    then(
      "user should see the current location as default, if location is enabled.",
      () => { }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1544- Verify whether the user is able to search the location using City", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      navigateToPatientPortalHome();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and("user navigates to the schedule appointment screen", async () => {
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

    and("search the location using City option", () => {
      defaultValidation();
    });

    then("user should see the list of locations based upon City.", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1544-Verify whether the user is able to search the location using State", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      navigateToPatientPortalHome();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and("user navigates to the schedule appointment screen", async () => {
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

    and("search the location using State option.", () => {
      const locationField = container.getAllByLabelText(/City, state/i)[0];
      act(() => {
        fireEvent.change(locationField, { target: { value: "Las Vegas" } });
      })
      expect("Las Vegas").toEqual(locationField.value)
    });

    then("user should see the list of locations based upon State.", () => {
      const locationField = container.getAllByLabelText(/City, state/i)[0];
      act(() => {
        fireEvent.change(locationField, { target: { value: "Las Vegas" } });
      })
      expect("Las Vegas").toEqual(locationField.value)
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1544-Verify whether the user is able to search the location using Zipcode", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      navigateToPatientPortalHome();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and("user navigates to the schedule appointment screen", async () => {
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

    and("search the location using Zipcode option.", () => {
      const locationField = container.getAllByLabelText(/City, state/i)[0];
      act(() => {
        fireEvent.change(locationField, { target: { value: "Las Vegas" } });
      })
      expect("Las Vegas").toEqual(locationField.value)
    });

    then("user should see the list of locations based upon Zipcode.", () => {
      const locationField = container.getAllByLabelText(/City, state/i)[0];
      act(() => {
        fireEvent.change(locationField, { target: { value: "Las Vegas" } });
      })
      expect("Las Vegas").toEqual(locationField.value)
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1544-Verify whether the user is able to select the searched location", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      navigateToPatientPortalHome();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and("user navigates to the schedule appointment screen", async () => {
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

    and("enter the City name", () => {
      const locationField = container.getAllByLabelText(/City, state/i)[0];
      act(() => {
        fireEvent.change(locationField, { target: { value: "Las Vegas" } });
      })
      expect("Las Vegas").toEqual(locationField.value)
    });

    and("click on Search.", () => {
      // const searchBtn = container.getByTestId(constants.TEST_ID.APPOINTMENT_TEST_ID.searchbtn)
      // expect(searchBtn).toBeTruthy()
      // fireEvent.click(searchBtn)
    });

    and("user will see the location based upon city name.", () => {
      defaultValidation();
    });

    then("user should allow to select any listed location.", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1544- Verify user able to see the mentioned functionality on Schedule appointment page.", ({
    given,
    when,
    and,
  }) => {
    given("user launch the Marketing Site url", () => {
      navigateToPatientPortalHome();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and("user navigates to the schedule appointment screen", async () => {
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

    and(
      "user should see the location, date of appointment, Purpose of the visit, Insurance name",
      () => {
        const locationField = container.getAllByLabelText(/City, state/i)[0];
        const dateField = container.getAllByLabelText(/date/i)[0];
        const purposeField = container.getAllByLabelText(/Purpose of Visit/i)[0];
        const insuranceField = container.getAllByLabelText(/Insurance/i)[0];
        act(() => {
          fireEvent.change(locationField, { target: { value: "Las Vegas" } });
        })
        expect("Las Vegas").toEqual(locationField.value)
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1544-Verify whether the user is having the option to detect their location.", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      navigateToPatientPortalHome();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and("user navigates to the schedule appointment screen", async () => {
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

    and("click the option such as 'Locate me'.", () => {
      defaultValidation();
    });

    then("user present location should be displayed.", () => {
      defaultValidation();
    });
  });
});
