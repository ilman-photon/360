import { act, fireEvent, waitFor } from "@testing-library/react";
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
  "./__tests__/feature/Patient Portal/Sprint8/EPP-4327.feature"
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
  test("EPIC_EPP-54_STORY_EPP-4327 - Verify whether the user is able to navigate the Dashboard page", ({
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

    when("user enter valid username or phone number and password", () => {
      defaultValidation();
    });

    and("user click on Sign in button.", async () => {
      await doLogin(mock, container);
    });

    and("user should navigates to the dashboard page", async () => {
      container = await navigateToPatientPortalHome();
    });
  });

  test("EPIC_EPP-54_STORY_EPP-4327 - Verify whether the user is able to navigate the Pay My Bill menu option.", ({
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

    when("user enter valid username or phone number and password", () => {
      defaultValidation();
    });

    and("user click on Sign in button.", async () => {
      await doLogin(mock, container);
    });

    and("user lands the dashboard page", async () => {
      container = await navigateToPatientPortalHome();
    });

    and(
      /^user should navigates to (.*) menu part of the global header$/,
      (arg0) => {
        fireEvent.click(container.getByLabelText("Pay My Bill menu"));
      }
    );

    and(/^user should see the (.*) menu$/, (arg0) => {
      expect(container.getByLabelText("Pay My Bill menu")).toBeInTheDocument();
    });
  });

  test("EPIC_EPP-54_STORY_EPP-4327 - Verify whether the user is able to view the Invoice History submenu option in Pay My Bill main menu", ({
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

    when("user enter valid username or phone number and password", () => {
      defaultValidation();
    });

    and("user click on Sign in button.", async () => {
      await doLogin(mock, container);
    });

    and("user lands the dashboard page", async () => {
      container = await navigateToPatientPortalHome();
    });

    and(/^user should see the (.*) menu part of the global header$/, (arg0) => {
      expect(container.getByLabelText("Pay My Bill menu")).toBeInTheDocument();
    });

    then(/^user clicks on (.*) menu$/, (arg0) => {
      fireEvent.click(container.getByLabelText("Pay My Bill menu"));
    });

    and(/^user should see the (.*) sub-menu$/, (arg0) => {
      expect(
        container.getByLabelText("Invoice History menu")
      ).toBeInTheDocument();
    });
  });

  test("EPIC_EPP-54_STORY_EPP-4327 - Verify whether the user is able to view list of previous invoices in the history page", ({
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

    when("user enter valid username or phone number and password", () => {
      defaultValidation();
    });

    and("user click on Sign in button.", async () => {
      await doLogin(mock, container);
    });

    and("user lands the dashboard page", async () => {
      container = await navigateToPatientPortalHome();
    });

    and(/^user should see the (.*) menu part of the global header$/, (arg0) => {
      expect(container.getByLabelText("Pay My Bill menu")).toBeInTheDocument();
    });

    and(/^user clicks on (.*) menu$/, (arg0) => {
      fireEvent.click(container.getByLabelText("Pay My Bill menu"));
    });

    when(/^user clicks on (.*) sub-menu$/, (arg0) => {
      fireEvent.click(container.getByLabelText("Invoice History menu"));
    });

    and("user should navigates to Bills/Invoice History page", async () => {
      container = await navigateToPayMyBill(mock);
    });

    and(
      "user should should see the list of previous Bills or invoices if available",
      () => {
        expect(container.getByText("makePayment")).toBeInTheDocument();
        expect(container.getAllByText("openInvoices")[0]).toBeInTheDocument();
      }
    );
  });

  test("EPIC_EPP-54_STORY_EPP-4327 - Verify whether the user able to view the list of previous invoices ordered by recent ones at top", ({
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

    when("user enter valid username or phone number and password", () => {
      defaultValidation();
    });

    and("user click on Sign in button.", async () => {
      await doLogin(mock, container);
    });

    and("user lands the dashboard page", async () => {
      container = await navigateToPatientPortalHome();
    });

    and(/^user should see the (.*) menu part of the global header$/, (arg0) => {
      expect(container.getByLabelText("Pay My Bill menu")).toBeInTheDocument();
    });

    and(/^user clicks on (.*) menu$/, (arg0) => {
      fireEvent.click(container.getByLabelText("Pay My Bill menu"));
    });

    when(/^user clicks on (.*) sub-menu$/, (arg0) => {
      fireEvent.click(container.getByLabelText("Invoice History menu"));
    });

    and("user should navigates to Bills/Invoice History page", async () => {
      container = await navigateToPayMyBill(mock);
    });

    and("user should should see the list of previous Bills or invoices", () => {
      expect(container.getByText("makePayment")).toBeInTheDocument();
    });

    and(
      "user should view the list of previous invoices ordered by recent ones at top",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-54_STORY_EPP-4327 - Verify whether the user is able to view the details of each invoice along with invoice number", ({
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

    when("user enter valid username or phone number and password", () => {
      defaultValidation();
    });

    and("user click on Sign in button.", async () => {
      await doLogin(mock, container);
    });

    and("user lands the dashboard page", async () => {
      container = await navigateToPatientPortalHome();
    });

    and(/^user should see the (.*) menu part of the global header$/, (arg0) => {
      expect(container.getByLabelText("Pay My Bill menu")).toBeInTheDocument();
    });

    and(/^user clicks on (.*) menu$/, (arg0) => {
      fireEvent.click(container.getByLabelText("Pay My Bill menu"));
    });

    when(/^user clicks on (.*) sub-menu$/, (arg0) => {
      fireEvent.click(container.getByLabelText("Invoice History menu"));
    });

    and("user should navigates to Bills/Invoice History page", async () => {
      container = await navigateToPayMyBill(mock);
    });

    and("user should should see the list of previous Bills or invoices", () => {
      expect(container.getByText("makePayment")).toBeInTheDocument();
    });

    and(
      "user should view the list of previous invoices ordered by recent ones at top",
      () => {
        defaultValidation();
      }
    );

    and("user should view the details of each invoice", () => {
      defaultValidation();
    });

    and(/^user should see the (.*) for each invoice$/, (arg0) => {
      defaultValidation();
    });

    and(/^user should be able to view the (.*) for each invoice$/, (arg0) => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-54_STORY_EPP-4327 - Verify whether the user is able to view the option to search invoices within a date range", ({
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

    when("user enter valid username or phone number and password", () => {
      defaultValidation();
    });

    and("user click on Sign in button.", async () => {
      await doLogin(mock, container);
    });

    and("user lands the dashboard page", async () => {
      container = await navigateToPatientPortalHome();
    });

    and(/^user should see the (.*) menu part of the global header$/, (arg0) => {
      expect(container.getByLabelText("Pay My Bill menu")).toBeInTheDocument();
    });

    and(/^user clicks on (.*) menu$/, (arg0) => {
      fireEvent.click(container.getByLabelText("Pay My Bill menu"));
    });

    when(/^user clicks on (.*) sub-menu$/, (arg0) => {
      fireEvent.click(container.getByLabelText("Invoice History menu"));
    });

    and("user should navigates to Bills/Invoice History page", async () => {
      container = await navigateToPayMyBill(mock);
    });

    and("user should should see the list of previous Bills or invoices", () => {
      expect(container.getByText("makePayment")).toBeInTheDocument();
    });

    and(
      "user should view the list of previous invoices ordered by recent ones at top",
      () => {
        defaultValidation();
      }
    );

    and(
      "user should see the option to search invoices within a date range",
      async () => {
        await waitFor(() => container.getByTestId("pay-my-bill-filter"));
        expect(container.getByText("selectOption")).toBeInTheDocument();
        const payMyBillFilter = container.getByTestId("pay-my-bill-filter");
        act(() => {
          fireEvent.change(payMyBillFilter, { target: { value: "date" } });
        });
        expect(payMyBillFilter.value).toEqual("date");
        expect(container.getByText("Date Range")).toBeInTheDocument();
      }
    );
  });
  test("EPIC_EPP-54_STORY_EPP-4327 - Verify whether the user is able to see an option to view the bill against each invoice", ({
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

    when("user enter valid username or phone number and password", () => {
      defaultValidation();
    });

    and("user click on Sign in button.", async () => {
      await doLogin(mock, container);
    });

    and("user lands the dashboard page", async () => {
      container = await navigateToPatientPortalHome();
    });

    and(/^user should see the (.*) menu part of the global header$/, (arg0) => {
      expect(container.getByLabelText("Pay My Bill menu")).toBeInTheDocument();
    });

    and(/^user clicks on (.*) menu$/, (arg0) => {
      fireEvent.click(container.getByLabelText("Pay My Bill menu"));
    });

    when(/^user clicks on (.*) sub-menu$/, (arg0) => {
      fireEvent.click(container.getByLabelText("Invoice History menu"));
    });

    and("user should navigates to Bills/Invoice History page", async () => {
      container = await navigateToPayMyBill(mock);
    });

    and("user should should see the list of previous Bills or invoices", () => {
      expect(container.getByText("makePayment")).toBeInTheDocument();
    });

    and(
      "user should view the list of previous invoices ordered by recent ones at top",
      () => {
        defaultValidation();
      }
    );

    and(
      "user is able to see an option to view the bill against each invoice",
      () => {
        defaultValidation();
      }
    );

    then("user clicks on View button", () => {
      defaultValidation();
    });

    and(
      "user should navigates to another tab with the bill opened in pdf format like super bill",
      () => {
        defaultValidation();
      }
    );
  });
  test("EPIC_EPP-54_STORY_EPP-4327 - Verify whether the user able to see an option to download each invoice", ({
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

    when("user enter valid username or phone number and password", () => {
      defaultValidation();
    });

    and("user click on Sign in button.", async () => {
      await doLogin(mock, container);
    });

    and("user lands the dashboard page", async () => {
      container = await navigateToPatientPortalHome();
    });

    and(/^user should see the (.*) menu part of the global header$/, (arg0) => {
      expect(container.getByLabelText("Pay My Bill menu")).toBeInTheDocument();
    });

    and(/^user clicks on (.*) menu$/, (arg0) => {
      fireEvent.click(container.getByLabelText("Pay My Bill menu"));
    });

    when(/^user clicks on (.*) sub-menu$/, (arg0) => {
      fireEvent.click(container.getByLabelText("Invoice History menu"));
    });

    and("user should navigates to Bills/Invoice History page", async () => {
      container = await navigateToPayMyBill(mock);
    });

    and(
      "user should should see the “You have no previous invoices.” message when there are no previous invoices for the user",
      () => {
        defaultValidation();
      }
    );
  });
  test('EPIC_EPP-54_STORY_EPP-4327 - Verify whether the user is able to view the "You have no previous invoices.” message in the history page.', ({
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

    when("user enter valid username or phone number and password", () => {
      defaultValidation();
    });

    and("user click on Sign in button.", async () => {
      await doLogin(mock, container);
    });

    and("user lands the dashboard page", async () => {
      container = await navigateToPatientPortalHome();
    });

    and(/^user should see the (.*) menu part of the global header$/, (arg0) => {
      expect(container.getByLabelText("Pay My Bill menu")).toBeInTheDocument();
    });

    and(/^user clicks on (.*) menu$/, (arg0) => {
      fireEvent.click(container.getByLabelText("Pay My Bill menu"));
    });

    when(/^user clicks on (.*) sub-menu$/, (arg0) => {
      fireEvent.click(container.getByLabelText("Invoice History menu"));
    });

    and("user should navigates to Bills/Invoice History page", async () => {
      container = await navigateToPayMyBill(mock);
    });

    and("user should should see the list of previous Bills or invoices", () => {
      expect(container.getByText("makePayment")).toBeInTheDocument();
    });

    and(
      "user should view the list of previous invoices ordered by recent ones at top",
      () => {
        defaultValidation();
      }
    );

    and(
      "user should see the option to search invoices within a date range",
      async () => {
        await waitFor(() => container.getByTestId("pay-my-bill-filter"));
        expect(container.getByText("selectOption")).toBeInTheDocument();
        const payMyBillFilter = container.getByTestId("pay-my-bill-filter");
        act(() => {
          fireEvent.change(payMyBillFilter, { target: { value: "date" } });
        });
        expect(payMyBillFilter.value).toEqual("date");
        expect(container.getByText("Date Range")).toBeInTheDocument();
      }
    );

    and(
      /^user should see the (.*) message if there are no invoice with in the date range.$/,
      (arg0) => {
        defaultValidation();
      }
    );
  });
  test("EPIC_EPP-54_STORY_EPP-4326 - Verify whether the user is able to view the we are not able find any invoices with in the date range” message in the history page.", ({
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

    when("user enter valid username or phone number and password", () => {
      defaultValidation();
    });

    and("user click on Sign in button.", async () => {
      await doLogin(mock, container);
    });

    and("user lands the dashboard page", async () => {
      container = await navigateToPatientPortalHome();
    });

    and(/^user should see the (.*) menu part of the global header$/, (arg0) => {
      expect(container.getByLabelText("Pay My Bill menu")).toBeInTheDocument();
    });

    and(/^user clicks on (.*) menu$/, (arg0) => {
      fireEvent.click(container.getByLabelText("Pay My Bill menu"));
    });

    when(/^user clicks on (.*) sub-menu$/, (arg0) => {
      fireEvent.click(container.getByLabelText("Invoice History menu"));
    });

    and("user should navigates to Bills/Invoice History page", async () => {
      container = await navigateToPayMyBill(mock);
    });

    and("user should should see the list of previous Bills or invoices", () => {
      expect(container.getByText("makePayment")).toBeInTheDocument();
    });

    and(
      "user should view the list of previous invoices ordered by recent ones at top",
      async () => {
        fireEvent.click(container.getByTestId("tab-open-invoices"));
        // expect(container.getAllByText("viewDetails")[0]).toBeInTheDocument();
        // await waitFor(() => container.getAllByText("viewDetails")[0]);
      }
    );

    and(
      "user should see the option to search invoices within a date range",
      async () => {
        await waitFor(() => container.getByTestId("pay-my-bill-filter"));
        expect(container.getByText("selectOption")).toBeInTheDocument();
        const payMyBillFilter = container.getByTestId("pay-my-bill-filter");
        act(() => {
          fireEvent.change(payMyBillFilter, { target: { value: "date" } });
        });
        expect(payMyBillFilter.value).toEqual("date");
        expect(container.getByText("Date Range")).toBeInTheDocument();
      }
    );

    and(
      /^user should see the (.*) message if there are no invoice with in the date range.$/,
      (arg0) => {
        defaultValidation();
      }
    );
  });
});
