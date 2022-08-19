import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import AccountDrawer from "../../../../src/components/molecules/AccountDrawer/accountDrawer";

window.scrollTo = jest.fn()

describe("AccountDrawer Components", () => {
  let container;
  beforeEach(() => {
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
  });

  it("AccountDrawer render", () => {
    expect(container).toMatchSnapshot();

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

});
