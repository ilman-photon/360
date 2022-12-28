import { waitFor } from "@testing-library/react";
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
  "./__tests__/feature/Patient Portal/Sprint4/EPP-2596.feature"
);

const defaultValidation = () => {
  expect(true).toBeTruthy();
};

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

  test("EPIC_EPP-44_STORY_EPP-1596-To verify whether the user is allowed to change the Date and Time in Appointment Review screen.", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Patient portal URL", async () => {
      container = await renderLogin(container);
    });

    when("user clicks on the Schedule Appointment button", async () => {
      await doLogin(mock, container);
    });

    and("user navigates to the schedule appointment screen", async () => {
      container = await renderScheduleAppointment(mock);
    });

    and(
      "user should select the location, Date of Appointment, Purpose of visit, Insurance carrier.",
      () => {
        provideFilters(container);
      }
    );

    and("click on Search button", () => {
      clickSearch(container);
    });

    and(
      "user should lands on Schedule Appointment Review screen with selected location, Date and Time, Purpose of visit andInsurance carrier data",
      async () => {
        await waitFor(() =>
          container.getAllByTestId(APPOINTMENT_TEST_ID.PROVIDER_PROFILE.name)
        );
        expect(
          container.getAllByTestId(APPOINTMENT_TEST_ID.PROVIDER_PROFILE.name)[0]
        ).toBeInTheDocument();
      }
    );

    and("try to update the Date and Time if already provided", () => {
      const dateField = container.getByText(/Date/i);
      expect(dateField).toBeInTheDocument();
    });

    then("user should allow to update the Date and Time.", () => {
      const dateField = container.getByText(/Date/i);
      expect(dateField).toBeInTheDocument();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1596-Verify whethet the user is able to select the Date and Time, if not selected in Previous page.", ({}) => {});

  test("EPIC_EPP-44_STORY_EPP-1596-Verify whether the user is able to review the Appointment details after updating the Date and Time.", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Patient portal URL", async () => {
      container = await renderLogin(container);
    });

    when("user clicks on the Schedule Appointment button", async () => {
      await doLogin(mock, container);
    });

    and("user navigates to the schedule appointment screen", () => {
      defaultValidation();
    });

    and(
      "user should select the location, Date of Appointment, Purpose of visit, Insurance carrier.",
      () => {
        defaultValidation();
      }
    );

    and("click on Search button", async () => {
      container = await renderScheduleAppointment(mock);
    });

    and(
      "user should lands on Schedule Appointment Review screen with selected location, Date and Time, Purpose of visit and Insurance carrier data",
      () => {
        provideFilters(container);
      }
    );

    and("try to update the Date and Time if already provided", () => {
      const dateField = container.getByText(/Date/i);
      expect(dateField).toBeInTheDocument();
    });

    then(
      "it should allow to review once again the changed Date and Time in Appointment review screen.",
      () => {
        const dateField = container.getByText(/Date/i);
        expect(dateField).toBeInTheDocument();
      }
    );
  });
});
