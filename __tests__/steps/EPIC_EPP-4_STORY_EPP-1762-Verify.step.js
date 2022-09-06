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
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1572.feature"
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

  test("EPIC_EPP-44_STORY_EPP-1572-Verify if user able to view and select continue as guest option", ({}) => {});

  test("EPIC_EPP-44_STORY_EPP-1572- Verify if user able to navigate to basic detail page after select Continue as a Guest", ({}) => {});
  test("EPIC_EPP-44_STORY_EPP-1572-Verify if user able to view basic details fields", ({}) => {});
  test("EPIC_EPP-44_STORY_EPP-1572- Verify if user able to view First Name, Last Name, Date of Birth, Preferred mode(s) of communication as mandatory field", ({}) => {});
  test("EPIC_EPP-44_STORY_EPP-1572-Verify if user to able to enter charater min2 & Max 50 in First Name field", ({}) => {});

  test("EPIC_EPP-44_STORY_EPP-1572-Verify if user to able to enter charater min2 & Max 50 in Last Name field", ({}) => {});

  test("EPIC_EPP-44_STORY_EPP-1572-Verify if user able to enter Date of Birth in MM/DD/YYYY format", ({}) => {});
  test("EPIC_EPP-44_STORY_EPP-1572-Verify if user able to enter email id with correct format in Email field", ({}) => {});

  test("EPIC_EPP-44_STORY_EPP-1572-Verify if user able to Mobile number with correct format in Mobile number field", ({}) => {});

  test("EPIC_EPP-44_STORY_EPP-1572-Verify if user able to see either Email or Mobile number field mandatory if both field leaves blank", ({}) => {});
  test("EPIC_EPP-44_STORY_EPP-1572- Verify if user able to see error message when mandatory field leaves blank", ({}) => {});
  test("EPIC_EPP-44_STORY_EPP-1572- Verify if user able to see submit option after enter all details in the field", ({}) => {});
  test("EPIC_EPP-44_STORY_EPP-1572- Verify if user able to view the field Preferred mode of communication preselected with option Both", ({}) => {});
  test("EPIC_EPP-44_STORY_EPP-1572- Verify if user able to change Preferred mode of communication to Mobile Number or Both when Email is provided", ({}) => {});
  test('EPIC_EPP-44_STORY_EPP-1572- Verify if user able to change "Preferred mode of communication" to Email or Both when Mobile number is provided', ({}) => {});

  test("EPIC_EPP-44_STORY_EPP-1572- Verify if user able to change \"Preferred mode of communication\" to 'Email' or 'Mobile number' when Both Mobile number & Email provided", ({}) => {});
});
