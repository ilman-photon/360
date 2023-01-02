import MyCareTeamPage from "../../../src/pages/patient/my-care-team";
import "@testing-library/jest-dom";
import { act, fireEvent, render, waitFor } from "@testing-library/react";
import store from "../../../src/store/store";
import { Provider } from "react-redux";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import {
  MOCK_OPEN_INVOICES,
  MOCK_INVOICE_HISTORY,
} from "../../../__mocks__/mockResponse";

import PayMyBillPage from "../../../src/pages/patient/pay-my-bill/index";
const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("Render PayMyBillPage", () => {
  let container;
  const mock = new MockAdapter(axios);
  const mockRouter = {
    back: jest.fn(),
    query: { 
      username: "patient1@gmail.com",
      activeTab: 0 
    },
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    pathname: "/patient/set-password",
    asPath: "/patient/set-password?username=patient1@gmail.com",
  };

  const renderList = async () => {
    useRouter.mockReturnValue({
            ...mockRouter
        }
    );

    const domain = window.location.origin;
    mock
      .onGet(`${domain}/api/dummy/payMyBill/getOpenInvoices`)
      .reply(200, MOCK_OPEN_INVOICES);
    mock
      .onGet(`${domain}/api/dummy/payMyBill/getInvoiceHistory`)
      .reply(200, MOCK_INVOICE_HISTORY);

    act(() => {
      container = render(
        <Provider store={store}>
          <PayMyBillPage />
        </Provider>
      );
    });
  };

  test("is PayMyBillPage page rendered", async () => {
    await renderList();
    await waitFor(() => container.getByText("makePayment"));
  });
});
