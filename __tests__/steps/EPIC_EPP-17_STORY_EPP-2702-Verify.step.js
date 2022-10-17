import { defineFeature, loadFeature } from "jest-cucumber";
import { act, fireEvent, render, waitFor } from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import Cookies from "universal-cookie";
import mediaQuery from "css-mediaquery";
import HomePage from "../../src/pages/patient";
import PrescriptionPage from "../../src/pages/patient/prescription";

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
        id: "0",
        prescription: "Aspirint 0.1% Ointmanet",
        date: "2022-09-02T11:18:47.229Z",
        status: "refill request",
      },
    ],
  },
};

function createMatchMedia(width) {
  return (query) => ({
    matches: mediaQuery.match(query, { width }),
    addListener: () => {},
    removeListener: () => {},
  });
}

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint6/EPP-2702.feature",
  {
    tagFilter: "@included and not @excluded",
  }
);

defineFeature(feature, (test) => {
  let container;
  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  test("EPIC_EPP-17_STORY_EPP-2702 - To verify whether the patient is able to see the list of Prescriptions in the Prescription page", ({
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
      const domain = window.location.origin;
      mock
        .onGet(
          `${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions?patientId=98f9404b-6ea8-4732-b14f-9c1a168d8066`
        )
        .reply(200, MOCK_PRESCRIPTION);
      window.matchMedia = createMatchMedia("1400px");
      act(() => {
        container = render(
          <Provider store={store}>
            {PrescriptionPage.getLayout(<PrescriptionPage />)}
          </Provider>
        );
      });
      await waitFor(() => container.getByText("Medications"));
      expect(container.getAllByText(/Contacts/i)[0]).toBeInTheDocument();
    });

    then("patient should view the list of Prescriptions.", () => {
      const conta = container.getByTestId("menu-glasses");
      expect(conta).toBeInTheDocument();
    });
  });

  test("EPIC_EPP-17_STORY_EPP-2702 - To verify whether the patient is able to view the option to Refill the Prescription.", ({
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
      const MOCK_DATA_MEDICATION = {
        prescriptions: {
          glasses: [],
          contacts: [],
          medications: [
            {
              id: "0",
              prescription: "Aspirint 0.1% Ointmanet",
              date: "2022-09-01T11:18:47.229Z",
              status: "",
            },
          ],
        },
      };

      const mock = new MockAdapter(axios);
      const domain = window.location.origin;
      mock.reset();
      mock
        .onGet(
          `${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions?patientId=98f9404b-6ea8-4732-b14f-9c1a168d8066`
        )
        .reply(200, MOCK_DATA_MEDICATION);
      window.matchMedia = createMatchMedia("700px");
      act(() => {
        container = render(
          <Provider store={store}>
            {PrescriptionPage.getLayout(<PrescriptionPage />)}
          </Provider>
        );
      });
      await waitFor(() => container.getByTestId("medication-active-container-0"));
    });

    then("patient should see the option to Refill the Prescription.", () => {
      const button = container.getAllByText(/Refill/i)[0];
      expect(button).toBeInTheDocument();
    });
  });

  test("EPIC_EPP-17_STORY_EPP-2702 - To verify whether the patient is able to view the Cancel option for cancelling those requested Prescription.", ({
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
      const MOCK_DATA_MEDICATION = {
        prescriptions: {
          glasses: [],
          contacts: [],
          medications: [
            {
              id: "0",
              prescription: "Aspirint 0.1% Ointmanet",
              date: "2022-09-01T11:18:47.229Z",
              status: "refill request",
            },
          ],
        },
      };

      const mock = new MockAdapter(axios);
      const domain = window.location.origin;
      mock.reset();
      mock
        .onGet(
          `${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions?patientId=98f9404b-6ea8-4732-b14f-9c1a168d8066`
        )
        .reply(200, MOCK_DATA_MEDICATION);
      window.matchMedia = createMatchMedia("1300px");
      act(() => {
        container = render(
          <Provider store={store}>
            {PrescriptionPage.getLayout(<PrescriptionPage />)}
          </Provider>
        );
      });
      await waitFor(() => container.getByTestId("medication-active-container-0"));
  });

    then(
      "patient should see the option to Cancel the requested Prescription.",
      () => {
        const button = container.getAllByText(/Cancel Refill/i)[0];
        expect(button).toBeInTheDocument();
      }
    );
  });

  test("EPIC_EPP-17_STORY_EPP-2702 - To verify whether the patient is able to view the Download option for refilled Prescription.", ({
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
      const MOCK_DATA_MEDICATION = {
        prescriptions: {
          glasses: [],
          contacts: [],
          medications: [
            {
              id: "0",
              prescription: "Aspirint 0.1% Ointmanet",
              date: "2022-09-01T11:18:47.229Z",
              status: "refill request",
            },
          ],
        },
      };

      const mock = new MockAdapter(axios);
      const domain = window.location.origin;
      mock.reset();
      mock
        .onGet(
          `${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions?patientId=98f9404b-6ea8-4732-b14f-9c1a168d8066`
        )
        .reply(200, MOCK_DATA_MEDICATION);
      window.matchMedia = createMatchMedia("1940px");
      act(() => {
        container = render(
          <Provider store={store}>
            {PrescriptionPage.getLayout(<PrescriptionPage />)}
          </Provider>
        );
      });
      await waitFor(() => container.getByTestId("medication-active-container-0"));
  });

    then(
      "patient should see the option to download  the refilled Prescription.",
      () => {
        const button = container.getByTestId("download-icon");
        expect(button).toBeInTheDocument();
      }
    );
  });

  test("EPIC_EPP-17_STORY_EPP-2702 - To verify whether the Patient is able to view the verbiage There are no prescriptions when there is no prescription for the Patient.", ({
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

    when(/^Patient enter valid new (.*) and new (.*)$/, (arg0, arg1) => {
      defaultValidation();
    });

    and("clicks  on login button.", () => {
      defaultValidation();
    });

    and("navigate to the View Prescription page.", async () => {
      const MOCK_DATA_MEDICATION = {
        prescriptions: {
          glasses: [],
          contacts: [],
          medications: [],
        },
      };

      const mock = new MockAdapter(axios);
      const domain = window.location.origin;
      mock.reset();
      mock
        .onGet(
          `${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions?patientId=98f9404b-6ea8-4732-b14f-9c1a168d8066`
        )
        .reply(200, MOCK_DATA_MEDICATION);
      window.matchMedia = createMatchMedia("1940px");
      act(() => {
        container = render(
          <Provider store={store}>
            {PrescriptionPage.getLayout(<PrescriptionPage />)}
          </Provider>
        );
      });
      await waitFor(() => container.getAllByText(/Active Medications/i))[0];
    });

    then("patient should see the verbiage There are no prescriptions.", async() => {
      await waitFor(() => container.getByText(/There are no active/i));
      const button = container.getByText(/There are no active/i);
      expect(button).toBeInTheDocument();
    });
  });
});
