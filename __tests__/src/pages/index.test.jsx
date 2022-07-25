import { render, screen } from "@testing-library/react";
import Home from "../../../src/pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders homepage unchanged", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
