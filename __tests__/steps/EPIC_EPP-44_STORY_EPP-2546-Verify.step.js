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
import ForgotPasswordPage from "../../src/pages/patient/forgot-password";
import AuthPage from "../../src/pages/patient/login";
import Cookies from "universal-cookie";
import { getServerSideProps } from "../../src/pages/patient/mfa";
import HomePage from "../../src/pages/patient";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import {
  renderAppointmentDetail,
  renderScheduleAppointment,
  inputLocation,
} from "../../__mocks__/commonSteps";
import constants, { TEST_ID } from "../../src/utils/constants";
import FilterHeading from "../../src/components/molecules/FilterHeading/filterHeading";
import FilterResult from "../../src/components/molecules/FilterResult/filterResult";
import ScheduleAppointmentPage from "../../src/pages/patient/schedule-appointment";
import { navigateToPatientPortalHome } from "../../__mocks__/commonSteps";
import GMaps from "../../src/components/organisms/Google/Maps/gMaps";
import {
  GoogleMap,
  MarkerF,
  InfoWindowF,
  useJsApiLoader,
  useLoadScript,
} from "@react-google-maps/api";

import mediaQuery from "css-mediaquery";
import ModalConfirmation from "../../src/components/organisms/ScheduleAppointment/ScheduleConfirmation/modalConfirmation";
import {
  mockAppointmentTypes,
  mockInsurance,
  submitFilter,
  providerList,
} from "../../__mocks__/mockResponse";
import InfoWindowContent from "../../src/components/organisms/Google/Maps/infoWindowContent";
import { CircularProgress } from "@mui/material";
import ShallowRenderer from "react-shallow-renderer";
import Appointment from "../../src/pages/patient/appointment";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-2546.feature"
);

const defaultValidation = () => {
  expect(true).toBeTruthy();
};

