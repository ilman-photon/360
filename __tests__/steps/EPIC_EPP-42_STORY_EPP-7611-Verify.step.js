import { act, fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { defineFeature, loadFeature } from "jest-cucumber";
const useRouter = jest.spyOn(require("next/router"), "useRouter");
import constants from "../../src/utils/constants";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  doLogin,
  navigateToPatientPortalHome,
  renderLogin,
  renderShareModal,
  createMatchMedia,
} from "../../__mocks__/commonSteps";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import PrescriptionPage from "../../src/pages/patient/prescription";
import {
  TEMP_DATA_GLASSES,
  TEMP_DATA_CONTACTS,
  TEMP_DATA_MEDICATION,
  carePlan,
} from "../../__mocks__/mockResponse";
import Cookies from "universal-cookie";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint9/EPP-7611.feature"
);

defineFeature(feature, (test) => {
  let container;
  const mock = new MockAdapter(axios);

  const renderPrescription = async () => {
    let container;
    Cookies.result = "true";
    const mock = new MockAdapter(axios);
    mock
      .onGet(`/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066`)
      .reply(200, TEMP_DATA_MEDICATION);
    mock
      .onGet(
        `/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066/getContactsData`
      )
      .reply(200, TEMP_DATA_CONTACTS);
    mock
      .onGet(
        `/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066/getGlassesData`
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
    await waitFor(() => container.getByText(/Filter/i));
    expect(
      container.getAllByText(/Active Medications/i)[0]
    ).toBeInTheDocument();
    return container;
  };

  const viewPrescriptions = async (container) => {
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
    await waitFor(() => container.getAllByText(/Contacts Prescription/i)[0]);

    expect(container.getAllByTestId("shared-icon")[0]).toBeInTheDocument();

    const medicationTab = container.getAllByTestId("menu-medication");
    act(() => {
      fireEvent.click(medicationTab[0]);
    });
    await waitFor(() => container.getAllByText(/Active Medications/i)[0]);

    expect(container.getAllByTestId("shared-icon")[0]).toBeInTheDocument();
  };

  test("EPIC_EPP-42_STORY_EPP-7611 - Verify External user should see the following message “Code sent multiple times. Please try again after 30 minutes.” if the external user has resent the code more than 3 times", ({
    given,
    and,
    when,
    then,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    and("user is logged into the portal as admin", async () => {
      await doLogin(mock, container);
    });

    and("user lands on the Dashboard screen", async () => {
      container = await navigateToPatientPortalHome();
    });

    when("user click on View prescriptions Link", () => {
      expect(
        container.getAllByText(/View prescriptions/i)[0]
      ).toBeInTheDocument();
    });

    then("user should be navigated to prescriptions screen", async () => {
      container = await renderPrescription();
    });

    and("user should be able to view each of prescriptions", () => {
      viewPrescriptions(container);
    });

    and("user should be able to share icon", () => {
      expect(container.getAllByTestId("shared-icon")[0]).toBeInTheDocument();
    });

    when("user click on share icon", () => {
      const shareIcon = container.getAllByTestId("shared-icon");
      act(() => {
        fireEvent.click(shareIcon[0]);
      });
    });

    then(
      "user should be able to share the prescription and navigate to share prescription screen/pop-up",
      async () => {
        container = await renderShareModal();
      }
    );

    and(
      'user enter valid email/phone number on "<Email, Direct Email or Phone>" field',
      (arg0) => {}
    );

    and(/^user enter valid character on (.*) field$/, (arg0) => {});

    when("user click on share button", () => {});

    then(
      "user should navigated to Access Code to view shared Health record screen",
      () => {}
    );

    when("user click on Resend Code three time", () => {});

    then(
      /^user should see the following message “Code sent multiple times. Please try again after (\d+) minutes.” if the external user has resent the code more than (\d+) times$/,
      (arg0, arg1) => {}
    );
  });
  test("EPIC_EPP-42_STORY_EPP-7611 - Verify External user should not be able to resend code for the next 30 mins", ({
    given,
    and,
    when,
    then,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    and("user is logged into the portal as admin", async () => {
      await doLogin(mock, container);
    });

    and("user lands on the Dashboard screen", async () => {
      container = await navigateToPatientPortalHome();
    });

    when("user click on View prescriptions Link", () => {
      expect(
        container.getAllByText(/View prescriptions/i)[0]
      ).toBeInTheDocument();
    });

    then("user should be navigated to prescriptions screen", async () => {
      container = await renderPrescription();
    });

    and("user should be able to view each of prescriptions", () => {
      viewPrescriptions(container);
    });

    and("user should be able to share icon", () => {
      expect(container.getAllByTestId("shared-icon")[0]).toBeInTheDocument();
    });

    when("user click on share icon", () => {
      const shareIcon = container.getAllByTestId("shared-icon");
      act(() => {
        fireEvent.click(shareIcon[0]);
      });
    });

    then(
      "user should be able to share the prescription and navigate to share prescription screen/pop-up",
      async () => {
        container = await renderShareModal();
      }
    );

    and(
      'user enter valid email/phone number on "<Email, Direct Email or Phone>" field',
      (arg0) => {}
    );

    and(/^user enter valid character on (.*) field$/, (arg0) => {});

    when("user click on share button", () => {});

    then(
      "user should navigated to Access Code to view shared Health record screen",
      () => {}
    );

    when("user click on Resend Code three time", () => {});

    then(
      /^user should see the following message “Code sent multiple times. Please try again after (\d+) minutes.” if the external user has resent the code more than (\d+) times$/,
      (arg0, arg1) => {}
    );

    and(/^user wait more than (\d+) minutes$/, (arg0) => {});

    when("user click on Resend Code button", () => {});

    then(
      /^user should see the following message “Code sent multiple times. Please try again after (\d+) minutes.” if the external user has resent the code more than (\d+) times$/,
      (arg0, arg1) => {}
    );
  });
  test("EPIC_EPP-42_STORY_EPP-7611 - Verify User should be able to view details of share pop-up", ({
    given,
    and,
    when,
    then,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    and("user is logged into the portal as admin", async () => {
      await doLogin(mock, container);
    });

    and("user lands on the Dashboard screen", async () => {
      container = await navigateToPatientPortalHome();
    });

    when("user click on View prescriptions Link", () => {
      expect(
        container.getAllByText(/View prescriptions/i)[0]
      ).toBeInTheDocument();
    });

    then("user should be navigated to prescriptions screen", async () => {
      container = await renderPrescription();
    });

    and("user should be able to view each of prescriptions", () => {
      viewPrescriptions(container);
    });

    and("user should be able to share icon", () => {});

    when("user click on share icon", () => {
      const shareIcon = container.getAllByTestId("shared-icon");
      act(() => {
        fireEvent.click(shareIcon[0]);
      });
    });

    then(
      "user should be able to share the prescription and navigate to share prescription screen/pop-up",
      async () => {
        container = await renderShareModal();
      }
    );

    and(
      "user should be able to view details of poup-up such as",
      (table) => {}
    );
  });
  test("EPIC_EPP-42_STORY_EPP-7611 - Verify User should be able to share the prescription and navigate to share prescription screen/pop-up", ({
    given,
    and,
    when,
    then,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    and("user is logged into the portal as admin", async () => {
      await doLogin(mock, container);
    });

    and("user lands on the Dashboard screen", async () => {
      container = await navigateToPatientPortalHome();
    });

    when("user click on View prescriptions Link", () => {
      expect(
        container.getAllByText(/View prescriptions/i)[0]
      ).toBeInTheDocument();
    });

    then("user should be navigated to prescriptions screen", async () => {
      container = await renderPrescription();
    });

    and("user should be able to view each of prescriptions", () => {
      viewPrescriptions(container);
    });

    and("user should be able to share icon", () => {});

    when("user click on share icon", () => {
      const shareIcon = container.getAllByTestId("shared-icon");
      act(() => {
        fireEvent.click(shareIcon[0]);
      });
    });

    then(
      "user should be able to share the prescription and navigate to share prescription screen/pop-up",
      async () => {
        container = await renderShareModal();
      }
    );
  });
});
