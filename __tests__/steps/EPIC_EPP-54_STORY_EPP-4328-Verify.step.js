import { fireEvent, render, waitFor } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  doLogin,
  navigateToPatientPortalHome,
  renderLogin,
  createMatchMedia,
  navigateToPayMyBill,
  defaultValidation,
} from "../../__mocks__/commonSteps";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint8/EPP-4328.feature"
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

  test("EPIC_EPP-54_STORY_EPP-4328 - Verify whether the user is able to navigate the Dashboard page", ({
    given,
    when,
    and,
  }) => {
    given(
      "user launch the browser and enter the patient portal url",
      async () => {
        container = await renderLogin();
      }
    );

    when("user enter valid username or phone number and password", async () => {
      await doLogin(mock, container);
    });

    and("user click on Sign in button.", () => {
      defaultValidation();
    });

    and("user should navigates to the dashboard page", async () => {
      container = await navigateToPatientPortalHome();
    });
  });

  test("EPIC_EPP-54_STORY_EPP-4328 - Verify whether the user is able to navigate the Pay My Bill menu option.", ({
    given,
    when,
    and,
  }) => {
    given(
      "user launch the browser and enter the patient portal url",
      async () => {
        container = await renderLogin();
      }
    );

    when("user enter valid username or phone number and password", async () => {
      await doLogin(mock, container);
    });

    and("user click on Sign in button.", () => {
      defaultValidation();
    });

    and("user lands the dashboard page", async () => {
      container = await navigateToPatientPortalHome();
    });

    and(
      /^user should navigates to (.*) menu part of the global header$/,
      (arg0) => {
        expect(
          container.getByLabelText("Pay My Bill dropdown")
        ).toBeInTheDocument();
      }
    );

    and(/^user should see the (.*) menu$/, async (arg0) => {
      fireEvent.click(container.getByLabelText("Pay My Bill dropdown"));
    });
  });

  test("EPIC_EPP-54_STORY_EPP-4328 - Verify whether the user is able to view the Invoice History submenu option in Pay My Bill main menu", ({
    given,
    when,
    and,
    then,
  }) => {
    given(
      "user launch the browser and enter the patient portal url",
      async () => {
        container = await renderLogin();
      }
    );

    when("user enter valid username or phone number and password", async () => {
      await doLogin(mock, container);
    });

    and("user click on Sign in button.", () => {
      defaultValidation();
    });

    and("user lands the dashboard page", async () => {
      container = await navigateToPatientPortalHome();
    });

    and(/^user should see the (.*) menu part of the global header$/, (arg0) => {
      expect(
        container.getByLabelText("Pay My Bill dropdown")
      ).toBeInTheDocument();
    });

    then(/^user clicks on (.*) menu$/, (arg0) => {
      fireEvent.click(container.getByLabelText("Pay My Bill dropdown"));
    });

    and(/^user should see the (.*) sub-menu$/, (arg0) => {
      expect(
        container.getByLabelText("Invoice History menu")
      ).toBeInTheDocument();
    });
  });

  test("EPIC_EPP-54_STORY_EPP-4328 - Verify whether the user is able to navigate the View Bills/Invoices page from dashboard", ({
    given,
    when,
    and,
  }) => {
    given(
      "user launch the browser and enter the patient portal url",
      async () => {
        container = await renderLogin();
      }
    );

    when("user enter valid username or phone number and password", async () => {
      await doLogin(mock, container);
    });

    and("user click on Sign in button.", () => {
      defaultValidation();
    });

    and("user lands the dashboard page", async () => {
      container = await navigateToPatientPortalHome();
    });

    and(/^user should see the (.*) menu part of the global header$/, () => {
      expect(
        container.getByLabelText("Pay My Bill dropdown")
      ).toBeInTheDocument();
    });

    and(/^user clicks on (.*) menu$/, (arg0) => {
      fireEvent.click(container.getByLabelText("Pay My Bill dropdown"));
    });

    when(/^user clicks on (.*) sub-menu$/, (arg0) => {
      fireEvent.click(container.getByLabelText("Invoice History menu"));
    });

    and("user should navigates to Bills/Invoice History page", async () => {
      container = await navigateToPayMyBill(mock);
    });

    and("user should should see the list of Bills or invoices", () => {
      expect(container.getAllByText("makePayment")[0]).toBeInTheDocument();
    });
  });
});
