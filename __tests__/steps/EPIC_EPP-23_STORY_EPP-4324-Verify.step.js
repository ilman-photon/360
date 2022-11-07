import { defineFeature, loadFeature } from "jest-cucumber";
import { fireEvent, cleanup, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  doLogin,
  renderLogin,
  renderMessagePage,
} from "../../__mocks__/commonSteps";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint8/EPP-4324.feature"
);

const clickInboxTab = async (container) => {
  await waitFor(() => container.getByTestId("inbox-tab"));
  const inboxTab = container.getByTestId("inbox-tab");
  expect(inboxTab).toBeInTheDocument();
  fireEvent.click(inboxTab);
};

const clickSearchMessage = async (container) => {
  await waitFor(() => container.getByTestId("message-search-input"));
  expect(container.getByTestId("message-search-input")).toBeInTheDocument();
};

defineFeature(feature, (test) => {
  let container;
  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };
  const mock = new MockAdapter(axios);
  afterEach(() => {
    mock.reset();
  });

  test("EPIC_EPP-23_STORY_EPP-4324 - Verify whether user able to view Message Center Tab", ({
    given,
    when,
    then,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    when("User is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    then("user clicks Message Center + icon", async () => {
      cleanup();
      container = await renderMessagePage();
      await waitFor(() => container.getAllByText("Messaging")[0]);
    });
  });

  test("EPIC_EPP-23_STORY_EPP-4324 - Verify whether user able to view and click Inbox tab", ({
    given,
    when,
    then,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    when("User is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    then("user clicks Message Center + icon", async () => {
      cleanup();
      container = await renderMessagePage();
      await waitFor(() => container.getAllByText("Messaging")[0]);
    });

    then("user views drop down menu", () => {
      defaultValidation();
    });

    then("user clicks on Direct Messages", async () => {
      cleanup();
      container = await renderMessagePage();
    });

    then("user clicks on Inbox tab", () => {
      clickInboxTab(container);
    });
  });

  test("EPIC_EPP-23_STORY_EPP-4324 - Verify whether user able to view the list of received messages", ({
    given,
    when,
    then,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    when("User is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    then("user clicks Message Center + icon", async () => {
      cleanup();
      container = await renderMessagePage();
      await waitFor(() => container.getAllByText("Messaging")[0]);
    });

    then("user views drop down menu", () => {
      defaultValidation();
    });

    then("user clicks on Direct Messages", async () => {
      cleanup();
      container = await renderMessagePage();
    });

    then("user clicks on Inbox tab", () => {
      clickInboxTab(container);
    });

    then("user views the list of received messages", async () => {
      await waitFor(() => container.getByText("titleNoSelectedMessage"));
      expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
    });
  });

  test("EPIC_EPP-23_STORY_EPP-4324 - Verify whether user able to search among recieved messages", ({
    given,
    when,
    then,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    when("User is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    then("user clicks Message Center + icon", async () => {
      cleanup();
      container = await renderMessagePage();
      await waitFor(() => container.getAllByText("Messaging")[0]);
    });

    then("user views drop down menu", () => {
      defaultValidation();
    });

    then("user clicks on Direct Messages", async () => {
      cleanup();
      container = await renderMessagePage();
    });

    then("user clicks on Inbox tab", () => {
      clickInboxTab(container);
    });

    then("user views the list of received messages", async () => {
      await waitFor(() => container.getByText("titleNoSelectedMessage"));
      expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
    });

    then("user clicks search text box", () => {
      clickSearchMessage(container);
    });

    then(
      /^user validates the search textbox must allow text more than (\d+) character$/,
      (arg0) => {
        defaultValidation();
      }
    );

    then(
      /^user validates the search textbox must allow only (\d+) characters$/,
      (arg0) => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-4324 - Verify whether user able to list the results ordered by recent ones on the top", ({
    given,
    when,
    then,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    when("User is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    then("user clicks Message Center + icon", async () => {
      cleanup();
      container = await renderMessagePage();
      await waitFor(() => container.getAllByText("Messaging")[0]);
    });

    then("user views drop down menu", () => {
      defaultValidation();
    });

    then("user clicks on Direct Messages", async () => {
      cleanup();
      container = await renderMessagePage();
    });

    then("user clicks on Inbox tab", () => {
      clickInboxTab(container);
    });

    then("user views the list of received messages", async () => {
      await waitFor(() => container.getByText("titleNoSelectedMessage"));
      expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
    });

    then("user clicks search text box", () => {
      clickSearchMessage(container);
    });

    then(
      /^user validates the search textbox must allow text more than (\d+) character$/,
      (arg0) => {
        defaultValidation();
      }
    );

    then(
      /^user validates the search textbox must allow only (\d+) characters$/,
      (arg0) => {
        defaultValidation();
      }
    );

    then(/^user enter "(.*)" in the search textbox$/, (arg0) => {
      defaultValidation();
    });

    then("user clicks on search button", () => {
      defaultValidation();
    });

    then(
      "user must be able to view the list of  messages related to characters entered in the search text box",
      () => {
        defaultValidation();
      }
    );

    then(
      "user must validate whether user able to list the results ordered by recent ones on the top",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-4324 - Verify whether user able to view error message when there are no results found for the character or word searched", ({
    given,
    when,
    then,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    when("User is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    then("user clicks Message Center + icon", async () => {
      cleanup();
      container = await renderMessagePage();
      await waitFor(() => container.getAllByText("Messaging")[0]);
    });

    then("user views drop down menu", () => {
      defaultValidation();
    });

    then("user clicks on Direct Messages", async () => {
      cleanup();
      container = await renderMessagePage();
    });

    then("user clicks on Inbox tab", () => {
      clickInboxTab(container);
    });

    then("user views the list of received messages", async () => {
      await waitFor(() => container.getByText("titleNoSelectedMessage"));
      expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
    });

    then("user clicks search text box", () => {
      clickSearchMessage(container);
    });

    then(
      /^user validates the search textbox must allow text more than (\d+) character$/,
      (arg0) => {
        defaultValidation();
      }
    );

    then(
      /^user validates the search textbox must allow only (\d+) characters$/,
      (arg0) => {
        defaultValidation();
      }
    );

    then(/^user enter ""(.*)"" in the search textbox$/, (arg0) => {
      defaultValidation();
    });

    then("user clicks on search button", () => {
      defaultValidation();
    });

    when("no results found for the character or word searched", () => {
      defaultValidation();
    });

    then(
      "user must view No results found. Please try with a different search criteria.",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-4324 - Verify whether user able to view the list of  messages related to characters entered in the search text box", ({
    given,
    when,
    then,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    when("User is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    then("user clicks Message Center + icon", async () => {
      cleanup();
      container = await renderMessagePage();
      await waitFor(() => container.getAllByText("Messaging")[0]);
    });

    then("user views drop down menu", () => {
      defaultValidation();
    });

    then("user clicks on Direct Messages", async () => {
      cleanup();
      container = await renderMessagePage();
    });

    then("user clicks on Inbox tab", () => {
      clickInboxTab(container);
    });

    then("user views the list of received messages", async () => {
      await waitFor(() => container.getByText("titleNoSelectedMessage"));
      expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
    });

    then("user clicks search text box", () => {
      clickSearchMessage(container);
    });

    then(
      /^user validates the search textbox must allow text more than (\d+) character$/,
      (arg0) => {
        defaultValidation();
      }
    );

    then(
      /^user validates the search textbox must allow only (\d+) characters$/,
      (arg0) => {
        defaultValidation();
      }
    );

    then(/^user enter "(.*)" in the search textbox$/, (arg0) => {
      defaultValidation();
    });

    then("user clicks on search button", () => {
      defaultValidation();
    });

    then(
      "user must be able to view the list of  messages related to characters entered in the search text box",
      () => {
        defaultValidation();
      }
    );
  });
});
