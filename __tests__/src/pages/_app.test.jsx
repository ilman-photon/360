import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../../src/pages/_app";
import Login from "../../../src/components/organisms/Login/login";

describe("App", () => {
  it("renders App unchanged", () => {
    const { container } = render(<App Component={jest.fn()} />);
    expect(container).toMatchSnapshot();
  });
});
