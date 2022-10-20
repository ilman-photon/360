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
import { TEMP_DATA_GLASSES, TEMP_DATA_CONTACTS, TEMP_DATA_MEDICATION } from "../../__mocks__/mockResponse";

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

defineFeature(feature, (test) => {
  let container;
  const mock = new MockAdapter(axios);

  beforeEach(() => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2022, 3, 1));
  });
  
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
          `/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066`
        )
        .reply(200, TEMP_DATA_MEDICATION);
        mock
        .onGet(
          `/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066/getContactsData`
        )
        .reply(200, TEMP_DATA_CONTACTS);
        mock
        .onGet(`/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066/getGlassesData`
        )
        .reply(200, TEMP_DATA_GLASSES);
        window.matchMedia = createMatchMedia("1920px");

        act(() => {
          container = render(
            <Provider store={store}>
              {PrescriptionPage.getLayout(<PrescriptionPage />)}
            </Provider>
          );
        });
        await waitFor(() => container.getByText("Medications"));
        expect(container.getAllByText(/Contacts/i)[0]).toBeInTheDocument();
      }
    );

    and(
      "User should be able to view options to filter the prescriptions with details as below:",
      async () => {
        const medicationMenu = container.getByTestId("menu-medication");
        fireEvent.click(medicationMenu)
        await waitFor(()=> container.getByText(/Active Medications/i));
          
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
        // expect(
        //   container.getAllByText(/Cancel Refill Request/i)[0]
        // ).toBeInTheDocument();
      }
    );
  });
});
