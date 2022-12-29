import { act, fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { defineFeature, loadFeature } from "jest-cucumber";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  doLogin,
  navigateToPatientPortalHome,
  renderLogin,
  createMatchMedia,
  renderShareModal,
} from "../../__mocks__/commonSteps";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import PrescriptionPage from "../../src/pages/patient/prescription";
import {
  TEMP_DATA_GLASSES,
  TEMP_DATA_CONTACTS,
  TEMP_DATA_MEDICATION,
  prescriptionMedication,
  prescriptionContact,
  prescriptionGlasses,
} from "../../__mocks__/mockResponse";
import Cookies from "universal-cookie";
import { renderWithProviders } from "../src/utils/test-util";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint9/EPP-5636.feature"
);

const renderPrescription = async () => {
  let container;
  Cookies.result = "true";
  const userData = JSON.parse(localStorage.getItem("userData"));
  const patientId = `${userData?.patientId}`;
  const mock = new MockAdapter(axios);
  mock
    .onGet(`/ecp/prescriptions/patient/${patientId}`)
    .reply(200, prescriptionMedication);
  mock
    .onGet(
      `/ecp/prescriptions/patient/${patientId}/getContactsData`
    )
    .reply(200, prescriptionContact);
  mock
    .onGet(
      `/ecp/prescriptions/patient/${patientId}/getGlassesData`
    )
    .reply(200, prescriptionGlasses);
  window.matchMedia = createMatchMedia("1920px");

  container = renderWithProviders(<PrescriptionPage />);
  await waitFor(() => container.getAllByText(/Active Medications/i));
  expect(
    container.getAllByText(/Active Medications/i)[0]
  ).toBeInTheDocument();
  return container;
};

