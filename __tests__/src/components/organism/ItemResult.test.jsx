import { fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import ItemResult from "../../../../src/components/organisms/ItemResult/ItemResult";

window.scrollTo = jest.fn();

describe("Item Result Components", () => {
  let container;
  const providerData = { name: "Dr. Sonha Nguyen" };
  beforeEach(() => {
    container = render(<ItemResult providerData={providerData} />);
  });

  it("render desktop", async () => {
    await waitFor(() => container.getAllByText(providerData.name));
    expect(container.getAllByText(providerData.name)[0]).toBeInTheDocument();
  });

  it("render desktop", async () => {
    container = render(
      <ItemResult providerData={providerData} isDesktop={false} />
    );
    await waitFor(() => container.getAllByText(providerData.name));
    expect(container.getAllByText(providerData.name)[0]).toBeInTheDocument();
  });
});
