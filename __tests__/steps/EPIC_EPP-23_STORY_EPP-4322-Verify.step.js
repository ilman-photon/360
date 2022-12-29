import { defineFeature, loadFeature } from "jest-cucumber";
import { act, fireEvent, waitFor, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  defaultValidation,
  doLogin,
  renderLogin,
  renderMessagePage,
} from "../../__mocks__/commonSteps";
import Cookies from "universal-cookie";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint8/EPP-4322.feature"
);

const clickNewMessage = (container) => {
  const newMessage = container.getByTestId("new-message-button");
  expect(newMessage).toBeInTheDocument();
  fireEvent.click(newMessage);
};

const clickCloseNewMessage = async (container) => {
  await waitFor(() => container.getByTestId("CloseIcon"));
  const closeMessage = container.getByTestId("CloseIcon");
  expect(closeMessage).toBeInTheDocument();
  fireEvent.click(closeMessage);
};

const fillTypeName = async (container) => {
  await waitFor(() => container.getByLabelText(/Type a Name */i));
  const field1 = container.getByLabelText(/Type a Name */i);
  fireEvent.change(field1, { target: { value: "" } });
};

const fillSubject = async (container) => {
  await waitFor(() => container.getAllByLabelText(/subject/i));
  const field2 = container.getAllByLabelText(/subject/i)[0];
  fireEvent.change(field2, { target: { value: "" } });
};

const fillWriteMessage = async (container) => {
  await waitFor(() => container.getByLabelText(/writeMessages/i));
  const field3 = container.getByLabelText(/writeMessages/i);
  fireEvent.change(field3, { target: { value: "" } });
};

const clickSendButton = (container) => {
  const sendNewMessage = container.getByTestId("send-new-message");
  expect(sendNewMessage).toBeInTheDocument();
  fireEvent.click(sendNewMessage);
};

const errorMessage = async (container) => {
  await waitFor(() => container.getByText("thisFieldRequired"));
  expect(container.getByText("thisFieldRequired")).toBeInTheDocument();
};

