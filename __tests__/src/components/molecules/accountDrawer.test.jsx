import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import AccountDrawer from "../../../../src/components/molecules/AccountDrawer/accountDrawer";

window.scrollTo = jest.fn()

describe("AccountDrawer Components", () => {
  beforeEach(() => {
    let container;
    container = render(<AccountDrawer sidebarLinks = {[
        { label: "Profile Information", href: "/patient/account/profile-info" },
        { label: "Financial Information", href: "#" },
        { label: "Toggle accounts", href: "#" },
        { label: "Merge accounts", href: "#" },
        { label: "Prescriptions", href: "#" },
        { label: "Insurance documents", href: "/patient/account/insurance-info" },
        { label: "Multi factor authentication", href: "#" },
      ]}
      opened={true}
      onClose={jest.fn()}
    />);

    expect(container).toMatchSnapshot();
  });

  it("AccountDrawer render", () => {
    setTimeout(() => {
      expect("Profile Information").toBeVisible() 
      expect("Financial Information").toBeVisible()
      expect("Toggle accounts").toBeVisible() 
      expect("Merge accounts").toBeVisible()
      expect("Prescriptions").toBeVisible() 
      expect("Insurance documents").toBeVisible()
      expect("Multi factor authentication").toBeVisible()
      expect("LOG OUT").toBeVisible()
    }, 500);
  });

  it("AccountDrawer render", async () => {
    const { getAllByTestId } = render(<AccountDrawer sidebarLinks = {[
      { label: "Profile Information", href: "/patient/account/profile-info" },
      { label: "Financial Information", href: "#" },
      { label: "Toggle accounts", href: "#" },
      { label: "Merge accounts", href: "#" },
      { label: "Prescriptions", href: "#" },
      { label: "Insurance documents", href: "/patient/account/insurance-info" },
      { label: "Multi factor authentication", href: "#" },
    ]}
    opened={true}
    onClose={jest.fn()}
  />);

    expect(await getAllByTestId("user-menu-nav-close")[0]).toBeInTheDocument();
    fireEvent.click(getAllByTestId("user-menu-nav-close")[0]);
  });

});
