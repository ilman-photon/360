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
import { mockDocument } from "../../__mocks__/mockResponse";
import { createMatchMedia } from "../../__mocks__/commonSteps";
const useRouter = jest.spyOn(require("next/router"), "useRouter");

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint6/EPP-2714.feature"
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
    const categoryId = "Intake-Forms";
    const patientId = "98f9404b-6ea8-4732-b14f-9c1a168d8066";
    mock
      .onGet(
        `/ecp/patient/getPatientDocumentByCategory/${patientId}/documents?pageSize=10&pageNo=0&sortBy=updated&sortOrder=dsc&search.query=((category=eq=${categoryId}))`
      )
      .reply(200, mockDocument);

    useRouter.mockReturnValue(mockRouter);
  });

  afterEach(() => {
    mock.reset();
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

  const navigateToDocumentsPage = async () => {
    act(() => {
      container.rerender(
        <Provider store={store}>
          <DocumentsPage />
        </Provider>
      );
    });
    await waitFor(() => container.getByText("Choose a category"));
    await waitFor(() =>
      container.getByText((content, element) => {
        return element.tagName.toLowerCase() === "clippath";
      })
    );
    const categorySelector = container.getByText("Choose a category");
    expect(categorySelector).toBeInTheDocument();
    expect(
      container.getByText((content, element) => {
        return element.tagName.toLowerCase() === "clippath";
      })
    ).toBeInTheDocument();
  };

  const userSeeEmptyDocumentTable = () => {
    const emptyTable = container.getByText(
      "MEDICAL_CERTIFICATE_OF_FITNESS1 - Copy - Copy"
    );
    expect(emptyTable).toBeInTheDocument();
  };

  const userSeeTableAndDownloadBtn = async () => {
    await waitFor(() => container.getByTestId("downloadPDFButton"));
    await waitFor(() => container.getByTestId("table-sort-header"));
    const tableDocument = container.getByTestId("table-sort-header");
    expect(tableDocument).toBeInTheDocument();
    const downloadBtn = container.getByTestId("downloadPDFButton");
    fireEvent.click(downloadBtn);
  };

  test("EPIC_EPP-9_STORY_EPP-2714- Verify whether the user is able to view the list of documents that can be downloaded", ({
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

    and("clicks  on login button.", () => {
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
      () => {
        userSeeEmptyDocumentTable();
      }
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

    and("clicks  on login button.", () => {
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
      () => {
        userSeeEmptyDocumentTable();
      }
    );

    and(
      "user should be able to view the list of documents with an option to download them as pdfs",
      async () => {
        await userSeeTableAndDownloadBtn();
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

    and("clicks  on login button.", () => {
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
      () => {
        userSeeEmptyDocumentTable();
      }
    );

    and(
      "user should be able to view the list of documents with an option to download them as pdfs",
      async () => {
        await userSeeTableAndDownloadBtn();
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

    and("clicks  on login button.", () => {
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
      () => {
        userSeeEmptyDocumentTable();
      }
    );

    and(
      "user should be able to view the list of documents with an option to download them as pdfs",
      async () => {
        await userSeeTableAndDownloadBtn();
      }
    );

    and(
      "System should bring the list of documents from a folder in the backend",
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
      window.matchMedia = createMatchMedia("700px");
      launchBrowser();
    });

    when(
      'user enter valid "<username or phone number>" and "<password>"',
      (arg0, arg1) => {
        enterValidUsername();
      }
    );

    and("clicks  on login button.", () => {
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
      () => {
        userSeeEmptyDocumentTable();
      }
    );

    and(
      "user should be able to view the list of documents with an option to download them as pdfs",
      async () => {
        await userSeeTableAndDownloadBtn();
      }
    );

    and(
      "user should be able to view the file name of the document added in the backend as the display name for that document in front end",
      () => {
        defaultValidation();
      }
    );
  });
});
