import { defineFeature, loadFeature } from "jest-cucumber";
import { fireEvent, render, waitFor, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  defaultValidation,
  doLogin,
  renderLogin,
  renderMessagePage,
  clickDeletedMessageTab,
  seeEmptyMessage,
} from "../../__mocks__/commonSteps";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint8/EPP-6266.feature"
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

defineFeature(feature, (test) => {
  let container;
  const mock = new MockAdapter(axios);
  afterEach(() => {
    mock.reset();
  });

  test("EPIC_EPP-23_STORY_EPP-6266 - Verify whether user able to view the list of deleted messages", ({
    given,
    and,
    then,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    and("User is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        container = await renderMessagePage();
      }
    );

    then(
      "User should be able to view the list of deleted messages",
      async () => {
        await waitFor(() => container.getByText(/filterByText/i));
        expect(container.getByText(/filterByText/i)).toBeVisible();
        clickDeletedTab(container);
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-6266 - Verify whether user able to clicks on the deleted messages", ({
    given,
    and,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    and("User is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        container = await renderMessagePage();
      }
    );

    and("User is viewing the list of deleted messages", async () => {
      await waitFor(() => container.getByText(/filterByText/i));
      expect(container.getByText(/filterByText/i)).toBeVisible();
      clickDeletedTab(container);
    });

    and("User able to clicks on the deleted messages", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-23_STORY_EPP-6266 - Verify whether user able to view the sender’s detail (Provider’s name) for deleted message", ({
    given,
    and,
    when,
    then,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    and("User is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        container = await renderMessagePage();
      }
    );

    and("User is viewing the list of deleted messages", async () => {
      await waitFor(() => container.getByText(/filterByText/i));
      expect(container.getByText(/filterByText/i)).toBeVisible();
      clickDeletedTab(container);
    });

    when("User clicks on one of the deleted messages", () => {
      clickOneMessage(container);
    });

    then(
      "User should be able to view the sender’s detail (Provider’s name) for that message",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-6266 - Verify whether user able to view the subject of the received message", ({
    given,
    and,
    when,
    then,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    and("User is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        container = await renderMessagePage();
      }
    );

    and("User is viewing the list of deleted messages", async () => {
      await waitFor(() => container.getByText(/filterByText/i));
      expect(container.getByText(/filterByText/i)).toBeVisible();
      clickDeletedTab(container);
    });

    when("User clicks on one of the deleted messages", () => {
      clickOneMessage(container);
    });

    then(
      "User should be able to view the subject of the received message",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-6266 - Verify whether user able to view the body of the received message", ({
    given,
    and,
    when,
    then,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    and("User is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        container = await renderMessagePage();
      }
    );

    and("User is viewing the list of deleted messages", async () => {
      await waitFor(() => container.getByText(/filterByText/i));
      expect(container.getByText(/filterByText/i)).toBeVisible();
      clickDeletedTab(container);
    });

    when("User clicks on one of the deleted messages", () => {
      clickOneMessage(container);
    });

    then("User should be able to view the body of the received message", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-23_STORY_EPP-6266 - Verify whether user able to view attachments", ({
    given,
    and,
    when,
    then,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    and("User is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        container = await renderMessagePage();
      }
    );

    and("User is viewing the list of deleted messages", async () => {
      await waitFor(() => container.getByText(/filterByText/i));
      expect(container.getByText(/filterByText/i)).toBeVisible();
      clickDeletedTab(container);
    });

    when("User clicks on one of the deleted messages", () => {
      clickOneMessage(container);
    });

    then("User should be able to view attachments if any have", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-23_STORY_EPP-6266 - Verify whether user able to view the option to download the attachment", ({
    given,
    and,
    when,
    then,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    and("User is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        container = await renderMessagePage();
      }
    );

    and("User is viewing the list of deleted messages", async () => {
      await waitFor(() => container.getByText(/filterByText/i));
      expect(container.getByText(/filterByText/i)).toBeVisible();
      clickDeletedTab(container);
    });

    when("User clicks on one of the deleted messages", () => {
      clickOneMessage(container);
    });

    then(
      "User should be able to view attachments if any present along with an option to download it",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-6266 - Verify whether user able to view the date and time of arrival if that was a received message", ({
    given,
    and,
    when,
    then,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    and("User is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        container = await renderMessagePage();
      }
    );

    and("User is viewing the list of deleted messages", async () => {
      await waitFor(() => container.getByText(/filterByText/i));
      expect(container.getByText(/filterByText/i)).toBeVisible();
      clickDeletedTab(container);
    });

    when("User clicks on one of the deleted messages", () => {
      clickOneMessage(container);
    });

    then(
      "User should be able to view the date and time of arrival if that was a received message",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-6266 - Verify whether user able to view the date and time when message was sent if that was a sent message", ({
    given,
    and,
    when,
    then,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    and("User is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        container = await renderMessagePage();
      }
    );

    and("User is viewing the list of deleted messages", async () => {
      await waitFor(() => container.getByText(/filterByText/i));
      expect(container.getByText(/filterByText/i)).toBeVisible();
      clickDeletedTab(container);
    });

    when("User clicks on one of the deleted messages", () => {
      clickOneMessage(container);
    });

    then(
      "User should be able to view the date and time when message was sent if that was a sent message",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-6266 - Verify whether user able to view the option to restore that message", ({
    given,
    and,
    when,
    then,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    and("User is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        container = await renderMessagePage();
      }
    );

    and("User is viewing the list of deleted messages", async () => {
      await waitFor(() => container.getByText(/filterByText/i));
      expect(container.getByText(/filterByText/i)).toBeVisible();
      const deleteBtn = container.getAllByTestId("deleted-tab")[0];
      fireEvent.click(deleteBtn);
      await waitFor(() => container.getByText("noDeletedMessages"));
      const emptyMessage = container.getByText("noDeletedMessages");
      expect(emptyMessage).toBeInTheDocument();
    });

    when("User clicks on one of the deleted messages", () => {
      clickOneMessage(container);
    });

    then(
      "User should be able to view the option to restore that message",
      () => {
        defaultValidation();
      }
    );
  });
});
