import "@testing-library/jest-dom/extend-expect";
import { act, fireEvent, render, waitFor } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import Cookies from "universal-cookie";
import PrescriptionPage from "../../src/pages/patient/prescription";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import mediaQuery from "css-mediaquery";
import { prescriptionMedication } from "../../__mocks__/mockResponse";

function createMatchMedia(width) {
  return (query) => ({
    matches: mediaQuery.match(query, { width }),
    addListener: () => {},
    removeListener: () => {},
  });
}

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

const defaultValidation = () => {
  expect(true).toBeTruthy();
};

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint6/EPP-2704.feature"
);

defineFeature(feature, (test) => {
  let container;
  const mock = new MockAdapter(axios);

  beforeEach(() => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2022, 3, 1));
  });

  test("EPIC_EPP-17_STORY_EPP-2704 - To verify whether the patient is able to view the below mentioned filters in the Prescription page", ({
    given,
    when,
    and,
    then,
  }) => {
    given(
      "Patient Launch  the browser and enter the Patient portal URL",
      () => {
        defaultValidation();
      }
    );

    when(/^Patient enter valid (.*) and (.*)$/, (arg0, arg1) => {
      defaultValidation();
    });

    and("clicks  on login button.", () => {
      defaultValidation();
    });

    and("navigate to the View Prescription page.", async () => {
      Cookies.result = "true";
      const expectedResult = {
        ResponseCode: 2005,
        ResponseType: "success",
      };
      mock.onPost(`/ecp/patient/logout`).reply(200, expectedResult);
      mock
      .onGet(
        `/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066`
      )
      .reply(200, prescriptionMedication);
      mock
      .onGet(
        `/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066/getContactsData`
      )
      .reply(200, {});
      mock
      .onGet(`/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066/getGlassesData`
      )
      .reply(200, {});
      window.matchMedia = createMatchMedia("1920px");
      const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
      };
      global.navigator.geolocation = mockGeolocation;
      Cookies.result = false;
      act(() => {
        container = render(
          <Provider store={store}>
            {PrescriptionPage.getLayout(<PrescriptionPage />)}
          </Provider>
        );
      });
    });

    then(
      "the Patient should see the filters for the below mentioned details",
      async (table) => {
        await waitFor(() => container.getByText(/Filters/i));
        await waitFor(() => container.getByTestId("menu-medication"));
        const filterBtn = container.getByText(/Filters/i);
        const medicationMenu = container.getByTestId("menu-medication");
        expect(filterBtn).toBeInTheDocument();
        act(() => {
          fireEvent.click(medicationMenu);
        });

        await waitFor(() => container.getByText(/Active Medications/i));
        fireEvent.click(filterBtn);
        await waitFor(() => container.getByText(/All/i));
        fireEvent.click(container.getByLabelText(/All/i));
        fireEvent.click(container.getByText(/Reset/i));
        fireEvent.click(container.getByLabelText(/All/i));
        fireEvent.click(container.getByText(/Done/i));
      }
    );
  });
});
