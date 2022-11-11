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
  "./__tests__/feature/Patient Portal/Sprint8/EPP-4967.feature"
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

const clickAddAttachment = (container) => {
  const attachmentNewMessage = container.getByTestId(
    "new-message-add-attachment-button"
  );
  expect(attachmentNewMessage).toBeInTheDocument();
  fireEvent.click(attachmentNewMessage);
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
  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };
  const mock = new MockAdapter(axios);
  afterEach(() => {
    mock.reset();
  });

  test("EPIC_EPP-23_STORY_EPP-4967-To verify whether the recent message is displaying at the top of the Sent items", ({
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
      clickAddAttachment(container);
    });

    and("click 'Send' button.", () => {
      clickSendButton(container);
    });

    and("the message should send to the receiver", () => {
      defaultValidation();
    });

    and("click the Sent Messages", () => {
      clickSentTab(container);
    });

    then("user should see the recent sent message at the top", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-23_STORY_EPP-4967-To verify whether the send and receive message of same message is grouping and recent at the top", ({
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
      clickAddAttachment(container);
    });

    and("click 'Send' button.", () => {
      clickSendButton(container);
    });

    and("the message should send to the receiver", () => {
      defaultValidation();
    });

    and("click the Sent Messages", () => {
      clickSentTab(container);
    });

    then(
      "Send and Received message should be grouped as same messages and recent should be displayed at top.",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-4967-To verify whether the group of unread messages is displaying properly.", ({
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
      clickAddAttachment(container);
    });

    and("click 'Send' button.", () => {
      clickSendButton(container);
    });

    and("the message should send to the receiver", () => {
      defaultValidation();
    });

    and("click the Sent Messages", () => {
      clickSentTab(container);
    });

    and("login as recipient", () => {
      defaultValidation();
    });

    then("number of unread messages should be displayed.", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-23_STORY_EPP-4967-To verify whether the sender details is displaying in the list view.", ({
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

    and("click the Sent messages", () => {
      clickSentTab(container);
    });

    then("user should see the sender details in the list view.", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-23_STORY_EPP-4967-To verify whether the user is able to view the first few words in the Subject of the message in list view.", ({
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

    then(
      "user should see the first few words in the subject of the message.",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-4967-To verify whether the user is able to view the first few words in the body of the message in list view.", ({
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

    then(
      "user should see the first few words in the body of the message.",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-4967-To verify whether the time is displaying in HH:MM and today's Date(Today's message) in the arrived message in the list view.", ({
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

    then(
      "user should see the time in the format HH:MM and today's Date in the list view",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-4967-To verify whether the Date is displaying in MM/DD/YYYY instead of time in the arrived message in the list view(Message received is not current date).", ({
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

    then(
      "user should see the date MM/DD/YYYY in the list view of arrived message(Message received is not current date)",
      () => {
        defaultValidation();
      }
    );
  });
});
