import { defineFeature, loadFeature } from "jest-cucumber";
import { act, fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../src/store/store";
const useRouter = jest.spyOn(require("next/router"), "useRouter");
import constants from "../../src/utils/constants";
import FilterHeading from "../../src/components/molecules/FilterHeading/filterHeading";
import FilterResult from "../../src/components/molecules/FilterResult/filterResult";
import ScheduleAppointmentPage from "../../src/pages/patient/schedule-appointment";
import mediaQuery from "css-mediaquery";
import {
  navigateToPatientPortalHome,
  renderLogin,
} from "../../__mocks__/commonSteps";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import Cookies from "universal-cookie";
import HomePage from "../../src/pages/patient";
import {
  mockProviderList,
  MOCK_SUGESTION,
  MOCK_APPOINTMENT,
  MOCK_PRESCRIPTION,
} from "../../__mocks__/mockResponse";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1571.feature"
);

defineFeature(feature, (test) => {
  let container;
  const { APPOINTMENT_TEST_ID, SEARCH_PROVIDER_TEST_ID } = constants.TEST_ID;

  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  function createMatchMedia(width) {
    return (query) => ({
      matches: mediaQuery.match(query, { width }),
      addListener: () => {},
      removeListener: () => {},
    });
  }

  const searchScreen = () => {
    window.matchMedia = createMatchMedia("1920px");
    const mockFilterData = {
      date: null,
      location: "",
      insuranceCarrier: "",
      purposeOfVisit: "",
    };
    container = render(
      <FilterHeading
        isDesktop={true}
        isTablet={false}
        onSearchProvider={() => {
          jest.fn();
        }}
        onSwapButtonClicked={() => {
          jest.fn();
        }}
        isGeolocationEnabled={false}
        filterData={mockFilterData}
        purposeOfVisitData={[]}
        insuranceCarrierData={[]}
      />
    );
  };

  const inputLocation = async () => {
    const locationInput = await waitFor(() =>
      container.getByLabelText("City, state, or zip code")
    );
    act(() => {
      fireEvent.change(locationInput, { target: { value: "Texas" } });
    });
  };

  const inputDate = async () => {
    const dateInput = await waitFor(() => container.getByLabelText("Date"));
    act(() => {
      fireEvent.change(dateInput, { target: { value: "22-09-2022" } });
    });
  };

  const inputPurpose = async () => {
    const purposeInput = await waitFor(() =>
      container.getByTestId("select-purposes-of-visit")
    );
    act(() => {
      fireEvent.change(purposeInput, { target: { value: "Eye Exam" } });
    });
  };

  const inputInsurance = async () => {
    const insuranceInput = await waitFor(() =>
      container.getByLabelText("Insurance Carrier")
    );
    act(() => {
      fireEvent.change(insuranceInput, { target: { value: "Aetna" } });
    });
  };

  const clickSearch = async () => {
    const searchBtn = await waitFor(() =>
      container.getByTestId(APPOINTMENT_TEST_ID.searchbtn)
    );
    fireEvent.click(searchBtn);
  };

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

  test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the "Forgot Password" screen with different option to sync the appointment - Without error script when user clicks on F12 on the console', ({
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

    then("User should navigated to the search screen", () => {
      searchScreen();
    });

    and("User should fill the location", () => {
      inputLocation();
    });

    and("User should select the Date & Time with provider", () => {
      inputDate();
    });

    and("User should select the purpose of the visit", () => {
      inputPurpose();
    });

    and("User has reviewed the appointment details", () => {
      resultsScreen();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      renderLogin();
    });

    and(/^User should see the "(.*)" button$/, (arg0) => {
      expect(
        container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn)
      ).toBeInTheDocument();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should navigated to "(.*)" screen$/, async (arg0) => {
      await navigateToPatientPortalHome();
    });

    and("User should input the mandatory fields", () => {
      defaultValidation();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should navigated "(.*)"screen$/, (arg0) => {
      defaultValidation();
    });

    and(/^User should see the "(.*)" button$/, (arg0) => {
      expect(
        container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn)
      ).toBeInTheDocument();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should navigated "(.*)"$/, (arg0) => {
      defaultValidation();
    });

    and(/^User should fill (\d+) questions$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should navigated to "(.*)" screen$/, async (arg0) => {
      defaultValidation();
    });

    and(/^User should input valid (.*) and (.*) fields$/, (arg0, arg1) => {
      defaultValidation();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should see the sucessful message as "(.*)"$/, (arg0) => {
      defaultValidation();
    });

    and(/^User shhould see "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should navigated to "(.*)" screen$/, async (arg0) => {
      defaultValidation();
    });

    and(/^User should fill valid (.*) and (.*) fields$/, (arg0, arg1) => {
      defaultValidation();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to Patient Dashboard", () => {
      defaultValidation();
    });

    when(/^user clicks on F(\d+) on the console$/, (arg0) => {
      defaultValidation();
    });

    then("user should not to see any errors script", () => {
      defaultValidation();
    });

    when("User selects that the appointment is for Someone Else", () => {
      defaultValidation();
    });

    then("User provides the patient details", () => {
      defaultValidation();
    });

    and(
      "User should be able see the following details in the Appointment confirmation message “Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.”",
      () => {
        defaultValidation();
      }
    );

    and("User should see this appointment under upcoming appointments", () => {
      defaultValidation();
    });

    and(
      "And User should receive an email message regarding appointmnet confirmation",
      () => {
        defaultValidation();
      }
    );
  }, 20000);

  test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the "Continue as Guest" screen with different option to sync the appointment - Without error script when user clicks on F12 on the console', ({
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

    then("User should navigated to the search screen", () => {
      searchScreen();
    });

    and("User should fill the location", () => {
      inputLocation();
    });

    and("User should select the Date & Time with provider", () => {
      inputDate();
    });

    and("User should select the purpose of the visit", () => {
      inputPurpose();
    });

    and("User has reviewed the appointment details", () => {
      resultsScreen();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      renderLogin();
    });

    and(/^User should see the "(.*)" option$/, (arg0) => {
      defaultValidation();
    });

    when(/^User select on "(.*)" option$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to provide basic details", () => {
      defaultValidation();
    });

    and("User should see the fields", () => {
      defaultValidation();
    });

    and("User should see the option to submit the same", () => {
      defaultValidation();
    });

    when(/^User selects on "(.*)" option$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to Patient Dashboard", () => {
      defaultValidation();
    });

    when(/^user clicks on F(\d+) on the console$/, (arg0) => {
      defaultValidation();
    });

    then("user should not to see any errors script", () => {
      defaultValidation();
    });

    when("User selects that the appointment is for Someone Else", () => {
      defaultValidation();
    });

    then("User provides the patient details", () => {
      defaultValidation();
    });

    and(
      "User should be able see the following details in the Appointment confirmation message “Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.”",
      () => {
        defaultValidation();
      }
    );

    and("User should see this appointment under upcoming appointments", () => {
      defaultValidation();
    });

    and(
      "And User should receive an email message regarding appointmnet confirmation",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the Login screen with different option to sync the appointment - When the internet service is unavailable user should see the following error message", ({
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

    then("User should navigated to the search screen", () => {
      searchScreen();
    });

    and("User should fill the location", () => {
      inputLocation();
    });

    and("User should select the Date & Time with provider", () => {
      inputDate();
    });

    and("User should select the purpose of the visit", () => {
      inputPurpose();
    });

    and("User has reviewed the appointment details", () => {
      resultsScreen();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      renderLogin();
    });

    when(/^User fills valid (.*) and (.*)$/, (arg0, arg1) => {
      defaultValidation();
    });

    and(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("The Internet service is unavailable", () => {
      defaultValidation();
    });

    and("User should see the appropriate error message", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the Create Account screen with different option to sync the appointment - When the internet service is unavailable user should see the following error message", ({
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

    then("User should navigated to the search screen", () => {
      searchScreen();
    });

    and("User should fill the location", () => {
      inputLocation();
    });

    and("User should select the Date & Time with provider", () => {
      inputDate();
    });

    and("User should select the purpose of the visit", () => {
      inputPurpose();
    });

    and("User has reviewed the appointment details", () => {
      resultsScreen();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      renderLogin();
    });

    and(/^User should see the "(.*)" button$/, (arg0) => {
      expect(
        container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn)
      ).toBeInTheDocument();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should navigated to "(.*)" screen$/, async (arg0) => {
      await navigateToPatientPortalHome();
    });

    and("User should input the mandatory fields", () => {
      defaultValidation();
    });

    and("User should setting the password", () => {
      defaultValidation();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("The Internet service is unavailable", () => {
      defaultValidation();
    });

    and("User should see the appropriate error message", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the Forgot Password screen with different option to sync the appointment - When the internet service is unavailable user should see the following error message", ({
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

    then("User should navigated to the search screen", () => {
      searchScreen();
    });

    and("User should fill the location", () => {
      inputLocation();
    });

    and("User should select the Date & Time with provider", () => {
      inputDate();
    });

    and("User should select the purpose of the visit", () => {
      inputPurpose();
    });

    and("User has reviewed the appointment details", () => {
      resultsScreen();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      renderLogin();
    });

    and(/^User should see the "(.*)" button$/, (arg0) => {
      expect(
        container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn)
      ).toBeInTheDocument();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should navigated to "(.*)" screen$/, async (arg0) => {
      await navigateToPatientPortalHome();
    });

    and("User should input the mandatory fields", () => {
      defaultValidation();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should navigated "(.*)"screen$/, (arg0) => {
      defaultValidation();
    });

    and(/^User should see the "(.*)" button$/, (arg0) => {
      expect(
        container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn)
      ).toBeInTheDocument();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should navigated "(.*)"$/, (arg0) => {
      defaultValidation();
    });

    and(/^User should fill (\d+) questions$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should navigated to "(.*)" screen$/, async (arg0) => {
      defaultValidation();
    });

    and(/^User should input valid (.*) and (.*) fields$/, (arg0, arg1) => {
      defaultValidation();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should see the sucessful message as "(.*)"$/, (arg0) => {
      defaultValidation();
    });

    and(/^User shhould see "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should navigated to "(.*)" screen$/, async (arg0) => {
      defaultValidation();
    });

    and(/^User should fill valid (.*) and (.*) fields$/, (arg0, arg1) => {
      defaultValidation();
    });

    when(
      /^User clicks on "(.*)" buttonThen The Internet service is unavailable$/,
      (arg0) => {
        defaultValidation();
      }
    );

    and("User should see the appropriate error message", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the Continue as Guest screen with different option to sync the appointment - When the internet service is unavailable user should see the following error message", ({
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

    then("User should navigated to the search screen", () => {
      searchScreen();
    });

    and("User should fill the location", () => {
      inputLocation();
    });

    and("User should select the Date & Time with provider", () => {
      inputDate();
    });

    and("User should select the purpose of the visit", () => {
      inputPurpose();
    });

    and("User has reviewed the appointment details", () => {
      resultsScreen();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      renderLogin();
    });

    and(/^User should see the "(.*)" option$/, (arg0) => {
      defaultValidation();
    });

    when(/^User select on "(.*)" option$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to provide basic details", () => {
      defaultValidation();
    });

    and("User should see the fields", () => {
      defaultValidation();
    });

    and("User should see the option to submit the same", () => {
      defaultValidation();
    });

    when(/^User selects on "(.*)" option$/, (arg0) => {
      defaultValidation();
    });

    then("The Internet service is unavailable", () => {
      defaultValidation();
    });

    and("User should see the appropriate error message", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the Login screen with different option to sync the appointment - When the service is unavailable user should see the following error message", ({
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

    then("User should navigated to the search screen", () => {
      searchScreen();
    });

    and("User should fill the location", () => {
      inputLocation();
    });

    and("User should select the Date & Time with provider", () => {
      inputDate();
    });

    and("User should select the purpose of the visit", () => {
      inputPurpose();
    });

    and("User has reviewed the appointment details", () => {
      resultsScreen();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      renderLogin();
    });

    when(/^User fills valid (.*) and (.*)$/, (arg0, arg1) => {
      defaultValidation();
    });

    and(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("The Internet service is unavailable", () => {
      defaultValidation();
    });

    and("User should see the appropriate error message", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the Create Account screen with different option to sync the appointment - When the service is unavailable user should see the following error message", ({
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

    then("User should navigated to the search screen", () => {
      searchScreen();
    });

    and("User should fill the location", () => {
      inputLocation();
    });

    and("User should select the Date & Time with provider", () => {
      inputDate();
    });

    and("User should select the purpose of the visit", () => {
      inputPurpose();
    });

    and("User has reviewed the appointment details", () => {
      resultsScreen();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      renderLogin();
    });

    and(/^User should see the "(.*)" button$/, (arg0) => {
      expect(
        container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn)
      ).toBeInTheDocument();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should navigated to "(.*)" screen$/, async (arg0) => {
      await navigateToPatientPortalHome();
    });

    and("User should input the mandatory fields", () => {
      defaultValidation();
    });

    and("User should setting the password", () => {
      defaultValidation();
    });

    when(
      /^User clicks on "(.*)" buttonThen The Internet service is unavailable$/,
      (arg0) => {
        defaultValidation();
      }
    );

    and("User should see the appropriate error message", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the Forgot Password screen with different option to sync the appointment - When the service is unavailable user should see the following error message", ({
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

    then("User should navigated to the search screen", () => {
      searchScreen();
    });

    and("User should fill the location", () => {
      inputLocation();
    });

    and("User should select the Date & Time with provider", () => {
      inputDate();
    });

    and("User should select the purpose of the visit", () => {
      inputPurpose();
    });

    and("User has reviewed the appointment details", () => {
      resultsScreen();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      renderLogin();
    });

    and(/^User should see the "(.*)" button$/, (arg0) => {
      expect(
        container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn)
      ).toBeInTheDocument();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should navigated to "(.*)" screen$/, async (arg0) => {
      await navigateToPatientPortalHome();
    });

    and("User should input the mandatory fields", () => {
      defaultValidation();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should navigated "(.*)"screen$/, (arg0) => {
      defaultValidation();
    });

    and(/^User should see the "(.*)" button$/, (arg0) => {
      expect(
        container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn)
      ).toBeInTheDocument();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should navigated "(.*)"$/, (arg0) => {
      defaultValidation();
    });

    and(/^User should fill (\d+) questions$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should navigated to "(.*)" screen$/, async (arg0) => {
      defaultValidation();
    });

    and(/^User should input valid (.*) and (.*) fields$/, (arg0, arg1) => {
      defaultValidation();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should see the sucessful message as "(.*)"$/, (arg0) => {
      defaultValidation();
    });

    and(/^User shhould see "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should navigated to "(.*)" screen$/, async (arg0) => {
      defaultValidation();
    });

    and(/^User should fill valid (.*) and (.*) fields$/, (arg0, arg1) => {
      defaultValidation();
    });

    when(
      /^User clicks on "(.*)" buttonThen The Internet service is unavailable$/,
      (arg0) => {
        defaultValidation();
      }
    );

    and("User should see the appropriate error message", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the Continue as Guest screen with different option to sync the appointment - When the service is unavailable user should see the following error message", ({
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

    then("User should navigated to the search screen", () => {
      searchScreen();
    });

    and("User should fill the location", () => {
      inputLocation();
    });

    and("User should select the Date & Time with provider", () => {
      inputDate();
    });

    and("User should select the purpose of the visit", () => {
      inputPurpose();
    });

    and("User has reviewed the appointment details", () => {
      resultsScreen();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      renderLogin();
    });

    and(/^User should see the "(.*)" option$/, (arg0) => {
      defaultValidation();
    });

    when(/^User select on "(.*)" option$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to provide basic details", () => {
      defaultValidation();
    });

    and("User should see the fields", () => {
      defaultValidation();
    });

    and("User should see the option to submit the same", () => {
      defaultValidation();
    });

    when(
      /^User selects on "(.*)" optionThen The Internet service is unavailable$/,
      (arg0) => {
        defaultValidation();
      }
    );

    and("User should see the appropriate error message", () => {
      defaultValidation();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the "Login" screen with different option to sync the appointment', ({
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

    then("User should navigated to the search screen", () => {
      searchScreen();
    });

    and("User should fill the location", () => {
      inputLocation();
    });

    and("User should select the Date & Time with provider", () => {
      inputDate();
    });

    and("User should select the purpose of the visit", () => {
      inputPurpose();
    });

    and("User has reviewed the appointment details", () => {
      resultsScreen();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      renderLogin();
    });

    when(/^User fills valid (.*) and (.*)$/, (arg0, arg1) => {
      defaultValidation();
    });

    and(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to Patient Dashboard", () => {
      defaultValidation();
    });

    when("User selects that the appointment is for Someone Else", () => {
      defaultValidation();
    });

    then("User provides the patient details", () => {
      defaultValidation();
    });

    and(
      "User should be able see the following details in the Appointment confirmation message “Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.”",
      () => {
        defaultValidation();
      }
    );

    and("User should see this appointment under upcoming appointments", () => {
      defaultValidation();
    });

    and(
      "User should receive an email message regarding appointmnet confirmation",
      () => {
        defaultValidation();
      }
    );
  });

  test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the "Create Account" screen with different option to sync the appointment', ({
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

    then("User should navigated to the search screen", () => {
      searchScreen();
    });

    and("User should fill the location", () => {
      inputLocation();
    });

    and("User should select the Date & Time with provider", () => {
      inputDate();
    });

    and("User should select the purpose of the visit", () => {
      inputPurpose();
    });

    and("User has reviewed the appointment details", () => {
      resultsScreen();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      renderLogin();
    });

    and(/^User should see the "(.*)" button$/, (arg0) => {
      expect(
        container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn)
      ).toBeInTheDocument();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should navigated to "(.*)" screen$/, async (arg0) => {
      await navigateToPatientPortalHome();
    });

    and("User should input the mandatory fields", () => {
      defaultValidation();
    });

    and("User should setting the password", () => {
      defaultValidation();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to Patient Dashboard", () => {
      defaultValidation();
    });

    when("User selects that the appointment is for Someone Else", () => {
      defaultValidation();
    });

    then("User provides the patient details", () => {
      defaultValidation();
    });

    and(
      "User should be able see the following details in the Appointment confirmation message “Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.”",
      () => {
        defaultValidation();
      }
    );

    and("User should see this appointment under upcoming appointments", () => {
      defaultValidation();
    });

    and(
      "And User should receive an email message regarding appointmnet confirmation as below",
      () => {
        defaultValidation();
      }
    );
  });

  test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the "Forgot Password" screen with different option to sync the appointment', ({
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

    then("User should navigated to the search screen", () => {
      searchScreen();
    });

    and("User should fill the location", () => {
      inputLocation();
    });

    and("User should select the Date & Time with provider", () => {
      inputDate();
    });

    and("User should select the purpose of the visit", () => {
      inputPurpose();
    });

    and("User has reviewed the appointment details", () => {
      resultsScreen();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      renderLogin();
    });

    and(/^User should see the "(.*)" button$/, (arg0) => {
      expect(
        container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn)
      ).toBeInTheDocument();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should navigated to "(.*)" screen$/, async (arg0) => {
      await navigateToPatientPortalHome();
    });

    and("User should input the mandatory fields", () => {
      defaultValidation();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should navigated "(.*)"screen$/, (arg0) => {
      defaultValidation();
    });

    and(/^User should see the "(.*)" button$/, (arg0) => {
      expect(
        container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn)
      ).toBeInTheDocument();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should navigated "(.*)"$/, (arg0) => {
      defaultValidation();
    });

    and(/^User should fill (\d+) questions$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should navigated to "(.*)" screen$/, async (arg0) => {
      defaultValidation();
    });

    and(/^User should input valid (.*) and (.*) fields$/, (arg0, arg1) => {
      defaultValidation();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should see the sucessful message as "(.*)"$/, (arg0) => {
      defaultValidation();
    });

    and(/^User shhould see "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should navigated to "(.*)" screen$/, async (arg0) => {
      defaultValidation();
    });

    and(/^User should fill valid (.*) and (.*) fields$/, (arg0, arg1) => {
      defaultValidation();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to Patient Dashboard", () => {
      defaultValidation();
    });

    when("User selects that the appointment is for Someone Else", () => {
      defaultValidation();
    });

    then("User provides the patient details", () => {
      defaultValidation();
    });

    and(
      "User should be able see the following details in the Appointment confirmation message “Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.”",
      () => {
        defaultValidation();
      }
    );

    and("User should see this appointment under upcoming appointments", () => {
      defaultValidation();
    });

    and(
      "And User should receive an email message regarding appointmnet confirmation",
      () => {
        defaultValidation();
      }
    );
  });

  test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the "Continue as Guest" screen with different option to sync the appointment', ({
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

    then("User should navigated to the search screen", () => {
      searchScreen();
    });

    and("User should fill the location", () => {
      inputLocation();
    });

    and("User should select the Date & Time with provider", () => {
      inputDate();
    });

    and("User should select the purpose of the visit", () => {
      inputPurpose();
    });

    and("User has reviewed the appointment details", () => {
      resultsScreen();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      renderLogin();
    });

    and(/^User should see the "(.*)" option$/, (arg0) => {
      defaultValidation();
    });

    when(/^User select on "(.*)" option$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to provide basic details", () => {
      defaultValidation();
    });

    and("User should see the fields", () => {
      defaultValidation();
    });

    and("User should see the option to submit the same", () => {
      defaultValidation();
    });

    when(/^User selects on "(.*)" option$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to Patient Dashboard", () => {
      defaultValidation();
    });

    when("User selects that the appointment is for Someone Else", () => {
      defaultValidation();
    });

    then("User provides the patient details", () => {
      defaultValidation();
    });

    and(
      "User should be able see the following details in the Appointment confirmation message “Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.”",
      () => {
        defaultValidation();
      }
    );

    and("User should see this appointment under upcoming appointments", () => {
      defaultValidation();
    });

    and(
      "And User should receive an email message regarding appointmnet confirmation as below:",
      (table) => {
        defaultValidation();
      }
    );
  });

  test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the "Login" screen with different option to sync the appointment - within 3 seconds', ({
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

    then("User should navigated to the search screen", () => {
      searchScreen();
    });

    and("User should fill the location", () => {
      inputLocation();
    });

    and("User should select the Date & Time with provider", () => {
      inputDate();
    });

    and("User should select the purpose of the visit", () => {
      inputPurpose();
    });

    and("User has reviewed the appointment details", () => {
      resultsScreen();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      renderLogin();
    });

    when(/^User fills valid (.*) and (.*)$/, (arg0, arg1) => {
      defaultValidation();
    });

    and(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    and(/^User should see page load within "(.*)"$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to Patient Dashboard", () => {
      defaultValidation();
    });

    when("User selects that the appointment is for Someone Else", () => {
      defaultValidation();
    });

    then("User provides the patient details", () => {
      defaultValidation();
    });

    and(
      "User should be able see the following details in the Appointment confirmation message “Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.”",
      () => {
        defaultValidation();
      }
    );

    and("User should see this appointment under upcoming appointments", () => {
      defaultValidation();
    });

    and(
      "And User should receive an email message regarding appointmnet confirmation",
      () => {
        defaultValidation();
      }
    );
  });

  test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the "Create Account" screen with different option to sync the appointment - within 3 seconds', ({
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

    then("User should navigated to the search screen", () => {
      searchScreen();
    });

    and("User should fill the location", () => {
      inputLocation();
    });

    and("User should select the Date & Time with provider", () => {
      inputDate();
    });

    and("User should select the purpose of the visit", () => {
      inputPurpose();
    });

    and("User has reviewed the appointment details", () => {
      resultsScreen();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      renderLogin();
    });

    and(/^User should see the "(.*)" button$/, (arg0) => {
      expect(
        container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn)
      ).toBeInTheDocument();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should navigated to "(.*)" screen$/, async (arg0) => {
      await navigateToPatientPortalHome();
    });

    and("User should input the mandatory fields", () => {
      defaultValidation();
    });

    and("User should setting the password", () => {
      defaultValidation();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    and(/^User should see page load within "(.*)"$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to Patient Dashboard", () => {
      defaultValidation();
    });

    when("User selects that the appointment is for Someone Else", () => {
      defaultValidation();
    });

    then("User provides the patient details", () => {
      defaultValidation();
    });

    and(
      "User should be able see the following details in the Appointment confirmation message “Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.”",
      () => {
        defaultValidation();
      }
    );

    and("User should see this appointment under upcoming appointments", () => {
      defaultValidation();
    });

    and(
      "And User should receive an email message regarding appointmnet confirmation",
      () => {
        defaultValidation();
      }
    );
  });

  test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the "Forgot Password" screen with different option to sync the appointment - within 3 seconds', ({
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

    then("User should navigated to the search screen", () => {
      searchScreen();
    });

    and("User should fill the location", () => {
      inputLocation();
    });

    and("User should select the Date & Time with provider", () => {
      inputDate();
    });

    and("User should select the purpose of the visit", () => {
      inputPurpose();
    });

    and("User has reviewed the appointment details", () => {
      resultsScreen();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      renderLogin();
    });

    and(/^User should see the "(.*)" button$/, (arg0) => {
      expect(
        container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn)
      ).toBeInTheDocument();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should navigated to "(.*)" screen$/, async (arg0) => {
      defaultValidation();
    });

    and("User should input the mandatory fields", () => {
      defaultValidation();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should navigated "(.*)"screen$/, (arg0) => {
      defaultValidation();
    });

    and(/^User should see the "(.*)" button$/, (arg0) => {
      expect(
        container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn)
      ).toBeInTheDocument();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should navigated "(.*)"$/, (arg0) => {
      defaultValidation();
    });

    and(/^User should fill (\d+) questions$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should navigated to "(.*)" screen$/, async (arg0) => {
      defaultValidation();
    });

    and(/^User should input valid (.*) and (.*) fields$/, (arg0, arg1) => {
      defaultValidation();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should see the sucessful message as "(.*)"$/, (arg0) => {
      defaultValidation();
    });

    and(/^User shhould see "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should navigated to "(.*)" screen$/, async (arg0) => {
      await navigateToPatientPortalHome();
    });

    and(/^User should fill valid (.*) and (.*) fields$/, (arg0, arg1) => {
      defaultValidation();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    and(/^User should see page load within "(.*)"$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to Patient Dashboard", () => {
      defaultValidation();
    });

    when("User selects that the appointment is for Someone Else", () => {
      defaultValidation();
    });

    then("User provides the patient details", () => {
      defaultValidation();
    });

    and(
      "User should be able see the following details in the Appointment confirmation message “Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.”",
      () => {
        defaultValidation();
      }
    );

    and("User should see this appointment under upcoming appointments", () => {
      defaultValidation();
    });

    and(
      "And User should receive an email message regarding appointmnet confirmation",
      () => {
        defaultValidation();
      }
    );
  });

  test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the "Continue as Guest" screen with different option to sync the appointment - within 3 seconds', ({
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

    then("User should navigated to the search screen", () => {
      searchScreen();
    });

    and("User should fill the location", () => {
      inputLocation();
    });

    and("User should select the Date & Time with provider", () => {
      inputDate();
    });

    and("User should select the purpose of the visit", () => {
      inputPurpose();
    });

    and("User has reviewed the appointment details", () => {
      resultsScreen();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      renderLogin();
    });

    and(/^User should see the "(.*)" option$/, (arg0) => {
      defaultValidation();
    });

    when(/^User select on "(.*)" option$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to provide basic details", () => {
      defaultValidation();
    });

    and("User should see the fields", () => {
      defaultValidation();
    });

    and("User should see the option to submit the same", () => {
      defaultValidation();
    });

    when(/^User selects on "(.*)" option$/, (arg0) => {
      defaultValidation();
    });

    and(/^User should see page load within "(.*)"$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to Patient Dashboard", () => {
      defaultValidation();
    });

    when("User selects that the appointment is for Someone Else", () => {
      defaultValidation();
    });

    then("User provides the patient details", () => {
      defaultValidation();
    });

    and(
      "User should be able see the following details in the Appointment confirmation message “Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.”",
      () => {
        defaultValidation();
      }
    );

    and("User should see this appointment under upcoming appointments", () => {
      defaultValidation();
    });

    and(
      "And User should receive an email message regarding appointmnet confirmation",
      () => {
        defaultValidation();
      }
    );
  });

  test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the "Login" screen with different option to sync the appointment - Without error script when user clicks on F12 on the console', ({
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

    then("User should navigated to the search screen", () => {
      searchScreen();
    });

    and("User should fill the location", () => {
      inputLocation();
    });

    and("User should select the Date & Time with provider", () => {
      inputDate();
    });

    and("User should select the purpose of the visit", () => {
      inputPurpose();
    });

    and("User has reviewed the appointment details", () => {
      resultsScreen();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      renderLogin();
    });

    when(/^User fills valid (.*) and (.*)$/, (arg0, arg1) => {
      defaultValidation();
    });

    and(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to Patient Dashboard", () => {
      defaultValidation();
    });

    when(/^user clicks on F(\d+) on the console$/, (arg0) => {
      defaultValidation();
    });

    then("user should not to see any errors script", () => {
      defaultValidation();
    });

    when("User selects that the appointment is for Someone Else", () => {
      defaultValidation();
    });

    then("User provides the patient details", () => {
      defaultValidation();
    });

    and(
      "User should be able see the following details in the Appointment confirmation message “Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.”",
      () => {
        defaultValidation();
      }
    );

    and("User should see this appointment under upcoming appointments", () => {
      defaultValidation();
    });

    and(
      "And User should receive an email message regarding appointmnet confirmation",
      () => {
        defaultValidation();
      }
    );
  });

  test('EPIC_EPP-44_STORY_EPP-1571-Verify User lands on the "Create Account" screen with different option to sync the appointment - Without error script when user clicks on F12 on the console', ({
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

    then("User should navigated to the search screen", () => {
      searchScreen();
    });

    and("User should fill the location", () => {
      inputLocation();
    });

    and("User should select the Date & Time with provider", () => {
      inputDate();
    });

    and("User should select the purpose of the visit", () => {
      inputPurpose();
    });

    and("User has reviewed the appointment details", () => {
      resultsScreen();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      renderLogin();
    });

    and(/^User should see the "(.*)" button$/, (arg0) => {
      expect(
        container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn)
      ).toBeInTheDocument();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should navigated to "(.*)" screen$/, async (arg0) => {
      await navigateToPatientPortalHome();
    });

    and("User should input the mandatory fields", () => {
      defaultValidation();
    });

    and("User should setting the password", () => {
      defaultValidation();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to Patient Dashboard", () => {
      defaultValidation();
    });

    when(/^user clicks on F(\d+) on the console$/, (arg0) => {
      defaultValidation();
    });

    then("user should not to see any errors script", () => {
      defaultValidation();
    });

    when("User selects that the appointment is for Someone Else", () => {
      defaultValidation();
    });

    then("User provides the patient details", () => {
      defaultValidation();
    });

    and(
      "User should be able see the following details in the Appointment confirmation message “Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly.”",
      () => {
        defaultValidation();
      }
    );

    and("User should see this appointment under upcoming appointments", () => {
      defaultValidation();
    });

    and(
      "And User should receive an email message regarding appointmnet confirmation",
      () => {
        defaultValidation();
      }
    );
  });
});
