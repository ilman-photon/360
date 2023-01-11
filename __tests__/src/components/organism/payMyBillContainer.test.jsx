import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Provider } from "react-redux";
import store from "../../../../src/store/store";
import PayMyBillContainer from "../../../../src/components/organisms/PayMyBill/payMyBill.jsx";

import mediaQuery from "css-mediaquery";

window.scrollTo = jest.fn();

export function createMatchMedia(width) {
  return (query) => ({
    matches: mediaQuery.match(query, { width }),
    addListener: () => {},
    removeListener: () => {},
  });
}

describe("App", () => {
  let container;
  const noInvoiceText = {
    content: "notInvoice",
    key: "open",
    text: "notOpenInvoices",
  };
  const activeTabs = {
    index: 0,
  };

  beforeEach(() => {
    window.matchMedia = createMatchMedia("800px");
    container = render(
      <Provider store={store}>
        <PayMyBillContainer
          noInvoiceText={noInvoiceText}
          activeTabs={activeTabs}
          isDesktop={false}
          isHaveInvoice={false}
        />
      </Provider>
    );
  });

  it("PayMyBillContainer render", async () => {
    expect(container.getByText("notOpenInvoices")).toBeInTheDocument();
  });

  it("PayMyBillContainer rerender", () => {
    container.rerender(
      <Provider store={store}>
        <PayMyBillContainer
          noInvoiceText={{
            content: "notResult",
            key: "history",
            text: "notInvoicesHistory",
          }}
          activeTabs={{
            index: 1,
          }}
          isDesktop={false}
          isHaveInvoice={true}
          data={
            ({
              invoiceNumber: "124344554",
              dos: "Oct 09, 2022, 4:31:42 PM",
              provider: "Don John",
            },
            {
              invoiceNumber: "124344556",
              dos: "Oct 14, 2022, 4:31:42 PM",
              provider: "James Black",
            })
          }
        />
      </Provider>
    );

    expect(container.getByText("notInvoicesHistory")).toBeInTheDocument();
  });

  it("PayMyBillContainer rerender open invoice data mobile", async () => {
    container.rerender(
      <Provider store={store}>
        <PayMyBillContainer
          noInvoiceText={{
            content: "",
            key: "",
            text: "",
          }}
          activeTabs={{
            index: 0,
            title: "openInvoices",
          }}
          isDesktop={false}
          isHaveInvoice={true}
          data={[
            {
              invoiceNumber: "124344554",
              dos: "Oct 09, 2022, 4:31:42 PM",
              provider: "Don John",
            },
            {
              invoiceNumber: "124344556",
              dos: "Oct 14, 2022, 4:31:42 PM",
              provider: "James Black",
            },
          ]}
        />
      </Provider>
    );

    await waitFor(() => {
      expect(container.getAllByText("View Details").length > 0).toBeTruthy();
    });
  });

  it("PayMyBillContainer rerender open invoice data desktop", async () => {
    container.rerender(
      <Provider store={store}>
        <PayMyBillContainer
          noInvoiceText={{
            content: "",
            key: "",
            text: "",
          }}
          activeTabs={{
            index: 0,
            title: "openInvoices",
          }}
          isDesktop={true}
          isHaveInvoice={true}
          data={[
            {
              invoiceNumber: "124344554",
              dos: "Oct 09, 2022, 4:31:42 PM",
              provider: "Don John",
              accCreditBalance: "123",
              patientDue: "321",
            },
            {
              invoiceNumber: "124344556",
              dos: "Oct 14, 2022, 4:31:42 PM",
              provider: "James Black",
              accCreditBalance: "123",
              patientDue: "321",
            },
          ]}
        />
      </Provider>
    );

    await waitFor(() => {
      expect(container.getByText("Invoice Number")).toBeInTheDocument();
      expect(container.getByText("Date of Service")).toBeInTheDocument();
      expect(container.getByText("Provider")).toBeInTheDocument();
      expect(container.getByText("Account Credit Balance")).toBeInTheDocument();
      expect(container.getByText("Patient Due")).toBeInTheDocument();
      expect(container.getAllByText("viewDetails").length > 0).toBeTruthy();
    });
  });

  it("PayMyBillContainer rerender history data mobile", async () => {
    container.rerender(
      <Provider store={store}>
        <PayMyBillContainer
          noInvoiceText={{
            content: "",
            key: "",
            text: "",
          }}
          activeTabs={{
            index: 1,
            title: "invoiceHistory",
          }}
          isDesktop={false}
          isHaveInvoice={true}
          data={[
            {
              invoiceNumber: "124344554",
              dos: "Oct 09, 2022, 4:31:42 PM",
              provider: "Don John",
              accCreditBalance: "123",
              patientDue: "321",
            },
            {
              invoiceNumber: "124344556",
              dos: "Oct 14, 2022, 4:31:42 PM",
              provider: "James Black",
              accCreditBalance: "123",
              patientDue: "321",
            },
          ]}
        />
      </Provider>
    );

    await waitFor(() => {
      expect(container.getAllByText("Invoice Number")[0]).toBeInTheDocument();
      expect(container.getAllByText("Date of Service")[0]).toBeInTheDocument();
    });
  });

  it("PayMyBillContainer rerender history data desktop", async () => {
    window.matchMedia = createMatchMedia("1360px");
    container.rerender(
      <Provider store={store}>
        <PayMyBillContainer
          noInvoiceText={{
            content: "",
            key: "",
            text: "",
          }}
          activeTabs={{
            index: 1,
            title: "invoiceHistory",
          }}
          isDesktop={true}
          isHaveInvoice={true}
          data={[
            {
              invoiceNumber: "124344554",
              dos: "Oct 09, 2022, 4:31:42 PM",
              provider: "Don John",
            },
            {
              invoiceNumber: "124344556",
              dos: "Oct 14, 2022, 4:31:42 PM",
              provider: "James Black",
            },
          ]}
        />
      </Provider>
    );

    await waitFor(() => {
      expect(container.getByText("Invoice Number")).toBeInTheDocument();
      expect(container.getByText("Date of Service")).toBeInTheDocument();
      expect(container.getByText("Provider")).toBeInTheDocument();
      expect(container.getAllByText("viewPDF").length > 0).toBeTruthy();
    });
  });
});
