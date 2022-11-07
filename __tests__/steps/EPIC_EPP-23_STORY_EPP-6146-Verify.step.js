import { defineFeature, loadFeature } from "jest-cucumber";
import { fireEvent, render, waitFor, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  createMatchMedia,
  doLogin,
  renderLogin,
  renderMessagePage,
  navigateToPatientPortalHome,
} from "../../__mocks__/commonSteps";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint8/EPP-6146.feature"
);

const seeNotSelected = async (container) => {
  await waitFor(() => container.getByText("titleNoSelectedMessage"));
  expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
};

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

defineFeature(feature, (test) => {
  let container;
  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };
  const mock = new MockAdapter(axios);
  afterEach(() => {
    mock.reset();
  });

  test("EPIC_EPP-23_STORY_EPP-6146- Verify if the user can view the receiver’s detail (Provider’s name) in the drafts message", ({
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

    and("user lands on the Dashboard  page", () => {
      cleanup();
      navigateToPatientPortalHome();
    });

    and("user clicks on messaging in the global header", async () => {
      cleanup();
      container = await renderMessagePage();
    });

    then("the User sees the all received message", () => {
      seeNotSelected(container);
    });

    and("User clicks on the drafts button", () => {
      clickDraftTab(container);
    });

    then("the user sees the all drafts message page", () => {
      defaultValidation();
    });

    and(
      "user able to view the receiver’s detail (Provider’s name ) in the drafts message",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-6146- Verify if the user can view the message body in the drafts message", ({
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

    and("user lands on the Dashboard  page", () => {
      cleanup();
      navigateToPatientPortalHome();
    });

    and("user clicks on messaging in the global header", async () => {
      cleanup();
      container = await renderMessagePage();
    });

    then("the User sees the all received message", () => {
      seeNotSelected(container);
    });

    and("User clicks on the drafts button", () => {
      clickDraftTab(container);
    });

    then("the user sees the all drafts message page", () => {
      defaultValidation();
    });

    and("select a message", () => {
      clickOneMessage(container);
    });

    and(
      "user able to view the receiver’s detail (Provider’s name ) in the drafts message",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-6146-Verify if the user can view the attachments if any present along with an option to download in the drafts message", ({
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

    and("user lands on the Dashboard  page", () => {
      cleanup();
      navigateToPatientPortalHome();
    });

    and("user clicks on messaging in the global header", async () => {
      cleanup();
      container = await renderMessagePage();
    });

    then("the User sees the all received message", () => {
      seeNotSelected(container);
    });

    and("User clicks on the drafts button", () => {
      clickDraftTab(container);
    });

    then("the user sees the all drafts message page", () => {
      defaultValidation();
    });

    and("select a message", () => {
      clickOneMessage(container);
    });

    and(
      "user able to  view the attachments if any present along with an option to download in the drafts message",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-6146- Verify if the user send  option in the drafts message", ({
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

    and("user lands on the Dashboard  page", () => {
      cleanup();
      navigateToPatientPortalHome();
    });

    and("user clicks on messaging in the global header", async () => {
      cleanup();
      container = await renderMessagePage();
    });

    then("the User sees the all received message", () => {
      seeNotSelected(container);
    });

    and("User clicks on the drafts button", () => {
      clickDraftTab(container);
    });

    then("the user sees the all drafts message page", () => {
      defaultValidation();
    });

    and("select a message", () => {
      clickOneMessage(container);
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

  test("EPIC_EPP-23_STORY_EPP-6146- Verify if the user can able to  send  a message from the drafts message", ({
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

    and("user lands on the Dashboard  page", () => {
      cleanup();
      navigateToPatientPortalHome();
    });

    and("user clicks on messaging in the global header", async () => {
      cleanup();
      container = await renderMessagePage();
    });

    then("the User sees the all received message", () => {
      seeNotSelected(container);
    });

    and("User clicks on the drafts button", () => {
      clickDraftTab(container);
    });

    then("the user sees the all drafts message page", () => {
      defaultValidation();
    });

    and("select a message", () => {
      clickOneMessage(container);
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

  test("EPIC_EPP-23_STORY_EPP-6146-Verify if the user revives a message sent from the drafts.", ({
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

    and("user lands on the Dashboard  page", () => {
      cleanup();
      navigateToPatientPortalHome();
    });

    and("user clicks on messaging in the global header", async () => {
      cleanup();
      container = await renderMessagePage();
    });

    then("the User sees the all received message", () => {
      seeNotSelected(container);
    });

    and("User clicks on the drafts button", () => {
      clickDraftTab(container);
    });

    then("the user sees the all drafts message page", () => {
      defaultValidation();
    });

    and("select a message", () => {
      clickOneMessage(container);
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
      () => {
        defaultValidation();
      }
    );

    and("clicks on messaging in the  global header", async () => {
      defaultValidation();
    });

    and("clicks on Inbox", () => {
      defaultValidation();
    });

    then("User sees the message", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-23_STORY_EPP-6146- Verify if the user can discard the draft message", ({
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

    and("user lands on the Dashboard  page", () => {
      cleanup();
      navigateToPatientPortalHome();
    });

    and("user clicks on messaging in the global header", async () => {
      cleanup();
      container = await renderMessagePage();
    });

    then("the User sees the all received message", () => {
      seeNotSelected(container);
    });

    and("User clicks on the drafts button", () => {
      clickDraftTab(container);
    });

    then("the user sees the all drafts message page", () => {
      defaultValidation();
    });

    and("select a message", () => {
      clickOneMessage(container);
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

  test("EPIC_EPP-23_STORY_EPP-6146- Verify if the Drafts button is enabled for the user", ({
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

    and("user lands on the Dashboard  page", () => {
      cleanup();
      navigateToPatientPortalHome();
    });

    and("user clicks on messaging in the global header", async () => {
      cleanup();
      container = await renderMessagePage();
    });

    then("the User sees the all received message", () => {
      seeNotSelected(container);
    });

    and("User clicks on the drafts button", () => {
      clickDraftTab(container);
    });

    then("the user sees the all drafts message page", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-23_STORY_EPP-6146- Verify if the user can view the subject in the drafts messages", ({
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

    and("user lands on the Dashboard  page", () => {
      cleanup();
      navigateToPatientPortalHome();
    });

    and("user clicks on messaging in the global header", async () => {
      cleanup();
      container = await renderMessagePage();
    });

    then("the User sees the all received message", () => {
      seeNotSelected(container);
    });

    and("User clicks on the drafts button", () => {
      clickDraftTab(container);
    });

    then("the user sees the all drafts message page", () => {
      defaultValidation();
    });

    and("user able to view the subject in the drafts message", () => {
      defaultValidation();
    });
  });
});
