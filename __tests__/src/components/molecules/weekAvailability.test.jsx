import { fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { WeekAvailability } from "../../../../src/components/molecules/WeekAvailability/WeekAvailability";
import constants from "../../../../src/utils/constants";

describe("WeekAvailability Components", () => {
  let container;
  beforeEach(() => {
    container = render(
      <WeekAvailability onClickViewAllAvailability={jest.fn()} />
    );
  });

  it("WeekAvailability render", async () => {
    await waitFor(() => {
      container.getAllByText(/more/i);
    });
    expect(container.getAllByText(/more/i)[0]).toBeInTheDocument();
  });
});
