import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Register from "../../../../src/components/organisms/Register/register";

describe("SecurityQuestion Components", () => {
  let container;
  beforeEach(() => {
    container = render(<Register />);
  });

  it("select option render", () => {
    expect(container).toMatchSnapshot();
  });
});
