import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Marker from "../../../../../src/components/organisms/Google/Maps/marker";
import { Wrapper } from "@googlemaps/react-wrapper";
import MapsComponent from "../../../../../src/components/organisms/Google/Maps/mapsComponent";

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

describe("Marker", () => {
  let container;
  beforeEach(() => {
    container = render(
    <Wrapper apiKey={process.env.GOOGLE_API_KEY}>
      <MapsComponent>
        <Marker position={{ lat: -34.397, lng: 150.644 }} />
      </MapsComponent>
    </Wrapper>);
  });
  it("Marker render", () => {
    expect(container).toMatchSnapshot();
  });
});
