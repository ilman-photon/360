import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import AccountLayout from "../../../../src/components/templates/accountLayout";
import { Provider } from "react-redux";
import store from "../../../../src/store/store";
import mediaQuery from "css-mediaquery";
import { setPageMessage } from "../../../../src/store";

jest.mock("universal-cookie", () => {
  class MockCookies {
    static result = {};
    get() {
      return MockCookies.result;
    }
    remove() {
      return jest.fn();
    }
  }
  return MockCookies;
});

function createMatchMedia(width) {
  return (query) => ({
    matches: mediaQuery.match(query, { width }),
    addListener: () => {},
    removeListener: () => {},
  });
}

describe("Account Layout Components", () => {
  let container;
  beforeEach(() => {
    window.matchMedia = createMatchMedia("700px");
    store.dispatch(setPageMessage({ isShow: true }));
    container = render(
      <Provider store={store}>
        <AccountLayout
          pageMessage={{
            isShow: true,
          }}
          theme="patient"
          currentActivePage="profile-info"
        >
          TESS
        </AccountLayout>
      </Provider>
    );
  });
  afterAll(() => {
    jest.resetAllMocks();
  });

  it("render component", () => {
    expect(container.getByText("TESS")).toBeInTheDocument();
  });

  it("Render Component with pagename insurance-info", () => {
    store.dispatch(setPageMessage({ isShow: false }));
    container = render(
      <Provider store={store}>
        <AccountLayout
          pageMessage={{
            isShow: false,
          }}
          theme="no-patient"
          currentActivePage="insurance-info"
        >
          Child
        </AccountLayout>
      </Provider>
    );
    expect(container.getByText("Child")).toBeInTheDocument();
  });

  it("Render Component without props", () => {
    window.matchMedia = createMatchMedia("1200px");

    container = render(
      <Provider store={store}>
        <AccountLayout>Unit Test</AccountLayout>
      </Provider>
    );
    expect(container.getByText("Unit Test")).toBeInTheDocument();
  });

  it("Render Component with no pagename", () => {
    store.dispatch(
      setPageMessage({
        content: null,
      })
    );
    container = render(
      <Provider store={store}>
        <AccountLayout>Unit Test</AccountLayout>
      </Provider>
    );
    expect(container.getByText("Unit Test")).toBeInTheDocument();
  });
});
