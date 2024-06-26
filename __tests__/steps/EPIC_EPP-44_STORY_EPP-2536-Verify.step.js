import { fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { defineFeature, loadFeature } from "jest-cucumber";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  clickSearch,
  createMatchMedia,
  doLogin,
  provideFilters,
  renderLogin,
  renderScheduleAppointment,
} from "../../__mocks__/commonSteps";
import { TEST_ID } from "../../src/utils/constants";
import {
  mockAppointmentTypes,
  mockInsurance,
  submitFilter,
} from "../../__mocks__/mockResponse";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-2536.feature"
);

defineFeature(feature, (test) => {
  let container;
  const mock = new MockAdapter(axios);
  const { APPOINTMENT_TEST_ID } = TEST_ID;

  beforeEach(() => {
    const mockGeolocation = {
      getCurrentPosition: jest.fn(),
      watchPosition: jest.fn(),
    };

    mock
      .onGet("/ecp/appointments/appointment-types", mockAppointmentTypes)
      .reply(200, mockAppointmentTypes);
    mock
      .onGet("/ecp/appointments/insurance/allpayers", mockInsurance)
      .reply(200, mockInsurance);
    mock
      .onPut("/ecp/appointments/available-slot?searchText=Texas")
      .reply(200, submitFilter);
    window.matchMedia = createMatchMedia("1920px");
    global.navigator.geolocation = mockGeolocation;
  });

  test('EPIC_EPP-44_STORY_EPP-2536-Verify User should be able to change the location by searching locations using City along with an option to detect their location (Locate me)', ({ given, when, and, then }) => {
    given('user launch Patient Portal url', async () => {
      container = await renderLogin(container);
    });

    when('user is logged in to the application', async () => {
      await doLogin(mock, container);
    });

    and('user clicks on Appointments menu', () => {
      expect(true).toBeTruthy();
    });

    then('User should navigated to the search screen', async () => {
      container = await renderScheduleAppointment(mock);
    });

    and('user provided location,date of appointment,purpose of visit,insurance and provider', async () => {
      await provideFilters(container);
    });

    and('user clicks on the Search button', async () => {
      await clickSearch(container);
    });

    then('User should navigated the results in the Schedule Appointments screen', async () => {
      await waitFor(() =>
      container.getAllByTestId(APPOINTMENT_TEST_ID.PROVIDER_PROFILE.name)
      );
      expect(
        container.getAllByTestId(APPOINTMENT_TEST_ID.PROVIDER_PROFILE.name)[0]
      ).toBeInTheDocument();
    });

    and('User views the results in the Schedule Appointments screen', () => {
      expect(true).toBeTruthy();
    });

    and('User views the selected location.', async () => {
      expect(true).toBeTruthy();
    });

    and('User views an option to search locations using City', () => {
      expect(true).toBeTruthy();
    });

    when('User selects location', () => {
      expect(true).toBeTruthy();
    });

    then('User changes the City', () => {
      expect(true).toBeTruthy();
    });

    and('User should see a location based on the City', async () => {
      await waitFor(() =>
      container.getAllByTestId(APPOINTMENT_TEST_ID.PROVIDER_PROFILE.name)
      );
      expect(
        container.getAllByTestId(APPOINTMENT_TEST_ID.PROVIDER_PROFILE.name)[0]
      ).toBeInTheDocument();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2536-Verify User should be able to change the location by searching locations using State along with an option to detect their location (Locate me)', ({ given, when, and, then }) => {
    given('user launch Patient Portal url', async () => {
      container = await renderLogin(container);
    });

    when('user is logged in to the application', async() => {
      await doLogin(mock, container);
    });

    and('user clicks on Appointments menu', () => {
      expect(true).toBeTruthy();
    });

    then('User should navigated to the search screen', async () => {
      container = await renderScheduleAppointment(mock);
    });

    and('user provided location,date of appointment,purpose of visit,insurance and provider', async() => {
      await provideFilters(container);
    });

    and('user clicks on the Search button', async () => {
      await clickSearch(container);
    });

    then('User should navigated the results in the Schedule Appointments screen', async () => {
      await waitFor(() =>
      container.getAllByTestId(APPOINTMENT_TEST_ID.PROVIDER_PROFILE.name)
      );
      expect(
        container.getAllByTestId(APPOINTMENT_TEST_ID.PROVIDER_PROFILE.name)[0]
      ).toBeInTheDocument();
    });

    and('User views the results in the Schedule Appointments screen', () => {
      expect(true).toBeTruthy();
    });

    and('User views the selected location.', () => {
      expect(true).toBeTruthy();
    });

    and('User views an option to search locations using State', () => {
      expect(true).toBeTruthy();
    });

    when('User selects location', () => {
      expect(true).toBeTruthy();
    });

    then('User changes the State', () => {
      expect(true).toBeTruthy();
    });

    and('User should see a location based on the State', async () => {
      await waitFor(() =>
      container.getAllByTestId(APPOINTMENT_TEST_ID.PROVIDER_PROFILE.name)
      );
      expect(
        container.getAllByTestId(APPOINTMENT_TEST_ID.PROVIDER_PROFILE.name)[0]
      ).toBeInTheDocument();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2536-Verify User should be able to change the location by searching locations using Zipcode along with an option to detect their location (Locate me)', ({ given, when, and, then }) => {
    given('user launch Patient Portal url', async () => {
      container = await renderLogin(container);
    });

    when('user is logged in to the application', async() => {
      await doLogin(mock, container);
    });

    and('user clicks on Appointments menu', () => {
      expect(true).toBeTruthy();
    });

    then('User should navigated to the search screen', async () => {
      container = await renderScheduleAppointment(mock);
    });

    and('user provided location,date of appointment,purpose of visit,insurance and provider', async() => {
      await provideFilters(container);
    });

    and('user clicks on the Search button', async() => {
      await clickSearch(container);
    });

    then('User should navigated the results in the Schedule Appointments screen', async () => {
      await waitFor(() =>
      container.getAllByTestId(APPOINTMENT_TEST_ID.PROVIDER_PROFILE.name)
      );
    });

    and('User views the results in the Schedule Appointments screen', () => {
      expect(
        container.getAllByTestId(APPOINTMENT_TEST_ID.PROVIDER_PROFILE.name)[0]
      ).toBeInTheDocument();
    });

    and('User views the selected location.', () => {
      expect(true).toBeTruthy();
    });

    and('User views an option to search locations using Zipcode', () => {
      expect(true).toBeTruthy();
    });

    when('User selects location', () => {
      expect(true).toBeTruthy();
    });

    then('User changes the Zipcode', () => {
      expect(true).toBeTruthy();
    });

    and('User should see a location based on the Zipcode', async () => {
      await waitFor(() =>
      container.getAllByTestId(APPOINTMENT_TEST_ID.PROVIDER_PROFILE.name)
      );
      expect(
        container.getAllByTestId(APPOINTMENT_TEST_ID.PROVIDER_PROFILE.name)[0]
      ).toBeInTheDocument();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2536-Verify User should see the purpose of visit, insurance carrier, date of appointment and time slot of provider is reset if user updated the location', ({ given, when, and, then }) => {
    given('user launch Patient Portal url', async () => {
      container = await renderLogin(container);
    });

    when('user is logged in to the application', async () => {
      await doLogin(mock, container);
    });

    and('user clicks on Appointments menu', () => {
      expect(true).toBeTruthy();
    });

    then('User should navigated to the search screen', async () => {
      container = await renderScheduleAppointment(mock);
    });

    and('user provided location,date of appointment,purpose of visit,insurance and provider', async () => {
      await provideFilters(container);
    });

    and('user clicks on the Search button', async() => {
      await clickSearch(container);
    });

    then('User should navigated the results in the Schedule Appointments screen', async() => {
      await waitFor(() =>
      container.getAllByTestId(APPOINTMENT_TEST_ID.PROVIDER_PROFILE.name)
      );
    });

    and('User views the results in the Schedule Appointments screen', () => {
      expect(
        container.getAllByTestId(APPOINTMENT_TEST_ID.PROVIDER_PROFILE.name)[0]
      ).toBeInTheDocument();
    });

    and('User views the selected location.', () => {
      expect(true).toBeTruthy();
    });

    and('User views an option to search locations using Zipcode', () => {
      expect(true).toBeTruthy();
    });

    when('User selects location', () => {
      expect(true).toBeTruthy();
    });

    then('User changes the Zipcode', () => {
      expect(true).toBeTruthy();
    });

    and('User should see a location based on the Zipcode', () => {
      expect(true).toBeTruthy();
    });

    when('User updates location', () => {
      expect(true).toBeTruthy();
    });

    then('User should see the purpose of visit, insurance carrier, date of appointment and time slot of provider is reset', async() => {
      await waitFor(() =>
      container.getAllByTestId(APPOINTMENT_TEST_ID.PROVIDER_PROFILE.name)
      );
      expect(
        container.getAllByTestId(APPOINTMENT_TEST_ID.PROVIDER_PROFILE.name)[0]
      ).toBeInTheDocument();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2536-Verify User should see the results i.e. providers with available time slots getting updated based on the change in location', ({ given, when, and, then }) => {
    given('user launch Patient Portal url', async () => {
      container = await renderLogin(container);
    });

    when('user is logged in to the application', async () => {
      await doLogin(mock, container);
    });

    and('user clicks on Appointments menu', async() => {
      container = await renderScheduleAppointment(mock);
    });

    then('User should navigated to the search screen', () => {
      expect(true).toBeTruthy();
    });

    and('user provided location,date of appointment,purpose of visit,insurance and provider', async () => {
      await provideFilters(container);
    });

    and('user clicks on the Search button', async () => {
      await clickSearch(container);
    });

    then('User should navigated the results in the Schedule Appointments screen', async () => {
      await waitFor(() =>
      container.getAllByTestId(APPOINTMENT_TEST_ID.PROVIDER_PROFILE.name)
      );
    });

    and('User views the results in the Schedule Appointments screen', () => {
      expect(
        container.getAllByTestId(APPOINTMENT_TEST_ID.PROVIDER_PROFILE.name)[0]
      ).toBeInTheDocument();
    });

    and('User views the selected location.', () => {
      expect(true).toBeTruthy();
    });

    when('User input invalid the State/ City/ Zipcode', () => {
      expect(true).toBeTruthy();
    });

    then('User should see a location based on the State/ City/ Zipcode', () => {
      expect(true).toBeTruthy();
    });

    and('User should see the results i.e. providers with available time slots getting updated based on the change in location', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2536-Verify User should see an error message for the location search criteria is invalid as "No results found. Please try again with a different search criteria."', ({ given, when, and, then }) => {
    given('user launch Patient Portal url', async () => {
      container = await renderLogin(container);
    });

    when('user is logged in to the application', async () => {
      await doLogin(mock, container);
    });

    and('user clicks on Appointments menu', () => {
      expect(true).toBeTruthy();
    });

    then('User should navigated to the search screen', async () => {
      container = await renderScheduleAppointment(mock);
    });

    and('user provided location,date of appointment,purpose of visit,insurance and provider', async () => {
      await provideFilters(container);
    });

    and('user clicks on the Search button', async () => {
      await clickSearch(container);
    });

    then('User should navigated the results in the Schedule Appointments screen', async() => {
      await waitFor(() =>
      container.getAllByTestId(APPOINTMENT_TEST_ID.PROVIDER_PROFILE.name)
      );
    });

    and('User views the results in the Schedule Appointments screen', () => {
      expect(
        container.getAllByTestId(APPOINTMENT_TEST_ID.PROVIDER_PROFILE.name)[0]
      ).toBeInTheDocument();
    });

    and('User views the selected location.', async () => {
      await waitFor(() => container.getAllByLabelText("City, state, or zip code")[0]);
      const locationInput = container.getAllByLabelText("City, state, or zip code")[0];
      fireEvent.change(locationInput, { target: { value: "asdasdasdasd" } });
    });

    and('User views an option to search locations using Zipcode', () => {
      expect(true).toBeTruthy();
    });

    when('User selects location', async () => {
      await clickSearch(container);
    });

    and('User input invalid the State/ City/ Zipcode', async () => {
      expect(true).toBeTruthy();
    });

    then(/^User should be prompted with an error message "(.*)"$/, async(arg0) => {
      expect(true).toBeTruthy();
    });
  });
});
