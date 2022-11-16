import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProfileDrawer from "../../../../src/components/molecules/ProfileDrawer/profileDrawer";

describe("ProfileDrawer Components", () => {
  let container;

  beforeEach(() => {
    container = render(
      <ProfileDrawer
        opened={true}
        onClose={jest.fn()}
        onLogoutClicked={jest.fn()}
      />
    );
  });

  it("Component Render and handle onClick back", async () => {
    const buttonHome = await waitFor(() => container.getAllByText(/Home/i)[0]);
    expect(buttonHome).toBeInTheDocument();
    await waitFor(() => fireEvent.click(buttonHome));
    const buttonAccount = await waitFor(
      () => container.getAllByText(/Account/i)[0]
    );
    expect(buttonAccount).toBeInTheDocument();
    await waitFor(() => fireEvent.click(buttonAccount));
    const buttonBackAccount = await waitFor(
      () => container.getAllByText(/Account/i)[0]
    );
    expect(buttonBackAccount).toBeInTheDocument();
    await waitFor(() => fireEvent.click(buttonBackAccount));
  });

  it("Component Render and handle navigate click", async () => {
    const buttonHome = await waitFor(() => container.getAllByText(/Home/i)[0]);
    expect(buttonHome).toBeInTheDocument();
    await waitFor(() => fireEvent.click(buttonHome));
    const buttonAccount = await waitFor(
      () => container.getAllByText(/Account/i)[0]
    );
    expect(buttonAccount).toBeInTheDocument();
    await waitFor(() => fireEvent.click(buttonAccount));
    const profileInformation = await waitFor(
      () => container.getAllByText(/Profile Information/i)[0]
    );
    expect(profileInformation).toBeInTheDocument();
    await waitFor(() => fireEvent.click(profileInformation));
  });

  it("Component Render with empty data", async () => {
    container = render(<ProfileDrawer />);
  });
});
