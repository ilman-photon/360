import { createMocks } from "react-idle-timer";
import { MessageChannel } from "worker_threads";
import { cleanup } from "@testing-library/react";
import { injectStore } from "../src/pages/api/api";
import store from "../src/store/store";
import { mockDistance } from "./mockResponse";

beforeAll(() => {
  createMocks();
  global.MessageChannel = MessageChannel;
  injectStore(store);

  window.HTMLElement.prototype.scrollIntoView = function (scrollParams) {
    expect(typeof scrollParams).toEqual("object");
  };
  const env = process.env;
  process.env = {
    ...env,
    MAPBOX_API_TOKEN:
      "pk.eyJ1Ijoia3VydWt1cnVydXUiLCJhIjoiY2w2dWdteXhlMDM4eTNkczh3ZnA4c2N6NSJ9.ilTZ5K51DsrAXlnJBuD_tw",
    GOOGLE_API_KEY: "AIzaSyC-qQiijvHAdB0Ag8z4r3vZoWdPViV-wfQ",
    NEXT_PUBLIC_EMBED_API: "123",
    NEXT_PUBLIC_SYNC_LINK: "/patient/sync/set-password",
    NEXT_PUBLIC_ONE_TIME_LINK: "/patient/validate",
  };
  window.google = {
    maps: {
      DistanceMatrixService: jest.fn().mockReturnValue({
        getDistanceMatrix: (config, callback) => {
          callback && callback(mockDistance, "OK");
        },
      }),
      UnitSystem: { METRIC: 1, IMPERIAL: 0.0 },
      LatLngBounds: jest.fn().mockReturnValue({
        extend: jest.fn(),
      }),
    },
  };
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
      } else if (key === "userProfile") {
        return JSON.stringify({
          title: 0,
          firstName: "dewo",
          lastName: "Simanjuntak",
          dob: "12/12/1991",
          age: "30",
          sex: 0,
          address: [],
          smokingHistory: [],
          contactPrefrence: true,
          contactInformation: {
            phones: [{ type: 3, number: "(977) 623-4567" }],
            emails: [
              {
                type: 1,
                email: "patient123@gmail.com",
                _id: "69218e5a-dc72-4883-82c5-ea359b058c74",
                _version: "8f2d0a2a-c528-441c-a598-61e5d76eef9c",
                _created: "Oct 13, 2022, 4:31:42 PM",
                _updated: "Oct 13, 2022, 4:31:42 PM",
                _createdBy: {
                  _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                  _links: {
                    self: {
                      href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                    },
                  },
                },
              },
            ],
            noEmail: false,
            contactPreferenceDetail: {
              phone: false,
              text: false,
              email: false,
              _id: "6132788a-1a30-4b7d-b099-0e2812a4a2b2",
              _version: "7b45daa1-df05-4931-adbe-4018c9ba3bf3",
              _created: "Oct 13, 2022, 4:31:42 PM",
              _updated: "Oct 13, 2022, 4:31:42 PM",
              _createdBy: {
                _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                _links: {
                  self: {
                    href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                  },
                },
              },
            },
            _id: "ff408b85-1e4f-4dc8-9af9-64930cd3e904",
            _version: "9863ac12-b6fd-4b35-8b04-9614c8745c0d",
            _created: "Oct 13, 2022, 4:31:42 PM",
            _updated: "Oct 13, 2022, 4:31:42 PM",
            _createdBy: {
              _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
              _links: {
                self: {
                  href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                },
              },
            },
          },
          patientDetails: {
            isFlagNew: true,
            isFlagInCollection: false,
            isFlagBadCheck: false,
            isFlagDeceased: false,
            isFlagChartless: true,
            _id: "8c2a42bd-b917-4ef4-8a43-d78baae992ca",
            _version: "c8978b70-2ab5-4e89-90e4-00d03a690213",
            _created: "Oct 13, 2022, 4:31:42 PM",
            _updated: "Oct 13, 2022, 4:31:42 PM",
            _createdBy: {
              _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
              _links: {
                self: {
                  href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                },
              },
            },
          },
          alerts: [],
          familyMember: [],
          status: "CREATED",
          sources: [],
          isEmergencyContactAvailable: false,
          _links: {
            self: { href: "/v1/patients/f352a9fe-53a4-4be8-866f-851ce45331ff" },
          },
          _id: "98f9404b-6ea8-4732-b14f-9c1a168d8066",
          _version: "4a2be31b-96f8-4804-95df-a673c0801713",
          _created: "Oct 13, 2022, 4:31:42 PM",
          _updated: "Oct 19, 2022, 4:09:50 PM",
          _createdBy: {
            _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
            _links: {
              self: {
                href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
              },
            },
          },
          _updatedBy: {
            _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
            _links: {
              self: {
                href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
              },
            },
          },
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
  fromAddress: jest.fn().mockResolvedValue({
    result: [
      {
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
      },
    ],
  }),
}));

jest.mock("react-google-autocomplete/lib/usePlacesAutocompleteService", () => {
  const originalModule = jest.requireActual(
    "react-google-autocomplete/lib/usePlacesAutocompleteService"
  );
  const usePlaceService = {
    __esModule: true,
    ...originalModule,
    default: jest.fn(() => {
      return {
        placesService: {
          getDetails: (_, callback) => {
            callback({
              address_components: [
                {
                  long_name: "Jakarta",
                  short_name: "Jakarta",
                  types: ["administrative_area_level_2", "political"],
                },
                {
                  long_name: "Jakarta",
                  short_name: "Jakarta",
                  types: ["administrative_area_level_1", "political"],
                },
                {
                  long_name: "Jakarta",
                  short_name: "Jakarta",
                  types: ["street_number", "political"],
                },
                {
                  long_name: "Jakarta",
                  short_name: "Jakarta",
                  types: ["route", "political"],
                },
                {
                  long_name: "Jakarta",
                  short_name: "Jakarta",
                  types: ["postal_code", "political"],
                },
                {},
              ],
            });
          },
        },
        placePredictions: [
          {
            description: "Jakarta, Indonesia",
            matched_substrings: [{ length: 2, offset: 0 }],
            place_id: "ChIJnUvjRenzaS4RoobX2g-_cVM",
            reference: "ChIJnUvjRenzaS4RoobX2g-_cVM",
            structured_formatting: {
              main_text: "Jakarta",
              main_text_matched_substrings: [{ length: 2, offset: 0 }],
              secondary_text: "Indonesia",
            },
            terms: [
              { offset: 0, value: "Jakarta" },
              { offset: 9, value: "Indonesia" },
            ],
            types: ["colloquial_area", "locality", "political", "geocode"],
          },
        ],
        getPlacePredictions: jest.fn(),
      };
    }),
    tz: { setDefault: jest.fn() },
  };
  return usePlaceService;
});

// jest.mock("react-idle-timer", () => ({
//   useIdleTimer: jest.fn().mockReturnValue({
//     getRemainingTime: jest.fn(),
//     isPrompted: jest.fn(),
//     activate: jest.fn(),
//   }),
// }));
