import { defineFeature, loadFeature } from "jest-cucumber";
import { cleanup, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  doLogin,
  renderLogin,
  renderMessagePage,
  navigateToPatientPortalHome,
  createMatchMedia,
} from "../../__mocks__/commonSteps";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint8/EPP-6147.feature"
);

const clickDraftTab = async (container) => {
  await waitFor(() => container.getByTestId("draft-tab"));
  const draftTab = container.getByTestId("draft-tab");
  expect(draftTab).toBeInTheDocument();
  fireEvent.click(draftTab);
};

const clickOneMessage = async (container) => {
  await waitFor(() => container.getAllByTestId("message-card")[0]);
  const messageList = container.getAllByTestId("message-card")[0];
  expect(messageList).toBeInTheDocument();
  fireEvent.click(messageList);
};

const clickSendReply = async (container) => {
  //Waiting integration
  //await waitFor(() => container.getByTestId("send-reply-button"));
  //expect(container.getByTestId("send-reply-button")).toBeInTheDocument();
  expect(true).toBeTruthy();
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

  test("EPIC_EPP-23_STORY_EPP-6147-Verify if the user can add/ change the subject in the drafts messages and send a message to to the recipient", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal XXX URL", async () => {
      createMatchMedia("480px");
      container = await renderLogin(container);
    });

    when(
      "a user is logged in to the application with a valid username and password",
      async () => {
        await doLogin(mock, container);
      }
    );

    and("user lands on the Dashboard  page", async () => {
      cleanup();
    });

    and("user clicks on messaging in the global header", async () => {
      cleanup();
      container = await renderMessagePage(mock);
    });

    then("the User sees the all received message", async () => {
      await waitFor(() => container.getByText("titleNoSelectedMessage"));
      expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
    });

    and("User clicks on the drafts button", () => {
      defaultValidation();
    });

    then("the user sees the all drafts message page", async () => {
      await clickDraftTab(container);
    });

    and(
      "user able to add/ edit the subject in the drafts in the drafts message",
      async () => {
        //await clickOneMessage(container);
      }
    );

    and("clicks on send button", () => {
      defaultValidation();
    });

    then("the message is sent to the respective recipient", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-23_STORY_EPP-6147- Verify if the user can view the receiver’s detail (Patient’s name) in the drafts message", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal XXX URL", async () => {
      container = await renderLogin(container);
    });

    when(
      "a user is logged in to the application with a valid username and password",
      async () => {
        await doLogin(mock, container);
      }
    );

    and("user lands on the Dashboard  page", async () => {
      cleanup();
    });

    and("user clicks on messaging in the global header", async () => {
      cleanup();
      container = await renderMessagePage(mock);
    });

    then("the User sees the all received message", async () => {
      await waitFor(() => container.getByText("titleNoSelectedMessage"));
      expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
    });

    and("User clicks on the drafts button", () => {
      defaultValidation();
    });

    then("the user sees the all drafts message page", async () => {
      await clickDraftTab(container);
    });

    and(
      "user able to add/ edit the receiver’s detail (Patient’s name ) in the drafts message",
      async () => {
        //await clickOneMessage(container);
      }
    );

    and("clicks on send button", () => {
      defaultValidation();
    });

    then("the message is sent to the respective recipient", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-23_STORY_EPP-6147- Verify if the user can view the message body in the drafts message", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal XXX URL", async () => {
      container = await renderLogin(container);
    });

    when(
      "a user is logged in to the application with a valid username and password",
      async () => {
        await doLogin(mock, container);
      }
    );

    and("user lands on the Dashboard  page", async () => {
      cleanup();
      await navigateToPatientPortalHome(mock);
    });

    and("user clicks on messaging in the global header", async () => {
      cleanup();
      container = await renderMessagePage(mock);
    });

    then("the User sees the all received message", async () => {
      await waitFor(() => container.getByText("titleNoSelectedMessage"));
      expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
    });

    and("User clicks on the drafts button", () => {
      defaultValidation();
    });

    then("the user sees the all drafts message page", async () => {
      await clickDraftTab(container);
    });

    and("select a message", async () => {
      //await clickOneMessage(container);
    });

    and(
      "user able to view the receiver’s detail (Patient’s name ) in the drafts message",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-6147-Verify if the user can view the attachments if any present along with an option to download in the drafts message", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal XXX URL", async () => {
      container = await renderLogin(container);
    });

    when(
      "a user is logged in to the application with a valid username and password",
      async () => {
        await doLogin(mock, container);
      }
    );

    and("user lands on the Dashboard  page", async () => {
      cleanup();
      await navigateToPatientPortalHome(mock);
    });

    and("user clicks on messaging in the global header", async () => {
      cleanup();
      container = await renderMessagePage(mock);
    });

    then("the User sees the all received message", async () => {
      await waitFor(() => container.getByText("titleNoSelectedMessage"));
      expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
    });

    and("User clicks on the drafts button", () => {
      defaultValidation();
    });

    then("the user sees the all drafts message page", async () => {
      await clickDraftTab(container);
    });

    and("select a message", () => {
      defaultValidation();
    });

    and(
      "user able to  view the attachments if any present along with an option to download in the drafts message",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-6147- Verify if the user send  option in the drafts message", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal XXX URL", async () => {
      container = await renderLogin(container);
    });

    when(
      "a user is logged in to the application with a valid username and password",
      async () => {
        await doLogin(mock, container);
      }
    );

    and("user lands on the Dashboard  page", async () => {
      cleanup();
      await navigateToPatientPortalHome(mock);
    });

    and("user clicks on messaging in the global header", async () => {
      cleanup();
      container = await renderMessagePage(mock);
    });

    then("the User sees the all received message", async () => {
      await waitFor(() => container.getByText("titleNoSelectedMessage"));
      expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
    });

    and("User clicks on the drafts button", () => {
      defaultValidation();
    });

    then("the user sees the all drafts message page", async () => {
      await clickDraftTab(container);
    });

    and("select a message", () => {
      defaultValidation();
    });

    and(
      "users are able to  view the attachments if any present along with an option to download in the drafts message",
      () => {
        defaultValidation();
      }
    );

    and("User sees the Send Option in the respective message.", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-23_STORY_EPP-6147- Verify if the user can able to  send  a message from the drafts message", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal XXX URL", async () => {
      container = await renderLogin(container);
    });

    when(
      "a user is logged in to the application with a valid username and password",
      async () => {
        await doLogin(mock, container);
      }
    );

    and("user lands on the Dashboard  page", async () => {
      cleanup();
      await navigateToPatientPortalHome(mock);
    });

    and("user clicks on messaging in the global header", async () => {
      cleanup();
      container = await renderMessagePage(mock);
    });

    then("the User sees the all received message", async () => {
      await waitFor(() => container.getByText("titleNoSelectedMessage"));
      expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
    });

    and("User clicks on the drafts button", () => {
      defaultValidation();
    });

    then("the user sees the all drafts message page", async () => {
      await clickDraftTab(container);
    });

    and("select a message", () => {
      defaultValidation();
    });

    and("user sees the message subject and body of the message", () => {
      defaultValidation();
    });

    and(
      "users are able to  view the attachments if any present along with an option to download in the drafts message",
      () => {
        defaultValidation();
      }
    );

    and("User sees the Send Option in the respective message.", () => {
      defaultValidation();
    });

    and("user clicks on the send button", () => {
      defaultValidation();
    });

    then("the message is sent to the respective recipient", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-23_STORY_EPP-6147-Verify if the user revives a message sent from the drafts.", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal XXX URL", async () => {
      container = await renderLogin(container);
    });

    when(
      "a user is logged in to the application with a valid username and password",
      async () => {
        await doLogin(mock, container);
      }
    );

    and("user lands on the Dashboard  page", async () => {
      cleanup();
      await navigateToPatientPortalHome(mock);
    });

    and("user clicks on messaging in the global header", async () => {
      cleanup();
      container = await renderMessagePage(mock);
    });

    then("the User sees the all received message", async () => {
      await waitFor(() => container.getByText("titleNoSelectedMessage"));
      expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
    });

    and("User clicks on the drafts button", () => {
      defaultValidation();
    });

    then("the user sees the all drafts message page", async () => {
      await clickDraftTab(container);
    });

    and("select a message", () => {
      defaultValidation();
    });

    and("user sees the message subject and body of the message", () => {
      defaultValidation();
    });

    and(
      "users are able to  view the attachments if any present along with an option to download in the drafts message",
      () => {
        defaultValidation();
      }
    );

    and("User sees the Send Option in the respective message.", () => {
      defaultValidation();
    });

    and("user clicks on the send button", () => {
      defaultValidation();
    });

    then("the message is sent to the respective recipient", () => {
      defaultValidation();
    });

    and(
      "login to the receiver account with a valid username and password",
      async () => {
        defaultValidation();
      }
    );

    and("clicks on messaging in the  global header", async () => {
      cleanup();
      container = await renderMessagePage(mock);
    });

    and("clicks on Inbox", () => {
      defaultValidation();
    });

    then("User sees the message", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-23_STORY_EPP-6147- Verify if the user can discard the draft message", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal XXX URL", async () => {
      container = await renderLogin(container);
    });

    when(
      "a user is logged in to the application with a valid username and password",
      async () => {
        await doLogin(mock, container);
      }
    );

    and("user lands on the Dashboard  page", async () => {
      cleanup();
      await navigateToPatientPortalHome(mock);
    });

    and("user clicks on messaging in the global header", async () => {
      cleanup();
      container = await renderMessagePage(mock);
    });

    then("the User sees the all received message", async () => {
      await waitFor(() => container.getByText("titleNoSelectedMessage"));
      expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
    });

    and("User clicks on the drafts button", () => {
      defaultValidation();
    });

    then("the user sees the all drafts message page", async () => {
      await clickDraftTab(container);
    });

    and("select a message", () => {
      defaultValidation();
    });

    and("user sees the message subject and body of the message", () => {
      defaultValidation();
    });

    and(
      "users are able to  view the attachments if any present along with an option to download in the drafts message",
      () => {
        defaultValidation();
      }
    );

    and("User sees the Send Option in the respective message.", () => {
      defaultValidation();
    });

    and("user sees the cancel button", () => {
      defaultValidation();
    });

    and("user clicks on clicks on cancel message", () => {
      defaultValidation();
    });

    and("the message is discarded", async () => {
      defaultValidation();
    });
  });
});
