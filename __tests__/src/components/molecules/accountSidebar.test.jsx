import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import AccountSidebar from "../../../../src/components/molecules/AccountSidebar/accountSidebar";

window.scrollTo = jest.fn()

describe("AccountSidebar Components", () => {
  let container;
  beforeEach(() => {
    container = render(<AccountSidebar />);
  });

  it("AccountSidebar render", () => {
    expect(container).toMatchSnapshot();

    expect(container.getByText("Profile Information")).toBeInTheDocument();
    expect(container.getByText("Financial Information")).toBeInTheDocument();
    expect(container.getByText("Toggle accounts")).toBeInTheDocument();
    expect(container.getByText("Merge accounts")).toBeInTheDocument();
    expect(container.getByText("Prescriptions")).toBeInTheDocument();
    expect(container.getByText("Insurance documents")).toBeInTheDocument();
    expect(container.getByText("Multi factor authentication")).toBeInTheDocument();

    setTimeout(() => {
      expect("Profile Information").toBeVisible() 
      expect("Financial Information").toBeVisible()
      expect("Toggle accounts").toBeVisible() 
      expect("Merge accounts").toBeVisible()
      expect("Prescriptions").toBeVisible() 
      expect("Insurance documents").toBeVisible()
      expect("Multi factor authentication").toBeVisible()
    }, 500);
  });

});
