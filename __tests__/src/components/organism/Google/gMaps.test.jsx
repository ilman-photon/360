import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import GMaps from "../../../../../src/components/organisms/Google/Maps/gMaps";
import { CircularProgress } from "@mui/material";
import { Marker, useLoadScript, GoogleMap } from "@react-google-maps/api";
import ShallowRenderer from "react-shallow-renderer";

const originalEnv = process.env;

const mockMarkerData = [
  {
    coordinate: {
      lat: 32.751204,
      lng: -117.1641166,
    },
    position: {
      lat: 32.751204,
      lng: -117.1641166,
    },
    providerData: [
      {
        providerId: "1",
        address: {
          addressLine1: "51 West 51st Street",
          addressLine2: "Floor 3, Suite 320 Midtown",
          city: "Florida",
          state: "FR",
          zipcode: "54231",
        },
        rating: "5",
        name: "Paul Wagner Md",
        phoneNumber: "(123) 123-4567",
        distance: "10 mi",
        image: "/doctor.png",
        from: "2022-09-19",
        to: "2022-09-24",
        availability: [
          {
            date: "2022-09-19",
            list: [
              {
                time: "11:30am",
                key: 12222,
              },
            ],
          },
          {
            date: "2022-09-20",
            list: [
              {
                time: "08:00am",
                key: 12223,
              },
              {
                time: "10:30am",
                key: 12224,
              },
              {
                time: "11:00am",
                key: 12225,
              },
              {
                time: "12:00pm",
                key: 12226,
              },
              {
                time: "01:00pm",
                key: 12227,
              },
              {
                time: "02:00pm",
                key: 12228,
              },
            ],
          },
          {
            date: "2022-09-21",
            list: [
              {
                time: "08:30am",
                key: 12229,
              },
              {
                time: "10:30am",
                key: 12230,
              },
              {
                time: "11:30am",
                key: 12231,
              },
              {
                time: "12:00pm",
                key: 12232,
              },
              {
                time: "01:30pm",
                key: 12233,
              },
              {
                time: "02:30pm",
                key: 12234,
              },
              {
                time: "03:30pm",
                key: 12235,
              },
              {
                time: "04:30pm",
                key: 12236,
              },
              ,
            ],
          },
          {
            date: "2022-09-22",
            list: [
              {
                time: "09:30am",
                key: 12237,
              },
              {
                time: "11:00am",
                key: 12238,
              },
            ],
          },
          {
            date: "2022-09-23",
            list: [
              {
                time: "09:30am",
                key: 12239,
              },
            ],
          },
          {
            date: "2022-09-24",
            list: [
              {
                time: "09:30am",
                key: 12240,
              },
            ],
          },
        ],
        coordinate: {
          latitude: 32.751204,
          longitude: -117.1641166,
        },
      },
      {
        providerId: "2",
        address: {
          addressLine1: "51 West 51st Street",
          addressLine2: "Floor 3, Suite 320 Midtown",
          city: "Florida",
          state: "FR",
          zipcode: "54231",
        },
        rating: "5",
        name: "Paul Wagner Nd",
        phoneNumber: "(123) 123-4567",
        distance: "10 mi",
        image: "/doctor.png",
        from: "2022-09-19",
        to: "2022-09-24",
        availability: [
          {
            date: "2022-09-19",
            list: [],
          },
          {
            date: "2022-09-20",
            list: [
              {
                time: "08:00am",
                key: 12223,
              },
              {
                time: "10:30am",
                key: 12224,
              },
              {
                time: "11:00am",
                key: 12225,
              },
              {
                time: "12:00pm",
                key: 12226,
              },
              {
                time: "01:00pm",
                key: 12227,
              },
              {
                time: "02:00pm",
                key: 12228,
              },
            ],
          },
          {
            date: "2022-09-21",
            list: [
              {
                time: "08:30am",
                key: 12229,
              },
              {
                time: "10:30am",
                key: 12230,
              },
              {
                time: "11:30am",
                key: 12231,
              },
              {
                time: "12:00pm",
                key: 12232,
              },
              {
                time: "01:30pm",
                key: 12233,
              },
              {
                time: "02:30pm",
                key: 12234,
              },
              {
                time: "03:30pm",
                key: 12235,
              },
              {
                time: "04:30pm",
                key: 12236,
              },
              ,
            ],
          },
          {
            date: "2022-09-22",
            list: [
              {
                time: "09:30am",
                key: 12237,
              },
              {
                time: "11:00am",
                key: 12238,
              },
            ],
          },
          {
            date: "2022-09-23",
            list: [],
          },
          {
            date: "2022-09-24",
            list: [
              {
                time: "09:30am",
                key: 12240,
              },
            ],
          },
        ],
        coordinate: {
          latitude: 32.751204,
          longitude: -117.1641166,
        },
      },
      {
        providerId: "3",
        name: "Paul Wagner Md",
        address: {
          addressLine1: "51 West 51st Street",
          addressLine2: "Floor 3, Suite 320 Midtown",
          city: "Florida",
          state: "FR",
          zipcode: "54231",
        },
        rating: "5",
        phoneNumber: "(123) 123-4567",
        distance: "10 mi",
        image: "/doctor.png",
        from: "2022-09-19",
        to: "2022-09-24",
        availability: [
          {
            date: "2022-09-19",
            list: [
              {
                time: "11:30am",
                key: 12222,
              },
            ],
          },
          {
            date: "2022-09-20",
            list: [
              {
                time: "08:00am",
                key: 12223,
              },
              {
                time: "10:30am",
                key: 12224,
              },
              {
                time: "11:00am",
                key: 12225,
              },
              {
                time: "12:00pm",
                key: 12226,
              },
              {
                time: "01:00pm",
                key: 12227,
              },
              {
                time: "02:00pm",
                key: 12228,
              },
            ],
          },
          {
            date: "2022-09-21",
            list: [
              {
                time: "08:30am",
                key: 12229,
              },
              {
                time: "10:30am",
                key: 12230,
              },
              {
                time: "11:30am",
                key: 12231,
              },
              {
                time: "12:00pm",
                key: 12232,
              },
              {
                time: "01:30pm",
                key: 12233,
              },
              {
                time: "02:30pm",
                key: 12234,
              },
              {
                time: "03:30pm",
                key: 12235,
              },
              {
                time: "04:30pm",
                key: 12236,
              },
              ,
            ],
          },
          {
            date: "2022-09-22",
            list: [
              {
                time: "09:30am",
                key: 12237,
              },
              {
                time: "11:00am",
                key: 12238,
              },
            ],
          },
          {
            date: "2022-09-23",
            list: [
              {
                time: "09:30am",
                key: 12239,
              },
            ],
          },
          {
            date: "2022-09-24",
            list: [],
          },
        ],
        coordinate: {
          latitude: 32.751204,
          longitude: -117.1641166,
        },
      },
    ],
  },
  {
    coordinate: {
      lat: 32.751204,
      lng: -117.1641166,
    },
    position: {
      lat: 32.751204,
      lng: -117.1641166,
    },
    providerData: [
      {
        providerId: "1",
        address: {
          addressLine1: "51 West 51st Street",
          addressLine2: "Floor 3, Suite 320 Midtown",
          city: "Florida",
          state: "FR",
          zipcode: "54231",
        },
        rating: "5",
        name: "Paul Wagner Md",
        phoneNumber: "(123) 123-4567",
        distance: "10 mi",
        image: "/doctor.png",
        from: "2022-09-19",
        to: "2022-09-24",
        availability: [
          {
            date: "2022-09-19",
            list: [
              {
                time: "11:30am",
                key: 12222,
              },
            ],
          },
          {
            date: "2022-09-20",
            list: [
              {
                time: "08:00am",
                key: 12223,
              },
              {
                time: "10:30am",
                key: 12224,
              },
              {
                time: "11:00am",
                key: 12225,
              },
              {
                time: "12:00pm",
                key: 12226,
              },
              {
                time: "01:00pm",
                key: 12227,
              },
              {
                time: "02:00pm",
                key: 12228,
              },
            ],
          },
          {
            date: "2022-09-21",
            list: [
              {
                time: "08:30am",
                key: 12229,
              },
              {
                time: "10:30am",
                key: 12230,
              },
              {
                time: "11:30am",
                key: 12231,
              },
              {
                time: "12:00pm",
                key: 12232,
              },
              {
                time: "01:30pm",
                key: 12233,
              },
              {
                time: "02:30pm",
                key: 12234,
              },
              {
                time: "03:30pm",
                key: 12235,
              },
              {
                time: "04:30pm",
                key: 12236,
              },
              ,
            ],
          },
          {
            date: "2022-09-22",
            list: [
              {
                time: "09:30am",
                key: 12237,
              },
              {
                time: "11:00am",
                key: 12238,
              },
            ],
          },
          {
            date: "2022-09-23",
            list: [
              {
                time: "09:30am",
                key: 12239,
              },
            ],
          },
          {
            date: "2022-09-24",
            list: [
              {
                time: "09:30am",
                key: 12240,
              },
            ],
          },
        ],
        coordinate: {
          latitude: 32.751204,
          longitude: -117.1641166,
        },
      },
      {
        providerId: "2",
        address: {
          addressLine1: "51 West 51st Street",
          addressLine2: "Floor 3, Suite 320 Midtown",
          city: "Florida",
          state: "FR",
          zipcode: "54231",
        },
        rating: "5",
        name: "Paul Wagner Nd",
        phoneNumber: "(123) 123-4567",
        distance: "10 mi",
        image: "/doctor.png",
        from: "2022-09-19",
        to: "2022-09-24",
        availability: [
          {
            date: "2022-09-19",
            list: [],
          },
          {
            date: "2022-09-20",
            list: [
              {
                time: "08:00am",
                key: 12223,
              },
              {
                time: "10:30am",
                key: 12224,
              },
              {
                time: "11:00am",
                key: 12225,
              },
              {
                time: "12:00pm",
                key: 12226,
              },
              {
                time: "01:00pm",
                key: 12227,
              },
              {
                time: "02:00pm",
                key: 12228,
              },
            ],
          },
          {
            date: "2022-09-21",
            list: [
              {
                time: "08:30am",
                key: 12229,
              },
              {
                time: "10:30am",
                key: 12230,
              },
              {
                time: "11:30am",
                key: 12231,
              },
              {
                time: "12:00pm",
                key: 12232,
              },
              {
                time: "01:30pm",
                key: 12233,
              },
              {
                time: "02:30pm",
                key: 12234,
              },
              {
                time: "03:30pm",
                key: 12235,
              },
              {
                time: "04:30pm",
                key: 12236,
              },
              ,
            ],
          },
          {
            date: "2022-09-22",
            list: [
              {
                time: "09:30am",
                key: 12237,
              },
              {
                time: "11:00am",
                key: 12238,
              },
            ],
          },
          {
            date: "2022-09-23",
            list: [],
          },
          {
            date: "2022-09-24",
            list: [
              {
                time: "09:30am",
                key: 12240,
              },
            ],
          },
        ],
        coordinate: {
          latitude: 32.751204,
          longitude: -117.1641166,
        },
      },
      {
        providerId: "4",
        name: "Paul Wagner Md111",
        address: {
          addressLine1: "51 West 51st Street",
          addressLine2: "Floor 3, Suite 320 Midtown",
          city: "Florida",
          state: "FR",
          zipcode: "54231",
        },
        rating: "5",
        phoneNumber: "(123) 123-4567",
        distance: "10 mi",
        image: "/doctor.png",
        from: "2022-09-19",
        to: "2022-09-24",
        availability: [
          {
            date: "2022-09-19",
            list: [
              {
                time: "11:30am",
                key: 12222,
              },
            ],
          },
          {
            date: "2022-09-20",
            list: [
              {
                time: "08:00am",
                key: 12223,
              },
              {
                time: "10:30am",
                key: 12224,
              },
              {
                time: "11:00am",
                key: 12225,
              },
              {
                time: "12:00pm",
                key: 12226,
              },
              {
                time: "01:00pm",
                key: 12227,
              },
              {
                time: "02:00pm",
                key: 12228,
              },
            ],
          },
          {
            date: "2022-09-21",
            list: [
              {
                time: "08:30am",
                key: 12229,
              },
              {
                time: "10:30am",
                key: 12230,
              },
              {
                time: "11:30am",
                key: 12231,
              },
              {
                time: "12:00pm",
                key: 12232,
              },
              {
                time: "01:30pm",
                key: 12233,
              },
              {
                time: "02:30pm",
                key: 12234,
              },
              {
                time: "03:30pm",
                key: 12235,
              },
              {
                time: "04:30pm",
                key: 12236,
              },
              ,
            ],
          },
          {
            date: "2022-09-22",
            list: [
              {
                time: "09:30am",
                key: 12237,
              },
              {
                time: "11:00am",
                key: 12238,
              },
            ],
          },
          {
            date: "2022-09-23",
            list: [
              {
                time: "09:30am",
                key: 12239,
              },
            ],
          },
          {
            date: "2022-09-24",
            list: [],
          },
        ],
        coordinate: {
          latitude: 32.7512011,
          longitude: -117.1641177,
        },
      },
    ],
  },
];

