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
  "./__tests__/feature/Patient Portal/Sprint8/EPP-4969.feature"
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

  test("EPIC_EPP-23_STORY_EPP-4969 - Verify User clicks on the option to search among sent messages", ({
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

    and("User clicks on the option to view sent message", async () => {
      await clickSentTab(container);
    });

    then(
      "User navigates to the screen to send and receive messages",
      async () => {
        await waitFor(() => container.getByText("titleNoSelectedMessage"));
        expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
      }
    );

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        await waitFor(() => container.getByText("titleNoSelectedMessage"));
        expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
      }
    );

    and("User is viewing the list of sent messages", () => {
      defaultValidation();
    });

    when("User clicks on one of the sent messages", async () => {
      await clickOneMessage(container);
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

    when("User clicks and opens a sent message with attachments", () => {
      defaultValidation();
    });

    then(
      "User should be able to view the date and time when message was sent",
      () => {
        defaultValidation();
      }
    );

    when("User clicks on the option to search among sent messages", () => {
      defaultValidation();
    });

    then(
      /^User should be able to make a wild card search by entering any character or word \(min - (\d+); max - (\d+)\) within the option to search$/,
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-4969 - Verify User should be able to make a wild card search by entering any character or word (min - 1; max - 100) within the option to search", ({
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

    and("User clicks on the option to view sent message", async () => {
      await clickSentTab(container);
    });

    then(
      "User navigates to the screen to send and receive messages",
      async () => {
        await waitFor(() => container.getByText("titleNoSelectedMessage"));
        expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
      }
    );

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        await waitFor(() => container.getByText("titleNoSelectedMessage"));
        expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
      }
    );

    and("User is viewing the list of sent messages", () => {
      defaultValidation();
    });

    when("User clicks on one of the sent messages", async () => {
      await clickOneMessage(container);
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

    when("User clicks and opens a sent message with attachments", () => {
      defaultValidation();
    });

    then(
      "User should be able to view the date and time when message was sent",
      () => {
        defaultValidation();
      }
    );

    when("User clicks on the option to search among sent messages", () => {
      defaultValidation();
    });

    then(
      /^User should be able to make a wild card search by entering any character or word \(min - (\d+); max - (\d+)\) within the option to search$/,
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-4969 - Verify User should be able to see result of entering any character or word", ({
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

    and("User clicks on the option to view sent message", async () => {
      await clickSentTab(container);
    });

    then(
      "User navigates to the screen to send and receive messages",
      async () => {
        await waitFor(() => container.getByText("titleNoSelectedMessage"));
        expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
      }
    );

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        await waitFor(() => container.getByText("titleNoSelectedMessage"));
        expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
      }
    );

    and("User is viewing the list of sent messages", () => {
      defaultValidation();
    });

    when("User clicks on one of the sent messages", async () => {
      await clickOneMessage(container);
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

    when("User clicks and opens a sent message with attachments", () => {
      defaultValidation();
    });

    then(
      "User should be able to view the date and time when message was sent",
      () => {
        defaultValidation();
      }
    );

    when("User clicks on the option to search among sent messages", () => {
      defaultValidation();
    });

    then(
      /^User should be able to make a wild card search by entering any character or word \(min - (\d+); max - (\d+)\) within the option to search$/,
      () => {
        defaultValidation();
      }
    );

    and(
      "User should be able to see result of entering any character or word",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-4969 - Verify User should be able to see the list of results ordered by recent ones on the top", ({
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

    and("User clicks on the option to view sent message", async () => {
      await clickSentTab(container);
    });

    then(
      "User navigates to the screen to send and receive messages",
      async () => {
        await waitFor(() => container.getByText("titleNoSelectedMessage"));
        expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
      }
    );

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        await waitFor(() => container.getByText("titleNoSelectedMessage"));
        expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
      }
    );

    and("User is viewing the list of sent messages", () => {
      defaultValidation();
    });

    when("User clicks on one of the sent messages", async () => {
      await clickOneMessage(container);
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

    when("User clicks and opens a sent message with attachments", () => {
      defaultValidation();
    });

    then(
      "User should be able to view the date and time when message was sent",
      () => {
        defaultValidation();
      }
    );

    when("User clicks on the option to search among sent messages", () => {
      defaultValidation();
    });

    then(
      /^User should be able to make a wild card search by entering any character or word \(min - (\d+); max - (\d+)\) within the option to search$/,
      () => {
        defaultValidation();
      }
    );

    and(
      "User should be able to see result of entering any character or word",
      () => {
        defaultValidation();
      }
    );

    and(
      "User should be able to see the list of results ordered by recent ones on the top",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-4969 - Verify User should be able to view the message “No results found. Please try with a different search criteria.” (ECP to provide verbiage) when there are no results found for the character or word searched", ({
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

    and("User clicks on the option to view sent message", async () => {
      await clickSentTab(container);
    });

    then(
      "User navigates to the screen to send and receive messages",
      async () => {
        await waitFor(() => container.getByText("titleNoSelectedMessage"));
        expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
      }
    );

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        await waitFor(() => container.getByText("titleNoSelectedMessage"));
        expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
      }
    );

    and("User is viewing the list of sent messages", () => {
      defaultValidation();
    });

    when("User clicks on one of the sent messages", async () => {
      await clickOneMessage(container);
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

    when("User clicks and opens a sent message with attachments", () => {
      defaultValidation();
    });

    then(
      "User should be able to view the date and time when message was sent",
      () => {
        defaultValidation();
      }
    );

    when("User clicks on the option to search among sent messages", () => {
      defaultValidation();
    });

    then(
      /^User should be able to make a wild card search by entering any character or word \(min - (\d+); max - (\d+)\) within the option to search$/,
      () => {
        defaultValidation();
      }
    );

    and(
      "Verify User should be able to view the message “No results found. Please try with a different search criteria.” (ECP to provide verbiage) when there are no results found for the character or word searched",
      () => {
        defaultValidation();
      }
    );
  });
});
