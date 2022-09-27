import { act, fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { Provider } from "react-redux";
import store from "../../../src/store/store";
import axios from "axios";
import MedicalRecordPage from "../../../src/pages/patient/account/medical-record/index";
import mediaQuery from 'css-mediaquery';
import React, { useState as useStateMock } from 'react';

describe("MedicalRecordPage", () => {
  jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: jest.fn(),
  }))

  let container;
  const mock = new MockAdapter(axios);
  const element = document.createElement("div");
  // const setState = jest.fn()
  // beforeEach(async () => {
  //   useStateMock.mockImplementation(init => [init, setState])
  // });

  // afterEach(() => {
  //   mock.reset();
  // });
  
    container = render(
      <Provider store={store}>
        <MedicalRecordPage />
      </Provider>
    )

  beforeEach(() => {
    container = render(
      <Provider store={store}>
        <MedicalRecordPage />
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

  test("renders MedicalRecordPage Mobile Components", async () => {
    await waitFor(() => {
    container.getByText("Your lab results are available. Please reach out to your provider.");
  })
  });

  test("renders MedicalRecordPage Desktop", () => {
    window.matchMedia = createMatchMedia('1920px');
    container.rerender(
      <Provider store={store}>
        <MedicalRecordPage />
      </Provider>
    );
  });

  test("renders MedicalRecordPage Mobile", () => {
    expect(container).toMatchSnapshot();
  });

  test("renders MedicalRecordPage Desktop Components", async () => {
    await waitFor(() => {
    container.getByText("Your lab results are available. Please reach out to your provider.");
  })
  });
});