import { defineFeature, loadFeature } from "jest-cucumber";
import { fireEvent, render, waitFor, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  doLogin,
  renderLogin,
  renderMessagePage,
} from "../../__mocks__/commonSteps";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint8/EPP-5210.feature"
);

const clickInboxTab = async (container) => {
  await waitFor(() => container.getByTestId("inbox-tab"));
  const inboxTab = container.getByTestId("inbox-tab");
  expect(inboxTab).toBeInTheDocument();
  fireEvent.click(inboxTab);
};

const clickOneMessage = async (container) => {
  await waitFor(() => container.getAllByTestId("message-card")[0]);
  const messageList = container.getAllByTestId("message-card")[0];
  expect(messageList).toBeInTheDocument();
  fireEvent.click(messageList);
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

  test("EPIC_EPP-23_STORY_EPP-5210 - Verify whether user able to view Message Center Tab", ({
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

    then("user clicks Message Center + icon", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-23_STORY_EPP-5210 - Verify whether user able to view and click Inbox tab", ({
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

    then("user clicks Message Center + icon", () => {
      defaultValidation();
    });

    then("user views drop down menu", () => {
      defaultValidation();
    });

    then("user clicks on Direct Messages", async () => {
      cleanup();
      container = await renderMessagePage();
      await waitFor(() => container.getAllByText("Messaging")[0]);
    });

    then("user clicks on Inbox tab", () => {
      clickInboxTab(container);
    });
  });

  test("EPIC_EPP-23_STORY_EPP-5210 - Verify whether user able to reply received messages", ({
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

    then("user clicks Message Center + icon", () => {
      defaultValidation();
    });

    then("user views drop down menu", () => {
      defaultValidation();
    });

    then("user clicks on Direct Messages", async () => {
      cleanup();
      container = await renderMessagePage();
      await waitFor(() => container.getAllByText("Messaging")[0]);
    });

    then("user clicks on Inbox tab", () => {
      clickInboxTab(container);
    });

    then("user opens a message", () => {
      clickOneMessage(container);
    });

    then("user clicks reply", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-23_STORY_EPP-5210 - Verify whether user able to edit the subject of the message", ({
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

    then("user clicks Message Center + icon", () => {
      defaultValidation();
    });

    then("user views drop down menu", () => {
      defaultValidation();
    });

    then("user clicks on Direct Messages", async () => {
      cleanup();
      container = await renderMessagePage();
      await waitFor(() => container.getAllByText("Messaging")[0]);
    });

    then("user clicks on Inbox tab", () => {
      clickInboxTab(container);
    });

    then("user opens a message", () => {
      clickOneMessage(container);
    });

    then("user clicks reply", () => {
      defaultValidation();
    });

    then(
      "validate whether user is able to edit the subject of the message",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-5210 - Verify whether user able to enter text in the body of the message", ({
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

    then("user clicks Message Center + icon", () => {
      defaultValidation();
    });

    then("user views drop down menu", () => {
      defaultValidation();
    });

    then("user clicks on Direct Messages", async () => {
      cleanup();
      container = await renderMessagePage();
      await waitFor(() => container.getAllByText("Messaging")[0]);
    });

    then("user clicks on Inbox tab", () => {
      clickInboxTab(container);
    });

    then("user opens a message", () => {
      clickOneMessage(container);
    });

    then("user clicks reply", () => {
      defaultValidation();
    });

    then(
      "validate whether user is able to edit the subject of the message",
      () => {
        defaultValidation();
      }
    );

    then(
      "validate whether user is able to enter text in the body of the message",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-5210 - Verify whether user able to attach files with the message", ({
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

    then("user clicks Message Center + icon", () => {
      defaultValidation();
    });

    then("user views drop down menu", () => {
      defaultValidation();
    });

    then("user clicks on Direct Messages", async () => {
      cleanup();
      container = await renderMessagePage();
      await waitFor(() => container.getAllByText("Messaging")[0]);
    });

    then("user clicks on Inbox tab", () => {
      clickInboxTab(container);
    });

    then("user opens a message", () => {
      clickOneMessage(container);
    });

    then("user clicks reply", () => {
      defaultValidation();
    });

    then(
      "validate whether user is able to edit the subject of the message",
      () => {
        defaultValidation();
      }
    );

    then(
      "validate whether user is able to enter text in the body of the message",
      () => {
        defaultValidation();
      }
    );

    then(
      "validate whether user is able to attach files with the message",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-5210 - Verify whether user is able to send the message", ({
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

    then("user clicks Message Center + icon", () => {
      defaultValidation();
    });

    then("user views drop down menu", () => {
      defaultValidation();
    });

    then("user clicks on Direct Messages", async () => {
      cleanup();
      container = await renderMessagePage();
      await waitFor(() => container.getAllByText("Messaging")[0]);
    });

    then("user clicks on Inbox tab", () => {
      clickInboxTab(container);
    });

    then("user opens a message", () => {
      clickOneMessage(container);
    });

    then("user clicks reply", () => {
      defaultValidation();
    });

    then(
      "validate whether user is able to edit the subject of the message",
      () => {
        defaultValidation();
      }
    );

    then(
      "validate whether user is able to enter text in the body of the message",
      () => {
        defaultValidation();
      }
    );

    then(
      "validate whether user is able to attach files with the message",
      () => {
        defaultValidation();
      }
    );

    then("validate whether user is able to click on send", () => {
      defaultValidation();
    });

    then("validate whether user is able to send the message", () => {
      defaultValidation();
    });
  });
});
