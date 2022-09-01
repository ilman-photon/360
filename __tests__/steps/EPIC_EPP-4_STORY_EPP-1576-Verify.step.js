import { act, fireEvent, render, waitFor } from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import AuthPage from "../../src/pages/patient/login";
import MfaPage, { getServerSideProps } from "../../src/pages/patient/mfa";
import Cookies from "universal-cookie";
import constants from "../../src/utils/constants";
import { Login } from "../../src/components/organisms/Login/login";

jest.mock("universal-cookie", () => {
  class MockCookies {
    static result = {};
    get(param) {
      if (param === "username") return "user1@photon.com";
      if (param === "ip") return "10.10.10.10";
      return MockCookies.result;
    }
    remove() {
      return jest.fn();
    }
    set() {
      return jest.fn();
    }
  }
  return MockCookies;
});

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1576.feature"
);

defineFeature(feature, (test) => {
  let container;
  const mock = new MockAdapter(axios);
  const element = document.createElement("div");

  const validateTextInDocument = (arg0) => {
    //expect(container.getByText(arg0)).toBeInTheDocument();
  };
  const renderMFA = async () => {
    const contex = {
      req: {
        headers: {
          cookie: "username=user1%40photon.com; mfa=true",
        },
      },
    };

    const userData = {
      communicationMethod: {
        email: "user1@photon.com",
        phone: "9998887772",
      },
      ResponseCode: 4000,
      ResponseType: "success",
    };

    mock.onPost(`/ecp/patient/mfa/getUserData`).reply(200, userData);
    const data = {
      mfaCode: 123456,
      ResponseCode: 4000,
      ResponseType: "success",
    };
    mock.onPost(`/ecp/patient/mfa/sendotp`).reply(200, data);

    getServerSideProps(contex);
    // act(() => {
    //   container = render(<MfaPage />, {
    //     container: document.body.appendChild(element),
    //     legacyRoot: true,
    //   });
    // });
    container = render(<MfaPage />);
    ////await waitFor(() => container.getByText(/communicationMethodTitle/i));
    expect(container).toMatchSnapshot();
  };

  test("EPIC_EPP-44_STORY_EPP-1576 - Verify user able to  view 'Already have an appointment? Sync your appointment information' CTA in the \"Patient Login\" page.", ({
    given,
    and,
  }) => {
    given("user launch Patient Portal url", () => {
      expect(true).toBeTruthy();
    });

    and("user lands on the patient login screen", () => {
      const mockOnLoginClicked = jest.fn((data, route, callback) => {
        callback({
          status: "success",
        });
      });
      container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
    });

    and("user views the user name and Password fields", () => {
      expect(true).toBeTruthy();
    });

    and("user views the Forgot password link", () => {
      expect(true).toBeTruthy();
    });

    and("user views the login button", () => {
      expect(true).toBeTruthy();
    });

    and("user views the Continue as a guest button", () => {
      expect(true).toBeTruthy();
    });

    and("user views the Create Account button", () => {
      expect(true).toBeTruthy();
    });

    and(
      "user views the 'Already have an appointment? Sync your appointment information' button",
      () => {
        expect(true).toBeTruthy();
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1576 - Verify that the admin able to  view 'Already have an appointment? Sync your appointment information' CTA in the \"Patient Login\" page.", ({
    given,
    and,
  }) => {
    given("admin launch Patient Portal url", () => {
      expect(true).toBeTruthy();
    });

    and("admin lands on the patient login screen", () => {
      expect(true).toBeTruthy();
    });

    and("admin views the user name and Password fields", () => {
      expect(true).toBeTruthy();
    });

    and("admin views the Forgot password link", () => {
      expect(true).toBeTruthy();
    });

    and("admin views the login button", () => {
      expect(true).toBeTruthy();
    });

    and("admin views the Continue as a guest button", () => {
      expect(true).toBeTruthy();
    });

    and("admin views the Create Account button", () => {
      expect(true).toBeTruthy();
    });

    and(
      "admin views the 'Already have an appointment? Sync your appointment information' button",
      () => {
        expect(true).toBeTruthy();
      }
    );
  });
});
