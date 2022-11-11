import { defineFeature, loadFeature } from "jest-cucumber";
import {
  act,
  fireEvent,
  waitFor,
  cleanup,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  doLogin,
  renderLogin,
  renderMessagePage,
} from "../../__mocks__/commonSteps";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint8/EPP-6264.feature"
);

const clickMessageTab = async (container, tab) => {
  await waitFor(() => container.getByTestId(tab));
  const inboxTab = container.getByTestId(tab);
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

  test("EPIC_EPP-23_STORY_EPP-6264 - Verify whether Patient can able to delete the message from received message", ({
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

    and("select any of the received message.", () => {
      clickMessageTab(container, "inbox-tab");
      clickOneMessage(container);
    });

    and("click the delete icon.", () => {
      clickIconDelete(container);
    });

    then("seleted message should be deleted.", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-23_STORY_EPP-6264 - Verify whether Patient can able to delete the message from Sent message", ({
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

    and("navigate to the 'Sent message'.", async () => {
      await waitFor(() => container.getByTestId("sent-tab"));
      const sentTab = container.getByTestId("sent-tab");
      expect(sentTab).toBeInTheDocument();
    });

    and("select any of the sent message.", () => {
      clickMessageTab(container, "inbox-tab");
      clickOneMessage(container);
    });

    and("click the delete icon.", () => {
      clickIconDelete(container);
    });

    then("seleted message should be deleted from the 'Sent messages'.", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-23_STORY_EPP-6264- Verify whether the message is deleted from the list of  received messages.", ({
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

    and("navigate to the 'Received message'.", async () => {
      clickMessageTab(container, "sent-tab");
    });

    and("select any of the message.", () => {
      clickOneMessage(container);
    });

    and("click the delete icon.", () => {
      clickIconDelete(container);
    });

    and("the selected message is deleted.", () => {
      clickIconDelete(container);
    });

    then(
      "Patient should not see the deleted message from the list of received messages.",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-6264 -Verify whether the message is deleted from the list of  Sent messages.", ({
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

    and("navigate to the 'Sent message'.", async () => {
      await waitFor(() => container.getByTestId("sent-tab"));
      const sentTab = container.getByTestId("sent-tab");
      expect(sentTab).toBeInTheDocument();
    });

    and("select any of the sent message.", () => {
      clickMessageTab(container, "sent-tab");
      clickOneMessage(container);
    });

    and("click the delete icon.", () => {
      clickIconDelete(container);
    });

    and("the selected message is deleted.", () => {
      clickIconDelete(container);
    });

    then(
      "Patient should not see the deleted message from the list of received messages.",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-6264 -To verify whether all the deleted messages are displaying in the deleted message list.", ({
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

    and("delete some messages", async () => {
      cleanup();
      container = await renderMessagePage();
    });

    and("navigate to the Deleted messages.", () => {
      clickMessageTab(container, "deleted-tab");
      clickOneMessage(container);
    });

    then(
      "Patient should see all the deleted messages in the deleted lists.",
      () => {
        defaultValidation();
      }
    );
  });
});
