import { cleanup, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import AccountCard from "../../../../src/components/molecules/AccountCard/accountCard";
import { createMatchMedia } from "../../../../__mocks__/commonSteps";

describe("AccountCard Components", () => {
  let container;
  beforeEach(() => {
    window.matchMedia = createMatchMedia("800px");
    container = render(
      <AccountCard
        title="AccountCard title"
        isEditing={false}
        titleIcon={null}
        isAppoinment={true}
      />
    );
  });

  it("AccountCard render desktop", async () => {
    await waitFor(() => container.getAllByText("AccountCard title"));
    expect(container.getAllByText("AccountCard title")[0]).toBeInTheDocument();
  });

  it("AccountCard render mobile", async () => {
    window.matchMedia = createMatchMedia("650px");
    cleanup();
    container = render(
      <AccountCard
        title="AccountCard title"
        isEditing={true}
        titleIcon={null}
        isAppoinment={true}
        isDashboard={true}
        ariaLabel={"Test Heading"}
      />
    );
    await waitFor(() => container.getAllByLabelText("Test Heading"));
    expect(container.getAllByLabelText("Test Heading")[0]).toBeInTheDocument();
  });
});
