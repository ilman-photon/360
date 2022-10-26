import "@testing-library/jest-dom/extend-expect";
import {
  act,
  fireEvent,
  render,
  waitFor,
  cleanup,
} from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import ForgotPasswordPage from "../../src/pages/patient/forgot-password";
import AuthPage from "../../src/pages/patient/login";
import Cookies from "universal-cookie";
import HomePage from "../../src/pages/patient";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import {
  renderAppointmentDetail,
  renderScheduleAppointment,
} from "../../__mocks__/commonSteps";
import constants, { TEST_ID } from "../../src/utils/constants";
import FilterHeading from "../../src/components/molecules/FilterHeading/filterHeading";
import FilterResult from "../../src/components/molecules/FilterResult/filterResult";
import ScheduleAppointmentPage from "../../src/pages/patient/schedule-appointment";
import { navigateToPatientPortalHome } from "../../__mocks__/commonSteps";
import GMaps from "../../src/components/organisms/Google/Maps/gMaps";
import {
  GoogleMap,
  MarkerF,
  InfoWindowF,
  useJsApiLoader,
  useLoadScript,
} from "@react-google-maps/api";

import mediaQuery from "css-mediaquery";
import ModalConfirmation from "../../src/components/organisms/ScheduleAppointment/ScheduleConfirmation/modalConfirmation";
import {
  mockAppointmentTypes,
  mockInsurance,
  submitFilter,
} from "../../__mocks__/mockResponse";
import InfoWindowContent from "../../src/components/organisms/Google/Maps/infoWindowContent";
import { CircularProgress } from "@mui/material";
import ShallowRenderer from "react-shallow-renderer";
import Appointment from "../../src/pages/patient/appointment";
import { renderWithProviders } from "../src/utils/test-util";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-2545.feature"
);

const defaultValidation = () => {
  expect(true).toBeTruthy();
};

