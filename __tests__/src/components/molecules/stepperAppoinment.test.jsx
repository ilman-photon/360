import { cleanup, render } from "@testing-library/react";
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
  });

  afterEach(() => {
    cleanup()
  })

  it("StepperAppoinment render in step 1", () => {
    container = render(<StepperAppoinment activeStep={0} steps={mockSteps} />);
    expect(container.getByText("Location")).toBeInTheDocument();
    expect(container.getByText("1")).toBeInTheDocument();
    expect(container.getByText("3")).toBeInTheDocument();
    expect(container.getByText("4")).toBeInTheDocument();
    expect(container.getByText("5")).toBeInTheDocument();
  })

  it("StepperAppoinment render in step 2", () => {
    container = render(<StepperAppoinment activeStep={1} steps={mockSteps} />);
    expect(container.getByText("Review")).toBeInTheDocument();
    expect(container.getByText("2")).toBeInTheDocument();
  });

  it("StepperAppoinment render in step 3", () => {
    container = render(<StepperAppoinment activeStep={2} steps={mockSteps} />);
    expect(container.getByText("Appointment Details")).toBeInTheDocument();
  })

  it("StepperAppoinment render in step 4", () => {
    container = render(<StepperAppoinment activeStep={3} steps={mockSteps} />);
    expect(container.getByText("Contact Info")).toBeInTheDocument();
  })

  it("StepperAppoinment render in step 5", () => {
    container = render(<StepperAppoinment activeStep={4} steps={mockSteps} />);
    expect(container.getByText("Confirm")).toBeInTheDocument();
  })
});
