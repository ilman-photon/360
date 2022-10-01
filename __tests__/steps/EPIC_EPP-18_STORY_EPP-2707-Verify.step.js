import {
  act,
  render,
  waitFor,
  fireEvent,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { defineFeature, loadFeature } from "jest-cucumber";
import Cookies from "universal-cookie";
import { Provider } from "react-redux";
import PrescriptionPage from "../../src/pages/patient/prescription";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import store from "../../src/store/store";
import mediaQuery from 'css-mediaquery';

function createMatchMedia(width) {
  return (query) => ({
    matches: mediaQuery.match(query, { width }),
    addListener: () => {},
    removeListener: () => {},
  });
}

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint6/EPP-2707.feature",
  {
    tagFilter: "@included and not @excluded",
  }
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
        date: "2022-09-01T11:18:47.229Z",
      },
      {
        id: "1",
        prescription: "Aspirint 0.1% Ointmanet",
        date: "2022-09-01T11:18:47.229Z",
      },
      {
        id: "2",
        prescription: "Aspirint 0.1% Ointmanet",
        date: "2022-09-01T11:18:47.229Z",
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
  const domain = window.location.origin;
  const mock = new MockAdapter(axios);

  test('EPIC_EPP-18_STORY_EPP-2707- Verify whether the system is sending the requested Refill to the Provider portal/E360+', ({ given, when, and, then }) => {
    given('Patient Launch  the browser and enter the Patient portal URL', () => {});

    when(/^Patient enter valid (.*) and (.*)$/, (arg0, arg1) => {});

    and('clicks  on login button.', () => {
      Cookies.result = { authorized: true };
    });

    and('navigate to the View Prescription page.', async () => {
      Cookies.result = "true";
      mock.onGet(`${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions?patientId=98f9404b-6ea8-4732-b14f-9c1a168d8066`).reply(200, MOCK_PRESCRIPTION);
      window.matchMedia = createMatchMedia('1920px');
      
      act(()=>{
      container = render(
          <Provider store={store}>
              {PrescriptionPage.getLayout(<PrescriptionPage />)}
          </Provider>
          );
      })
      await waitFor(()=> container.getByText(/Filter/i));
      expect(container.getAllByText(/Active Medications/i)[0]).toBeInTheDocument();
    });

    and('patient should see the option to Refill the Prescription.', () => {
      expect(container.getAllByText(/Request Refill/i)[0]).toBeInTheDocument();
    });

    and('request for the refill.', async () => {
      const mockResponse = {
        message: "Your refill request has been sumbitted",
      };
      
      mock.onPost(`${domain}/api/dummy/prescription/requestRefill`).reply(200, mockResponse);
      
      const requestRefill = container.getAllByText(/Request Refill/i)[0];
      expect(requestRefill).toBeInTheDocument();
      
      act(()=>{
        fireEvent.click(requestRefill);
      });
      
      await waitFor(()=> container.getByText(/Cancel Refill Request/i));
      expect(container.getAllByText(/Cancel Refill Request/i)[0]).toBeInTheDocument();
    });

    and('Login as Provider.', () => {
      defaultValidation();
    });

    then('Patient requested refill should received for the Provider/E360+', (arg0) => {
      defaultValidation();
    });
  });

  test('EPIC_EPP-18_STORY_EPP-2707- Verify whether the Patient is able to see his/her requested refill against the Prescription', ({ given, when, and, then }) => {
    given('Patient Launch  the browser and enter the Patient portal URL', () => {});

    when(/^Patient enter valid (.*) and (.*)$/, (arg0, arg1) => {});

    and('clicks  on login button.', () => {
      Cookies.result = { authorized: true };
    });

    and('navigate to the View Prescription page.', async () => {
      Cookies.result = "true";
      mock.onGet(`${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions?patientId=98f9404b-6ea8-4732-b14f-9c1a168d8066`).reply(200, MOCK_PRESCRIPTION);
      window.matchMedia = createMatchMedia('1920px');
      
      act(()=>{
      container = render(
          <Provider store={store}>
              {PrescriptionPage.getLayout(<PrescriptionPage />)}
          </Provider>
          );
      })
      await waitFor(()=> container.getByText(/Filter/i));
      expect(container.getAllByText(/Active Medications/i)[0]).toBeInTheDocument();
    });

    and('patient should see the option to Refill the Prescription.', () => {
      expect(container.getAllByText(/Request Refill/i)[0]).toBeInTheDocument();
    });

    and('request for the refill.', async () => {
      const mockResponse = {
        message: "Your refill request has been sumbitted",
      };
      
      mock.onPost(`${domain}/api/dummy/prescription/requestRefill`).reply(200, mockResponse);
      
      const requestRefill = container.getAllByText(/Request Refill/i)[0];
      expect(requestRefill).toBeInTheDocument();
      
      act(()=>{
        fireEvent.click(requestRefill);
      });
      
      await waitFor(()=> container.getByText(/Cancel Refill Request/i));
    });

    then('Patient should see the requested refill.', () => {
      expect(container.getAllByText(/Cancel Refill Request/i)[0]).toBeInTheDocument();
    });
  });

  test('EPIC_EPP-18_STORY_EPP-2707- Verify whether the Patient is able to see the option to Cancel the requested refill', ({ given, when, and, then }) => {
    given('Patient Launch  the browser and enter the Patient portal URL', () => {});

    when(/^Patient enter valid (.*) and (.*)$/, (arg0, arg1) => {});

    and('clicks  on login button.', () => {
      Cookies.result = { authorized: true };
    });

    and('navigate to the View Prescription page.', async () => {
      Cookies.result = "true";
      mock.onGet(`${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions?patientId=98f9404b-6ea8-4732-b14f-9c1a168d8066`).reply(200, MOCK_PRESCRIPTION);
      window.matchMedia = createMatchMedia('1920px');
      
      act(()=>{
      container = render(
          <Provider store={store}>
              {PrescriptionPage.getLayout(<PrescriptionPage />)}
          </Provider>
          );
      })
      await waitFor(()=> container.getByText(/Filter/i));
      expect(container.getAllByText(/Active Medications/i)[0]).toBeInTheDocument();
    });

    and('patient should see the option to Refill the Prescription.', () => {
      expect(container.getAllByText(/Request Refill/i)[0]).toBeInTheDocument();
    });

    and('request for the refill.', async () => {
      const mockResponse = {
        message: "Your refill request has been sumbitted",
      };
      
      mock.onPost(`${domain}/api/dummy/prescription/requestRefill`).reply(200, mockResponse);
      
      const requestRefill = container.getAllByText(/Request Refill/i)[0];
      expect(requestRefill).toBeInTheDocument();
      
      act(()=>{
        fireEvent.click(requestRefill);
      });
      
      await waitFor(()=> container.getByText(/Cancel Refill Request/i));
    });

    then('Patient should see the Cancel option to cancel the requested refill.', () => {
      expect(container.getAllByText(/Cancel Refill Request/i)[0]).toBeInTheDocument();
    });
  });

  test('EPIC_EPP-18_STORY_EPP-2707- Verify whether the Patient is receiving the mail regarding refill request based on Preferred mode of communication - Email', ({ given, when, and, then }) => {
    given('Patient Launch  the browser and enter the Patient portal URL', () => {});

    when(/^Patient enter valid (.*) and (.*)$/, (arg0, arg1) => {});

    and('clicks  on login button.', () => {});

    and('navigate to the View Prescription page.', async () => {
      Cookies.result = "true";
      mock.onGet(`${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions?patientId=98f9404b-6ea8-4732-b14f-9c1a168d8066`).reply(200, MOCK_PRESCRIPTION);
      window.matchMedia = createMatchMedia('1920px');
      
      act(()=>{
      container = render(
          <Provider store={store}>
              {PrescriptionPage.getLayout(<PrescriptionPage />)}
          </Provider>
          );
      })
      await waitFor(()=> container.getByText(/Filter/i));
      expect(container.getAllByText(/Active Medications/i)[0]).toBeInTheDocument();
    });

    and('patient should see the option to Refill the Prescription.', () => {
      expect(container.getAllByText(/Request Refill/i)[0]).toBeInTheDocument();
    });

    and('request for the refill.', async () => {
      const mockResponse = {
        message: "Your refill request has been sumbitted",
      };
      
      mock.onPost(`${domain}/api/dummy/prescription/requestRefill`).reply(200, mockResponse);
      
      const requestRefill = container.getAllByText(/Request Refill/i)[0];
      expect(requestRefill).toBeInTheDocument();
      
      act(()=>{
        fireEvent.click(requestRefill);
      });
      
      await waitFor(()=> container.getByText(/Cancel Refill Request/i));
    });

    then('patient should receive the Email regarding refill request.', () => {
      expect(container.getAllByText(/Cancel Refill Request/i)[0]).toBeInTheDocument();
    });
  });

  test('EPIC_EPP-18_STORY_EPP-2707- Verify whether the Patient is receiving the Text message regarding refill request based on Preferred mode of communication - Phone number', ({ given, when, and, then }) => {
    given('Patient Launch  the browser and enter the Patient portal URL', () => {});

    when(/^Patient enter valid (.*) and (.*)$/, (arg0, arg1) => {});

    and('clicks  on login button.', () => {});

    and('navigate to the View Prescription page.', async () => {
      Cookies.result = "true";
      mock.onGet(`${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions?patientId=98f9404b-6ea8-4732-b14f-9c1a168d8066`).reply(200, MOCK_PRESCRIPTION);
      window.matchMedia = createMatchMedia('1920px');
      
      act(()=>{
      container = render(
          <Provider store={store}>
              {PrescriptionPage.getLayout(<PrescriptionPage />)}
          </Provider>
          );
      })
      await waitFor(()=> container.getByText(/Filter/i));
      expect(container.getAllByText(/Active Medications/i)[0]).toBeInTheDocument();
    });

    and('patient should see the option to Refill the Prescription.', () => {
      expect(container.getAllByText(/Request Refill/i)[0]).toBeInTheDocument();
    });

    and('request for the refill.', async () => {
      const mockResponse = {
        message: "Your refill request has been sumbitted",
      };
      
      mock.onPost(`${domain}/api/dummy/prescription/requestRefill`).reply(200, mockResponse);
      
      const requestRefill = container.getAllByText(/Request Refill/i)[0];
      expect(requestRefill).toBeInTheDocument();
      
      act(()=>{
        fireEvent.click(requestRefill);
      });
      
      await waitFor(()=> container.getByText(/Cancel Refill Request/i));
    });

    then('patient should receive the Text message regarding refill request.', () => {
      expect(container.getAllByText(/Cancel Refill Request/i)[0]).toBeInTheDocument();
    });
  });

  test('EPIC_EPP-18_STORY_EPP-2707- Verify whether the Email regarding request refill is receiving to the E360+', ({ given, when, and, then }) => {
    given('Patient Launch  the browser and enter the Patient portal URL', () => {});

    when(/^Patient enter valid (.*) and (.*)$/, (arg0, arg1) => {});

    and('clicks  on login button.', () => {});

    and('navigate to the View Prescription page.', async () => {
      Cookies.result = "true";
      mock.onGet(`${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions?patientId=98f9404b-6ea8-4732-b14f-9c1a168d8066`).reply(200, MOCK_PRESCRIPTION);
      window.matchMedia = createMatchMedia('1920px');
      
      act(()=>{
      container = render(
          <Provider store={store}>
              {PrescriptionPage.getLayout(<PrescriptionPage />)}
          </Provider>
          );
      })
      await waitFor(()=> container.getByText(/Filter/i));
      expect(container.getAllByText(/Active Medications/i)[0]).toBeInTheDocument();
    });

    and('patient should see the option to Refill the Prescription.', () => {
      expect(container.getAllByText(/Request Refill/i)[0]).toBeInTheDocument();
    });

    and('request for the refill.', async () => {
      const mockResponse = {
        message: "Your refill request has been sumbitted",
      };
      
      mock.onPost(`${domain}/api/dummy/prescription/requestRefill`).reply(200, mockResponse);
      
      const requestRefill = container.getAllByText(/Request Refill/i)[0];
      expect(requestRefill).toBeInTheDocument();
      
      act(()=>{
        fireEvent.click(requestRefill);
      });
      
      await waitFor(()=> container.getByText(/Cancel Refill Request/i));
      expect(container.getAllByText(/Cancel Refill Request/i)[0]).toBeInTheDocument();
    });

    then("E360+ should receive the Email regarding refill request.", (arg0) => {
      defaultValidation();
    });
  });
});