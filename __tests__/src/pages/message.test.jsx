import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import MessagingPage from "../../../src/pages/patient/messaging";
import { Provider } from "react-redux";
import store from "../../../src/store/store";

describe("Menu Components", () => {
  let container;
  beforeEach(() => {
    container = render(
      <Provider store={store}>
        <MessagingPage />
      </Provider>
    );
  });
  it("menu render", () => {
    expect(container).toMatchSnapshot();
  });
});
