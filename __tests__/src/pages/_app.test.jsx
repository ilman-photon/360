import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../../src/pages/_app";
import HomePage from "../../../src/pages/patient";

describe("App", () => {
  it("renders App unchanged", () => {
    const { container } = render(<App Component={HomePage} />);
    expect(container).toMatchSnapshot();
  });
});
