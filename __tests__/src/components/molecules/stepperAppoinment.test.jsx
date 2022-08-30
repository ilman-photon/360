import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import StepperAppoinment from "../../../../src/components/molecules/StepperAppoinment/stepperAppoinment";

describe("StepperAppoinment Components", () => {
  let container;
  const mockSteps = [
    "Location",
    "Review",
    "Appointment Details",
    "Contact Info",
    "Confirm",
  ];
  beforeEach(() => {
    container = render(<StepperAppoinment activeStep={1} steps={mockSteps} />);
  });

  it("StepperAppoinment render (mobile)", () => {
    expect(container).toMatchSnapshot();
    expect(container.getByText("Review")).toBeInTheDocument();
    expect(container.getByText("3")).toBeInTheDocument();
    expect(container.getByText("4")).toBeInTheDocument();
    expect(container.getByText("5")).toBeInTheDocument();
  });
});
