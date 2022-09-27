import { createMocks } from "react-idle-timer";
import { MessageChannel } from "worker_threads";
import { cleanup } from "@testing-library/react";
import { injectStore } from "../src/pages/api/api";
import store from "../src/store/store";

beforeAll(() => {
  createMocks();
  global.MessageChannel = MessageChannel;
  injectStore(store);
});

afterAll(cleanup);

jest.mock("@fontsource/roboto", () => {
  return jest.fn();
});
jest.mock("@fontsource/libre-franklin", () => {
  return jest.fn();
});
jest.mock("next/dynamic", () => ({
  __esModule: true,
  default: (...props) => {
    const matchedPath = /(.)*(\'(.*)\')(.)*/.exec(props[0].toString());
    if (matchedPath) return require(matchedPath[3]);
    // eslint-disable-next-line react/display-name
    else return () => <></>;
  },
}));

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: jest.fn(),
      asPath: "",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    };
  },
  withRouter: (component) => {
    component.defaultProps = {
      ...component.defaultProps,
      router: { pathname: "mocked-path" },
    };
    return component;
  },
}));

jest.mock("next-i18next", () => ({
  use: () => {
    return {
      init: () => {},
    };
  },
  t: (k) => k,
  appWithTranslation: (Component) => {
    return Component;
  },
  useTranslation: () => {
    return {
      t: (str) => str,
      ready: true,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
  withRouter() {
    return jest.fn();
  },
}));

const localStorageMock = (function() {
  let store = {}

  return {
    getItem: function(key) {
      if (key === 'userData') {
        return JSON.stringify({
          "communicationMethod": {
            "email": "patient1@photoninfotech.net",
            "phone": "(977) 623-4567"
          },
          "patientId": "98f9404b-6ea8-4732-b14f-9c1a168d8066"
        });
      }
      return store[key] || null
    },
    setItem: function(key, value) {
      store[key] = value.toString()
    },
    removeItem: function(key) {
      delete store[key]
    },
    clear: function() {
      store = {}
    }
  }
})()

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
})

// jest.mock("react-idle-timer", () => ({
//   useIdleTimer: jest.fn().mockReturnValue({
//     getRemainingTime: jest.fn(),
//     isPrompted: jest.fn(),
//     activate: jest.fn(),
//   }),
// }));
