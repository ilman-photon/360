import { act, cleanup, fireEvent, waitFor } from "@testing-library/react";
import { renderWithProviders } from "../../utils/test-util";

import "@testing-library/jest-dom";
import BaseHeader from "../../../../src/components/organisms/BaseHeader/baseHeader";
import constants from "../../../../src/utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

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

const createData = (id, isRead, type, createdAt, content, details) => {
  return {
    id,
    isRead,
    type,
    createdAt,
    content,
    details,
  };
};

const realDummyNotifications = [
  createData(
    1,
    false,
    "appointment-first-reminder",
    "2022-10-26T13:22:45.177Z",
    "You have an <b>Block/No Appt appointment</b> in 3 days.",
    {
      appointmentData: {
        appointmentId: "123456",
        appointmentDate: "2022-10-26T13:22:45.177Z",
        appointmentTypes: {
          name: "Block/No Appt",
        },
      },
    }
  ),
  createData(
    2,
    false,
    "appointment-second-reminder",
    "2022-10-26T13:22:45.177Z",
    "You have an <b>Block/No Appt appointment</b> tomorrow.",
    {
      appointmentData: {
        appointmentId: "123456",
        appointmentDate: "2022-10-26T13:22:45.177Z",
        appointmentTypes: {
          name: "Block/No Appt",
        },
      },
    }
  ),
  createData(
    3,
    false,
    "prescription-refill",
    "2022-10-26T13:22:45.177Z",
    "You have an <b>Block/No Appt appointment</b> tomorrow."
  ),
  createData(
    4,
    false,
    "test-result",
    "2022-10-26T13:22:45.177Z",
    "Your <b>lab test results</b> are available now."
  ),
  createData(
    5,
    false,
    "message",
    "2022-10-26T13:22:45.177Z",
    "You have received a <b>new message</b> from <b>John Roe, O.D.</b>",
    {
      messageData: {
        messageId: "12345",
      },
      providerData: {
        providerName: "John Roe, O.D.",
      },
    }
  ),
  createData(
    6,
    false,
    "invoice",
    "2022-10-26T13:22:45.177Z",
    "There’s a new <b>outstanding invoice</b>",
    {
      invoiceData: {
        invoiceId: "12345",
      },
    }
  ),
  createData(
    7,
    false,
    "appointment-summary",
    "2022-10-26T13:22:45.177Z",
    "Your visit summary for your appointment on <b>Tuesday, May 15</b> is available now.",
    {
      visitSummaryData: {
        visitSummaryId: "12345",
      },
    }
  ),
  createData(
    8,
    false,
    "prescription-glasses",
    "2022-10-26T13:22:45.177Z",
    "You have your <b>glasses prescription</b> available now."
  ),
  createData(
    9,
    false,
    "prescription-contact",
    "2022-10-26T13:22:45.177Z",
    "You have your <b>contact lens prescription</b> available now."
  ),
  createData(
    10,
    false,
    "prescription-aspirin",
    "2022-10-26T13:22:45.177Z",
    "Your <b>Aspirin prescription</b> is now available."
  ),
  createData(
    11,
    false,
    "contact-lens",
    "2022-10-26T13:22:45.177Z",
    "Your <b>Contact Lens</b> are available for pickup."
  ),
  createData(
    12,
    false,
    "glasses",
    "2022-10-26T13:22:45.177Z",
    "Your <b>Glasses</b> are available for pickup."
  ),
  createData(
    13,
    false,
    "aspirin",
    "2022-10-26T13:22:45.177Z",
    "Hi! It is time to take your medication: <b>Aspirin</b>"
  ),
];

describe("BaseHeader", () => {
  afterAll(() => {
    cleanup();
  });

  beforeEach(() => {
    // ! WE MAKE SURE THE MOCKS ARE CLEARED BEFORE EACH TEST CASE
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();

    const mock = new MockAdapter(axios);
    mock.onGet("/ecp/messagealert/getalerts/7dba6139-e2aa-4994-bb72-af6f1b11b94a").reply(200, {alerts: realDummyNotifications});

    Object.defineProperty(document, 'cookie', {
      writable: true,
      value: 'authorized=true;accessToken=1234',
    });

    act(() => {
      container = renderWithProviders(
        <BaseHeader
          backTitle=""
          isPrescription={false}
          OnLogoutClicked={() => jest.fn()}
          onBackClicked={() => jest.fn()}
        />);
    });
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

  it("redirect to respected Notification Items", async () => {
    const notificationIcon = await waitFor(() => container.getByTestId("notification-badge-icon"))
    fireEvent.click(notificationIcon)
    const notificationItems = await waitFor(() => container.getAllByTestId("notification-item"))
    notificationItems.forEach((item) => {
      fireEvent.click(item)
    })
  })
})