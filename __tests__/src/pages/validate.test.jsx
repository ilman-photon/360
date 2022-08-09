import { render, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../../src/store/store";
import Validate from "../../../src/pages/patient/validate"
import * as axios from "axios";
// Mock out all top level functions, such as get, put, delete and post:
jest.mock("axios");

axios.get.mockImplementation(()=>Promise.resolve({}))

describe("Validate", () => {
    let container;
    beforeEach(() => {
        container = render(
            <Provider store={store}>
              <Validate />
            </Provider>
          );
    });
  test("renders Validate", () => {
    expect(container).toMatchSnapshot()
  });

});
