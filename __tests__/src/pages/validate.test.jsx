import { act, fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../../src/store/store";
import Validate from "../../../src/pages/patient/validate"
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";

jest.mock("universal-cookie", () => {
  const mCookie = {
    get: jest.fn()
  };
  return jest.fn(() => mCookie);
});

// Mock out all top level functions, such as get, put, delete and post:

describe("Validate", () => {
    

  test("renders expired onetime", async () => {
    const mock = new MockAdapter(axios);
    mock.onPost(`/ecp/patient/oneTimeLinkToken`).reply(404, {} );
    const container = render(
      <Provider store={store}>
        <Validate query={{oneTimeToken:"345"}}/>
      </Provider>
    );
    expect(container).toMatchSnapshot()
    const postMessage = await waitFor(() => container.getByTestId("submission-message"));
      expect(postMessage).toBeTruthy
  });

  test("renders expired reset password", async () => {
    const mock = new MockAdapter(axios);
    mock.onPost(`/ecp/patient/resetPasswordToken`).reply(404, {} );
    const container = render(
      <Provider store={store}>
        <Validate query={{resetPasswordToken:"345"}}/>
      </Provider>
    );
    expect(container).toMatchSnapshot()
    const postMessage = await waitFor(() => container.getByTestId("submission-message"));
      expect(postMessage).toBeTruthy
  });

  test("renders reset password success", () => {
    const mock = new MockAdapter(axios);
    mock.onPost(`/ecp/patient/resetPasswordToken`).reply(200, {
      "tokenStatus": "true",
      "email": "smith3@photon.com"
  } );
    const container = render(
      <Provider store={store}>
        <Validate query={{resetPasswordToken:"123"}}/>
      </Provider>
    );
    expect(container).toMatchSnapshot()
  });

  test("renders reset onelink success", () => {
    const mock = new MockAdapter(axios);
    mock.onPost(`/ecp/patient/oneTimeLinkToken`).reply(200, {
      "tokenStatus": "true",
      "email": "smith1@photon.com"
  } );
    const container = render(
      <Provider store={store}>
        <Validate query={{oneTimeToken:"123"}}/>
      </Provider>
    );
    expect(container).toMatchSnapshot()
  });

});
