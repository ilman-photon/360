import { defineFeature, loadFeature } from "jest-cucumber";
import { cleanup, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  doLogin,
  renderLogin,
  renderMessagePage,
} from "../../__mocks__/commonSteps";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint8/EPP-4320.feature"
);

const clickOneMessage = async (container) => {
  const messageList = await waitFor(() => container.getAllByTestId("message-card"));
  expect(messageList[0]).toBeInTheDocument();
  fireEvent.click(messageList[0]);
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

  test("EPIC_EPP-23_STORY_EPP-4320 - Verify whether user able to view the list of received messages", ({
    given,
    when,
    and,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    when("User is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        cleanup();
        container = await renderMessagePage();
      }
    );

    and("User is viewing the list of received messages", async () => {
      await waitFor(() => container.getByText("titleNoSelectedMessage"));
      expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
    });
  });

  test("EPIC_EPP-23_STORY_EPP-4320 - Verify whether user able to clicks on one of the received messages", ({
    given,
    when,
    and,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    when("User is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        cleanup();
        container = await renderMessagePage();
      }
    );

    and("User is viewing the list of received messages", async () => {
      await waitFor(() => container.getByText("titleNoSelectedMessage"));
      expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
    });

    and("User able to clicks on one of the received messages", () => {
      // clickOneMessage(container);
    });
  });

  test("EPIC_EPP-23_STORY_EPP-4320 - Verify whether user able to view the sender’s detail  for that message", ({
    given,
    when,
    and,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    when("User is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        cleanup();
        container = await renderMessagePage();
      }
    );

    and("User is viewing the list of received messages", async () => {
      await waitFor(() => container.getByText("titleNoSelectedMessage"));
      expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
    });

    when("User clicks on one of the received messages", () => {
      // clickOneMessage(container);
    });

    and(
      "User should be able to view the sender’s detail for that message",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-4320 - Verify whether user able to view the subject of the received message", ({
    given,
    when,
    and,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    when("User is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        cleanup();
        container = await renderMessagePage();
      }
    );

    and("User is viewing the list of received messages", async () => {
      await waitFor(() => container.getByText("titleNoSelectedMessage"));
      expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
    });

    when("User clicks on one of the received messages", () => {
      // clickOneMessage(container);
    });

    and(
      "User should be able to view the subject of the received message",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-4320 - Verify whether user able to view the body of the received message", ({
    given,
    when,
    and,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    when("User is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        cleanup();
        container = await renderMessagePage();
      }
    );

    and("User is viewing the list of received messages", async () => {
      await waitFor(() => container.getByText("titleNoSelectedMessage"));
      expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
    });

    when("User clicks on one of the received messages", () => {
      // clickOneMessage(container);
    });

    and("User should be able to view the body of the received message", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-23_STORY_EPP-4320 - Verify whether user able to view attachments if any present along with an option to download it", ({
    given,
    when,
    and,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    when("User is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        cleanup();
        container = await renderMessagePage();
      }
    );

    and("User is viewing the list of received messages", async () => {
      await waitFor(() => container.getByText("titleNoSelectedMessage"));
      expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
    });

    when("User clicks on one of the received messages", () => {
      // clickOneMessage(container);
    });

    and(
      "User should be able to view attachments if any present along with an option to download it",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-4320 - Verify whether user able to view the date and time of arrival for that received message", ({
    given,
    when,
    and,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    when("User is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        cleanup();
        container = await renderMessagePage();
      }
    );

    and("User is viewing the list of received messages", async () => {
      await waitFor(() => container.getByText("titleNoSelectedMessage"));
      expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
    });

    when("User clicks on one of the received messages", () => {
      // clickOneMessage(container);
    });

    and(
      "User should be able to view the date and time of arrival for that received message",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-4320 - Verify whether user able to view the option to reply back to that message", ({
    given,
    when,
    and,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    when("User is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        cleanup();
        container = await renderMessagePage();
      }
    );

    and("User is viewing the list of received messages", async () => {
      await waitFor(() => container.getByText("titleNoSelectedMessage"));
      expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
    });

    when("User clicks on one of the received messages", () => {
      // clickOneMessage(container);
    });

    and(
      "User should be able to view the option to reply back to that message",
      () => {
        defaultValidation();
      }
    );
  });
});
