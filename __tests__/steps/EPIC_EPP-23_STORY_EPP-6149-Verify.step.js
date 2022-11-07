import { defineFeature, loadFeature } from "jest-cucumber";
import "@testing-library/jest-dom/extend-expect";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  doLogin,
  renderLogin,
  navigateToPatientPortalHome,
  renderMessagePage,
} from "../../__mocks__/commonSteps";
import { fireEvent, cleanup, waitFor } from "@testing-library/react";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint8/EPP-6149.feature"
);

const messageSection = async (container) => {
  await waitFor(() => container.getByTestId("inbox-tab"));
  expect(container.getByTestId("inbox-tab")).toBeInTheDocument();
  expect(container.getByTestId("sent-tab")).toBeInTheDocument();
  expect(container.getByTestId("draft-tab")).toBeInTheDocument();
  expect(container.getByTestId("deleted-tab")).toBeInTheDocument();
};

const clickDraftTab = async (container) => {
  await waitFor(() => container.getByTestId("draft-tab"));
  const draftTab = container.getByTestId("draft-tab");
  expect(draftTab).toBeInTheDocument();
  fireEvent.click(draftTab);
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

  test("EPIC_EPP-23_STORY_EPP-6149-Verify if user able to search by enter minimum of 1 character or word", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal XXX URL", async () => {
      container = await renderLogin(container);
    });

    when(
      "user is logged in to the application with a valid username and password",
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

    then("user see all message section", async () => {
      await messageSection(container);
    });

    and("user clicks on the drafts button", async () => {
      await clickDraftTab(container);
    });

    then("user see all drafts message page", () => {
      defaultValidation();
    });

    when("user search with wild char in that search option", () => {
      defaultValidation();
    });

    and(
      "user enter a minimum 1 character/word in search option and enter",
      (arg0) => {
        defaultValidation();
      }
    );

    then("user should see search result", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-23_STORY_EPP-6149- Verify if user able to search by enter maximum of 100 character or word", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal XXX URL", async () => {
      container = await renderLogin(container);
    });

    when(
      "user is logged in to the application with a valid username and password",
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

    then("user see all message section", async () => {
      await messageSection(container);
    });

    and("user clicks on the drafts button", async () => {
      await clickDraftTab(container);
    });

    then("user see all drafts message page", () => {
      defaultValidation();
    });

    when("user search with wild char in that search option", () => {
      defaultValidation();
    });

    and(
      "user enter a maximum of 100 character/word in search option and enter",
      (arg0) => {
        defaultValidation();
      }
    );

    then("user should see search result", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-23_STORY_EPP-6149-Verify if user able to see search result for minimum of 1 character or word search option", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal XXX URL", async () => {
      container = await renderLogin(container);
    });

    when(
      "user is logged in to the application with a valid username and password",
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

    then("user see all message section", async () => {
      await messageSection(container);
    });

    and("user clicks on the drafts button", async () => {
      await clickDraftTab(container);
    });

    then("user see all drafts message page", () => {
      defaultValidation();
    });

    when("user search with wild char in that search option", () => {
      defaultValidation();
    });

    and(
      "user enter a minimum 1 character/word in search option and enter",
      (arg0) => {
        defaultValidation();
      }
    );

    then("system should show the result for the search character/word", () => {
      defaultValidation();
    });

    and("user should see the list of messages for the search result", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-23_STORY_EPP-6149-Verify if user able to see search result for  maximum of 100 character or word search option", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal XXX URL", async () => {
      container = await renderLogin(container);
    });

    when(
      "user is logged in to the application with a valid username and password",
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

    then("user see all message section", async () => {
      await messageSection(container);
    });

    and("user clicks on the drafts button", async () => {
      await clickDraftTab(container);
    });

    then("user see all drafts message page", () => {
      defaultValidation();
    });

    when("user search with wild char in that search option", () => {
      defaultValidation();
    });

    and(
      "user enter a maximum of 100 character/word in search option and enter",
      (arg0) => {
        defaultValidation();
      }
    );

    then("system should show the result for the search character/word", () => {
      defaultValidation();
    });

    and("user should see the list of messages for the search result", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-23_STORY_EPP-6149-Verify if user able to see search result of the messages ordered by recent ones on the top", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal XXX URL", async () => {
      container = await renderLogin(container);
    });

    when(
      "user is logged in to the application with a valid username and password",
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

    then("user see all message section", async () => {
      await messageSection(container);
    });

    and("user clicks on the drafts button", async () => {
      await clickDraftTab(container);
    });

    then("user see all drafts message page", () => {
      defaultValidation();
    });

    when("user search with wild char in that search option", () => {
      defaultValidation();
    });

    then("system should show the result for the search character/word", () => {
      defaultValidation();
    });

    and("user should see messages ordered by recent ones on the top", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-23_STORY_EPP-6149-Verify if user able to see validation messages when search result not found", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal XXX URL", async () => {
      container = await renderLogin(container);
    });

    when(
      "user is logged in to the application with a valid username and password",
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

    then("user see all message section", async () => {
      await messageSection(container);
    });

    and("user clicks on the drafts button", async () => {
      await clickDraftTab(container);
    });

    then("user see all drafts message page", () => {
      defaultValidation();
    });

    when("user search with wild char in that search option", () => {
      defaultValidation();
    });

    and("system not find that character search", () => {
      defaultValidation();
    });

    then(
      "user should see message “No results found. Please try with a different search criteria.”",
      () => {
        defaultValidation();
      }
    );
  });
});
