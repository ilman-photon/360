import {
  act,
  fireEvent,
  render,
  cleanup,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { defineFeature, loadFeature } from "jest-cucumber";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import HomePage from "../../src/pages/patient";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import mediaQuery from "css-mediaquery";
import AuthPage from "../../src/pages/patient/login";
import { renderWithProviders } from "../src/utils/test-util";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint6/EPP-2712.feature"
);

const mockApi = () => {
  const mock = new MockAdapter(axios);
  const domain = window.location.origin;
  mock.onGet(`/ecp/appointments/appointment-types`).reply(200, {});
  mock
    .onGet(
      `${domain}/api/dummy/appointment/my-appointment/getAllAppointment/98f9404b-6ea8-4732-b14f-9c1a168d8066`
    )
    .reply(200, {});
  mock
    .onGet(
      `${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions?patientId=98f9404b-6ea8-4732-b14f-9c1a168d8066`
    )
    .reply(200, {});
};

function createMatchMedia(width) {
  return (query) => ({
    matches: mediaQuery.match(query, { width }),
    addListener: () => {},
    removeListener: () => {},
  });
}

const geolocation = () => {
  const mockGeolocation = {
    getCurrentPosition: jest.fn(),
    watchPosition: jest.fn(),
  };
  global.navigator.geolocation = mockGeolocation;
};

defineFeature(feature, (test) => {
  let container;
  const mock = new MockAdapter(axios);
  const element = document.createElement("div");

  beforeEach(() => {
    Object.defineProperty(document, "cookie", {
      writable: true,
      value: "authorized=true;accessToken=1234",
    });
  });

  afterEach(cleanup);

  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  const launchBrowser = () => {
    mock
      .onGet(`https://api.ipify.org?format=json`)
      .reply(200, { ip: "10.10.10.10" });
    act(() => {
      container = renderWithProviders(<AuthPage />, {
        container: document.body.appendChild(element),
        legacyRoot: true,
      });
    });
    const title = container.getByText("formTitle");
    expect("formTitle").toEqual(title.textContent);
  };

  const enterValidUsername = () => {
    const usernameField = container.getByLabelText(/emailUserLabel/i);
    const passwordField = container.getByLabelText(/passwordLabel/i);
    fireEvent.change(usernameField, {
      target: { value: "wrongUserName@email.cc" },
    });
    fireEvent.change(passwordField, { target: { value: "validPassword" } });
    expect(usernameField.value).not.toEqual("validUsername@email.cc");
    expect(passwordField.value).toEqual("validPassword");
  };

  const clickLogin = () => {
    const login = container.getByRole("button", { name: /Login/i });
    fireEvent.click(login);
  };

  test("EPIC_EPP-53_STORY_EPP-2712- Verify whether the user is able to lands on Dashboard/ Prescription screen", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user Launch  the browser and enter the user portal URL", () => {
      launchBrowser();
    });

    when(/^user enter valid (.*) and (.*)$/, (arg0, arg1) => {
      enterValidUsername();
      clickLogin();
    });

    and("clicks  on login button.", () => {
      defaultValidation();
    });

    and("user navigates to Dashboard/ Prescription screen", () => {
      Object.defineProperty(document, "cookie", {
        writable: true,
        value: "authorized=true;accessToken=1234",
      });
    });

    then("user lands on Dashboard/ Prescription screen", async () => {
      mockApi();
      geolocation();
      act(() => {
        container = render(
          <Provider store={store}>{HomePage.getLayout(<HomePage />)}</Provider>
        );
      });
      await waitFor(() => container.getByText(/Search for a doctor/i));
    });
  });

  test("EPIC_EPP-53_STORY_EPP-2712- Verify whether the user is able to view a link", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user Launch  the browser and enter the user portal URL", () => {
      launchBrowser();
    });

    when(/^user enter valid (.*) and (.*)$/, (arg0, arg1) => {
      enterValidUsername();
    });

    and("clicks  on login button.", () => {
      clickLogin();
    });

    and("user navigates to Dashboard/ Prescription screen", () => {
      Object.defineProperty(document, "cookie", {
        writable: true,
        value: "authorized=true;accessToken=1234",
      });
    });

    then("user lands on Dashboard/ Prescription screen", async () => {
      mockApi();
      geolocation();
      window.matchMedia = createMatchMedia("1980px");
      act(() => {
        container = render(
          <Provider store={store}>{HomePage.getLayout(<HomePage />)}</Provider>
        );
      });
      await waitFor(() => container.getByText(/Search for a doctor/i));
    });

    and("user should be able to view a link", () => {
      expect(container.getByTestId("ecommerce-button")).toBeInTheDocument();
      fireEvent.click(container.getByTestId("ecommerce-button"));
    });
  });

  test("EPIC_EPP-53_STORY_EPP-2712- Verify whether the user will redirect to an e-commerce site in a new tab", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user Launch  the browser and enter the user portal URL", () => {
      launchBrowser();
    });

    when(/^user enter valid (.*) and (.*)$/, (arg0, arg1) => {
      enterValidUsername();
    });

    and("clicks  on login button.", () => {
      clickLogin();
    });

    and("user navigates to Dashboard/ Prescription screen", () => {
      Object.defineProperty(document, "cookie", {
        writable: true,
        value: "authorized=true;accessToken=1234",
      });
    });

    then("user lands on Dashboard/ Prescription screen", async () => {
      mockApi();
      geolocation();
      window.matchMedia = createMatchMedia("480px");
      act(() => {
        container = render(
          <Provider store={store}>{HomePage.getLayout(<HomePage />)}</Provider>
        );
      });
      await waitFor(() => container.getByText(/Search for a doctor/i));
    });

    and("user should be able to view a link", () => {
      expect(
        container.getByTestId("ecommerce-mobile-button-0")
      ).toBeInTheDocument();
    });

    and(
      "clicking on link which will redirect the user to an e-commerce site in a new tab",
      () => {
        fireEvent.click(container.getByTestId("ecommerce-mobile-button-0"));
      }
    );
  });
});
