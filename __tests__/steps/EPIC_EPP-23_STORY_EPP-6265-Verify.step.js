import { defineFeature, loadFeature } from "jest-cucumber";
import { cleanup, fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  doLogin,
  renderLogin,
  navigateToPatientPortalHome,
  renderMessagePage,
} from "../../__mocks__/commonSteps";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint8/EPP-6265.feature"
);

const clickDeletedTab = async (container) => {
  await waitFor(() => container.getByTestId("deleted-tab"));
  const inboxTab = container.getByTestId("deleted-tab");
  expect(inboxTab).toBeInTheDocument();
  fireEvent.click(inboxTab);
};

const clickOneMessage = async (container) => {
  await waitFor(() => container.getAllByTestId("message-card")[0]);
  const messageList = container.getAllByTestId("message-card")[0];
  expect(messageList).toBeInTheDocument();
  fireEvent.click(messageList);
};

const clickIconDelete = async (container) => {
  await waitFor(() => container.getByTestId("delete-message-icon"));
  const deleteIcon = container.getByTestId("delete-message-icon");
  expect(deleteIcon).toBeInTheDocument();
  fireEvent.click(deleteIcon);
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

  test("EPIC_EPP-23_STORY_EPP-6265-To verify whether the recently deleted message is displaying at the top in 'Deleted messages'", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    when("user is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    and("click the 'Message Center'.", async () => {
      cleanup();
      container = await renderMessagePage();
    });

    and(
      "user lands on the the screen to send and receive messages",
      async () => {
        await waitFor(() => container.getByText("titleNoSelectedMessage"));
        expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
      }
    );

    and("delete one message", async () => {
      await clickOneMessage(container);
      await clickIconDelete(container);
    });

    and("navigate to the Deleted messages.", async () => {
      await clickDeletedTab(container);
    });

    then(
      "Patient should see the recently deleted message at the top of the lists.",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-6265-To verify whether the Sender/Receiver(Provider name) details are displaying in the list view", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    when("user is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    and("click the 'Message Center'.", async () => {
      container = await renderMessagePage();
    });

    and(
      "user lands on the the screen to send and receive messages",
      async () => {
        await waitFor(() => container.getByText("titleNoSelectedMessage"));
        expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
      }
    );

    and("delete one message", async () => {
      await clickOneMessage(container);
      await clickIconDelete(container);
    });

    and("navigate to the Deleted messages.", async () => {
      await clickDeletedTab(container);
    });

    then(
      "Patient should see the Sender/Receiver details in the list view.",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-6265-To verify whether the few words of Subject are displaying in the list view", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    when("user is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    and("click the 'Message Center'.", async () => {
      container = await renderMessagePage();
    });

    and(
      "user lands on the the screen to send and receive messages",
      async () => {
        await waitFor(() => container.getByText("titleNoSelectedMessage"));
        expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
      }
    );

    and("delete one message", async () => {
      await clickOneMessage(container);
      await clickIconDelete(container);
    });

    and("navigate to the Deleted messages.", async () => {
      await clickDeletedTab(container);
    });

    then("Patient should see the few words of Subject in the list view", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-23_STORY_EPP-6265-To verify whether the few words regarding Body of the message are displaying in the list view", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    when("user is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    and("click the 'Message Center'.", async () => {
      container = await renderMessagePage();
    });

    and(
      "user lands on the the screen to send and receive messages",
      async () => {
        await waitFor(() => container.getByText("titleNoSelectedMessage"));
        expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
      }
    );

    and("delete one message", async () => {
      await clickOneMessage(container);
      await clickIconDelete(container);
    });

    and("navigate to the Deleted messages.", async () => {
      await clickDeletedTab(container);
    });

    then(
      "Patient should see the few words regarding Body of the message in the list view",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-6265-To verify whether the Time is displaying as HH:MM if the message received today in the list view", ({
    given,
    when,
    and,
  }) => {
    given("user launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    when("user is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    and("click the 'Message Center'.", async () => {
      container = await renderMessagePage();
    });

    and(
      "user lands on the the screen to send and receive messages",
      async () => {
        await waitFor(() => container.getByText("titleNoSelectedMessage"));
        expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
      }
    );

    and("delete one message that received today", () => {
      defaultValidation();
    });

    and(
      "navigate to the Deleted messages and view the deleted message.",
      () => {
        defaultValidation();
      }
    );

    and(
      "Patient should see the timing as HH:MM in the deleted message list view.",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-6265-To verify whether the date is displaying as MM/DD/YYYY if the message received is not  today in the list view", ({
    given,
    when,
    and,
  }) => {
    given("user launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    when("user is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    and("click the 'Message Center'.", async () => {
      container = await renderMessagePage();
    });

    and(
      "user lands on the the screen to send and receive messages",
      async () => {
        await waitFor(() => container.getByText("titleNoSelectedMessage"));
        expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
      }
    );

    and("delete one message that received yesterday", () => {
      defaultValidation();
    });

    and(
      "navigate to the Deleted messages and view the deleted message.",
      () => {
        defaultValidation();
      }
    );

    and(
      "Patient should see the date as MM/DD/YYYY in the deleted message list view.",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-6265-To verify whether the Time is displaying as HH:MM if the message Sent today in the list view", ({
    given,
    when,
    and,
  }) => {
    given("user launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    when("user is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    and("click the 'Message Center'.", async () => {
      container = await renderMessagePage();
    });

    and(
      "user lands on the the screen to send and receive messages",
      async () => {
        await waitFor(() => container.getByText("titleNoSelectedMessage"));
        expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
      }
    );

    and("delete one message that sent today", () => {
      defaultValidation();
    });

    and(
      "navigate to the Deleted messages and view the deleted message.",
      () => {
        defaultValidation();
      }
    );

    and(
      "Patient should see the timing as HH:MM in the deleted message list view.",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-6265-To verify whether the date is displaying as MM/DD/YYYY if the message Sent is not  today in the list view", ({
    given,
    when,
    and,
  }) => {
    given("user launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    when("user is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    and("click the 'Message Center'.", async () => {
      container = await renderMessagePage();
    });

    and(
      "user lands on the the screen to send and receive messages",
      async () => {
        await waitFor(() => container.getByText("titleNoSelectedMessage"));
        expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
      }
    );

    and("delete one message that Sent yesterday", () => {
      defaultValidation();
    });

    and(
      "navigate to the Deleted messages and view the deleted message.",
      () => {
        defaultValidation();
      }
    );

    and(
      "Patient should see the date as MM/DD/YYYY in the deleted message list view.",
      () => {
        defaultValidation();
      }
    );
  });
});
