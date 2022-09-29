import { defineFeature, loadFeature } from "jest-cucumber";
import { act, fireEvent, render, waitFor } from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import mediaQuery from "css-mediaquery";
import PrescriptionPage from "../../src/pages/patient/prescription";

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
          contacts: [],
          medications: [],
        },
      };
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
      await waitFor(() => container.getByTestId("glasses-container-0"));
    });

    then("the Patient should see the correct Type of prescription.", () => {
      const conta = container.getByTestId("glasses-container-0");
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
      const MOCK_PRESCRIPTION = {
        prescriptions: {
          glasses: [],
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
          medications: [],
        },
      };
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
      await waitFor(() => container.getByTestId("contacts-container-0"));
    });

    then("the Patient should see the correct date of prescription.", () => {
      const date = container.getByText("02/09/2022");
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
          contacts: [],
          medications: [],
        },
      };
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
      await waitFor(() => container.getByTestId("glasses-container-0"));
    });

    then(
      "the Patient should see the correct expiry date of Glass prescription.",
      () => {
        const expired = container.getByText(/Expires on/i);
        const date = container.getByText("02/10/2022");

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
      const MOCK_PRESCRIPTION = {
        prescriptions: {
          glasses: [],
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
          ],
          medications: [],
        },
      };
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
      await waitFor(() => container.getByTestId("contacts-container-0"));
    });

    then(
      "the Patient should see the correct prescribed Doctor's name in the Prescribed by.",
      () => {
        const expired = container.getByText(/Prescribed by/i);
        const date = container.getByText("Dr. Sonha Nguyen");

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
          contacts: [],
          medications: [],
        },
      };
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
      await waitFor(() => container.getByTestId("glasses-container-0"));
    });

    and("select any prescription for Glasses", () => {
      const conta = container.getByTestId("menu-glasses");
      fireEvent.click(conta);
    });

    then("below mentioned details should see by the user", () => {
      const eye = container.getByText(/Eye/i);
      const sph = container.getByText(/Sph/i);
      const cyl = container.getByText(/Cyl/i);
      const axis = container.getByText(/Axis/i);
      const add = container.getByText(/Add/i);

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
          contacts: [],
          medications: [],
        },
      };
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
      await waitFor(() => container.getByTestId("glasses-container-0"));
    });

    and("select any prescription for Glasses", () => {
      const conta = container.getByTestId("menu-glasses");
      fireEvent.click(conta);
    });

    then("below mentioned details should see by the user", () => {
      const eye = container.getByText(/Eye/i);
      const sph = container.getByText(/Sph/i);
      const cyl = container.getByText(/Cyl/i);
      const axis = container.getByText(/Axis/i);
      const add = container.getByText(/Add/i);

      expect(eye).toBeInTheDocument();
      expect(sph).toBeInTheDocument();
      expect(cyl).toBeInTheDocument();
      expect(axis).toBeInTheDocument();
      expect(add).toBeInTheDocument();
    });
  });
});
