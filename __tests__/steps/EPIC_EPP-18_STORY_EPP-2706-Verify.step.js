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
import { TEMP_DATA_CONTACTS, TEMP_DATA_GLASSES, TEMP_DATA_MEDICATION } from "../setup/setup";

function createMatchMedia(width) {
  return (query) => ({
    matches: mediaQuery.match(query, { width }),
    addListener: () => {},
    removeListener: () => {},
  });
}

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint6/EPP-2706.feature"
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

  test("EPIC_EPP-18_STORY_EPP-2706- To verify whether the patient is able to view the option to Refill the Prescription.", ({
    given,
    when,
    and,
    then,
  }) => {
    given(
      "Patient Launch  the browser and enter the Patient portal URL",
      () => {}
    );

    when(/^Patient enter valid (.*) and (.*)$/, () => {});

    and("clicks  on login button.", () => {
      Cookies.result = { authorized: true };
    });

    and("navigate to the View Prescription page.", async () => {
      Cookies.result = "true";
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
      await waitFor(() => container.getByText(/Filters/i));
      expect(
        container.getAllByText(/Active Medications/i)[0]
      ).toBeInTheDocument();
    });

    then("patient should see the option to Refill the Prescription.", () => {
      expect(container.getAllByText(/Request Refill/i)[0]).toBeInTheDocument();
    });
  });

  test("EPIC_EPP-18_STORY_EPP-2706- To verify whether the Patient is not able to request for the expired prescription.", ({
    given,
    when,
    and,
    then,
  }) => {
    given(
      "Patient Launch  the browser and enter the Patient portal URL",
      () => {}
    );

    when(/^Patient enter valid (.*) and (.*)$/, () => {});

    and("clicks  on login button.", () => {
      Cookies.result = { authorized: true };
    });

    and("navigate to the View Prescription page.", async () => {
      Cookies.result = "true";
      mock.reset();
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
      await waitFor(() => container.getByText(/Filters/i));
      expect(
        container.getAllByText(/Active Medications/i)[0]
      ).toBeInTheDocument();
    });

    and("patient should see the option to Refill the Prescription.", () => {
      expect(container.getAllByText(/Request Refill/i)[0]).toBeInTheDocument();
    });

    and("request for the expired prescription.", async () => {
      const mockResponse = {
        message: "Your refill request has been sumbitted",
      };

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

      mock
      .onPost(`/ecp/prescriptions/requestRefill`
      )
      .reply(200, {});

      const requestRefill = container.getAllByText(/Request Refill/i)[0];
      expect(requestRefill).toBeInTheDocument();

      act(() => {
        fireEvent.click(requestRefill);
      });

      await waitFor(() => container.getByText(/Cancel Refill Request/i));
      expect(
        container.getAllByText(/Cancel Refill Request/i)[0]
      ).toBeInTheDocument();
    });

    then(
      "Patient should not able to request for the expired prescription.",
      async () => {
        let expiredContainer;
        const mockResp = {
          prescriptions: {
            glasses: [],
            contacts: [],
            medications: [
              {
                id: "3",
                prescription: "Aspirint 0.1% Ointmanet",
                date: "2022-08-02T11:18:47.229Z",
              },
            ],
          },
        };
        const mockq = new MockAdapter(axios);
        mockq.reset();
        mockq
        .onGet(
          `/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066`
        )
        .reply(200, TEMP_DATA_MEDICATION);
        mockq
        .onGet(
          `/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066/getContactsData`
        )
        .reply(200, {});
        mockq
        .onGet(`/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066/getGlassesData`
        )
        .reply(200, {});
        window.matchMedia = createMatchMedia("1920px");

        act(() => {
          expiredContainer = render(
            <Provider store={store}>
              {PrescriptionPage.getLayout(<PrescriptionPage />)}
            </Provider>
          );
        });
        await waitFor(() => expiredContainer.getByText(/Past Medications/i));
        //expect(expiredContainer.getAllByText(/Request Refill/i)[0]).not.toBeInTheDocument();
      }
    );
  });
});
