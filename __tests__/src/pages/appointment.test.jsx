import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Appointment from "../../../src/pages/patient/appointment";
import { Provider } from "react-redux";
import store from "../../../src/store/store";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

const MOCK_SUGGESTION_DATA = {
  appointmentType: [
    {
      id: "1",
      name: "Eye Exam",
      description: "Test the health of your eye",
    },
    {
      id: "2",
      name: "Follow up",
      description: "See your doctor today",
    },
    {
      id: "3",
      name: "Comprehensive",
      description: "Get detailed eye exam",
    },
    {
      id: "4",
      name: "Contacts Only",
      description: "Get fitted for the right contacts",
    },
  ],
  insuranceCarrier: {
    general: [
      {
        id: "1",
        name: "I'm paying out of my pocket",
      },
      {
        id: "2",
        name: "skip and choose insurance later",
      },
      {
        id: "3",
        name: "Other Insurance",
      },
    ],
    popular: [
      {
        id: "4",
        name: "Aetna",
      },
      {
        id: "5",
        name: "Aetna",
      },
      {
        id: "6",
        name: "Blue Cross Blue Shield",
      },
      {
        id: "7",
        name: "Cigna",
      },
    ],
    all: [
      {
        id: "8",
        name: "Kaiser",
      },
    ],
  }
}
describe("App", () => {
  let container;
  beforeEach(() => {
    const mock = new MockAdapter(axios);
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2022, 3, 1));
    const mockGeolocation = {
      getCurrentPosition: jest.fn(),
      watchPosition: jest.fn()
    };

    mock.onPost(`/api/dummy/appointment/create-appointment/submitFilter`).reply(200, MOCK_SUGGESTION_DATA);
    
    global.navigator.geolocation = mockGeolocation;
    container = render(
      <Provider store={store}>
        {Appointment.getLayout(<Appointment />)}
      </Provider>
    );
  });

  it("renders App unchanged", () => {
    expect(container).toMatchSnapshot();
  });

  it("on render mobile view", async () => {
    window = Object.assign(window, { innerWidth: 500 });
    await waitFor(() => {
      container.getByText(/Schedule an eye/i);
    });
    expect(container.getByText(/Schedule an eye/i)).toBeInTheDocument();
  });

});
