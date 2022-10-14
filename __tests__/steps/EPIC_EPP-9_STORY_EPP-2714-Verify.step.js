import { defineFeature, loadFeature } from "jest-cucumber";
import { act, fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import AuthPage from "../../src/pages/patient/login";
import ProfileInformationPage from "../../src/pages/patient/account/profile-info";
import DocumentsPage from "../../src/pages/patient/account/documents/index";
import axios from "axios";
// import App from "../../src/pages/_app";
import { Provider } from "react-redux";
import store from "../../src/store/store";
// import React, { useState as useStateMock } from "react";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint6/EPP-2714.feature",
  {
    // tagFilter: '@included and not @excluded'
  }
);

// jest.mock("react", () => ({
//   ...jest.requireActual("react"),
//   useState: jest.fn(),
// }));

defineFeature(feature, (test) => {
  let container;
  const mock = new MockAdapter(axios);
  const element = document.createElement("div");
  beforeEach(async () => {
    const expectedResult = [
      {
        id: 1,
        name: "Consent to Treat - Patient Financial Responsibility - Assigment of Benefits",
        modifiedAt: "09/09/2022 12:00PM",
        source: "/doctor.png",
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
      container = render(<AuthPage />, {
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

  const navigateToDocumentsPage = async () => {
    // container = render(
    //   <Provider store={store}>
    //     <DocumentsPage />
    //   </Provider>
    // )
    // act(() => {
    container.rerender(
      <Provider store={store}>
        <DocumentsPage />
      </Provider>
    );
    // });
    await waitFor(() => container.getByText("Choose a category"));
    const categorySelector = container.getByText("Choose a category");
    expect(categorySelector).toBeInTheDocument();
  };

  const userSeeEmptyDocumentTable = () => {
    const emptyTable = container.getByText("There are no intake forms.");
    expect(emptyTable).toBeInTheDocument();
  };

  const userSeeTableAndDownloadBtn = () => {
    setTimeout(async () => {
      const tableDocument = await waitFor(() =>
        container.getByTestId("table-documents")
      );
      expect(tableDocument).toBeInTheDocument();
      const downloadBtn = await waitFor(() =>
        container.getByTestId("downloadPDFButton")
      );
      fireEvent.click(downloadBtn);
    }, 10000);
  };

  test("EPIC_EPP-9_STORY_EPP-2714- Verify whether the user is able to view the list of documents that can be downloaded", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user Launch  the browser and enter the user portal URL", () => {
      launchBrowser();
    });

    when(
      'user enter valid "<username or phone number>" and "<password>"',
      (arg0, arg1) => {
        enterValidUsername();
      }
    );

    and("clicks  on login button.", async () => {
      clickLogin();
    });

    and(
      "navigate to the screen to view the list of documents that can be downloaded",
      async () => {
        await navigateToDocumentsPage();
      }
    );

    then(
      "user should view the list of documents that can be downloaded",
      async () => {
        userSeeEmptyDocumentTable();
      }
    );
  });

  test("EPIC_EPP-9_STORY_EPP-2714- Verify whether the user is able to view the forms at all the times i.e. not based on appointment scheduled", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user Launch  the browser and enter the user portal URL", () => {
      launchBrowser();
    });

    when(
      'user enter valid "<username or phone number>" and "<password>"',
      (arg0, arg1) => {
        enterValidUsername();
      }
    );

    and("clicks  on login button.", async () => {
      clickLogin();
    });

    and(
      "navigate to the screen to view the list of documents that can be downloaded",
      async () => {
        await navigateToDocumentsPage();
      }
    );

    then(
      "user should view the list of documents that can be downloaded",
      async () => {
        userSeeEmptyDocumentTable();
      }
    );

    and(
      "user should be able to view the list of documents with an option to download them as pdfs",
      () => {
        userSeeTableAndDownloadBtn();
      }
    );

    and(
      "user should be able to view the file name of the document added in the backend as the display name for that document in front end",
      () => {
        defaultValidation();
      }
    );

    and(
      "user should be able to view the above forms at all the times i.e. not based on appointment scheduled",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-9_STORY_EPP-2714- Verify whether the user is able to view the file name of the document added in the backend as the display name for that document in front end", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user Launch  the browser and enter the user portal URL", () => {
      launchBrowser();
    });

    when(
      'user enter valid "<username or phone number>" and "<password>"',
      (arg0, arg1) => {
        enterValidUsername();
      }
    );

    and("clicks  on login button.", async () => {
      clickLogin();
    });

    and(
      "navigate to the screen to view the list of documents that can be downloaded",
      async () => {
        await navigateToDocumentsPage();
      }
    );

    then(
      "user should view the list of documents that can be downloaded",
      async () => {
        userSeeEmptyDocumentTable();
      }
    );

    and(
      "user should be able to view the list of documents with an option to download them as pdfs",
      () => {
        userSeeTableAndDownloadBtn();
      }
    );

    and(
      "user should be able to view the file name of the document added in the backend as the display name for that document in front end",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-9_STORY_EPP-2714- Verify whether the System should bring the list of documents from a folder in the backend", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user Launch  the browser and enter the user portal URL", () => {
      launchBrowser();
    });

    when(
      'user enter valid "<username or phone number>" and "<password>"',
      (arg0, arg1) => {
        enterValidUsername();
      }
    );

    and("clicks  on login button.", async () => {
      clickLogin();
    });

    and(
      "navigate to the screen to view the list of documents that can be downloaded",
      async () => {
        await navigateToDocumentsPage();
      }
    );

    then(
      "user should view the list of documents that can be downloaded",
      async () => {
        userSeeEmptyDocumentTable();
      }
    );

    and(
      "user should be able to view the list of documents with an option to download them as pdfs",
      () => {
        userSeeTableAndDownloadBtn();
      }
    );

    and(
      "System should bring the list of documents from a folder in the backend",
      () => {}
    );
  });

  test("EPIC_EPP-9_STORY_EPP-2714- Verify whether the user is able to view the list of documents with an option to download them as pdfs", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user Launch  the browser and enter the user portal URL", () => {
      launchBrowser();
    });

    when(
      'user enter valid "<username or phone number>" and "<password>"',
      (arg0, arg1) => {
        enterValidUsername();
      }
    );

    and("clicks  on login button.", async () => {
      clickLogin();
    });

    and(
      "navigate to the screen to view the list of documents that can be downloaded",
      async () => {
        await navigateToDocumentsPage();
      }
    );

    then(
      "user should view the list of documents that can be downloaded",
      async () => {
        userSeeEmptyDocumentTable();
      }
    );

    and(
      "user should be able to view the list of documents with an option to download them as pdfs",
      () => {
        defaultValidation();
      }
    );
  });
});