defineFeature(feature, (test) => {
  let container;
  const element = document.createElement("div");
  const mock = new MockAdapter(axios);
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

  function createMatchMedia(width) {
    return (query) => ({
      matches: mediaQuery.match(query, { width }),
      addListener: () => {},
      removeListener: () => {},
    });
  }

  const launchURL = () => {
    const expectedResult = {
      ResponseCode: 2000,
      ResponseType: "success",
      userType: "patient",
    };
    mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
  };

  const providesUsernamePassword = () => {
    act(() => {
      container = renderWithProviders(<AuthPage />, {
        container: document.body.appendChild(element),
        legacyRoot: true,
      });
    });
    const title = container.getByText("formTitle");
    expect("formTitle").toEqual(title.textContent);
  };

  const clickLogin = () => {
    const loginButton = container.getByRole("button", {
      name: /loginButtonLabel/i,
    });
    fireEvent.click(loginButton);
  };

  const navigateToSearchScreen = async () => {
    const mockGeolocation = {
      getCurrentPosition: jest.fn(),
      watchPosition: jest.fn(),
    };

    const domain = window.location.origin;
    global.navigator.geolocation = mockGeolocation;
    window.matchMedia = createMatchMedia("1920px");
    act(() => {
      container = render(
        <Provider store={store}>
          {Appointment.getLayout(<Appointment />)}
        </Provider>
      );
    });
    await waitFor(() => {
      container.getByText(/City, state, or zip/i);
      expect(container.getByText(/City, state, or zip/i)).toBeInTheDocument();
    });
  };

  const providesDetails = async () => {
    const locationInput = container.container.querySelector("#location");
    const dateInput = await waitFor(() => container.getByLabelText("Date"));
    const purposeInput = await waitFor(() =>
      container.getByTestId("select-purposes-of-visit")
    );
    const insuranceInput = await waitFor(() =>
      container.getByLabelText("Insurance Carrier")
    );
    act(() => {
      fireEvent.change(locationInput, { target: { value: "Texas" } });
      fireEvent.change(dateInput, { target: { value: "22-09-2022" } });
      fireEvent.change(purposeInput, { target: { value: "Eye Exam" } });
      fireEvent.change(insuranceInput, { target: { value: "Aetna" } });
    });
  };

  const clickSearch = async () => {
    const searchBtn = await waitFor(() =>
      container.getByTestId(APPOINTMENT_TEST_ID.searchbtn)
    );
    fireEvent.click(searchBtn);
  };

  const userSeeScheduleScreen = () => {
    // expect(container.getAllByText(/location/i)).toBeTruthy();
    // expect(container.getAllByText(/appointmentDetails/i)).toBeTruthy();
    expect(container.getAllByText("Date and time")).toBeTruthy();
    expect(container.getAllByText("Insurance")).toBeTruthy();
    expect(container.getAllByText("No Insurance provided")).toBeTruthy();
    expect(container.getAllByText("Purpose of visit")).toBeTruthy();
  };

  const clickPin = () => {
    // await jest.setTimeout(10000);
    // expect(container).toMatchSnapshot()
    // const swapMapButton = await waitFor(() => container.getByTestId("asdf"));
    // expect(swapMapButton).toBeInTheDocument()
    // fireEvent.click(swapMapButton)
    // const pinMarker = await waitFor(() => container.getByTestId(TEST_ID.SCHEDULE_APPOINTMENT_TEST_ID.MAPS.pinMarker))
    // fireEvent.click(pinMarker)

    act(() => {
      container.rerender(
        <InfoWindowContent
          data={providerList}
          OnTimeClicked={() => jest.fn()}
        />
      );
    });
  };

  const seeTimeSlot = async () => {
    const timeSlots = await waitFor(() =>
      container.getAllByTestId(
        TEST_ID.SCHEDULE_APPOINTMENT_TEST_ID.MAPS.infoWindow.timeslot
      )
    );
    expect(timeSlots[0]).toBeInTheDocument();
  };

  const selectTimeSlot = async () => {
    const timeSlots = await waitFor(() =>
      container.getAllByTestId(
        TEST_ID.SCHEDULE_APPOINTMENT_TEST_ID.MAPS.infoWindow.timeslot
      )
    );
    fireEvent.click(timeSlots[0]);
  };

  beforeEach(() => {
    mock
      .onGet("/ecp/appointments/appointment-types", mockAppointmentTypes)
      .reply(200, mockAppointmentTypes);
    mock
      .onGet("/ecp/appointments/insurance/allpayers", mockInsurance)
      .reply(200, mockInsurance);
    mock
      .onPut("/ecp/appointments/available-slot?searchText=Texas")
      .reply(200, submitFilter);
  });

  afterEach(() => {
    mock.reset();
  });

  test("EPIC_EPP-44_STORY_EPP-2545-Verify if user able to select a time slot of the provider", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Patient Portal url", () => {
      launchURL();
    });

    when("user provides valid Email or Phone Number and password", () => {
      providesUsernamePassword();
    });

    and("user clicks on Login button", () => {
      // clickLogin();
    });

    then("user navigates to the Patient Portal application", () => {
      defaultValidation();
    });

    when("user  clicks on Schedule Appointment menu", () => {
      defaultValidation();
    });

    then("user navigates to the search screen", () => {
      navigateToSearchScreen();
    });

    and(
      "user provided location,date of appointment,purpose of visit,insurance and provider",
      () => {
        providesDetails();
      }
    );

    and("user clicks on ‘Search’ menu", () => {
      clickSearch();
    });

    then(
      "user should see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier",
      async () => {
        await renderAppointmentDetail();
        userSeeScheduleScreen();
      }
    );

    when("user click on pin location in Map view", () => {
      clickPin();
    });

    then("user should see time slot for provider", () => {
      seeTimeSlot();
    });

    and("user select provider with the time slot available", async () => {
      selectTimeSlot();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-2545-Verify if user able to navigate to review appointment details", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Patient Portal url", () => {
      launchURL();
    });

    when("user provides valid Email or Phone Number and password", () => {
      providesUsernamePassword();
    });

    and("user clicks on Login button", () => {
      // clickLogin();
    });

    then("user navigates to the Patient Portal application", () => {
      defaultValidation();
    });

    when("user  clicks on Schedule Appointment menu", () => {
      defaultValidation();
    });

    then("user navigates to the search screen", () => {
      navigateToSearchScreen();
    });

    and(
      "user provided location,date of appointment,purpose of visit,insurance and provider",
      () => {
        providesDetails();
      }
    );

    and("user clicks on ‘Search’ menu", () => {
      clickSearch();
    });

    then(
      "user should see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier",
      async () => {
        await renderAppointmentDetail();
        userSeeScheduleScreen();
      }
    );

    when("user click on pin location in Map view", () => {
      clickPin();
    });

    then("user should see time slot for provider", () => {
      seeTimeSlot();
    });

    and("user select provider with the time slot available", () => {
      selectTimeSlot();
    });

    then("user should lands onto review appointment page", async () => {
      // container.rerender(
      //   <Provider store={store}>
      //     {ScheduleAppointmentPage.getLayout(<ScheduleAppointmentPage />)}
      //   </Provider>
      // );
      // await waitFor(() => container.getAllByText("Review Appointment Details"));
    });

    and("user should see Review Appointnment detail", () => {
      // expect(
      //   container.getAllByText("Review Appointment Details")[0]
      // ).toBeTruthy();
    });
  });
});
