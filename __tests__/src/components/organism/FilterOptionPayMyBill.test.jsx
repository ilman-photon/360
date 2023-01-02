import { fireEvent, render, waitFor, act } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Provider } from "react-redux";
import store from "../../../../src/store/store";
import FilterOptionPayMyBill from "../../../../src/components/molecules/PayMyBill/FilterOptionPayMyBill.jsx";

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
  const mockCallBack = jest.fn();

  beforeEach(() => {
    window.matchMedia = createMatchMedia("1920px");
    container = render(
      <Provider store={store}>
        <FilterOptionPayMyBill
          isDesktop={true}
          handleChangeOption={mockCallBack}
          onFilterByDate={mockCallBack}
          onFilterByInvoiceNumber={mockCallBack}
        />
      </Provider>
    );
  });

  it("FilterOptionPayMyBill filter by date", async () => {
    await waitFor(() => container.getByTestId("pay-my-bill-filter"));
    const payMyBillFilter = container.getByTestId("pay-my-bill-filter");
    act(() => {
      fireEvent.change(payMyBillFilter, { target: { value: "date" } });
    });
    expect(payMyBillFilter.value).toEqual("date");
    expect(container.getByText("Date Range")).toBeInTheDocument();

    await waitFor(
      () => container.getAllByLabelText("Double tap to Choose date")[1]
    );
    fireEvent.click(
      container.getAllByLabelText("Double tap to Choose date")[1]
    );
    fireEvent.click(
      container.getByLabelText("calendar view is open, switch to year view")
    );
    await waitFor(() => container.getByText("2000"));
    fireEvent.click(container.getByText("2000"));

    const fromDateInput = await waitFor(() =>
      container.getByLabelText("fromDate")
    );
    act(() => {
      fireEvent.change(fromDateInput, { target: { value: "22-09-2022" } });
    });
    expect(container.getByText("To")).toBeInTheDocument();
    const toDateInput = await waitFor(() => container.getByLabelText("toDate"));
    act(() => {
      fireEvent.change(toDateInput, { target: { value: "22-10-2022" } });
    });
    fireEvent.keyDown(toDateInput, {
      key: "Enter",
      code: "Enter",
      charCode: 13,
    });
  });

  it("FilterOptionPayMyBill rerender", () => {
    container.rerender(
      <Provider store={store}>
        <FilterOptionPayMyBill
          isDesktop={true}
          handleChangeOption={mockCallBack}
          onFilterByDate={mockCallBack}
          onFilterByInvoiceNumber={mockCallBack}
        />
      </Provider>
    );
  });

  it("FilterOptionPayMyBill filter by Invoice Number", async () => {
    await waitFor(() => container.getByTestId("pay-my-bill-filter"));
    const payMyBillFilter = container.getByTestId("pay-my-bill-filter");
    act(() => {
      fireEvent.change(payMyBillFilter, {
        target: { value: "invoiceNumber" },
      });
    });
    expect(payMyBillFilter.value).toEqual("invoiceNumber");

    await waitFor(() => container.getByText("invoiceNumber"));
    const invoiceNumberInput = container.getByTestId("invoice-number-filter");
    act(() => {
      fireEvent.change(invoiceNumberInput, { target: { value: "123456" } });
    });
    expect(invoiceNumberInput.value).toEqual("123456");

    fireEvent.keyDown(invoiceNumberInput, {
      key: "Enter",
      code: "Enter",
      charCode: 13,
    });
  });

  it("FilterOptionPayMyBill filter mobile", () => {
    window.matchMedia = createMatchMedia("700px");
    container.rerender(
      <Provider store={store}>
        <FilterOptionPayMyBill
          isDesktop={false}
          handleChangeOption={mockCallBack}
          onFilterByDate={mockCallBack}
          onFilterByInvoiceNumber={mockCallBack}
        />
      </Provider>
    );
  });

  it("FilterOptionPayMyBill filter mobile action", async () => {
    await waitFor(() => container.getByTestId("pay-my-bill-filter"));
    const payMyBillFilter = container.getByTestId("pay-my-bill-filter");
    act(() => {
      fireEvent.change(payMyBillFilter, { target: { value: "date" } });
    });
    expect(payMyBillFilter.value).toEqual("date");
    expect(container.getByText("Date Range")).toBeInTheDocument();

    await waitFor(
      () => container.getAllByLabelText("Double tap to Choose date")[0]
    );
    fireEvent.click(
      container.getAllByLabelText("Double tap to Choose date")[0]
    );
    await waitFor(() =>
      container.getByLabelText("calendar view is open, switch to year view")
    );
    fireEvent.click(
      container.getByLabelText("calendar view is open, switch to year view")
    );
    await waitFor(() => container.getByText("2000"));
    fireEvent.click(container.getByText("2000"));

    const fromDateInput = await waitFor(() =>
      container.getByLabelText("fromDate")
    );
    act(() => {
      fireEvent.change(fromDateInput, { target: { value: "22-09-2022" } });
    });
    expect(container.getByText("To")).toBeInTheDocument();
    const toDateInput = await waitFor(() => container.getByLabelText("toDate"));
    act(() => {
      fireEvent.change(toDateInput, { target: { value: "22-10-2022" } });
    });
    fireEvent.keyDown(toDateInput, {
      key: "Enter",
      code: "Enter",
      charCode: 13,
    });

    act(() => {
      fireEvent.change(payMyBillFilter, {
        target: { value: "invoiceNumber" },
      });
    });
    expect(payMyBillFilter.value).toEqual("invoiceNumber");

    await waitFor(() => container.getByText("invoiceNumber"));
    const invoiceNumberInput = container.getByTestId("invoice-number-filter");
    act(() => {
      fireEvent.change(invoiceNumberInput, { target: { value: "123456" } });
    });
    expect(invoiceNumberInput.value).toEqual("123456");

    fireEvent.keyDown(invoiceNumberInput, {
      key: "Enter",
      code: "Enter",
      charCode: 13,
    });
  });
});
