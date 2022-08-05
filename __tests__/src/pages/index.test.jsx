import { render } from "@testing-library/react";
import Home from "../../../src/pages/index";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../../src/store/store";

describe("Home", () => {
  it("renders homepage unchanged", () => {
    const { container } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
