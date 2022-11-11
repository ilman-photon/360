import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import FloatingMessage from "../../../../src/components/molecules/FloatingMessage/floatingMessage";

window.scrollTo = jest.fn();

describe("Floating Message Components", () => {
  let container;
  beforeEach(() => {
    container = render(
      <FloatingMessage
        text="Unit Testing"
        autoHideDuration={1}
        onOpen={true}
        onClose={jest.fn()}
      />
    );
  });

  it("Floating Message render", async () => {
    const alertText = container.getAllByText(/Unit Testing/i);
    expect(alertText[0]).toBeInTheDocument();
    const containerAlert = container.getByTestId(/floating-message-close/i);
    const buttonClose = within(containerAlert).getByRole("button");
    await waitFor(() => fireEvent.click(buttonClose));
    expect(alertText[0]).toBeInTheDocument();
  });

  it("Floating Message without data", async () => {
    container = render(<FloatingMessage />);
    const alertText = container.getAllByText("");
    expect(alertText[0]).toBeInTheDocument();
  });
});
