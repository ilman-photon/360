import { fireEvent, waitFor, cleanup } from "@testing-library/react";
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
  "./__tests__/feature/Patient Portal/Sprint8/EPP-4333.feature"
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

  const tableHeader = async () => {
    await waitFor(() => {
      expect(container.getByText("Invoice Number")).toBeInTheDocument();
      expect(container.getByText("Date of Service")).toBeInTheDocument();
      expect(container.getByText("Provider")).toBeInTheDocument();
      expect(container.getByText("Account Credit Balance")).toBeInTheDocument();
      expect(container.getByText("Patient Due")).toBeInTheDocument();
    });
  };
  test("EPIC_EPP-57_STORY_EPP-4333 -To verify whether User navigates to the screen to view the list of open invoices", ({
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
      // tableHeader();
    });
  });

  test("EPIC_EPP-57_STORY_EPP-4333-Verify if user  able to click on the pay option it redirect to 3rd party payment vendor", ({
    given,
    when,
    then,
    and,
  }) => {
    given("user launch Patient Portal url", async () => {
      container = await renderLogin();
    });

    when("user is logged into the application", async () => {
      await doLogin(mock, container);
    });

    then("user lands on the dashboard", async () => {
      cleanup();
      container = await navigateToPatientPortalHome();
    });

    and("user navigated to appointment screen", () => {
      defaultValidation();
    });

    then("user schedules  appointment for Ophthalmology", () => {
      defaultValidation();
    });

    and("user should see option to pay for the appointment scheduled", () => {
      defaultValidation();
    });

    when("user click on the payment option", () => {
      defaultValidation();
    });

    then(/^user redirect to (\d+)rd party payment vendor$/, (arg0) => {});
  });

  test("EPIC_EPP-57_STORY_EPP-4333 - Verify if user get payment status either success or failure", ({
    given,
    when,
    then,
    and,
  }) => {
    given("user launch Patient Portal url", async () => {
      container = await renderLogin();
    });

    when("user is logged into the application", async () => {
      await doLogin(mock, container);
    });

    then("user lands on the dashboard", async () => {
      cleanup();
      container = await navigateToPatientPortalHome();
    });

    and("user navigated to appointment screen", () => {
      defaultValidation();
    });

    then("user schedules  appointment for Ophthalmology", () => {
      defaultValidation();
    });

    and("user should see option to pay for the appointment scheduled", () => {
      defaultValidation();
    });

    when("user click on the payment option", () => {
      defaultValidation();
    });

    then(
      /^user should fill the required detail for payment \(managed by the (\d+)rd party payment vendor\)$/,
      (arg0) => {}
    );

    and(
      "user should get update on payment status either sucesss or failure",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-57_STORY_EPP-4333 - verify if System should update the invoices accordingly", ({
    given,
    when,
    then,
    and,
  }) => {
    given("user launch Patient Portal url", async () => {
      container = await renderLogin();
    });

    when("user is logged into the application", async () => {
      await doLogin(mock, container);
    });

    then("user lands on the dashboard", async () => {
      cleanup();
      container = await navigateToPatientPortalHome();
    });

    and("user navigated to appointment screen", () => {
      defaultValidation();
    });

    then("user schedules  appointment for Ophthalmology", () => {
      defaultValidation();
    });

    and("user should see option to pay for the appointment scheduled", () => {
      defaultValidation();
    });

    when("user click on the payment option", () => {
      defaultValidation();
    });

    then(
      /^user should fill the required detail for payment \(managed by the (\d+)rd party payment vendor$/,
      (arg0) => {}
    );

    then(
      /^(\d+)rd party vender will update success message when payment is sucessfully completed$/,
      (arg0) => {}
    );

    and("user should view message“Success! Payment complete.”", () => {
      defaultValidation();
    });

    then("System should update the invoices", () => {
      defaultValidation();
    });
  });
});
