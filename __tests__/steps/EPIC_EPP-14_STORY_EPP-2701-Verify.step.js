import { defineFeature, loadFeature } from "jest-cucumber";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import MedicalRecordPage from "../../src/pages/patient/account/medical-record";

import { act, fireEvent, render, waitFor } from "@testing-library/react";
import AuthPage from "../../src/pages/patient/login";
import axios from "axios";
import { renderWithProviders } from "../src/utils/test-util";
import { carePlan } from "../../__mocks__/mockResponse";
import { createMatchMedia } from "../../__mocks__/commonSteps";
const useRouter = jest.spyOn(require("next/router"), "useRouter");

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint6/EPP-2701.feature"
);

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

  afterEach(() => {
    mock.reset();
  });

  const launchBrowser = () => {
    mock
      .onGet(`https://api.ipify.org?format=json`)
      .reply(200, { ip: "10.10.10.10" });
    act(() => {
      container = renderWithProviders(<AuthPage />, {
        container: document.body.appendChild(element),
        legacyRoot: true,
      });
    });
    const title = container.getByText("formTitle");
    expect("formTitle").toEqual(title.textContent);
  };

  const enterValidUsername = () => {
    const usernameField = container.getByLabelText("emailUserLabel");
    const passwordField = container.getByLabelText("passwordLabel");
    fireEvent.change(usernameField, {
      target: { value: "wrongUserName@email.cc" },
    });
    fireEvent.change(passwordField, { target: { value: "validPassword" } });
    expect(usernameField.value).not.toEqual("validUsername@email.cc");
    expect(passwordField.value).toEqual("validPassword");
  };

  const clickLogin = () => {
    const login = container.getByRole("button", { name: /Login/i });
    fireEvent.click(login);
  };

  const navigateToMedicalPage = async () => {
    act(() => {
      container.rerender(
        MedicalRecordPage.getLayout(<MedicalRecordPage />, store, useRouter())
      );
    });
    await waitFor(() => container.getByText("Choose a category"));
  };

  const landsOnMedicalPage = async () => {
    await waitFor(() => {
      expect(container.getByText("Choose a category")).toBeInTheDocument();
    });
  };

  const userSeeEmptyTable = async (text = "Care Plan") => {
    await waitFor(() => {
      expect(container.getByText(text)).toBeInTheDocument();
    });
    const emptyTable = container.getByText(text);
    expect(emptyTable).toBeInTheDocument();
  };

  const userSeeMoreIcon = async () => {
    const moreVertBtn = await waitFor(() =>
      container.getByTestId("more-vert-button")
    );
    expect(moreVertBtn).toBeInTheDocument();
    act(() => {
      fireEvent.click(moreVertBtn);
    });
    await waitFor(() => container.getByText("Share"));
    expect(container.getByText("Share")).toBeInTheDocument();
  };

  const componentsPage = async () => {
    await waitFor(() => {
      expect(
        container.getByText(
          "Your lab results are available. Please reach out to your provider."
        )
      ).toBeInTheDocument();
      expect(container.getByText("Care Plan Overview")).toBeInTheDocument();

      expect(container.getByText("Procedure")).toBeInTheDocument();
      expect(container.getByText("Date")).toBeInTheDocument();
    });
  };

  test("EPIC_EPP-16_STORY_EPP-2701- Verify whether the user is able to lands on the screen to view Care Plan Overview", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user Launch  the browser and enter the user portal URL", () => {
      launchBrowser();
    });

    when(/^user enter valid (.*) and (.*)$/, (arg0, arg1) => {
      enterValidUsername();
    });

    and("clicks  on login button.", () => {
      clickLogin();
    });

    and(
      "user navigates to the screen to view their Care Plan Overview",
      async () => {
        await navigateToMedicalPage();
      }
    );

    then("user lands on the screen to view Care Plan Overview", async () => {
      await landsOnMedicalPage();
    });
  });

  test("EPIC_EPP-16_STORY_EPP-2701- Verify whether the user is able to view the mentioned details", ({
    given,
    when,
    and,
    then,
  }) => {
    window.matchMedia = createMatchMedia("720px");
    given("user Launch  the browser and enter the user portal URL", () => {
      launchBrowser();
    });

    when(/^user enter valid (.*) and (.*)$/, (arg0, arg1) => {
      enterValidUsername();
    });

    and("clicks  on login button.", () => {
      clickLogin();
    });

    and(
      "user navigates to the screen to view their Care Plan Overview",
      async () => {
        await navigateToMedicalPage();
      }
    );

    then("user lands on the screen to view Care Plan Overview", async () => {
      await landsOnMedicalPage();
    });

    and("user view the fallowing details", (table) => {
      componentsPage();
    });
  });

  test("EPIC_EPP-16_STORY_EPP-2701- Verify whether the user is  able to see an option to download the care plan overview document (as pdf) which when clicked downloads the document", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user Launch  the browser and enter the user portal URL", () => {
      launchBrowser();
    });

    when(/^user enter valid (.*) and (.*)$/, (arg0, arg1) => {
      enterValidUsername();
    });

    and("clicks  on login button.", () => {
      clickLogin();
    });

    and(
      "user navigates to the screen to view their Care Plan Overview",
      async () => {
        await navigateToMedicalPage();
      }
    );

    then("user lands on the screen to view Care Plan Overview", async () => {
      await landsOnMedicalPage();
    });

    and("user view the fallowing details", () => {
      componentsPage();
    });

    and(
      "user should be able to see an option to download the care plan overview document (as pdf) which when clicked downloads the document",
      async () => {
        userSeeMoreIcon();
      }
    );
  });

  test("EPIC_EPP-16_STORY_EPP-2701- Verify whether the user is able to view the following verbiage “There is no care plan overview document.” when there is no care plan overview documents for the user", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user Launch  the browser and enter the user portal URL", () => {
      launchBrowser();
    });

    when(/^user enter valid (.*) and (.*)$/, (arg0, arg1) => {
      enterValidUsername();
    });

    and("clicks  on login button.", () => {
      clickLogin();
    });

    and(
      "user navigates to the screen to view their Care Plan Overview",
      async () => {
        const mock = new MockAdapter(axios);
        mock
          .onGet(
            `/ecp/patient/getPatientDocumentByCategory/98f9404b-6ea8-4732-b14f-9c1a168d8066/documents?pageSize=10&pageNo=0&sortBy=updated&sortOrder=dsc&search.query=((category=eq=care-plan))`
          )
          .reply(200, {
            count: 0,
            entities: [],
            _links: {
              self: { href: "/patient-management?pageNo=0&pageSize=10" },
            },
          });
        await navigateToMedicalPage();
      }
    );

    then("user lands on the screen to view Care Plan Overview", async () => {
      await landsOnMedicalPage();
    });

    and(
      "user able to view the following verbiage “There is no care plan overview document.” when there is no care plan overview documents for the user",
      () => {
        userSeeEmptyTable("There is no care plan overview document");
      }
    );
  });
});
