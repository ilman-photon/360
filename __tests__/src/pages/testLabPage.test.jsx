import { act, fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../../src/store/store";
import TestLabPage from "../../../src/pages/patient/account/documents/test-lab-result";
import mediaQuery from 'css-mediaquery';

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
    return query => ({
        matches: mediaQuery.match(query, { width }),
        addListener: () => { },
        removeListener: () => { },
    });
  }

  test("renders TestLabPage Mobile", () => {
    expect(container).toMatchSnapshot();
  });

  test("renders TestLabPage Mobile Components", () => {
    container.getByText("Your lab results are available. Please reach out to your provider.");
    
    container.getByText("Procedure");
    container.getByText("Test Date");
    container.getAllByText("Ordered by");
    container.getAllByText("Test Status");
    
    const closeIcon = container.getByTestId('close-disclaimer-icon');
    fireEvent.click(closeIcon);
  });

  test("renders TestLabPage Desktop", () => {
    window.matchMedia = createMatchMedia('1920px');
    container.rerender(
      <Provider store={store}>
        {TestLabPage.getLayout(<TestLabPage />)}
      </Provider>
    );
  });

  test("renders TestLabPage Desktop Components", () => {
    container.getByText("Your lab results are available. Please reach out to your provider.");
    
    container.getByText("Test Name");
    container.getByText("Ordered by");
    container.getByText("Test Date");
    container.getByText("Test Status");
  });
});
