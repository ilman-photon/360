import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import AccountSidebar from "../../../../src/components/molecules/AccountSidebar/accountSidebar";

window.scrollTo = jest.fn();

describe("AccountSidebar Components", () => {
  let container;
  beforeEach(() => {
    container = render(<AccountSidebar />);
  });

  it("AccountSidebar render", () => {
    expect(container.getByText(/Profile Information/i)).toBeInTheDocument();
    // expect(container.getByText("Care Plan")).toBeInTheDocument();
    // expect(container.getByText("Prescriptions")).toBeInTheDocument();
    // expect(container.getByText("Test & Lab Results")).toBeInTheDocument();
    expect(container.getByText("Insurance documents")).toBeInTheDocument();
    expect(
      container.getByText("Multi factor authentication")
    ).toBeInTheDocument();

    setTimeout(() => {
      expect("Profile Information").toBeVisible();
      // expect("Care Plan").toBeVisible();
      // expect("Prescriptions").toBeVisible();
      // expect("Test & Lab Results").toBeVisible();
      expect("Insurance documents").toBeVisible();
      expect("Multi factor authentication").toBeVisible();
    }, 500);
  });
});
