import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../../src/pages/_app";
import Appointment from "../../../src/pages/patient/appointment";

describe("App", () => {
  beforeEach(() => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2022, 3, 1));
  });

  it("renders App unchanged", () => {
    const { container } = render(<App Component={Appointment} />);
    expect(container).toMatchSnapshot();
  });
});
