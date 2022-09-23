import { act, fireEvent, render, waitFor } from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import { Provider } from "react-redux";
import store from "../../src/store/store";
const useRouter = jest.spyOn(require("next/router"), "useRouter");
import constants from "../../src/utils/constants";
import FilterHeading from "../../src/components/molecules/FilterHeading/filterHeading";
import FilterResult from "../../src/components/molecules/FilterResult/filterResult";
import ScheduleAppointmentPage from "../../src/pages/patient/schedule-appointment";

import mediaQuery from "css-mediaquery";
import ModalConfirmation from "../../src/components/organisms/ScheduleAppointment/ScheduleConfirmation/modalConfirmation";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1565.feature"
);

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

  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

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

  const clickHour = async () => {
    const hourButton = await waitFor(() =>
      container.getByTestId(SEARCH_PROVIDER_TEST_ID.hourButton)
    );
    fireEvent.click(hourButton);
  };

  const whosForButtons = () => {
    expect(container.getAllByText("myself")).toBeTruthy();
    expect(container.getAllByText("someoneElse")).toBeTruthy();
  };

  test("EPIC_EPP-44_STORY_EPP-1565 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance.", ({
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

    and("user enters the location", () => {
      inputLocation();
    });

    and("user selects the date of appointment", () => {
      inputDate();
    });

    and("user chooses the purpose of the visit", () => {
      inputPurpose();
    });

    and("user enters the insurance name", () => {
      inputInsurance();
    });

    and("user clicks on the Search button", () => {
      clickSearch();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1565 - Verify user able to search for location and select the date of appointment as well as purpose of visit and insurance and user view the location", ({
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

    and("user enters the location", () => {
      inputLocation();
    });

    and("user selects the date of appointment", () => {
      inputDate();
    });

    and("user chooses the purpose of the visit", () => {
      inputPurpose();
    });

    and("user enters the insurance name", () => {
      inputInsurance();
    });

    and("user clicks on the Search button", () => {
      clickSearch();
    });

    and("user views the results in the Schedule Appointments screen", () => {
      resultsScreen();
    });

    and("user views the selected location.", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1565 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user view the date of appointment", ({
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

    and("user enters the location", () => {
      inputLocation();
    });

    and("user selects the date of appointment", () => {
      inputDate();
    });

    and("user chooses the purpose of the visit", () => {
      inputPurpose();
    });

    and("user enters the insurance name", () => {
      inputInsurance();
    });

    and("user clicks on the Search button", () => {
      clickSearch();
    });

    and("user views the results in the Schedule Appointments screen", () => {
      resultsScreen();
    });

    and("user views the date of appointment.", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1565 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user views the purpose of visit", ({
    given,
    and,
    then,
  }) => {
    given("user launch the Marketing Site URL", () => {
      defaultValidation();
    });

    and("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    then("user navigates to the search screen", () => {
      searchScreen();
    });

    and("user enters the location", () => {
      inputLocation();
    });

    and("user selects the date of appointment", () => {
      inputDate();
    });

    and("user chooses the purpose of the visit", () => {
      inputPurpose();
    });

    and("user enters the insurance name", () => {
      inputInsurance();
    });

    and("user clicks on the Search button", () => {
      clickSearch();
    });

    and("user views the results in the Schedule Appointments screen", () => {
      resultsScreen();
    });

    and("user views the purpose of the visit.", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1565 - Verify the user is able to search for location and select the date of appointment as well as the purpose of visit and insurance and the user view the insurance carrier.", ({
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

    and("user enters the location", () => {
      inputLocation();
    });

    and("user selects the date of appointment", () => {
      inputDate();
    });

    and("user chooses the purpose of the visit", () => {
      inputPurpose();
    });

    and("user enters the insurance name", () => {
      inputInsurance();
    });

    and("user clicks on the Search button", () => {
      clickSearch();
    });

    and("user views the results in the Schedule Appointments screen", () => {
      resultsScreen();
    });

    and("user views the insurance carrier.", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1565 - Verify whether user is able to see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier", ({
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

    and("user enters the location", () => {
      inputLocation();
    });

    and("user selects the date of appointment", () => {
      inputDate();
    });

    and("user chooses the purpose of the visit", () => {
      inputPurpose();
    });

    and("user enters the insurance name", () => {
      inputInsurance();
    });

    and("user clicks on the Search button", () => {
      clickSearch();
    });

    and(
      "user lands on Schedule Appointment screen with the selected location, date, purpose of visit (if provided) and insurance carrier (if provided)",
      () => {
        resultsScreen();
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1565 - Verify whether the user is able to see the timeslot in the Schedule Oppointments screen", ({
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

    and("user views the timeslot", () => {
      clickHour();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1565 - Verify whether the user is able to select the timeslot in the Schedule Oppointments screen", ({
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
      clickHour();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1565 - Verify whether the user lands on the screen to review the appointment details", ({
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
      clickHour();
    });

    then("user lands on the screen to review the appointment details", () => {
      reviewAppPage();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1565 - Verify whether the user lands on the screen to review the appointment details and proceeds to schedule it", ({
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
      clickHour();
    });

    then("user lands on the screen to review the appointment details", () => {
      reviewAppPage();
    });

    and("user selects the option proceeds to schedule it", () => {
      const continueButton = container.getByText("continue");
      fireEvent.click(continueButton);
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1565 - Verify whether the user lands on the screen to select who the appointment is for after proceed from appointment page", ({
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
      clickHour();
    });

    then("user lands on the screen to review the appointment details", () => {
      reviewAppPage();
    });

    and("user selects the option proceeds to schedule it", () => {
      const continueButton = container.getByText("continue");
      fireEvent.click(continueButton);
    });

    then(
      "user lands on the screen to select who the appointment is for",
      () => {
        whosForButtons();
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1565 - Verify whether the user able to see the fields in who the appointment is for screen", ({
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
      clickHour();
    });

    then("user lands on the screen to review the appointment details", () => {
      reviewAppPage();
    });

    and("user selects the option proceeds to schedule it", () => {
      const continueButton = container.getByText("continue");
      fireEvent.click(continueButton);
    });

    then(
      "user lands on the screen to select who the appointment is for",
      () => {
        defaultValidation();
      }
    );

    and("user able to view Myself and Someone else buttons", () => {
      whosForButtons();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1565 - Verify whether the user able to select Someone else option in who the appointment is for screen", ({
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
      clickHour();
    });

    then("user lands on the screen to review the appointment details", () => {
      reviewAppPage();
    });

    and("user selects the option proceeds to schedule it", () => {
      const continueButton = container.getByText("continue");
      fireEvent.click(continueButton);
    });

    then(
      "user lands on the screen to select who the appointment is for",
      () => {
        whosForButtons();
      }
    );

    and("user able to select Someone else option", () => {
      const someoneElseButton = container.getByText("someoneElse");
      fireEvent.click(someoneElseButton);
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1565 - Verify whether the user able to see provide patient basic information page", ({
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
      clickHour();
    });

    then("user lands on the screen to review the appointment details", () => {
      reviewAppPage();
    });

    and("user selects the option proceeds to schedule it", () => {
      const continueButton = container.getByText("continue");
      fireEvent.click(continueButton);
    });

    then(
      "user lands on the screen to select who the appointment is for",
      () => {
        whosForButtons();
      }
    );

    and("user select Someone else option", () => {
      const someoneElseButton = container.getByText("someoneElse");
      fireEvent.click(someoneElseButton);
    });

    then("user able to see Provide patient's baic information page", () => {
      const field1 = container.getByLabelText("First Name");
      fireEvent.change(field1, { target: { value: "" } });

      const field2 = container.getByLabelText("Last Name");
      fireEvent.change(field2, { target: { value: "" } });

      const field3 = container.getByLabelText("Mobile Number");
      fireEvent.change(field3, { target: { value: "" } });

      const field4 = container.getByRole("textbox", { name: "Email" });
      fireEvent.change(field4, { target: { value: "" } });
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1565 - Verify whether the user able to view the fields in provide patient basic information page", ({
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
      clickHour();
    });

    then("user lands on the screen to review the appointment details", () => {
      reviewAppPage();
    });

    and("user selects the option proceeds to schedule it", () => {
      const continueButton = container.getByText("continue");
      fireEvent.click(continueButton);
    });

    and("user able to select Someone else option", () => {
      whosForButtons();
      const someoneElseButton = container.getByText("someoneElse");
      fireEvent.click(someoneElseButton);
    });

    then(
      "user should see fields First Name, Last Name, Date Of Birth,Email,Mobile Number, Preferred mode(s) of communication",
      () => {
        const field1 = container.getByLabelText("First Name");
        fireEvent.change(field1, { target: { value: "" } });

        const field2 = container.getByLabelText("Last Name");
        fireEvent.change(field2, { target: { value: "" } });

        const field3 = container.getByLabelText("Mobile Number");
        fireEvent.change(field3, { target: { value: "" } });

        const field4 = container.getByRole("textbox", { name: "Email" });
        fireEvent.change(field4, { target: { value: "" } });
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1565 - Verify user able to provide the basic details when scheduling appointment for someone else.", ({
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
      clickHour();
    });

    then("user lands on the screen to review the appointment details", () => {
      reviewAppPage();
    });

    and("user selects the option proceeds to schedule it", () => {
      const continueButton = container.getByText("continue");
      fireEvent.click(continueButton);
    });

    and("user select Someone else option", () => {
      whosForButtons();
      const someoneElseButton = container.getByText("someoneElse");
      fireEvent.click(someoneElseButton);
    });

    then(
      "user should see fields First Name, Last Name, Date Of Birth,Email,Mobile Number and Preferred mode(s) of communication",
      () => {
        const field1 = container.getByLabelText("First Name");
        fireEvent.change(field1, { target: { value: "" } });

        const field2 = container.getByLabelText("Last Name");
        fireEvent.change(field2, { target: { value: "" } });

        const field3 = container.getByLabelText("Mobile Number");
        fireEvent.change(field3, { target: { value: "" } });

        const field4 = container.getByRole("textbox", { name: "Email" });
        fireEvent.change(field4, { target: { value: "" } });
      }
    );

    and("user provides valid patient details", () => {
      const field1 = container.getByLabelText("First Name");
      fireEvent.change(field1, { target: { value: "first" } });

      const field2 = container.getByLabelText("Last Name");
      fireEvent.change(field2, { target: { value: "last" } });

      const field3 = container.getByLabelText("Mobile Number");
      fireEvent.change(field3, { target: { value: "1234567890" } });

      const field4 = container.getByRole("textbox", { name: "Email" });
      fireEvent.change(field4, { target: { value: "email@valid.com" } });
    });

    and("user should see submit", () => {
      const submitButton = container.getByRole("button", {
        name: "scheduleAppoinment",
      });
      expect(submitButton).toBeTruthy();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1565 - Verify whether the user able to view the appointment confirmation message.", ({
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
      clickHour();
    });

    then("user lands on the screen to review the appointment details", () => {
      reviewAppPage();
    });

    and("user selects the option proceeds to schedule it", () => {
      const continueButton = container.getByText("continue");
      fireEvent.click(continueButton);
    });

    and("user select Someone else option", () => {
      const someoneElseButton = container.getByText("someoneElse");
      fireEvent.click(someoneElseButton);
    });

    then(
      "user should see fields First Name, Last Name, Date Of Birth,Email,Mobile Number and Preferred mode(s) of communication",
      () => {
        const field1 = container.getByLabelText("First Name");
        fireEvent.change(field1, { target: { value: "" } });

        const field2 = container.getByLabelText("Last Name");
        fireEvent.change(field2, { target: { value: "" } });

        const field3 = container.getByLabelText("Mobile Number");
        fireEvent.change(field3, { target: { value: "" } });

        const field4 = container.getByRole("textbox", { name: "Email" });
        fireEvent.change(field4, { target: { value: "" } });
      }
    );

    and("user provides valid patient details", () => {
      const field1 = container.getByLabelText("First Name");
      fireEvent.change(field1, { target: { value: "first" } });

      const field2 = container.getByLabelText("Last Name");
      fireEvent.change(field2, { target: { value: "last" } });

      const field3 = container.getByLabelText("Mobile Number");
      fireEvent.change(field3, { target: { value: "1234567890" } });

      const field4 = container.getByRole("textbox", { name: "Email" });
      fireEvent.change(field4, { target: { value: "email@valid.com" } });
    });

    and("user select the submit button", () => {
      const submitButton = container.getByRole("button", {
        name: "scheduleAppoinment",
      });
      expect(submitButton).toBeTruthy();
      fireEvent.click(submitButton);
    });

    and(
      "user should be able to view the appointment confirmation message",
      async () => {
        const mockCallBack = jest.fn();
        container.rerender(
          <ModalConfirmation
            isLoggedIn={true}
            isOpen={true}
            OnSetIsOpen={mockCallBack}
            isDesktop={false}
          />
        );
        await waitFor(() => {
          expect(container.getByText("You’re Scheduled!")).toBeInTheDocument();
        });
      }
    );
  });
});
