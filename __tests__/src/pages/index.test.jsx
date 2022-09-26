import { act, cleanup, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../../src/store/store";
import HomePage from "../../../src/pages/patient";
import Cookies from "universal-cookie";
import { fireEvent } from "@storybook/testing-library";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

jest.mock("universal-cookie", () => {
  class MockCookies {
    static result = {};
    get() {
      return MockCookies.result;
    }
    remove() {
      return jest.fn();
    }
  }
  return MockCookies;
});
describe("Home", () => {

  afterEach(cleanup);
  it("renders homepage non login user", async () => {
    const mockGeolocation = {
      getCurrentPosition: jest.fn(),
      watchPosition: jest.fn()
    };
    global.navigator.geolocation = mockGeolocation;
    Cookies.result = false;
    
    const { container, queryByText } = render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
    expect(queryByText("Logout")).not.toBeInTheDocument();
    
    jest.resetAllMocks();
  });

  it("renders homepage user logout success", async () => {
    const mockGeolocation = {
      getCurrentPosition: jest.fn(),
      watchPosition: jest.fn()
    };
    global.navigator.geolocation = mockGeolocation;
    Cookies.result = "true";
    const expectedResult = {
      ResponseCode: 2005,
      ResponseType: "success",
    };
    const mock = new MockAdapter(axios);
    mock.onPost(`/ecp/patient/logout`).reply(200, expectedResult);
    
    let container;
    act(()=>{
      container = render(
        <Provider store={store}>
           {HomePage.getLayout(<HomePage />)}
        </Provider>
      );
    })
    const { getByTestId, getAllByTestId } = container
    await waitFor(()=> getByTestId("user-menu-open"))
    expect(getByTestId("user-menu-nav-open")).toBeInTheDocument();
    fireEvent.click(getByTestId("user-menu-open"));
    fireEvent.click(getAllByTestId("logout")[0]);
    jest.resetAllMocks();
  });

  it("renders homepage user logout failed", async () => {
    const mockGeolocation = {
      getCurrentPosition: jest.fn(),
      watchPosition: jest.fn()
    };
    global.navigator.geolocation = mockGeolocation;
    Cookies.result = "true";
    const expectedResult = {
      ResponseCode: 2002,
      ResponseType: "failure",
    };
    const mock = new MockAdapter(axios);
    mock.onPost(`/ecp/patient/logout`).reply(500, expectedResult);
    
    let container;
    act(()=>{
      container = render(
        <Provider store={store}>
           {HomePage.getLayout(<HomePage />)}
        </Provider>
      );
    })
    const { getByTestId, getAllByTestId } = container
    await waitFor(()=> getByTestId("user-menu-open"))
    fireEvent.click(getByTestId("user-menu-open"));
    fireEvent.click(getAllByTestId("logout")[0]);
    jest.resetAllMocks();
  });

  it("renders homepage user logout failed", async () => {
    const mockGeolocation = {
      getCurrentPosition: jest.fn(),
      watchPosition: jest.fn()
    };
    global.navigator.geolocation = mockGeolocation;
    Cookies.result = "true";
    
    let container;
    act(()=>{
      container = render(
        <Provider store={store}>
           {HomePage.getLayout(<HomePage />)}
        </Provider>
      );
    })
    const { getByTestId, getAllByTestId } = container
    await waitFor(()=> getByTestId("user-menu-open"))
    fireEvent.click(getByTestId("user-menu-open"));
    expect(await getAllByTestId("logout")[0]).toBeInTheDocument();
    fireEvent.click(getByTestId("user-menu-close"));
    jest.resetAllMocks();
  });
});
