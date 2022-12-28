import { act, fireEvent, render, waitFor, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { defineFeature, loadFeature } from "jest-cucumber";
const useRouter = jest.spyOn(require("next/router"), "useRouter");
import constants from "../../src/utils/constants";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  createMatchMedia,
  defaultValidation,
  renderAppointmentDetail,
  renderLogin,
  navigateToPatientPortalHome,
} from "../../__mocks__/commonSteps";
import {
  mockAppointmentTypes,
  submitFilter,
  MOCK_SUGESTION,
  MOCK_APPOINTMENT,
  MOCK_PRESCRIPTION,
} from "../../__mocks__/mockResponse";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import Appointment from "../../src/pages/patient/appointment";
import Cookies from "universal-cookie";
import HomePage from "../../src/pages/patient";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1587.feature"
);

// const navigateToPatientPortalHome = async () => {
//   cleanup()
//   let container;
//   const element = document.createElement("div");
//   const mock = new MockAdapter(axios);
//   Cookies.result = "true";
//   const expectedResult = {
//     ResponseCode: 2005,
//     ResponseType: "success",
//   };
//   const domain = window.location.origin;
//   mock.onPost(`/ecp/patient/logout`).reply(200, expectedResult);
//   mock
//     .onGet(`${domain}/api/dummy/appointment/create-appointment/getSugestion`)
//     .reply(200, MOCK_SUGESTION);
//   mock
//     .onGet(`${domain}/api/dummy/appointment/my-appointment/getAllAppointment`)
//     .reply(200, MOCK_APPOINTMENT);
//   mock
//     .onGet(`${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions`)
//     .reply(200, MOCK_PRESCRIPTION);

//   const mockGeolocation = {
//     getCurrentPosition: jest.fn(),
//     watchPosition: jest.fn(),
//   };
//   global.navigator.geolocation = mockGeolocation;
//   Cookies.result = false;
//   act(() => {
//     container = render(
//       <Provider store={store}>{HomePage.getLayout(<HomePage />)}</Provider>
//     );
//   });
//   await waitFor(() => container.getByLabelText(/Appointments/i));
// };

