import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import GMaps from "../../../../../src/components/organisms/Google/Maps/gMaps";
import { CircularProgress } from "@mui/material";
import { Marker, useLoadScript } from "@react-google-maps/api";
import ShallowRenderer from 'react-shallow-renderer';

const originalEnv = process.env;

beforeEach(() => {
  jest.resetModules();
  process.env = {
    ...originalEnv,
    NODE_ENV: 'test',
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
    loadError: null
  }),
  GoogleMap: () => <div></div>,
  Marker: () => <Marker />
}));

describe("GMaps", () => {
  const renderer = new ShallowRenderer();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_API_KEY
  });
  let container;
  beforeEach(() => {
    container = renderer.render(
      isLoaded ? <GMaps apiKey={process.env.GOOGLE_API_KEY} /> : <CircularProgress/>
    );
  });
  it("GMaps render", () => {
    expect(container).toMatchSnapshot();
  });
});
