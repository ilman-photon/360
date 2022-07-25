import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { StyledButton } from "../../../../src/components/atoms/Button/button";

describe("Button Components", () => {
  it("is button render", () => {
    const { container } = render(<StyledButton />);
    const boxes = container.getElementsByClassName("custom-button");
    expect(boxes).toBeTruthy();
  });
  it("is button render when primary true", () => {
    const { container } = render(<StyledButton primary={true} />);
    const boxes = container.getElementsByClassName("custom-button");
    expect(boxes).toBeTruthy();
  });
  it("is button render when primary false", () => {
    const { container } = render(<StyledButton primary={false} />);
    const boxes = container.getElementsByClassName("custom-button");
    expect(boxes).toBeTruthy();
  });
  it("is button render when gradient true", () => {
    const { container } = render(<StyledButton gradient={true} />);
    const boxes = container.getElementsByClassName("custom-button--gradient");
    expect(boxes).toBeTruthy();
  });
  it("is button render when size large", () => {
    const { container } = render(<StyledButton size="large" />);
    const boxes = container.getElementsByClassName("custom-button--large");
    expect(boxes).toBeTruthy();
  });
  it("is button render when size small", () => {
    const { container } = render(<StyledButton size="small" />);
    const boxes = container.getElementsByClassName("custom-button--small");
    expect(boxes).toBeTruthy();
  });
  it("is button render when Gradient false", () => {
    const { container } = render(<StyledButton gradient={false} />);
    const boxes = container.querySelector(".custom-button--gradient");
    expect(boxes).toBeFalsy();
  });
});