const mockMarkerWithoutData = [{}];

beforeEach(() => {
  jest.resetModules();
  process.env = {
    ...originalEnv,
    NODE_ENV: "test",
  };
});

afterEach(() => {
  process.env = originalEnv;
});

jest.mock("react", () => {
  const originReact = jest.requireActual("react");
  const mUseRef = jest.fn();
  return {
    ...originReact,
    useRef: mUseRef,
  };
});

jest.mock("@react-google-maps/api", () => ({
  useLoadScript: () => ({
    isLoaded: true,
    loadError: null,
  }),
  GoogleMap: ({ onClick, children, onLoad }) => {
    onClick();
    children[0]?.props.onClick();
    onLoad();
    return <div data-testid="gmaps-mock" />;
  },
  Marker: ({ onClick }) => {
    return <div />;
  },
}));

describe("GMaps", () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_API_KEY,
  });
  let container;
  beforeEach(() => {
    window.google = {
      maps: {
        LatLngBounds: jest.fn().mockReturnValue({ extend: jest.fn() }),
      },
    };
    container = render(
      isLoaded ? (
        <GMaps
          apiKey={process.env.GOOGLE_API_KEY}
          providerListData={mockMarkerData}
          OnTimeClicked={jest.fn()}
        />
      ) : (
        <CircularProgress />
      )
    );
  });
  it("GMaps render without data", () => {
    container = render(<GMaps />);
    expect(true).toBeTruthy();
  });
  it("GMaps render", () => {
    container = render(
      <GMaps
        apiKey={process.env.GOOGLE_API_KEY}
        providerListData={mockMarkerData}
        OnTimeClicked={jest.fn()}
      />
    );
    expect(true).toBeTruthy();
  });
  it("GMaps render with empty marker", () => {
    container = render(
      <GMaps
        apiKey={process.env.GOOGLE_API_KEY}
        providerListData={[{}]}
        OnTimeClicked={jest.fn()}
      />
    );
    expect(true).toBeTruthy();
  });
  it("GMaps render without data", () => {
    container = render(
      <GMaps
        apiKey={process.env.GOOGLE_API_KEY}
        providerListData={[
          {
            coordinate: {},
          },
        ]}
        OnTimeClicked={jest.fn()}
      />
    );
    expect(true).toBeTruthy();
  });
  it("GMaps render without data", () => {
    container = render(
      <GMaps
        apiKey={process.env.GOOGLE_API_KEY}
        providerListData={[undefined]}
        OnTimeClicked={jest.fn()}
      />
    );
    expect(true).toBeTruthy();
  });
});
