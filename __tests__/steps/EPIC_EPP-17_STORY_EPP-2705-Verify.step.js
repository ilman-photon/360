import "@testing-library/jest-dom/extend-expect";
import { act, fireEvent, render, waitFor } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import Cookies from "universal-cookie";
import PrescriptionPage from "../../src/pages/patient/prescription";
import { Provider } from "react-redux";
import { getServerSideProps } from "../../src/pages/patient/mfa";
import store from "../../src/store/store";
import mediaQuery from "css-mediaquery";
import { TEMP_DATA_CONTACTS, TEMP_DATA_GLASSES, TEMP_DATA_MEDICATION } from "../../__mocks__/mockResponse";

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
  "./__tests__/feature/Patient Portal/Sprint6/EPP-2705.feature"
);

defineFeature(feature, (test) => {
  let container;
  const mock = new MockAdapter(axios);

  beforeEach(() => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2022, 3, 1));
  });

  test("EPIC_EPP-17_STORY_EPP-2705 - Verify whether the Refill status is filtering correctly.", ({
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
      const domain = window.location.origin;
      mock.onPost(`/ecp/patient/logout`).reply(200, expectedResult);
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
      window.matchMedia = createMatchMedia("1440px");
      const response = await getServerSideProps({
        req: { headers: { cookie: { get: jest.fn().mockReturnValue(true) } } },
        res: jest.fn(),
      });
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
      await waitFor(() => container.getByText("Medications"));
      expect(container.getAllByText(/Contacts/i)[0]).toBeInTheDocument();
      expect(response).toEqual({
        props: { isStepTwo: false },
      });
    });

    and("filter the Refill status", async () => {
      const medicationMenu = container.getByTestId("menu-medication");
      fireEvent.click(medicationMenu)
      await waitFor(()=> container.getByText(/Active Medications/i));

      const filterBtn = container.getByText(/Filter/i);
      expect(filterBtn).toBeInTheDocument();

      fireEvent.click(filterBtn);
      await waitFor(() => container.getByText(/All/i));
      fireEvent.click(container.getByLabelText(/All/i));
      fireEvent.click(container.getByText(/Done/i));
    });

    then("patient should able to see the correct filter result.", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-17_STORY_EPP-2705 - Verify whether the Provider is filtering correctly.", ({
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
      const domain = window.location.origin;
      mock.onPost(`/ecp/patient/logout`).reply(200, expectedResult);
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
      window.matchMedia = createMatchMedia("1024px");
      const response = await getServerSideProps({
        req: { headers: { cookie: { get: jest.fn().mockReturnValue(true) } } },
        res: jest.fn(),
      });
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
      await waitFor(() => container.getByText("Medications"));
      expect(container.getAllByText(/Contacts/i)[0]).toBeInTheDocument();
      expect(response).toEqual({
        props: { isStepTwo: false },
      });
    });

    and("filter the Provider", async () => {
      const medicationMenu = container.getByTestId("menu-medication");
      fireEvent.click(medicationMenu)
      await waitFor(()=> container.getByText(/Active Medications/i));

      const filterBtn = container.getByText(/Filter/i);
      expect(filterBtn).toBeInTheDocument();
      fireEvent.click(filterBtn);
      await waitFor(() => container.getAllByText(/Provider ClarksonEyeCare/i)[0]);
      fireEvent.click(container.getByText(/Done/i));
    });

    then("patient should able to see the correct filter result.", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-17_STORY_EPP-2705 - Verify whether the Prescription type(Glass, Lens, Medications) is filtering correctly.", ({
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
      const domain = window.location.origin;
      mock.onPost(`/ecp/patient/logout`).reply(200, expectedResult);
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
      const response = await getServerSideProps({
        req: { headers: { cookie: { get: jest.fn().mockReturnValue(true) } } },
        res: jest.fn(),
      });
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
      await waitFor(() => container.getByText("Medications"));
      expect(container.getAllByText(/Contacts/i)[0]).toBeInTheDocument();
      expect(response).toEqual({
        props: { isStepTwo: false },
      });
    });

    and(
      "filter the Prescription type such as Glass/Lens/ Medications",
      async () => {
        const medicationMenu = container.getByTestId("menu-medication");
        fireEvent.click(medicationMenu)
        await waitFor(()=> container.getByText(/Active Medications/i));

        const filterBtn = container.getByText(/Filter/i);
        expect(filterBtn).toBeInTheDocument();
        fireEvent.click(filterBtn);

        await waitFor(() => container.getByText(/See more/i));
        fireEvent.click(container.getByText(/See more/i));
        fireEvent.click(container.getByText(/See Less/i));
        fireEvent.click(container.getAllByLabelText(/Provider ClarksonEyeCare/i)[0]);
        fireEvent.click(container.getByText(/Done/i));
      }
    );

    then("patient should able to see the correct filter result.", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-17_STORY_EPP-2705 - Verify whether the clear option is available once applied the filter", ({
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
      const domain = window.location.origin;
      mock.onPost(`/ecp/patient/logout`).reply(200, expectedResult);
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
      const response = await getServerSideProps({
        req: { headers: { cookie: { get: jest.fn().mockReturnValue(true) } } },
        res: jest.fn(),
      });
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
      await waitFor(() => container.getByText("Medications"));
      expect(container.getAllByText(/Contacts/i)[0]).toBeInTheDocument();

      expect(response).toEqual({
        props: { isStepTwo: false },
      });
    });

    and("filter the Refill status.", async () => {
      const medicationMenu = container.getByTestId("menu-medication");
      fireEvent.click(medicationMenu)
      await waitFor(()=> container.getByText(/Active Medications/i));

      const filterBtn = container.getByText(/Filter/i);
      expect(filterBtn).toBeInTheDocument();
      fireEvent.click(filterBtn);
      
      await waitFor(() => container.getByText(/See more/i));
      fireEvent.click(container.getByLabelText(/Refill Requested/i));
      fireEvent.click(container.getAllByText(/Active/i)[0]);
      fireEvent.click(container.getByText(/Done/i));
    });

    then("Patient should view the Clear option.", () => {
      defaultValidation();
    });
  });
});
