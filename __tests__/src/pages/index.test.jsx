import { act, cleanup, render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../../src/store/store";
import HomePage, { getStaticProps } from "../../../src/pages/patient";
import Cookies from "universal-cookie";
import { fireEvent } from "@storybook/testing-library";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  createMatchMedia,
  expectPushRouter,
} from "../../../__mocks__/commonSteps";
import {
  mockAppointmentTypes,
  prescriptionContact,
  prescriptionGlasses,
  prescriptionMedication,
  submitFilter,
  upcomingResponse,
} from "../../../__mocks__/mockResponse";
import { TEST_ID } from "../../../src/utils/constants";
import { mockGoogleWindow } from "../../../__mocks__/component-mock";

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
      watchPosition: jest.fn(),
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
      watchPosition: jest.fn(),
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
    act(() => {
      container = render(
        <Provider store={store}>{HomePage.getLayout(<HomePage />)}</Provider>
      );
    });
    const { getByTestId, getAllByTestId } = container;
    await waitFor(() => getAllByTestId("user-menu-open")[0]);
    expect(getByTestId("user-menu-nav-open")).toBeInTheDocument();
    fireEvent.click(getAllByTestId("user-menu-open")[0]);
    fireEvent.click(getAllByTestId("logout")[0]);
    jest.resetAllMocks();
  });

  it("renders homepage user logout failed", async () => {
    const mockGeolocation = {
      getCurrentPosition: jest.fn(),
      watchPosition: jest.fn(),
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
    act(() => {
      container = render(
        <Provider store={store}>{HomePage.getLayout(<HomePage />)}</Provider>
      );
    });
    const { getByTestId, getAllByTestId } = container;
    await waitFor(() => getAllByTestId("user-menu-open")[0]);
    fireEvent.click(getAllByTestId("user-menu-open")[0]);
    fireEvent.click(getAllByTestId("logout")[0]);
    jest.resetAllMocks();
  });

  it("renders homepage user logout failed", async () => {
    const mockGeolocation = {
      getCurrentPosition: jest.fn(),
      watchPosition: jest.fn(),
    };
    global.navigator.geolocation = mockGeolocation;
    Cookies.result = "true";

    let container;
    act(() => {
      container = render(
        <Provider store={store}>{HomePage.getLayout(<HomePage />)}</Provider>
      );
    });
    const { getByTestId, getAllByTestId } = container;
    await waitFor(() => getAllByTestId("user-menu-open")[0]);
    fireEvent.click(getAllByTestId("user-menu-open")[0]);
    expect(await getAllByTestId("logout")[0]).toBeInTheDocument();
    fireEvent.click(getByTestId("user-menu-close"));
    jest.resetAllMocks();
  });

  const renderHome = async () => {
    mockGoogleWindow();
    const mock = new MockAdapter(axios);
    mock.reset();
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2022, 8, 1));
    const mockGeolocation = {
      getCurrentPosition: jest.fn(),
      watchPosition: jest.fn(),
    };
    global.navigator.geolocation = mockGeolocation;
    Cookies.result = "true";
    mock
      .onPut("/ecp/appointments/available-slot?searchText=Texas")
      .reply(200, submitFilter);
    mock
      .onGet(`/ecp/appointments/appointment-types`)
      .reply(200, mockAppointmentTypes);
    const userData = JSON.parse(localStorage.getItem("userData"));
    mock
      .onGet(new RegExp(`/ecp/appointments/${userData?.patientId}/upcoming`))
      .reply(200, upcomingResponse);
    mock
      .onGet(`/ecp/prescriptions/patient/${userData?.patientId}`)
      .reply(200, prescriptionMedication);
    mock
      .onGet(`/ecp/prescriptions/patient/${userData?.patientId}/getGlassesData`)
      .reply(200, prescriptionGlasses);
    mock
      .onGet(
        `/ecp/prescriptions/patient/${userData?.patientId}/getContactsData`
      )
      .reply(200, prescriptionContact);

    let container;
    const props = await getStaticProps();
    act(() => {
      container = render(
        <Provider store={store}>
          {HomePage.getLayout(<HomePage {...props} />)}
        </Provider>
      );
    });
    await waitFor(() => container.getByText(/Prescribed by/i));
    return { ...container, mock };
  };

  it("renders homepage validate menu", async () => {
    window.matchMedia = createMatchMedia("480px");
    const { getByTestId, getAllByTestId, getByText, getByLabelText } =
      await renderHome();
    await waitFor(() => getByTestId("CancelOutlinedIcon"));

    await waitFor(() => getByTestId("user-menu-nav-open"));
    fireEvent.click(getByTestId("user-menu-nav-open"));
    await waitFor(() => getAllByTestId("AutoAwesomeMosaicOutlinedIcon")[0]);
    expect(
      getAllByTestId("AutoAwesomeMosaicOutlinedIcon")[0]
    ).toBeInTheDocument();
    expect(getAllByTestId("CalendarTodayOutlinedIcon")[0]).toBeInTheDocument();
    expect(getByTestId("CreateNewFolderOutlinedIcon")).toBeInTheDocument();
    expect(getByTestId("DescriptionOutlinedIcon")).toBeInTheDocument();
    fireEvent.click(getByTestId("CreateNewFolderOutlinedIcon"));
    fireEvent.click(getByText("Health Chart"));
    await waitFor(() => getAllByTestId("AutoAwesomeMosaicOutlinedIcon")[0]);
    fireEvent.click(getByTestId("DescriptionOutlinedIcon"));
    await waitFor(() => getByTestId("user-menu-nav-close"));

    fireEvent.click(getByTestId("open-filter-modal"));
    await waitFor(() => getByTestId("VisibilityOutlinedIcon"));

    const Q1 = getByLabelText(/City, state, or zip code/i);
    fireEvent.change(Q1, { target: { value: "Texas" } });
    expect(Q1.value).toEqual("Texas");
    fireEvent.click(getAllByTestId(TEST_ID.APPOINTMENT_TEST_ID.searchbtn)[0]);
    jest.resetAllMocks();
  });

  it("renders homepage view all prescription", async () => {
    window.matchMedia = createMatchMedia("480px");
    expectPushRouter(`/patient/prescription`);
    const { getByTestId } = await renderHome();
    await waitFor(() => getByTestId("view-prescription-glasses"));
    fireEvent.click(getByTestId("view-prescription-glasses"));
    jest.resetAllMocks();
  });

  it("renders homepage click reschedule appointment", async () => {
    window.matchMedia = createMatchMedia("480px");
    expectPushRouter(
      `/patient/appointments/66c19bc9-7a87-4ead-9f8b-5599eba0b2c2/reschedule`
    );
    const { getAllByTestId } = await renderHome();
    await waitFor(() => getAllByTestId("CalendarTodayRoundedIcon"));
    fireEvent.click(getAllByTestId("CalendarTodayRoundedIcon")[1]);
    jest.resetAllMocks();
  });

  it("renders homepage click cancel appointment cancel appointment success", async () => {
    window.matchMedia = createMatchMedia("480px");
    expectPushRouter(`/patient/appointments`);
    const { getByTestId, getAllByTestId, getByLabelText, mock } =
      await renderHome();
    mock
      .onPut(
        `/ecp/appointments/cancel/${upcomingResponse.entities[0]._id}/stateTransition`
      )
      .reply(200, upcomingResponse.entities[0]);
    await waitFor(() => getAllByTestId("CancelOutlinedIcon"));
    fireEvent.click(getAllByTestId("CancelOutlinedIcon")[0]);
    fireEvent.click(getByTestId(TEST_ID.CANCEL_SCHEDULE_TEST_ID.btnKeep));
    await waitFor(() => getAllByTestId("CancelOutlinedIcon"));
    fireEvent.click(getAllByTestId("CancelOutlinedIcon")[0]);

    await waitFor(() => getByTestId("noNeeded-test"));
    fireEvent.click(getByTestId("noNeeded-test"));
    fireEvent.click(getByTestId(TEST_ID.CANCEL_SCHEDULE_TEST_ID.btnCancel));
    expect(getAllByTestId("CancelOutlinedIcon").length).toEqual(1);

    // fireEvent.click(getByLabelText("View appointments option"));
    jest.resetAllMocks();
  });

  it("renders homepage click cancel appointment failed", async () => {
    window.matchMedia = createMatchMedia("480px");
    const { getByTestId, getAllByTestId, getByLabelText, mock } =
      await renderHome();
    mock
      .onPut(
        `/ecp/appointments/cancel/${upcomingResponse.entities[0]._id}/stateTransition`
      )
      .reply(400, upcomingResponse.entities[0]);
    await waitFor(() => getAllByTestId("CancelOutlinedIcon"));
    fireEvent.click(getAllByTestId("CancelOutlinedIcon")[0]);

    await waitFor(() => getByTestId("noNeeded-test"));
    fireEvent.click(getByTestId("noNeeded-test"));
    fireEvent.click(getByTestId(TEST_ID.CANCEL_SCHEDULE_TEST_ID.btnCancel));
    expect(getAllByTestId("CancelOutlinedIcon").length).toEqual(1);
    jest.resetAllMocks();
  });
});
