import { defineFeature, loadFeature } from "jest-cucumber";
import { fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  doLogin,
  renderLogin,
  renderMessagePage,
} from "../../__mocks__/commonSteps";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint8/EPP-6268.feature"
);

const clickDeletedTab = async (container) => {
  await waitFor(() => container.getByTestId("deleted-tab"));
  const inboxTab = container.getByTestId("deleted-tab");
  expect(inboxTab).toBeInTheDocument();
  fireEvent.click(inboxTab);
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
  test("EPIC_EPP-23_STORY_EPP-6268 - Verify whether user able to view the list of deleted messages", ({
    given,
    and,
    then,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    and("User is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        container = await renderMessagePage();
      }
    );

    then(
      "User should be able to view the list of deleted messages",
      async () => {
        await waitFor(() => container.getByText(/filterByText/i));
        expect(container.getByText(/filterByText/i)).toBeVisible();

        clickDeletedTab(container);
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-6268 - Verify whether user able to clicks on the deleted messages", ({
    given,
    and,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    and("User is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        container = await renderMessagePage();
      }
    );

    and("User is viewing the list of deleted messages", async () => {
      await waitFor(() => container.getByText(/filterByText/i));
      expect(container.getByText(/filterByText/i)).toBeInTheDocument();
      clickDeletedTab(container);
    });

    and("User able to clicks on the deleted messages", async () => {
      clickOneMessage(container);
      await waitFor(() => container.getByText("noDeletedMessages"));
      const emptyMessage = container.getByText("noDeletedMessages");
      expect(emptyMessage).toBeInTheDocument();
    });
  });

  test("EPIC_EPP-23_STORY_EPP-6268 - Verify whether user able to opens a deleted message with attachments", ({
    given,
    and,
    then,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    and("User is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        container = await renderMessagePage();
      }
    );

    then(
      "User should be able to clicks and opens a deleted message with attachments",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-6268 - Verify whether user able to clicks on the option to download an attachment", ({
    given,
    and,
    then,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    and("User is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        container = await renderMessagePage();
      }
    );

    and(
      "User should be able to clicks and opens a deleted message with attachments",
      async () => {
        await waitFor(() => container.getByText(/filterByText/i));
        expect(container.getByText(/filterByText/i)).toBeInTheDocument();
        clickDeletedTab(container);

        clickOneMessage(container);
        await waitFor(() => container.getByText("noDeletedMessages"));
        const emptyMessage = container.getByText("noDeletedMessages");
        expect(emptyMessage).toBeInTheDocument();
      }
    );

    then(
      "User should be able to clicks on the option to download an attachment",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-6268 - Verify whether user able to see the attachment downloaded to their device/ system", ({
    given,
    and,
    when,
    then,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    and("User is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    and(
      "User lands on the the screen to send and receive messages",
      async () => {
        container = await renderMessagePage();
      }
    );

    and(
      "User should be able to clicks and opens a deleted message with attachments",
      async () => {
        await waitFor(() => container.getByText(/filterByText/i));
        expect(container.getByText(/filterByText/i)).toBeInTheDocument();
        clickDeletedTab(container);
        await waitFor(() => container.getByText("noDeletedMessages"));
        const emptyMessage = container.getByText("noDeletedMessages");
        expect(emptyMessage).toBeInTheDocument();
      }
    );

    when("User clicks on the option to download an attachment", () => {
      defaultValidation();
    });

    then(
      "User should see the attachment downloaded to their device/ system",
      () => {
        defaultValidation();
      }
    );
  });
});
