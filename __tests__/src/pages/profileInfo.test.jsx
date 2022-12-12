import { act, fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProfileInformationPage, {
  getStaticProps,
} from "../../../src/pages/patient/account/profile-info";
import { Provider } from "react-redux";
import store from "../../../src/store/store";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { mockUserData, mockUSState } from "../../../__mocks__/mockResponse";
import { TEST_ID } from "../../../src/utils/constants";
import { createMatchMedia } from "../../../__mocks__/commonSteps";
const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("ProfileInformationPage", () => {
  let container;
  const mockRouter = {
    back: jest.fn(),
    query: {},
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    pathname: "/patient/account/profile-info",
  };
  afterEach(() => {});
  beforeEach(async () => {
    Object.defineProperty(document, "cookie", {
      writable: true,
      value: "authorized=true;accessToken=1234",
    });
    
    const mock = new MockAdapter(axios);
    const userData = JSON.parse(localStorage.getItem("userData"));
    const mockUserDataNoImage = { ...mockUserData };
    delete mockUserDataNoImage.patientDetails.stateIssuedId;
    delete mockUserDataNoImage.patientDetails.stateIssuedIdBack;
    mock
      .onGet(`/ecp/patient/getPatient/${userData?.patientId}`)
      .reply(200, mockUserDataNoImage);
    mock
      .onGet(
        `https://public.opendatasoft.com/api/records/1.0/search/?dataset=georef-united-states-of-america-state&q=&sort=ste_name&facet=ste_name&rows=99`
      )
      .reply(200, mockUSState);
    useRouter.mockReturnValue(mockRouter);
    container = render(
      <Provider store={store}>
        {ProfileInformationPage.getLayout(
          <ProfileInformationPage {...getStaticProps()} />
        )}
      </Provider>
    );
    await waitFor(() => container.getByText("Preferred Name"));
    // await waitFor(() => container.getByRole("button", { name: /Edit/i }));
  });

  it("InsuranceInformationPage upload back foto", async () => {
    global.URL.createObjectURL = jest.fn(() => "/details.png");
    const file = new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" });
    const button = container.getAllByTestId("loc_edit")[0];
    act(() => {
      fireEvent.click(button);
    });
    fireEvent.change(container.getAllByTestId("loc_uploadProfileImage")[0], {
      target: { files: [file] },
    });
  });

  it("InsuranceInformationPage upload back foto", async () => {
    window.matchMedia = createMatchMedia("1920px");
    container = render(
      <Provider store={store}>
        {ProfileInformationPage.getLayout(
          <ProfileInformationPage {...getStaticProps()} />
        )}
      </Provider>
    );
    global.URL.createObjectURL = jest.fn(() => "/details.png");
    const file = new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" });
    const button = container.getAllByLabelText("Edit option")[0];
    act(() => {
      fireEvent.click(button);
    });
    fireEvent.change(container.getAllByTestId("loc_uploadProfileImage")[0], {
      target: { files: [file] },
    });
  });

  it("trigger back button to login screen", async () => {
    useRouter.mockReturnValue({
      ...mockRouter,
      push: (path) => {
        expect(path).toEqual("/patient/login");
      },
    });
    localStorage.getItem = jest.fn().mockReturnValue(null);
    let popstate = new window.Event("popstate");
    act(() => {
      window.dispatchEvent(popstate);
    });
    container = render(
      <Provider store={store}>
        {ProfileInformationPage.getLayout(
          <ProfileInformationPage {...getStaticProps()} />
        )}
      </Provider>
    );
  });

  // it("Edit Profile", async () => {
  //   const editBtn = container.getByLabelText("Edit option");
  //   fireEvent.click(editBtn);
  //   await waitFor(() =>
  //     container.getAllByTestId(TEST_ID.PERSONAL_INFO_TEST_ID.btnSave)
  //   );
  //   fireEvent.click(container.getByLabelText("Title"));

  //   await waitFor(() => container.getAllByRole("option"));
  //   fireEvent.click(container.getAllByRole("option")[1]);
  // });
});
