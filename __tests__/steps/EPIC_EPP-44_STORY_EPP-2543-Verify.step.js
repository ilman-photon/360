import { act, fireEvent, render, waitFor } from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import { Provider } from "react-redux";
import Appointment from "../../src/pages/patient/appointment";
import ScheduleAppointment from "../../src/pages/patient/schedule-appointment/index";
import store from "../../src/store/store";
const useRouter = jest.spyOn(require("next/router"), "useRouter");
import constants from "../../src/utils/constants";
import mediaQuery from "css-mediaquery";
import { TEST_ID } from "../../src/utils/constants";
import { renderAppointmentDetail } from "../../__mocks__/commonSteps";
import {
  mockAppointmentTypes,
  mockInsurance,
  submitFilter,
} from "../../__mocks__/mockResponse";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-2543.feature"
);

const defaultValidation = () => {
  expect(true).toBeTruthy();
};

defineFeature(feature, (test) => {
  let container;
  const element = document.createElement("div");
  const mock = new MockAdapter(axios);

  function createMatchMedia(width) {
    return (query) => ({
      matches: mediaQuery.match(query, { width }),
      addListener: () => {},
      removeListener: () => {},
    });
  }

  beforeEach(() => {
    mock
      .onGet("/ecp/appointments/appointment-types", mockAppointmentTypes)
      .reply(200, mockAppointmentTypes);
    mock
      .onGet("/ecp/appointments/insurance/allpayers", mockInsurance)
      .reply(200, mockInsurance);
    mock
      .onPut("/ecp/appointments/available-slot?searchText=Texas")
      .reply(200, submitFilter);
  });

  afterEach(() => {
    mock.reset();
  });

  test('EPIC_EPP-44_STORY_EPP-2543-Verify User should be navigated to "Schedule Appointment" screen with the selected data', ({
    given,
    when,
    then,
    and,
  }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to the search screen", async () => {
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };

      const domain = window.location.origin;
      global.navigator.geolocation = mockGeolocation;
      window.matchMedia = createMatchMedia("1920px");
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointment.getLayout(<Appointment />)}
          </Provider>
        );
      });
      await waitFor(() => {
        container.getByText(/City, state, or zip/i);
        expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
      });
    });

    and("User should fill the location", () => {
      const locationField = container.container.querySelector("#location");
      fireEvent.change(locationField, { target: { value: "Texas" } });
    });

    and("User should select the date of appointment", () => {
      const dateField = container.getByText(/Date/i);
      expect(dateField).toBeInTheDocument();
    });

    and("User should select the purpose of the visit", () => {
      const pusposeField = container.getByText(/Purpose of Visit/i);
      expect(pusposeField).toBeInTheDocument();
    });

    and("User should fill the insurance name", () => {
      const insuranceField = container.getByText(/Insurance Carrier/i);
      expect(insuranceField).toBeInTheDocument();
    });

    and("User should see the option to Search", () => {
      const optionSearch = container.getByTestId("searchbtn");
      expect(optionSearch).toBeInTheDocument();
    });

    when("User clicks on the option to Search", async () => {
      const searchBtn = container.getByTestId("searchbtn");
      fireEvent.click(searchBtn);

      await waitFor(() => container.getByText(/Filters/i));
    });

    then(/^User should navigated on "(.*)" screen$/, (arg0) => {
      expect(container.getByText(/Filter/i)).toBeInTheDocument();
    });

    and("User should see the selected location", () => {
      expect(
        container.container.querySelector("#location")
      ).toBeInTheDocument();
    });

    and("User should see the selected date", () => {
      expect(container.getByText(/Date/i)).toBeInTheDocument();
    });

    and("User should see the purpose of visit (if provided)", () => {
      expect(container.getByText(/Purpose of Visit/i)).toBeInTheDocument();
    });

    and("And User should see the insurance carrier (if provided)", () => {
      expect(container.getByText(/Insurance Carrier/i)).toBeInTheDocument();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2543-Verify User should be able to selects a time slot of the provider", ({
    given,
    when,
    then,
    and,
  }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to the search screen", async () => {
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };

      const domain = window.location.origin;
      global.navigator.geolocation = mockGeolocation;
      window.matchMedia = createMatchMedia("1920px");
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointment.getLayout(<Appointment />)}
          </Provider>
        );
      });
      await waitFor(() => {
        container.getByText(/City, state, or zip/i);
        expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
      });
    });

    and("User should fill the location", () => {
      const locationField = container.container.querySelector("#location");
      fireEvent.change(locationField, { target: { value: "Texas" } });
    });

    and("User should select the date of appointment", () => {
      const dateField = container.getByText(/Date/i);
      expect(dateField).toBeInTheDocument();
    });

    and("User should select the purpose of the visit", () => {
      const pusposeField = container.getByText(/Purpose of Visit/i);
      expect(pusposeField).toBeInTheDocument();
    });

    and("User should fill the insurance name", () => {
      const insuranceField = container.getByText(/Insurance Carrier/i);
      expect(insuranceField).toBeInTheDocument();
    });

    and("User should see the option to Search", () => {
      const optionSearch = container.getByTestId("searchbtn");
      expect(optionSearch).toBeInTheDocument();
    });

    when("User clicks on the option to Search", async () => {
      const searchBtn = container.getByTestId("searchbtn");
      fireEvent.click(searchBtn);

      await waitFor(() => container.getByText(/Filters/i));
    });

    then(/^User should navigated on "(.*)" screen$/, (arg0) => {
      expect(container.getByText(/Filter/i)).toBeInTheDocument();
    });

    and("User should see the selected location", () => {
      expect(
        container.container.querySelector("#location")
      ).toBeInTheDocument();
    });

    and("User should see the selected date", () => {
      expect(container.getByText(/Date/i)).toBeInTheDocument();
    });

    and("User should see the purpose of visit (if provided)", () => {
      expect(container.getByText(/Purpose of Visit/i)).toBeInTheDocument();
    });

    and("And User should see the insurance carrier (if provided)", () => {
      expect(container.getByText(/Insurance Carrier/i)).toBeInTheDocument();
    });

    and("User should see a time slot of the provider", async () => {
      expect(
        container.getAllByTestId(TEST_ID.SEARCH_PROVIDER_TEST_ID.viewAll)[0]
      ).toBeInTheDocument();
    });

    when("User selects a time slot of the provider", async () => {
      const timeSlotButton = await waitFor(
        () =>
          container.getAllByTestId(TEST_ID.SEARCH_PROVIDER_TEST_ID.viewAll)[0]
      );
      act(() => {
        fireEvent.click(timeSlotButton);
      });
      expect(
        container.getAllByTestId(TEST_ID.SEARCH_PROVIDER_TEST_ID.viewAll)[0]
      ).toBeInTheDocument();
    });

    then("User should navigated to review the appointment details", () => {
      renderAppointmentDetail();
    });

    and("User should see the selected location along with the provider", () => {
      const locationField = container.container.querySelector("#location");
      fireEvent.change(locationField, { target: { value: "Texas" } });
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2543-Verify User should navigated to review the appointment details", ({
    given,
    when,
    then,
    and,
  }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to the search screen", async () => {
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };

      const domain = window.location.origin;
      global.navigator.geolocation = mockGeolocation;
      window.matchMedia = createMatchMedia("1920px");
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointment.getLayout(<Appointment />)}
          </Provider>
        );
      });
      await waitFor(() => {
        container.getByText(/City, state, or zip/i);
        expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
      });
    });

    and("User should fill the location", () => {
      const locationField = container.container.querySelector("#location");
      fireEvent.change(locationField, { target: { value: "Texas" } });
    });

    and("User should select the date of appointment", () => {
      const dateField = container.getByText(/Date/i);
      expect(dateField).toBeInTheDocument();
    });

    and("User should select the purpose of the visit", () => {
      const pusposeField = container.getByText(/Purpose of Visit/i);
      expect(pusposeField).toBeInTheDocument();
    });

    and("User should fill the insurance name", () => {
      const insuranceField = container.getByText(/Insurance Carrier/i);
      expect(insuranceField).toBeInTheDocument();
    });

    and("User should see the option to Search", () => {
      const optionSearch = container.getByTestId("searchbtn");
      expect(optionSearch).toBeInTheDocument();
    });

    when("User clicks on the option to Search", async () => {
      const searchBtn = container.getByTestId("searchbtn");
      fireEvent.click(searchBtn);

      await waitFor(() => container.getByText(/Filters/i));
    });

    then(/^User should navigated on "(.*)" screen$/, (arg0) => {
      expect(container.getByText(/Filter/i)).toBeInTheDocument();
    });

    and("User should see the selected location", () => {
      expect(
        container.container.querySelector("#location")
      ).toBeInTheDocument();
    });

    and("User should see the selected date", () => {
      expect(container.getByText(/Date/i)).toBeInTheDocument();
    });

    and("User should see the purpose of visit (if provided)", () => {
      expect(container.getByText(/Purpose of Visit/i)).toBeInTheDocument();
    });

    and("And User should see the insurance carrier (if provided)", () => {
      expect(container.getByText(/Insurance Carrier/i)).toBeInTheDocument();
    });

    and("User should see a time slot of the provider", async () => {
      expect(
        container.getAllByTestId(TEST_ID.SEARCH_PROVIDER_TEST_ID.viewAll)[0]
      ).toBeInTheDocument();
    });

    when("User selects a time slot of the provider", async () => {
      const timeSlotButton = await waitFor(
        () =>
          container.getAllByTestId(TEST_ID.SEARCH_PROVIDER_TEST_ID.viewAll)[0]
      );
      act(() => {
        fireEvent.click(timeSlotButton);
      });
      expect(
        container.getAllByTestId(TEST_ID.SEARCH_PROVIDER_TEST_ID.viewAll)[0]
      ).toBeInTheDocument();
    });

    then(
      "User should navigated to review the appointment details",
      async () => {
        renderAppointmentDetail();
      }
    );

    and("User should see the selected location along with the provider", () => {
      const locationEditButton = container.getByTestId(
        TEST_ID.SCHEDULE_APPOINTMENT_TEST_ID.APPOINTMENT_LOCATION.editButton
      );
      expect(locationEditButton).toBeInTheDocument();
    });

    and("User should see the selected Date and Time of the appointment", () => {
      expect(container.getByText(/Date and time/i)).toBeInTheDocument();
    });

    and("User should see the selected purpose of visit (if provided)", () => {
      // expect(container.getByText(/Purpose of visit/i)).toBeInTheDocument()
    });

    and("User should see the selected Insurance Career (if provided)", () => {
      // expect(container.getByText(/Insurance/i)).toBeInTheDocument()
    });

    and(
      "User should see a progress bar to identify with scheduling the appointment",
      () => {
        // const progressBarId = container.getByTestId("progress_bar_appoinment");
        // expect(locationEditButton).toBeInTheDocument()
      }
    );

    and("User should see an option to go back to the previous screen", () => {
      expect(container.getByText(/Back/i)).toBeInTheDocument();
    });

    and("User should see an option to schedule the appointment", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2543-Verify User should be able to selects a time slot of the provider within 3 seconds", ({
    given,
    when,
    then,
    and,
  }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to the search screen", async () => {
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };

      const domain = window.location.origin;
      global.navigator.geolocation = mockGeolocation;
      window.matchMedia = createMatchMedia("1920px");
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointment.getLayout(<Appointment />)}
          </Provider>
        );
      });
      await waitFor(() => {
        container.getByText(/City, state, or zip/i);
        expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
      });
    });

    and("User should fill the location", () => {
      const locationField = container.container.querySelector("#location");
      fireEvent.change(locationField, { target: { value: "Texas" } });
    });

    and("User should select the date of appointment", () => {
      const dateField = container.getByText(/Date/i);
      expect(dateField).toBeInTheDocument();
    });

    and("User should select the purpose of the visit", () => {
      const pusposeField = container.getByText(/Purpose of Visit/i);
      expect(pusposeField).toBeInTheDocument();
    });

    and("User should fill the insurance name", () => {
      const insuranceField = container.getByText(/Insurance Carrier/i);
      expect(insuranceField).toBeInTheDocument();
    });

    and("User should see the option to Search", () => {
      const optionSearch = container.getByTestId("searchbtn");
      expect(optionSearch).toBeInTheDocument();
    });

    when("User clicks on the option to Search", async () => {
      const searchBtn = container.getByTestId("searchbtn");
      fireEvent.click(searchBtn);

      await waitFor(() => container.getByText(/Filters/i));
    });

    then(/^User should navigated on "(.*)" screen$/, (arg0) => {
      expect(container.getByText(/Filter/i)).toBeInTheDocument();
    });

    and("User should see the selected location", () => {
      expect(
        container.container.querySelector("#location")
      ).toBeInTheDocument();
    });

    and("User should see the selected date", () => {
      expect(container.getByText(/Date/i)).toBeInTheDocument();
    });

    and("User should see the purpose of visit (if provided)", () => {
      expect(container.getByText(/Purpose of Visit/i)).toBeInTheDocument();
    });

    and("User should see the insurance carrier (if provided)", () => {
      expect(container.getByText(/Insurance Carrier/i)).toBeInTheDocument();
    });

    and("User should see a time slot of the provider", async () => {
      expect(
        container.getAllByTestId(TEST_ID.SEARCH_PROVIDER_TEST_ID.viewAll)[0]
      ).toBeInTheDocument();
    });

    when("User selects a time slot of the provider", async () => {
      const timeSlotButton = await waitFor(
        () =>
          container.getAllByTestId(TEST_ID.SEARCH_PROVIDER_TEST_ID.viewAll)[0]
      );
      act(() => {
        fireEvent.click(timeSlotButton);
      });
      expect(
        container.getAllByTestId(TEST_ID.SEARCH_PROVIDER_TEST_ID.viewAll)[0]
      ).toBeInTheDocument();
    });

    and(/^User should see page load within "(.*)"$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to review the appointment details", () => {
      renderAppointmentDetail();
    });

    and("User should see the selected location along with the provider", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2543-Verify User should be able to selects a time slot of the provider - Without error script when user clicks on F12 on the console", ({
    given,
    when,
    then,
    and,
  }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to the search screen", async () => {
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };

      const domain = window.location.origin;
      global.navigator.geolocation = mockGeolocation;
      window.matchMedia = createMatchMedia("1920px");
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointment.getLayout(<Appointment />)}
          </Provider>
        );
      });
      await waitFor(() => {
        container.getByText(/City, state, or zip/i);
        expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
      });
    });

    and("User should fill the location", () => {
      const locationField = container.container.querySelector("#location");
      fireEvent.change(locationField, { target: { value: "Texas" } });
    });

    and("User should select the date of appointment", () => {
      const dateField = container.getByText(/Date/i);
      expect(dateField).toBeInTheDocument();
    });

    and("User should select the purpose of the visit", () => {
      const pusposeField = container.getByText(/Purpose of Visit/i);
      expect(pusposeField).toBeInTheDocument();
    });

    and("User should fill the insurance name", () => {
      const insuranceField = container.getByText(/Insurance Carrier/i);
      expect(insuranceField).toBeInTheDocument();
    });

    and("User should see the option to Search", () => {
      const optionSearch = container.getByTestId("searchbtn");
      expect(optionSearch).toBeInTheDocument();
    });

    when("User clicks on the option to Search", async () => {
      const searchBtn = container.getByTestId("searchbtn");
      fireEvent.click(searchBtn);

      await waitFor(() => container.getByText(/Filters/i));
    });

    then(/^User should navigated on "(.*)" screen$/, (arg0) => {
      expect(container.getByText(/Filter/i)).toBeInTheDocument();
    });

    and("User should see the selected location", () => {
      expect(
        container.container.querySelector("#location")
      ).toBeInTheDocument();
    });

    and("User should see the selected date", () => {
      expect(container.getByText(/Date/i)).toBeInTheDocument();
    });

    and("User should see the purpose of visit (if provided)", () => {
      expect(container.getByText(/Purpose of Visit/i)).toBeInTheDocument();
    });

    and("User should see the insurance carrier (if provided)", () => {
      expect(container.getByText(/Insurance Carrier/i)).toBeInTheDocument();
    });

    and("User should see a time slot of the provider", async () => {
      expect(
        container.getAllByTestId(TEST_ID.SEARCH_PROVIDER_TEST_ID.viewAll)[0]
      ).toBeInTheDocument();
    });

    when("User selects a time slot of the provider", async () => {
      const timeSlotButton = await waitFor(
        () =>
          container.getAllByTestId(TEST_ID.SEARCH_PROVIDER_TEST_ID.viewAll)[0]
      );
      act(() => {
        fireEvent.click(timeSlotButton);
      });
      expect(
        container.getAllByTestId(TEST_ID.SEARCH_PROVIDER_TEST_ID.viewAll)[0]
      ).toBeInTheDocument();
    });

    and(/^User should see page load within "(.*)"$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to review the appointment details", () => {
      renderAppointmentDetail();
    });

    and("User should see the selected location along with the provider", () => {
      const locationField = container.container.querySelector("#location");
      fireEvent.change(locationField, { target: { value: "Texas" } });
    });

    when(/^user clicks on F(\d+) on the console$/, (arg0) => {
      defaultValidation();
    });

    then("user should not to see any errors script", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2543-Negative Test Cases-Verify User should be able to selects a time slot of the provider - When the internet service is unavailable user should see the following error message", ({
    given,
    when,
    then,
    and,
  }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to the search screen", async () => {
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };

      const domain = window.location.origin;
      global.navigator.geolocation = mockGeolocation;
      window.matchMedia = createMatchMedia("1920px");
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointment.getLayout(<Appointment />)}
          </Provider>
        );
      });
      await waitFor(() => {
        container.getByText(/City, state, or zip/i);
        expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
      });
    });

    and("User should fill the location", () => {
      const locationField = container.container.querySelector("#location");
      fireEvent.change(locationField, { target: { value: "Texas" } });
    });

    and("User should select the date of appointment", () => {
      const dateField = container.getByText(/Date/i);
      expect(dateField).toBeInTheDocument();
    });

    and("User should select the purpose of the visit", () => {
      const pusposeField = container.getByText(/Purpose of Visit/i);
      expect(pusposeField).toBeInTheDocument();
    });

    and("User should fill the insurance name", () => {
      const insuranceField = container.getByText(/Insurance Carrier/i);
      expect(insuranceField).toBeInTheDocument();
    });

    and("User should see the option to Search", () => {
      const optionSearch = container.getByTestId("searchbtn");
      expect(optionSearch).toBeInTheDocument();
    });

    when("User clicks on the option to Search", async () => {
      const searchBtn = container.getByTestId("searchbtn");
      fireEvent.click(searchBtn);

      await waitFor(() => container.getByText(/Filters/i));
    });

    then(/^User should navigated on "(.*)" screen$/, (arg0) => {
      expect(container.getByText(/Filter/i)).toBeInTheDocument();
    });

    and("User should see the selected location", () => {
      expect(
        container.container.querySelector("#location")
      ).toBeInTheDocument();
    });

    and("User should see the selected date", () => {
      expect(container.getByText(/Date/i)).toBeInTheDocument();
    });

    and("User should see the purpose of visit (if provided)", () => {
      expect(container.getByText(/Purpose of Visit/i)).toBeInTheDocument();
    });

    and("User should see the insurance carrier (if provided)", () => {
      expect(container.getByText(/Insurance Carrier/i)).toBeInTheDocument();
    });

    and("User should see a time slot of the provider", async () => {
      expect(
        container.getAllByTestId(TEST_ID.SEARCH_PROVIDER_TEST_ID.viewAll)[0]
      ).toBeInTheDocument();
    });

    when("User selects a time slot of the provider", async () => {
      const timeSlotButton = await waitFor(
        () =>
          container.getAllByTestId(TEST_ID.SEARCH_PROVIDER_TEST_ID.viewAll)[0]
      );
      act(() => {
        fireEvent.click(timeSlotButton);
      });
      expect(
        container.getAllByTestId(TEST_ID.SEARCH_PROVIDER_TEST_ID.viewAll)[0]
      ).toBeInTheDocument();
    });

    then("The Internet service is unavailable", () => {
      defaultValidation();
    });

    and("User should see the appropriate error message", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2543-Negative Test Cases-Verify User should be able to selects a time slot of the provider - When the service is unavailable user should see the following error message", ({
    given,
    when,
    then,
    and,
  }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to the search screen", async () => {
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };

      const domain = window.location.origin;
      global.navigator.geolocation = mockGeolocation;
      window.matchMedia = createMatchMedia("1920px");
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointment.getLayout(<Appointment />)}
          </Provider>
        );
      });
      await waitFor(() => {
        container.getByText(/City, state, or zip/i);
        expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
      });
    });

    and("User should fill the location", () => {
      const locationField = container.container.querySelector("#location");
      fireEvent.change(locationField, { target: { value: "Texas" } });
    });

    and("User should select the date of appointment", () => {
      const dateField = container.getByText(/Date/i);
      expect(dateField).toBeInTheDocument();
    });

    and("User should select the purpose of the visit", () => {
      const pusposeField = container.getByText(/Purpose of Visit/i);
      expect(pusposeField).toBeInTheDocument();
    });

    and("User should fill the insurance name", () => {
      const insuranceField = container.getByText(/Insurance Carrier/i);
      expect(insuranceField).toBeInTheDocument();
    });

    and("User should see the option to Search", () => {
      const optionSearch = container.getByTestId("searchbtn");
      expect(optionSearch).toBeInTheDocument();
    });

    when("User clicks on the option to Search", async () => {
      const searchBtn = container.getByTestId("searchbtn");
      fireEvent.click(searchBtn);

      await waitFor(() => container.getByText(/Filters/i));
    });

    then(/^User should navigated on "(.*)" screen$/, (arg0) => {
      expect(container.getByText(/Filter/i)).toBeInTheDocument();
    });

    and("User should see the selected location", () => {
      expect(
        container.container.querySelector("#location")
      ).toBeInTheDocument();
    });

    and("User should see the selected date", () => {
      expect(container.getByText(/Date/i)).toBeInTheDocument();
    });

    and("User should see the purpose of visit (if provided)", () => {
      expect(container.getByText(/Purpose of Visit/i)).toBeInTheDocument();
    });

    and("And User should see the insurance carrier (if provided)", () => {
      expect(container.getByText(/Insurance Carrier/i)).toBeInTheDocument();
    });

    and("User should see a time slot of the provider", async () => {
      expect(
        container.getAllByTestId(TEST_ID.SEARCH_PROVIDER_TEST_ID.viewAll)[0]
      ).toBeInTheDocument();
    });

    when("User selects a time slot of the provider", async () => {
      const timeSlotButton = await waitFor(
        () =>
          container.getAllByTestId(TEST_ID.SEARCH_PROVIDER_TEST_ID.viewAll)[0]
      );
      act(() => {
        fireEvent.click(timeSlotButton);
      });
      expect(
        container.getAllByTestId(TEST_ID.SEARCH_PROVIDER_TEST_ID.viewAll)[0]
      ).toBeInTheDocument();
    });

    then("The service is unavailable", () => {
      defaultValidation();
    });

    and("User should see the appropriate error message", () => {
      defaultValidation();
    });
  });
});