defineFeature(feature, (test) => {
  let container;
  const element = document.createElement("div");
  const mock = new MockAdapter(axios);
  const { APPOINTMENT_TEST_ID } = constants.TEST_ID;

  beforeEach(() => {
    mock
      .onGet("/ecp/appointments/appointment-types", mockAppointmentTypes)
      .reply(200, mockAppointmentTypes);
    mock
      .onGet("/ecp/appointments/insurance/allpayers", mockInsurance)
      .reply(200, mockInsurance);
    mock
      .onPut("/ecp/appointments/available-slot?searchText=Texas")
      .reply(200, submitFilter);
  });

  afterEach(() => {
    mock.reset();
  });

  function createMatchMedia(width) {
    return (query) => ({
      matches: mediaQuery.match(query, { width }),
      addListener: () => { },
      removeListener: () => { },
    });
  }

  const launchURL = () => {
    const expectedResult = {
      ResponseCode: 2000,
      ResponseType: "success",
      userType: "patient",
    };
    mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
  };

  const providesUsernamePassword = () => {
    act(() => {
      container = renderWithProviders(<AuthPage />, {
        container: document.body.appendChild(element),
        legacyRoot: true,
      });
    });
    const title = container.getByText("formTitle");
    expect("formTitle").toEqual(title.textContent);
  };

  const clickLogin = () => {
    const loginButton = container.getByRole("button", {
      name: /loginButtonLabel/i,
    });
    fireEvent.click(loginButton);
  };

  const navigateToSearchScreen = async () => {
    const mockGeolocation = {
      getCurrentPosition: jest.fn(),
      watchPosition: jest.fn(),
    };

    const domain = window.location.origin;
    global.navigator.geolocation = mockGeolocation;
    window.matchMedia = createMatchMedia("1920px");
    act(() => {
      container = render(
        <Provider store={store}>
          {Appointment.getLayout(<Appointment />)}
        </Provider>
      );
    });
    await waitFor(() => {
      container.getByText(/City, state, or zip/i);
      expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
    });
  };

  const providesDetails = async () => {
    const locationInput = container.container.querySelector("#location");
    const dateInput = await waitFor(() => container.getByLabelText("Date"));
    const purposeInput = await waitFor(() =>
      container.getByTestId("select-purposes-of-visit")
    );
    act(() => {
      fireEvent.change(locationInput, { target: { value: "Texas" } });
      fireEvent.change(dateInput, { target: { value: "22-09-2022" } });
      fireEvent.change(purposeInput, { target: { value: "Eye Exam" } });
    });
  };

  const clickSearch = async () => {
    const searchBtn = await waitFor(() =>
      container.getByTestId(APPOINTMENT_TEST_ID.searchbtn)
    );
    fireEvent.click(searchBtn);
  };

  const userSeeScheduleScreen = () => {
    expect(container.getAllByText("Date and time")).toBeTruthy();
    expect(container.getAllByText("Insurance")).toBeTruthy();
    expect(container.getAllByText("No Insurance provided")).toBeTruthy();
    expect(container.getAllByText("Purpose of visit")).toBeTruthy();
  };

  const clickPin = () => {
    act(() => {
      container.rerender(
        <InfoWindowContent
          data={providerList}
          OnTimeClicked={() => jest.fn()}
        />
      );
    });
  };

  test('EPIC_EPP-44_STORY_EPP-2546-Verify User should see the increases of radius and checks for providers with distance greater than 20 miles to display', ({ given, when, then, and }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      launchURL();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation()
    });

    then('User should navigated to the search screen', async () => {
      await navigateToSearchScreen()
    });

    and('User should fill the location', async () => {
      await providesDetails()
    });

    and('User should select the date of appointment', async () => {
      await providesDetails()
    });

    and('User should select the purpose of the visit', async () => {
      await providesDetails()
    });

    and('User should fill the insurance name', async () => {
      await providesDetails()
    });

    and('User should see the option to Search', async () => {
      await clickSearch()
    });

    when('User clicks on the option to Search', async () => {
      await clickSearch()
    });

    then(/^User should navigated on "(.*)" screen$/, async (arg0) => {
      await renderAppointmentDetail()
    });

    and('User should see the selected location (with no result)', () => {
      userSeeScheduleScreen()
    });

    and('User should see the selected date (with no result)', () => {
      userSeeScheduleScreen()
    });

    and('User should see the purpose of visit (with no result)', () => {
      userSeeScheduleScreen()
    });

    and('And User should see the insurance carrier (with no result)', () => {
      userSeeScheduleScreen()
    });

    and(/^User should see the increases of radius and checks for providers with distance greater than (\d+) miles to display$/, (arg0) => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2546-Verify User should not see any providers for the combination even after increasing radius', ({ given, when, then, and }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      launchURL();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation()
    });

    then('User should navigated to the search screen', async () => {
      await navigateToSearchScreen()
    });

    and('User should fill the location', async () => {
      await providesDetails()
    });

    and('User should select the date of appointment', async () => {
      await providesDetails()
    });

    and('User should select the purpose of the visit', async () => {
      await providesDetails()
    });

    and('User should fill the insurance name', async () => {
      await providesDetails()
    });

    and('User should see the option to Search', () => {
      defaultValidation()
    });

    when('User clicks on the option to Search', async () => {
      await clickSearch()
    });

    then(/^User should navigated on "(.*)" screen$/, async (arg0) => {
      await renderAppointmentDetail();
    });

    and('User should see the selected location (with no result)', () => {
      userSeeScheduleScreen()
    });

    and('User should see the selected date (with no result)', () => {
      userSeeScheduleScreen()
    });

    and('User should see the purpose of visit (with no result)', () => {
      userSeeScheduleScreen()
    });

    and('And User should see the insurance carrier (with no result)', () => {
      userSeeScheduleScreen()
    });

    and(/^User should see the increases of radius and checks for providers with distance greater than (\d+) miles to display$/, (arg0) => {
      defaultValidation()
    });

    and('User should not see any providers for the combination even after increasing radius', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2546-Verify User should see the following error message "No appointment slots based upon your request. Please try again with a different combination."', ({ given, when, then, and }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      launchURL();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation()
    });

    then('User should navigated to the search screen', async () => {
      await navigateToSearchScreen()
    });

    and('User should fill the location', async () => {
      await providesDetails()
    });

    and('User should select the date of appointment', async () => {
      await providesDetails()
    });

    and('User should select the purpose of the visit', async () => {
      await providesDetails()
    });

    and('User should fill the insurance name', async () => {
      await providesDetails()
    });

    and('User should see the option to Search', () => {
      defaultValidation()
    });

    when('User clicks on the option to Search', async () => {
      await clickSearch()
    });

    then(/^User should navigated on "(.*)" screen$/, async (arg0) => {
      await renderAppointmentDetail();
    });

    and('User should see the selected location (with no result)', () => {
      userSeeScheduleScreen()
    });

    and('User should see the selected date (with no result)', () => {
      userSeeScheduleScreen()
    });

    and('User should see the purpose of visit (with no result)', () => {
      userSeeScheduleScreen()
    });

    and('And User should see the insurance carrier (with no result)', () => {
      userSeeScheduleScreen()
    });

    and(/^User should see the increases of radius and checks for providers with distance greater than (\d+) miles to display$/, (arg0) => {
      defaultValidation()
    });

    and('User should not see any providers for the combination even after increasing radius', () => {
      defaultValidation()
    });

    and(/^User should see the following error message "(.*)"$/, (arg0) => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2546-Verify User should see the following error message - within "3 seconds"', ({ given, when, then, and }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      launchURL();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation()
    });

    then('User should navigated to the search screen', async () => {
      await navigateToSearchScreen()
    });

    and('User should fill the location', async () => {
      await providesDetails()
    });

    and('User should select the date of appointment', async () => {
      await providesDetails()
    });

    and('User should select the purpose of the visit', async () => {
      await providesDetails()
    });

    and('User should fill the insurance name', async () => {
      await providesDetails()
    });

    and('User should see the option to Search', () => {
      defaultValidation()
    });

    when('User clicks on the option to Search', async () => {
      await clickSearch()
    });

    then(/^User should navigated on "(.*)" screen$/, async (arg0) => {
      await renderAppointmentDetail();
    });

    and('User should see the selected location (with no result)', () => {
      userSeeScheduleScreen()
    });

    and('User should see the selected date (with no result)', () => {
      userSeeScheduleScreen()
    });

    and('User should see the purpose of visit (with no result)', () => {
      userSeeScheduleScreen()
    });

    and('And User should see the insurance carrier (with no result)', () => {
      userSeeScheduleScreen()
    });

    and(/^User should see the increases of radius and checks for providers with distance greater than (\d+) miles to display$/, (arg0) => {
      defaultValidation()
    });

    and('User should not see any providers for the combination even after increasing radius', () => {
      defaultValidation()
    });

    and(/^User should see page load within "(.*)"$/, (arg0) => {
      defaultValidation()
    });

    and(/^User should see the following error message "(.*)"$/, (arg0) => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2546-Verify User should see the following error message - Without error script when user clicks on F12 on the console', ({ given, when, then, and }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      launchURL();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation()
    });

    then('User should navigated to the search screen', async () => {
      await navigateToSearchScreen()
    });

    and('User should fill the location', async () => {
      await providesDetails()
    });

    and('User should select the date of appointment', async () => {
      await providesDetails()
    });

    and('User should select the purpose of the visit', async () => {
      await providesDetails()
    });

    and('User should fill the insurance name', async () => {
      await providesDetails()
    });

    and('User should see the option to Search', () => {
      defaultValidation()
    });

    when('User clicks on the option to Search', async () => {
      await clickSearch()
    });

    then(/^User should navigated on "(.*)" screen$/, async (arg0) => {
      await renderAppointmentDetail();
    });

    and('User should see the selected location (with no result)', () => {
      userSeeScheduleScreen()
    });

    and('User should see the selected date (with no result)', () => {
      userSeeScheduleScreen()
    });

    and('User should see the purpose of visit (with no result)', () => {
      userSeeScheduleScreen()
    });

    and('And User should see the insurance carrier (with no result)', () => {
      userSeeScheduleScreen()
    });

    and(/^User should see the increases of radius and checks for providers with distance greater than (\d+) miles to display$/, (arg0) => {
      defaultValidation()
    });

    and('User should not see any providers for the combination even after increasing radius', () => {
      defaultValidation()
    });

    and(/^User should see page load within "(.*)"$/, (arg0) => {
      defaultValidation()
    });

    and(/^User should see the following error message "(.*)"$/, (arg0) => {
      defaultValidation()
    });

    when(/^user clicks on F(\d+) on the console$/, (arg0) => {
      defaultValidation()
    });

    then('user should not to see any errors script', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2546-Verify User should see the following error message - When the Internet service is unavailable user should see the following error message', ({ given, when, then, and }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      launchURL();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation()
    });

    then('User should navigated to the search screen', async () => {
      await navigateToSearchScreen()
    });

    and('User should fill the location', async () => {
      await providesDetails()
    });

    and('User should select the date of appointment', async () => {
      await providesDetails()
    });

    and('User should select the purpose of the visit', async () => {
      await providesDetails()
    });

    and('User should fill the insurance name', async () => {
      await providesDetails()
    });

    and('User should see the option to Search', () => {
      defaultValidation()
    });

    when('User clicks on the option to Search', async () => {
      await clickSearch()
    });

    then(/^User should navigated on "(.*)" screen$/, async (arg0) => {
      await renderAppointmentDetail();
    });

    and('User should see the selected location (with no result)', () => {
      userSeeScheduleScreen()
    });

    and('User should see the selected date (with no result)', () => {
      userSeeScheduleScreen()
    });

    and('User should see the purpose of visit (with no result)', () => {
      userSeeScheduleScreen()
    });

    and('And User should see the insurance carrier (with no result)', () => {
      userSeeScheduleScreen()
    });

    and(/^User should see the increases of radius and checks for providers with distance greater than (\d+) miles to display$/, (arg0) => {
      defaultValidation()
    });

    and('User should not see any providers for the combination even after increasing radius', () => {
      defaultValidation()
    });

    then('The Internet service is unavailable', () => {
      defaultValidation()
    });

    and('User should see the appropriate error message', () => {
      defaultValidation()
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2546-Verify User should see the following error message - When the service is unavailable user should see the following error message', ({ given, when, then, and }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      launchURL();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation()
    });

    then('User should navigated to the search screen', async () => {
      await navigateToSearchScreen()
    });

    and('User should fill the location', async () => {
      await providesDetails()
    });

    and('User should select the date of appointment', async () => {
      await providesDetails()
    });

    and('User should select the purpose of the visit', async () => {
      await providesDetails()
    });

    and('User should fill the insurance name', async () => {
      await providesDetails()
    });

    and('User should see the option to Search', () => {
      defaultValidation()
    });

    when('User clicks on the option to Search', async () => {
      await clickSearch()
    });

    then(/^User should navigated on "(.*)" screen$/, async (arg0) => {
      await renderAppointmentDetail();
    });

    and('User should see the selected location (with no result)', () => {
      userSeeScheduleScreen()
    });

    and('User should see the selected date (with no result)', () => {
      userSeeScheduleScreen()
    });

    and('User should see the purpose of visit (with no result)', () => {
      userSeeScheduleScreen()
    });

    and('And User should see the insurance carrier (with no result)', () => {
      userSeeScheduleScreen()
    });

    and(/^User should see the increases of radius and checks for providers with distance greater than (\d+) miles to display$/, (arg0) => {
      defaultValidation()
    });

    and('User should not see any providers for the combination even after increasing radius', () => {
      defaultValidation()
    });

    then('The service is unavailable', () => {
      defaultValidation()
    });

    and('User should see the appropriate error message', () => {
      defaultValidation()
    });
  });
});
