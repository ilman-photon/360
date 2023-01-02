import { act, render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Provider } from "react-redux";
import store from "../../../../src/store/store";
import MoreOptionBtn from "../../../../src/components/molecules/PayMyBill/MoreOption";

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
  beforeEach(() => {
    window.matchMedia = createMatchMedia("800px");
    container = render(<MoreOptionBtn />);
  });

  it("PayMyBillContainer render", async () => {
    fireEvent.click(container.getByTestId("MoreVertIcon"));
    expect(container.getByText("Download")).toBeInTheDocument();
    fireEvent.click(container.getByText("Download"));

    fireEvent.click(container.getByTestId("MoreVertIcon"));
    expect(container.getByText("Print")).toBeInTheDocument();
    fireEvent.click(container.getByText("Print"));
  });
});