defineFeature(feature, (test) => {
  let container;
  const mock = new MockAdapter(axios);
  afterEach(() => {
    mock.reset();
    cleanup();
  });

  test("EPIC_EPP-23_STORY_EPP-4322 - Verify whether user able to see the option to compose a message", ({
    given,
    when,
    and,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
      await doLogin(mock, container);
    });

    when("User is logged in to the application", () => {
      Cookies.result = { authorized: true };
    });

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        cleanup();
        container = await renderMessagePage();
      }
    );

    and("User able to see the option to compose a message", () => {
      clickNewMessage(container);
    });
  });

  test("EPIC_EPP-23_STORY_EPP-4322 - Verify whether user able to clicks on the option to compose a message", ({
    given,
    when,
    and,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
      await doLogin(mock, container);
    });

    when("User is logged in to the application", () => {
      Cookies.result = { authorized: true };
    });

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        cleanup();
        container = await renderMessagePage();
      }
    );

    and("User should able to clicks on the option to compose a message", () => {
      clickNewMessage(container);
    });
  });

  test("EPIC_EPP-23_STORY_EPP-4322 - Verify whether user able to view the field to enter in the subject of the message which should not exceed 'x' characters", ({
    given,
    when,
    and,
    then,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
      await doLogin(mock, container);
    });

    when("User is logged in to the application", () => {
      Cookies.result = { authorized: true };
    });

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        cleanup();
        container = await renderMessagePage();
      }
    );

    when("User clicks on the option to compose a message", () => {
      clickNewMessage(container);
    });

    then(
      "User should be able to view the field to enter in the subject of the message which should not exceed 'x' characters",
      () => {
        fillSubject(container);
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-4322 - Verify whether user able to view the field to select the receiver", ({
    given,
    when,
    and,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
      await doLogin(mock, container);
    });

    when("User is logged in to the application", () => {
      Cookies.result = { authorized: true };
    });

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        cleanup();
        container = await renderMessagePage();
      }
    );

    when("User clicks on the option to compose a message", () => {
      clickNewMessage(container);
    });

    and(
      "User should be able to view the field to select the receiver",
      async () => {
        await fillTypeName(container);
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-4322 - Verify whether user able to view the field to select the receiver as a mondatory field", ({
    given,
    when,
    and,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
      await doLogin(mock, container);
    });

    when("User is logged in to the application", () => {
      Cookies.result = { authorized: true };
    });

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        cleanup();
        container = await renderMessagePage();
      }
    );

    when("User clicks on the option to compose a message", () => {
      clickNewMessage(container);
    });

    and(
      "User should be able to view the field to select the receiver",
      async () => {
        await fillTypeName(container);
      }
    );

    and("User should see the select receiver as mondatory field", async () => {
      await fillTypeName(container);
    });
  });

  test("EPIC_EPP-23_STORY_EPP-4322 - Verify whether user able to view the field to enter in the body of the message which should not exceed 'x' characters", ({
    given,
    when,
    and,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
      await doLogin(mock, container);
    });

    when("User is logged in to the application", () => {
      Cookies.result = { authorized: true };
    });

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        cleanup();
        container = await renderMessagePage();
      }
    );

    when("User clicks on the option to compose a message", () => {
      clickNewMessage(container);
    });

    and(
      "User should be able to view the field to enter in the body of the message which should not exceed 'x' characters",
      async () => {
        await fillWriteMessage(container);
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-4322 - Verify whether user able to view the option to add attachments", ({
    given,
    when,
    and,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
      await doLogin(mock, container);
    });

    when("User is logged in to the application", () => {
      Cookies.result = { authorized: true };
    });

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        cleanup();
        container = await renderMessagePage();
      }
    );

    when("User clicks on the option to compose a message", () => {
      clickNewMessage(container);
    });

    and("User should be able to view the option to add attachments", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-23_STORY_EPP-4322 - Verify whether user able to view the option to send the message", ({
    given,
    when,
    and,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
      await doLogin(mock, container);
    });

    when("User is logged in to the application", () => {
      Cookies.result = { authorized: true };
    });

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        cleanup();
        container = await renderMessagePage();
      }
    );

    when("User clicks on the option to compose a message", () => {
      clickNewMessage(container);
    });

    and("User should be able to view the option to send the message", () => {
      clickSendButton(container);
    });
  });

  test("EPIC_EPP-23_STORY_EPP-4322 - Verify whether user able to view the option to discard the message", ({
    given,
    when,
    and,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
      await doLogin(mock, container);
    });

    when("User is logged in to the application", () => {
      Cookies.result = { authorized: true };
    });

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        container = await renderMessagePage();
      }
    );

    when("User clicks on the option to compose a message", () => {
      clickNewMessage(container);
    });

    and(
      "User should be able to view the option to discard the message",
      async () => {
        await clickCloseNewMessage(container);
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-4322 - Verify whether user able to cancel the message", ({
    given,
    when,
    and,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
      await doLogin(mock, container);
    });

    when("User is logged in to the application", () => {
      Cookies.result = { authorized: true };
    });

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        cleanup();
        container = await renderMessagePage();
      }
    );

    when("User clicks on the option to compose a message", () => {
      clickNewMessage(container);
    });

    and(
      "User should be able to view the option to discard the message which when clicked will cancel the message",
      async () => {
        await clickCloseNewMessage(container);
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-4322 - Verify whether user redirect to list of received messages screen", ({
    when,
    and,
  }) => {
    when("User is logged in to the application", async () => {
      container = await renderLogin(container);
      await doLogin(mock, container);
      Cookies.result = { authorized: true };
    });

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        cleanup();
        container = await renderMessagePage();
      }
    );

    when("User clicks on the option to compose a message", () => {
      clickNewMessage(container);
    });

    and(
      "User should be able to view the option to discard the message which when clicked will cancel the message and redirect the user to list of received messages screen",
      async () => {
        await clickCloseNewMessage(container);
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-4322 - Verify whether user see the following inline error message “This field is required” when mandatory fields are not filled", ({
    when,
    and,
    then,
  }) => {
    when("User is logged in to the application", async () => {
      container = await renderLogin(container);
      await doLogin(mock, container);
      Cookies.result = { authorized: true };
    });

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        cleanup();
        container = await renderMessagePage();
      }
    );

    when("User clicks on the option to compose a message", () => {
      clickNewMessage(container);
    });

    and("User provides the subject of the message", async () => {
      await fillSubject(container);
    });

    and("User provide the body message", async () => {
      await fillWriteMessage(container);
    });

    and("User not selects the receivers name", async () => {
      await fillTypeName(container);
    });

    when("User clicks on Send button", () => {
      clickSendButton(container);
    });

    then(
      "User should see the following inline error message This field is required when mandatory fields are not filled",
      async () => {
        await errorMessage(container);
      }
    );
  });
});
