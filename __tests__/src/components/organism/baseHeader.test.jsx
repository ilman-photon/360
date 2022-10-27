import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "../../utils/test-util";

import "@testing-library/jest-dom";
import BaseHeader from "../../../../src/components/organisms/BaseHeader/baseHeader";
import constants from "../../../../src/utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

const { HOME_TEST_ID } = constants.TEST_ID
let container;

const reactRedux = { useDispatch, useSelector }
const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
const useSelectorMock = jest.spyOn(reactRedux, "useSelector");

const initialState = {
  notification: {
    list: [],
    status: "loading"
  },
};

const mockStore = configureStore({
  reducer: initialState
});


// const mockDispatch = jest.fn();
// useDispatchMock.mockReturnValue(mockDispatch);
// mockStore.dispatch = mockDispatch;

describe("BaseHeader", () => {
  afterAll(() => {
    cleanup();
  });

  beforeEach(() => {
    // ! WE MAKE SURE THE MOCKS ARE CLEARED BEFORE EACH TEST CASE
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();

    Object.defineProperty(document, 'cookie', {
      writable: true,
      value: 'authorized=true;accessToken=1234',
    });

    container = renderWithProviders(
      <BaseHeader
        backTitle=""
        isPrescription={false}
        OnLogoutClicked={() => jest.fn()}
        onBackClicked={() => jest.fn()}
      />,
      {
        testStore: mockStore
      }
    );
  });

  it("renders base header", async () => {
    const headerElement = container.getByTestId(HOME_TEST_ID.header.index)
    expect(headerElement).toBeInTheDocument()
  })

  it("renders base header with logo", async () => {
    const headerElement = container.getByTestId(HOME_TEST_ID.header.logo)
    expect(headerElement).toBeInTheDocument()
  })

  it("calls the fetchNotifications function after the first 3 minutes", () => {
    jest.useFakeTimers();
    jest.runAllTimers();

    const mockDispatch = jest.fn();
    useDispatchMock.mockReturnValue(mockDispatch);
    mockStore.dispatch = mockDispatch;

    mockStore.dispatch()
    jest.advanceTimersByTime(180000);
    mockStore.dispatch()
    expect(mockStore.dispatch).toHaveBeenCalledTimes(2);
  })
})