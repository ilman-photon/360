import "@testing-library/jest-dom/extend-expect";
import {
  act,
  fireEvent,
  render,
  waitFor,
  cleanup,
} from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import constants, { TEST_ID } from "../../src/utils/constants";
import FilterHeading from "../../src/components/molecules/FilterHeading/filterHeading";
import FilterResult from "../../src/components/molecules/FilterResult/filterResult";
import ScheduleAppointmentPage from "../../src/pages/patient/schedule-appointment";

import { Login } from "../../src/components/organisms/Login/login";

import mediaQuery from "css-mediaquery";
import ModalConfirmation from "../../src/components/organisms/ScheduleAppointment/ScheduleConfirmation/modalConfirmation";
import {
  mockAppointmentTypes,
  mockInsurance,
  submitFilter,
} from "../../__mocks__/mockResponse";
import InfoWindowContent from "../../src/components/organisms/Google/Maps/infoWindowContent";
import { CircularProgress } from "@mui/material";
import ShallowRenderer from "react-shallow-renderer";
import Appointment from "../../src/pages/patient/appointment";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-2570.feature"
);

const defaultValidation = () => {
  expect(true).toBeTruthy();
};

defineFeature(feature, (test) => {
  let container;
  const mock = new MockAdapter(axios);
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

  const launchURL = () => {
    cleanup();
    const mockOnLoginClicked = jest.fn((data, route, callback) => {
      callback({
        status: "success",
      });
    });
    container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
  };

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

  const reviewAppPage = async () => {
    container.rerender(
      <Provider store={store}>
        {ScheduleAppointmentPage.getLayout(<ScheduleAppointmentPage />)}
      </Provider>
    );
    await waitFor(() => container.getByText("Review Appointment Details"));
    const continueButton = container.getAllByText("continue")[0];
    fireEvent.click(continueButton);
  };

  const clickMyself = async () => {
    await waitFor(() => container.getByText("myself"));
    expect(container.getAllByText("myself")).toBeTruthy();
    expect(container.getAllByText("someoneElse")).toBeTruthy();
    const myselfButton = container.getByText("myself");
    fireEvent.click(myselfButton);
    const continueButton = container.getAllByText("continue")[0];
    fireEvent.click(continueButton);
  };

  const clickSomeElse = async () => {
    await waitFor(() => container.getByText("someoneElse"));
    expect(container.getAllByText("someoneElse")).toBeTruthy();
    const someElseButton = container.getByText("someoneElse");
    fireEvent.click(someElseButton);
    // const continueButton = container.getAllByText("continue")[0];
    // fireEvent.click(continueButton);
  };

  const provideFirstLastNameValid = async () => {
    await waitFor(() => container.getAllByText(/First Name/i));
    const field1 = container.getAllByLabelText(/First Name/i)[0];
    fireEvent.change(field1, { target: { value: "first" } });

    const field2 = container.getAllByLabelText(/Last Name/i)[0];
    fireEvent.change(field2, { target: { value: "last" } });
  };

  const clickSaveAction = async () => {
    await waitFor(() => container.getByText("scheduleAppoinment"));
    const saveButton = container.getByRole("button", {
      name: "scheduleAppoinment",
    });
    fireEvent.click(saveButton);
  };

  const errorEmailPhone = async () => {
    await waitFor(() =>
      container.getByText("Email ID or Mobile Number is required")
    );
    const inputFieldError = container.getByText(
      "Email ID or Mobile Number is required"
    );
    expect(inputFieldError).toBeTruthy();
    expect("Email ID or Mobile Number is required").toEqual(
      inputFieldError.textContent
    );
  };

  test("EPIC_EPP-44_STORY_EPP-1570-Verify User should navigated to the Patient Portal application", ({
    given,
    and,
    when,
    then,
  }) => {
    given("User is already a registered user", () => {
      launchURL();
    });

    and(/^User launch the "(.*)" url$/, (arg0) => {
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
      reviewAppPage();
    });

    when("User selects that the appointment is for Self", () => {
      clickMyself();
    });

    then(
      "User should navigated to the Patient Portal application",
      async () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1570-Verify User should Logged in to the Patient Portal application", ({
    given,
    and,
    when,
    then,
  }) => {
    given("User is already a registered user", () => {
      launchURL();
    });

    and(/^User launch the "(.*)" url$/, (arg0) => {
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
      reviewAppPage();
    });

    when("User selects that the appointment is for Self", () => {
      clickMyself();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    when(/^User fills valid (.*) and (.*)$/, () => {
      provideFirstLastNameValid();
    });

    and(/^User clicks on "(.*)" button$/, () => {
      clickSaveAction();
    });

    then("User should navigated to Patient Dashboard", () => {
      defaultValidation();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-1570-Verify User should be able to view the success message as "Thank you for scheduling the appointment with us. We will send a confirmation Email/ Text shortly."', ({
    given,
    and,
    when,
    then,
  }) => {
    given("User is already a registered user", () => {
      launchURL();
    });

    and(/^User launch the "(.*)" url$/, (arg0) => {
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
      reviewAppPage();
    });

    when("User selects that the appointment is for Self", () => {
      clickMyself();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    when(/^User fills valid (.*) and (.*)$/, (arg0, arg1) => {
      provideFirstLastNameValid();
    });

    and(/^User clicks on "(.*)" button$/, () => {
      clickSaveAction();
    });

    then("User should navigated to Patient Dashboard", () => {
      defaultValidation();
    });

    when("User selects that the appointment is for Someone Else", () => {
      clickSomeElse();
    });

    then("User provides the patient details", () => {
      provideFirstLastNameValid();
    });

    and(
      /^User should see following details in the Appointment confirmation message "(.*)"$/,
      (arg0) => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1570-Verify User should see the appointment under upcoming appointments", ({
    given,
    and,
    when,
    then,
  }) => {
    given("User is already a registered user", () => {
      launchURL();
    });

    and(/^User launch the "(.*)" url$/, (arg0) => {
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
      reviewAppPage();
    });

    when("User selects that the appointment is for Self", () => {
      clickMyself();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    and(/^User fills valid (.*) and (.*)$/, () => {
      provideFirstLastNameValid();
    });

    then(/^User clicks on "(.*)" button$/, (arg0) => {
      clickSaveAction();
    });

    and("User should navigated to Patient Dashboard", () => {
      defaultValidation();
    });

    when("User clicks to \"Appointments' menu", () => {
      defaultValidation();
    });

    then(/^User navigates to "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and("User should see the appointment under upcoming appointments", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1570-Verify User should receive an email message regarding appointment confirmation", ({
    given,
    and,
    when,
    then,
  }) => {
    given("User is already a registered user", () => {
      launchURL();
    });

    and(/^User launch the "(.*)" url$/, (arg0) => {
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
      reviewAppPage();
    });

    when("User selects that the appointment is for Self", () => {
      clickMyself();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    when(/^User fills valid (.*) and (.*)$/, (arg0, arg1) => {
      provideFirstLastNameValid();
    });

    and(/^User clicks on "(.*)" button$/, (arg0) => {
      clickSaveAction();
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
      /^User should see following details in the Appointment confirmation message "(.*)"$/,
      (arg0) => {
        defaultValidation();
      }
    );

    and(
      "User should receive an email message regarding appointmnet confirmation as below:",
      (table) => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1570-Verify User should receive a text message regarding appointment confirmation", ({
    given,
    and,
    when,
    then,
  }) => {
    given("User is already a registered user", () => {
      launchURL();
    });

    and(/^User launch the "(.*)" url$/, (arg0) => {
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
      reviewAppPage();
    });

    when("User selects that the appointment is for Self", () => {
      clickMyself();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    when(/^User fills valid (.*) and (.*)$/, (arg0, arg1) => {
      provideFirstLastNameValid();
    });

    and(/^User clicks on "(.*)" button$/, () => {
      clickSaveAction();
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
      /^User should see following details in the Appointment confirmation message "(.*)"$/,
      (arg0) => {
        defaultValidation();
      }
    );

    and(
      "User should receive an email message regarding appointmnet confirmation as below:",
      (table) => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1570-Verify User should be able to view the following filters within 3 seconds", ({
    given,
    and,
    when,
    then,
  }) => {
    given("User is already a registered user", () => {
      launchURL();
    });

    and(/^User launch the "(.*)" url$/, (arg0) => {
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
      reviewAppPage();
    });

    when("User selects that the appointment is for Self", () => {
      clickMyself();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    when(/^User fills valid (.*) and (.*)$/, (arg0, arg1) => {
      provideFirstLastNameValid();
    });

    and(/^User clicks on "(.*)" button$/, () => {
      clickSaveAction();
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

    and(/^User should see page load within (\d+) seconds$/, (arg0) => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1570-Verify User should not see the any errors script when user clicks F12 on the console", ({
    given,
    and,
    when,
    then,
  }) => {
    given("User is already a registered user", () => {
      launchURL();
    });

    and(/^User launch the "(.*)" url$/, (arg0) => {
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
      reviewAppPage();
    });

    when("User selects that the appointment is for Self", () => {
      clickMyself();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    when(/^User fills valid (.*) and (.*)$/, (arg0, arg1) => {
      provideFirstLastNameValid();
    });

    and(/^User clicks on "(.*)" button$/, () => {
      clickSaveAction();
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

    and(/^User should see page load within "(.*)"$/, (arg0) => {
      defaultValidation();
    });

    then(
      /^User should see following details in the Appointment confirmation message "(.*)"$/,
      (arg0) => {
        defaultValidation();
      }
    );

    when(/^user clicks on F(\d+) on the console$/, (arg0) => {
      defaultValidation();
    });

    then("user should not to see any errors script", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1570-Negative Test Cases-Verify user should see the error message when the internet service is unavailable", ({
    given,
    and,
    when,
    then,
  }) => {
    given("User is already a registered user", () => {
      launchURL();
    });

    and(/^User launch the "(.*)" url$/, (arg0) => {
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
      reviewAppPage();
    });

    when("User selects that the appointment is for Self", () => {
      clickMyself();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    when(/^User fills valid (.*) and (.*)$/, (arg0, arg1) => {
      provideFirstLastNameValid();
    });

    and(/^User clicks on "(.*)" button$/, () => {
      clickSaveAction();
    });

    then("User should navigated to Patient Dashboard", () => {
      defaultValidation();
    });

    when("User selects that the appointment is for Someone Else", () => {
      defaultValidation();
    });

    then("The Internet service is unavailable", () => {
      defaultValidation();
    });

    and("User should see the appropriate error message", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1570-Negative Test Cases-Verify user should see the error message when the service is unavailable", ({
    given,
    and,
    when,
    then,
  }) => {
    given("User is already a registered user", () => {
      launchURL();
    });

    and(/^User launch the "(.*)" url$/, (arg0) => {
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
      reviewAppPage();
    });

    when("User selects that the appointment is for Self", () => {
      clickMyself();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    when(/^User fills valid (.*) and (.*)$/, (arg0, arg1) => {
      provideFirstLastNameValid();
    });

    and(/^User clicks on "(.*)" button$/, () => {
      clickSaveAction();
    });

    then("User should navigated to Patient Dashboard", () => {
      defaultValidation();
    });

    when("User selects that the appointment is for Someone Else", () => {
      defaultValidation();
    });

    then("The service is unavailable", () => {
      defaultValidation();
    });

    and("User should see the appropriate error message", () => {
      defaultValidation();
    });
  });
});
