import { act, fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../../src/store/store";
import Validate, {
  getServerSideProps,
} from "../../../src/pages/patient/validate";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import Cookies from "universal-cookie";
import { TEST_ID } from "../../../src/utils/constants";
const useRouter = jest.spyOn(require("next/router"), "useRouter");

jest.mock("universal-cookie", () => {
  class MockCookies {
    static result = {};
    get(param) {
      if (param === "username") return "user1@photon.com";
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

// Mock out all top level functions, such as get, put, delete and post:

describe("Validate", () => {
  const mock = new MockAdapter(axios);
  let props;
  beforeEach(async () => {});

  afterEach(() => {
    mock.reset();
  });

  test("renders expired onetime", async () => {
    const mock = new MockAdapter(axios);
    mock.onPost(`/ecp/patient/oneTimeLinkToken`).reply(404, {});
    const container = render(
      <Provider store={store}>
        {Validate.getLayout(<Validate query={{ oneTimeToken: "345" }} />)}
      </Provider>
    );
    await waitFor(() => container.getByTestId("submission-message"));
    expect(container.getByTestId("submission-message")).toBeInTheDocument();
  });

  test("renders expired reset password", async () => {
    const mock = new MockAdapter(axios);
    props = await getServerSideProps({
      query: { resetPasswordToken: "123", username: "patient1@gmail.com" },
    });
    mock.onPost(`/ecp/patient/resetPasswordToken`).reply(404, {});
    const container = render(
      <Provider store={store}>
        {Validate.getLayout(<Validate {...props.props} />)}
      </Provider>
    );
    await waitFor(() => container.getByTestId("submission-message"));
    expect(container.getByTestId("submission-message")).toBeInTheDocument();
  });

  test("renders reset password success", async () => {
    const mock = new MockAdapter(axios);
    props = await getServerSideProps({
      query: { resetPasswordToken: "123", username: "patient1@gmail.com" },
    });
    mock.onPost(`/ecp/patient/resetPasswordToken`).reply(200, {
      tokenStatus: "true",
      email: "smith3@photon.com",
    });
    useRouter.push = (url) => {
      expect(url).toEqual(`update-password?username=patient1@gmail.com`);
    };
    render(
      <Provider store={store}>
        {Validate.getLayout(<Validate {...props.props} />)}
      </Provider>
    );
  });

  test("renders reset onelink success", async () => {
    const mock = new MockAdapter(axios);
    props = await getServerSideProps({
      query: { oneTimeToken: "123", username: "patient1@gmail.com" },
    });
    const userData = {
      communicationMethod: {
        email: "user1@photon.com",
        phone: "9998887772",
      },
      ResponseCode: 4000,
      ResponseType: "success",
    };

    const mockPatientId = {
      ecpPatientId: "98f9404b-6ea8-4732-b14f-9c1a168d8066",
    };
    mock.onPost(`/ecp/patient/mfa/getUserData`).reply(200, userData);
    mock.onPost(`/ecp/patient/search/ecppatientid`).reply(200, mockPatientId);
    mock.onPost(`/ecp/patient/oneTimeLinkToken`).reply(200, {
      tokenStatus: "true",
      email: "smith1@photon.com",
      access_token: "123",
      refresh_token: "123",
    });
    Cookies.set = (key) => {
      expect(key).toEqual("authorized");
    };
    render(
      <Provider store={store}>
        {Validate.getLayout(<Validate {...props.props} />)}
      </Provider>
    );
  });

  test("renders reset onelink success failed get patient id", async () => {
    const mock = new MockAdapter(axios);
    props = await getServerSideProps({
      query: { oneTimeToken: "123", username: "patient1@gmail.com" },
    });
    const userData = {};
    mock.onPost(`/ecp/patient/mfa/getUserData`).reply(404, userData);
    mock.onPost(`/ecp/patient/search/ecppatientid`).reply(404, {});
    mock.onPost(`/ecp/patient/oneTimeLinkToken`).reply(200, {
      tokenStatus: "true",
      email: "smith1@photon.com",
      access_token: "123",
      refresh_token: "123",
    });
    const container = render(
      <Provider store={store}>
        {Validate.getLayout(<Validate {...props.props} />)}
      </Provider>
    );
    // await waitFor(() => container.getByTestId("submission-message"));
    // expect(container.getByTestId("submission-message")).toBeInTheDocument();
    // const primaryBtn = container.getByRole("button", {
    //   name: /backButtonLink/i,
    // });
    // fireEvent.click(primaryBtn);
  });

  test("renders reset onelink success > failed get patient id", async () => {
    const mock = new MockAdapter(axios);
    props = await getServerSideProps({
      query: { oneTimeToken: "123", username: "patient1@gmail.com" },
    });
    const userData = {
      communicationMethod: {
        email: "user1@photon.com",
        phone: "9998887772",
      },
      ResponseCode: 4000,
      ResponseType: "success",
    };
    mock.onPost(`/ecp/patient/mfa/getUserData`).reply(200, userData);
    mock.onPost(`/ecp/patient/search/ecppatientid`).reply(404, {});
    mock.onPost(`/ecp/patient/oneTimeLinkToken`).reply(200, {
      tokenStatus: "true",
      email: "smith1@photon.com",
      access_token: "123",
      refresh_token: "123",
    });
    Cookies.set = (key) => {
      expect(key).toEqual("authorized");
    };
    render(
      <Provider store={store}>
        {Validate.getLayout(<Validate {...props.props} />)}
      </Provider>
    );
  });

  test("renders reset onelink success > success get patient id but empty data", async () => {
    const mock = new MockAdapter(axios);
    props = await getServerSideProps({
      query: { oneTimeToken: "123", username: "patient1@gmail.com" },
    });
    const userData = {
      communicationMethod: {
        email: "user1@photon.com",
        phone: "9998887772",
      },
      ResponseCode: 4000,
      ResponseType: "success",
    };
    mock.onPost(`/ecp/patient/mfa/getUserData`).reply(200, userData);
    mock.onPost(`/ecp/patient/search/ecppatientid`).reply(200, {});
    mock.onPost(`/ecp/patient/oneTimeLinkToken`).reply(200, {
      tokenStatus: "true",
      email: "smith1@photon.com",
      access_token: "123",
      refresh_token: "123",
    });
    Cookies.set = (key) => {
      expect(key).toEqual("authorized");
    };
    render(
      <Provider store={store}>
        {Validate.getLayout(<Validate {...props.props} />)}
      </Provider>
    );
  });
});
