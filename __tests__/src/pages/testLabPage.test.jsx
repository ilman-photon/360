import { act, fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../../src/store/store";
import TestLabPage from "../../../src/pages/patient/account/medical-record/test-lab-result";
import mediaQuery from "css-mediaquery";

describe("TestLabPage", () => {
  let container;
  beforeEach(() => {
    container = render(
      <Provider store={store}>
        {TestLabPage.getLayout(<TestLabPage />)}
      </Provider>
    );
  });

  function createMatchMedia(width) {
    return (query) => ({
      matches: mediaQuery.match(query, { width }),
      addListener: () => {},
      removeListener: () => {},
    });
  }

  test("renders TestLabPage Mobile Components", async () => {
    await waitFor(() => {
      container.getByText(
        "Your lab results are available. Please reach out to your provider."
      );
    });
  });

  test("renders TestLabPage Desktop", () => {
    window.matchMedia = createMatchMedia("1920px");
    container.rerender(
      <Provider store={store}>
        {TestLabPage.getLayout(<TestLabPage />)}
      </Provider>
    );
  });

  test("renders TestLabPage Desktop Components", async () => {
    await waitFor(() => {
      container.getByText(
        "Your lab results are available. Please reach out to your provider."
      );
    });
  });
});
