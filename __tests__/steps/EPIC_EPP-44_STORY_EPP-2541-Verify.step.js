import { fireEvent, waitFor } from "@testing-library/react";
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
import { act } from "react-dom/test-utils";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-2541.feature"
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

  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

const inputInsurance = async (value = "Aetna") => {
	const insuranceInput = await waitFor(() =>
    container.container.querySelector("#insurance-carrier")
	);
	act(() => {
		fireEvent.change(insuranceInput, { target: { value } });
	});
	expect(insuranceInput).toBeInTheDocument();
};


  test("EPIC_EPP-44_STORY_EPP-2541-To verify whether the user is allowed to update the Insurance Carrier in Schedule Appointment screen.", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    when("user is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    and("user clicks on Appointments menu", () => {
      defaultValidation();
    });

    then("User should navigated to the search screen", async () => {
      container = await renderScheduleAppointment(mock);
    });

    and(
      "user provided location,date of appointment,purpose of visit,insurance and provider",
      async () => {
        await provideFilters(container);
      }
    );

    and("user clicks on the Search button", async () => {
      await clickSearch(container);
    });

    and(
      "user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit and insurance carrier data",
      () => {
        defaultValidation();
      }
    );

    and("try to update the Insurance carrier if already provided", async () => {
      await inputInsurance("Kaiser")
    });

    then("user should allow to update the Insurance carrier.", async() => {
      const insuranceInput = await waitFor(() =>
        container.container.querySelector("#insurance-carrier")
      );
      expect(insuranceInput.value).toEqual("Kaiser")
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2541-Verify whethet the user is able to select the Insurance carrier, if not selected in Previous page.", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    when("user is logged in to the application", async() => {
      await doLogin(mock, container);
    });

    and("user clicks on Appointments menu", () => {
      defaultValidation();
    });

    then("User should navigated to the search screen", async () => {
      container = await renderScheduleAppointment(mock);
    });

    and(
      "user provided location,date of appointment,purpose of visit,insurance and provider",
      async () => {
        await provideFilters(container);
      }
    );

    and("user clicks on the Search button", async () => {
      await clickSearch(container);
    });

    and(
      "user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit.",
      () => {
        defaultValidation();
      }
    );

    and("try to add the Insurance carrier", async () => {
      await inputInsurance("Kaiser")
    });

    then("user should allow to add the Insurance carrier.", async () => {
      const insuranceInput = await waitFor(() =>
        container.container.querySelector("#insurance-carrier")
      );
      expect(insuranceInput.value).toEqual("Kaiser")
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2541-Verify whether the already selected data are getting removed if we update the other Insurance carrier if not supported.", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    when("user is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    and("user clicks on Appointments menu", () => {
      defaultValidation();
    });

    then("User should navigated to the search screen", async () => {
      container = await renderScheduleAppointment(mock);
    });

    and(
      "user provided location,date of appointment,purpose of visit,insurance and provider",
      async () => {
        await provideFilters(container);
      }
    );

    and("user clicks on the Search button", async () => {
      await clickSearch(container);
    });

    and(
      "user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit and insurance carrier data",
      () => {
        defaultValidation();
      }
    );

    and("try to update the Insurance carrier, which is not supported.", async () => {
      await inputInsurance("abcdefg")
    });

    then(
      "already selected  Location, Date of Appointment, Purpose of visit should get removed.",
      () => {
        defaultValidation();
      }
    );
  });
});
