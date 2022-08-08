import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import MenuComponent from "../../../../src/components/atoms/icons/Menu/menu";

describe("Menu Components", () => {
  let container;
  beforeEach(() => {
    container = render(<MenuComponent />);
  });
  it("menu render", () => {
    expect(container).toMatchSnapshot();
  });
  it("menu click function", () => {
    const mockCallBack = jest.fn();
    container.rerender(<MenuComponent onClick={mockCallBack} />);
    const menu = container.getByRole("button", { hidden: true });
    fireEvent.click(menu);
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
