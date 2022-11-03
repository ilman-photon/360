import "@testing-library/jest-dom/extend-expect";
import {
  act,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import { TEST_ID } from "../../src/utils/constants";
import FilterResult from "../../src/components/molecules/FilterResult/filterResult";import {
  clickSearch,
  createMatchMedia,
  doLogin,
  renderLogin,
  renderScheduleAppointment,
  inputLocation,
  inputPurpose,
} from "../../__mocks__/commonSteps";
import {
  mockAppointmentTypes,
  mockInsurance,
  submitFilter,
} from "../../__mocks__/mockResponse";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-2550.feature"
);

defineFeature(feature, (test) => {
  let container;
  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };
  const mock = new MockAdapter(axios);
  const { FORGOT_TEST_ID, APPOINTMENT_TEST_ID } = TEST_ID;
  afterEach(() => {
    mock.reset();
  });

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

  const resultsScreen = async () => {
    const rangeDate = { startDate: "2022-10-10", endDate: "2022-10-15" };
    container.rerender(
      <FilterResult
        isDesktop={true}
        providerList={mockProviderList}
        rangeDate={rangeDate}
        purposeOfVisitData={[]}
        insuranceCarrierData={[]}
        googleApiKey={"Test"}
        filterData={{
          location: "",
          date: "",
          purposeOfVisit: "",
          insuranceCarrier: "",
        }}
      />
    );
    expect(
      await waitFor(() =>
        container.getByTestId(APPOINTMENT_TEST_ID.FILTER_RESULT.container)
      )
    ).toBeInTheDocument();
  };

  test('EPIC_EPP-44_STORY_EPP-2550 - Verify the user able to change the provider while reviewing the appointment from patient portal.', ({ given, when, and, then }) => {
    given('user launch Patient Portal url', async () => {
      container = await renderLogin(container);
    });

    when('user is logged in to the application', async () => {
      await doLogin(mock, container);
    });

    and('user clicks to Appointments menu', () => {
      defaultValidation()
    });

    then('user navigates to Appointments screen', () => {
      defaultValidation()
    });

    and('user lands on \'Appointments\' screen', () => {
      defaultValidation()
    });

    and('user views the schedule new appointments link', () => {
      defaultValidation()
    });

    and('user clicks on the schedule new appointments', () => {
      defaultValidation()
    });

    then('user navigates to the search screen', async () => {
      container = await renderScheduleAppointment();
    });

    and('user enters the location', () => {
      inputLocation(container)
    });

    and('user selects the date of appointment', () => {
      defaultValidation()
    });

    and('user chooses the purpose of the visit', () => {
      inputPurpose(container)
    });

    and('user enters the insurance name', async () => {
      const insuranceInput = await waitFor(() =>
      container.getByLabelText("Insurance Carrier")
    );
    act(() => {
      fireEvent.change(insuranceInput, { target: { value: "Aetna" } });
    });
    });

    and('user clicks on the Search button', () => {
      clickSearch(container);
    });

    and('user views the results in the Schedule Appointments screen', () => {
      defaultValidation()
    });

    and('user selects the Provider', () => {
      defaultValidation()
    });

    and('user selected a time slot', () => {
      defaultValidation()
    });

    and('user lands on the review of the appointment details', () => {
      defaultValidation()
    });

    and('user views the Location section', () => {
      expect(
        container.getAllByLabelText("City, state, or zip code")[0].value
      ).toEqual("Texas");
    });

    and('user views the selected Provider and time slot', () => {
      defaultValidation()
    });

    and('user clicks on the Location section Edit link', () => {
      defaultValidation()
    });

    and('user views the results in the Schedule Appointments screen', () => {
      defaultValidation()
    });

    and('user selects the Provider', () => {
      defaultValidation()
    });

    and('user selects the time slot', () => {
      defaultValidation()
    });

    and('user lands on the review of the appointment details', () => {
      defaultValidation()
    });
  });
});
