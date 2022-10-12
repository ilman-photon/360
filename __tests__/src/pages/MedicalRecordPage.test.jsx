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


  test("renders MedicalRecordPage Mobile", () => {
    expect(container).toMatchSnapshot();
  });
});