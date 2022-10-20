import { render } from "@testing-library/react";

import StyledInput from "../../../../src/components/atoms/Input/input";
import "@testing-library/jest-dom";

describe("StyledInput", () => {
  it("renders input components with type text", () => {
    const { container } = render(<StyledInput type="text" />);
    const input = container.getElementsByClassName("custom-input");
    expect(input).toBeTruthy();
  });

  it("renders input components with type password", () => {
    const { container } = render(
      <StyledInput
        type="password"
        variant="filled"
        label="Text"
        adorment={true}
      />
    );
    const input = container.getElementsByClassName("custom-input");
    expect(input).toBeTruthy();
  });

  it("renders input components with type dob", () => {
    const { container } = render(
      <StyledInput
        type="dob"
        variant="outlined"
        label="Dates"
        adorment={false}
      />
    );
    const input = container.getElementsByClassName("custom-input");
    expect(input).toBeTruthy();
  });
});
