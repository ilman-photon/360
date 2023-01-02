import { fireEvent, waitFor, cleanup } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  doLogin,
  navigateToPatientPortalHome,
  renderLogin,
  createMatchMedia,
  navigateToPayMyBill,
  navigateToSummaryDetail,
  defaultValidation,
} from "../../__mocks__/commonSteps";
const useRouter = jest.spyOn(require("next/router"), "useRouter");

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint8/EPP-4332.feature"
);

defineFeature(feature, (test) => {
  let container;

  const mock = new MockAdapter(axios);
  const useRouter = jest.spyOn(require("next/router"), "useRouter");

  beforeEach(() => {
    window.matchMedia = createMatchMedia("1920px");
    useRouter.mockReturnValue({
      query: { activeTab: 0 },
      prefetch: jest.fn(),
      back: jest.fn(),
      push: jest.fn(),
      replace: jest.fn(),
      pathname: "/patient/pay-my-bill?activeTab=0",
    });
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

  const invoiceDetailInfo = async () => {
    await waitFor(() => {
      expect(container.getByText("balanceDue")).toBeInTheDocument();
      expect(container.getByText("totalCharges")).toBeInTheDocument();
      expect(container.getByText("totalAllowed")).toBeInTheDocument();
      expect(container.getByText("insurancePaid")).toBeInTheDocument();
      expect(container.getByText("patientPaid")).toBeInTheDocument();
      expect(container.getByText("description")).toBeInTheDocument();
      expect(container.getByText("providerName")).toBeInTheDocument();
    });
  };
  test("EPIC_EPP-55_STORY_EPP-4332 -To verify whether User navigates to the screen to view the list of open invoices", ({
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
          container.getByLabelText("Pay My Bill menu")
        ).toBeInTheDocument();
        fireEvent.click(container.getByLabelText("Pay My Bill menu"));
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
      "user lands on the screen to view the list open invoices",
      async () => {
        container = await navigateToPayMyBill(mock);
        // tableHeader();
      }
    );
  });
  test("EPIC_EPP-55_STORY_EPP-4332 -To verify whether User able to view the mentioned fields", ({
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
          container.getByLabelText("Pay My Bill menu")
        ).toBeInTheDocument();
        fireEvent.click(container.getByLabelText("Pay My Bill menu"));
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
      "user lands on the screen to view the list open invoices",
      async () => {
        container = await navigateToPayMyBill(mock);
        // tableHeader();
      }
    );

    when(
      "User clicks on the option to view the details of an open invoice",
      async () => {
        useRouter.mockReturnValue({
          query: { invoiceNumber: "124345456" },
          prefetch: jest.fn(),
          pathname: "/patient/pay-my-bill/summary-detail/124345456",
          back: jest.fn(),
          push: jest.fn(),
          replace: jest.fn(),
        });
        container = await navigateToSummaryDetail(mock);
      }
    );

    then("User should be able to view the following fields", () => {
      invoiceDetailInfo();
    });
  });

  test("EPIC_EPP-55_STORY_EPP-5219 -To verify whether User able to view an option to pay the outstanding amount", ({
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
          container.getByLabelText("Pay My Bill menu")
        ).toBeInTheDocument();
        fireEvent.click(container.getByLabelText("Pay My Bill menu"));
        expect(
          container.getAllByText("View & Pay Open Invoices")[0]
        ).toBeInTheDocument();
        expect(
          container.getAllByText("View & Pay Open Invoices")[0]
        ).toBeVisible();
      }
    );

    and("user clicks on the ‘View & Pay Open Invoices'  option", () => {
      fireEvent.click(container.getAllByText("View & Pay Open Invoices")[0]);
    });

    then(
      "user lands on the screen to view the list open invoices",
      async () => {
        container = await navigateToPayMyBill(mock);
        // tableHeader();
      }
    );

    when(
      "User clicks on the option to view the details of an open invoice",
      async () => {
        useRouter.mockReturnValue({
          query: { invoiceNumber: "124345456" },
          prefetch: jest.fn(),
          pathname: "/patient/pay-my-bill/summary-detail/124345456",
          back: jest.fn(),
          push: jest.fn(),
          replace: jest.fn(),
        });
        container = await navigateToSummaryDetail(mock);
      }
    );

    then("User should be able to view the following fields", (table) => {
      invoiceDetailInfo();
    });

    and(
      "User should be able to view an option to pay the outstanding amount",
      () => {
        defaultValidation();
      }
    );
  });
});
