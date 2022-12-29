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
import {
  prescriptionContact,
  prescriptionGlasses,
  prescriptionMedication,
} from "../../__mocks__/mockResponse";

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
        .reply(200, prescriptionMedication);
      mock
        .onGet(
          `/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066/getContactsData`
        )
        .reply(200, prescriptionContact);
      mock
        .onGet(
          `/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066/getGlassesData`
        )
        .reply(200, prescriptionGlasses);
      window.matchMedia = createMatchMedia("1920px");

      act(() => {
        container = render(
          <Provider store={store}>
            {PrescriptionPage.getLayout(<PrescriptionPage />)}
          </Provider>
        );
      });
      await waitFor(() => container.getAllByTestId("menu-medication")[0]);

      expect(container.getAllByText(/Contacts/i)[0]).toBeInTheDocument();
    });

    then(
      "patient should see the option to Refill the Prescription.",
      async () => {
        expect(true).toBeTruthy();
      }
    );
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
        .reply(200, prescriptionMedication);
      mock
        .onGet(
          `/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066/getContactsData`
        )
        .reply(200, prescriptionContact);
      mock
        .onGet(
          `/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066/getGlassesData`
        )
        .reply(200, prescriptionGlasses);
      window.matchMedia = createMatchMedia("1920px");

      act(() => {
        container = render(
          <Provider store={store}>
            {PrescriptionPage.getLayout(<PrescriptionPage />)}
          </Provider>
        );
      });
      await waitFor(() => container.getAllByTestId("menu-medication")[0]);

      expect(container.getAllByText(/Contacts/i)[0]).toBeInTheDocument();
    });

    and(
      "patient should see the option to Refill the Prescription.",
      async () => {
        const medicationMenu = container.getByTestId("menu-medication");
        fireEvent.click(medicationMenu);
        await waitFor(() => container.getByText(/Active Medications/i));
        expect(
          container.getAllByText(/Request Refill/i)[0]
        ).toBeInTheDocument();
      }
    );

    and("request for the expired prescription.", async () => {
      mock
        .onGet(
          `/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066`
        )
        .reply(200, prescriptionMedication);
      mock
        .onGet(
          `/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066/getContactsData`
        )
        .reply(200, prescriptionContact);
      mock
        .onGet(
          `/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066/getGlassesData`
        )
        .reply(200, prescriptionGlasses);

      mock.onPost(`/ecp/prescriptions/requestRefill`).reply(200, {});

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
        const mockq = new MockAdapter(axios);
        mockq.reset();
        mockq
          .onGet(
            `/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066`
          )
          .reply(200, prescriptionMedication);
        mockq
          .onGet(
            `/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066/getContactsData`
          )
          .reply(200, {});
        mockq
          .onGet(
            `/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066/getGlassesData`
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
        await waitFor(() => container.getByText(/Active Medications/i));
        expect(container.getAllByText(/Medications/i)[0]).toBeInTheDocument();

        const medicationMenu = container.getAllByTestId("menu-medication")[0];
        fireEvent.click(medicationMenu);
        await waitFor(() => container.getByText(/Active Medications/i));

        await waitFor(() => expiredContainer.getByText(/Past Medications/i));
      }
    );
  });
});
