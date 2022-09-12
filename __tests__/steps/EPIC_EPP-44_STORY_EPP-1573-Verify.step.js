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
import ModalConfirmation from "../../src/components/organisms/ScheduleAppointment/ModalScheduling/modalConfirmation";
import mediaQuery from 'css-mediaquery';

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1573.feature"
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
  beforeEach(() => {
    container = render(
      <Provider store={store}>
        {ScheduleAppointmentPage.getLayout(<ScheduleAppointmentPage />)}
      </Provider>
    );
  });
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

  const provideFilters = () => {
    inputLocation();
    inputDate();
    inputPurpose();
    inputInsurance();
    clickSearch();
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
    await waitFor(() => container.getByText("Review appointment details"))
  }

  const provideDetailsValid = () => {
    const field1 = container.getByLabelText("First Name");
    fireEvent.change(field1, { target: { value: "1" } });

    const field2 = container.getByLabelText("Last Name");
    fireEvent.change(field2, { target: { value: "2" } });

    const field3 = container.getByLabelText("Mobile Number");
    fireEvent.change(field3, { target: { value: "3" } });

    const field4 = container.getByRole("textbox", { name: "Email" });
    fireEvent.change(field4, { target: { value: "4" } });
  }

  const clickSaveAction = () => {
    const saveButton = container.getByRole("button", {
        name: "scheduleAppoinment",
      });
    fireEvent.click(saveButton);
  }

  const clickHour = async () => {
    const hourButton = await waitFor(() => container.getByTestId(SEARCH_PROVIDER_TEST_ID.hourButton))
    fireEvent.click(hourButton)
  }

  const whosForButtons = () => {
    expect(container.getAllByText("myself")).toBeTruthy();
    expect(container.getAllByText("someoneElse")).toBeTruthy();
  }

  const confirmationPage = async () => {
    const mockCallBack = jest.fn();
    container.rerender(
    <ModalConfirmation
      isLoggedIn={true}
      isOpen={true}
      OnSetIsOpen={mockCallBack}
      isDesktop={false}/>);
    await waitFor(() => container.getByText("You’re Scheduled!"))
  }

  const scheduleAppontment = () => {
    reviewAppPage();
    const continueButton = container.getAllByText("continue")[0];
    fireEvent.click(continueButton);
    const someoneElseButton = container.getByText("someoneElse");
    fireEvent.click(someoneElseButton);
    provideDetailsValid();
    const submitButton = container.getByRole("button", {
      name: "scheduleAppoinment",
    });
    fireEvent.click(submitButton);
  }

  test('EPIC_EPP-44_STORY_EPP-1573 - Verify user able to provide the details to schedule the appointment as a guest.', ({ given, then, and }) => {
    given('user launch the Marketing Site url', () => {
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

    and('user selected a time slot', () => {
      clickHour();
    });

    and('user lands on the review of the appointment details', () => {
      reviewAppPage();
    });

    and('user reviewed and clicks on the continue button', () => {
      const continueButton = container.getAllByText("continue")[0];
      fireEvent.click(continueButton);
    });

    and('user view the Whos is this exam for? screen', () => {
      whosForButtons();
    });

    and('user click on the Self button', () => {
      const myselfButton = container.getByText("myself");
      fireEvent.click(myselfButton);
    });

    and('user redirects to the login screen', () => {
      defaultValidation();
    });

    and('user clicks on the continue as guest', () => {
      defaultValidation();
    });

    and('user navigated to the guest user page', () => {
      defaultValidation();
    });

    and('user clicks on the Already have an appointment? Sync your appointment information button', () => {
      defaultValidation();
    });

    and('user enter the First name, Last name.', () => {
      defaultValidation();
    });

    and('user enter the valid Date of birth', () => {
      defaultValidation();
    });

    and('user select the Preferred mode of communication = Email', () => {
      defaultValidation();
    });

    and('user enters the Email id', () => {
      defaultValidation();
    });

    and('user clicks the \'Continue\' button.', () => {
      defaultValidation();
    });

    and('user recieve the email link', () => {
      defaultValidation();
    });

    and('user Set password using email link', () => {
      defaultValidation();
    });

    and('user naviigated to Dash board screen', () => {
      defaultValidation();
    });

    and('user clicks on the Appointment synced button', () => {
      defaultValidation();
    });

    and('user view the appointment confirmation message.', () => {
      defaultValidation();
    }); 
  });

  test('EPIC_EPP-44_STORY_EPP-1573 - Verify user able to provide the details to schedule the appointment as a guest and user not providing the purpose of visit.', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
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

    and('user not select the purpose of visit', () => {
      defaultValidation();
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

    and('user selected a time slot', () => {
      clickHour();
    });

    and('user lands on the review of the appointment details', () => {
      reviewAppPage();
    });

    and('user reviewed and clicks on the continue button', () => {
      const continueButton = container.getAllByText("continue")[0];
      fireEvent.click(continueButton);
    });

    and('user view the Whos is this exam for? screen', () => {
      whosForButtons();
    });

    and('user click on the Self button', () => {
      const myselfButton = container.getByText("myself");
      fireEvent.click(myselfButton);
    });

    and('user redirects to the login screen', () => {
      defaultValidation();
    });

    and('user clicks on the continue as guest', () => {
      defaultValidation();
    });

    and('user navigated to the guest user page', () => {
      defaultValidation();
    });

    and('user clicks on the Already have an appointment? Sync your appointment information button', () => {
      defaultValidation();
    });

    and('user enter the First name, Last name.', () => {
      defaultValidation();
    });

    and('user enter the valid Date of birth', () => {
      defaultValidation();
    });

    and('user select the Preferred mode of communication = Email', () => {
      defaultValidation();
    });

    and('user enters the Email id', () => {
      defaultValidation();
    });

    and('user clicks the \'Continue\' button.', () => {
      defaultValidation();
    });

    and('user recieve the email link', () => {
      defaultValidation();
    });

    and('user Set password using email link', () => {
      defaultValidation();
    });

    and('user naviigated to Dash board screen', () => {
      defaultValidation();
    });

    and('user clicks on the Appointment synced button', () => {
      defaultValidation();
    });

    and('user view the appointment confirmation message.', () => {
      defaultValidation();
    });
});

  test('EPIC_EPP-44_STORY_EPP-1573 - Verify user able to provide the details to schedule the appointment as a guest and the user not providing the insurance name.', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
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

    and('user not enter the insurance name', () => {
      defaultValidation();
    });

    and('user clicks on the Search button', () => {
      clickSearch();
    });

    and('user views the results in the Schedule Appointments screen', () => {
      resultsScreen();
    });

    and('user selected a time slot', () => {
      clickHour();
    });

    and('user lands on the review of the appointment details', () => {
      reviewAppPage();
    });

    and('user reviewed and clicks on the continue button', () => {
      const continueButton = container.getAllByText("continue")[0];
      fireEvent.click(continueButton);
    });

    and('user view the Whos is this exam for? screen', () => {
      whosForButtons();
    });

    and('user click on the Self button', () => {
      const myselfButton = container.getByText("myself");
      fireEvent.click(myselfButton);
    });

    and('user redirects to the login screen', () => {
      defaultValidation();
    });

    and('user clicks on the continue as guest', () => {
      defaultValidation();
    });

    and('user navigated to the guest user page', () => {
      defaultValidation();
    });

    and('user clicks on the Already have an appointment? Sync your appointment information button', () => {
      defaultValidation();
    });

    and('user enter the First name, Last name.', () => {
      defaultValidation();
    });

    and('user enter the valid Date of birth', () => {
      defaultValidation();
    });

    and('user select the Preferred mode of communication = Email', () => {
      defaultValidation();
    });

    and('user enters the Email id', () => {
      defaultValidation();
    });

    and('user clicks the \'Continue\' button.', () => {
      defaultValidation();
    });

    and('user recieve the email link', () => {
      defaultValidation();
    });

    and('user Set password using email link', () => {
      defaultValidation();
    });

    and('user naviigated to Dash board screen', () => {
      defaultValidation();
    });

    and('user clicks on the Appointment synced button', () => {
      defaultValidation();
    });

    and('user view the appointment confirmation message.', () => {
      defaultValidation();
    });
});

  test('EPIC_EPP-44_STORY_EPP-1573 - Verify user able to provide the details to schedule the appointment as a guest and user not providing the purpose of visit and insurance name.', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
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

    and('user not select the purpose of visit', () => {
      defaultValidation();
    });

    and('user not enter the insurance name', () => {
      defaultValidation();
    });

    and('user clicks on the Search button', () => {
      defaultValidation();
    });

    and('user views the results in the Schedule Appointments screen', () => {
      resultsScreen();
    });

    and('user selected a time slot', () => {
      clickHour();
    });

    and('user lands on the review of the appointment details', () => {
      reviewAppPage();
    });

    and('user reviewed and clicks on the continue button', () => {
      const continueButton = container.getAllByText("continue")[0];
      fireEvent.click(continueButton);
    });

    and('user view the Whos is this exam for? screen', () => {
      whosForButtons();
    });

    and('user click on the Self button', () => {
      const myselfButton = container.getByText("myself");
      fireEvent.click(myselfButton);
    });

    and('user redirects to the login screen', () => {
      defaultValidation();
    });

    and('user clicks on the continue as guest', () => {
      defaultValidation();
    });

    and('user navigated to the guest user page', () => {
      defaultValidation();
    });

    and('user clicks on the Already have an appointment? Sync your appointment information button', () => {
      defaultValidation();
    });

    and('user enter the First name, Last name.', () => {
      defaultValidation();
    });

    and('user enter the valid Date of birth', () => {
      defaultValidation();
    });

    and('user select the Preferred mode of communication = Email', () => {
      defaultValidation();
    });

    and('user enters the Email id', () => {
      defaultValidation();
    });

    and('user clicks the \'Continue\' button.', () => {
      defaultValidation();
    });

    and('user recieve the email link', () => {
      defaultValidation();
    });

    and('user Set password using email link', () => {
      defaultValidation();
    });

    and('user naviigated to Dash board screen', () => {
      defaultValidation();
    });

    and('user clicks on the Appointment synced button', () => {
      defaultValidation();
    });

    and('user view the appointment confirmation message.', () => {
      defaultValidation();
    });
});

});