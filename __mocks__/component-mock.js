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
      query: "",
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
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
  withRouter() {
    return jest.fn();
  },
}));

jest.mock("react-idle-timer", () => ({
  useIdleTimer: jest.fn().mockReturnValue({
    getRemainingTime: jest.fn(),
    isPrompted: jest.fn(),
    activate: jest.fn(),
  }),
}));
