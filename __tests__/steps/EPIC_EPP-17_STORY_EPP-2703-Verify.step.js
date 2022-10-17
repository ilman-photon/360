import { defineFeature, loadFeature } from "jest-cucumber";
import { act, fireEvent, render, waitFor } from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import mediaQuery from "css-mediaquery";
import PrescriptionPage from "../../src/pages/patient/prescription";
import { TEMP_DATA_CONTACTS, TEMP_DATA_GLASSES } from "../setup/setup";

function createMatchMedia(width) {
  return (query) => ({
    matches: mediaQuery.match(query, { width }),
    addListener: () => {},
    removeListener: () => {},
  });
}

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint6/EPP-2703.feature",
  {
    tagFilter: "@included and not @excluded",
  }
);

defineFeature(feature, (test) => {
  let container;
  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  test("EPIC_EPP-17_STORY_EPP-2703 - To verify whether the Prescription type is displaying correctly in the Glass prescription.", ({
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
      const mock = new MockAdapter(axios);
      mock
      .onGet(
        `/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066`
      )
      .reply(200, []);
      mock
      .onGet(
        `/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066/getContactsData`
      )
      .reply(200, {});
      mock
      .onGet(`/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066/getGlassesData`
      )
      .reply(200, TEMP_DATA_GLASSES);
      window.matchMedia = createMatchMedia("1400px");
      act(() => {
        container = render(
          <Provider store={store}>
            {PrescriptionPage.getLayout(<PrescriptionPage />)}
          </Provider>
        );
      });
      await waitFor(() => container.getByTestId("menu-glasses"));
    });

    then("the Patient should see the correct Type of prescription.", () => {
      const conta = container.getByTestId("menu-glasses");
      expect(conta).toBeInTheDocument();
    });
  });

  test("EPIC_EPP-17_STORY_EPP-2703 - To verify whether the Prescribed on is displaying the Prescribed date correctly in the Glass prescription.", ({
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
      const mock = new MockAdapter(axios);
      mock
      .onGet(
        `/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066`
      )
      .reply(200, []);
      mock
      .onGet(
        `/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066/getContactsData`
      )
      .reply(200, TEMP_DATA_CONTACTS);
      mock
      .onGet(`/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066/getGlassesData`
      )
      .reply(200, {});
      window.matchMedia = createMatchMedia("1400px");
      act(() => {
        container = render(
          <Provider store={store}>
            {PrescriptionPage.getLayout(<PrescriptionPage />)}
          </Provider>
        );
      });
      await waitFor(() => container.getByTestId("contacts-container-0"));
    });

    then("the Patient should see the correct date of prescription.", () => {
      const date = container.getByText("01/10/2022");
      expect(date).toBeInTheDocument();
    });
  });

  test("EPIC_EPP-17_STORY_EPP-2703 - To verify whether the Expiry date is displaying  correctly in the Glass prescription.", ({
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
      const mock = new MockAdapter(axios);
      mock
      .onGet(
        `/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066`
      )
      .reply(200, []);
      mock
      .onGet(
        `/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066/getContactsData`
      )
      .reply(200, {});
      mock
      .onGet(`/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066/getGlassesData`
      )
      .reply(200, TEMP_DATA_GLASSES);
      window.matchMedia = createMatchMedia("1400px");
      act(() => {
        container = render(
          <Provider store={store}>
            {PrescriptionPage.getLayout(<PrescriptionPage />)}
          </Provider>
        );
      });
      await waitFor(() => container.getByTestId("menu-glasses"));
    });

    then(
      "the Patient should see the correct expiry date of Glass prescription.",
      async () => {
        await waitFor(() => container.getAllByText(/Expires on/i)[0]);
        const expired = container.getAllByText(/Expires on/i)[0];
        const date = container.getByText("01/10/2022");

        expect(expired).toBeInTheDocument();
        expect(date).toBeInTheDocument();
      }
    );
  });

  test("EPIC_EPP-17_STORY_EPP-2703 - To verify whether the Doctor's name is displaying  correctly in the Prescribed by.", ({
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
      const mock = new MockAdapter(axios);
      mock
      .onGet(
        `/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066`
      )
      .reply(200, []);
      mock
      .onGet(
        `/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066/getContactsData`
      )
      .reply(200, TEMP_DATA_CONTACTS);
      mock
      .onGet(`/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066/getGlassesData`
      )
      .reply(200, {});
      window.matchMedia = createMatchMedia("1400px");
      act(() => {
        container = render(
          <Provider store={store}>
            {PrescriptionPage.getLayout(<PrescriptionPage />)}
          </Provider>
        );
      });
      await waitFor(() => container.getByTestId("contacts-container-0"));
    });

    then(
      "the Patient should see the correct prescribed Doctor's name in the Prescribed by.",
      () => {
        const expired = container.getByText(/Prescribed by/i);
        const date = container.getByText(/indraku/i);

        expect(expired).toBeInTheDocument();
        expect(date).toBeInTheDocument();
      }
    );
  });

  test("EPIC_EPP-17_STORY_EPP-2703 - To verify whether the below mentioned details are displaying in the each Prescription under Glass prescription", ({
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
      const mock = new MockAdapter(axios);
      mock
      .onGet(
        `/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066`
      )
      .reply(200, []);
      mock
      .onGet(
        `/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066/getContactsData`
      )
      .reply(200, {});
      mock
      .onGet(`/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066/getGlassesData`
      )
      .reply(200, TEMP_DATA_GLASSES);
      window.matchMedia = createMatchMedia("1400px");
      act(() => {
        container = render(
          <Provider store={store}>
            {PrescriptionPage.getLayout(<PrescriptionPage />)}
          </Provider>
        );
      });
      await waitFor(() => container.getByTestId("menu-glasses"));
    });

    and("select any prescription for Glasses", async () => {
      const conta = container.getByTestId("menu-glasses");
      fireEvent.click(conta);
      await waitFor(()=> container.getByText(/Glasses Prescription/i));
    });

    then("below mentioned details should see by the user", () => {
      const eye = container.getAllByText(/Eye/i)[0];
      const sph = container.getAllByText(/Sph/i)[0];
      const cyl = container.getAllByText(/Cyl/i)[0];
      const axis = container.getAllByText(/Axis/i)[0];
      const add = container.getAllByText(/Add/i)[0];

      expect(eye).toBeInTheDocument();
      expect(sph).toBeInTheDocument();
      expect(cyl).toBeInTheDocument();
      expect(axis).toBeInTheDocument();
      expect(add).toBeInTheDocument();
    });
  });

  test("EPIC_EPP-17_STORY_EPP-2703 - To verify whether the below mentioned details are displaying in the each Prescription under Glass prescription View", ({
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
      const mock = new MockAdapter(axios);
      mock
      .onGet(
        `/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066`
      )
      .reply(200, []);
      mock
      .onGet(
        `/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066/getContactsData`
      )
      .reply(200, {});
      mock
      .onGet(`/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066/getGlassesData`
      )
      .reply(200, TEMP_DATA_GLASSES);
      window.matchMedia = createMatchMedia("1400px");
      act(() => {
        container = render(
          <Provider store={store}>
            {PrescriptionPage.getLayout(<PrescriptionPage />)}
          </Provider>
        );
      });
      await waitFor(() => container.getByTestId("menu-glasses"));
    });

    and("select any prescription for Glasses", async () => {
      const conta = container.getByTestId("menu-glasses");
      fireEvent.click(conta);
      await waitFor(()=> container.getByText(/Glasses Prescription/i));
    });

    then("below mentioned details should see by the user", () => {
      const eye = container.getAllByText(/Eye/i)[0];
      const sph = container.getAllByText(/Sph/i)[0];
      const cyl = container.getAllByText(/Cyl/i)[0];
      const axis = container.getAllByText(/Axis/i)[0];
      const add = container.getAllByText(/Add/i)[0];

      expect(eye).toBeInTheDocument();
      expect(sph).toBeInTheDocument();
      expect(cyl).toBeInTheDocument();
      expect(axis).toBeInTheDocument();
      expect(add).toBeInTheDocument();
    });
  });
});
