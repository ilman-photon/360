import { act, render, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { defineFeature, loadFeature } from "jest-cucumber";
import Cookies from "universal-cookie";
import { Provider } from "react-redux";
import PrescriptionPage from "../../src/pages/patient/prescription";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import store from "../../src/store/store";
import mediaQuery from "css-mediaquery";

function createMatchMedia(width) {
  return (query) => ({
    matches: mediaQuery.match(query, { width }),
    addListener: () => {},
    removeListener: () => {},
  });
}

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint6/EPP-2709.feature"
);

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

const defaultValidation = () => {
  expect(true).toBeTruthy();
};

const MOCK_PRESCRIPTION = {
  prescriptions: {
    glasses: [
      {
        prescribedBy: "Dr. Sonha Nguyen",
        date: "2022-09-02T11:18:47.229Z",
        expirationDate: "2022-10-02T11:18:47.229Z",
        prescriptionDetails: [
          {
            Eye: "OD",
            Sph: "+20.00",
            Cyl: "-5.00",
            Axis: "70",
            Add: "x180",
          },
          {
            Eye: "OS",
            Sph: "+19.75",
            Cyl: "-4.75",
            Axis: "38",
            Add: "x090",
          },
        ],
      },
      {
        prescribedBy: "Dr. Sonha Nguyen",
        date: "2022-09-02T11:18:47.229Z",
        expirationDate: "2022-10-02T11:18:47.229Z",
        prescriptionDetails: [
          {
            Eye: "OD",
            Sph: "+20.00",
            Cyl: "-5.00",
            Axis: "70",
            Add: "x180",
          },
          {
            Eye: "OS",
            Sph: "+19.75",
            Cyl: "-4.75",
            Axis: "38",
            Add: "x090",
          },
        ],
      },
    ],
    contacts: [
      {
        prescribedBy: "Dr. Sonha Nguyen",
        date: "2022-09-01T11:18:47.229Z",
        expirationDate: "2022-10-02T11:18:47.229Z",
        prescriptionDetails: [
          {
            Eye: "OD",
            Sph: "+20.00",
            Bc: "-5.00",
            Cyl: "70",
            Axis: "x180",
          },
          {
            Eye: "OS",
            Sph: "+19.75",
            Bc: "-4.75",
            Cyl: "38",
            Axis: "x090",
          },
        ],
      },
      {
        prescribedBy: "Dr. Sonha Nguyen",
        date: "2022-09-02T11:18:47.229Z",
        expirationDate: "2022-10-02T11:18:47.229Z",
        prescriptionDetails: [
          {
            Eye: "OD",
            Sph: "+20.00",
            Bc: "-5.00",
            Cyl: "70",
            Axis: "x180",
          },
          {
            Eye: "OS",
            Sph: "+19.75",
            Bc: "-4.75",
            Cyl: "38",
            Axis: "x090",
          },
        ],
      },
    ],
    medications: [
      {
        id: "0",
        prescription: "Aspirint 0.1% Ointmanet",
        date: "2022-09-02T11:18:47.229Z",
        status: "refill request",
      },
      {
        id: "1",
        prescription: "Aspirint 0.1% Ointmanet",
        date: "2022-09-02T11:18:47.229Z",
      },
      {
        id: "2",
        prescription: "Aspirint 0.1% Ointmanet",
        date: "2022-09-02T11:18:47.229Z",
      },
      {
        id: "3",
        prescription: "Aspirint 0.1% Ointmanet",
        date: "2022-08-02T11:18:47.229Z",
        expiredDate: "2022-08-10T11:18:47.229Z",
      },
    ],
  },
};

defineFeature(feature, (test) => {
  let container;
  const mock = new MockAdapter(axios);

  test("EPIC_EPP-19_STORY_EPP-2709 - Verify User should be able to see the option to cancel the requested refill", ({
    given,
    when,
    then,
    and,
  }) => {
    given("User launch Patient Portal url", () => {});

    when("User is logged in to the application", () => {
      Cookies.result = { authorized: true };
    });

    then(/^User lands to the "(.*)" screen$/, () => {});

    and(/^User should see the "(.*)" option$/, () => {});

    when(/^User selects the "(.*)" option$/, () => {});

    then(/^User should navigated to "(.*)" screen$/, () => {});

    and(/^User should see on "(.*)" button$/, () => {});

    when(/^User clicks on "(.*)" button$/, () => {});

    then(/^User should navigated to "(.*)" screen$/, () => {});

    and("User should see the widget with prescriptions", () => {});

    when("User clicks on the widget with prescriptions", () => {});

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {});

    and(
      "User should be able to view the list of prescriptions with the details as below:",
      async () => {
        Cookies.result = "true";
        const domain = window.location.origin;
        mock
          .onGet(
            `${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions?patientId=98f9404b-6ea8-4732-b14f-9c1a168d8066`
          )
          .reply(200, MOCK_PRESCRIPTION);
        window.matchMedia = createMatchMedia("1920px");

        act(() => {
          container = render(
            <Provider store={store}>
              {PrescriptionPage.getLayout(<PrescriptionPage />)}
            </Provider>
          );
        });
        await waitFor(() => container.getByText(/Filter/i));
        expect(
          container.getAllByText(/Active Medications/i)[0]
        ).toBeInTheDocument();
      }
    );

    and(
      "User should be able to view options to filter the prescriptions with details as below:",
      async () => {
        const filterButton = container.getByTestId("medication-filter-button");
        act(() => {
          fireEvent.click(filterButton);
        });
        expect(container.getByText(/Filter By/i)).toBeInTheDocument();
      }
    );

    and(
      "User should be able to view an option to clear those filters when applied",
      () => {
        defaultValidation();
      }
    );

    and(
      "User should be able to view option to cancel refill for those requested prescriptions",
      () => {
        expect(
          container.getAllByText(/Cancel Refill Request/i)[0]
        ).toBeInTheDocument();
      }
    );
  });
});
