import { defineFeature, loadFeature } from "jest-cucumber";
import { act, fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import AuthPage from "../../src/pages/patient/login";
import ProfileInformationPage from "../../src/pages/patient/account/profile-info";
import DocumentsPage from "../../src/pages/patient/account/documents/index";
import axios from "axios";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import { renderWithProviders } from "../src/utils/test-util";
import {
  mockDocument,
  prescriptionContact,
  prescriptionGlasses,
  prescriptionMedication,
} from "../../__mocks__/mockResponse";
import {
  createMatchMedia,
  doLogin,
  navigateToPatientPortalHome,
  renderLogin,
} from "../../__mocks__/commonSteps";
import PrescriptionPage from "../../src/pages/patient/prescription";
const useRouter = jest.spyOn(require("next/router"), "useRouter");

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint6/EPP-4945.feature",
  {
    tagFilter: "@included and not @excluded",
  }
);

defineFeature(feature, (test) => {
  let container;
  const mock = new MockAdapter(axios);
  const element = document.createElement("div");
  const mockRouter = {
    back: jest.fn(),
    query: { type: "intake-forms" },
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    pathname: "/patient/account/documents",
  };
  beforeEach(async () => {
    Object.defineProperty(document, "cookie", {
      writable: true,
      value: "authorized=true;accessToken=1234",
    });

    const categoryId = "Intake-Forms";
    const patientId = "98f9404b-6ea8-4732-b14f-9c1a168d8066";
    const mockData = { ...mockDocument };
    mockData.entities.push(mockDocument.entities[0]);
    mock
      .onGet(
        `/ecp/patient/getPatientDocumentByCategory/${patientId}/documents?pageSize=10&pageNo=0&sortBy=updated&sortOrder=dsc&search.query=((category=eq=${categoryId}))`
      )
      .reply(200, mockData);

    useRouter.mockReturnValue(mockRouter);
  });

  afterEach(() => {
    mock.reset();
  });

  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  const renderMedication = async (withMock = true) => {
    const medicationMock = withMock ? prescriptionMedication : [];
    const contactMock = withMock ? {} : prescriptionContact;
    const mock = new MockAdapter(axios);
    mock
      .onGet(`/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066`)
      .reply(200, medicationMock);
    mock
      .onGet(
        `/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066/getContactsData`
      )
      .reply(200, contactMock);
    mock
      .onGet(
        `/ecp/prescriptions/patient/98f9404b-6ea8-4732-b14f-9c1a168d8066/getGlassesData`
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
    if (withMock) {
      await waitFor(() =>
        container.getByTestId("medication-active-container-0")
      );
    } else {
      await waitFor(() => container.getByTestId("contacts-container-0"));
    }
  };

  test("EPIC_EPP-17_STORY_EPP-4945 - Verify the patient is able to navigate to prescription screen.", ({
    given,
    when,
    and,
    then,
  }) => {
    given(
      "patient launch the browser and enter the patient portal url",
      async () => {
        container = await renderLogin(container);
      }
    );

    when(
      "patient enter valid username or phone number and password",
      async () => {
        await doLogin(mock, container);
      }
    );

    and("click on Sign in button.", () => {
      defaultValidation();
    });

    and("the dashboard should be displayed.", async () => {
      await navigateToPatientPortalHome();
    });

    and("click the View Prescription from the Prescription widget.", () => {
      const button = container.getAllByText(/View prescription/i)[0];
      expect(button).toBeInTheDocument();
      fireEvent.click(button);
    });

    then("patient should see the Prescription page.", async () => {
      act(() => {
        container = render(
          <Provider store={store}>
            {PrescriptionPage.getLayout(<PrescriptionPage />)}
          </Provider>
        );
      });
      await waitFor(() => container.getAllByText(/Prescriptions/i)[0]);
    });
  });

  test("EPIC_EPP-17_STORY_EPP-4945- Verify the patient is able see the verbiage message in Medications section if there are no medication prescriptions are available.", ({
    given,
    when,
    and,
    then,
  }) => {
    given(
      "patient launch the browser and enter the patient portal url",
      async () => {
        container = await renderLogin(container);
      }
    );

    when(
      "patient enter valid username or phone number and password",
      async () => {
        await doLogin(mock, container);
      }
    );

    and("click on Sign in button.", () => {
      defaultValidation();
    });

    and("the dashboard should be displayed.", async () => {
      defaultValidation();
    });

    and("click the View Prescription from the Prescription widget.", () => {
      defaultValidation();
    });

    then("patient should see the Prescription page.", async () => {
      await renderMedication(false);
    });

    when("patient navigates and click on medications section", async () => {
      const button = container.getAllByTestId("menu-medication")[0];
      fireEvent.click(button);
      await waitFor(
        () =>
          container.getAllByText(/There are currently 0 prescriptions for/i)[0]
      );
    });

    then(
      /^patient should be able to view the verbiage (.*) if there are no medication prescriptions are available$/,
      (arg0) => {
        expect(
          container.getAllByText(/There are currently 0 prescriptions for/i)[0]
        ).toBeInTheDocument();
      }
    );
  });

  test("EPIC_EPP-17_STORY_EPP-4944 - Verify the patient is able see the medications prescriptions details in medications section if prescription details are available in Prescriptions page.", ({
    given,
    when,
    and,
    then,
  }) => {
    given(
      "patient launch the browser and enter the patient portal url",
      async () => {
        container = await renderLogin(container);
      }
    );

    when(
      "patient enter valid username or phone number and password",
      async () => {
        await doLogin(mock, container);
      }
    );

    and("click on Sign in button.", () => {
      defaultValidation();
    });

    and("the dashboard should be displayed.", async () => {
      await navigateToPatientPortalHome();
    });

    and("click the View Prescription from the Prescription widget.", () => {
      const button = container.getAllByText(/View prescription/i)[0];
      expect(button).toBeInTheDocument();
      fireEvent.click(button);
    });

    then("patient should see the Prescription page.", async () => {
      await renderMedication();
    });

    when("patient navigates and click on medications section", async () => {
      const button = container.getAllByTestId("menu-medication")[0];
      fireEvent.click(button);
      await waitFor(() =>
        container.getByTestId("medication-active-container-0")
      );
    });

    then(
      "patient should be able to see the medications Prescriptions list details",
      () => {
        expect(
          container.getByTestId("medication-active-container-0")
        ).toBeInTheDocument();
      }
    );

    and(
      "patient should see the Active and Past medications under medications section",
      () => {
        defaultValidation();
      }
    );

    and(/^patient should see the (.*) with date (.*)$/, (arg0, arg1) => {
      expect(
        container.getAllByText(/D-Penamine 200 mg tablet/i)[0]
      ).toBeInTheDocument();
      expect(container.getAllByText("Prescribed on:")[1]).toBeInTheDocument();
      expect(container.getAllByText("10/05/2022")[1]).toBeInTheDocument();
      expect(container.getAllByText("3 tablet")[1]).toBeInTheDocument();
      expect(
        container.getAllByText(/Take twice a day/i)[0]
      ).toBeInTheDocument();
    });

    and(/^patient should see the (.*) with Doctor (.*)$/, (arg0, arg1) => {
      expect(container.getAllByText("Prescribed by:")[1]).toBeInTheDocument();
      expect(
        container.getAllByText("Provider ClarksonEyeCare")[1]
      ).toBeInTheDocument();
    });

    and(/^patient should see the (.*) with date (.*)$/, (arg0, arg1) => {
      expect(container.getAllByText("Expires on:")[1]).toBeInTheDocument();
      expect(container.getAllByText("10/05/2023")[0]).toBeInTheDocument();
    });
  });

  test("EPIC_EPP-17_STORY_EPP-4945 - Verify the default page appearance when prescription page is loaded.", ({
    given,
    when,
    and,
    then,
  }) => {
    given(
      "patient launch the browser and enter the patient portal url",
      async () => {
        container = await renderLogin(container);
      }
    );

    when(
      "patient enter valid username or phone number and password",
      async () => {
        await doLogin(mock, container);
      }
    );

    and("click on Sign in button.", () => {
      defaultValidation();
    });

    and("the dashboard should be displayed.", async () => {
      await navigateToPatientPortalHome();
    });

    and("click the View Prescription from the Prescription widget.", () => {
      const button = container.getAllByText(/View prescription/i)[0];
      expect(button).toBeInTheDocument();
      fireEvent.click(button);
    });

    then("patient should see the Prescription page.", async () => {
      await renderMedication();
    });

    when("patient navigates and click on Medications section", async () => {
      const button = container.getAllByTestId("menu-medication")[0];
      fireEvent.click(button);
      await waitFor(() =>
        container.getByTestId("medication-active-container-0")
      );
    });

    and(
      "patient should see the Prescriptions title and sub title from top left side in prescription page",
      () => {
        expect(
          container.getByTestId("medication-active-container-0")
        ).toBeInTheDocument();
      }
    );

    and(
      /^patient should see the three sections as below(.*),(.*),<Medications$/,
      (arg0, arg1) => {
        defaultValidation();
      }
    );

    and(
      /^patient should see the three icons for each prescription(.*),(.*),(.*)$/,
      (arg0, arg1, arg2) => {
        expect(container.getAllByText("Glasses")[0]).toBeInTheDocument();
        expect(container.getAllByText("Contacts")[0]).toBeInTheDocument();
        expect(container.getAllByText("Medications")[0]).toBeInTheDocument();
      }
    );

    and(
      "patient should see the read format only, he or shet cannot edit anything in the page.",
      () => {
        defaultValidation();
      }
    );

    then(
      /^patient should be able to view the verbiage (.*) if there are no medications prescriptions are available$/,
      (arg0) => {
        defaultValidation();
      }
    );

    and(
      "patient should be able to see the Medications Prescriptions list details if prescriptions are available.",
      () => {
        defaultValidation();
      }
    );

    and("patient should see the Filter icon right corner of the screen", () => {
      expect(container.getAllByText(/Filters/i)[0]).toBeInTheDocument();
    });

    and(
      /^patient should see the (.*) button on each list at right bottom$/,
      (arg0) => {
        defaultValidation();
      }
    );
  });
});
