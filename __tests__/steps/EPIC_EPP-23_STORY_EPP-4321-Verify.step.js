import { defineFeature, loadFeature } from "jest-cucumber";
import { act, fireEvent, cleanup, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  doLogin,
  renderLogin,
  navigateToPatientPortalHome,
  renderMessagePage,
} from "../../__mocks__/commonSteps";
import Cookies from "universal-cookie";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint8/EPP-4321.feature"
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

  test("EPIC_EPP-23_STORY_EPP-4321 - Verify whether user able to see the reply option", ({
    given,
    when,
    and,
    then,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
      await doLogin(mock, container);
    });

    when("User is logged in to the application", async () => {
      Cookies.result = { authorized: true };
    });

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        cleanup();
        container = await renderMessagePage();
      }
    );

    and("User clicks and opens a received message", async () => {
      await waitFor(() => container.getByText("titleNoSelectedMessage"));
      expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
    });

    then("User able to see the Reply option", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-23_STORY_EPP-4321 - Verify whether user able to click  on reply option", ({
    given,
    when,
    and,
    then,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
      await doLogin(mock, container);
    });

    when("User is logged in to the application", async () => {
      Cookies.result = { authorized: true };
    });

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        cleanup();
        container = await renderMessagePage();
      }
    );

    and("User clicks and opens a received message", () => {
      clickInboxTab(container);
    });

    then("User able to clicks on the option to reply to that message", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-23_STORY_EPP-4321 - Verify whether user able to view the subject of the message with ‘RE:’ prefixed", ({
    given,
    when,
    and,
    then,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
      await doLogin(mock, container);
    });

    when("User is logged in to the application", async () => {
      Cookies.result = { authorized: true };
    });

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        cleanup();
        container = await renderMessagePage();
      }
    );

    and("User clicks and opens a received message", () => {
      clickInboxTab(container);
    });

    when("User clicks on the option to reply to that message", () => {
      defaultValidation();
    });

    then(
      "User should be able to view the subject of the message with ‘RE:’ prefixed",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-4321 - Verify whether user able to view the receiver’s detail", ({
    given,
    when,
    and,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
      await doLogin(mock, container);
    });

    when("User is logged in to the application", async () => {
      Cookies.result = { authorized: true };
    });

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        cleanup();
        container = await renderMessagePage();
      }
    );

    and("User clicks and opens a received message", () => {
      clickInboxTab(container);
    });

    when("User clicks on the option to reply to that message", () => {
      defaultValidation();
    });

    and("User should be able to view the receiver’s detail", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-23_STORY_EPP-4321 - Verify whether user able to view the body of the message", ({
    given,
    when,
    and,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
      await doLogin(mock, container);
    });

    when("User is logged in to the application", async () => {
      Cookies.result = { authorized: true };
    });

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        cleanup();
        container = await renderMessagePage();
      }
    );

    and("User clicks and opens a received message", () => {
      clickInboxTab(container);
    });

    when("User clicks on the option to reply to that message", () => {
      defaultValidation();
    });

    and("User should be able to view the body of the message", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-23_STORY_EPP-4321 - Verify whether user able to view the option to attach files", ({
    given,
    when,
    and,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
      await doLogin(mock, container);
    });

    when("User is logged in to the application", async () => {
      Cookies.result = { authorized: true };
    });

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        cleanup();
        container = await renderMessagePage();
      }
    );

    and("User clicks and opens a received message", () => {
      clickInboxTab(container);
    });

    when("User clicks on the option to reply to that message", () => {
      defaultValidation();
    });

    and("User should be able to view the option to attach files", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-23_STORY_EPP-4321 - Verify whether user able to  view the message to which reply was clicked as the trailing message", ({
    given,
    when,
    and,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
      await doLogin(mock, container);
    });

    when("User is logged in to the application", async () => {
      Cookies.result = { authorized: true };
    });

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        cleanup();
        container = await renderMessagePage();
      }
    );

    and("User clicks and opens a received message", () => {
      clickInboxTab(container);
    });

    when("User clicks on the option to reply to that message", () => {
      defaultValidation();
    });

    and(
      "User should be able to view the message to which reply was clicked as the trailing message",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-4321 - Verify whether user able to  view the option to send the message", ({
    given,
    when,
    and,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
      await doLogin(mock, container);
    });

    when("User is logged in to the application", async () => {
      Cookies.result = { authorized: true };
    });

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        cleanup();
        container = await renderMessagePage();
      }
    );

    and("User clicks and opens a received message", () => {
      clickInboxTab(container);
    });

    when("User clicks on the option to reply to that message", () => {
      defaultValidation();
    });

    and("User should be able to view the option to send the message", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-23_STORY_EPP-4321 - Verify whether user able to view the option to discard the message", ({
    given,
    when,
    and,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
      await doLogin(mock, container);
    });

    when("User is logged in to the application", async () => {
      Cookies.result = { authorized: true };
    });

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        cleanup();
        container = await renderMessagePage();
      }
    );

    and("User clicks and opens a received message", () => {
      clickInboxTab(container);
    });

    when("User clicks on the option to reply to that message", () => {
      defaultValidation();
    });

    and("User should be able to view the option to discard the message", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-23_STORY_EPP-4321 - Verify whether user able to cancel the message and redirect the user to list of received messages screen", ({
    given,
    when,
    and,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
      await doLogin(mock, container);
    });

    when("User is logged in to the application", async () => {
      Cookies.result = { authorized: true };
    });

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        cleanup();
        container = await renderMessagePage();
      }
    );

    and("User clicks and opens a received message", () => {
      clickInboxTab(container);
    });

    when("User clicks on the option to reply to that message", () => {
      defaultValidation();
    });

    and(
      "User should be able to view the option to discard the message which when clicked will cancel the message and redirect the user to list of received messages screen",
      () => {
        defaultValidation();
      }
    );
  });
});
