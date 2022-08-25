import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Wrapper } from "@googlemaps/react-wrapper";
import MapsComponent from "../../../../../src/components/organisms/Google/Maps/mapsComponent";
import React from "react";

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

describe("MapsWrapper", () => {
  let container;
  beforeEach(() => {
    container = render(
    <Wrapper apiKey={process.env.GOOGLE_API_KEY}>
      <MapsComponent />
    </Wrapper>);
  });
  it("MapsWrapper render", () => {
    expect(container).toMatchSnapshot();
  });
});
