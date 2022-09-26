import { act, fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../../src/store/store";
import MedicalRecordPage from "../../../src/pages/patient/account/medical-record";
import mediaQuery from 'css-mediaquery';

describe("MedicalRecordPage", () => {
  let container;
  beforeEach(() => {
    container = render(
      <Provider store={store}>
        {MedicalRecordPage.getLayout(<MedicalRecordPage />)}
      </Provider>
    );
  });

  function createMatchMedia(width) {
    return query => ({
        matches: mediaQuery.match(query, { width }),
        addListener: () => { },
        removeListener: () => { },
    });
  }

  test("renders MedicalRecordPage Mobile", () => {
    expect(container).toMatchSnapshot();
  });

  // test("renders MedicalRecordPage Mobile Components", async () => {
  //   await waitFor(() => {
  //   container.getByText("Your lab results are available. Please reach out to your provider.");
  // })
  // });

  test("renders MedicalRecordPage Desktop", () => {
    window.matchMedia = createMatchMedia('1920px');
    container.rerender(
      <Provider store={store}>
        {MedicalRecordPage.getLayout(<MedicalRecordPage />)}
      </Provider>
    );
  });

  // test("renders MedicalRecordPage Desktop Components", async () => {
  //   await waitFor(() => {
  //   container.getByText("Your lab results are available. Please reach out to your provider.");
  // })
  // });
});
