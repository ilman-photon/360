import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import StepperAppoinment from "../../../../src/components/molecules/StepperAppoinment/stepperAppoinment";
import mediaQuery from 'css-mediaquery';

describe("StepperAppoinment Components", () => {
  let container;
  const mockSteps = [
    "Location",
    "Review",
    "Appointment Details",
    "Contact Info",
    "Confirm",
  ];

  function createMatchMedia(width) {
    return query => ({
        matches: mediaQuery.match(query, { width }),
        addListener: () => { },
        removeListener: () => { },
    });
  }

  beforeEach(() => {
    window.matchMedia = createMatchMedia('1920px');
    container = render(<StepperAppoinment activeStep={1} steps={mockSteps} />);
  });

  it("StepperAppoinment render (mobile)", () => {
    expect(container).toMatchSnapshot();
    expect(container.getByText("Location")).toBeInTheDocument();
    expect(container.getByText("Review")).toBeInTheDocument();
    expect(container.getByText("Appointment Details")).toBeInTheDocument();
    expect(container.getByText("Contact Info")).toBeInTheDocument();
    expect(container.getByText("Confirm")).toBeInTheDocument();
    expect(container.getByText("3")).toBeInTheDocument();
    expect(container.getByText("4")).toBeInTheDocument();
    expect(container.getByText("5")).toBeInTheDocument();
  });
});
