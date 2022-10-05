import { fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Appointment from "../../../src/pages/patient/appointment";
import { Provider } from "react-redux";
import store from "../../../src/store/store";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import mediaQuery from "css-mediaquery";
import { act } from "react-dom/test-utils";
import {
  mockAppointmentTypes,
  mockInsurance,
  submitFilter,
} from "../../../__mocks__/mockResponse";
import { TEST_ID } from "../../../src/utils/constants";
function createMatchMedia(width) {
  return (query) => ({
    matches: mediaQuery.match(query, { width }),
    addListener: () => {},
    removeListener: () => {},
  });
}
describe("App", () => {
  let container;
  const mock = new MockAdapter(axios);
  beforeEach(() => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2022, 3, 1));
    const mockGeolocation = {
      getCurrentPosition: jest.fn(),
      watchPosition: jest.fn(),
    };

    mock
      .onGet("/ecp/appointments/appointment-types", mockAppointmentTypes)
      .reply(200, mockAppointmentTypes);
    mock
      .onGet("/ecp/appointments/insurance/allpayers", mockInsurance)
      .reply(200, mockInsurance);
    mock
      .onPut("/ecp/appointments/available-slot?searchText=Texas")
      .reply(200, submitFilter);
    window.matchMedia = createMatchMedia("1920px");
    global.navigator.geolocation = mockGeolocation;
    container = render(
      <Provider store={store}>
        {Appointment.getLayout(<Appointment />)}
      </Provider>
    );
  });

  afterEach(() => {
    mock.reset();
  });

  it("renders App unchanged", async () => {
    await waitFor(() => {
      container.getAllByText(/City, state, or zip code/i);
    });
    expect(
      container.getByText(/City, state, or zip code/i)
    ).toBeInTheDocument();
  });

  it("on render mobile view", async () => {
    window.matchMedia = createMatchMedia("700px");
    act(() => {
      container = render(
        <Provider store={store}>
          {Appointment.getLayout(<Appointment />)}
        </Provider>
      );
    });
    await waitFor(() => container.getAllByText(/Schedule an eye exam/i));
    expect(container.getByText(/Schedule an eye exam/i)).toBeInTheDocument();

    const locationField = container.getAllByText(/City, state, or zip/i)[1];
    fireEvent.change(locationField, { value: "Texas" });
    fireEvent.click(locationField);
    await waitFor(() => container.getByText(/Cancel/i));
    const cancelButton = container.getByText(/Cancel/i);
    expect(container.getByText(/Cancel/i)).toBeInTheDocument();
    fireEvent.click(cancelButton);

    const dateField = container.getAllByText(/Date/i)[1];
    fireEvent.click(dateField);
    await waitFor(() => container.getByText(/Cancel/i));
    expect(container.getByText(/Cancel/i)).toBeInTheDocument();
    fireEvent.click(cancelButton);

    const pusposeField = container.getAllByText(/Purpose of Visit/i)[1];
    fireEvent.click(pusposeField);
    await waitFor(() => container.getByText(/Cancel/i));
    expect(container.getByText(/Cancel/i)).toBeInTheDocument();
    fireEvent.click(cancelButton);

    const insuranceField = container.getAllByText(/Insurance Carrier/i)[1];
    fireEvent.click(insuranceField);
    await waitFor(() => container.getByText(/Cancel/i));
    expect(container.getByText(/Cancel/i)).toBeInTheDocument();
    fireEvent.click(cancelButton);

    const Searchbutton = container.getAllByTestId(
      TEST_ID.APPOINTMENT_TEST_ID.searchbtn
    )[0];
    fireEvent.click(Searchbutton);

    await waitFor(() => {
      container.getByText(/is required/i);
      expect(container.getByText(/is required/i)).toBeInTheDocument();
    });
  }, 30000);

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
