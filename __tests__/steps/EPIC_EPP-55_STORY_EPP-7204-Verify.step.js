import { act, fireEvent, waitFor, cleanup } from "@testing-library/react";
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
  "./__tests__/feature/Patient Portal/Sprint8/EPP-7204.feature"
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

  const goToPayMyBill = () => {
    fireEvent.click(container.getByLabelText("Pay My Bill menu"));
    fireEvent.click(container.getByText("View & Pay Open Invoices"));
  };

  test("EPIC_EPP-55_STORY_EPP-7204 -To verify if  User  open invoices tab", ({}) => {});

  test("To verify if  User  open invoices tab", ({
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

    and("user  has past invoices", async () => {
      goToPayMyBill();
      container = await navigateToPayMyBill(mock);
      await waitFor(() => container.getByText("makePayment"));
      await waitFor(() => container.getByTestId("tab-invoice-history"));
    });

    and("user open invoices tab", () => {
      fireEvent.click(container.getByTestId("tab-invoice-history"));
    });

    then("user should see invoice", async () => {
      // await waitFor(() => container.getAllByTestId("invoice-view-pdf")[0]);
    });
  });

  test("EPIC_EPP-55_STORY_EPP-7204 -To verify if  User able to view the option to search/filter invoices with in a particular date range", ({
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

    and("user  has past invoices", () => {
      defaultValidation();
    });

    and("user open invoices tab", async () => {
      goToPayMyBill();
      container = await navigateToPayMyBill(mock);
      fireEvent.click(container.getByTestId("tab-invoice-history"));
    });

    then(
      "user should view the option to  search/filter invoices with data range",
      async () => {
        await waitFor(() => container.getByTestId("pay-my-bill-filter"));
        const payMyBillFilter = container.getByTestId("pay-my-bill-filter");
        act(() => {
          fireEvent.change(payMyBillFilter, { target: { value: "date" } });
        });
        expect(payMyBillFilter.value).toEqual("date");
        expect(container.getByText("Date Range")).toBeInTheDocument();
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
  });

  test("EPIC_EPP-55_STORY_EPP-7204 -To verify if  User able to view the option to search/filter invoices by invoice number", ({
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

    and("user  has past invoices", () => {
      defaultValidation();
    });

    and("user open invoices tab", async () => {
      goToPayMyBill();
      container = await navigateToPayMyBill(mock);
      fireEvent.click(container.getByTestId("tab-invoice-history"));
    });

    then(
      "user should view the option to  search/filter invoices by invoice number",
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
  });

  test("EPIC_EPP-55_STORY_EPP-7204 -To verify if  User able to enter  a valid date range to initiate the search", ({
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

    and("user  has past invoices", () => {
      defaultValidation();
    });

    and("user open invoices tab", async () => {
      goToPayMyBill();
      container = await navigateToPayMyBill(mock);
      fireEvent.click(container.getByTestId("tab-invoice-history"));
    });

    then(
      "user should enter a valid data range to intiate the search",
      async () => {
        await waitFor(() => container.getByTestId("pay-my-bill-filter"));
        const payMyBillFilter = container.getByTestId("pay-my-bill-filter");
        act(() => {
          fireEvent.change(payMyBillFilter, { target: { value: "date" } });
        });
        expect(payMyBillFilter.value).toEqual("date");
        expect(container.getByText("Date Range")).toBeInTheDocument();

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
  });

  test("EPIC_EPP-55_STORY_EPP-7204 -To verify if  User able to enter  a valid date range and System allows date range in the format of ‘MM/DD/YYYY’", ({
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

    and("user  has past invoices", () => {
      defaultValidation();
    });

    and("user open invoices tab", async () => {
      goToPayMyBill();
      container = await navigateToPayMyBill(mock);
      fireEvent.click(container.getByTestId("tab-invoice-history"));
    });

    then("user should enter a valid data range", async () => {
      await waitFor(() => container.getByTestId("pay-my-bill-filter"));
      const payMyBillFilter = container.getByTestId("pay-my-bill-filter");
      act(() => {
        fireEvent.change(payMyBillFilter, { target: { value: "date" } });
      });
      expect(payMyBillFilter.value).toEqual("date");
      expect(container.getByText("Date Range")).toBeInTheDocument();

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
    });

    and("System allows date range in the format of ‘MM/DD/YYYY’", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-55_STORY_EPP-7204 -To verify the error message when invalid date format other than ‘MM/DD/YYY", ({
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

    and("user  has past invoices", () => {
      defaultValidation();
    });

    and("user open invoices tab", async () => {
      goToPayMyBill();
      container = await navigateToPayMyBill(mock);
      fireEvent.click(container.getByTestId("tab-invoice-history"));
    });

    then("user enter a invalid data range", async () => {
      await waitFor(() => container.getByTestId("pay-my-bill-filter"));
      const payMyBillFilter = container.getByTestId("pay-my-bill-filter");
      act(() => {
        fireEvent.change(payMyBillFilter, { target: { value: "date" } });
      });
      expect(payMyBillFilter.value).toEqual("date");
      expect(container.getByText("Date Range")).toBeInTheDocument();

      const fromDateInput = await waitFor(() =>
        container.getByLabelText("fromDate")
      );
      act(() => {
        fireEvent.change(fromDateInput, { target: { value: "invalid" } });
      });
      expect(container.getByText("To")).toBeInTheDocument();
      const toDateInput = await waitFor(() =>
        container.getByLabelText("toDate")
      );
      act(() => {
        fireEvent.change(toDateInput, { target: { value: "22102022" } });
      });
    });

    and(
      "System throws the error meassage when invalid  date format other than ‘MM/DD/YYYY’ Incorrect date format”",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-55_STORY_EPP-7204 -To verify if  User able to enter invoice number maximum of  50 character", ({
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

    and("user  has past invoices", () => {
      defaultValidation();
    });

    and("user open invoices tab", async () => {
      goToPayMyBill();
      container = await navigateToPayMyBill(mock);
      fireEvent.click(container.getByTestId("tab-invoice-history"));
    });

    then(
      /^user should enter invoice number maximux of (\d+) character$/,
      async () => {
        await waitFor(() => container.getByTestId("pay-my-bill-filter"));
        const payMyBillFilter = container.getByTestId("pay-my-bill-filter");
        act(() => {
          fireEvent.change(payMyBillFilter, {
            target: { value: "invoiceNumber" },
          });
        });

        await waitFor(() => container.getByText("invoiceNumber"));
        const invoiceNumberInput = container.getByTestId(
          "invoice-number-filter"
        );
        act(() => {
          fireEvent.change(invoiceNumberInput, {
            target: {
              value: "123456789012345678901234567890123456789012345678901",
            },
          });
        });
        expect(invoiceNumberInput.value).toEqual(
          "123456789012345678901234567890123456789012345678901"
        );
      }
    );
  });

  test("EPIC_EPP-55_STORY_EPP-7204 -To verify if User able to initiate search to list of open invoices whose ‘Date of Service’ are within that date range", ({
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

    and("user  has past invoices", () => {
      defaultValidation();
    });

    and("user open invoices tab", async () => {
      goToPayMyBill();
      container = await navigateToPayMyBill(mock);
      fireEvent.click(container.getByTestId("tab-invoice-history"));
    });

    when("user should search list of open invoices", () => {
      defaultValidation();
    });

    then("'Date of service' are within that date range", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-55_STORY_EPP-7204 -To verify if User able to initiate search to view list of open invoices whose Invoice number that matches the searched invoice number", ({
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

    and("user  has past invoices", () => {
      defaultValidation();
    });

    and("user open invoices tab", async () => {
      goToPayMyBill();
      container = await navigateToPayMyBill(mock);
      fireEvent.click(container.getByTestId("tab-invoice-history"));
    });

    when("user should search list of open invoices", () => {
      defaultValidation();
    });

    then("Invoice number should matches the searched invoice number", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-55_STORY_EPP-7204 -To verify if User able to view invoice ordered by recent ones at the top i.e descending order of ‘Date of Service’", ({
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

    and("user  has past invoices", () => {
      defaultValidation();
    });

    and("user open invoices tab", async () => {
      goToPayMyBill();
      container = await navigateToPayMyBill(mock);
      fireEvent.click(container.getByTestId("tab-invoice-history"));
    });

    when("user should search list of open invoices", () => {
      defaultValidation();
    });

    then("Invoice ordered by recent ones at top", () => {
      defaultValidation();
    });

    and("system should display Date of service in descending order", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-55_STORY_EPP-7204 -To check message when there are no invoices for the provided date range", ({
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

    and("user  has past invoices", () => {
      defaultValidation();
    });

    and("user open invoices tab", async () => {
      goToPayMyBill();
      container = await navigateToPayMyBill(mock);
      fireEvent.click(container.getByTestId("tab-invoice-history"));
    });

    when("user should search list of open invoices", () => {
      defaultValidation();
    });

    and("there are no invoices for the provided date range", () => {
      defaultValidation();
    });

    then(
      "user should see error message “We were not able to find any invoices. Please try with a different date range”",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-55_STORY_EPP-7204 -To check message when the entered invoice number does not match the user’s list of invoice number", ({
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

    and("user  has past invoices", () => {
      defaultValidation();
    });

    and("user open invoices tab", async () => {
      goToPayMyBill();
      container = await navigateToPayMyBill(mock);
      fireEvent.click(container.getByTestId("tab-invoice-history"));
    });

    when("user should search list of open invoices", () => {
      defaultValidation();
    });

    and(
      "user entered invoice number does not match the user’s list of invoice number",
      () => {
        defaultValidation();
      }
    );

    then(
      "user should see error message “We were not able to find any invoices. Please try with a different invoice number”",
      () => {
        defaultValidation();
      }
    );
  });
});
