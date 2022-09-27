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
import mediaQuery from 'css-mediaquery';

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
      if (param === "username") return "user1@photon.com"

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
    ],
    contacts: [
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
        id:"0",
        prescription: "Aspirint 0.1% Ointmanet",
        date: "2022-09-01T11:18:47.229Z",
      },
      {
        id:"0",
        prescription: "Aspirint 0.1% Ointmanet",
        date: "2022-09-01T11:18:47.229Z",
      },
    ],
  },
};

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint6/EPP-2704.feature"
);

defineFeature(feature, (test) => {
  let container;
  const mock = new MockAdapter(axios);

  test('EPIC_EPP-17_STORY_EPP-2704 - To verify whether the patient is able to view the below mentioned filters in the Prescription page', ({ given, when, and, then }) => {
    given('Patient Launch  the browser and enter the Patient portal URL', () => {
      defaultValidation();
    });

    when(/^Patient enter valid (.*) and (.*)$/, (arg0, arg1) => {
      defaultValidation();
    });

    and('clicks  on login button.', () => {
      defaultValidation();
    });

    and('navigate to the View Prescription page.', async() => {
      Cookies.result = "true";
      const expectedResult = {
      ResponseCode: 2005,
      ResponseType: "success",
      };
      const domain = window.location.origin;
      mock.onPost(`/ecp/patient/logout`).reply(200, expectedResult);
      mock.onGet(`${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions`).reply(200, MOCK_PRESCRIPTION);
      window.matchMedia = createMatchMedia('1920px');
      const response = await getServerSideProps({
          req: { headers: { cookie: { get: jest.fn().mockReturnValue(true) } } },
          res: jest.fn(),
      });
      const mockGeolocation = {
      getCurrentPosition: jest.fn(),
      watchPosition: jest.fn()
      };
      global.navigator.geolocation = mockGeolocation;
      Cookies.result = false;
      act(()=>{
      container = render(
          <Provider store={store}>
              {PrescriptionPage.getLayout(<PrescriptionPage />)}
          </Provider>
          );
      })
      await waitFor(()=> container.getByText(/Filter/i))
      expect(response).toEqual({
        props: { isStepTwo: false },
      });
    });

    then('the Patient should see the filters for the below mentioned details', async(table) => {
      const filterBtn = container.getByText(/Filter/i);
      const medicationMenu = container.getByTestId("menu-medication")
      expect(filterBtn).toBeInTheDocument();
      act(()=>{
          fireEvent.click(medicationMenu)
      })
      
      await waitFor(()=> container.getByText(/Active Medications/i))
      fireEvent.click(filterBtn);    
      await waitFor(()=> container.getByText(/All/i))
      fireEvent.click(container.getByLabelText(/All/i));    
      fireEvent.click(container.getByText(/Reset/i));    
      fireEvent.click(container.getByLabelText(/All/i));    
      fireEvent.click(container.getByText(/Done/i));
    });
});

});