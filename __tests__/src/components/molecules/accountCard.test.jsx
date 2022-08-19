import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import AccountCard from "../../../../src/components/molecules/AccountCard/accountCard";

describe("AccountCard Components", () => {
  let container;
  beforeEach(() => {
    container = render(<AccountCard title="AccountCard title" isEditing={false} titleIcon={null} />);
  });

  it("AccountCard render", async () => {
    expect(container).toMatchSnapshot();
  });
});
