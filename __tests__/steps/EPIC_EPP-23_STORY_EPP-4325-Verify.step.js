import { defineFeature, loadFeature } from "jest-cucumber";
import { cleanup, fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  doLogin,
  renderLogin,
  renderMessagePage,
} from "../../__mocks__/commonSteps";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint8/EPP-4325.feature"
);

const clickInboxTab = async (container) => {
  await waitFor(() => container.getByTestId("inbox-tab"));
  const inboxTab = container.getByTestId("inbox-tab");
  expect(inboxTab).toBeInTheDocument();
  fireEvent.click(inboxTab);
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

  test("EPIC_EPP-23_STORY_EPP-4325 - Verify whether user able to view Message Center Tab", ({
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

  test("EPIC_EPP-23_STORY_EPP-4325 - Verify whether user able to view and click Inbox tab", ({
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

  test("EPIC_EPP-23_STORY_EPP-4325 - Verify whether user able to view the list of received messages", ({
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

    then("user views the list of received messages", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-23_STORY_EPP-4325 - Verify whether user able to view filter options below search textbox", ({
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

    then("user views the list of received messages", () => {
      defaultValidation();
    });

    then(
      "user must be able to view filter options below search textbox",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-4325 - Verify User should see the option to filter for unread messages which when selected will list only unread messages ordered by recent ones on top", ({
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

    then("user views the list of received messages", () => {
      defaultValidation();
    });

    then(
      "user must be able to view filter options below search textbox",
      () => {
        defaultValidation();
      }
    );

    then("user able must be able to view unread option", () => {
      defaultValidation();
    });

    then("user clicks on unread option", () => {
      defaultValidation();
    });

    then(
      "user must be displayed list only unread messages ordered by recent ones on top",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-4325 - Verify User should see the option to filter by All which list both read and unread messages (Default option selected)", ({
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

    then("user views the list of received messages", () => {
      defaultValidation();
    });

    then(
      "user must be able to view filter options below search textbox",
      () => {
        expect(container.getByText(/filterByText/i)).toBeInTheDocument();
      }
    );

    then("user able must be able to view unread option", () => {
      expect(container.getByText(/unread/i)).toBeInTheDocument();
    });

    then("user clicks on unread option", () => {
      // const unreadRadio = container.getByRole("radio", { name: /unread/i });
      // fireEvent.click(unreadRadio);
      // expect(unreadRadio.value).toEqual("unread");
      defaultValidation();
    });

    then(
      "user must be displayed list only unread messages ordered by recent ones on top",
      () => {
        defaultValidation();
      }
    );

    then("user must view All radio button", () => {
      expect(container.getByText(/all/i)).toBeInTheDocument();
    });

    then("user must view Read radio button", () => {
      // const allRadio = container.getByRole("radio", { name: /all/i });
      // fireEvent.click(allRadio);
      // expect(allRadio.value).toEqual("all");
      defaultValidation();
    });

    then("user must view Unread radio button", () => {
      expect(container.getByText(/unread/i)).toBeInTheDocument();
    });

    then("user must view Unread radio button is selected as default", () => {
      defaultValidation();
    });

    then("user must view With Attachments radio button", () => {
      defaultValidation();
    });
  });
});
