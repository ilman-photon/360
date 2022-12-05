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
import mediaQuery from "css-mediaquery";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1566.feature"
);

defineFeature(feature, (test) => {
  let container;
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
    return (query) => ({
      matches: mediaQuery.match(query, { width }),
      addListener: () => {
        // intentional
      },
      removeListener: () => {
        // intentional
      },
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

  const provideFilters = () => {
    inputLocation();
    inputDate();
    inputPurpose();
    inputInsurance();
    clickSearch();
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

  const resultsScreen = async () => {
    const rangeDate = { startDate: "2022-10-10", endDate: "2022-10-15" };
    container.rerender(
      <FilterResult
        isDesktop={true}
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
    expect(
      await waitFor(() =>
        container.getByTestId(APPOINTMENT_TEST_ID.FILTER_RESULT.container)
      )
    ).toBeInTheDocument();
  };

  const reviewAppPage = async () => {
    container.rerender(
      <Provider store={store}>
        {ScheduleAppointmentPage.getLayout(<ScheduleAppointmentPage />)}
      </Provider>
    );
    await waitFor(() => container.getByText("Review Appointment Details"));
  };

  const clickSomeoneElseButton = () => {
    const continueButton = container.getAllByText("continue")[0];
    fireEvent.click(continueButton);

    const someoneElseButton = container.getByText("someoneElse");
    fireEvent.click(someoneElseButton);
  };

  const provideDetailsEmpty = () => {
    const field1 = container.getAllByLabelText(/First Name/i)[0];
    fireEvent.change(field1, { target: { value: "" } });

    const field2 = container.getAllByLabelText(/Last Name/i)[0];
    fireEvent.change(field2, { target: { value: "" } });

    const field3 = container.getAllByLabelText(/Mobile Number/i)[0];
    fireEvent.change(field3, { target: { value: "" } });

    const field4 = container.getByLabelText("Email");
    fireEvent.change(field4, { target: { value: "" } });
  };

  const provideDetailsValid = () => {
    const field1 = container.getAllByLabelText(/First Name/i)[0];
    fireEvent.change(field1, { target: { value: "1" } });

    const field2 = container.getAllByLabelText(/Last Name/i)[0];
    fireEvent.change(field2, { target: { value: "2" } });

    const field3 = container.getAllByLabelText(/Mobile Number/i)[0];
    fireEvent.change(field3, { target: { value: "3" } });

    const field4 = container.getByLabelText("Email");
    fireEvent.change(field4, { target: { value: "4" } });
  };

  const clickSaveAction = () => {
    const saveButton = container.getByRole("button", {
      name: "scheduleAppoinment",
    });
    fireEvent.click(saveButton);
  };

  test("EPIC_EPP-44_STORY_EPP-1566 - Verify whether the user able to provide the patient datails.", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    and("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    then("user navigates to the search screen", () => {
      searchScreen();
    });

    and(
      "user provided location,date of appointment,purpose of visit,insurance and provider",
      () => {
        provideFilters();
      }
    );

    then(
      "user should see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier",
      () => {
        resultsScreen();
      }
    );

    and("user select the timeslot", () => {
      defaultValidation();
    });

    then(
      "user lands on the screen to review the appointment details and click on proceeds to schedule it",
      () => {
        // reviewAppPage();
      }
    );

    and("user select Someone else option", () => {
      clickSomeoneElseButton();
    });

    then(
      "user should see fields First Name, Last Name, Date Of Birth,Email,Mobile Number and Preferred mode(s) of communication",
      () => {
        // provideDetailsEmpty();
      }
    );

    and("user able to provide patient details", () => {
      // provideDetailsValid();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1566 - Verify whether the user confirms the patient details", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    and("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    then("user navigates to the search screen", () => {
      searchScreen();
    });

    and(
      "user provided location,date of appointment,purpose of visit,insurance and provider",
      () => {
        provideFilters();
      }
    );

    then(
      "user should see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier",
      () => {
        resultsScreen();
      }
    );

    and("user select the timeslot", () => {
      defaultValidation();
    });

    then(
      "user lands on the screen to review the appointment details and click on proceeds to schedule it",
      () => {
        // reviewAppPage();
      }
    );

    and("user select Someone else option", () => {
      clickSomeoneElseButton();
    });

    then(
      "user should see fields First Name, Last Name, Date Of Birth,Email,Mobile Number and Preferred mode(s) of communication",
      () => {
        // provideDetailsEmpty();
      }
    );

    and("user provide patient details", () => {
      // provideDetailsValid();
    });

    then("user able to confirms the patient details", () => {
      const scheduleAppoinmentButton =
        container.getByText("scheduleAppoinment");
      fireEvent.click(scheduleAppoinmentButton);
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1566 - Verify whether the user able to see the error message if First Name provided was less than 2 characters", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    and("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    then("user navigates to the search screen", () => {
      searchScreen();
    });

    and(
      "user provided location,date of appointment,purpose of visit,insurance and provider",
      () => {
        provideFilters();
      }
    );

    then(
      "user should see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier",
      () => {
        resultsScreen();
      }
    );

    and("user select the timeslot", () => {
      defaultValidation();
    });

    then(
      "user lands on the screen to review the appointment details and click on proceeds to schedule it",
      () => {
        // reviewAppPage();
      }
    );

    and("user select Someone else option", () => {
      clickSomeoneElseButton();
    });

    then(
      "user should see fields First Name, Last Name, Date Of Birth,Email,Mobile Number and Preferred mode(s) of communication",
      () => {
        // provideDetailsEmpty();
      }
    );

    and(
      /^user provide patient details with less than (\d+) characters in (.*) field$/,
      () => {
        const field1 = container.getAllByLabelText(/First Name/i)[0];
        fireEvent.change(field1, { target: { value: "a" } });
      }
    );

    and("user submit the details", () => {
      const scheduleAppoinmentButton =
        container.getByText("scheduleAppoinment");
      fireEvent.click(scheduleAppoinmentButton);
    });

    then(
      /^user should get error message First Name should be greater than (\d+) characters$/,
      async () => {
        await waitFor(() =>
          container.getByText("First Name should be greater than 2 characters")
        );
        expect(
          container.getByText("First Name should be greater than 2 characters")
        ).toBeInTheDocument();
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1566 - Verify whether the user able to see the error message if Lat Name provided was less than 2 characters", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    and("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    then("user navigates to the search screen", () => {
      searchScreen();
    });

    and(
      "user provided location,date of appointment,purpose of visit,insurance and provider",
      () => {
        provideFilters();
      }
    );

    then(
      "user should see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier",
      () => {
        resultsScreen();
      }
    );

    and("user select the timeslot", () => {
      defaultValidation();
    });

    then(
      "user lands on the screen to review the appointment details and click on proceeds to schedule it",
      () => {
        // reviewAppPage();
      }
    );

    and("user select Someone else option", () => {
      clickSomeoneElseButton();
    });

    then(
      "user should see fields First Name, Last Name, Date Of Birth,Email,Mobile Number and Preferred mode(s) of communication",
      () => {
        // provideDetailsEmpty();
      }
    );

    and(
      /^user provide patient details with less than (\d+) characters in (.*) field$/,
      () => {
        const field1 = container.getAllByLabelText(/Last Name/i)[0];
        fireEvent.change(field1, { target: { value: "a" } });
      }
    );

    and("user submit the details", () => {
      const scheduleAppoinmentButton =
        container.getByText("scheduleAppoinment");
      fireEvent.click(scheduleAppoinmentButton);
    });

    then(
      /^user should get error message Last Name should be greater than (\d+) characters$/,
      async () => {
        await waitFor(() =>
          container.getByText("Last Name should be greater than 2 characters")
        );
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1566 - Verify whether the user able to see the error message if email-id provided was in incorrect format", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    and("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    then("user navigates to the search screen", () => {
      searchScreen();
    });

    and(
      "user provided location,date of appointment,purpose of visit,insurance and provider",
      () => {
        provideFilters();
      }
    );

    then(
      "user should see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier",
      () => {
        resultsScreen();
      }
    );

    and("user select the timeslot", () => {
      defaultValidation();
    });

    then(
      "user lands on the screen to review the appointment details and click on proceeds to schedule it",
      () => {
        // reviewAppPage();
      }
    );

    and("user select Someone else option", () => {
      clickSomeoneElseButton();
    });

    then(
      "user should see fields First Name, Last Name, Date Of Birth,Email,Mobile Number and Preferred mode(s) of communication",
      () => {
        // provideDetailsEmpty();
      }
    );

    and(/^user provide patient details with incorrect format (.*)$/, () => {
      // const field4 = container.getByLabelText("Email");
      // fireEvent.change(field4, { target: { value: "email@invalid" } })
    });

    and("user submit the details", () => {
      clickSaveAction();
    });

    then("user should get error message Incorrect email format", async () => {
      // await waitFor(() => container.getByText("Incorrect email format"));
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1566 - Verify whether the user able to see the error message if mobile number provided was in incorrect format", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    and("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    then("user navigates to the search screen", () => {
      searchScreen();
    });

    and(
      "user provided location,date of appointment,purpose of visit,insurance and provider",
      () => {
        provideFilters();
      }
    );

    then(
      "user should see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier",
      () => {
        resultsScreen();
      }
    );

    and("user select the timeslot", () => {
      defaultValidation();
    });

    then(
      "user lands on the screen to review the appointment details and click on proceeds to schedule it",
      () => {
        // reviewAppPage();
      }
    );

    and("user select Someone else option", () => {
      clickSomeoneElseButton();
    });

    then(
      "user should see fields First Name, Last Name, Date Of Birth,Email,Mobile Number and Preferred mode(s) of communication",
      () => {
        // provideDetailsEmpty();
      }
    );

    and(/^user provide patient details with incorrect format (.*)$/, () => {
      const field3 = container.getAllByLabelText(/Mobile Number/i)[0];
      fireEvent.change(field3, { target: { value: "invalid" } });
    });

    and("user submit the details", () => {
      clickSaveAction();
    });

    then(
      "user should get error message Incorrect mobile number format",
      async () => {
        await waitFor(() =>
          container.getByText("Incorrect mobile number format")
        );
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1566 - Verify whether the user able to see the error message if invalid date of birth entered", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    and("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    then("user navigates to the search screen", () => {
      searchScreen();
    });

    and(
      "user provided location,date of appointment,purpose of visit,insurance and provider",
      () => {
        provideFilters();
      }
    );

    then(
      "user should see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier",
      () => {
        resultsScreen();
      }
    );

    and("user select the timeslot", () => {
      defaultValidation();
    });

    then(
      "user lands on the screen to review the appointment details and click on proceeds to schedule it",
      () => {
        reviewAppPage();
        const continueButton = container.getAllByText("continue")[0];
        fireEvent.click(continueButton);
      }
    );

    and("user select Someone else option", () => {
      defaultValidation();
    });

    then(
      "user should see fields First Name, Last Name, Date Of Birth,Email,Mobile Number and Preferred mode(s) of communication",
      () => {
        expect(container.getAllByText("myself")).toBeTruthy();
        expect(container.getAllByText("someoneElse")).toBeTruthy();
      }
    );

    and("user provide patient details with invalid date of birth", () => {
      defaultValidation();
    });

    and("user submit the details", () => {
      defaultValidation();
    });

    then(
      /^user should be able to see the inline error message Invalid (.*)$/,
      () => {
        defaultValidation();
      }
    );
  });
});
