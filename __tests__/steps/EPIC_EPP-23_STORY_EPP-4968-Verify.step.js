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
  "./__tests__/feature/Patient Portal/Sprint8/EPP-4968.feature"
);

const clickSentTab = async (container) => {
  await waitFor(() => container.getByTestId("sent-tab"));
  const sentTab = container.getByTestId("sent-tab");
  expect(sentTab).toBeInTheDocument();
  fireEvent.click(sentTab);
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
  test("EPIC_EPP-23_STORY_EPP-4968 - Verify User clicks on one of the sent messages", ({
    given,
    when,
    and,
    then,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
      await doLogin(mock, container);
    });

    when(
      "User lands on the the screen to send and receive messages",
      async () => {
        cleanup();
        container = await renderMessagePage();
      }
    );

    and("User clicks on the option to view sent message", () => {
      defaultValidation();
    });

    then("User navigates to the screen to send and receive messages", () => {
      defaultValidation();
    });

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        await waitFor(() => container.getByText("titleNoSelectedMessage"));
        expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
      }
    );

    and("User is viewing the list of sent messages", () => {
      clickSentTab(container);
    });

    when("User clicks on one of the sent messages", () => {
      clickOneMessage(container);
    });

    then(
      "User should be able to view the sender’s detail (Provider’s name - confirm?) for that message",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-4968 - Verify User should be able to view the subject of the received message", ({
    given,
    when,
    and,
    then,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
      await doLogin(mock, container);
    });

    when(
      "User lands on the the screen to send and receive messages",
      async () => {
        cleanup();
        container = await renderMessagePage();
      }
    );

    and("User clicks on the option to view sent message", () => {
      defaultValidation();
    });

    then("User navigates to the screen to send and receive messages", () => {
      defaultValidation();
    });

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        await waitFor(() => container.getByText("titleNoSelectedMessage"));
        expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
      }
    );

    and("User is viewing the list of sent messages", () => {
      clickSentTab(container);
    });

    when("User clicks on one of the sent messages", () => {
      clickOneMessage(container);
    });

    then(
      "User should be able to view the sender’s detail (Provider’s name - confirm?) for that message",
      () => {
        defaultValidation();
      }
    );

    and(
      "User should be able to view the subject of the received message",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-4968 - Verify User should be able to view the body of the received message", ({
    given,
    when,
    and,
    then,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
      await doLogin(mock, container);
    });

    when(
      "User lands on the the screen to send and receive messages",
      async () => {
        cleanup();
        container = await renderMessagePage();
      }
    );

    and("User clicks on the option to view sent message", () => {
      defaultValidation();
    });

    then("User navigates to the screen to send and receive messages", () => {
      defaultValidation();
    });

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        await waitFor(() => container.getByText("titleNoSelectedMessage"));
        expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
      }
    );

    and("User is viewing the list of sent messages", () => {
      clickSentTab(container);
    });

    when("User clicks on one of the sent messages", () => {
      clickOneMessage(container);
    });

    then(
      "User should be able to view the sender’s detail (Provider’s name - confirm?) for that message",
      () => {
        defaultValidation();
      }
    );

    and(
      "User should be able to view the subject of the received message",
      () => {
        defaultValidation();
      }
    );

    and("User should be able to view the body of the received message", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-23_STORY_EPP-4968 - Verify User should be able to view attachments if any present along with an option to download it", ({
    given,
    when,
    and,
    then,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
      await doLogin(mock, container);
    });

    when(
      "User lands on the the screen to send and receive messages",
      async () => {
        cleanup();
        container = await renderMessagePage();
      }
    );

    and("User clicks on the option to view sent message", () => {
      defaultValidation();
    });

    then("User navigates to the screen to send and receive messages", () => {
      defaultValidation();
    });

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        await waitFor(() => container.getByText("titleNoSelectedMessage"));
        expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
      }
    );

    and("User is viewing the list of sent messages", () => {
      clickSentTab(container);
    });

    when("User clicks on one of the sent messages", () => {
      clickOneMessage(container);
    });

    then(
      "User should be able to view the sender’s detail (Provider’s name - confirm?) for that message",
      () => {
        defaultValidation();
      }
    );

    and(
      "User should be able to view the subject of the received message",
      () => {
        defaultValidation();
      }
    );

    and("User should be able to view the body of the received message", () => {
      defaultValidation();
    });

    and(
      "User should be able to view attachments if any present along with an option to download it",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-4968 - Verify User should be able to view the date and time when message was sent", ({
    given,
    when,
    and,
    then,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
      await doLogin(mock, container);
    });

    when(
      "User lands on the the screen to send and receive messages",
      async () => {
        cleanup();
        container = await renderMessagePage();
      }
    );

    and("User clicks on the option to view sent message", () => {
      defaultValidation();
    });

    then("User navigates to the screen to send and receive messages", () => {
      defaultValidation();
    });

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        await waitFor(() => container.getByText("titleNoSelectedMessage"));
        expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
      }
    );

    and("User is viewing the list of sent messages", () => {
      clickSentTab(container);
    });

    when("User clicks on one of the sent messages", () => {
      clickOneMessage(container);
    });

    then(
      "User should be able to view the sender’s detail (Provider’s name - confirm?) for that message",
      () => {
        defaultValidation();
      }
    );

    and(
      "User should be able to view the subject of the received message",
      () => {
        defaultValidation();
      }
    );

    and("User should be able to view the body of the received message", () => {
      defaultValidation();
    });

    and(
      "User should be able to view attachments if any present along with an option to download it",
      () => {
        defaultValidation();
      }
    );

    and(
      "User should be able to view the date and time when message was sent",
      () => {
        defaultValidation();
      }
    );
  });
});
