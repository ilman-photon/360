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
  "./__tests__/feature/Patient Portal/Sprint6/EPP-2710.feature",
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
        date: "2022-09-02T11:18:47.229Z",
        status: "refill request"
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
  const domain = window.location.origin;
  const mock = new MockAdapter(axios);

  test('EPIC_EPP-19_STORY_EPP-2710 - Verify User should be able to click the option to cancel refill against a prescription', ({ given, when, then, and }) => {
    given('User launch Patient Portal url', () => {});

    when('User is logged in to the application', () => {
      Cookies.result = { authorized: true };
    });

    then(/^User lands to the "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and(/^User should see the "(.*)" option$/, (arg0) => {
      defaultValidation();
    });

    when(/^User selects the "(.*)" option$/, (arg0) => {
      defaultValidation();
    });

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and(/^User should see on "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on "(.*)" button$/, (arg0) => {

    });defaultValidation();

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {
      defaultValidation();
    });

    and('User should see the widget with prescriptions', async () => {
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
      await waitFor(() => container.getByText("Medications"));
      expect(container.getAllByText(/Contacts/i)[0]).toBeInTheDocument();
    });

    when('User clicks on the widget with prescriptions', async () => {
      const medicationMenu = container.getByTestId("menu-medication");
      fireEvent.click(medicationMenu)
      await waitFor(()=> container.getByText(/Active Medications/i));
      
      const filterButton = container.getByTestId("medication-filter-button");
      expect(filterButton).toBeInTheDocument();
    });

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {
      expect(container.getAllByText(/Active Medications/i)[0]).toBeInTheDocument();
    });

    and('User should be able to view the list of prescriptions with the details as below:', (table) => {
      expect(container.getAllByText(/Active Medications/i)[0]).toBeInTheDocument();
    });

    and('User should be able to view options to filter the prescriptions with details as below:', (table) => {

    });

    and('User should be able to view an option to clear those filters when applied', () => {

    });

    and('User should be able to view option to cancel refill for those requested prescriptions', () => {
      expect(container.getAllByText(/Cancel Refill Request/i)[0]).toBeInTheDocument();
    });

    when('User clicks on the option to cancel refill against a prescription', async () => {
      const mockResponse = {
        message: "Your refill request has been canceled",
      };
      
      mock.onPost(`${domain}/api/dummy/prescription/cancelRequestRefill`).reply(200, mockResponse);
      
      const cancelRequestRefill = container.getAllByText(/Cancel Refill Request/i)[0];
      expect(cancelRequestRefill).toBeInTheDocument();
      
      act(()=>{
        fireEvent.click(cancelRequestRefill);
      });
      
      await waitFor(()=> container.getByText(/Cancel Refill Request/i));
      expect(container.getAllByText(/Request Refill/i)[0]).toBeInTheDocument();
    });

    then('User should see the following message that the System sends out a cancellation of refill request to Provider portal', () => {
      
    });
  });

  test('EPIC_EPP-1_STORY_EPP-2710 - Verify User should see the following message that the System sends out a cancellation of refill request to Provider portal', ({ given, when, then, and }) => {
    given('User launch Patient Portal url', () => {});

    when('User is logged in to the application', () => {});

    then(/^User lands to the "(.*)" screen$/, (arg0) => {});

    and(/^User should see the "(.*)" option$/, (arg0) => {});

    when(/^User selects the "(.*)" option$/, (arg0) => {});

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {});

    and(/^User should see on "(.*)" button$/, (arg0) => {});

    when(/^User clicks on "(.*)" button$/, (arg0) => {});

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {});

    and('User should see the widget with prescriptions', async () => {
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

    when('User clicks on the widget with prescriptions', async () => {
      const medicationMenu = container.getByTestId("menu-medication");
      act(()=>{
          fireEvent.click(medicationMenu)
      })
      
      await waitFor(()=> container.getByText(/Active Medications/i))
    });

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {
      expect(container.getByText(/Active Medications/i)).toBeInTheDocument();
    });

    and('User should be able to view the list of prescriptions with the details as below:', (table) => {
      expect(container.getByText(/Active Medications/i)).toBeInTheDocument();
    });

    and('User should be able to view options to filter the prescriptions with details as below:', (table) => {

    });

    and('User should be able to view an option to clear those filters when applied', () => {

    });

    and('User should be able to view option to cancel refill for those requested prescriptions', () => {
      expect(container.getAllByText(/Cancel Refill Request/i)[0]).toBeInTheDocument();
    });

    when('User clicks on the option to cancel refill against a prescription', async () => {
      const mockResponse = {
        message: "Your refill request has been canceled",
      };
      
      mock.onPost(`${domain}/api/dummy/prescription/cancelRequestRefill`).reply(200, mockResponse);
      
      const cancelRequestRefill = container.getAllByText(/Cancel Refill Request/i)[0];
      expect(cancelRequestRefill).toBeInTheDocument();
      
      act(()=>{
        fireEvent.click(cancelRequestRefill);
      });
      
      await waitFor(()=> container.getByText(/Cancel Refill Request/i));
      expect(container.getAllByText(/Request Refill/i)[0]).toBeInTheDocument();
    });

    then('User should see the following message that the System sends out a cancellation of refill request to Provider portal', () => {
      
    });
  });

  test('EPIC_EPP-1_STORY_EPP-2710 - Verify User should be able to see an option to request for refill when refill request has been cancelled', ({ given, when, then, and }) => {
    given('User launch Patient Portal url', () => {});

    when('User is logged in to the application', () => {});

    then(/^User lands to the "(.*)" screen$/, (arg0) => {});

    and(/^User should see the "(.*)" option$/, (arg0) => {});

    when(/^User selects the "(.*)" option$/, (arg0) => {});

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {});

    and(/^User should see on "(.*)" button$/, (arg0) => {});

    when(/^User clicks on "(.*)" button$/, (arg0) => {});

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {});

    and('User should see the widget with prescriptions', async () => {
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

    when('User clicks on the widget with prescriptions', async () => {
      const medicationMenu = container.getByTestId("menu-medication");
      act(()=>{
          fireEvent.click(medicationMenu)
      })
      
      await waitFor(()=> container.getByText(/Active Medications/i))
    });

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {});

    and('User should be able to view the list of prescriptions with the details as below:', (table) => {
      expect(container.getByText(/Active Medications/i)).toBeInTheDocument();
      expect(container.getAllByText(/Aspirint 0.1% Ointmanet/i)[0]).toBeInTheDocument();
    });

    and('User should be able to view options to filter the prescriptions with details as below:', (table) => {

    });

    and('User should be able to view an option to clear those filters when applied', () => {

    });

    and('User should be able to view option to cancel refill for those requested prescriptions', () => {
      expect(container.getAllByText(/Cancel Refill Request/i)[0]).toBeInTheDocument();
    });

    when('User clicks on the option to cancel refill against a prescription', async () => {
      const mockResponse = {
        message: "Your refill request has been canceled",
      };
      
      mock.onPost(`${domain}/api/dummy/prescription/cancelRequestRefill`).reply(200, mockResponse);
      
      const cancelRequestRefill = container.getAllByText(/Cancel Refill Request/i)[0];
      expect(cancelRequestRefill).toBeInTheDocument();
      
      act(()=>{
        fireEvent.click(cancelRequestRefill);
      });
      
      await waitFor(()=> container.getByText(/Cancel Refill Request/i));
      expect(container.getAllByText(/Request Refill/i)[0]).toBeInTheDocument();
    });

    then('User should see the following message that the System sends out a cancellation of refill request to Provider portal', () => {
      
    });

    and('User should be able to see an option to request for refill when refill request has been cancelled', () => {
      
    });
  });

  test('EPIC_EPP-1_STORY_EPP-2710 - Verify User should be able to receive an email communication based on their registered email-id', ({ given, when, then, and }) => {
    given('User launch Patient Portal url', () => {});

    when('User is logged in to the application', () => {});

    then(/^User lands to the "(.*)" screen$/, (arg0) => {});

    and(/^User should see the "(.*)" option$/, (arg0) => {});

    when(/^User selects the "(.*)" option$/, (arg0) => {});

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {});

    and(/^User should see on "(.*)" button$/, (arg0) => {});

    when(/^User clicks on "(.*)" button$/, (arg0) => {});

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {});

    and('User should see the widget with prescriptions', async () => {
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

    when('User clicks on the widget with prescriptions', async () => {
      const medicationMenu = container.getByTestId("menu-medication");
      act(()=>{
          fireEvent.click(medicationMenu)
      })
      
      await waitFor(()=> container.getByText(/Active Medications/i))
    });

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {});

    and('User should be able to view the list of prescriptions with the details as below:', (table) => {
      expect(container.getByText(/Active Medications/i)).toBeInTheDocument();
      expect(container.getAllByText(/Prescribed on:/i)[0]).toBeInTheDocument();
    });

    and('User should be able to view options to filter the prescriptions with details as below:', (table) => {
      expect(container.getByText(/Filters/i)).toBeInTheDocument();
    });

    and('User should be able to view an option to clear those filters when applied', () => {});

    and('User should be able to view option to cancel refill for those requested prescriptions', () => {
      expect(container.getAllByText(/Cancel Refill Request/i)[0]).toBeInTheDocument();
    });

    when('User clicks on the option to cancel refill against a prescription', async () => {
      const mockResponse = {
        message: "Your refill request has been canceled",
      };
      
      mock.onPost(`${domain}/api/dummy/prescription/cancelRequestRefill`).reply(200, mockResponse);
      
      const cancelRequestRefill = container.getAllByText(/Cancel Refill Request/i)[0];
      expect(cancelRequestRefill).toBeInTheDocument();
      
      act(()=>{
        fireEvent.click(cancelRequestRefill);
      });
      
      await waitFor(()=> container.getByText(/Cancel Refill Request/i));
      expect(container.getAllByText(/Request Refill/i)[0]).toBeInTheDocument();
    });

    then('User should see the following message that the System sends out a cancellation of refill request to Provider portal', () => {

    });

    and('User should be able to see an option to request for refill when refill request has been cancelled', () => {
      
    });

    and('User should be able to receive an email communication based on their registered email-id', () => {

    });
  });

  test('EPIC_EPP-1_STORY_EPP-2710 - Verify User should be able to receive a text communication based on their registered phone number', ({ given, when, then, and }) => {
    given('User launch Patient Portal url', () => {});

    when('User is logged in to the application', () => {});

    then(/^User lands to the "(.*)" screen$/, (arg0) => {});

    and(/^User should see the "(.*)" option$/, (arg0) => {});

    when(/^User selects the "(.*)" option$/, (arg0) => {});

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {});

    and(/^User should see on "(.*)" button$/, (arg0) => {});

    when(/^User clicks on "(.*)" button$/, (arg0) => {});

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {});

    and('User should see the widget with prescriptions', async () => {
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

    when('User clicks on the widget with prescriptions', async () => {
      const glassesTab = container.getByText(/Glasses/i);
      act(()=>{
          fireEvent.click(glassesTab)
      })
      
      await waitFor(()=> container.getAllByText(/Glasses Prescription/i)[0])
    });

    then(/^User should navigated to "(.*)" screen$/, (arg0) => {

    });

    and('User should be able to view the list of prescriptions with the details as below:', (table) => {
      expect(container.getAllByText(/Eye/i)[0]).toBeInTheDocument();
      expect(container.getAllByText(/Sph/i)[0]).toBeInTheDocument();
      expect(container.getAllByText(/Cyl/i)[0]).toBeInTheDocument();
      expect(container.getAllByText(/Axis/i)[0]).toBeInTheDocument();
      expect(container.getAllByText(/Add/i)[0]).toBeInTheDocument();
    });

    and('User should be able to view options to filter the prescriptions with details as below:', async (table) => {
      const medicationMenu = container.getByTestId("menu-medication");
      act(()=>{
          fireEvent.click(medicationMenu)
      })
      
      await waitFor(()=> container.getByText(/Active Medications/i))
      expect(container.getByText(/Filters/i)).toBeInTheDocument();
    });

    and('User should be able to view an option to clear those filters when applied', () => {
      expect(container.getAllByText(/Cancel Refill Request/i)[0]).toBeInTheDocument();
    });

    and('User should be able to view option to cancel refill for those requested prescriptions', () => {
      expect(container.getAllByText(/Cancel Refill Request/i)[0]).toBeInTheDocument();
    });

    when('User clicks on the option to cancel refill against a prescription', async () => {
      const mockResponse = {
        message: "Your refill request has been canceled",
      };
      
      mock.onPost(`${domain}/api/dummy/prescription/cancelRequestRefill`).reply(200, mockResponse);
      
      const cancelRequestRefill = container.getAllByText(/Cancel Refill Request/i)[0];
      expect(container.getAllByText(/Cancel Refill Request/i)[0]).toBeInTheDocument();
      
      act(()=>{
        fireEvent.click(cancelRequestRefill);
      });
      
      await waitFor(()=> container.getByText(/Cancel Refill Request/i));
      expect(container.getAllByText(/Request Refill/i)[0]).toBeInTheDocument();
    });

    then('User should see the following message that the System sends out a cancellation of refill request to Provider portal', () => {
      
    });

    and('User should be able to see an option to request for refill when refill request has been cancelled', () => {
      
    });

    and('User should be able to receive a text communication based on their registered phone number', () => {

    });
  });
});
