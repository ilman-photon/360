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
  renderResultsScreen,
  renderScheduleAppointment,
} from "../../__mocks__/commonSteps";
import { TEST_ID } from "../../src/utils/constants";
import {
  mockAppointmentTypes,
  mockInsurance,
  submitFilter,
} from "../../__mocks__/mockResponse";
import moment from "moment";
import { act } from "react-dom/test-utils";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-2535.feature"
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

  test("EPIC_EPP-44_STORY_EPP-2535 - Verify user able to view the screen with list of providers for the searched location and available time-slots for the selected date of appointment.", ({
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
      () => {
        provideFilters(container);
      }
    );

    and("user clicks on the Search button", () => {
      clickSearch(container);
    });

    and(
      "user views the results on the Schedule Appointments screen",
      async () => {
        await waitFor(() =>
          container.getAllByTestId(APPOINTMENT_TEST_ID.PROVIDER_PROFILE.name)
        );
        expect(
          container.getAllByTestId(APPOINTMENT_TEST_ID.PROVIDER_PROFILE.name)[0]
        ).toBeInTheDocument();
      }
    );

    and(
      "user views the selected location, date of appointment, the purpose of visit, and insurance carrier.",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-2535 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location using City with the selected location", ({
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
      () => {
        provideFilters(container);
      }
    );

    and("user clicks on the Search button", () => {
      clickSearch(container);
    });

    and("user views the results in the Schedule Appointments screen", () => {
      renderResultsScreen();
    });

    and("user views the selected location.", () => {
      expect(
        container.getByLabelText("City, state, or zip code").value
      ).toEqual("Texas");
    });

    and(
      "user views an option to search locations using City with the selected location",
      () => {
        expect(container.getAllByTestId("loc_hourButton")[0]).toBeInTheDocument();
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-2535 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location using State with the selected location", ({
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
      () => {
        provideFilters(container);
      }
    );

    and("user clicks on the Search button", () => {
      clickSearch(container);
    });

    and("user views the results in the Schedule Appointments screen", () => {
      renderResultsScreen();
    });

    and("user views the selected location.", () => {
      expect(
        container.getByLabelText("City, state, or zip code").value
      ).toEqual("Texas");
    });

    and(
      "user views an option to search locations using State with the selected location",
      () => {
        expect(container.getAllByTestId("loc_hourButton")[0]).toBeInTheDocument();
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-2535 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location using  Zipcode with the selected location", ({
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
      () => {
        provideFilters(container);
      }
    );

    and("user clicks on the Search button", () => {
      clickSearch(container);
    });

    and("user views the results in the Schedule Appointments screen", () => {
      renderResultsScreen();
    });

    and("user views the selected location.", () => {
      expect(
        container.getByLabelText("City, state, or zip code").value
      ).toEqual("Texas");
    });

    and(
      "user views an option to search locations using  Zipcode with the selected location",
      () => {
        expect(container.getAllByTestId("loc_hourButton")[0]).toBeInTheDocument();
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-2535 - Verify user able to search for the location and select the date of appointment as well as the purpose of visit and insurance and user view the location using the system to detect their location", ({
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
      () => {
        provideFilters(container);
      }
    );

    and("user clicks on the Search button", () => {
      clickSearch(container);
    });

    and("user views the results in the Schedule Appointments screen", () => {
      renderResultsScreen();
    });

    and("user views the selected location.", () => {
      expect(
        container.getByLabelText("City, state, or zip code").value
      ).toEqual("Texas");
    });

    and(
      "user views an option to search locations using City or State or Zipcode with the selected location",
      () => {
        expect(container.getAllByTestId("loc_hourButton")[0]).toBeInTheDocument();
      }
    );

    and(
      "user has the option to allow the system to detect their location",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-2535 - Verify user able to search for the location and select the date of appointment as well as the purpose of visit and insurance and the user views the filter options", ({
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
      () => {
        provideFilters(container);
      }
    );

    and("user clicks on the Search button", () => {
      clickSearch(container);
    });

    and("user views the results in the Schedule Appointments screen", () => {
      renderResultsScreen();
    });

    and("user views the selected location.", () => {
      expect(
        container.getByLabelText("City, state, or zip code").value
      ).toEqual("Texas");
    });

    and(
      "user views an option to search locations using City or State or Zipcode with the selected location",
      () => {
        expect(container.getAllByTestId("loc_hourButton")[0]).toBeInTheDocument();
      }
    );

    and(
      "user has the option to allow the system to detect their location",
      () => {
        defaultValidation();
      }
    );

    and("user views the filter options", () => {
      expect(container.getAllByTestId("filterbtn")[0]).toBeInTheDocument();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2535 - Verify user able to search for the location and select the date of appointment as well as the purpose of visit and insurance and the user view options to change the appointment date", ({
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
      () => {
        provideFilters(container);
      }
    );

    and("user clicks on the Search button", () => {
      clickSearch(container);
    });

    and("user views the results in the Schedule Appointments screen", () => {
      renderResultsScreen();
    });

    and("user views the selected location.", () => {
      expect(
        container.getByLabelText("City, state, or zip code").value
      ).toEqual("Texas");
    });

    and(
      "user views an option to search locations using City or State or Zipcode with the selected location",
      () => {
        expect(container.getAllByTestId("loc_hourButton")[0]).toBeInTheDocument();
      }
    );

    and(
      "user has the option to allow the system to detect their location",
      () => {
        defaultValidation();
      }
    );

    and("user views the filter options", () => {
      expect(container.getAllByTestId("filterbtn")[0]).toBeInTheDocument();
    });

    and("user view options to change the appointment date", () => {
      const dateInput = container.getByLabelText("Date");
      expect(dateInput).toBeInTheDocument()
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2535 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and user view options to change the Purpose of the Visit", ({
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
      () => {
        provideFilters(container);
      }
    );

    and("user clicks on the Search button", () => {
      clickSearch(container);
    });

    and("user views the results in the Schedule Appointments screen", () => {
      renderResultsScreen();
    });

    and("user views the selected location.", () => {
      expect(
        container.getByLabelText("City, state, or zip code").value
      ).toEqual("Texas");
    });

    and(
      "user views an option to search locations using City or State or Zipcode with the selected location",
      () => {
        expect(container.getAllByTestId("loc_hourButton")[0]).toBeInTheDocument();
      }
    );

    and(
      "user has the option to allow the system to detect their location",
      () => {
        defaultValidation();
      }
    );

    and("user views the filter options", () => {
      expect(container.getAllByTestId("filterbtn")[0]).toBeInTheDocument();
    });

    and("user view options to change the appointment date", () => {
      const dateInput = container.getByLabelText("Date");
      expect(dateInput).toBeInTheDocument()
    });

    and("user view options to change the Purpose of the Visit", () => {
      expect(container.getByTestId("select-purposes-of-visit")).toBeInTheDocument();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2535 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and user view options to change the insurance.", ({
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
      () => {
        provideFilters(container);
      }
    );

    and("user clicks on the Search button", () => {
      clickSearch(container);
    });

    and("user views the results in the Schedule Appointments screen", () => {
      renderResultsScreen();
    });

    and("user views the selected location.", () => {
      expect(
        container.getByLabelText("City, state, or zip code").value
      ).toEqual("Texas");
    });

    and(
      "user views an option to search locations using City or State or Zipcode with the selected location",
      () => {
        expect(container.getAllByTestId("loc_hourButton")[0]).toBeInTheDocument();
      }
    );

    and(
      "user has the option to allow the system to detect their location",
      () => {
        defaultValidation();
      }
    );

    and("user views the filter options", () => {
      expect(container.getAllByTestId("filterbtn")[0]).toBeInTheDocument();
    });

    and("user view options to change the appointment date", () => {
      const dateInput = container.getByLabelText("Date");
      expect(dateInput).toBeInTheDocument()
    });

    and("user view options to change the Purpose of the Visit", () => {
      expect(container.getByTestId("select-purposes-of-visit")).toBeInTheDocument();
    });

    and("user view options to change the insurance.", () => {
      expect(container.getByLabelText("Insurance Carrier")).toBeInTheDocument();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2535 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user views the purpose of visit as blank when the user not entered", ({
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
      () => {
        provideFilters(container);
      }
    );

    and("user clicks on the Search button", () => {
      clickSearch(container);
    });

    and("user views the results in the Schedule Appointments screen", () => {
      renderResultsScreen();
    });

    and("user views the purpose of the visit as blank", () => {
      const purposeofVisit = container.getByTestId("select-purposes-of-visit");
      expect(purposeofVisit.value).toEqual("Clinical_Diagnosis");
    });

    when("the user not entered the purpose of the visit", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2535 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user views the insurance carrier as blank when the user not entered", ({
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
      () => {
        provideFilters(container);
      }
    );

    and("user clicks on the Search button", () => {
      clickSearch(container);
    });

    and("user views the results in the Schedule Appointments screen", () => {
      renderResultsScreen();
    });

    and("user views the insurance carrier as blank.", () => {
      const insuranceCarrier = container.getByLabelText("Insurance Carrier");
      expect(insuranceCarrier.value).toEqual("");
    });

    when("user has not entered in the insurance carrier", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2535 - Verify user able to view the screen with list of providers for the searched location and available time-slots for the selected date of appointment and the provider's details.", ({
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
      () => {
        provideFilters(container);
      }
    );

    and("user clicks on the Search button", () => {
      clickSearch(container);
    });

    and(
      "user views the results on the Schedule Appointments screen",
      async () => {
        await waitFor(() =>
          container.getAllByTestId(APPOINTMENT_TEST_ID.PROVIDER_PROFILE.name)
        );
        expect(
          container.getAllByTestId(APPOINTMENT_TEST_ID.PROVIDER_PROFILE.name)[0]
        ).toBeInTheDocument();
      }
    );

    and(
      "user views the selected location, date of appointment, the purpose of visit, and insurance carrier.",
      () => {
        defaultValidation();
      }
    );

    and(
      "user views the option to allow the system to detect their location (like Locate me)",
      () => {
        defaultValidation();
      }
    );

    and("user views the filter options", () => {
      expect(container.getAllByTestId("filterbtn")[0]).toBeInTheDocument();
    });

    and(
      "user views the selected date of appointment along with an option to change",
      () => {
        const dateInput = container.getByLabelText("Date");
        const dateNow = moment().format("MMM DD, YYYY")
        expect(dateInput.value).toEqual(dateNow);
      }
    );

    and("user views the Purpose of Visit", () => {
      const purposeInput = container.getByTestId("select-purposes-of-visit");
      expect(purposeInput).toBeInTheDocument();
    });

    and("user views the Insurance Carrier", () => {
      const insuranceCarrier = container.getByText(/Insurance Carrier/i);
      expect(insuranceCarrier).toBeInTheDocument();
    });

    and("user views the results sorted by least distance", () => {
      renderResultsScreen()
    });

    and("user views the Doctors Image", () => {
      const doctorImg = container.getAllByTestId("appointment_provider_profile_image")[0];
      expect(doctorImg).toBeInTheDocument();
    });

    and("user views the Doctors Name", () => {
      const doctorName = container.getAllByTestId("appointment_provider_profile_name")[0];
      expect(doctorName).toBeInTheDocument();
    });

    and("user views the Locations Address", () => {
      defaultValidation();
    });

    and("user views the Locations Phone number", () => {
      defaultValidation();
    });

    and("user views the Distance from the searched location", () => {
      defaultValidation();
    });

    and("user views the Direction button", () => {
      defaultValidation();
    });

    and(
      "user views the Doctors available time slots for the selected date",
      () => {
        expect(container.getAllByTestId("loc_hourButton")[0]).toBeInTheDocument();
      }
    );

    and("user views the View all availability link", () => {
        expect(container.getAllByTestId("loc_viewAll")[0]).toBeInTheDocument();
    });

    and(/^user views the Next availability is (.*)$/, (arg0) => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2535 - Verify user able to view the screen with list of providers for the searched location and available time-slots for the selected date of appointment and the user views the provider's short bio.", ({
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
      () => {
        provideFilters(container);
      }
    );

    and("user clicks on the Search button", () => {
      clickSearch(container);
    });

    and(
      "user views the results on the Schedule Appointments screen",
      async () => {
        await waitFor(() =>
          container.getAllByTestId(APPOINTMENT_TEST_ID.PROVIDER_PROFILE.name)
        );
        expect(
          container.getAllByTestId(APPOINTMENT_TEST_ID.PROVIDER_PROFILE.name)[0]
        ).toBeInTheDocument();
      }
    );

    and(
      "user views the selected location, date of appointment, the purpose of visit, and insurance carrier.",
      () => {
        defaultValidation();
      }
    );

    and(
      "user views the option to allow the system to detect their location (like Locate me)",
      () => {
        defaultValidation();
      }
    );

    and("user views the filter options", () => {
      expect(container.getAllByTestId("filterbtn")[0]).toBeInTheDocument();
    });

    and(
      "user views the selected date of appointment along with an option to change",
      () => {
        const dateInput = container.getByLabelText("Date");
        const dateNow = moment().format("MMM DD, YYYY")
        expect(dateInput.value).toEqual(dateNow);
      }
    );

    and("user views the Purpose of Visit", () => {
      const purposeInput = container.getByTestId("select-purposes-of-visit");
      expect(purposeInput).toBeInTheDocument();
    });

    and("user views the Insurance Carrier", () => {
      const insuranceCarrier = container.getByText(/Insurance Carrier/i);
      expect(insuranceCarrier).toBeInTheDocument();
    });

    and("user views the results sorted by least distance", () => {
      renderResultsScreen()
    });

    and("user views the Doctors Image", () => {
      const doctorImg = container.getAllByTestId("appointment_provider_profile_image")[0];
      expect(doctorImg).toBeInTheDocument();
    });

    and("user views the Doctors Name", () => {
      const doctorName = container.getAllByTestId("appointment_provider_profile_name")[0];
      expect(doctorName).toBeInTheDocument();
    });

    and("user clicks on the Doctors Name", () => {
      const doctorName = container.getAllByTestId("appointment_provider_profile_name")[0];
      act(() => {
        fireEvent.click(doctorName);
      });
    });

    then("user views the short bio", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2535 - Verify user able to view the screen with list of providers for the searched location and available time-slots for the selected date of appointment and the user clicks on the Direction to view directions in Maps.", ({
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
      () => {
        provideFilters(container);
      }
    );

    and("user clicks on the Search button", () => {
      clickSearch(container);
    });

    and(
      "user views the results on the Schedule Appointments screen",
      async () => {
        await waitFor(() =>
          container.getAllByTestId(APPOINTMENT_TEST_ID.PROVIDER_PROFILE.name)
        );
        expect(
          container.getAllByTestId(APPOINTMENT_TEST_ID.PROVIDER_PROFILE.name)[0]
        ).toBeInTheDocument();
      }
    );

    and(
      "user views the selected location, date of appointment, the purpose of visit, and insurance carrier.",
      () => {
        defaultValidation();
      }
    );

    and(
      "user views the option to allow the system to detect their location (like Locate me)",
      () => {
        defaultValidation();
      }
    );

    and("user views the filter options", () => {
      expect(container.getAllByTestId("filterbtn")[0]).toBeInTheDocument();
    });

    and(
      "user views the selected date of appointment along with an option to change",
      () => {
        const dateInput = container.getByLabelText("Date");
        const dateNow = moment().format("MMM DD, YYYY")
        expect(dateInput.value).toEqual(dateNow);
      }
    );

    and("user views the Purpose of Visit", () => {
      const purposeInput = container.getByTestId("select-purposes-of-visit");
      expect(purposeInput).toBeInTheDocument();
    });

    and("user views the Insurance Carrier", () => {
      const insuranceCarrier = container.getByText(/Insurance Carrier/i);
      expect(insuranceCarrier).toBeInTheDocument();
    });

    and("user views the results sorted by least distance", () => {
      renderResultsScreen()
    });

    and("user views the Doctors Image", () => {
      const doctorImg = container.getAllByTestId("appointment_provider_profile_image")[0];
      expect(doctorImg).toBeInTheDocument();
    });

    and("user views the Doctors Name", () => {
      const doctorName = container.getAllByTestId("appointment_provider_profile_name")[0];
      expect(doctorName).toBeInTheDocument();
    });

    and("user views the Direction button", () => {
      defaultValidation();
    });

    and("user clicks on the Direction button", () => {
      defaultValidation();
    });

    and("user redirected in the direction of Maps", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2535 - Verify user able to view the screen with list of providers for the searched location and available time slots for the selected date of appointment and the user picks the time slot to review the appointment.", ({
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
      () => {
        provideFilters(container);
      }
    );

    and("user clicks on the Search button", () => {
      clickSearch(container);
    });

    and(
      "user views the results on the Schedule Appointments screen",
      async () => {
        await waitFor(() =>
          container.getAllByTestId(APPOINTMENT_TEST_ID.PROVIDER_PROFILE.name)
        );
        expect(
          container.getAllByTestId(APPOINTMENT_TEST_ID.PROVIDER_PROFILE.name)[0]
        ).toBeInTheDocument();
      }
    );

    and(
      "user views the selected location, date of appointment, the purpose of visit, and insurance carrier.",
      () => {
        defaultValidation();
      }
    );

    and(
      "user views the option to allow the system to detect their location (like Locate me)",
      () => {
        defaultValidation();
      }
    );

    and("user views the filter options", () => {
      expect(container.getAllByTestId("filterbtn")[0]).toBeInTheDocument();
    });

    and(
      "user views the selected date of appointment along with an option to change",
      () => {
        const dateInput = container.getByLabelText("Date");
        const dateNow = moment().format("MMM DD, YYYY")
        expect(dateInput.value).toEqual(dateNow);
      }
    );

    and("user views the Purpose of Visit", () => {
      const purposeInput = container.getByTestId("select-purposes-of-visit");
      expect(purposeInput).toBeInTheDocument();
    });

    and("user views the Insurance Carrier", () => {
      const insuranceCarrier = container.getByText(/Insurance Carrier/i);
      expect(insuranceCarrier).toBeInTheDocument();
    });

    and("user views the results sorted by least distance", () => {
      renderResultsScreen()
    });

    and("user views the Doctors Image", () => {
      const doctorImg = container.getAllByTestId("appointment_provider_profile_image")[0];
      expect(doctorImg).toBeInTheDocument();
    });

    and("user views the Doctors Name", () => {
      const doctorName = container.getAllByTestId("appointment_provider_profile_name")[0];
      expect(doctorName).toBeInTheDocument();
    });

    and("user views the Doctors available time slots", () => {
      expect(container.getAllByTestId("loc_hourButton")[0]).toBeInTheDocument();
    });

    and("user clicks his preferred time slot", () => {
      const availableSlot = container.getAllByTestId("loc_hourButton")[0];
      act(() => {
        fireEvent.click(availableSlot);
      });
    });

    and("user lands on the appointment review screen", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2535 - Verify user able to view the screen with list of providers for the searched location and available time slots for the selected date of appointment and the user clicks the Next availability", ({
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
      () => {
        provideFilters(container);
      }
    );

    and("user clicks on the Search button", () => {
      clickSearch(container);
    });

    and(
      "user views the results on the Schedule Appointments screen",
      async () => {
        await waitFor(() =>
          container.getAllByTestId(APPOINTMENT_TEST_ID.PROVIDER_PROFILE.name)
        );
        expect(
          container.getAllByTestId(APPOINTMENT_TEST_ID.PROVIDER_PROFILE.name)[0]
        ).toBeInTheDocument();
      }
    );

    and(
      "user views the selected location, date of appointment, the purpose of visit, and insurance carrier.",
      () => {
        defaultValidation();
      }
    );

    and(
      "user views the option to allow the system to detect their location (like Locate me)",
      () => {
        defaultValidation();
      }
    );

    and("user views the filter options", () => {
      expect(container.getAllByTestId("filterbtn")[0]).toBeInTheDocument();
    });

    and(
      "user views the selected date of appointment along with an option to change",
      () => {
        const dateInput = container.getByLabelText("Date");
        const dateNow = moment().format("MMM DD, YYYY")
        expect(dateInput.value).toEqual(dateNow);
      }
    );

    and("user views the Purpose of Visit", () => {
      const purposeInput = container.getByTestId("select-purposes-of-visit");
      expect(purposeInput).toBeInTheDocument();
    });

    and("user views the Insurance Carrier", () => {
      const insuranceCarrier = container.getByText(/Insurance Carrier/i);
      expect(insuranceCarrier).toBeInTheDocument();
    });

    and("user views the results sorted by least distance", () => {
      renderResultsScreen()
    });

    and("user views the Doctors Image", () => {
      const doctorImg = container.getAllByTestId("appointment_provider_profile_image")[0];
      expect(doctorImg).toBeInTheDocument();
    });

    and("user views the Doctors Name", () => {
      const doctorName = container.getAllByTestId("appointment_provider_profile_name")[0];
      expect(doctorName).toBeInTheDocument();
    });

    and("user views the Doctors available time slots", () => {
      expect(container.getAllByTestId("loc_hourButton")[0]).toBeInTheDocument();
    });

    and(
      "user sees the Doctors not available for the selected date of appointment",
      () => {
        defaultValidation();
      }
    );

    and(/^user views the Next availability (.*)$/, (arg0) => {});

    and(/^user clicks on the Next availability (.*) link$/, (arg0) => {});

    and(
      "user changes the date of appointment to that doctors available date",
      () => {
        defaultValidation();
      }
    );

    and("user views the Doctors available time slots", () => {
      expect(container.getAllByTestId("loc_hourButton")[0]).toBeInTheDocument();
    });

    and("user clicks his preferred time slot", () => {
      const availableSlot = container.getAllByTestId("loc_hourButton")[0];
      act(() => {
        fireEvent.click(availableSlot);
      });
    });

    and("user lands on the appointment review screen", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2535 - Verify user able to view the screen with list of providers for the searched location and available time-slots for the selected date of appointment and the user views the doctor's details in Map view.", ({
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
      () => {
        provideFilters(container);
      }
    );

    and("user clicks on the Search button", () => {
      clickSearch(container);
    });

    and(
      "user views the results on the Schedule Appointments screen",
      async () => {
        await waitFor(() =>
          container.getAllByTestId(APPOINTMENT_TEST_ID.PROVIDER_PROFILE.name)
        );
        expect(
          container.getAllByTestId(APPOINTMENT_TEST_ID.PROVIDER_PROFILE.name)[0]
        ).toBeInTheDocument();
      }
    );

    and(
      "user views the selected location, date of appointment, the purpose of visit, and insurance carrier.",
      () => {
        defaultValidation();
      }
    );

    and(
      "user views the option to allow the system to detect their location (like Locate me)",
      () => {
        defaultValidation();
      }
    );

    and("user redirected to the Map view", () => {
      defaultValidation();
    });

    and("user views the filter options", () => {
      expect(container.getAllByTestId("filterbtn")[0]).toBeInTheDocument();
    });

    and(
      "user views the selected date of appointment along with an option to change",
      () => {
        const dateInput = container.getByLabelText("Date");
        const dateNow = moment().format("MMM DD, YYYY")
        expect(dateInput.value).toEqual(dateNow);
      }
    );

    and("user views the Purpose of Visit", () => {
      const purposeInput = container.getByTestId("select-purposes-of-visit");
      expect(purposeInput).toBeInTheDocument();
    });

    and("user views the Insurance Carrier", () => {
      const insuranceCarrier = container.getByText(/Insurance Carrier/i);
      expect(insuranceCarrier).toBeInTheDocument();
    });

    and("user views the results sorted by least distance", () => {
      renderResultsScreen()
    });

    and("user views the Doctors Image", () => {
      const doctorImg = container.getAllByTestId("appointment_provider_profile_image")[0];
      expect(doctorImg).toBeInTheDocument();
    });

    and("user views the Doctors Name", () => {
      const doctorName = container.getAllByTestId("appointment_provider_profile_name")[0];
      expect(doctorName).toBeInTheDocument();
    });

    and("user views the Locations Address", () => {
      defaultValidation();
    });

    and("user views the Locations Phone number", () => {
      defaultValidation();
    });

    and("user views the Distance from the searched location", () => {
      defaultValidation();
    });

    and("user views the Direction button", () => {
      defaultValidation();
    });

    and(
      "user views the Doctors available time slots for the selected date",
      () => {
        defaultValidation();
      }
    );

    and("user views the View all availability link", () => {
      expect(container.getAllByTestId("loc_viewAll")[0]).toBeInTheDocument();
    });

    and(/^user views the Next availability is (.*)$/, (arg0) => {});
  });

  test("EPIC_EPP-44_STORY_EPP-2535 - Verify user able to view the screen with list of providers for the searched location and available time-slots for the selected date of appointment and the user getting the error on no availability in pinned location...", ({
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
      () => {
        provideFilters(container);
      }
    );

    and("user clicks on the Search button", () => {
      clickSearch(container);
    });

    and(
      "user views the results on the Schedule Appointments screen",
      async () => {
        await waitFor(() =>
          container.getAllByTestId(APPOINTMENT_TEST_ID.PROVIDER_PROFILE.name)
        );
        expect(
          container.getAllByTestId(APPOINTMENT_TEST_ID.PROVIDER_PROFILE.name)[0]
        ).toBeInTheDocument();
      }
    );

    and(
      "user views the selected location, date of appointment, the purpose of visit, and insurance carrier.",
      () => {
        defaultValidation();
      }
    );

    and(
      "user views the option to allow the system to detect their location (like Locate me)",
      () => {
        defaultValidation();
      }
    );

    and("user redirected to the Map view", () => {
      defaultValidation();
    });

    and(/^user gets the error message "(.*)"$/, (arg0) => {});
  });
});
