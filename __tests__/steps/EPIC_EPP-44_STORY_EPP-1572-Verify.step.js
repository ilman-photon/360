import { act, fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { defineFeature, loadFeature } from "jest-cucumber";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../src/store/store";
const useRouter = jest.spyOn(require("next/router"), "useRouter");
import constants from "../../src/utils/constants";
import FilterHeading from "../../src/components/molecules/FilterHeading/filterHeading";
import FilterResult from "../../src/components/molecules/FilterResult/filterResult";
import ScheduleAppointmentPage from "../../src/pages/patient/schedule-appointment";
import mediaQuery from 'css-mediaquery';
import { renderLogin } from "../../__mocks__/commonSteps";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1572.feature"
);

defineFeature(feature, (test) => {
  let container;
  const { APPOINTMENT_TEST_ID, SEARCH_PROVIDER_TEST_ID } = constants.TEST_ID

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
            }
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
            }
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
  ]

  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  function createMatchMedia(width) {
    return query => ({
      matches: mediaQuery.match(query, { width }),
      addListener: () => { },
      removeListener: () => { },
    });
  }

  const searchScreen = () => {
    window.matchMedia = createMatchMedia('1920px');
    const mockFilterData = {
      date: null,
      location: "",
      insuranceCarrier: "",
      purposeOfVisit: "",
    }
    container = render(<FilterHeading
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
      insuranceCarrierData={[]} />);
  }

  const inputLocation = async () => {
    const locationInput = await waitFor(() => container.getByLabelText("City, state, or zip code"))
    act(() => {
      fireEvent.change(locationInput, { target: { value: "Texas" } });
    });
  }

  const inputDate = async () => {
    const dateInput = await waitFor(() => container.getByLabelText("Date"))
    act(() => {
      fireEvent.change(dateInput, { target: { value: "22-09-2022" } });
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

  const resultsScreen = async () => {
    const rangeDate = { startDate: "2022-10-10", endDate: "2022-10-15" }
    container.rerender(
      <FilterResult isDesktop={true}
        providerList={providerList}
        rangeDate={rangeDate}
        purposeOfVisitData={[]}
        insuranceCarrierData={[]}
        googleApiKey={"Test"}
        filterData={{
          location: "",
          date: "",
          purposeOfVisit: "",
          insuranceCarrier: "",
        }}
      />
    );
    expect(await waitFor(() => container.getByTestId(APPOINTMENT_TEST_ID.FILTER_RESULT.container))).toBeInTheDocument()
  }

  const reviewAppPage = async () => {
    container.rerender(<Provider store={store}>{ScheduleAppointmentPage.getLayout(<ScheduleAppointmentPage />)}</Provider>);
    await waitFor(() => container.getByText("Review Appointment Details"))
  }

  const clickHour = async () => {
    expect(container.getByText("3 In-network providers")).toBeInTheDocument();
    const hourButton = await waitFor(() => container.getByTestId(SEARCH_PROVIDER_TEST_ID.hourButton))
    fireEvent.click(hourButton)
  }

  test("EPIC_EPP-44_STORY_EPP-1572-Verify if user able to view and select continue as guest option", ({
    given,
    when,
    then,
    and,
  }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to the search screen", () => {
      searchScreen();
    });

    and("User should fill the location", () => {
      inputLocation();
    });

    and("User should select the Date & Time with provider", () => {
      inputDate();
    });

    and("User should select the purpose of the visit", () => {
      inputPurpose();
    });

    and("User has reviewed the appointment details", () => {
      resultsScreen();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then('User should navigated to the Patient Portal application', () => {
      renderLogin()
    });

    and("User should see option as Continue as a Guest button", () => {
      defaultValidation();
    });

    and("User to click & select Continue as a Guest button", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1572- Verify if user able to navigate to basic detail page after select Continue as a Guest", ({
    when,
    then,
    and,
  }) => {
    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to the search screen", () => {
      searchScreen();
    });

    and("User should fill the location", () => {
      inputLocation();
    });

    and("User should select the Date & Time with provider", () => {
      inputDate();
    });

    and("User should select the purpose of the visit", () => {
      inputPurpose();
    });

    and("User has reviewed the appointment details", () => {
      resultsScreen();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then('User should navigated to the Patient Portal application', () => {
      renderLogin()
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    and("User should see option as Continue as a Guest button", () => {
      defaultValidation();
    });

    when("User to click & select Continue as a Guest button", () => {
      defaultValidation();
    });

    then("User should lands onto Page to enter basic details", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1572-Verify if user able to view basic details fields", ({
    given,
    when,
    then,
    and,
  }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to the search screen", () => {
      searchScreen();
    });

    and("User should fill the location", () => {
      inputLocation();
    });

    and("User should select the Date & Time with provider", () => {
      inputDate();
    });

    and("User should select the purpose of the visit", () => {
      inputPurpose();
    });

    and("User has reviewed the appointment details", () => {
      resultsScreen();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then('User should navigated to the Patient Portal application', () => {
      renderLogin()
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    and("User should see option as Continue as a Guest button", () => {
      defaultValidation();
    });

    when("User to click & select Continue as a Guest button", () => {
      defaultValidation();
    });

    then("User should lands onto Page to enter basic details", () => {
      defaultValidation();
    });

    and(
      "User should see fields First Name, Last Name, Date Of Birth, Email, Mobile Number, Preferred mode(s) of communication",
      () => { }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1572- Verify if user able to view First Name, Last Name, Date of Birth, Preferred mode(s) of communication as mandatory field", ({
    given,
    when,
    then,
    and,
  }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to the search screen", () => {
      searchScreen();
    });

    and("User should fill the location", () => {
      inputLocation();
    });

    and("User should select the Date & Time with provider", () => {
      inputDate();
    });

    and("User should select the purpose of the visit", () => {
      inputPurpose();
    });

    and("User has reviewed the appointment details", () => {
      resultsScreen();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then('User should navigated to the Patient Portal application', () => {
      renderLogin()
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    and("User should see option as Continue as a Guest button", () => {
      defaultValidation();
    });

    when("User to click & select Continue as a Guest button", () => {
      defaultValidation();
    });

    then("User should lands onto Page to enter basic details", () => {
      defaultValidation();
    });

    and(
      "User should see First Name, Last Name, Date of Birth, Preferred mode(s) of communication field as mandatory",
      () => { }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1572-Verify if user to able to enter charater min2 & Max 50 in First Name field", ({
    given,
    when,
    then,
    and,
  }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to the search screen", () => {
      searchScreen();
    });

    and("User should fill the location", () => {
      inputLocation();
    });

    and("User should select the Date & Time with provider", () => {
      inputDate();
    });

    and("User should select the purpose of the visit", () => {
      inputPurpose();
    });

    and("User has reviewed the appointment details", () => {
      resultsScreen();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then('User should navigated to the Patient Portal application', () => {
      renderLogin()
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    and("User should see option as Continue as a Guest button", () => {
      defaultValidation();
    });

    when("User to click & select Continue as a Guest button", () => {
      defaultValidation();
    });

    then("User should lands onto Page to enter basic details", () => {
      defaultValidation();
    });

    and(
      "User should see fields First Name, Last Name, Date Of Birth, Email, Mobile Number, Preferred mode(s) of communication",
      () => { }
    );

    when(
      /^user enter first name field with mimium (\d+) to maximum (\d+) characters$/,
      (arg0, arg1) => { }
    );

    then(
      "user should see the enter character length accepted in First name field",
      () => { }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1572-Verify if user to able to enter charater min2 & Max 50 in Last Name field", ({
    given,
    when,
    then,
    and,
  }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to the search screen", () => {
      searchScreen();
    });

    and("User should fill the location", () => {
      inputLocation();
    });

    and("User should select the Date & Time with provider", () => {
      inputDate();
    });

    and("User should select the purpose of the visit", () => {
      inputPurpose();
    });

    and("User has reviewed the appointment details", () => {
      resultsScreen();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then('User should navigated to the Patient Portal application', () => {
      renderLogin()
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    and("User should see option as Continue as a Guest button", () => {
      defaultValidation();
    });

    when("User to click & select Continue as a Guest button", () => {
      defaultValidation();
    });

    then("User should lands onto Page to enter basic details", () => {
      defaultValidation();
    });

    and(
      "User should see fields First Name, Last Name, Date Of Birth, Email, Mobile Number, Preferred mode(s) of communication",
      () => { }
    );

    when(
      /^user enter Last name field with mimium (\d+) to maximum (\d+) characters$/,
      (arg0, arg1) => { }
    );

    then(
      "user should see the enter character length accepted in Last name field",
      () => { }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1572-Verify if user able to enter Date of Birth in MM/DD/YYYY format", ({
    given,
    when,
    then,
    and,
  }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to the search screen", () => {
      searchScreen();
    });

    and("User should fill the location", () => {
      inputLocation();
    });

    and("User should select the Date & Time with provider", () => {
      inputDate();
    });

    and("User should select the purpose of the visit", () => {
      inputPurpose();
    });

    and("User has reviewed the appointment details", () => {
      resultsScreen();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then('User should navigated to the Patient Portal application', () => {
      renderLogin()
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    and("User should see option as Continue as a Guest button", () => {
      defaultValidation();
    });

    when("User to click & select Continue as a Guest button", () => {
      defaultValidation();
    });

    then("User should lands onto Page to enter basic details", () => {
      defaultValidation();
    });

    and(
      "User should see fields First Name, Last Name, Date Of Birth, Email, Mobile Number, Preferred mode(s) of communication",
      () => { }
    );

    when("user enter Date of Birth field in MM/DD/YYYY format", () => {
      defaultValidation();
    });

    then("user should see Date entered in the field", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1572-Verify if user able to enter email id with correct format in Email field", ({
    given,
    when,
    then,
    and,
  }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to the search screen", () => {
      searchScreen();
    });

    and("User should fill the location", () => {
      inputLocation();
    });

    and("User should select the Date & Time with provider", () => {
      inputDate();
    });

    and("User should select the purpose of the visit", () => {
      inputPurpose();
    });

    and("User has reviewed the appointment details", () => {
      resultsScreen();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then('User should navigated to the Patient Portal application', () => {
      renderLogin()
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    and("User should see option as Continue as a Guest button", () => {
      defaultValidation();
    });

    when("User to click & select Continue as a Guest button", () => {
      defaultValidation();
    });

    then("User should lands onto Page to enter basic details", () => {
      defaultValidation();
    });

    and(
      "User should see fields First Name, Last Name, Date Of Birth, Email, Mobile Number, Preferred mode(s) of communication",
      () => { }
    );

    when("User enter email id with correct format in Email field", () => {
      defaultValidation();
    });

    then("user should see email entered in the field", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1572-Verify if user able to Mobile number with correct format in Mobile number field", ({
    given,
    when,
    then,
    and,
  }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to the search screen", () => {
      searchScreen();
    });

    and("User should fill the location", () => {
      inputLocation();
    });

    and("User should select the Date & Time with provider", () => {
      inputDate();
    });

    and("User should select the purpose of the visit", () => {
      inputPurpose();
    });

    and("User has reviewed the appointment details", () => {
      resultsScreen();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then('User should navigated to the Patient Portal application', () => {
      renderLogin()
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    and("User should see option as Continue as a Guest button", () => {
      defaultValidation();
    });

    when("User to click & select Continue as a Guest button", () => {
      defaultValidation();
    });

    then("User should lands onto Page to enter basic details", () => {
      defaultValidation();
    });

    and(
      "User should see fields First Name, Last Name, Date Of Birth, Email, Mobile Number, Preferred mode(s) of communication",
      () => { }
    );

    when(
      "User enter number with correct format in Mobile number field",
      () => { }
    );

    then("user should see Mobile number entered in the field", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1572-Verify if user able to see either Email or Mobile number field mandatory if both field leaves blank", ({
    given,
    when,
    then,
    and,
  }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to the search screen", () => {
      searchScreen();
    });

    and("User should fill the location", () => {
      inputLocation();
    });

    and("User should select the Date & Time with provider", () => {
      inputDate();
    });

    and("User should select the purpose of the visit", () => {
      inputPurpose();
    });

    and("User has reviewed the appointment details", () => {
      resultsScreen();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then('User should navigated to the Patient Portal application', () => {
      renderLogin()
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    and("User should see option as Continue as a Guest button", () => {
      defaultValidation();
    });

    when("User to click & select Continue as a Guest button", () => {
      defaultValidation();
    });

    then("User should lands onto Page to enter basic details", () => {
      defaultValidation();
    });

    and(
      "User should see fields First Name, Last Name, Date Of Birth, Email, Mobile Number, Preferred mode(s) of communication",
      () => { }
    );

    when(
      "User leave both field(Email & Mobile number) blank and enter",
      () => { }
    );

    then(
      'user should see error message "Email ID or Mobile Number is required”',
      () => { }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1572- Verify if user able to see error message when mandatory field leaves blank", ({
    given,
    when,
    then,
    and,
  }) => {
    given(/^User launch the "(.*)" url$/, (arg0) => {
      defaultValidation();
    });

    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to the search screen", () => {
      searchScreen();
    });

    and("User should fill the location", () => {
      inputLocation();
    });

    and("User should select the Date & Time with provider", () => {
      inputDate();
    });

    and("User should select the purpose of the visit", () => {
      inputPurpose();
    });

    and("User has reviewed the appointment details", () => {
      resultsScreen();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then('User should navigated to the Patient Portal application', () => {
      renderLogin()
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    and("User should see option as Continue as a Guest button", () => {
      defaultValidation();
    });

    when("User to click & select Continue as a Guest button", () => {
      defaultValidation();
    });

    then("User should lands onto Page to enter basic details", () => {
      defaultValidation();
    });

    when(
      "user leave mandatory field ( First Name, Last Name, Date of Birth, Preferred mode(s) of communication) blank",
      () => { }
    );

    and("User should error message “This field is required”", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1572- Verify if user able to see submit option after enter all details in the field", ({
    when,
    then,
    and,
  }) => {
    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to the search screen", () => {
      searchScreen();
    });

    and("User should fill the location", () => {
      inputLocation();
    });

    and("User should select the Date & Time with provider", () => {
      inputDate();
    });

    and("User should select the purpose of the visit", () => {
      inputPurpose();
    });

    and("User has reviewed the appointment details", () => {
      resultsScreen();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then('User should navigated to the Patient Portal application', () => {
      renderLogin()
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    and("User should see option as Continue as a Guest button", () => {
      defaultValidation();
    });

    when("User to click & select Continue as a Guest button", () => {
      defaultValidation();
    });

    then("User should lands onto Page to enter basic details", () => {
      defaultValidation();
    });

    when(
      "User enter details in the field First Name, Last Name, Date Of Birth, Email, Mobile Number, Preferred mode(s) of communication",
      () => { }
    );

    and("user to click on submit button", () => {
      defaultValidation();
    });

    then("user should see details submitted", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1572- Verify if user able to view the field Preferred mode of communication preselected with option Both", ({
    when,
    then,
    and,
  }) => {
    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to the search screen", () => {
      searchScreen();
    });

    and("User should fill the location", () => {
      inputLocation();
    });

    and("User should select the Date & Time with provider", () => {
      inputDate();
    });

    and("User should select the purpose of the visit", () => {
      inputPurpose();
    });

    and("User has reviewed the appointment details", () => {
      resultsScreen();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then('User should navigated to the Patient Portal application', () => {
      renderLogin()
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    and("User should see option as Continue as a Guest button", () => {
      defaultValidation();
    });

    when("User to click & select Continue as a Guest button", () => {
      defaultValidation();
    });

    then("User should lands onto Page to enter basic details", () => {
      defaultValidation();
    });

    when(
      "user mouse over to field Preferred mode(s) of communication",
      () => { }
    );

    then(
      "user should see the field Preferred mode(s) of communication preselected the option Both",
      () => { }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1572- Verify if user able to change Preferred mode of communication to Mobile Number or Both when Email is provided", ({
    when,
    then,
    and,
  }) => {
    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to the search screen", () => {
      searchScreen();
    });

    and("User should fill the location", () => {
      inputLocation();
    });

    and("User should select the Date & Time with provider", () => {
      inputDate();
    });

    and("User should select the purpose of the visit", () => {
      inputPurpose();
    });

    and("User has reviewed the appointment details", () => {
      resultsScreen();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then('User should navigated to the Patient Portal application', () => {
      renderLogin()
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    and("User should see option as Continue as a Guest button", () => {
      defaultValidation();
    });

    when("User to click & select Continue as a Guest button", () => {
      defaultValidation();
    });

    then("User should lands onto Page to enter basic details", () => {
      defaultValidation();
    });

    when(
      /^user provide the details to the field (.*),(.*),(.*),(.*)$/,
      (arg0, arg1, arg2, arg3) => { }
    );

    then(
      "user should see the field “Preferred mode(s) of communication” selected with option 'Email'",
      () => { }
    );

    and(
      "user change the preferred mode to either Mobile number or Both",
      () => { }
    );

    then(
      "user should see field “Preferred mode(s) of communication” selected with either 'Mobile number' or 'Both'",
      () => { }
    );
  });

  test('EPIC_EPP-44_STORY_EPP-1572- Verify if user able to change "Preferred mode of communication" to Email or Both when Mobile number is provided', ({
    when,
    then,
    and,
  }) => {
    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to the search screen", () => {
      searchScreen();
    });

    and("User should fill the location", () => {
      inputLocation();
    });

    and("User should select the Date & Time with provider", () => {
      inputDate();
    });

    and("User should select the purpose of the visit", () => {
      inputPurpose();
    });

    and("User has reviewed the appointment details", () => {
      resultsScreen();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then('User should navigated to the Patient Portal application', () => {
      renderLogin()
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    and("User should see option as Continue as a Guest button", () => {
      defaultValidation();
    });

    when("User to click & select Continue as a Guest button", () => {
      defaultValidation();
    });

    then("User should lands onto Page to enter basic details", () => {
      defaultValidation();
    });

    when(
      /^user provide the details to the field (.*),(.*),(.*),(.*)$/,
      (arg0, arg1, arg2, arg3) => { }
    );

    then(
      "user should see the field “Preferred mode(s) of communication” selected with option 'Mobile number'",
      () => { }
    );

    and("user change the preferred mode to either Email or Both", () => {
      defaultValidation();
    });

    then(
      "user should see field “Preferred mode(s) of communication” selected with either 'Email' or 'Both'",
      () => { }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1572- Verify if user able to change \"Preferred mode of communication\" to 'Email' or 'Mobile number' when Both Mobile number & Email provided", ({
    when,
    then,
    and,
  }) => {
    when(/^User clicks on the "(.*)" button$/, (arg0) => {
      defaultValidation();
    });

    then("User should navigated to the search screen", () => {
      searchScreen();
    });

    and("User should fill the location", () => {
      inputLocation();
    });

    and("User should select the Date & Time with provider", () => {
      inputDate();
    });

    and("User should select the purpose of the visit", () => {
      inputPurpose();
    });

    and("User has reviewed the appointment details", () => {
      resultsScreen();
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then('User should navigated to the Patient Portal application', () => {
      renderLogin()
    });

    when("User selects that the appointment is for Self", () => {
      defaultValidation();
    });

    then("User should navigated to the Patient Portal application", () => {
      defaultValidation();
    });

    and("User should see option as Continue as a Guest button", () => {
      defaultValidation();
    });

    when("User to click & select Continue as a Guest button", () => {
      defaultValidation();
    });

    then("User should lands onto Page to enter basic details", () => {
      defaultValidation();
    });

    when(
      /^user provide the details to the field (.*),(.*),(.*),(.*),(.*)$/,
      (arg0, arg1, arg2, arg3, arg4) => { }
    );

    then(
      "user should see the field “Preferred mode(s) of communication” selected with option 'Both'",
      () => { }
    );

    and(
      "user change the preferred mode to either Email or Mobile number",
      () => { }
    );

    then(
      "user should see field “Preferred mode(s) of communication” selected with either 'Email' or 'Mobile number'",
      () => { }
    );
  });
});
