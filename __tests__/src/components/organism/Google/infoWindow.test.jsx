import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Marker from "../../../../../src/components/organisms/Google/Maps/marker";
import { Wrapper } from "@googlemaps/react-wrapper";
import MapsComponent from "../../../../../src/components/organisms/Google/Maps/mapsComponent";
import InfoWindow from "../../../../../src/components/organisms/Google/Maps/infoWindow";
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

describe("InfoWindow", () => {
  let container;
  const mRef = null
  beforeEach(() => {
    container = render(
    <Wrapper apiKey={process.env.GOOGLE_API_KEY}>
      <MapsComponent>
        <Marker ref={mRef} position={{ lat: -34.397, lng: 150.644 }} />
        <InfoWindow
          marker={mRef}
        >
          <div>
            <h4>Test</h4>
          </div>
        </InfoWindow>
      </MapsComponent>
    </Wrapper>);
  });
  it("InfoWindow render", () => {
    expect(container).toMatchSnapshot();
  });
});
