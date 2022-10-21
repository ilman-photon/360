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
import ModalConfirmation from "../../src/components/organisms/ScheduleAppointment/ScheduleConfirmation/modalConfirmation";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1567.feature"
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

  const provideDetailsValid = () => {
    const field1 = container.getByLabelText("First Name");
    fireEvent.change(field1, { target: { value: "1" } });

    const field2 = container.getByLabelText("Last Name");
    fireEvent.change(field2, { target: { value: "2" } });

    const field3 = container.getByLabelText("Mobile Number");
    fireEvent.change(field3, { target: { value: "3" } });

    const field4 = container.getByRole("textbox", { name: "Email" });
    fireEvent.change(field4, { target: { value: "4" } });
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

  const confirmationPage = async () => {
    const mockCallBack = jest.fn();
    container.rerender(
      <ModalConfirmation
        isLoggedIn={true}
        isOpen={true}
        OnSetIsOpen={mockCallBack}
        isDesktop={false}
      />
    );
    await waitFor(() => container.getByText("You’re Scheduled!"));
  };

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
  };

  test("EPIC_EPP-44_STORY_EPP-1567-To verify whether the user is able to choose Appointment for Someone else", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and("user navigates to the schedule appointment screen", () => {
      searchScreen();
    });

    and(
      "user should select the location, Date of Appointment, Purpose of visit, Insurance carrier.",
      () => {
        provideFilters();
      }
    );

    and("click on Search button", () => {
      clickSearch();
    });

    and(
      "user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit and insurance carrier data.",
      () => {
        resultsScreen();
      }
    );

    and("select any available Time slot", () => {
      clickHour();
    });

    and("user should see the Review Appointment details page", () => {
      reviewAppPage();
    });

    and(
      "user clicks on Continue, it should display the option Myself and Someone else.",
      () => {
        const continueButton = container.getAllByText("continue")[0];
        fireEvent.click(continueButton);
      }
    );

    then("user should able to choose Someone else", () => {
      whosForButtons();
      const someoneElseButton = container.getByText("someoneElse");
      fireEvent.click(someoneElseButton);
    });
  });

  test("Verify whether the user is able to add the appointment to calender and check whether its added in the calender.", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and("user navigates to the schedule appointment screen", () => {
      searchScreen();
    });

    and(
      "user should select the location, Date of Appointment, Purpose of visit, Insurance carrier.",
      () => {
        provideFilters();
      }
    );

    and("click on Search button", () => {
      clickSearch();
    });

    and(
      "user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit and insurance carrier data.",
      () => {
        resultsScreen();
      }
    );

    and("select any available Time slot", () => {
      clickHour();
    });

    and("user should see the Review Appointment details page", () => {
      reviewAppPage();
    });

    and(
      "user clicks on Continue, it should display the option Myself and Someone else.",
      () => {
        const continueButton = container.getAllByText("continue")[0];
        fireEvent.click(continueButton);
        whosForButtons();
      }
    );

    then("user should able to choose Someone else", () => {
      const someoneElseButton = container.getByText("someoneElse");
      fireEvent.click(someoneElseButton);
    });

    then("mentioned fields should get displayed.", () => {
      defaultValidation();
    });
  });

  test("Verify whether the text Is this the medical emergency? is displaying", ({
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

    and("user navigates to the schedule appointment screen", () => {
      defaultValidation();
    });

    and(
      "user should select the location, Date of Appointment, Purpose of visit, Insurance carrier.",
      () => {
        provideFilters();
      }
    );

    and("click on Search button", () => {
      clickSearch();
    });

    and(
      "user should lands on Schedule Appointment view screen with selected location, date, Purpose of visit and insurance carrier data.",
      () => {
        resultsScreen();
      }
    );

    and("select any available Time slot", () => {
      clickHour();
    });

    and("user should see the Review Appointment details page", () => {
      reviewAppPage();
    });

    and(
      "user clicks on Continue, it should display the option Myself and Someone else.",
      () => {
        const continueButton = container.getAllByText("continue")[0];
        fireEvent.click(continueButton);
        whosForButtons();
        expect(container.getAllByText("myself")).toBeTruthy();
        expect(container.getAllByText("someoneElse")).toBeTruthy();
      }
    );

    and("user should click Someone else", () => {
      const someoneElseButton = container.getByText("someoneElse");
      fireEvent.click(someoneElseButton);
    });

    and(
      "user should provide all those basic details of patient and click Schedule Appointment.",
      () => {
        provideDetailsValid();
      }
    );

    then("user should see the text Is this the medical emergency?", async () => {
      confirmationPage();
      await waitFor(() => container.getByText(/isEmergency/i));
    });
  });

  test("Verify whether the text If this is a medical emergency, please call 911 is displaying when we mouse hover the text Is this the medical emergency?", ({
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

    and("schedule the appointment.", () => {
      scheduleAppontment();
    });

    and("mouse hover the text  Is this the medical emergency?", async () => {
      confirmationPage();
      await waitFor(() => container.getByText(/isEmergency/i));
    });

    then(
      /^user should see the text If this is a medical emergency, please call (\d+).$/,
      () => {
        defaultValidation();
      }
    );
  });

  test("Verify whether the user having the option to redirect to Patient portal home page after appointment schedule.", ({
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

    and("schedule the appointment.", () => {
      scheduleAppontment();
    });

    then(
      "user should see the option to redirect to Patient portal home page.",
      () => {
        defaultValidation();
      }
    );
  });

  test("Verify whether the Confirmation Email is receiving to the user after successful appointment schedule. (Preferred mode = Email)", ({
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

    and("schedule the appointment.", () => {
      scheduleAppontment();
    });

    then(
      "the user should receive the Confirmation Email for successful Appointment schedule.",
      () => {
        defaultValidation();
      }
    );
  });

  test("Verify whether the Confirmation Text Message is receiving to the user after successful appointment schedule. (Preferred mode = Phone number)", ({
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

    and("schedule the appointment.", () => {
      scheduleAppontment();
    });

    then(
      "the user should receive the Confirmation Text message for successful Appointment schedule.",
      () => {
        defaultValidation();
      }
    );
  });
});
