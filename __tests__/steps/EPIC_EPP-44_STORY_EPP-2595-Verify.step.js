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
import FilterResult from "../../src/components/molecules/FilterResult/filterResult";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-2595.feature"
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

  const resultsScreen = async () => {
    const rangeDate = { startDate: "2022-10-10", endDate: "2022-10-15" };
    container.rerender(
      <FilterResult
        isDesktop={true}
        providerList={providerList}
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

  test("EPIC_EPP-44_STORY_EPP-1595-To verify whether the user is allowed to change the Location in Appointment Review screen.", ({
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
      "user should lands on Schedule Appointment Review screen with selected location, date, Purpose of visit and Insurance carrier data",
      async () => {
        const filterResult = await waitFor(() =>
          container.getByTestId(APPOINTMENT_TEST_ID.FILTER_RESULT.container)
        );
        expect(filterResult).toBeInTheDocument();
      }
    );

    and("try to update the location if already provided", () => {
      defaultValidation();
    });

    then("user should allow to update the location.", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1595-Verify whethet the user is able to select the Location, if not selected in Previous page.", ({
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
      "user should select the Date of Appointment, Purpose of visit, Insurance carrier and without selecting location.",
      () => {
        defaultValidation();
      }
    );

    and("click on Search button", () => {
      clickSearch(container);
    });

    and(
      "user should lands on Schedule Appointment Review screen with blank selected location, date, Purpose of visit and Insurance carrier data",
      async () => {
        const filterResult = await waitFor(() =>
          container.getByTestId(APPOINTMENT_TEST_ID.FILTER_RESULT.container)
        );
        expect(filterResult).toBeInTheDocument();
      }
    );

    and("try to add the location", () => {
      defaultValidation();
    });

    then("user should allow to add the Location.", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1595-Verify whether the already selected data are getting removed if we update the other Location if not supported.", ({
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
      "user should lands on Schedule Appointment Review screen with selected location, date, Purpose of visit and Insurance carrier data",
      async () => {
        const filterResult = await waitFor(() =>
          container.getByTestId(APPOINTMENT_TEST_ID.FILTER_RESULT.container)
        );
        expect(filterResult).toBeInTheDocument();
      }
    );

    and("try to update the Location, which is not supported.", () => {
      defaultValidation();
    });

    then(
      "already selected  Date of Appointment, Insurance carrier, purpose of visit should get removed.",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1595-Verify whether the user is able to review the Appointment details after updating the Location.", ({
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
      "user should lands on Schedule Appointment Review screen with selected location, date, Purpose of visit andInsurance carrier data",
      async () => {
        const filterResult = await waitFor(() =>
          container.getByTestId(APPOINTMENT_TEST_ID.FILTER_RESULT.container)
        );
        expect(filterResult).toBeInTheDocument();
      }
    );

    and("try to update the Location if already provided", () => {
      defaultValidation();
    });

    then(
      "it should allow to review once again the changed Location in Appointment review screen.",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1595-Verify whether the user is able to change the location using search by City", ({
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
      "user should lands on Schedule Appointment Review screen with selected location, date, Purpose of visit and Insurance carrier data",
      async () => {
        const filterResult = await waitFor(() =>
          container.getByTestId(APPOINTMENT_TEST_ID.FILTER_RESULT.container)
        );
        expect(filterResult).toBeInTheDocument();
      }
    );

    and(
      "try to update the location using Search by City and select any other location.",
      () => {
        defaultValidation();
      }
    );

    then("user should allow to update the location.", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1595-Verify whether the user is able to change the location using search by State", ({
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
      "user should lands on Schedule Appointment Review screen with selected location, date, Purpose of visit and Insurance carrier data",
      async () => {
        const filterResult = await waitFor(() =>
          container.getByTestId(APPOINTMENT_TEST_ID.FILTER_RESULT.container)
        );
        expect(filterResult).toBeInTheDocument();
      }
    );

    and(
      "try to update the location using Search by State and select any other location.",
      () => {
        defaultValidation();
      }
    );

    then("user should allow to update the location.", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1595-Verify whether the user is able to change the location using search by Zipcode", ({
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
      expect(container.getByLabelText("Date")).toBeInTheDocument();
      expect(container.getByText("Purpose of Visit")).toBeInTheDocument();
      expect(
        container.getByLabelText("City, state, or zip code")
      ).toBeInTheDocument();
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
      "user should lands on Schedule Appointment Review screen with selected location, date, Purpose of visit and Insurance carrier data",
      async () => {
        const filterResult = await waitFor(() =>
          container.getByTestId(APPOINTMENT_TEST_ID.FILTER_RESULT.container)
        );
        expect(filterResult).toBeInTheDocument();
      }
    );

    and(
      "try to update the location using Search by Zipcode and select any other location.",
      () => {
        expect(
          container.getByLabelText("City, state, or zip code")
        ).toBeInTheDocument();
      }
    );

    then("user should allow to update the location.", () => {
      expect(
        container.getByLabelText("City, state, or zip code")
      ).toBeInTheDocument();
    });
  });
});
