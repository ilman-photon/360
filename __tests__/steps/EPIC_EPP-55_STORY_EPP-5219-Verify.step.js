import { fireEvent, cleanup } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  doLogin,
  navigateToPatientPortalHome,
  renderLogin,
  createMatchMedia,
  defaultValidation,
} from "../../__mocks__/commonSteps";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint8/EPP-5219.feature"
);

defineFeature(feature, (test) => {
  let container;

  const mock = new MockAdapter(axios);

  beforeEach(() => {
    window.matchMedia = createMatchMedia("1920px");
  });
  afterEach(() => {
    mock.reset();
  });
  test("EPIC_EPP-55_STORY_EPP-5219 -To verify whether User navigates to the screen to view the list of open invoices", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal url", async () => {
      container = await renderLogin();
    });

    when("user is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    and("user lands on the dashboard screen", async () => {
      cleanup();
      container = await navigateToPatientPortalHome();
    });

    and(
      "user views the ‘View & Pay Open Invoices' sub-menu under the ‘Pay My Bill’ menu present as part of the global header",
      () => {
        expect(
          container.getByLabelText("Pay My Bill dropdown")
        ).toBeInTheDocument();
        fireEvent.click(container.getByLabelText("Pay My Bill dropdown"));
        expect(
          container.getByText("View & Pay Open Invoices")
        ).toBeInTheDocument();
        expect(container.getByText("View & Pay Open Invoices")).toBeVisible();
      }
    );

    and("user clicks on the ‘View & Pay Open Invoices'  option", () => {
      fireEvent.click(container.getByText("View & Pay Open Invoices"));
    });

    then("user lands on the screen to view the list open invoices", () => {
      defaultValidation();
    });
  });
  test("EPIC_EPP-55_STORY_EPP-5219 -To verify whether User able to view the list of open invoices ordered by recent ones at top", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal url", async () => {
      container = await renderLogin();
    });

    when("user is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    and("user lands on the dashboard screen", async () => {
      cleanup();
      container = await navigateToPatientPortalHome();
    });

    and(
      "user views the ‘View & Pay Open Invoices' sub-menu under the ‘Pay My Bill’ menu present as part of the global header",
      () => {
        expect(
          container.getByLabelText("Pay My Bill dropdown")
        ).toBeInTheDocument();
        fireEvent.click(container.getByLabelText("Pay My Bill dropdown"));
        expect(
          container.getByText("View & Pay Open Invoices")
        ).toBeInTheDocument();
        expect(container.getByText("View & Pay Open Invoices")).toBeVisible();
      }
    );

    and("user clicks on the ‘View & Pay Open Invoices'  option", () => {
      fireEvent.click(container.getByText("View & Pay Open Invoices"));
    });

    when("user lands on the screen to view the list open invoices", () => {
      defaultValidation();
    });

    then(
      "User should be able to view the list of open invoices ordered by recent ones at top",
      () => {
        defaultValidation();
      }
    );
  });
  test("EPIC_EPP-55_STORY_EPP-5219 -To verify whether User able to view the “Invoice Number” against each invoice", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal url", async () => {
      container = await renderLogin();
    });

    when("user is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    and("user lands on the dashboard screen", async () => {
      cleanup();
      container = await navigateToPatientPortalHome();
    });

    and(
      "user views the ‘View & Pay Open Invoices' sub-menu under the ‘Pay My Bill’ menu present as part of the global header",
      () => {
        expect(
          container.getByLabelText("Pay My Bill dropdown")
        ).toBeInTheDocument();
        fireEvent.click(container.getByLabelText("Pay My Bill dropdown"));
        expect(
          container.getByText("View & Pay Open Invoices")
        ).toBeInTheDocument();
        expect(container.getByText("View & Pay Open Invoices")).toBeVisible();
      }
    );

    and("user clicks on the ‘View & Pay Open Invoices'  option", () => {
      fireEvent.click(container.getByText("View & Pay Open Invoices"));
    });

    when("user lands on the screen to view the list open invoices", () => {
      defaultValidation();
    });

    then(
      "User should be able to view the list of open invoices ordered by recent ones at top",
      () => {
        defaultValidation();
      }
    );

    and(
      "User should be able to view the “Invoice Number” against each invoice",
      () => {
        defaultValidation();
      }
    );
  });
  test("EPIC_EPP-55_STORY_EPP-5219 -To verify whether User able to view the “Date of Service” against each invoice", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal url", async () => {
      container = await renderLogin();
    });

    when("user is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    and("user lands on the dashboard screen", async () => {
      cleanup();
      container = await navigateToPatientPortalHome();
    });

    and(
      "user views the ‘View & Pay Open Invoices' sub-menu under the ‘Pay My Bill’ menu present as part of the global header",
      () => {
        expect(
          container.getByLabelText("Pay My Bill dropdown")
        ).toBeInTheDocument();
        fireEvent.click(container.getByLabelText("Pay My Bill dropdown"));
        expect(
          container.getByText("View & Pay Open Invoices")
        ).toBeInTheDocument();
        expect(container.getByText("View & Pay Open Invoices")).toBeVisible();
      }
    );

    and("user clicks on the ‘View & Pay Open Invoices'  option", () => {
      fireEvent.click(container.getByText("View & Pay Open Invoices"));
    });

    when("user lands on the screen to view the list open invoices", () => {
      defaultValidation();
    });

    then(
      "User should be able to view the list of open invoices ordered by recent ones at top",
      () => {
        defaultValidation();
      }
    );

    and(
      "User should be able to view the “Date of Service” against each invoice",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-55_STORY_EPP-5219 -To verify whether User able to view the “Account Credit Balance” against each invoice", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal url", async () => {
      container = await renderLogin();
    });

    when("user is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    and("user lands on the dashboard screen", async () => {
      cleanup();
      container = await navigateToPatientPortalHome();
    });

    and(
      "user views the ‘View & Pay Open Invoices' sub-menu under the ‘Pay My Bill’ menu present as part of the global header",
      () => {
        expect(
          container.getByLabelText("Pay My Bill dropdown")
        ).toBeInTheDocument();
        fireEvent.click(container.getByLabelText("Pay My Bill dropdown"));
        expect(
          container.getByText("View & Pay Open Invoices")
        ).toBeInTheDocument();
        expect(container.getByText("View & Pay Open Invoices")).toBeVisible();
      }
    );

    and("user clicks on the ‘View & Pay Open Invoices'  option", () => {
      fireEvent.click(container.getByText("View & Pay Open Invoices"));
    });

    when("user lands on the screen to view the list open invoices", () => {
      defaultValidation();
    });

    then(
      "User should be able to view the list of open invoices ordered by recent ones at top",
      () => {
        defaultValidation();
      }
    );

    and(
      "User should be able to view the “Account Credit Balance” against each invoice",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-55_STORY_EPP-5219 -To verify whether User able to view the “Patient Due” against each invoice", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal url", async () => {
      container = await renderLogin();
    });

    when("user is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    and("user lands on the dashboard screen", async () => {
      cleanup();
      container = await navigateToPatientPortalHome();
    });

    and(
      "user views the ‘View & Pay Open Invoices' sub-menu under the ‘Pay My Bill’ menu present as part of the global header",
      () => {
        expect(
          container.getByLabelText("Pay My Bill dropdown")
        ).toBeInTheDocument();
        fireEvent.click(container.getByLabelText("Pay My Bill dropdown"));
        expect(
          container.getByText("View & Pay Open Invoices")
        ).toBeInTheDocument();
        expect(container.getByText("View & Pay Open Invoices")).toBeVisible();
      }
    );

    and("user clicks on the ‘View & Pay Open Invoices'  option", () => {
      fireEvent.click(container.getByText("View & Pay Open Invoices"));
    });

    when("user lands on the screen to view the list open invoices", () => {
      defaultValidation();
    });

    then(
      "User should be able to view the list of open invoices ordered by recent ones at top",
      () => {
        defaultValidation();
      }
    );

    and(
      "User should be able to view the “Patient Due” against each invoice",
      () => {
        defaultValidation();
      }
    );
  });
  test("EPIC_EPP-55_STORY_EPP-5219 -To verify whether User able to see an option to view details of each open invoice", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal url", async () => {
      container = await renderLogin();
    });

    when("user is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    and("user lands on the dashboard screen", async () => {
      cleanup();
      container = await navigateToPatientPortalHome();
    });

    and(
      "user views the ‘View & Pay Open Invoices' sub-menu under the ‘Pay My Bill’ menu present as part of the global header",
      () => {
        expect(
          container.getByLabelText("Pay My Bill dropdown")
        ).toBeInTheDocument();
        fireEvent.click(container.getByLabelText("Pay My Bill dropdown"));
        expect(
          container.getByText("View & Pay Open Invoices")
        ).toBeInTheDocument();
        expect(container.getByText("View & Pay Open Invoices")).toBeVisible();
      }
    );

    and("user clicks on the ‘View & Pay Open Invoices'  option", () => {
      fireEvent.click(container.getByText("View & Pay Open Invoices"));
    });

    when("user lands on the screen to view the list open invoices", () => {
      defaultValidation();
    });

    then(
      "User should be able to view the list of open invoices ordered by recent ones at top",
      () => {
        defaultValidation();
      }
    );

    and(
      "User should be able to see an option to view details of each open invoice",
      () => {
        defaultValidation();
      }
    );
  });
  test("EPIC_EPP-55_STORY_EPP-5219 -To verify whether User able to view the option to pay the outstanding amount against each open invoice", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal url", async () => {
      container = await renderLogin();
    });

    when("user is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    and("user lands on the dashboard screen", async () => {
      cleanup();
      container = await navigateToPatientPortalHome();
    });

    and(
      "user views the ‘View & Pay Open Invoices' sub-menu under the ‘Pay My Bill’ menu present as part of the global header",
      () => {
        expect(
          container.getByLabelText("Pay My Bill dropdown")
        ).toBeInTheDocument();
        fireEvent.click(container.getByLabelText("Pay My Bill dropdown"));
        expect(
          container.getByText("View & Pay Open Invoices")
        ).toBeInTheDocument();
        expect(container.getByText("View & Pay Open Invoices")).toBeVisible();
      }
    );

    and("user clicks on the ‘View & Pay Open Invoices'  option", () => {
      fireEvent.click(container.getByText("View & Pay Open Invoices"));
    });

    when("user lands on the screen to view the list open invoices", () => {
      defaultValidation();
    });

    then(
      "User should be able to view the list of open invoices ordered by recent ones at top",
      () => {
        defaultValidation();
      }
    );

    and(
      "User should be able to view the option to pay the outstanding amount against each open invoice",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-55_STORY_EPP-5219 -To verify whether User able to view the message “You do not have any open invoices.”", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal url", async () => {
      container = await renderLogin();
    });

    when("user is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    and("user lands on the dashboard screen", async () => {
      cleanup();
      container = await navigateToPatientPortalHome();
    });

    and(
      "user views the ‘View & Pay Open Invoices' sub-menu under the ‘Pay My Bill’ menu present as part of the global header",
      () => {
        expect(
          container.getByLabelText("Pay My Bill dropdown")
        ).toBeInTheDocument();
        fireEvent.click(container.getByLabelText("Pay My Bill dropdown"));
        expect(
          container.getByText("View & Pay Open Invoices")
        ).toBeInTheDocument();
        expect(container.getByText("View & Pay Open Invoices")).toBeVisible();
      }
    );

    and("user clicks on the ‘View & Pay Open Invoices'  option", () => {
      fireEvent.click(container.getByText("View & Pay Open Invoices"));
    });

    then(
      "user should able to view the message “You do not have any open invoices.” when there are no open invoices for the user",
      () => {
        defaultValidation();
      }
    );
  });
});
