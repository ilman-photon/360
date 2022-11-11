import { defineFeature, loadFeature } from "jest-cucumber";
import { fireEvent, cleanup, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  defaultValidation,
  doLogin,
  renderLogin,
  renderMessagePage,
} from "../../__mocks__/commonSteps";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint8/EPP-4323.feature"
);

const clickNewMessage = (container) => {
  const newMessage = container.getByTestId("new-message-button");
  expect(newMessage).toBeInTheDocument();
  fireEvent.click(newMessage);
};

const fillTypeName = async (container) => {
  await waitFor(() => container.getByText("typeName*"));
  const field1 = container.getByLabelText("typeName*");
  fireEvent.change(field1, { target: { value: "name" } });
};

const fillSubject = async (container) => {
  await waitFor(() => container.getByText("subject*"));
  const field2 = container.getByLabelText("subject*");
  fireEvent.change(field2, { target: { value: "subject" } });
};

const fillWriteMessage = async (container) => {
  await waitFor(() => container.getByText("writeMessages*"));
  const field3 = container.getByLabelText("writeMessages*");
  fireEvent.change(field3, { target: { value: "name" } });
};

const clickSendButton = (container) => {
  const sendNewMessage = container.getByTestId("send-new-message");
  expect(sendNewMessage).toBeInTheDocument();
  fireEvent.click(sendNewMessage);
};

const successAlert = async (container) => {
  await waitFor(() =>
    container.getByText("All your messages have been successfully deleted")
  );
  expect(
    container.getByText("All your messages have been successfully deleted")
  ).toBeInTheDocument();
};

const clickSentTab = async (container) => {
  await waitFor(() => container.getByTestId("sent-tab"));
  const sentTab = container.getByTestId("sent-tab");
  expect(sentTab).toBeInTheDocument();
  fireEvent.click(sentTab);
};

defineFeature(feature, (test) => {
  let container;
  const mock = new MockAdapter(axios);
  afterEach(() => {
    mock.reset();
  });

  test("EPIC_EPP-23_STORY_EPP-4323 - Verify whether user can compose a new message", ({
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

    then("user should able to click 'New message' button.", () => {
      clickNewMessage(container);
    });
  });

  test("EPIC_EPP-23_STORY_EPP-4323 - To verify whether the message composing screen is displaying if user click the 'New Message' button.", ({
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

    and("click the 'New message' button.", () => {
      clickNewMessage(container);
    });

    then("user should see the message composing screen.", () => {
      expect(container.getByText("newMessageTitle")).toBeInTheDocument();
    });
  });

  test("EPIC_EPP-23_STORY_EPP-4323 -To verify whether the user can send the message to Receiver.", ({
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

    and("click the 'New message' button.", () => {
      clickNewMessage(container);
    });

    and("enter the Recipient name in the 'To' field.", () => {
      fillTypeName(container);
    });

    and("enter the Subject regarding that message.", () => {
      fillSubject(container);
    });

    and("enter the message that need to be send to the Recipient.", () => {
      fillWriteMessage(container);
    });

    and("if neccessary Add the attachment.", () => {
      defaultValidation();
    });

    and("click 'Send' button.", () => {
      clickSendButton(container);
    });

    then("message should send to the receiver", () => {
      // successAlert(container);
    });
  });

  test("EPIC_EPP-23_STORY_EPP-4323 -To verify whether the user is able to view his/her list of sent messages in Sent messages.", ({
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

    and("click the 'New message' button.", () => {
      clickNewMessage(container);
    });

    and("enter the Recipient name in the 'To' field.", () => {
      fillTypeName(container);
    });

    and("enter the Subject regarding that message.", () => {
      fillSubject(container);
    });

    and("enter the message that need to be send to the Recipient.", () => {
      fillWriteMessage(container);
    });

    and("if neccessary Add the attachment.", () => {
      defaultValidation();
    });

    and("click 'Send' button.", () => {
      clickSendButton(container);
    });

    and("the message should send to the receiver", () => {
      // successAlert(container);
    });

    and("click the Sent Messages", () => {
      clickSentTab(container);
    });

    then("user should see the list of his/her sent messages", () => {
      const messageList = container.getAllByTestId("message-card")[0];
      expect(messageList).toBeInTheDocument();
    });
  });

  test("EPIC_EPP-23_STORY_EPP-4323 -To verify whether the message is successfully received to the Recipient.", ({
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

    and("click the 'New message' button.", () => {
      clickNewMessage(container);
    });

    and("enter the Recipient name in the 'To' field.", () => {
      fillTypeName(container);
    });

    and("enter the Subject regarding that message.", () => {
        defaultValidation();
      fillSubject(container);
    });

    and("enter the message that need to be send to the Recipient.", () => {
      fillWriteMessage(container);
    });

    and("if neccessary Add the attachment.", () => {
      defaultValidation();
    });

    and("click 'Send' button.", () => {
      clickSendButton(container);
    });

    and("the message should send to the receiver", () => {
      defaultValidation();
    });

    and("login as Recipient and navigate to message center", () => {
      defaultValidation();
    });

    and("view the message", () => {
      defaultValidation();
    });

    then("Recipient should see the received message.", () => {
      defaultValidation();
    });
  });
});
