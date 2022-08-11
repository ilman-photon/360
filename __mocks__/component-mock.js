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

jest.mock('next/router', () => ({
  useRouter() {
    return ({
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn()
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null)
    });
  },
  withRouter(){
    return jest.fn()
  }
}));
