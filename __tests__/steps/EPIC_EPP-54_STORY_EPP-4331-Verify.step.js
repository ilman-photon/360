import { fireEvent, waitFor } from "@testing-library/react";
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
  "./__tests__/feature/Patient Portal/Sprint8/EPP-4331.feature"
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
    console.log(mock.handlers.get);
    mock.reset();
  });
  test("EPIC_EPP-54_STORY_EPP-4331 - Verify User should be able to see the invoice downloaded as a pdf document to their local system/ devices", ({
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
          container.getByLabelText("Invoice History menu")
        ).toBeInTheDocument();
        expect(container.getByLabelText("Invoice History menu")).toBeVisible();
      }
    );

    when("User clicks on the ‘Invoice History'  option", () => {
      fireEvent.click(container.getByLabelText("Invoice History menu"));
    });

    and("User should be able to see the previous list invoices", async () => {
      container = await navigateToPayMyBill(mock);
      fireEvent.click(container.getByTestId("tab-invoice-history"));
    });

    and("User view the details of each invoice", async () => {
      useRouter.mockReturnValue({
        query: { invoiceNumber: "124345456" },
        prefetch: jest.fn(),
        pathname: "/patient/pay-my-bill/summary-detail/124345456",
        back: jest.fn(),
        push: jest.fn(),
        replace: jest.fn(),
      });
      container = await navigateToSummaryDetail(mock);
    });

    when("User clicks on the option to download the invoice", async () => {
      await waitFor(() => container.getByTestId("FileDownloadOutlinedIcon"));
      fireEvent.click(container.getByTestId("FileDownloadOutlinedIcon"));
    });

    then(
      "User should be able to see the invoice downloaded as a pdf document to their local system/ devices",
      () => {
        defaultValidation();
      }
    );
  });
});
