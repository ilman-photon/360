import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import FilterResultContainer from "../../../../src/components/molecules/FilterResultContainer/filterResultContainer";

window.scrollTo = jest.fn()

describe("FilterResult Components", () => {
  let container;
  beforeEach(() => {
    container = render(<FilterResultContainer/>);
  });

  it("FilterResult render", async () => {
    await waitFor(() => container.getByText("List View"));
    expect(container.getByText("List View")).toBeInTheDocument();
  });
});
