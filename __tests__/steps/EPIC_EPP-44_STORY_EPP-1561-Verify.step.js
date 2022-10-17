import { act, fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { defineFeature, loadFeature } from "jest-cucumber";
import { Provider } from "react-redux";
import store from "../../src/store/store";
const useRouter = jest.spyOn(require("next/router"), "useRouter");
import constants from "../../src/utils/constants";
import FilterHeading from "../../src/components/molecules/FilterHeading/filterHeading";
import FilterResult from "../../src/components/molecules/FilterResult/filterResult";
import ScheduleAppointmentPage from "../../src/pages/patient/schedule-appointment";
import mediaQuery from 'css-mediaquery';


const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1561.feature"
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

  const reviewAppPage = async () => {
    container.rerender(<Provider store={store}>{ScheduleAppointmentPage.getLayout(<ScheduleAppointmentPage />)}</Provider>);
    await waitFor(() => container.getByText("Review Appointment Details"))
  }

  const clickHour = async () => {
    expect(container.getByText("3 In-network providers")).toBeInTheDocument();
    const hourButton = await waitFor(() => container.getByTestId(SEARCH_PROVIDER_TEST_ID.hourButton))
    fireEvent.click(hourButton)
  }

  test('EPIC_EPP-44_STORY_EPP-1561 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance.', ({ given, then, and }) => {
    defaultValidation();
  });

  test('EPIC_EPP-44_STORY_EPP-1561 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
        defaultValidation();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
        clickSearch();
    });

    then('user navigates to the search screen', () => {
        searchScreen();
    });

    and('user enters the location', async () => {
        inputLocation();
    });

    and('user selects the date of appointment', async () => {
        inputDate();
    });

    and('user chooses the purpose of the visit', async () => {
        inputPurpose();
    });

    and('user enters the insurance name', async () => {
        inputInsurance();
    });

    and('user clicks on the Search button', async () => {
        clickSearch();
    });

    and('user views the results in the Schedule Appointments screen', async () => {
        resultsScreen();
    });

    and('user views the selected location.', () => {
        defaultValidation();
    });
});

  test('EPIC_EPP-44_STORY_EPP-1561 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user view the date of appointment', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
        defaultValidation();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
        clickSearch();
    });

    then('user navigates to the search screen', () => {
        searchScreen();
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

    and('user views the date of appointment.', () => {
        defaultValidation();
    });
});

  test('EPIC_EPP-44_STORY_EPP-1561 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user views the purpose of visit', ({ given, and, then }) => {
    given('user launch the Marketing Site URL', () => {
        defaultValidation();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
      defaultValidation();
    });

    then('user navigates to the search screen', () => {
        searchScreen();
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

    and('user views the purpose of the visit.', () => {
        defaultValidation();
    });
});

  test('EPIC_EPP-44_STORY_EPP-1561 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user view the insurance carrier.', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
        defaultValidation();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
        clickSearch();
    });

    then('user navigates to the search screen', () => {
        searchScreen();
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

    and('user views the insurance carrier.', () => {
        defaultValidation();
    });
});

  test('EPIC_EPP-44_STORY_EPP-1561 - Verify whether user is able to see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
        defaultValidation();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
        clickSearch();
    });

    then('user navigates to the search screen', () => {
        searchScreen();
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

    and('user lands on Schedule Appointment screen with the selected location, date, purpose of visit (if provided) and insurance carrier (if provided)', () => {
        defaultValidation();
    });
});

  test('EPIC_EPP-44_STORY_EPP-1561 - Verify whether the user is able to see the timeslot in the Schedule Oppointments screen', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
        defaultValidation();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
        clickSearch();
    });

    then('user navigates to the search screen', () => {
        searchScreen();
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

    and('user views the timeslot', () => {
      clickHour();
    });
});

  test('EPIC_EPP-44_STORY_EPP-1561 - Verify whether the user is able to select the timeslot in the Schedule Oppointments screen', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
        defaultValidation();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
        clickSearch();
    });

    then('user navigates to the search screen', () => {
        searchScreen();
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

    and('user select the timeslot', () => {
      expect(container.getByText("3 In-network providers")).toBeInTheDocument();
      clickHour();
    });
});

  test('EPIC_EPP-44_STORY_EPP-1561 - Verify whether the user lands on the screen to review the appointment details', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
        defaultValidation();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
        clickSearch();
    });

    then('user navigates to the search screen', () => {
        searchScreen();
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

    and('user select the timeslot', () => {
      expect(container.getByText("3 In-network providers")).toBeInTheDocument();
      clickHour();
    });

    then('user lands on the screen to review the appointment details', () => {
      reviewAppPage();
    });
});

  test('EPIC_EPP-44_STORY_EPP-1561 - Verify whether the user lands on the screen to review the appointment details and proceeds to schedule it', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
        defaultValidation();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
        clickSearch();
    });

    then('user navigates to the search screen', () => {
        searchScreen();
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

    and('user select the timeslot', () => {
      expect(container.getByText("3 In-network providers")).toBeInTheDocument();
      clickHour();
    });

    then('user lands on the screen to review the appointment details', () => {
      reviewAppPage();
    });

    and('user selects the option proceeds to schedule it', () => {
      const continueButton = container.getByText("continue");
      fireEvent.click(continueButton);
    });
});

  test('EPIC_EPP-44_STORY_EPP-1561 - Verify whether the user lands on the screen to select who the appointment is for after proceed from appointment page', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
        defaultValidation();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
        clickSearch();
    });

    then('user navigates to the search screen', () => {
        searchScreen();
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

    and('user select the timeslot', () => {
      expect(container.getByText("3 In-network providers")).toBeInTheDocument();
      clickHour();
    });

    then('user lands on the screen to review the appointment details', () => {
      reviewAppPage();
    });

    and('user selects the option proceeds to schedule it', () => {
      const continueButton = container.getByText("continue");
      fireEvent.click(continueButton);
    });

    then('user lands on the screen to select who the appointment is for', () => {
      expect(container.getAllByText("myself")).toBeTruthy();
      expect(container.getAllByText("someoneElse")).toBeTruthy();
    });
});

  test('EPIC_EPP-44_STORY_EPP-1561 - Verify whether the user able to see Myself option in who the appointment is for screen', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
        defaultValidation();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
        clickSearch();
    });

    then('user navigates to the search screen', () => {
        searchScreen();
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

    and('user select the timeslot', () => {
      expect(container.getByText("3 In-network providers")).toBeInTheDocument();
      clickHour();
    });

    then('user lands on the screen to review the appointment details', () => {
      reviewAppPage();
    });

    and('user selects the option proceeds to schedule it', () => {
      const continueButton = container.getByText("continue");
      fireEvent.click(continueButton);
    });

    then('user lands on the screen to select who the appointment is for', () => {
      expect(container.getAllByText("myself")).toBeTruthy();
      expect(container.getAllByText("someoneElse")).toBeTruthy();
    });

    and('user able to see Myself option in who the appointment is for screen', () => {
      const myselfButton = container.getByText("myself");
      fireEvent.click(myselfButton);
    });
});

  test('EPIC_EPP-44_STORY_EPP-1561 - Verify whether the user able to see Someone else option in who the appointment is for screen', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
        defaultValidation();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
        clickSearch();
    });

    then('user navigates to the search screen', () => {
        searchScreen();
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

    and('user select the timeslot', () => {
        expect(container.getByText("3 In-network providers")).toBeInTheDocument();
        clickHour();
    });

    then('user lands on the screen to review the appointment details', async () => {
      reviewAppPage();
    });

    and('user selects the option proceeds to schedule it', () => {
      const continueButton = container.getByText("continue");
      fireEvent.click(continueButton);
    });

    then('user lands on the screen to select who the appointment is for', () => {
      expect(container.getAllByText("myself")).toBeTruthy();
      expect(container.getAllByText("someoneElse")).toBeTruthy();
    });

    and('user able to see Someone else option in who the appointment is for screen', () => {
      const someoneElseButton = container.getByText("someoneElse");
      fireEvent.click(someoneElseButton);
    });
});

});