defineFeature(feature, (test) => {
  let container;
  const { APPOINTMENT_TEST_ID, SEARCH_PROVIDER_TEST_ID } = constants.TEST_ID;
  const mock = new MockAdapter(axios);
  beforeEach(() => {
    const mockGeolocation = {
      getCurrentPosition: jest.fn(),
      watchPosition: jest.fn(),
    };

    mock
      .onGet(`/ecp/appointments/appointment-types`)
      .reply(200, mockAppointmentTypes);
    mock
      .onPut(`/ecp/appointments/available-slot?searchText=Texas`)
      .reply(200, submitFilter);
    global.navigator.geolocation = mockGeolocation;
    window.matchMedia = createMatchMedia("1920px");
  });
  test("EPIC_EPP-44_STORY_EPP-1587- Verify whether the system is automatically taking the current location if enabled.", ({ }) => { });

  test("EPIC_EPP-44_STORY_EPP-1587- Verify whether the user is able to search the location using City", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Patient Portal URL", () => {
      defaultValidation();
    });

    when(
      "a user provides a valid Email or Phone Number and password",
      async () => {
        container = await renderLogin()
        expect(container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn)).toBeInTheDocument();
      }
    );

    and("user clicks on the Login button", () => {
      const login = container.getByRole("button", { name: /Login/i });
      fireEvent.click(login);
    });

    then("user navigates to the Patient Portal home page", async () => {
      await navigateToPatientPortalHome()
    });

    when("a user  clicks on the Schedule Appointment link", () => {
      defaultValidation();
    });

    then("User lands on the Schedule Appointment screen", () => {
      defaultValidation();
    });

    and("Enter a city name and clicks on search button", () => {
      defaultValidation();
    });

    then("the user should see the list of locations based on City.", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1587-Verify whether the user is able to search the location using State", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Patient Portal URL", () => {
      defaultValidation();
    });

    when(
      "a user provides a valid Email or Phone Number and password",
      async () => {
        container = await renderLogin()
        expect(container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn)).toBeInTheDocument();
      }
    );

    and("user clicks on the Login button", () => {
      fireEvent.click(container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn))
      expect(container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn)).toBeInTheDocument();
    });

    then("user navigates to the Patient Portal home page", async () => {
      await navigateToPatientPortalHome()
    });

    when("a user  clicks on the Schedule Appointment link", () => {
      defaultValidation();
    });

    then("User lands on the Schedule Appointment screen", () => {
      const mock = new MockAdapter(axios);
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };
      const domain = window.location.origin;
      window = Object.assign(window, { innerWidth: 700 });

      global.navigator.geolocation = mockGeolocation;
      act(() => {
        container = render(
          <Provider store={store}>
            {Appointment.getLayout(<Appointment />)}
          </Provider>
        );
      });
      waitFor(() => {
        container.getByText(/formTitle/i);
      });
    });

    and("Enter a state name and clicks on the search button", () => {
      expect(container.getAllByTestId(/locationInput/i)[0]).toBeInTheDocument();
      const srcBtn = container.getAllByTestId(/searchbtn/i)[0];
      fireEvent.click(srcBtn)
    });

    then(
      "the user should see the list of locations based upon State.",
      () => { }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1587-Verify whether the user is able to search the location using Zipcode", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Patient Portal URL", () => {
      defaultValidation();
    });

    when(
      "a user provides a valid Email or Phone Number and password",
      async () => {
        container = await renderLogin()
        expect(container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn)).toBeInTheDocument();
      }
    );

    and("user clicks on the Login button", () => {
      fireEvent.click(container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn))
      expect(container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn)).toBeInTheDocument();
    });

    then("user navigates to the Patient Portal home page", async () => {
      await navigateToPatientPortalHome()
    });

    when("a user  clicks on the Schedule Appointment link", () => {
      defaultValidation();
    });

    then("User lands on the Schedule Appointment screen", () => {
      defaultValidation();
    });

    and("Enter a valid zip code and clicks on the search button", () => {
      defaultValidation();
    });

    then("the user  see the list of locations based upon Zipcode.", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1587-Verify whether the user is having the option to detect their location.", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Patient Portal URL", () => {
      defaultValidation();
    });

    when(
      "a user provides a valid Email or Phone Number and password",
      async () => {
        container = await renderLogin()
        expect(container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn)).toBeInTheDocument();
      }
    );

    and("user clicks on the Login button", () => {
      fireEvent.click(container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn))
      expect(container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn)).toBeInTheDocument();
    });

    then("user navigates to the Patient Portal home page", async () => {
      await navigateToPatientPortalHome()
    });

    when("a user  clicks on the Schedule Appointment link", () => {
      defaultValidation();
    });

    then("User lands on the Schedule Appointment screen", () => {
      defaultValidation();
    });

    when("the user clicks on use my current location link", () => {
      defaultValidation();
    });

    then("the user sees the current location", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1587-Verify whether the user is able to select the searched location", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Patient Portal URL", () => {
      defaultValidation();
    });

    when(
      "a user provides a valid Email or Phone Number and password",
      async () => {
        container = await renderLogin()
        expect(container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn)).toBeInTheDocument();
      }
    );

    and("user clicks on the Login button", () => {
      fireEvent.click(container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn))
      expect(container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn)).toBeInTheDocument();
    });

    then("user navigates to the Patient Portal home page", async () => {
      await navigateToPatientPortalHome()
    });

    when("a user  clicks on the Schedule Appointment link", () => {
      defaultValidation();
    });

    then("User lands on the Schedule Appointment screen", () => {
      defaultValidation();
    });

    and("enter the City name", () => {
      defaultValidation();
    });

    and("click on Search.", () => {
      defaultValidation();
    });

    and("user will see the location based upon city name.", () => {
      defaultValidation();
    });

    then("user should allow to select any listed location.", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1587- Verify user able to see the below mentioned functionality on Schedule appointment page.  Search for location Date of appointment Purpose of visit Insurance...", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Patient Portal URL", () => {
      defaultValidation();
    });

    when(
      "a user provides a valid Email or Phone Number and password",
      async () => {
        container = await renderLogin()
        expect(container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn)).toBeInTheDocument();
      }
    );

    and("user clicks on the Login button", () => {
      fireEvent.click(container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn))
      expect(container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn)).toBeInTheDocument();
    });

    then("user navigates to the Patient Portal home page", async () => {
      await navigateToPatientPortalHome()
    });

    when("a user  clicks on the Schedule Appointment link", () => {
      defaultValidation();
    });

    then("User lands on the Schedule Appointment screen", () => {
      defaultValidation();
    });

    then(
      "user should see the location, date of appointment, Purpose of the visit, Insurance name",
      () => { }
    );
  });
});
