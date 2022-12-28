import {
  act,
  fireEvent,
  render,
  waitFor,
  cleanup,
} from "@testing-library/react";
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
  defaultValidation,
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
import HealthRecord from "../../src/pages/patient/health-record";
import { medicalRecordMockData } from "../../__mocks__/mockResponse";
import MedicalRecordPage from "../../src/pages/patient/account/medical-record";
const useRouter = jest.spyOn(require("next/router"), "useRouter");

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint9/EPP-7259.feature"
);

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
  expect(container.getAllByText(/Active Medications/i)[0]).toBeInTheDocument();
  return container;
};

const renderHealthRecord = async (mockResponse, status = 200) => {
  let container;
  const mock = new MockAdapter(axios);
  const patientId = "98f9404b-6ea8-4732-b14f-9c1a168d8066";
  mock
    .onGet(`/ecp/patient/phr/patientchart/${patientId}`)
    .reply(status, mockResponse);

  act(() => {
    container = render(
      HealthRecord.getLayout(<HealthRecord />, store) //
    );
  });

  if (status === 200) {
    await waitFor(() => {
      container.getAllByText(/Medical Record/i);
    });
  } else {
    await waitFor(() => {
      container.getAllByText(/no health records/i);
    });
  }
};

defineFeature(feature, (test) => {
  let container;
  const router = useRouter();
  router.push(`/patient/account/medical-record?type=test-lab-result`);
  const mock = new MockAdapter(axios);
  const element = document.createElement("div");
  const mockRouter = {
    back: jest.fn(),
    query: { type: "care-plan-overview" },
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    pathname: "/patient/account/medical-record",
  };
  beforeEach(() => {
    const mock = new MockAdapter(axios);
    mock
      .onGet(
        `/ecp/patient/getPatientDocumentByCategory/98f9404b-6ea8-4732-b14f-9c1a168d8066/documents?pageSize=10&pageNo=0&sortBy=updated&sortOrder=dsc&search.query=((category=eq=care-plan))`
      )
      .reply(200, carePlan);

    window.matchMedia = createMatchMedia("1920px");
    useRouter.mockReturnValue(mockRouter);
  });

  const navigateToMedicalPage = async () => {
    act(() => {
      container = render(
        MedicalRecordPage.getLayout(<MedicalRecordPage />, store)
      );
    });
    await waitFor(() => container.getAllByText(/Test & Lab Results/i));

    return container;
  };

  afterEach(() => {
    cleanup();
    mock.reset();
  });

  test("EPIC_EPP-42_STORY_EPP-7259 - Verify User should see the pop-up to share their care plan document", ({
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
      window.matchMedia = createMatchMedia("1500px");
      await renderHealthRecord(medicalRecordMockData, 200);
    });

    and("user should be able to view Document navigation menu", () => {
      expect(container.getByText(/Documents/i)).toBeInTheDocument();
    });

    when("user click on Document navigation menu", () => {
      const documentMenu = container.getByText(/Documents/i);
      fireEvent.click(documentMenu);
    });

    and("user click on Health record sub menu", async () => {
      await waitFor(() => container.getAllByText(/Health Record/i));
      const healthRecordMenu = container.getAllByText(/Health Record/i);
      fireEvent.click(healthRecordMenu[0]);
    });

    then(
      "user should be able to view share options on each document of Health care",
      () => {
        const shareIcon = container.getAllByTestId("shared-icon");
        act(() => {
          fireEvent.click(shareIcon[0]);
        });
      }
    );

    when("user click on share icon button", () => {
      const shareIcon = container.getAllByTestId("shared-icon");
      act(() => {
        fireEvent.click(shareIcon[0]);
      });
    });

    then(
      "User should see the pop-up to share their care plan document",
      async () => {
        container = await renderShareModal();
      }
    );
  });
  test("EPIC_EPP-42_STORY_EPP-7259 - Verify User should see the pop-up to share their prescriptions", ({
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
      container = await renderPrescription();
    });

    and("user should be able to view Health Chart navigation menu", () => {
      expect(container.getAllByText(/Health Chart/i)[0]).toBeInTheDocument();
    });

    when("user click on Health Chart menu", () => {
      const healthMenu = container.getAllByText(/Health Chart/i)[0];
      fireEvent.click(healthMenu);
    });

    and("user click on prescriptions sub menu", async () => {
      await waitFor(() => container.getAllByText(/Prescription/i));
      const prescriptionMenu = container.getAllByText(/Prescription/i);
      fireEvent.click(prescriptionMenu[0]);
    });

    then(
      "user should be able to view share options on each document of prescriptions",
      async () => {
        await waitFor(() => container.getAllByTestId("shared-icon"));
      }
    );

    when("user click on share icon button", () => {
      const shareIcon = container.getAllByTestId("shared-icon");
      act(() => {
        fireEvent.click(shareIcon[0]);
      });
    });

    then(
      "User should see the pop-up to share their prescriptions",
      async () => {
        container = await renderShareModal();
      }
    );
  });

  test("EPIC_EPP-42_STORY_EPP-7259 - Verify User should see the pop-up to share their Test & Lab Result", ({
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

    and(
      "user should be able to view Health Chart navigation menu",
      async () => {
        container = await navigateToMedicalPage();
        expect(container.getAllByText(/Health Chart/i)[0]).toBeInTheDocument();
      }
    );

    when("user click on Health Chart menu", () => {
      const healthMenu = container.getAllByText(/Health Chart/i);
      fireEvent.click(healthMenu[0]);
    });

    and("user click on Test & Lab Result sub menu", async () => {
      await waitFor(() => container.getAllByText(/Test & Lab Results/i));
      const testLabMenu = container.getAllByText(/Test & Lab Results/i);
      fireEvent.click(testLabMenu[0]);
    });

    then(
      "user should be able to view share options on each document of Test & Lab Result",
      async () => {
        container = await navigateToMedicalPage();
      }
    );

    when("user click on share icon button", async () => {
      defaultValidation();
    });

    then(
      "User should see the pop-up to share their Test & Lab Result",
      async () => {
        container = await renderShareModal();
      }
    );
  });
});
