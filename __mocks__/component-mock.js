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
jest.mock("@progress/kendo-react-pdf", () => {
  return {
    savePDF: (component, options, callback) => {
      callback();
    },
  };
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
      replace: jest.fn(),
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

const localStorageMock = (function () {
  let store = {};

  return {
    getItem: function (key) {
      if (key === "userData") {
        return JSON.stringify({
          communicationMethod: {
            email: "patient1@photoninfotech.net",
            phone: "(977) 623-4567",
          },
          patientId: "98f9404b-6ea8-4732-b14f-9c1a168d8066",
        });
      }
      return store[key] || null;
    },
    setItem: function (key, value) {
      store[key] = value.toString();
    },
    removeItem: function (key) {
      delete store[key];
    },
    clear: function () {
      store = {};
    },
  };
})();

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

jest.mock("react-geocode", () => ({
  setApiKey: jest.fn(),
  setLanguage: jest.fn(),
  setLocationType: jest.fn(),
  enableDebug: jest.fn(),
  fromLatLng: jest.fn().mockResolvedValue({
    plus_code: {
      compound_code:
        "JXR9+C93 Limus Nunggal, Bogor Regency, West Java, Indonesia",
      global_code: "6P58JXR9+C93",
    },
    results: [
      {
        address_components: [
          {
            long_name: "No.27",
            short_name: "No.27",
            types: ["street_number"],
          },
          {
            long_name: "Jalan Tegal VI",
            short_name: "Jl. Tegal VI",
            types: ["route"],
          },
          {
            long_name: "Limus Nunggal",
            short_name: "Limus Nunggal",
            types: ["administrative_area_level_4", "political"],
          },
          {
            long_name: "Kecamatan Cileungsi",
            short_name: "Kec. Cileungsi",
            types: ["administrative_area_level_3", "political"],
          },
          {
            long_name: "Kabupaten Bogor",
            short_name: "Kabupaten Bogor",
            types: ["administrative_area_level_2", "political"],
          },
          {
            long_name: "Jawa Barat",
            short_name: "Jawa Barat",
            types: ["administrative_area_level_1", "political"],
          },
          {
            long_name: "Indonesia",
            short_name: "ID",
            types: ["country", "political"],
          },
          {
            long_name: "16820",
            short_name: "16820",
            types: ["postal_code"],
          },
        ],
        formatted_address:
          "Jl. Tegal VI No.27, Limus Nunggal, Kec. Cileungsi, Kabupaten Bogor, Jawa Barat 16820, Indonesia",
        geometry: {
          location: {
            lat: -6.3590351,
            lng: 106.9684472,
          },
          location_type: "ROOFTOP",
          viewport: {
            northeast: {
              lat: -6.357686119708498,
              lng: 106.9697961802915,
            },
            southwest: {
              lat: -6.360384080291502,
              lng: 106.9670982197085,
            },
          },
        },
        place_id: "ChIJ5WVkK6eTaS4Rin5bgE35-n4",
        plus_code: {
          compound_code:
            "JXR9+99 Limus Nunggal, Bogor Regency, West Java, Indonesia",
          global_code: "6P58JXR9+99",
        },
        types: ["street_address"],
      },
    ],
    status: "OK",
  }),
}));

// jest.mock("react-idle-timer", () => ({
//   useIdleTimer: jest.fn().mockReturnValue({
//     getRemainingTime: jest.fn(),
//     isPrompted: jest.fn(),
//     activate: jest.fn(),
//   }),
// }));
