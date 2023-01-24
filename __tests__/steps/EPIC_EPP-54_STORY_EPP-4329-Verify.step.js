import { fireEvent, cleanup, waitFor, act } from "@testing-library/react";
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
  "./__tests__/feature/Patient Portal/Sprint8/EPP-4329.feature"
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
  test("EPIC_EPP-54_STORY_EPP-4329 - Verify User should be able to see the lists down the invoices whose ‘Date of Service’ are within that date range", ({
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
          container.getByLabelText("Pay My Bill dropdown")
        ).toBeInTheDocument();
        fireEvent.click(container.getByLabelText("Pay My Bill dropdown"));
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
      cleanup();
      container = await navigateToPayMyBill(mock);
      expect(container.getByText("searchBy")).toBeInTheDocument();
    });

    and(
      "User views the option to search/ filter invoices with in a particular date range as well as search by invoice number",
      async () => {
        await waitFor(() => container.getByTestId("pay-my-bill-filter"));
        const payMyBillFilter = container.getByTestId("pay-my-bill-filter");
        act(() => {
          fireEvent.change(payMyBillFilter, { target: { value: "date" } });
        });
        expect(payMyBillFilter.value).toEqual("date");
        expect(container.getByText("Date Range")).toBeInTheDocument();
      }
    );

    and(
      "User enters in a valid date range/ invoice number (max 50 char)",
      async () => {
        const fromDateInput = await waitFor(() =>
          container.getByLabelText("fromDate")
        );
        act(() => {
          fireEvent.change(fromDateInput, { target: { value: "22-09-2022" } });
        });
        expect(container.getByText("To")).toBeInTheDocument();
        const toDateInput = await waitFor(() =>
          container.getByLabelText("toDate")
        );
        act(() => {
          fireEvent.change(toDateInput, { target: { value: "22-10-2022" } });
        });
      }
    );

    when(
      "User clicks on the option to search for invoices within that date range",
      () => {
        defaultValidation();
      }
    );

    then(
      "User should be able to see the lists down the invoices whose ‘Date of Service’ are within that date range",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-54_STORY_EPP-4329 - Verify User should be able to see the lists down the invoices whose ‘Invoice Number’ are within Invoice number that matches the searched invoice number", ({
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
          container.getByLabelText("Pay My Bill dropdown")
        ).toBeInTheDocument();
        fireEvent.click(container.getByLabelText("Pay My Bill dropdown"));
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
      cleanup();
      container = await navigateToPayMyBill(mock);
      expect(container.getByText("searchBy")).toBeInTheDocument();
    });

    and(
      "User views the option to search/ filter invoices with in a particular date range as well as search by invoice number",
      async () => {
        await waitFor(() => container.getByTestId("pay-my-bill-filter"));
        const payMyBillFilter = container.getByTestId("pay-my-bill-filter");
        act(() => {
          fireEvent.change(payMyBillFilter, {
            target: { value: "invoiceNumber" },
          });
        });
        expect(payMyBillFilter.value).toEqual("invoiceNumber");
      }
    );

    and(
      "User enters in a valid date range/ invoice number (max 50 char)",
      async () => {
        await waitFor(() => container.getByText("invoiceNumber"));
        const invoiceNumberInput = container.getByTestId(
          "invoice-number-filter"
        );
        act(() => {
          fireEvent.change(invoiceNumberInput, { target: { value: "123456" } });
        });
        expect(invoiceNumberInput.value).toEqual("123456");
      }
    );

    when(
      "User clicks on the option to search for invoices within that matches that invoice number",
      () => {
        defaultValidation();
      }
    );

    then(
      "User should be able to see the lists down the invoices whose ‘Invoice Number’ are within Invoice number that matches the searched invoice number",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-54_STORY_EPP-4329 - Verify User should be able to see the lists down the invoice ordered by recent ones at the top i.e descending order of ‘Date of Service’", ({
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
          container.getByLabelText("Pay My Bill dropdown")
        ).toBeInTheDocument();
        fireEvent.click(container.getByLabelText("Pay My Bill dropdown"));
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
      cleanup();
      container = await navigateToPayMyBill(mock);
      expect(container.getByText("searchBy")).toBeInTheDocument();
    });

    and(
      "User views the option to search/ filter invoices with in a particular date range as well as search by invoice number",
      async () => {
        await waitFor(() => container.getByTestId("pay-my-bill-filter"));
        const payMyBillFilter = container.getByTestId("pay-my-bill-filter");
        act(() => {
          fireEvent.change(payMyBillFilter, {
            target: { value: "invoiceNumber" },
          });
        });
        expect(payMyBillFilter.value).toEqual("invoiceNumber");
      }
    );

    and(
      "User enters in a valid date range/ invoice number (max 50 char)",
      async () => {
        await waitFor(() => container.getByTestId("pay-my-bill-filter"));
        const payMyBillFilter = container.getByTestId("pay-my-bill-filter");
        act(() => {
          fireEvent.change(payMyBillFilter, {
            target: { value: "invoiceNumber" },
          });
        });
        expect(payMyBillFilter.value).toEqual("invoiceNumber");
      }
    );

    when(
      "User clicks on the option to search for invoices within that date range/ matches that invoice number",
      () => {
        defaultValidation();
      }
    );

    then(
      "User should be able to see the lists down the invoices whose ‘Date of Service’ are within that date range/ Invoice number that matches the searched invoice number",
      () => {
        defaultValidation();
      }
    );

    and(
      "User should be able to see the lists down the invoice ordered by recent ones at the top i.e descending order of ‘Date of Service’",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-54_STORY_EPP-4329 - Verify User should be able to input date range only in the format of ‘MM/DD/YYYY’", ({
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
          container.getByLabelText("Pay My Bill dropdown")
        ).toBeInTheDocument();
        fireEvent.click(container.getByLabelText("Pay My Bill dropdown"));
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
      cleanup();
      container = await navigateToPayMyBill(mock);
      expect(container.getByText("searchBy")).toBeInTheDocument();
    });

    and(
      "User views the option to search/ filter invoices with in a particular date range as well as search by invoice number",
      async () => {
        await waitFor(() => container.getByTestId("pay-my-bill-filter"));
        const payMyBillFilter = container.getByTestId("pay-my-bill-filter");
        act(() => {
          fireEvent.change(payMyBillFilter, {
            target: { value: "invoiceNumber" },
          });
        });
        expect(payMyBillFilter.value).toEqual("invoiceNumber");
      }
    );

    and(
      "User enters in a valid date range/ invoice number (max 50 char)",
      async () => {
        await waitFor(() => container.getByTestId("pay-my-bill-filter"));
        const payMyBillFilter = container.getByTestId("pay-my-bill-filter");
        act(() => {
          fireEvent.change(payMyBillFilter, {
            target: { value: "invoiceNumber" },
          });
        });
        expect(payMyBillFilter.value).toEqual("invoiceNumber");
      }
    );

    when(
      "User clicks on the option to search for invoices within that date range",
      () => {
        defaultValidation();
      }
    );

    then(
      "User should be able to see the lists down the invoices whose ‘Date of Service’ are within that date range/ Invoice number that matches the searched invoice number",
      () => {
        defaultValidation();
      }
    );

    and(
      "User should be able to see the lists down the invoice ordered by recent ones at the top i.e descending order of ‘Date of Service’",
      () => {
        defaultValidation();
      }
    );

    and(
      "User should be able to input date range only in the format of ‘MM/DD/YYYY’",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-54_STORY_EPP-4329 - Verify User should be able to view a message “We were not able to find any invoices. Please try with a different date range” (if there are no invoices for the provided date range)", ({
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
          container.getByLabelText("Pay My Bill dropdown")
        ).toBeInTheDocument();
        fireEvent.click(container.getByLabelText("Pay My Bill dropdown"));
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
      cleanup();
      container = await navigateToPayMyBill(mock);
      expect(container.getByText("searchBy")).toBeInTheDocument();
    });

    and(
      "User views the option to search/ filter invoices with in a particular date range as well as search by invoice number",
      async () => {
        await waitFor(() => container.getByTestId("pay-my-bill-filter"));
        const payMyBillFilter = container.getByTestId("pay-my-bill-filter");
        act(() => {
          fireEvent.change(payMyBillFilter, {
            target: { value: "invoiceNumber" },
          });
        });
        expect(payMyBillFilter.value).toEqual("invoiceNumber");
      }
    );

    and(
      "User enters in a valid date range/ invoice number (max 50 char)",
      async () => {
        await waitFor(() => container.getByTestId("pay-my-bill-filter"));
        const payMyBillFilter = container.getByTestId("pay-my-bill-filter");
        act(() => {
          fireEvent.change(payMyBillFilter, {
            target: { value: "invoiceNumber" },
          });
        });
        expect(payMyBillFilter.value).toEqual("invoiceNumber");
      }
    );

    when(
      "User clicks on the option to search for invoices within that date range/ matches that invoice number",
      () => {
        defaultValidation();
      }
    );

    then(
      "User should be able to see the lists down the invoices whose ‘Date of Service’ are within that date range/ Invoice number that matches the searched invoice number",
      () => {
        defaultValidation();
      }
    );

    and(
      "User should be able to see the lists down the invoice ordered by recent ones at the top i.e descending order of ‘Date of Service’",
      () => {
        defaultValidation();
      }
    );

    and(
      "User should be able to input date range only in the format of ‘MM/DD/YYYY’",
      () => {
        defaultValidation();
      }
    );

    when("There are no invoices for the provided date range", () => {
      defaultValidation();
    });

    then(
      "User should be able to view a message “We were not able to find any invoices. Please try with a different date range”",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-54_STORY_EPP-4329 - Verify User should be able to view a message “We were not able to find any invoices. Please try with a different invoice number” (if the entered invoice number does not match the user’s list of invoice number)", ({
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
          container.getByLabelText("Pay My Bill dropdown")
        ).toBeInTheDocument();
        fireEvent.click(container.getByLabelText("Pay My Bill dropdown"));
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
      cleanup();
      container = await navigateToPayMyBill(mock);
      expect(container.getByText("searchBy")).toBeInTheDocument();
    });

    and(
      "User views the option to search/ filter invoices with in a particular date range as well as search by invoice number",
      async () => {
        await waitFor(() => container.getByTestId("pay-my-bill-filter"));
        const payMyBillFilter = container.getByTestId("pay-my-bill-filter");
        act(() => {
          fireEvent.change(payMyBillFilter, {
            target: { value: "invoiceNumber" },
          });
        });
        expect(payMyBillFilter.value).toEqual("invoiceNumber");
      }
    );

    and(
      "User enters in a valid date range/ invoice number (max 50 char)",
      async () => {
        await waitFor(() => container.getByTestId("pay-my-bill-filter"));
        const payMyBillFilter = container.getByTestId("pay-my-bill-filter");
        act(() => {
          fireEvent.change(payMyBillFilter, {
            target: { value: "invoiceNumber" },
          });
        });
        expect(payMyBillFilter.value).toEqual("invoiceNumber");
      }
    );

    when(
      "User clicks on the option to search for invoices within that matches that invoice number",
      () => {
        defaultValidation();
      }
    );

    then(
      "User should be able to see the lists down the invoices whose ‘Date of Service’ are within that date range/ Invoice number that matches the searched invoice number",
      () => {
        defaultValidation();
      }
    );

    and(
      "User should be able to see the lists down the invoice ordered by recent ones at the top i.e descending order of ‘Date of Service’",
      () => {
        defaultValidation();
      }
    );

    and(
      "User should be able to input date range only in the format of ‘MM/DD/YYYY’",
      () => {
        defaultValidation();
      }
    );

    when(
      "User enters invoice number does not match the user’s list of invoice number",
      () => {
        defaultValidation();
      }
    );

    then(
      "User should be able to view a message “We were not able to find any invoices. Please try with a different invoice number”",
      () => {
        defaultValidation();
      }
    );
  });
});
