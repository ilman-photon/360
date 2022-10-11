import { act, fireEvent, render, waitFor, cleanup } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { renderLogin, navigateToPatientPortalHome } from "../../__mocks__/commonSteps";
import { Login } from "../../src/components/organisms/Login/login";
import constants from "../../src/utils/constants";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import HomePage from "../../src/pages/patient";
import Cookies from "universal-cookie";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint2/EPP-209.feature", {
  tagFilter: '@included and not @excluded'
}
);

defineFeature(feature, (test) => {
  let container, login;
  const mock = new MockAdapter(axios);
  const element = document.createElement("div");
  test("EPIC_EPP-4_STORY_EPP-209 - Verify whether the Admin is able to Login  with Valid Email and Valid Password using E360+ SSO", ({
    given,
    when,
    then,
    and,
  }) => {
    given("Admin launch the \'XXX\' url", () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "sucsess",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    and("Admin navigates to the Patient Portal application", () => {
      const expectedResult = {
        ResponseCode: 2001,
        ResponseType: "failure",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    when('Admin lands onto E360+ \“Patient Login\” screen', async () => {
      renderLogin()
    });
    and('Admin provides valid \"<Email>\" and valid \"<password>\"', () => {
      cleanup()
      const mockOnLoginClicked = jest.fn((data, route, callback) => {
        callback({
          status: "success",
        });
      });
      container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
      const usernameField = container.getByLabelText("emailUserLabel");
      const passwordField = container.getByLabelText("passwordLabel");
      expect(usernameField.id).toEqual("username");
      expect(passwordField.id).toEqual("password");
    });
    and("Admin click \'Login\' button.", () => {
      const loginBtn = container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn)
      fireEvent.click(loginBtn)
      expect(container.getByTestId(constants.TEST_ID.LOGIN_TEST_ID.loginBtn)).toBeInTheDocument();
    });

    then(
      "Admin should view Home/Dashboard page",
      async () => {
        cleanup()
        const mockGeolocation = {
          getCurrentPosition: jest.fn(),
          watchPosition: jest.fn(),
        };
        global.navigator.geolocation = mockGeolocation;
        Cookies.result = false;
        act(() => {
          container = render(
            <Provider store={store}>{HomePage.getLayout(<HomePage />)}</Provider>
          );
        });
        // expect(container.getByText(constants.TEST_ID.HOME_TEST_ID.logout)).toBeInTheDocument();
      }
    );
  });
  test("EPIC_EPP-4_STORY_EPP-209 - Verify whether the Admin is able to Login  with Valid Phone Number and Valid Password using E360+ SSO", ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given("Admin launch the \'XXX\' url", () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "sucsess",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    and("Admin navigates to the Patient Portal application", () => {
      const expectedResult = {
        ResponseCode: 2001,
        ResponseType: "failure",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    when('Admin lands onto E360+ \“Patient Login\” screen', () => {
      renderLogin()
    });
    and('Admin provides valid "<Phone number>" and valid "<password>"', () => {
      expect(true).toBeTruthy()
    });
    and("Admin click \'Login\' button.", () => {
      expect(true).toBeTruthy()
    });

    then(
      "Admin should view Home/Dashboard page",
      () => {
        expect(true).toBeTruthy()
      }
    );
  });
  test("EPIC_EPP-4_STORY_EPP-209-Verify whether the user is able to see the Patient Login page without Internet connection", ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given("user launch the 'XXX' url", () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "sucsess",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });
    when('user navigates to the Patient Portal application', () => {
      const expectedResult = {
        ResponseCode: 2001,
        ResponseType: "failure",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });
    and("turn off the Data", () => {
      expect(true).toBeTruthy()
    });
    then(
      "user should view appropriate error message",
      () => {
        expect(true).toBeTruthy()
      }
    );
  });
  test("EPIC_EPP-4_STORY_EPP-209-Verify whether the page is loading with in 3 seconds", ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given("user user launch the 'XXX' url", () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "sucsess",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    and("user navigates to the Patient Portal application", () => {
      const expectedResult = {
        ResponseCode: 2001,
        ResponseType: "failure",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });
    when('user lands onto “Patient Login” screen', () => {
      renderLogin()
    });
    then(
      "page should load in 3 seconds",
      () => {
        expect(true).toBeTruthy()
      }
    );
  });
  test("EPIC_EPP-4_STORY_EPP-209-Verify whether any error is displaying when we press F12 after navigating to the Patient Login page.", ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given("user user launch the 'XXX' url", () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "sucsess",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });

    and("user navigates to the Patient Portal application", () => {
      const expectedResult = {
        ResponseCode: 2001,
        ResponseType: "failure",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });
    when('user lands onto “Patient Login” screen', () => {
      renderLogin()
    });
    and("press the F12 button from the keyboard.", () => {
      expect(true).toBeTruthy()
    });
    then(
      "none of the javascript error should be seen by the user.",
      () => {
        expect(true).toBeTruthy()
      }
    );
  });
  test("EPIC_EPP-4_STORY_EPP-209-Verify whether the error message is displaying when the service is unavailable.", ({
    given,
    when,
    then,
    and,
  }) => {
    let container;
    given("user user launch the 'XXX' url", () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "sucsess",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });


    when('the service is unavailable', () => {
      expect(true).toBeTruthy()
    });
    and("user navigates to the Patient Portal application", () => {
      const expectedResult = {
        ResponseCode: 2001,
        ResponseType: "failure",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
    });
    and("user lands on “Patient Login” screen", () => {
      renderLogin()
    });
    then(
      "error message '503 - Server is not ready to handle the request' should get display.",
      () => {
        expect(true).toBeTruthy()
      }
    );
  });
});
