import "@testing-library/jest-dom/extend-expect";
import {
  act,
  fireEvent,
  render,
  waitFor,
  cleanup,
} from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import store from "../../src/store/store";
import Cookies from "universal-cookie";
import { carePlan, medicalRecordMockData } from "../../__mocks__/mockResponse";
import { createMatchMedia } from "../../__mocks__/commonSteps";
import HealthRecord from "../../src/pages/patient/health-record";
import App from "next/app";
import MedicalRecordPage from "../../src/pages/patient/account/medical-record";
const useRouter = jest.spyOn(require("next/router"), "useRouter");

const cookies = new Cookies()

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint9/EPP-1548.feature",
);

const defaultValidation = () => {
  expect(true).toBeTruthy();
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
  };

  const userShareButtonClicked = async () => {
    const moreVertBtn = await waitFor(() =>
      container.getAllByTestId("more-vert-button")[0]
    );
    expect(moreVertBtn).toBeInTheDocument();
    act(() => {
      fireEvent.click(moreVertBtn);
    });
    await waitFor(() => container.getAllByText("Share")[0]);
    const shareButton = container.getAllByText("Share")[0]
    expect(shareButton).toBeInTheDocument();
    fireEvent.click(shareButton)
  };
  
  afterEach(() => {
   cleanup()
   mock.reset();
  });

  beforeEach(() => {});

  test('EPIC_EPP-42_STORY_EPP-1548- VerifyUser should be able to click on the option to share their care plan document', ({ given, when, and }) => {
    given('User is logged in the portal', () => {
      defaultValidation()
    });

    when('User navigates to Care plan overview screen', async () => {
      await navigateToMedicalPage()
    });

    and('User should see the option to share the care plan document', () => {
      defaultValidation()
    });

    and('User should be able to click on the option to share their care plan document', async() => {
      await userShareButtonClicked()
    });
  });
});
