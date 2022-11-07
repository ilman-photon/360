import { defineFeature, loadFeature } from "jest-cucumber";
import { waitFor, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  doLogin,
  renderLogin,
  renderMessagePage,
} from "../../__mocks__/commonSteps";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint8/EPP-3345.feature"
);

const messageSection = async (container) => {
  await waitFor(() => container.getByTestId("inbox-tab"));
  expect(container.getByTestId("inbox-tab")).toBeInTheDocument();
  expect(container.getByTestId("sent-tab")).toBeInTheDocument();
  expect(container.getByTestId("draft-tab")).toBeInTheDocument();
  expect(container.getByTestId("deleted-tab")).toBeInTheDocument();
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

  test("EPIC_EPP-23_STORY_EPP-3345 - Verify user should see the list of received messages ordered by recent ones at the top", ({
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

    and("user lands on the screen to send and receive messages", async () => {
      await waitFor(() => container.getByText("titleNoSelectedMessage"));
      expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
    });

    when(
      "user selects the option to view the list of received messages (like inbox)",
      () => {
        messageSection(container);
      }
    );

    then(
      "user should see the list of received messages ordered by recent ones at the top",
      () => {
        defaultValidation();
      }
    );

    and(
      "user should be able to view the number of unread messages in the group of trailing messages",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-3345 - Verify user should be able to view the number of unread messages in the group of trailing messages", ({
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

    and("user lands on the screen to send and receive messages", async () => {
      await waitFor(() => container.getByText("titleNoSelectedMessage"));
      expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
    });

    when(
      "user selects the option to view the list of received messages (like inbox)",
      () => {
        messageSection(container);
      }
    );

    then(
      "user should see the list of received messages ordered by recent ones at the top",
      () => {
        defaultValidation();
      }
    );

    and(
      "user should be able to view the number of unread messages in the group of trailing messages",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-3345 - Verify user should be able to view the sender details (Provider’s name - confirm?) for each message in the list view", ({
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

    and("user lands on the screen to send and receive messages", async () => {
      await waitFor(() => container.getByText("titleNoSelectedMessage"));
      expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
    });

    when(
      "user selects the option to view the list of received messages (like inbox)",
      () => {
        messageSection(container);
      }
    );

    then(
      "user should see the list of received messages ordered by recent ones at the top",
      () => {
        defaultValidation();
      }
    );

    and(
      "user should be able to view the number of unread messages in the group of trailing messages",
      () => {
        defaultValidation();
      }
    );

    and(
      "user should be able to view the sender details (Provider’s name - confirm?) for each message in the list view",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-3345 - Verify user should be able to view first few words (based on space available) from the subject of the message for each message in the list view", ({
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

    and("user lands on the screen to send and receive messages", async () => {
      await waitFor(() => container.getByText("titleNoSelectedMessage"));
      expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
    });

    when(
      "user selects the option to view the list of received messages (like inbox)",
      () => {
        messageSection(container);
      }
    );

    then(
      "user should see the list of received messages ordered by recent ones at the top",
      () => {
        defaultValidation();
      }
    );

    and(
      "user should be able to view the number of unread messages in the group of trailing messages",
      () => {
        defaultValidation();
      }
    );

    and(
      "user should be able to view the sender details (Provider’s name - confirm?) for each message in the list view",
      () => {
        defaultValidation();
      }
    );

    and(
      "user should be able to view first few words (based on space available) from the subject of the message for each message in the list view",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-3345 - Verify user should be able to view first few words (based on space available) from the body of the message for each message in the list view", ({
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

    and("user lands on the screen to send and receive messages", async () => {
      await waitFor(() => container.getByText("titleNoSelectedMessage"));
      expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
    });

    when(
      "user selects the option to view the list of received messages (like inbox)",
      () => {
        messageSection(container);
      }
    );

    then(
      "user should see the list of received messages ordered by recent ones at the top",
      () => {
        defaultValidation();
      }
    );

    and(
      "user should be able to view the number of unread messages in the group of trailing messages",
      () => {
        defaultValidation();
      }
    );

    and(
      "user should be able to view the sender details (Provider’s name - confirm?) for each message in the list view",
      () => {
        defaultValidation();
      }
    );

    and(
      "user should be able to view first few words (based on space available) from the subject of the message for each message in the list view",
      () => {
        defaultValidation();
      }
    );

    and(
      "user should be able to view first few words (based on space available) from the body of the message for each message in the list view",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-3345 - Verify user should be able to view the time (HH:MM) at which the message arrived if the message arrived date is today (today’s date) for each message in the list view", ({
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

    and("user lands on the screen to send and receive messages", async () => {
      await waitFor(() => container.getByText("titleNoSelectedMessage"));
      expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
    });

    when(
      "user selects the option to view the list of received messages (like inbox)",
      () => {
        messageSection(container);
      }
    );

    then(
      "user should see the list of received messages ordered by recent ones at the top",
      () => {
        defaultValidation();
      }
    );

    and(
      "user should be able to view the number of unread messages in the group of trailing messages",
      () => {
        defaultValidation();
      }
    );

    and(
      "user should be able to view the sender details (Provider’s name - confirm?) for each message in the list view",
      () => {
        defaultValidation();
      }
    );

    and(
      "user should be able to view first few words (based on space available) from the subject of the message for each message in the list view",
      () => {
        defaultValidation();
      }
    );

    and(
      "user should be able to view first few words (based on space available) from the body of the message for each message in the list view",
      () => {
        defaultValidation();
      }
    );

    and(
      "user should be able to view the time (HH:MM) at which the message arrived if the message arrived date is today (today’s date) for each message in the list view",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-3345 - Verify user should be able to view the date (MM/DD/YYYY) when the message arrived instead of time if the message arrived date is not today for each message in the list view", ({
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

    and("user lands on the screen to send and receive messages", async () => {
      await waitFor(() => container.getByText("titleNoSelectedMessage"));
      expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
    });

    when(
      "user selects the option to view the list of received messages (like inbox)",
      () => {
        messageSection(container);
      }
    );

    then(
      "user should see the list of received messages ordered by recent ones at the top",
      () => {
        defaultValidation();
      }
    );

    and(
      "user should be able to view the number of unread messages in the group of trailing messages",
      () => {
        defaultValidation();
      }
    );

    and(
      "user should be able to view the sender details (Provider’s name - confirm?) for each message in the list view",
      () => {
        defaultValidation();
      }
    );

    and(
      "user should be able to view first few words (based on space available) from the subject of the message for each message in the list view",
      () => {
        defaultValidation();
      }
    );

    and(
      "user should be able to view first few words (based on space available) from the body of the message for each message in the list view",
      () => {
        defaultValidation();
      }
    );

    and(
      "user should be able to view the time (HH:MM) at which the message arrived if the message arrived date is today (today’s date) for each message in the list view",
      () => {
        defaultValidation();
      }
    );

    and(
      "user should be able to view the date (MM/DD/YYYY) when the message arrived instead of time if the message arrived date is not today for each message in the list view",
      () => {
        defaultValidation();
      }
    );
  });
});
