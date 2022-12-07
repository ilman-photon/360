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
import { getServerSideProps } from "../../src/pages/patient/mfa";
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

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-2569.feature"
);

const defaultValidation = () => {
  expect(true).toBeTruthy();
};

defineFeature(feature, (test) => {
  let container;
  const { APPOINTMENT_TEST_ID, SEARCH_PROVIDER_TEST_ID } = constants.TEST_ID;

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

  const searchScreen = () => {
    window.matchMedia = createMatchMedia("1920px");
    const mockFilterData = {
      date: null,
      location: "",
      insuranceCarrier: "",
      purposeOfVisit: "",
    };
    container = render(
      <FilterHeading
        isDesktop={true}
        isTablet={false}
        onSearchProvider={() => {
          jest.fn();
        }}
        onSwapButtonClicked={() => {
          jest.fn();
        }}
        isGeolocationEnabled={false}
        filterData={mockFilterData}
        purposeOfVisitData={[]}
        insuranceCarrierData={[]}
      />
    );
  };

  const inputLocation = async () => {
    const locationInput = await waitFor(() =>
      container.getByLabelText("City, state, or zip code")
    );
    act(() => {
      fireEvent.change(locationInput, { target: { value: "Texas" } });
    });
  };

  const inputDate = async () => {
    const dateInput = await waitFor(() => container.getByLabelText("Date"));
    act(() => {
      fireEvent.change(dateInput, { target: { value: "22-09-2022" } });
    });
  };

  const inputPurpose = async () => {
    const purposeInput = await waitFor(() =>
      container.getByTestId("select-purposes-of-visit")
    );
    act(() => {
      fireEvent.change(purposeInput, { target: { value: "Eye Exam" } });
    });
  };

  const inputInsurance = async () => {
    const insuranceInput = await waitFor(() =>
      container.getByLabelText("Insurance Carrier")
    );
    act(() => {
      fireEvent.change(insuranceInput, { target: { value: "Aetna" } });
    });
  };

  const clickSearch = async () => {
    const searchBtn = await waitFor(() =>
      container.getByTestId(APPOINTMENT_TEST_ID.searchbtn)
    );
    fireEvent.click(searchBtn);
  };

  const provideFilters = () => {
    inputLocation();
    inputDate();
    inputPurpose();
    inputInsurance();
    clickSearch();
  };

  const reviewAppPage = async () => {
    container.rerender(
      <Provider store={store}>
        {ScheduleAppointmentPage.getLayout(<ScheduleAppointmentPage />)}
      </Provider>
    );
    await waitFor(() => container.getByText("Review Appointment Details"));
    const continueButton = container.getAllByText("continue")[0];
    fireEvent.click(continueButton);
  };

  const clickMyself = async () => {
    await waitFor(() => container.getByText("myself"));
    expect(container.getAllByText("myself")).toBeTruthy();
    expect(container.getAllByText("someoneElse")).toBeTruthy();
    const myselfButton = container.getByText("myself");
    fireEvent.click(myselfButton);
    const continueButton = container.getAllByText("continue")[0];
    fireEvent.click(continueButton);
  };

  const provideFirstLastNameValid = async () => {
    await waitFor(() => container.getAllByText(/First Name/i));
    const field1 = container.getAllByLabelText(/First Name/i)[0];
    fireEvent.change(field1, { target: { value: "first" } });

    const field2 = container.getAllByLabelText(/Last Name/i)[0];
    fireEvent.change(field2, { target: { value: "last" } });
  };

  const clickSaveAction = () => {
    const saveButton = container.getByRole("button", {
      name: "scheduleAppoinment",
    });
    fireEvent.click(saveButton);
  };

  const errorEmailPhone = async () => {
    await waitFor(() =>
      container.getByText("Email ID or Mobile Number is required")
    );
    const inputFieldError = container.getByText(
      "Email ID or Mobile Number is required"
    );
    expect(inputFieldError).toBeTruthy();
    expect("Email ID or Mobile Number is required").toEqual(
      inputFieldError.textContent
    );
  };

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the Mobile number is not allowing the Maximum limit -1 (Need to confirm)", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      () => {
        searchScreen();
        provideFilters();
      }
    );

    and("user review the appointments.", () => {
      reviewAppPage();
    });

    and("select the Appointment for Myself.", () => {
      clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      defaultValidation();
    });

    and("Guest user should see the Guest Access screen.", () => {
      defaultValidation();
    });

    and("enter the First name, Last name.", () => {
      provideFirstLastNameValid();
    });

    and("enter the valid Date of birth", () => {
      expect(container.getAllByText(/Date of Birth/i)[0]).toBeInTheDocument();
    });

    and("enter the Email ID", () => {
      const field4 = container.getByLabelText("Email");
      fireEvent.change(field4, { target: { value: "aa@aa.aa" } });
    });

    and("enter the Mobile number", () => {
      const field3 = container.getAllByLabelText(/Mobile Number/i)[0];
      fireEvent.change(field3, { target: { value: "3" } });
    });

    and("click the Continue button.", () => {
      clickSaveAction();
    });

    then("it should not display the error message for mobile", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the Mobile number is allowing the Maximum limit (Need to confirm)", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      () => {
        searchScreen();
        provideFilters();
      }
    );

    and("user review the appointments.", () => {
      reviewAppPage();
    });

    and("select the Appointment for Myself.", () => {
      clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      defaultValidation();
    });

    and("Guest user should see the Guest Access screen.", () => {
      defaultValidation();
    });

    and("enter the First name, Last name.", () => {
      provideFirstLastNameValid();
    });

    and("enter the valid Date of birth", () => {
      expect(container.getAllByText(/Date of Birth/i)[0]).toBeInTheDocument();
    });

    and("enter the Email ID", () => {
      const field4 = container.getByLabelText("Email");
      fireEvent.change(field4, { target: { value: "aa@aa.aa" } });
    });

    and("enter the Mobile number", () => {
      const field3 = container.getAllByLabelText(/Mobile Number/i)[0];
      fireEvent.change(field3, { target: { value: "3" } });
    });

    and("click the Continue button.", () => {
      clickSaveAction();
    });

    then("it should not display the error message for mobile", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether its displaying the error message Incorrect Mobile number is displaying if we enter the many special characters inbetween the Mobile number.", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      () => {
        searchScreen();
        provideFilters();
      }
    );

    and("user review the appointments.", () => {
      reviewAppPage();
    });

    and("select the Appointment for Myself.", () => {
      clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      defaultValidation();
    });

    and("Guest user should see the Guest Access screen.", () => {
      defaultValidation();
    });

    and("enter the First name, Last name.", () => {
      provideFirstLastNameValid();
    });

    and("enter the valid Date of birth", () => {
      expect(container.getAllByText(/Date of Birth/i)[0]).toBeInTheDocument();
    });

    and("enter the Email ID", () => {
      const field4 = container.getByLabelText("Email");
      fireEvent.change(field4, { target: { value: "aa@aa.aa" } });
    });

    and("enter many special characters inbetween Mobile number", () => {
      const field3 = container.getByLabelText("Mobile Number *");
      fireEvent.change(field3, { target: { value: "^&*%$" } });
    });

    and("click the Continue button.", () => {
      clickSaveAction();
    });

    then("it should display the error message Incorrect mobile number", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether its displaying the error message Incorrect Mobile number is displaying if we enter the Alphabets inbetween the Mobile number.", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      () => {
        searchScreen();
        provideFilters();
      }
    );

    and("user review the appointments.", () => {
      reviewAppPage();
    });

    and("select the Appointment for Myself.", () => {
      clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      defaultValidation();
    });

    and("Guest user should see the Guest Access screen.", () => {
      defaultValidation();
    });

    and("enter the First name, Last name.", () => {
      provideFirstLastNameValid();
    });

    and("enter the valid Date of birth", () => {
      expect(container.getAllByText(/Date of Birth/i)[0]).toBeInTheDocument();
    });

    and("enter the Email ID", () => {
      const field4 = container.getByLabelText("Email");
      fireEvent.change(field4, { target: { value: "aa@aa.aa" } });
    });

    and("enter the alphabet inbetween Mobile number", () => {
      defaultValidation();
    });

    and("click the Continue button.", () => {
      defaultValidation();
    });

    then("it should display the error message Incorrect mobile number", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the Preferred mode of communication Both is selected as default.", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      () => {
        searchScreen();
        provideFilters();
      }
    );

    and("user review the appointments.", () => {
      reviewAppPage();
    });

    and("select the Appointment for Myself.", () => {
      clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      defaultValidation();
    });

    and("Guest user should see the Guest Access screen.", () => {
      defaultValidation();
    });

    then(
      "verify whether the Preferred mode of communication is selected Both as default.",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the Email field is asking for mandatory when user select the Preferred mode of communication = Email.", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      () => {
        searchScreen();
        provideFilters();
      }
    );

    and("user review the appointments.", () => {
      reviewAppPage();
    });

    and("select the Appointment for Myself.", () => {
      clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      defaultValidation();
    });

    and("Guest user should see the Guest Access screen.", () => {
      defaultValidation();
    });

    and("enter the First name, Last name.", () => {
      provideFirstLastNameValid();
    });

    and("enter the valid Date of birth", () => {
      expect(container.getAllByText(/Date of Birth/i)[0]).toBeInTheDocument();
    });

    and("enter the Mobile number", () => {
      const field3 = container.getAllByLabelText(/Mobile Number/i)[0];
      fireEvent.change(field3, { target: { value: "1231231231" } });
    });

    and("select the Preferred mode of communication = Email", () => {
      const communicationRadio = container.getByRole("radio", {
        name: /Email/i,
      });
      fireEvent.click(communicationRadio);
    });

    and("click the Continue button.", () => {
      defaultValidation();
    });

    then("Email should ask for the mandatory.", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the Mobile number field is asking for mandatory when user select the Preferred mode of communication = Phone.", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      () => {
        searchScreen();
        provideFilters();
      }
    );

    and("user review the appointments.", () => {
      reviewAppPage();
    });

    and("select the Appointment for Myself.", () => {
      clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      defaultValidation();
    });

    and("Guest user should see the Guest Access screen.", () => {
      defaultValidation();
    });

    and("enter the First name, Last name.", () => {
      provideFirstLastNameValid();
    });

    and("enter the valid Date of birth", () => {
      expect(container.getAllByText(/Date of Birth/i)[0]).toBeInTheDocument();
    });

    and("enter the Mobile number", () => {
      const field3 = container.getAllByLabelText(/Mobile Number/i)[0];
      fireEvent.change(field3, { target: { value: "" } });
    });

    and("select the Preferred mode of communication = Phone", () => {
      const communicationRadio = container.getByRole("radio", {
        name: /Phone/i,
      });
      fireEvent.click(communicationRadio);
    });

    and("click the Continue button.", () => {
      clickSaveAction();
    });

    then("Mobile number should ask for the mandatory.", () => {
      errorEmailPhone();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the Mobile number is asking for mandatory, when user enters the Email ID and set the preferred mode = Email for the first time and change the Preferred mode of communication =Phone", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      () => {
        searchScreen();
        provideFilters();
      }
    );

    and("user review the appointments.", () => {
      reviewAppPage();
    });

    and("select the Appointment for Myself.", () => {
      clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      defaultValidation();
    });

    and("Guest user should see the Guest Access screen.", () => {
      defaultValidation();
    });

    and("enter the First name, Last name.", () => {
      provideFirstLastNameValid();
    });

    and("enter the valid Date of birth", () => {
      expect(container.getAllByText(/Date of Birth/i)[0]).toBeInTheDocument();
    });

    and("enter the Email", () => {
      const field4 = container.getByLabelText("Email");
      fireEvent.change(field4, { target: { value: "aa@aa.aa" } });
    });

    and("without entering the Mobile number", () => {
      const field3 = container.getAllByLabelText(/Mobile Number/i)[0];
      fireEvent.change(field3, { target: { value: "" } });
    });

    and("select the Preferred mode of communication = Email", () => {
      const communicationRadio = container.getByRole("radio", {
        name: /Email/i,
      });
      fireEvent.click(communicationRadio);
    });

    and("change the Preferred mode of communication = Phone", () => {
      const communicationRadio = container.getByRole("radio", {
        name: /Phone/i,
      });
      fireEvent.click(communicationRadio);
    });

    and("click the Continue button.", () => {
      clickSaveAction();
    });

    then(
      "mandatory error message should display for the Mobile number field.",
      async () => {
        errorEmailPhone();
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the Email is asking for mandatory, when user enters the Mobile number and set the preferred mode = Phone for the first time and change the Preferred mode of communication =Email", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      () => {
        searchScreen();
        provideFilters();
      }
    );

    and("user review the appointments.", () => {
      reviewAppPage();
    });

    and("select the Appointment for Myself.", () => {
      clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      defaultValidation();
    });

    and("Guest user should see the Guest Access screen.", () => {
      defaultValidation();
    });

    and("enter the First name, Last name.", () => {
      provideFirstLastNameValid();
    });

    and("enter the valid Date of birth", () => {
      expect(container.getAllByText(/Date of Birth/i)[0]).toBeInTheDocument();
    });

    and("enter the Email", () => {
      defaultValidation();
    });

    and("without entering the Mobile number", () => {
      defaultValidation();
    });

    and("select the Preferred mode of communication = Email", () => {
      const communicationRadio = container.getByRole("radio", {
        name: /Email/i,
      });
      fireEvent.click(communicationRadio);
    });

    and("change the Preferred mode of communication = Phone", () => {
      const communicationRadio = container.getByRole("radio", {
        name: /Phone/i,
      });
      fireEvent.click(communicationRadio);
    });

    and("click the Continue button.", () => {
      clickSaveAction();
    });

    then(
      "mandatory error message should display for the Mobile number field.",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the Email is receiving properly, when Preferred mode of communication is selected as Email", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      () => {
        searchScreen();
        provideFilters();
      }
    );

    and("user review the appointments.", () => {
      reviewAppPage();
    });

    and("select the Appointment for Myself.", () => {
      clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      defaultValidation();
    });

    and("Guest user should see the Guest Access screen.", () => {
      defaultValidation();
    });

    and("enter the First name, Last name.", () => {
      provideFirstLastNameValid();
    });

    and("enter the valid Date of birth", () => {
      expect(container.getAllByText(/Date of Birth/i)[0]).toBeInTheDocument();
    });

    and("enter the Email", () => {
      defaultValidation();
    });

    and("select the Preferred mode of communication = Email", () => {
      defaultValidation();
    });

    and("click the Continue button.", () => {
      defaultValidation();
    });

    then("Email should trigger to the email.(Need to confirm)", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the Message alert is receiving properly, when Preferred mode of communication is selected as Phone", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      () => {
        searchScreen();
        provideFilters();
      }
    );

    and("user review the appointments.", () => {
      reviewAppPage();
    });

    and("select the Appointment for Myself.", () => {
      clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      defaultValidation();
    });

    and("Guest user should see the Guest Access screen.", () => {
      defaultValidation();
    });

    and("enter the First name, Last name.", () => {
      provideFirstLastNameValid();
    });

    and("enter the valid Date of birth", () => {
      expect(container.getAllByText(/Date of Birth/i)[0]).toBeInTheDocument();
    });

    and("enter the Mobile number", () => {
      const field3 = container.getAllByLabelText(/Mobile Number/i)[0];
      fireEvent.change(field3, { target: { value: "1231231231" } });
    });

    and("select the Preferred mode of communication = Phone", () => {
      const communicationRadio = container.getByRole("radio", {
        name: /Phone/i,
      });
      fireEvent.click(communicationRadio);
    });

    and("click the Continue button.", () => {
      clickSaveAction();
    });

    then(
      "Message should trigger to the Mobile number.(Need to confirm)",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the back buton is navigating to back", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      () => {
        searchScreen();
        provideFilters();
      }
    );

    and("user review the appointments.", () => {
      reviewAppPage();
    });

    and("select the Appointment for Myself.", () => {
      clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      defaultValidation();
    });

    and("Guest user should see the Guest Access screen.", () => {
      defaultValidation();
    });

    and("enter the First name, Last name.", () => {
      provideFirstLastNameValid();
    });

    and("enter the valid Date of birth", () => {
      expect(container.getAllByText(/Date of Birth/i)[0]).toBeInTheDocument();
    });

    and("enter the Mobile number", () => {
      const field3 = container.getAllByLabelText(/Mobile Number/i)[0];
      fireEvent.change(field3, { target: { value: "" } });
    });

    and("select the Preferred mode of communication = Email", () => {
      defaultValidation();
    });

    and("click the Continue button.", () => {
      defaultValidation();
    });

    and("click the back button.", () => {
      defaultValidation();
    });

    then("user should navigate to previous page.", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the below mentioned fields are displaying in the Guest user basic details page after choosing the Myself option.", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      () => {
        searchScreen();
        provideFilters();
      }
    );

    and("user review the appointments.", () => {
      reviewAppPage();
    });

    and("select the Appointment for Myself.", () => {
      clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      defaultValidation();
    });

    then(
      "user should see the fields such as First name, Last name, Date of birth, Email, Mobile number, Preferred mode of communication",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the Progress bar is displaying for the stages of Appointment", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      () => {
        searchScreen();
        provideFilters();
      }
    );

    and("user review the appointments.", () => {
      reviewAppPage();
    });

    and("select the Appointment for Myself.", () => {
      clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      defaultValidation();
    });

    and("Guest user should see the Guest Access screen.", () => {
      defaultValidation();
    });

    and("enter the First name, Last name.", () => {
      provideFirstLastNameValid();
    });

    and("enter the valid Date of birth", () => {
      expect(container.getAllByText(/Date of Birth/i)[0]).toBeInTheDocument();
    });

    and("enter the Mobile number", () => {
      const field3 = container.getAllByLabelText(/Mobile Number/i)[0];
      fireEvent.change(field3, { target: { value: "1231231231" } });
    });

    and("select the Preferred mode of communication = Phone", () => {
      const communicationRadio = container.getByRole("radio", {
        name: /Phone/i,
      });
      fireEvent.click(communicationRadio);
    });

    and("click the Continue button.", () => {
      defaultValidation();
    });

    then(
      "user should see the Progress bar with Location,  Review, Appointment details, Contact Info, Confirm",
      () => {
        expect(container.getByText("Location")).toBeInTheDocument();
        expect(container.getByText("Review")).toBeInTheDocument();
        expect(container.getByText("Appointment Details")).toBeInTheDocument();
        expect(container.getByText("Contact Info")).toBeInTheDocument();
        expect(container.getByText("Confirm")).toBeInTheDocument();
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the user is able to view the following details along with option to update them.", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      () => {
        searchScreen();
        provideFilters();
      }
    );

    and("user review the appointments.", () => {
      reviewAppPage();
    });

    and("select the Appointment for Myself.", () => {
      clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      defaultValidation();
    });

    and("Guest user should see the Guest Access screen.", () => {
      defaultValidation();
    });

    and("enter the First name, Last name.", () => {
      provideFirstLastNameValid();
    });

    and("enter the valid Date of birth", () => {
      expect(container.getAllByText(/Date of Birth/i)[0]).toBeInTheDocument();
    });

    and("enter the Mobile number", () => {
      const field3 = container.getAllByLabelText(/Mobile Number/i)[0];
      fireEvent.change(field3, { target: { value: "1231231231" } });
    });

    and("select the Preferred mode of communication =Email", () => {
      defaultValidation();
    });

    and("click the Continue button.", () => {
      defaultValidation();
    });

    then(
      "user is able to edit the Location, Date and Time, Insurance carrier, Purpose of visit.",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the Email and Mobile number fields are asking for mandatory when both Email and Mobile number is left as blank.", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      () => {
        searchScreen();
        provideFilters();
      }
    );

    and("user review the appointments.", () => {
      reviewAppPage();
    });

    and("select the Appointment for Myself.", () => {
      clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      defaultValidation();
    });

    and("Guest user should see the Guest Access screen.", () => {
      defaultValidation();
    });

    and("enter the First name, Last name.", () => {
      provideFirstLastNameValid();
    });

    and("enter the valid Date of birth", () => {
      expect(container.getAllByText(/Date of Birth/i)[0]).toBeInTheDocument();
    });

    and("without entering the Email and Mobile number", () => {
      defaultValidation();
    });

    and("click Continue button.", () => {
      defaultValidation();
    });

    then(
      "error message Email ID or Mobile number is required should display for both Email & Mobile number fields.",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the error message Incorrect email format is displaying for the below mentioned Invaild Email IDs", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      () => {
        searchScreen();
        provideFilters();
      }
    );

    and("user review the appointments.", () => {
      reviewAppPage();
    });

    and("select the Appointment for Myself.", () => {
      clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      defaultValidation();
    });

    and("Guest user should see the Guest Access screen.", () => {
      defaultValidation();
    });

    and("enter the First name, Last name.", () => {
      provideFirstLastNameValid();
    });

    and("enter the valid Date of birth", () => {
      expect(container.getAllByText(/Date of Birth/i)[0]).toBeInTheDocument();
    });

    and("enter the mentioned Email ID", () => {
      defaultValidation();
    });

    and("click Continue button.", () => {
      defaultValidation();
    });

    then("error message Incorrect email format should get displayed.", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the First name is not allowing the numbers", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      () => {
        searchScreen();
        provideFilters();
      }
    );

    and("user review the appointments.", () => {
      reviewAppPage();
    });

    and("select the Appointment for Myself.", () => {
      clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      defaultValidation();
    });

    and("enter the First name with numbers, click the Continue", () => {
      defaultValidation();
    });

    then("Guest user should see the error message Invalid Format.", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the First name is not allowing the Special characters", ({}) => {});

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the First name is not allowing the 1 character length.", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      () => {
        searchScreen();
        provideFilters();
      }
    );

    and("user review the appointments.", () => {
      reviewAppPage();
    });

    and("select the Appointment for Myself.", () => {
      clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      defaultValidation();
    });

    and("Guest user should see the Guest Access screen.", () => {
      defaultValidation();
    });

    and(
      /^enter the First name with (\d+) character, click the Continue$/,
      (arg0) => {
        defaultValidation();
      }
    );

    then("Guest user should see the appropriate error message.", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the First name is not allowing the 51 characters", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      () => {
        searchScreen();
        provideFilters();
      }
    );

    and("user review the appointments.", () => {
      reviewAppPage();
    });

    and("select the Appointment for Myself.", () => {
      clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      defaultValidation();
    });

    and("Guest user should see the Guest Access screen.", () => {
      defaultValidation();
    });

    and(
      /^enter the First name with (\d+) characters, click the Continue$/,
      (arg0) => {
        defaultValidation();
      }
    );

    then("Guest user should see the appropriate error message.", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the First name is allowing the valid 2 characters", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      () => {
        searchScreen();
        provideFilters();
      }
    );

    and("user review the appointments.", () => {
      reviewAppPage();
    });

    and("select the Appointment for Myself.", () => {
      clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      defaultValidation();
    });

    and("Guest user should see the Guest Access screen.", () => {
      defaultValidation();
    });

    and(
      /^enter the First name with valid (\d+) characters, click the Continue$/,
      (arg0) => {
        defaultValidation();
      }
    );

    then("Guest user should not see any error message for First name", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the First name is allowing the valid 50 characters", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      () => {
        searchScreen();
        provideFilters();
      }
    );

    and("user review the appointments.", () => {
      reviewAppPage();
    });

    and("select the Appointment for Myself.", () => {
      clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      defaultValidation();
    });

    and("Guest user should see the Guest Access screen.", () => {
      defaultValidation();
    });

    and(
      /^enter the First name with valid (\d+) characters, click the Continue$/,
      (arg0) => {
        defaultValidation();
      }
    );

    then("Guest user should not see any error message for First name", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the Last name is displaying the Mandatory error message.", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      () => {
        searchScreen();
        provideFilters();
      }
    );

    and("user review the appointments.", () => {
      reviewAppPage();
    });

    and("select the Appointment for Myself.", () => {
      clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      defaultValidation();
    });

    and("Guest user should see the Guest Access screen.", () => {
      defaultValidation();
    });

    and("without entering the Last name, click the Continue", () => {
      defaultValidation();
    });

    then("it should display the error message This field is required.", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the Last name is not allowing the numbers", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      () => {
        searchScreen();
        provideFilters();
      }
    );

    and("user review the appointments.", () => {
      reviewAppPage();
    });

    and("select the Appointment for Myself.", () => {
      clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      defaultValidation();
    });

    and("Guest user should see the Guest Access screen.", () => {
      defaultValidation();
    });

    and("enter the Last name with numbers, click the Continue", () => {
      defaultValidation();
    });

    then("Guest user should see the error message Invalid Format.", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the Last name is not allowing the Special characters", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      () => {
        searchScreen();
        provideFilters();
      }
    );

    and("user review the appointments.", () => {
      reviewAppPage();
    });

    and("select the Appointment for Myself.", () => {
      clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      defaultValidation();
    });

    and("Guest user should see the Guest Access screen.", () => {
      defaultValidation();
    });

    and(
      "enter the Last name with Special characters, click the Continue",
      () => {
        defaultValidation();
      }
    );

    then("Guest user should see the error message Invalid Format.", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the Last name is not allowing the 1 character", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      () => {
        searchScreen();
        provideFilters();
      }
    );

    and("user review the appointments.", () => {
      reviewAppPage();
    });

    and("select the Appointment for Myself.", () => {
      clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      defaultValidation();
    });

    and("Guest user should see the Guest Access screen.", () => {
      defaultValidation();
    });

    and(
      /^enter the Last name with (\d+) character, click the Continue$/,
      (arg0) => {
        defaultValidation();
      }
    );

    then("Guest user should see the appropriate error message.", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the Last name is not allowing the 51 characters", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      () => {
        searchScreen();
        provideFilters();
      }
    );

    and("user review the appointments.", () => {
      reviewAppPage();
    });

    and("select the Appointment for Myself.", () => {
      clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      defaultValidation();
    });

    and("Guest user should see the Guest Access screen.", () => {
      defaultValidation();
    });

    and(
      /^enter the Last name with (\d+) characters, click the Continue.$/,
      (arg0) => {
        defaultValidation();
      }
    );

    then("Guest user should see the appropriate error message.", () => {
      defaultValidation();
    });
  });

  test("VEPIC_EPP-44_STORY_EPP-1569-erify whether the Last name is allowing the valid 2 characters", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      () => {
        searchScreen();
        provideFilters();
      }
    );

    and("user review the appointments.", () => {
      reviewAppPage();
    });

    and("select the Appointment for Myself.", () => {
      clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      defaultValidation();
    });

    and("Guest user should see the Guest Access screen.", () => {
      defaultValidation();
    });

    and(
      /^enter the Last name with valid Minimum (\d+) characters length, click the Continue.$/,
      (arg0) => {
        defaultValidation();
      }
    );

    then("Guest user should not see any error message for Last name", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the Last name is allowing the valid 50 characters length", ({}) => {});

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the Date of Birth is displaying the Mandatory error message.", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      () => {
        searchScreen();
        provideFilters();
      }
    );

    and("user review the appointments.", () => {
      reviewAppPage();
    });

    and("select the Appointment for Myself.", () => {
      clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      defaultValidation();
    });

    and("Guest user should see the Guest Access screen.", () => {
      defaultValidation();
    });

    and("without entering the Date of birth, click the Continue", () => {
      defaultValidation();
    });

    then("it should display the error message This field is required.", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the error message Invalid date of birth is displaying for invalid Date of birth DD/MM/YYYY", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      () => {
        searchScreen();
        provideFilters();
      }
    );

    and("user review the appointments.", () => {
      reviewAppPage();
    });

    and("select the Appointment for Myself.", () => {
      clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      defaultValidation();
    });

    and("Guest user should see the Guest Access screen.", () => {
      defaultValidation();
    });

    and("enter the First name, Last name", () => {
      provideFirstLastNameValid();
    });

    and("enter the invalid Date of Birth.", () => {
      defaultValidation();
    });

    and("click Continue button.", () => {
      defaultValidation();
    });

    then(
      "Guest user should see the error message Invalid date of birth",
      () => {
        expect(container.getAllByText(/Date of Birth/i)[0]).toBeInTheDocument();
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the Date of birth is displaying as per the given date format MM/DD/YYYY.", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      () => {
        searchScreen();
        provideFilters();
      }
    );

    and("user review the appointments.", () => {
      reviewAppPage();
    });

    and("select the Appointment for Myself.", () => {
      clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      defaultValidation();
    });

    and("Guest user should see the Guest Access screen.", () => {
      defaultValidation();
    });

    and("enter the First name, Last name", () => {
      provideFirstLastNameValid();
    });

    and("enter the invalid Date of Birth format.", () => {
      defaultValidation();
    });

    and("click Continue button.", () => {
      defaultValidation();
    });

    then("Guest user should see the correct Date of Birth format.", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the future date is not allowing in the Date of Birth field.", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      () => {
        searchScreen();
        provideFilters();
      }
    );

    and("user review the appointments.", () => {
      reviewAppPage();
    });

    and("select the Appointment for Myself.", () => {
      clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      defaultValidation();
    });

    and("Guest user should see the Guest Access screen.", () => {
      defaultValidation();
    });

    and("enter the First name, Last name.", () => {
      provideFirstLastNameValid();
    });

    and("enter the future Date of birth.", () => {
      defaultValidation();
    });

    and("click Continue button.", () => {
      defaultValidation();
    });

    then("user should see the appropriate error message.", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the Date of birth is not allowing more than Maximum age limit.(Need to confirm)", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      () => {
        searchScreen();
        provideFilters();
      }
    );

    and("user review the appointments.", () => {
      reviewAppPage();
    });

    and("select the Appointment for Myself.", () => {
      clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      defaultValidation();
    });

    and("Guest user should see the Guest Access screen.", () => {
      defaultValidation();
    });

    and("enter the First name, Last name.", () => {
      provideFirstLastNameValid();
    });

    and("enter the Date of birth more than maximum age limit.", () => {
      defaultValidation();
    });

    and("click Continue button.", () => {
      defaultValidation();
    });

    then("user should see the appropriate error message.", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the Date of birth is not allowing less than Minimum age limit.(Need to confirm)", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      () => {
        searchScreen();
        provideFilters();
      }
    );

    and("user review the appointments.", () => {
      reviewAppPage();
    });

    and("select the Appointment for Myself.", () => {
      clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      defaultValidation();
    });

    and("Guest user should see the Guest Access screen.", () => {
      defaultValidation();
    });

    and("enter the First name, Last name.", () => {
      provideFirstLastNameValid();
    });

    and("enter the Date of birth less than minimum age limit.", () => {
      defaultValidation();
    });

    and("click Continue button.", () => {
      defaultValidation();
    });

    then("user should see the appropriate error message.", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the Date of birth is accepting valid Date of Birth", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      () => {
        searchScreen();
        provideFilters();
      }
    );

    and("user review the appointments.", () => {
      reviewAppPage();
    });

    and("select the Appointment for Myself.", () => {
      clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      defaultValidation();
    });

    and("Guest user should see the Guest Access screen.", () => {
      defaultValidation();
    });

    and("enter the First name, Last name.", () => {
      provideFirstLastNameValid();
    });

    and("enter the valid Date of birth", () => {
      expect(container.getAllByText(/Date of Birth/i)[0]).toBeInTheDocument();
    });

    and("click Continue button.", () => {
      defaultValidation();
    });

    then(
      "Guest user should not see any error message for Date of birth.",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the mandatory error message is not displaying for Email when Mobile number is filled.", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      () => {
        searchScreen();
        provideFilters();
      }
    );

    and("user review the appointments.", () => {
      reviewAppPage();
    });

    and("select the Appointment for Myself.", () => {
      clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      defaultValidation();
    });

    and("Guest user should see the Guest Access screen.", () => {
      defaultValidation();
    });

    and("enter the First name, Last name.", () => {
      provideFirstLastNameValid();
    });

    and("enter the valid Date of birth", () => {
      expect(container.getAllByText(/Date of Birth/i)[0]).toBeInTheDocument();
    });

    and("without entering the Email and enter the Mobile number", () => {
      const field3 = container.getAllByLabelText(/Mobile Number/i)[0];
      fireEvent.change(field3, { target: { value: "1231231231" } });
    });

    and("click Continue button.", () => {
      defaultValidation();
    });

    then("error message should not display for Email field.", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the mandatory error message is not displaying for Mobile number when Email is filled.", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      () => {
        searchScreen();
        provideFilters();
      }
    );

    and("user review the appointments.", () => {
      reviewAppPage();
    });

    and("select the Appointment for Myself.", () => {
      clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      defaultValidation();
    });

    and("Guest user should see the Guest Access screen.", () => {
      defaultValidation();
    });

    and("enter the First name, Last name.", () => {
      provideFirstLastNameValid();
    });

    and("enter the valid Date of birth", () => {
      expect(container.getAllByText(/Date of Birth/i)[0]).toBeInTheDocument();
    });

    and("without entering the Mobile number and enter the Email", () => {
      defaultValidation();
    });

    and("click Continue button.", () => {
      defaultValidation();
    });

    then("error message should not display for Mobile number field.", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the Mobile number is not allowing the Maximum limit +1 (Need to confirm)", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      () => {
        searchScreen();
        provideFilters();
      }
    );

    and("user review the appointments.", () => {
      reviewAppPage();
    });

    and("select the Appointment for Myself.", () => {
      clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      defaultValidation();
    });

    and("Guest user should see the Guest Access screen.", () => {
      defaultValidation();
    });

    and("enter the First name, Last name.", () => {
      provideFirstLastNameValid();
    });

    and("enter the valid Date of birth", () => {
      expect(container.getAllByText(/Date of Birth/i)[0]).toBeInTheDocument();
    });

    and("enter the Email ID", () => {
      const field4 = container.getByLabelText("Email");
      fireEvent.change(field4, { target: { value: "aa@aa.aa" } });
    });

    and("enter the Mobile number", () => {
      const field3 = container.getAllByLabelText(/Mobile Number/i)[0];
      fireEvent.change(field3, { target: { value: "1231231231" } });
    });

    and("click the Continue button.", () => {
      defaultValidation();
    });

    then("it should display the appropriate error message.", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the below mentioned fields are displaying if the user select the Myself in Provide Information page.", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      () => {
        searchScreen();
        provideFilters();
      }
    );

    and("user review the appointments.", () => {
      reviewAppPage();
    });

    and("select the Appointment for Myself.", () => {
      clickMyself();
    });

    then("user should see the below mentioned fields", (table) => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the Continue as a Guest option is displaying after user select the Myself option", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      () => {
        searchScreen();
        provideFilters();
      }
    );

    and("user review the appointments.", () => {
      reviewAppPage();
    });

    and("select the Appointment for Myself.", () => {
      clickMyself();
    });

    then("user should see the Continue as Guest button.", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the First name is displaying the Mandatory error message.", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      () => {
        searchScreen();
        provideFilters();
      }
    );

    and("user review the appointments.", () => {
      reviewAppPage();
    });

    and("select the Appointment for Myself.", () => {
      clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      defaultValidation();
    });

    and("without entering the First name, click the Continue", () => {
      defaultValidation();
    });

    then("it should display the error message This field is required.", () => {
      defaultValidation();
    });
  });
});
