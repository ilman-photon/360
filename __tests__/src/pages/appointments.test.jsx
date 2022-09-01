import Appointments from "../../../src/pages/patient/appointments";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "next/app";

describe("Render Bio", () => {
  let container;
  beforeEach(() => {
    container = render(<App Component={Appointments} />);
  });

  test("is Bio page render", () => {
    expect(container).toMatchSnapshot();
  });
});