defineFeature(feature, (test) => {
  let container;
  const mock = new MockAdapter(axios);

  test("EPIC_EPP-42_STORY_EPP-5636- Verify User should see the option to share their prescription (Glasses, Medication and Contact lens)", ({
    given,
    when,
    then,
    and,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    when("User is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    then(/^User lands to the "(.*)" screen$/, async () => {
      container = await navigateToPatientPortalHome();
    });

    and("User should be able to see Prescriptions widget in dashboard", () => {
      expect(
        container.getAllByText(/View prescriptions/i)[0]
      ).toBeInTheDocument();
    });

    when("User clicks on Prescriptions widget in dashboard", () => {
      const widget = container.getAllByText(/View prescriptions/i)[0];
      fireEvent.click(widget);
    });

    then(
      "User lands on the Prescriptions screen/ User lands on the Prescription widget in dashboard",
      async () => {
        container = await renderPrescription(container);
      }
    );

    and(
      "User should see the option to share their prescription (Glasses, Medication and Contact lens)",
      async () => {
        const glassesTab = container.getAllByTestId("menu-glasses");
        act(() => {
          fireEvent.click(glassesTab[0]);
        });
        await waitFor(() => container.getAllByText(/Glasses Prescription/i)[0]);

        expect(container.getAllByTestId("shared-icon")[0]).toBeInTheDocument();

        const contactTab = container.getAllByTestId("menu-contact");
        act(() => {
          fireEvent.click(contactTab[0]);
        });
        await waitFor(
          () => container.getAllByText(/Contacts Prescription/i)[0]
        );

        expect(container.getAllByTestId("shared-icon")[0]).toBeInTheDocument();

        const medicationTab = container.getAllByTestId("menu-medication");
        act(() => {
          fireEvent.click(medicationTab[0]);
        });
        await waitFor(() => container.getAllByText(/Active Medications/i)[0]);

        expect(container.getAllByTestId("shared-icon")[0]).toBeInTheDocument();
      }
    );
  });
  test("EPIC_EPP-42_STORY_EPP-5636- Verify User should see the pop-up to share their prescription (Glasses)", ({
    given,
    when,
    then,
    and,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    when("User is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    then(/^User lands to the "(.*)" screen$/, async () => {
      container = await navigateToPatientPortalHome();
    });

    and("User should be able to see Prescriptions widget in dashboard", () => {
      expect(
        container.getAllByText(/View prescriptions/i)[0]
      ).toBeInTheDocument();
    });

    when("User clicks on Prescriptions widget in dashboard", () => {
      const widget = container.getAllByText(/View prescriptions/i)[0];
      fireEvent.click(widget);
    });

    then(
      "User lands on the Prescriptions screen/ User lands on the Prescription widget in dashboard",
      async () => {
        container = await renderPrescription(container);
      }
    );

    and(
      "User should see the option to share their prescription (Glasses)",
      async () => {
        const glassesTab = container.getAllByTestId("menu-glasses");
        act(() => {
          fireEvent.click(glassesTab[0]);
        });
        await waitFor(() => container.getAllByText(/Glasses Prescription/i)[0]);

        expect(container.getAllByTestId("shared-icon")[0]).toBeInTheDocument();
      }
    );

    when(
      "User clicks on the option to share their prescription (Glasses)",
      () => {
        const shareIcon = container.getAllByTestId("shared-icon");
        act(() => {
          fireEvent.click(shareIcon[0]);
        });
      }
    );
    then(
      "User should see the pop-up to share their prescription (Glasses)",
      () => {}
    );
  });

  test("EPIC_EPP-42_STORY_EPP-5636- Verify User should see the pop-up to share their prescription (Medication)", ({
    given,
    when,
    then,
    and,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    when("User is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    then(/^User lands to the "(.*)" screen$/, async () => {
      container = await navigateToPatientPortalHome();
    });

    and("User should be able to see Prescriptions widget in dashboard", () => {
      expect(
        container.getAllByText(/View prescriptions/i)[0]
      ).toBeInTheDocument();
    });

    when("User clicks on Prescriptions widget in dashboard", () => {
      const widget = container.getAllByText(/View prescriptions/i)[0];
      fireEvent.click(widget);
    });

    then(
      "User lands on the Prescriptions screen/ User lands on the Prescription widget in dashboard",
      async () => {
        container = await renderPrescription(container);
      }
    );

    and(
      "User should see the option to share their prescription (Medication)",
      () => {
        expect(container.getAllByTestId("shared-icon")[0]).toBeInTheDocument();
      }
    );

    when(
      "User clicks on the option to share their prescription (Medication)",
      async () => {
        const shareBtn = container.getAllByTestId("shared-icon");
        await waitFor(() => fireEvent.click(shareBtn[0]));
      }
    );

    then(
      "User should see the pop-up to share their prescription (Medication)",
      async () => {
        container = await renderShareModal();
      }
    );
  });
  test("EPIC_EPP-42_STORY_EPP-5636- Verify User should see the pop-up to share their prescription (Contact lens)", ({
    given,
    when,
    then,
    and,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    when("User is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    then(/^User lands to the "(.*)" screen$/, async () => {
      container = await navigateToPatientPortalHome();
    });

    and("User should be able to see Prescriptions widget in dashboard", () => {
      expect(
        container.getAllByText(/View prescriptions/i)[0]
      ).toBeInTheDocument();
    });

    when("User clicks on Prescriptions widget in dashboard", () => {
      const widget = container.getAllByText(/View prescriptions/i)[0];
      fireEvent.click(widget);
    });

    then(
      "User lands on the Prescriptions screen/ User lands on the Prescription widget in dashboard",
      async () => {
        container = await renderPrescription();
      }
    );

    and(
      "User should see the option to share their prescription (Contact lens)",
      async () => {
        const contactTab = container.getAllByTestId("menu-contact");
        act(() => {
          fireEvent.click(contactTab[0]);
        });
        await waitFor(
          () => container.getAllByText(/Contacts Prescription/i)[0]
        );

        expect(container.getAllByTestId("shared-icon")[0]).toBeInTheDocument();
      }
    );

    when(
      "User clicks on the option to share their prescription (Contact lens)",
      async () => {
        const shareBtn = container.getAllByTestId("shared-icon");
        await waitFor(() => fireEvent.click(shareBtn[0]));
      }
    );

    then(
      "User should see the pop-up to share their prescription (Contact lens)",
      async () => {
        container = await renderShareModal();
      }
    );
  });

  test("EPIC_EPP-42_STORY_EPP-5636-Negative Test Cases-Verify user should see the error message when the internet service is unavailable - when User clicks on Prescriptions widget in dashboard", ({
    given,
    when,
    then,
    and,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    when("User is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    then(/^User lands to the "(.*)" screen$/, async () => {
      container = await navigateToPatientPortalHome();
    });

    and("User should be able to see Prescriptions widget in dashboard", () => {
      expect(
        container.getAllByText(/View prescriptions/i)[0]
      ).toBeInTheDocument();
    });

    when("User clicks on Prescriptions widget in dashboard", () => {
      const widget = container.getAllByText(/View prescriptions/i)[0];
      fireEvent.click(widget);
    });

    and("the internet service is unavailable", () => {});

    then("user should see the appropriate error message", () => {});
  });
});
