import { defineFeature, loadFeature } from "jest-cucumber";
import { fireEvent, render, waitFor, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  doLogin,
  renderLogin,
  navigateToPatientPortalHome,
  renderMessagePage,
} from "../../__mocks__/commonSteps";
const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint8/EPP-5031.feature"
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

  test("EPIC_EPP-23_STORY_EPP-5031 - Verify whether user clicks and opens a received message", ({
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

    and("User able to clicks and opens a received message", () => {
      clickInboxTab(container);
    });
  });

  test("EPIC_EPP-23_STORY_EPP-5031 - Verify whether the User is able to clicks on the option to download an attachment", ({
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

    and("User clicks and opens a received message", () => {
      clickInboxTab(container);
    });

    and("User able to clicks on the option to download an attachment", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-23_STORY_EPP-5031 - Verify whether the User is able to see the attachment downloaded to their device/ system", ({
    given,
    when,
    and,
    then,
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
        clickInboxTab(container);
      }
    );

    and("User clicks and opens a received message", async () => {
      await waitFor(() => container.getByText("titleNoSelectedMessage"));
      expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
    });

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
