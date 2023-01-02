import { fireEvent, waitFor } from "@testing-library/react";
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
  "./__tests__/feature/Patient Portal/Sprint8/EPP-4970.feature"
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
  test("EPIC_EPP-54_STORY_EPP-4970 - Verify User lands on the screen to view the list open invoices", ({
    given,
    and,
    when,
    then,
  }) => {
    given("User launch Patient Portal url", async () => {
      container = await renderLogin();
    });

    and("User is logged into the portal", async () => {
      await doLogin(mock, container);
    });

    and("User lands on the dashboard screen", async () => {
      container = await navigateToPatientPortalHome();
    });

    and(
      "User views the ‘Invoice History' sub-menu under the ‘Pay My Bill’ menu present as part of the global header",
      () => {
        expect(
          container.getByLabelText("Pay My Bill menu")
        ).toBeInTheDocument();
        fireEvent.click(container.getByLabelText("Pay My Bill menu"));
        expect(
          container.getByText("View & Pay Open Invoices")
        ).toBeInTheDocument();
        expect(container.getByText("View & Pay Open Invoices")).toBeVisible();
      }
    );

    when("User clicks on the ‘View & Pay Open Invoices'  option", () => {
      fireEvent.click(container.getByText("View & Pay Open Invoices"));
    });

    then("User lands on the screen to view the list open invoices", () => {
      defaultValidation();
    });
  });
});
