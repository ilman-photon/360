import { fireEvent, render, waitFor } from "@testing-library/react";
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
  },
  filterbyData: [
    {
      name: "Available Today",
      checked: false,
    },
    {
      name: "language",
      checklist: [
        {
          name: "Arabic",
          checked: false,
        },
        {
          name: "Chinese",
          checked: false,
        },
        {
          name: "English",
          checked: false,
        },
        {
          name: "Farsi",
          checked: false,
        },
        {
          name: "French",
          checked: false,
        },
        {
          name: "Spanish",
          checked: false,
        },
        {
          name: "Portuguese",
          checked: false,
        },
        {
          name: "Korean",
          checked: false,
        },
        {
          name: "German",
          checked: false,
        },
        {
          name: "Italian",
          checked: false,
        },
        {
          name: "Indonesian",
          checked: false,
        },
      ],
    },
    {
      name: "Insurance",
      checklist: [
        {
          name: "In Network",
          checked: false,
        },
        {
          name: "Out of Network",
          checked: false,
        },
      ],
    },
    {
      name: "Gender",
      checklist: [
        {
          name: "Male",
          checked: false,
        },
        {
          name: "Female",
          checked: false,
        },
        {
          name: "Non-Binary",
          checked: false,
        },
      ],
    },
  ],
};
describe("App", () => {
  let container;
  beforeEach(() => {
    const mock = new MockAdapter(axios);
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2022, 3, 1));
    const mockGeolocation = {
      getCurrentPosition: jest.fn(),
      watchPosition: jest.fn(),
    };

    mock
      .onGet(`/api/dummy/appointment/create-appointment/getSugestion`)
      .reply(200, MOCK_SUGGESTION_DATA);
    window = Object.assign(window, { innerWidth: 1500 });
    global.navigator.geolocation = mockGeolocation;
    container = render(
      <Provider store={store}>
        {Appointment.getLayout(<Appointment />)}
      </Provider>
    );
  });

  it("renders App unchanged", async () => {
    await waitFor(() => {
      container.getByText(/Schedule an eye/i);
    });
    expect(container.getByText(/Schedule an eye/i)).toBeInTheDocument();
  });

  it("on render mobile view", async () => {
    window = Object.assign(window, { innerWidth: 500 });
    await waitFor(() => {
      container.getByText(/Schedule an eye/i);
    });
    expect(container.getByText(/Schedule an eye/i)).toBeInTheDocument();

    const locationField = container.getByText(/City, state, or zip/i);
    fireEvent.change(locationField, { value: "Texas" });
    fireEvent.click(locationField);
    await waitFor(() => {
      const cancelButton = container.getByText(/Cancel/i);
      expect(container.getByText(/Cancel/i)).toBeInTheDocument();
      fireEvent.click(cancelButton);
    });

    const dateField = container.getByText(/Date/i);
    fireEvent.click(dateField);
    await waitFor(() => {
      const cancelButton = container.getByText(/Cancel/i);
      expect(container.getByText(/Cancel/i)).toBeInTheDocument();
      fireEvent.click(cancelButton);
    });

    const pusposeField = container.getByText(/Purpose of Visit/i);
    fireEvent.click(pusposeField);
    await waitFor(() => {
      const cancelButton = container.getByText(/Cancel/i);
      expect(container.getByText(/Cancel/i)).toBeInTheDocument();
      fireEvent.click(cancelButton);
    });

    const insuranceField = container.getByText(/Insurance Carrier/i);
    fireEvent.click(insuranceField);
    await waitFor(() => {
      const cancelButton = container.getByText(/Cancel/i);
      expect(container.getByText(/Cancel/i)).toBeInTheDocument();
      fireEvent.click(cancelButton);
    });

    const Searchbutton = container.getByText(/Search/i);
    fireEvent.click(Searchbutton);

    await waitFor(() => {
      container.getByText(/is required/i);
      expect(container.getByText(/is required/i)).toBeInTheDocument();
    });
  });

  it("on render tablet view", async () => {
    window = Object.assign(window, { innerWidth: 1000 });
    setTimeout(async () => {
      await waitFor(() => {
        container.getByText(/Map/i);
        expect(container.getByText(/Map/i)).toBeInTheDocument();
      });
    }, 1000);
  });
});
