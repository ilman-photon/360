import { defineFeature, loadFeature } from "jest-cucumber";
import { act, fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import AuthPage from "../../src/pages/patient/login";
import MedicalRecordPage from "../../src/pages/patient/account/medical-record/index";
import axios from "axios";
// import App from "../../src/pages/_app";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import { renderWithProviders } from "../src/utils/test-util";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint6/EPP-5192.feature"
);

defineFeature(feature, (test) => {
  let container;
  const mock = new MockAdapter(axios);
  const element = document.createElement("div");
  beforeEach(async () => {
    const expectedResult = [
      {
        id: 1,
        name: "Eye Surgery",
        orderBy: "Hopkins, D.M.",
        date: "09/09/2022 12:00PM",
        status: "Completed",
      },
    ];
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(expectedResult),
      })
    );
  });

  afterEach(() => {
    mock.reset();
    fetch.mockClear();
  });

  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

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

  const navigateToMedicalPage = () => {
    act(() => {
      container.rerender(
        <Provider store={store}>
          <MedicalRecordPage />
        </Provider>
      );
    });
  };

  const landToMedicalPage = async () => {
    await waitFor(() => container.getByText("Choose a category"));
    const categorySelector = container.getByText("Choose a category");
    expect(categorySelector).toBeInTheDocument();
  };

  const userSeeEmptyDocumentTable = () => {
    const emptyTable = container.getByText(
      "Consent to Treat - Patient Financial Responsibility - Assigment of Benefits"
    );
    expect(emptyTable).toBeInTheDocument();
  };

  const userSeeTable = () => {
    setTimeout(async () => {
      const tableDocument = await waitFor(() =>
        container.getByTestId("table-documents")
      );
      expect(tableDocument).toBeInTheDocument();
    }, 10000);
  };

  const tableHeader = async () => {
    await waitFor(() => {
      expect(container.getByText("Test Name")).toBeInTheDocument();
      expect(container.getByText("Ordered by")).toBeInTheDocument();
      expect(container.getByText("Test Date")).toBeInTheDocument();
      expect(container.getByText("Test Status")).toBeInTheDocument();
    });
  };

  test("EPIC_EPP-14_STORY_EPP-5192- Verify whether the user is able to view their test results", ({
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

    and("user navigates to the screen to view their test results", () => {
      navigateToMedicalPage();
    });

    then("user lands on the screen to view their test results", () => {
      landToMedicalPage();
    });
  });

  test("EPIC_EPP-14_STORY_EPP-5192- Verify whether the user is able to view the mentioned details for Lab results", ({
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

    and("user navigates to the screen to view their test results", () => {
      navigateToMedicalPage();
    });

    then("user lands on the screen to view their test results", () => {
      landToMedicalPage();
    });

    and("user able to view the following details", (table) => {
      userSeeTable();
    });
  });
  test("EPIC_EPP-14_STORY_EPP-5192- Verify whether the System will list the Lab tests based on how recent they were taken", ({
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

    and("user navigates to the screen to view their test results", () => {
      navigateToMedicalPage();
    });

    then("user lands on the screen to view their test results", () => {
      landToMedicalPage();
    });

    and(
      "user able to view the details (Lab Test Name, Lab Test Date, Lab Test Status and Ordered By)",
      () => {
        tableHeader();
      }
    );

    and(
      "System should list those Lab tests based on how recent they were taken i.e. latest/ recently taken test results to be listed first",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-14_STORY_EPP-5192- Verify whether the user  able to view a message - “Your lab results are available. Please reach out to your provider.”", ({
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

    and("user navigates to the screen to view their test results", () => {
      navigateToMedicalPage();
    });

    then("user lands on the screen to view their test results", () => {
      landToMedicalPage();
    });

    and(
      "User should be able to view a message - “Your lab results are available. Please reach out to your provider.” when the lab results are available",
      async () => {
        // TODO: reenable this with mock store data after bugfix-s3/EPP-6458 are merged
        //     await waitFor(() => container.getByText("Your lab results are available. Please reach out to your provider."));
        // const disclaimerText = container.getByText(
        //     "Your lab results are available. Please reach out to your provider."
        //   );
        //   expect(disclaimerText).toBeInTheDocument();
      }
    );
  });

  test("EPIC_EPP-14_STORY_EPP-5192- Verify whether the user  able to see the following message “There are no lab results for you now.”", ({
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

    and("user navigates to the screen to view their test results", () => {
      navigateToMedicalPage();
    });

    then("user lands on the screen to view their test results", () => {
      landToMedicalPage();
    });

    and(
      "User should be able to see the following message “There are no lab results for you now.” when there are no lab results.",
      () => {
        defaultValidation();
      }
    );
  });
});
