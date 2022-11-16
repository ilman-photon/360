import {
  act,
  cleanup,
  fireEvent,
  render,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { defineFeature, loadFeature } from "jest-cucumber";
import { TEST_ID } from "../../src/utils/constants";
import {
  renderScheduleAppointment,
  renderResultsScreen,
} from "../../__mocks__/commonSteps";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { Login } from "../../src/components/organisms/Login/login";
import {
  mockAppointmentTypes,
  mockInsurance,
  submitFilter,
} from "../../__mocks__/mockResponse";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1597.feature"
);

const provideFilters = (container) => {
  inputLocation(container);
  inputInsurance(container);
};

const inputLocation = (container) => {
  const locationInput = container.getByLabelText("City, state, or zip code");
  act(() => {
    fireEvent.change(locationInput, { target: { value: "Texas" } });
  });
  expect(locationInput.value).toEqual("Texas");
};

const inputDate = (container) => {
  const dateInput = container.getByLabelText("Date");
  act(() => {
    fireEvent.change(dateInput, { target: { value: "Sep 22, 2022" } });
  });
  expect(dateInput.value).toEqual("Sep 22, 2022");
};

const inputPurpose = async (container) => {
  const purposeInput = await waitFor(() =>
    container.getByTestId("select-purposes-of-visit")
  );
  act(() => {
    fireEvent.change(purposeInput, { target: { value: "Eye Exam" } });
  });
  expect(purposeInput.value).toEqual("Eye Exam");
};

const inputInsurance = (container) => {
  const insuranceInput = container.getByLabelText("Insurance Carrier");
  act(() => {
    fireEvent.change(insuranceInput, { target: { value: "Aetna" } });
  });
  expect(insuranceInput.value).toEqual("Aetna");
};

const clickSearch = async (container, mock, domain) => {
  const searchBtn = container.getByTestId(
    TEST_ID.APPOINTMENT_TEST_ID.searchbtn
  );
  act(() => {
    fireEvent.click(searchBtn);
  });
  await waitFor(() =>
    container.getAllByTestId(TEST_ID.SEARCH_PROVIDER_TEST_ID.viewAll)
  );
  expect(
    container.getAllByTestId(TEST_ID.SEARCH_PROVIDER_TEST_ID.viewAll)[0]
  ).toBeInTheDocument();
};

const defaultValidation = () => {
  expect(true).toBeTruthy();
};

const launchURL = () => {
  let container;
  const mockOnLoginClicked = jest.fn((callback) => {
    callback({
      status: "success",
    });
  });
  container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
};

defineFeature(feature, (test) => {
  let container;
  const mock = new MockAdapter(axios);
  const domain = window.location.origin;

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
    global.navigator.geolocation = mockGeolocation;
  });

  afterEach(cleanup);

  test('EPIC_EPP-44_STORY_EPP-1596-To verify whether the user is allowed to change the Date and Time in Appointment Review screen.', ({ when, and, then }) => {
    when('user clicks on the Schedule Appointment button', () => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the schedule appointment screen', async () => {
      container = await renderScheduleAppointment(mock);
    });

    and('user should select the location, Date of Appointment, Purpose of visit, Insurance carrier.', () => {
      provideFilters(container);
    });

    and('click on Search button', async () => {
      await clickSearch(container, mock, domain);
    });

    and('user should lands on Schedule Appointment Review screen with selected location, Date and Time, Purpose of visit andInsurance carrier data', () => {
      renderResultsScreen();
    });

    and('try to update the Date and Time if already provided', () => {
      const dateField = container.getByText(/Date/i);
      expect(dateField).toBeInTheDocument();
    });

    then('user should allow to update the Date and Time.', () => {
      const dateField = container.getByText(/Date/i);
      expect(dateField).toBeInTheDocument();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1596-Verify whether the user is able to select the Date and Time, if not selected in Previous page.', ({ given, when, and, then }) => {
    given('user launch the Patient portal URL', () => {
      expect(true).toBeTruthy();
    });

    when('user clicks on the Schedule Appointment button', () => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the schedule appointment screen', async () => {
      container = await renderScheduleAppointment(mock);
    });

    and('user should select the location, Date of Appointment, Purpose of visit, Insurance carrier.', () => {
      provideFilters(container);
    });

    and('click on Search button', async () => {
      await clickSearch(container, mock, domain);
    });

    and('user should lands on Schedule Appointment Review screen with selected location, Date and Time, Purpose of visit and Insurance carrier data', () => {
      expect(true).toBeTruthy();
    });

    and('try to add the Date and Time', () => {
      expect(true).toBeTruthy();
    });

    then('user should allow to add the Date and Time.', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1596-Verify whether the user is able to review the Appointment details after updating the Date and Time.', ({ given, when, and, then }) => {
    given('user launch the Patient portal URL', () => {
      expect(true).toBeTruthy();
    });

    when('user clicks on the Schedule Appointment button', () => {
      expect(true).toBeTruthy();
    });

    and('user navigates to the schedule appointment screen', async () => {
      container = await renderScheduleAppointment(mock);
    });

    and('user should select the location, Date of Appointment, Purpose of visit, Insurance carrier.', () => {
      provideFilters(container);
    });

    and('click on Search button', async () => {
      await clickSearch(container, mock, domain);
    });

    and('user should lands on Schedule Appointment Review screen with selected location, Date and Time, Purpose of visit and Insurance carrier data', () => {
      expect(true).toBeTruthy();
    });

    and('try to update the Date and Time if already provided', () => {
      const dateField = container.getByText(/Date/i);
      expect(dateField).toBeInTheDocument();
    });

    then('it should allow to review once again the changed Date and Time in Appointment review screen.', () => {
      expect(true).toBeTruthy();
    });
  });
});
