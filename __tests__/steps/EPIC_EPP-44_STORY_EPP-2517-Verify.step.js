import { act, fireEvent, render, waitFor, cleanup } from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import { Provider } from "react-redux";
import Bio, { getServerSideProps } from "../../src/pages/patient/bio/[bio]";
import store from "../../src/store/store";
import { Marker, useLoadScript } from "@react-google-maps/api";
const useRouter = jest.spyOn(require("next/router"), "useRouter");
import constants from "../../src/utils/constants";
import { Login } from "../../src/components/organisms/Login/login";
import Appointments from "../../src/pages/patient/appointments";
import { MOCK_APPOINTMENT, MOCK_PAST } from "../../__mocks__/mockResponse";
import { renderAppointmentDetail } from "../../__mocks__/commonSteps";
import FilterResult from "../../src/components/molecules/FilterResult/filterResult";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-2517.feature"
);

jest.mock("@react-google-maps/api", () => ({
  useLoadScript: () => ({
    isLoaded: true,
    loadError: null
  }),
  GoogleMap: () => <div></div>,
  Marker: () => <Marker />
}));

defineFeature(feature, (test) => {
let container;
const mock = new MockAdapter(axios);
const element = document.createElement("div");
let appointmentsContainer;

const { APPOINTMENT_TEST_ID } = constants.TEST_ID;

const providerList = [
  {
    providerId: "1",
    address: {
      addressLine1: "51 West 51st Street",
      addressLine2: "Floor 3, Suite 320 Midtown",
      city: "Florida",
      state: "FR",
      zipcode: "54231",
    },
    rating: "5",
    name: "Paul Wagner Md",
    phoneNumber: "(123) 123-4567",
    distance: "10 mi",
    image: "/doctor.png",
    from: "2022-09-19",
    to: "2022-09-24",
    availability: [
      {
        date: "2022-09-19",
        list: [
          {
            time: "11:30am",
            key: 12222,
          },
        ],
      },
      {
        date: "2022-09-20",
        list: [
          {
            time: "08:00am",
            key: 12223,
          },
          {
            time: "10:30am",
            key: 12224,
          },
          {
            time: "11:00am",
            key: 12225,
          },
          {
            time: "12:00pm",
            key: 12226,
          },
          {
            time: "13:00pm",
            key: 12227,
          },
          {
            time: "14:00pm",
            key: 12228,
          },
        ],
      },
      {
        date: "2022-09-21",
        list: [
          {
            time: "08:30am",
            key: 12229,
          },
          {
            time: "10:30am",
            key: 12230,
          },
        ],
      },
      {
        date: "2022-09-22",
        list: [
          {
            time: "09:30am",
            key: 12237,
          },
          {
            time: "11:00am",
            key: 12238,
          },
        ],
      },
      {
        date: "2022-09-23",
        list: [
          {
            time: "09:30am",
            key: 12239,
          },
        ],
      },
      {
        date: "2022-09-24",
        list: [
          {
            time: "09:30am",
            key: 12240,
          },
        ],
      },
    ],
    coordinate: {
      latitude: 32.751204,
      longitude: -117.1641166,
    },
  },
  {
    providerId: "2",
    address: {
      addressLine1: "51 West 51st Street",
      addressLine2: "Floor 3, Suite 320 Midtown",
      city: "Florida",
      state: "FR",
      zipcode: "54231",
    },
    rating: "5",
    name: "Paul Wagner Md",
    phoneNumber: "(123) 123-4567",
    distance: "10 mi",
    image: "/doctor.png",
    from: "2022-09-19",
    to: "2022-09-24",
    availability: [
      {
        date: "2022-09-19",
        list: [
          {
            time: "11:30am",
            key: 12222,
          },
        ],
      },
      {
        date: "2022-09-20",
        list: [
          {
            time: "08:00am",
            key: 12223,
          },
          {
            time: "10:30am",
            key: 12224,
          },
          {
            time: "11:00am",
            key: 12225,
          },
          {
            time: "12:00pm",
            key: 12226,
          },
          {
            time: "13:00pm",
            key: 12227,
          },
          {
            time: "14:00pm",
            key: 12228,
          },
        ],
      },
      {
        date: "2022-09-21",
        list: [
          {
            time: "08:30am",
            key: 12229,
          },
        ],
      },
      {
        date: "2022-09-22",
        list: [
          {
            time: "09:30am",
            key: 12237,
          },
          {
            time: "11:00am",
            key: 12238,
          },
        ],
      },
      {
        date: "2022-09-23",
        list: [
          {
            time: "09:30am",
            key: 12239,
          },
        ],
      },
      {
        date: "2022-09-24",
        list: [
          {
            time: "09:30am",
            key: 12240,
          },
        ],
      },
    ],
    coordinate: {
      latitude: 32.751204,
      longitude: -117.1641166,
    },
  },
  {
    providerId: "3",
    name: "Paul Wagner Md",
    address: {
      addressLine1: "51 West 51st Street",
      addressLine2: "Floor 3, Suite 320 Midtown",
      city: "Florida",
      state: "FR",
      zipcode: "54231",
    },
    rating: "5",
    phoneNumber: "(123) 123-4567",
    distance: "10 mi",
    image: "/doctor.png",
    from: "2022-09-19",
    to: "2022-09-24",
    availability: [
      {
        date: "2022-09-19",
        list: [
          {
            time: "11:30am",
            key: 12222,
          },
        ],
      },
      {
        date: "2022-09-20",
        list: [
          {
            time: "08:00am",
            key: 12223,
          },
          {
            time: "10:30am",
            key: 12224,
          },
          {
            time: "11:00am",
            key: 12225,
          },
          {
            time: "12:00pm",
            key: 12226,
          },
          {
            time: "13:00pm",
            key: 12227,
          },
          {
            time: "14:00pm",
            key: 12228,
          },
        ],
      },
      {
        date: "2022-09-21",
        list: [
          {
            time: "08:30am",
            key: 12229,
          },
          {
            time: "10:30am",
            key: 12230,
          },
        ],
      },
      {
        date: "2022-09-22",
        list: [
          {
            time: "09:30am",
            key: 12237,
          },
          {
            time: "11:00am",
            key: 12238,
          },
        ],
      },
      {
        date: "2022-09-23",
        list: [
          {
            time: "09:30am",
            key: 12239,
          },
        ],
      },
      {
        date: "2022-09-24",
        list: [
          {
            time: "09:30am",
            key: 12240,
          },
        ],
      },
    ],
    coordinate: {
      latitude: 32.751204,
      longitude: -117.1641166,
    },
  },
];

const launchURL = () => {
    const mockOnLoginClicked = jest.fn((data, route, callback) => {
        callback({
            status: "success",
        });
    });
    container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
}

const clickScheduleExam = async() => {
  cleanup();
  mock
      .onGet(
          `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/upcoming`
      )
      .reply(200, MOCK_APPOINTMENT);
  mock
      .onGet(
          `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/history`
      )
      .reply(200, MOCK_PAST);
  act(() => {
      appointmentsContainer = render(
          <Provider store={store}>
              {Appointments.getLayout(<Appointments />)}
          </Provider>
      );
  });
  await waitFor(() =>
      appointmentsContainer.getByText(/View appointment details/i)
  );
  expect(
      appointmentsContainer.getByText(/Past Appointments/i)
  ).toBeInTheDocument();
  expect(
      appointmentsContainer.getByText(/Schedule New Appointment/i)
  ).toBeInTheDocument();
}

const inputLocation = async (customLocation) => {
  const locationInput = await waitFor(() => container.getByLabelText("City, state, or zip code"))
  act(() => {
    fireEvent.change(locationInput, { target: { value: customLocation || "VA" } });
  });
}

const inputPurpose = async () => {
  const purposeInput = await waitFor(() => container.getByTestId("select-purposes-of-visit"))
  act(() => {
    fireEvent.change(purposeInput, { target: { value: "Eye Exam" } });
  });
}

const inputInsurance = async () => {
  const insuranceInput = await waitFor(() => container.getByLabelText("Insurance Carrier"))
  act(() => {
    fireEvent.change(insuranceInput, { target: { value: "Aetna" } });
  });
}

const clickSearch = async () => {
  const searchBtn = await waitFor(() => container.getByTestId(APPOINTMENT_TEST_ID.searchbtn))
  fireEvent.click(searchBtn)
}

const inputDate = async () => {
  const dateInput = await waitFor(() => container.getByLabelText("Date"))
  act(() => {
    fireEvent.change(dateInput, { target: { value: "22-09-2022" } });
  });
}

const resultsScreen = async () => {
  const rangeDate = { startDate: "2022-10-10", endDate: "2022-10-15" }
  container = render(
    <FilterResult isDesktop={true} 
      providerList={providerList} 
      rangeDate={rangeDate} 
      purposeOfVisitData={[]}
      insuranceCarrierData={[]}
      googleApiKey={"Test"}
      filterData = {{
        location: "",
        date: "",
        purposeOfVisit: "",
        insuranceCarrier: "",
      }}
    />
  );
  expect(await waitFor(() => container.getByTestId(APPOINTMENT_TEST_ID.FILTER_RESULT.container))).toBeInTheDocument()
}

  test('EPIC_EPP-44_STORY_EPP-2517 - Verify user able to see an error message when there are no results for the searched location and selected date of appointment.', ({ given, and, then, when }) => {
    given('user launch the Marketing Site url', () => {
      launchURL();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
      clickScheduleExam();
    });

    then('user navigates to the search screen', async() => {
      await renderAppointmentDetail();
      expect(container.getAllByText("Date and time")).toBeTruthy();
      expect(container.getAllByText("Insurance")).toBeTruthy();
      expect(container.getAllByText("No Insurance provided")).toBeTruthy();
      expect(container.getAllByText("Purpose of visit")).toBeTruthy();      
    });

    and('user enters the location', () => {
      inputLocation();
    });

    and('user selects the date of appointment', () => {
      inputDate();
    });

    and('user chooses the purpose of the visit', () => {
      inputPurpose();
    });

    and('user enters the insurance name', () => {
      inputInsurance();
    });

    and('user clicks on the Search button', () => {
      clickSearch();
    });

    and('user views the results in the Schedule Appointments screen', () => {
      resultsScreen();
    });

    and('user views the selected location.', () => {
      expect(container.getAllByTestId("loc_hourButton")[0]).toBeInTheDocument();
    });

    and('user increases the radius search locations', () => {
      expect(true).toBeTruthy();
    });

    and(/^user search the providers with distance greater than (\d+) miles$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('application not displaying any providers', () => {
      expect(true).toBeTruthy();
    });

    when(/^user increasing radius distance greater than (\d+) miles$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user views the error message \'No appointment slots based upon your request. Please try again with a different combination.\'', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2517 - Verify user should not see an error message when with distance less than 20 miles for the searched location and selected date of appointment.', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
      launchURL();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
      clickScheduleExam();
    });

    then('user navigates to the search screen', async() => {
      await renderAppointmentDetail();
      expect(container.getAllByText("Date and time")).toBeTruthy();
      expect(container.getAllByText("Insurance")).toBeTruthy();
      expect(container.getAllByText("No Insurance provided")).toBeTruthy();
      expect(container.getAllByText("Purpose of visit")).toBeTruthy();  
    });

    and('user enters the location', () => {
      inputLocation();
    });

    and('user selects the date of appointment', () => {
      inputDate();
    });

    and('user chooses the purpose of the visit', () => {
      inputPurpose();
    });

    and('user enters the insurance name', () => {
      inputInsurance();
    });

    and('user clicks on the Search button', () => {
      clickSearch();
    });

    and('user views the results in the Schedule Appointments screen', () => {
      resultsScreen();
    });

    and('user views the selected location.', () => {
      expect(container.getAllByTestId("loc_hourButton")[0]).toBeInTheDocument();
    });

    and('user increases the radius search locations', () => {
      expect(true).toBeTruthy();
    });

    and(/^user search the providers with distance less than (\d+) miles$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('user views the search results', () => {
      resultsScreen();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2517 - Verify user able to see an error message when there are no results for the searched location 25 miles distance of providers locations and selected date of appointment.', ({ given, and, then, when }) => {
    given('user launch the Marketing Site url', () => {
      launchURL();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
      clickScheduleExam();
    });

    then('user navigates to the search screen', async() => {
      await renderAppointmentDetail();
      expect(container.getAllByText("Date and time")).toBeTruthy();
      expect(container.getAllByText("Insurance")).toBeTruthy();
      expect(container.getAllByText("No Insurance provided")).toBeTruthy();
      expect(container.getAllByText("Purpose of visit")).toBeTruthy();  
    });

    and('user enters the location', () => {
      inputLocation();
    });

    and('user selects the date of appointment', () => {
      inputDate();
    });

    and('user chooses the purpose of the visit', () => {
      inputPurpose();
    });

    and('user enters the insurance name', () => {
      inputInsurance();
    });

    and('user clicks on the Search button', () => {
      clickSearch();
    });

    and('user views the results in the Schedule Appointments screen', () => {
      resultsScreen();
    });

    and('user views the selected location.', () => {
      expect(container.getAllByTestId("loc_hourButton")[0]).toBeInTheDocument();
    });

    and('user increases the radius search locations', () => {
      expect(true).toBeTruthy();
    });

    and(/^user searched location (\d+) miles distance of providers locations$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    and('application not displaying any providers', () => {
      expect(true).toBeTruthy();
    });

    when(/^user increasing distance (\d+) miles$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    then('user views the error message \'No appointment slots based upon your request. Please try again with a different combination.\'', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2517 - Verify user able to see an error message when user entered the invalid location and there are no results for the searched location and selected date of appointment.', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
      launchURL();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
      clickScheduleExam();
    });

    then('user navigates to the search screen', async() => {
      await renderAppointmentDetail();
      expect(container.getAllByText("Date and time")).toBeTruthy();
      expect(container.getAllByText("Insurance")).toBeTruthy();
      expect(container.getAllByText("No Insurance provided")).toBeTruthy();
      expect(container.getAllByText("Purpose of visit")).toBeTruthy();  
    });

    and('user enters the location', () => {
      inputLocation();
    });

    and('user selects the date of appointment', () => {
      inputDate();
    });

    and('user chooses the purpose of the visit', () => {
      inputPurpose();
    });

    and('user enters the insurance name', () => {
      inputInsurance();
    });

    and('user clicks on the Search button', () => {
      clickSearch();
    });

    and('user views the results in the Schedule Appointments screen', () => {
      resultsScreen();
    });

    and('user views the selected location.', () => {
      expect(container.getAllByTestId("loc_hourButton")[0]).toBeInTheDocument()
    });

    and('user entered the invalid locations to search', () => {
      expect(true).toBeTruthy();
      inputLocation("1K239J");
      clickSearch();
    });

    then('user views the error message \'No appointment slots based upon your request. Please try again with a different combination.\'', () => {
      expect(true).toBeTruthy();
    });
  });
});
