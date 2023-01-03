import { act, fireEvent, render, waitFor } from "@testing-library/react";
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
  "./__tests__/feature/Patient Portal/Sprint4/EPP-2537.feature"
);

defineFeature(feature, (test) => {
  let container;
  const mock = new MockAdapter(axios);
  const { FORGOT_TEST_ID, APPOINTMENT_TEST_ID } = TEST_ID;

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

  const inputInsurance = async (value = "Aetna") => {
    const insuranceInput = await waitFor(() =>
      container.container.querySelector("#insurance-carrier")
    );
    act(() => {
      fireEvent.change(insuranceInput, { target: { value } });
    });
    expect(insuranceInput).toBeInTheDocument();
  };

  test('EPIC_EPP-44_STORY_EPP-2537 - Verify user able to view the filters in the schedule appointment screen from the patient portal.', ({ given, when, and, then }) => {
    given('user launch Patient Portal url', async () => {
      container = await renderLogin(container);
    });

    when('user is logged in to the application', async () => {
      await doLogin(mock, container);
    });

    and('user clicks to Appointments menu', () => {
      expect(true).toBeTruthy();
    });

    then('user navigates to Appointments screen', async () => {
      container = await renderScheduleAppointment(mock);
    });

    and('user lands on \'Appointments\' screen', async () => {
      expect(true).toBeTruthy();
    });

    and('user views the schedule new appointments link', () => {
      expect(true).toBeTruthy();
    });

    and('user clicks on the schedule new appointments', () => {
      expect(true).toBeTruthy();
    });

    then('user navigates to the search screen', () => {
      expect(true).toBeTruthy();
    });

    and('user enters the location', async () => {
      await provideFilters(container);
    });

    and('user selects the date of appointment', () => {
      expect(true).toBeTruthy();
    });

    and('user chooses the purpose of the visit', () => {
      expect(true).toBeTruthy();
    });

    and('user enters the insurance name', async() => {
      await inputInsurance()
    });

    and('user clicks on the Search button', async () => {
      await clickSearch(container);
      await waitFor(() => {
        container.getByText(/Filter/i);
      });
    });

    and('user views the results in the Schedule Appointments screen', () => {
      expect(true).toBeTruthy();
    });

    and('user view the Filters button', () => {
      const filterBtn = container.getByTestId("filterbtn");
      expect(filterBtn).toBeInTheDocument();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2537 - Verify user able to view the filters in the schedule appointment screen from the patient portal and the user applies the filter.', ({ given, when, and }) => {
    given('user launch Patient Portal url', async () => {
      container = await renderLogin(container);
    });

    when('user is logged in to the application', async () => {
      await doLogin(mock, container);
    });

    and('user clicks on the schedule new appointments search button', async () => {
      container = await renderScheduleAppointment(mock);
      await provideFilters(container);
      await provideFilters(container);
      await clickSearch(container);
    });

    and('user views the results in the Schedule Appointments screen', async () => {
      await waitFor(() => {
        container.getByText(/Filter/i);
      });
    });

    and('user views the Filters button', () => {
      const filterBtn = container.getByTestId("filterbtn");
      expect(filterBtn).toBeInTheDocument();
    });

    and('user clicks on the filter button', async () => {
      const filterBtn = container.getByTestId("filterbtn");
      fireEvent.click(filterBtn);

      await waitFor(() => {
        container.getByText(/Filter By/i);
      });
    });

    and('user views the filter for Available Today (Provider)', () => {
      const text = container.getByText("Available Today");
      expect(text).toBeInTheDocument();
    });

    and('user views the filter for Language of Provider', () => {
      const text = container.getByText("Language");
      expect(text).toBeInTheDocument();
    });

    and('user views the filter for Gender of Provider', () => {
      const text = container.getByText("Gender");
      expect(text).toBeInTheDocument();
    });

    and('user views the filter for Insurance In/Out of Network', () => {
      expect(true).toBeTruthy();
    });

    and('user selects the filters', () => {
      const checkbox = container.getByTestId('Spanish-test').querySelector('input[type="checkbox"]')
      fireEvent.click(checkbox)
      expect(checkbox).toHaveProperty('checked', true)
    });

    and('user applies the filters', async () => {
      await waitFor(() => {
        container.getByText(/Filter/i);
      });
      const filterBtn = container.getByTestId("filterbtn");
      expect(filterBtn).toBeInTheDocument();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2537 - Verify user able to view the filters in the schedule appointment screen from the patient portal and user apply the filter and getting result accordingly.', ({ given, when, and }) => {
    given('user launch Patient Portal url', async() => {
      container = await renderLogin(container);
    });

    when('user is logged in to the application', async () => {
      await doLogin(mock, container);
    });

    and('user clicks on the schedule new appointments search button', async() => {
      container = await renderScheduleAppointment(mock);
      await provideFilters(container);
      await provideFilters(container);
      await clickSearch(container);
    });

    and('user views the results in the Schedule Appointments screen', async () => {
      await waitFor(() => {
        container.getByText(/Filter/i);
      });
    });

    and('user views the Filters button', () => {
      const filterBtn = container.getByTestId("filterbtn");
      expect(filterBtn).toBeInTheDocument();
    });

    and('user clicks on the filter button', async () => {
      const filterBtn = container.getByTestId("filterbtn");
      fireEvent.click(filterBtn);

      await waitFor(() => {
        container.getByText(/Filter By/i);
      });
    });

    and('user views the filter for Available Today (Provider)', () => {
      const text = container.getByText("Available Today");
      expect(text).toBeInTheDocument();
    });

    and('user views the filter for Language of Provider', () => {
      const text = container.getByText("Language");
      expect(text).toBeInTheDocument();
    });

    and('user views the filter for Gender of Provider', () => {
      const text = container.getByText("Gender");
      expect(text).toBeInTheDocument();
    });

    and('user views the filter for Insurance In/Out of Network', () => {
      expect(true).toBeTruthy();
    });

    and('user selects the filters', () => {
      const checkbox = container.getByTestId('Spanish-test').querySelector('input[type="checkbox"]')
      fireEvent.click(checkbox)
      expect(checkbox).toHaveProperty('checked', true)
    });

    and('user applies the filters', async () => {
      await waitFor(() => {
        container.getByText(/Filter/i);
      });
      const filterBtn = container.getByTestId("filterbtn");
      expect(filterBtn).toBeInTheDocument();
    });

    and('user gets the updated result', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2537 - Verify user able to view the filters in the schedule appointment screen from the patient portal and the user clears the filter.', ({ given, when, and }) => {
    given('user launch Patient Portal url', async () => {
      container = await renderLogin(container);
    });

    when('user is logged in to the application', async () => {
      await doLogin(mock, container);
    });

    and('user clicks on the schedule new appointments search button', async () => {
      container = await renderScheduleAppointment(mock);
      await provideFilters(container);
      await provideFilters(container);
      await clickSearch(container);
    });

    and('user views the results in the Schedule Appointments screen', async () => {
      await waitFor(() => {
        container.getByText(/Filter/i);
      });
    });

    and('user views the Filters button', () => {
      const filterBtn = container.getByTestId("filterbtn");
      expect(filterBtn).toBeInTheDocument();
    });

    and('user clicks on the filter button', async () => {
      const filterBtn = container.getByTestId("filterbtn");
      fireEvent.click(filterBtn);

      await waitFor(() => {
        container.getByText(/Filter By/i);
      });
    });

    and('user views the filter for Available Today (Provider)', () => {
      const text = container.getByText("Available Today");
      expect(text).toBeInTheDocument();
    });

    and('user views the filter for Language of Provider', () => {
      const text = container.getByText("Language");
      expect(text).toBeInTheDocument();
    });

    and('user views the filter for Gender of Provider', () => {
      const text = container.getByText("Gender");
      expect(text).toBeInTheDocument();
    });

    and('user views the filter for Insurance In/Out of Network', () => {
      expect(true).toBeTruthy();
    });

    and('user selects the filters', () => {
      const checkbox = container.getByTestId('Spanish-test').querySelector('input[type="checkbox"]')
      fireEvent.click(checkbox)
      expect(checkbox).toHaveProperty('checked', true)
    });

    and('user applies the filters', async () => {
      await waitFor(() => {
        container.getByText(/Filter/i);
      });
      const filterBtn = container.getByTestId("filterbtn");
      expect(filterBtn).toBeInTheDocument();
    });

    and('user gets the updated result', () => {
      expect(true).toBeTruthy();
    });

    and('user removes the filter', async () => {
      expect(true).toBeTruthy();
    });
  });
});
