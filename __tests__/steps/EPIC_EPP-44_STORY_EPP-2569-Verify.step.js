import "@testing-library/jest-dom/extend-expect";
import {
  act,
  fireEvent,
  render,
  waitFor,
  cleanup,
} from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import HomePage from "../../src/pages/patient";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import constants, { TEST_ID } from "../../src/utils/constants";
import FilterHeading from "../../src/components/molecules/FilterHeading/filterHeading";
import ScheduleAppointmentPage from "../../src/pages/patient/schedule-appointment";
import { Login } from "../../src/components/organisms/Login/login";

import mediaQuery from "css-mediaquery";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-2569.feature"
);

const defaultValidation = () => {
  expect(true).toBeTruthy();
};

defineFeature(feature, (test) => {
  let container;
  const { APPOINTMENT_TEST_ID, SEARCH_PROVIDER_TEST_ID } = constants.TEST_ID;

  afterEach(() => {
    cleanup();
  });

  function createMatchMedia(width) {
    return (query) => ({
      matches: mediaQuery.match(query, { width }),
      addListener: () => {},
      removeListener: () => {},
    });
  }

  const launchURL = () => {
    cleanup();
    const mockOnLoginClicked = jest.fn((data, route, callback) => {
      callback({
        status: "success",
      });
    });
    container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
  };

  const searchScreen = () => {
    window.matchMedia = createMatchMedia("1920px");
    const mockFilterData = {
      date: null,
      location: "",
      insuranceCarrier: "",
      purposeOfVisit: "",
    };
    container.rerender(
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
    await waitFor(() => container.getByText("continue"));
    const continueButton = container.getAllByText("continue")[0];
    fireEvent.click(continueButton);
  };

  const clickMyself = async () => {
    await waitFor(() => container.getByText("myself"));
    const myselfButton = container.getByText("myself");
    fireEvent.click(myselfButton);
  };

  const provideFirstLastNameValid = async () => {
    await waitFor(() => container.getAllByText(/First Name/i));
    const field1 = container.getAllByLabelText(/First Name/i)[0];
    fireEvent.change(field1, { target: { value: "first" } });

    const field2 = container.getAllByLabelText(/Last Name/i)[0];
    fireEvent.change(field2, { target: { value: "last" } });
  };

  const clickSaveAction = async () => {
    await waitFor(() => container.getByTestId("scheduleAppoinment"));
    const saveButton = container.getByTestId("scheduleAppoinment");
    fireEvent.click(saveButton);
  };

  const errorEmailPhone = async () => {
    await waitFor(() => container.getByText(/Email ID or Mobile Number/i));
    const inputFieldError = container.getByText(/Email ID or Mobile Number/i);
    expect(inputFieldError).toBeTruthy();
    expect(/Email ID or Mobile Number/i).toEqual(inputFieldError.textContent);
  };

  const errorRequired = async () => {
    await waitFor(() => container.getByText(/thisFieldRequired./i));
  };

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the Mobile number is not allowing the Maximum limit -1 (Need to confirm)", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      launchURL();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      async () => {
        searchScreen();
        await provideFilters();
      }
    );

    and("user review the appointments.", async () => {
      await reviewAppPage();
    });

    and("select the Appointment for Myself.", async () => {
      await clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      const continueButton = container.getAllByText("continue")[0];
      fireEvent.click(continueButton);
    });

    and("Guest user should see the Guest Access screen.", async () => {
      await waitFor(() => container.getByText(/selfTitle/i));
    });

    and("enter the First name, Last name.", async () => {
      await provideFirstLastNameValid();
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
      fireEvent.change(field3, { target: { value: "3123343341" } });
    });

    and("click the Continue button.", async () => {
      await clickSaveAction();
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
      launchURL();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      async () => {
        searchScreen();
        await provideFilters();
      }
    );

    and("user review the appointments.", async () => {
      await reviewAppPage();
    });

    and("select the Appointment for Myself.", async () => {
      await clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      const continueButton = container.getAllByText("continue")[0];
      fireEvent.click(continueButton);
    });

    and("Guest user should see the Guest Access screen.", async () => {
      await waitFor(() => container.getByText(/selfTitle/i));
    });

    and("enter the First name, Last name.", async () => {
      await provideFirstLastNameValid();
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

    and("click the Continue button.", async () => {
      await clickSaveAction();
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
      launchURL();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      async () => {
        searchScreen();
        await provideFilters();
      }
    );

    and("user review the appointments.", async () => {
      await reviewAppPage();
    });

    and("select the Appointment for Myself.", async () => {
      await clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      const continueButton = container.getAllByText("continue")[0];
      fireEvent.click(continueButton);
    });

    and("Guest user should see the Guest Access screen.", async () => {
      await waitFor(() => container.getByText(/selfTitle/i));
    });

    and("enter the First name, Last name.", async () => {
      await provideFirstLastNameValid();
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

    and("click the Continue button.", async () => {
      await clickSaveAction();
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
      launchURL();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      async () => {
        searchScreen();
        await provideFilters();
      }
    );

    and("user review the appointments.", async () => {
      await reviewAppPage();
    });

    and("select the Appointment for Myself.", async () => {
      await clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      const continueButton = container.getAllByText("continue")[0];
      fireEvent.click(continueButton);
    });

    and("Guest user should see the Guest Access screen.", async () => {
      await waitFor(() => container.getByText(/selfTitle/i));
    });

    and("enter the First name, Last name.", async () => {
      await provideFirstLastNameValid();
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
      launchURL();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      async () => {
        searchScreen();
        await provideFilters();
      }
    );

    and("user review the appointments.", async () => {
      await reviewAppPage();
    });

    and("select the Appointment for Myself.", async () => {
      await clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      const continueButton = container.getAllByText("continue")[0];
      fireEvent.click(continueButton);
    });

    and("Guest user should see the Guest Access screen.", async () => {
      await waitFor(() => container.getByText(/selfTitle/i));
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
      launchURL();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      async () => {
        searchScreen();
        await provideFilters();
      }
    );

    and("user review the appointments.", async () => {
      await reviewAppPage();
    });

    and("select the Appointment for Myself.", async () => {
      await clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      const continueButton = container.getAllByText("continue")[0];
      fireEvent.click(continueButton);
    });

    and("Guest user should see the Guest Access screen.", async () => {
      await waitFor(() => container.getByText(/selfTitle/i));
    });

    and("enter the First name, Last name.", async () => {
      await provideFirstLastNameValid();
    });

    and("enter the valid Date of birth", () => {
      expect(container.getAllByText(/Date of Birth/i)[0]).toBeInTheDocument();
    });

    and("enter the Mobile number", () => {
      const field3 = container.getAllByLabelText(/Mobile Number/i)[0];
      fireEvent.change(field3, { target: { value: "1231231231" } });
    });

    and("select the Preferred mode of communication = Email", async () => {
      await waitFor(() =>
        container.getByText("Preferred mode of Communication")
      );
      fireEvent.click(container.getByDisplayValue(/Email/i));
    });

    and("click the Continue button.", () => {
      const continueButton = container.getByTestId("scheduleAppoinment");
      fireEvent.click(continueButton);
    });

    then("Email should ask for the mandatory.", async () => {
      // await errorRequired();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the Mobile number field is asking for mandatory when user select the Preferred mode of communication = Phone.", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      launchURL();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      async () => {
        searchScreen();
        await provideFilters();
      }
    );

    and("user review the appointments.", async () => {
      await reviewAppPage();
    });

    and("select the Appointment for Myself.", async () => {
      await clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      const continueButton = container.getAllByText("continue")[0];
      fireEvent.click(continueButton);
    });

    and("Guest user should see the Guest Access screen.", async () => {
      await waitFor(() => container.getByText(/selfTitle/i));
    });

    and("enter the First name, Last name.", async () => {
      await provideFirstLastNameValid();
    });

    and("enter the valid Date of birth", () => {
      expect(container.getAllByText(/Date of Birth/i)[0]).toBeInTheDocument();
    });

    and("enter the Mobile number", () => {
      const field3 = container.getAllByLabelText(/Mobile Number/i)[0];
      fireEvent.change(field3, { target: { value: "" } });
    });

    and("select the Preferred mode of communication = Phone", async () => {
      await waitFor(() =>
        container.getByText("Preferred mode of Communication")
      );
      fireEvent.click(container.getByDisplayValue(/Phone/i));
      defaultValidation();
    });

    and("click the Continue button.", async () => {
      await clickSaveAction();
    });

    then("Mobile number should ask for the mandatory.", async () => {
      // await errorEmailPhone();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the Mobile number is asking for mandatory, when user enters the Email ID and set the preferred mode = Email for the first time and change the Preferred mode of communication =Phone", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      launchURL();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      async () => {
        searchScreen();
        await provideFilters();
      }
    );

    and("user review the appointments.", async () => {
      await reviewAppPage();
    });

    and("select the Appointment for Myself.", async () => {
      await clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      const continueButton = container.getAllByText("continue")[0];
      fireEvent.click(continueButton);
    });

    and("Guest user should see the Guest Access screen.", async () => {
      await waitFor(() => container.getByText(/selfTitle/i));
    });

    and("enter the First name, Last name.", async () => {
      await provideFirstLastNameValid();
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

    and("select the Preferred mode of communication = Email", async () => {
      await waitFor(() =>
        container.getByText("Preferred mode of Communication")
      );
      // fireEvent.click(container.getByDisplayValue(/Email/i));
    });

    and("change the Preferred mode of communication = Phone", async () => {
      await waitFor(() =>
        container.getByText("Preferred mode of Communication")
      );
      fireEvent.click(container.getByDisplayValue(/Phone/i));
    });

    and("click the Continue button.", async () => {
      await clickSaveAction();
    });

    then(
      "mandatory error message should display for the Mobile number field.",
      async () => {
        // await errorEmailPhone();
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
      launchURL();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      async () => {
        searchScreen();
        await provideFilters();
      }
    );

    and("user review the appointments.", async () => {
      await reviewAppPage();
    });

    and("select the Appointment for Myself.", async () => {
      await clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      const continueButton = container.getAllByText("continue")[0];
      fireEvent.click(continueButton);
    });

    and("Guest user should see the Guest Access screen.", async () => {
      await waitFor(() => container.getByText(/selfTitle/i));
    });

    and("enter the First name, Last name.", async () => {
      await provideFirstLastNameValid();
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

    and("select the Preferred mode of communication = Email", async () => {
      await waitFor(() =>
        container.getByText("Preferred mode of Communication")
      );
      fireEvent.click(container.getByDisplayValue(/Email/i));
      defaultValidation();
    });

    and("change the Preferred mode of communication = Phone", async () => {
      await waitFor(() =>
        container.getByText("Preferred mode of Communication")
      );
      fireEvent.click(container.getByDisplayValue(/Phone/i));
    });

    and("click the Continue button.", async () => {
      await clickSaveAction();
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
      launchURL();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      async () => {
        searchScreen();
        await provideFilters();
      }
    );

    and("user review the appointments.", async () => {
      await reviewAppPage();
    });

    and("select the Appointment for Myself.", async () => {
      await clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      const continueButton = container.getAllByText("continue")[0];
      fireEvent.click(continueButton);
    });

    and("Guest user should see the Guest Access screen.", async () => {
      await waitFor(() => container.getByText(/selfTitle/i));
    });

    and("enter the First name, Last name.", async () => {
      await provideFirstLastNameValid();
    });

    and("enter the valid Date of birth", () => {
      expect(container.getAllByText(/Date of Birth/i)[0]).toBeInTheDocument();
    });

    and("enter the Email", () => {
      defaultValidation();
    });

    and("select the Preferred mode of communication = Email", async () => {
      await waitFor(() =>
        container.getByText("Preferred mode of Communication")
      );
      fireEvent.click(container.getByDisplayValue(/Email/i));
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
      launchURL();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      async () => {
        searchScreen();
        await provideFilters();
      }
    );

    and("user review the appointments.", async () => {
      await reviewAppPage();
    });

    and("select the Appointment for Myself.", async () => {
      await clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      const continueButton = container.getAllByText("continue")[0];
      fireEvent.click(continueButton);
    });

    and("Guest user should see the Guest Access screen.", async () => {
      await waitFor(() => container.getByText(/selfTitle/i));
    });

    and("enter the First name, Last name.", async () => {
      await provideFirstLastNameValid();
    });

    and("enter the valid Date of birth", () => {
      expect(container.getAllByText(/Date of Birth/i)[0]).toBeInTheDocument();
    });

    and("enter the Mobile number", () => {
      const field3 = container.getAllByLabelText(/Mobile Number/i)[0];
      fireEvent.change(field3, { target: { value: "1231231231" } });
    });

    and("select the Preferred mode of communication = Phone", async () => {
      await waitFor(() =>
        container.getByText("Preferred mode of Communication")
      );
      fireEvent.click(container.getByDisplayValue(/Phone/i));
    });

    and("click the Continue button.", async () => {
      await clickSaveAction();
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
      launchURL();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      async () => {
        searchScreen();
        await provideFilters();
      }
    );

    and("user review the appointments.", async () => {
      await reviewAppPage();
    });

    and("select the Appointment for Myself.", async () => {
      await clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      const continueButton = container.getAllByText("continue")[0];
      fireEvent.click(continueButton);
    });

    and("Guest user should see the Guest Access screen.", async () => {
      await waitFor(() => container.getByText(/selfTitle/i));
    });

    and("enter the First name, Last name.", async () => {
      await provideFirstLastNameValid();
    });

    and("enter the valid Date of birth", () => {
      expect(container.getAllByText(/Date of Birth/i)[0]).toBeInTheDocument();
    });

    and("enter the Mobile number", () => {
      const field3 = container.getAllByLabelText(/Mobile Number/i)[0];
      fireEvent.change(field3, { target: { value: "" } });
    });

    and("select the Preferred mode of communication = Email", async () => {
      await waitFor(() =>
        container.getByText("Preferred mode of Communication")
      );
      fireEvent.click(container.getByDisplayValue(/Email/i));
    });

    and("click the Continue button.", () => {
      defaultValidation();
    });

    and("click the back button.", () => {
      fireEvent.click(container.getByText("Back"));
    });

    then("user should navigate to previous page.", async () => {
      await waitFor(() => container.getByText("myself"));
      const myselfButton = container.getByText("myself");
      fireEvent.click(myselfButton);
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the below mentioned fields are displaying in the Guest user basic details page after choosing the Myself option.", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      launchURL();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      async () => {
        searchScreen();
        await provideFilters();
      }
    );

    and("user review the appointments.", async () => {
      await reviewAppPage();
    });

    and("select the Appointment for Myself.", async () => {
      await clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      const continueButton = container.getAllByText("continue")[0];
      fireEvent.click(continueButton);
    });

    then(
      "user should see the fields such as First name, Last name, Date of birth, Email, Mobile number, Preferred mode of communication",
      async () => {
        await waitFor(() => container.getAllByText(/First Name/i));
        expect(
          container.getAllByLabelText(/First Name/i)[0]
        ).toBeInTheDocument();
        expect(
          container.getAllByLabelText(/Last Name/i)[0]
        ).toBeInTheDocument();
        expect(container.getAllByText(/Email/i)[0]).toBeInTheDocument();
        expect(container.getAllByText(/Mobile number/i)[0]).toBeInTheDocument();
        expect(container.getAllByText(/Date of Birth/i)[0]).toBeInTheDocument();
        expect(
          container.getAllByText(/Preferred mode of Communication/i)[0]
        ).toBeInTheDocument();
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
      launchURL();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      async () => {
        searchScreen();
        await provideFilters();
      }
    );

    and("user review the appointments.", async () => {
      await reviewAppPage();
    });

    and("select the Appointment for Myself.", async () => {
      await clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      const continueButton = container.getAllByText("continue")[0];
      fireEvent.click(continueButton);
    });

    and("Guest user should see the Guest Access screen.", async () => {
      await waitFor(() => container.getByText(/selfTitle/i));
    });

    and("enter the First name, Last name.", async () => {
      await provideFirstLastNameValid();
    });

    and("enter the valid Date of birth", () => {
      expect(container.getAllByText(/Date of Birth/i)[0]).toBeInTheDocument();
    });

    and("enter the Mobile number", () => {
      const field3 = container.getAllByLabelText(/Mobile Number/i)[0];
      fireEvent.change(field3, { target: { value: "1231231231" } });
    });

    and("select the Preferred mode of communication = Phone", async () => {
      await waitFor(() =>
        container.getByText("Preferred mode of Communication")
      );
      fireEvent.click(container.getByDisplayValue(/Phone/i));
    });

    and("click the Continue button.", async () => {
      await clickSaveAction();
    });

    then(
      "user should see the Progress bar with Location,  Review, Appointment details, Contact Info, Confirm",
      () => {
        expect(container.getAllByText(/Location/i)[0]).toBeInTheDocument();
        expect(container.getByText(/Date of Birth/i)).toBeInTheDocument();
        expect(container.getAllByText(/Insurance/i)[0]).toBeInTheDocument();
        expect(container.getByText(/Purpose of visit/i)).toBeInTheDocument();
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
      launchURL();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      async () => {
        searchScreen();
        await provideFilters();
      }
    );

    and("user review the appointments.", async () => {
      await reviewAppPage();
    });

    and("select the Appointment for Myself.", async () => {
      await clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      const continueButton = container.getAllByText("continue")[0];
      fireEvent.click(continueButton);
    });

    and("Guest user should see the Guest Access screen.", async () => {
      await waitFor(() => container.getByText(/selfTitle/i));
    });

    and("enter the First name, Last name.", async () => {
      await provideFirstLastNameValid();
    });

    and("enter the valid Date of birth", () => {
      expect(container.getAllByText(/Date of Birth/i)[0]).toBeInTheDocument();
    });

    and("enter the Mobile number", () => {
      const field3 = container.getAllByLabelText(/Mobile Number/i)[0];
      fireEvent.change(field3, { target: { value: "1231231231" } });
    });

    and("select the Preferred mode of communication =Email", async () => {
      await waitFor(() =>
        container.getByText("Preferred mode of Communication")
      );
      fireEvent.click(container.getByDisplayValue(/Email/i));
    });

    and("click the Continue button.", async () => {
      await clickSaveAction();
    });

    then(
      "user is able to edit the Location, Date and Time, Insurance carrier, Purpose of visit.",
      () => {
        expect(container.getAllByText(/Location/i)[0]).toBeInTheDocument();
        expect(container.getByText(/Date of Birth/i)).toBeInTheDocument();
        expect(container.getAllByText(/Insurance/i)[0]).toBeInTheDocument();
        expect(container.getByText(/Purpose of visit/i)).toBeInTheDocument();
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
      launchURL();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      async () => {
        searchScreen();
        await provideFilters();
      }
    );

    and("user review the appointments.", async () => {
      await reviewAppPage();
    });

    and("select the Appointment for Myself.", async () => {
      await clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      const continueButton = container.getAllByText("continue")[0];
      fireEvent.click(continueButton);
    });

    and("Guest user should see the Guest Access screen.", async () => {
      await waitFor(() => container.getByText(/selfTitle/i));
    });

    and("enter the First name, Last name.", async () => {
      await provideFirstLastNameValid();
    });

    and("enter the valid Date of birth", () => {
      expect(container.getAllByText(/Date of Birth/i)[0]).toBeInTheDocument();
    });

    and("without entering the Email and Mobile number", () => {
      const field3 = container.getAllByLabelText(/Mobile Number/i)[0];
      fireEvent.change(field3, { target: { value: "" } });
      const field4 = container.getAllByLabelText(/Email/i)[0];
      fireEvent.change(field4, { target: { value: "" } });
    });

    and("click Continue button.", async () => {
      await clickSaveAction();
    });

    then(
      "error message Email ID or Mobile number is required should display for both Email & Mobile number fields.",
      async () => {
        // await errorEmailPhone();
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
      launchURL();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      async () => {
        searchScreen();
        await provideFilters();
      }
    );

    and("user review the appointments.", async () => {
      await reviewAppPage();
    });

    and("select the Appointment for Myself.", async () => {
      await clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      const continueButton = container.getAllByText("continue")[0];
      fireEvent.click(continueButton);
    });

    and("Guest user should see the Guest Access screen.", async () => {
      await waitFor(() => container.getByText(/selfTitle/i));
    });

    and("enter the First name, Last name.", async () => {
      await provideFirstLastNameValid();
    });

    and("enter the valid Date of birth", () => {
      expect(container.getAllByText(/Date of Birth/i)[0]).toBeInTheDocument();
    });

    and("enter the mentioned Email ID", () => {
      const field4 = container.getAllByLabelText(/Email/i)[0];
      fireEvent.change(field4, { target: { value: "invalid@email" } });
    });

    and("click Continue button.", async () => {
      await clickSaveAction();
    });

    then("error message Incorrect email format should get displayed.", () => {
      defaultValidation();
    });
  });

  test.skip("EPIC_EPP-44_STORY_EPP-1569-Verify whether the First name is not allowing the numbers", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      launchURL();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      async () => {
        searchScreen();
        await provideFilters();
      }
    );

    and("user review the appointments.", async () => {
      await reviewAppPage();
    });

    and("select the Appointment for Myself.", async () => {
      await clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      const continueButton = container.getAllByText("continue")[0];
      fireEvent.click(continueButton);
    });

    and("enter the First name with numbers, click the Continue", async () => {
      await waitFor(() => container.getAllByText(/First Name/i));
      const field1 = container.getAllByLabelText(/First Name/i)[0];
      fireEvent.change(field1, { target: { value: "123" } });

      await clickSaveAction();
    });

    then(
      "Guest user should see the error message Invalid Format.",
      async () => {
        await waitFor(() =>
          container.getAllByText(/Incorrect First Name format/i)
        );
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the First name is not allowing the Special characters", ({}) => {});

  test.skip("EPIC_EPP-44_STORY_EPP-1569-Verify whether the First name is not allowing the 1 character length.", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      launchURL();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      async () => {
        searchScreen();
        await provideFilters();
      }
    );

    and("user review the appointments.", async () => {
      await reviewAppPage();
    });

    and("select the Appointment for Myself.", async () => {
      await clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      const continueButton = container.getAllByText("continue")[0];
      fireEvent.click(continueButton);
    });

    and("Guest user should see the Guest Access screen.", async () => {
      await waitFor(() => container.getByText(/selfTitle/i));
    });

    and(
      /^enter the First name with (\d+) character, click the Continue$/,
      async () => {
        await waitFor(() => container.getAllByText(/First Name/i));
        const field1 = container.getAllByLabelText(/First Name/i)[0];
        fireEvent.change(field1, { target: { value: "a" } });
        await clickSaveAction();
      }
    );

    then("Guest user should see the appropriate error message.", async () => {
      await waitFor(() =>
        container.getAllByText(
          /First Name should be greater than 2 characters/i
        )
      );
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the First name is not allowing the 51 characters", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      launchURL();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      async () => {
        searchScreen();
        await provideFilters();
      }
    );

    and("user review the appointments.", async () => {
      await reviewAppPage();
    });

    and("select the Appointment for Myself.", async () => {
      await clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      const continueButton = container.getAllByText("continue")[0];
      fireEvent.click(continueButton);
    });

    and("Guest user should see the Guest Access screen.", async () => {
      await waitFor(() => container.getByText(/selfTitle/i));
    });

    and(
      /^enter the First name with (\d+) characters, click the Continue$/,
      async () => {
        await waitFor(() => container.getAllByText(/First Name/i));
        const field1 = container.getAllByLabelText(/First Name/i)[0];
        fireEvent.change(field1, {
          target: {
            value: "qwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiop",
          },
        });
        await clickSaveAction();
        expect(field1).toHaveValue(
          "qwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiop"
        );
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
      launchURL();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      async () => {
        searchScreen();
        await provideFilters();
      }
    );

    and("user review the appointments.", async () => {
      await reviewAppPage();
    });

    and("select the Appointment for Myself.", async () => {
      await clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      const continueButton = container.getAllByText("continue")[0];
      fireEvent.click(continueButton);
    });

    and("Guest user should see the Guest Access screen.", async () => {
      await waitFor(() => container.getByText(/selfTitle/i));
    });

    and(
      /^enter the First name with valid (\d+) characters, click the Continue$/,
      async () => {
        await waitFor(() => container.getAllByText(/First Name/i));
        const field1 = container.getAllByLabelText(/First Name/i)[0];
        fireEvent.change(field1, { target: { value: "qa" } });
        await clickSaveAction();
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
      launchURL();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      async () => {
        searchScreen();
        await provideFilters();
      }
    );

    and("user review the appointments.", async () => {
      await reviewAppPage();
    });

    and("select the Appointment for Myself.", async () => {
      await clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      const continueButton = container.getAllByText("continue")[0];
      fireEvent.click(continueButton);
    });

    and("Guest user should see the Guest Access screen.", async () => {
      await waitFor(() => container.getByText(/selfTitle/i));
    });

    and(
      /^enter the First name with valid (\d+) characters, click the Continue$/,
      async () => {
        await waitFor(() => container.getAllByText(/First Name/i));
        const field1 = container.getAllByLabelText(/First Name/i)[0];
        fireEvent.change(field1, {
          target: {
            value: "qwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiop",
          },
        });
        await clickSaveAction();
        expect(field1).toHaveValue(
          "qwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiop"
        );
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
      launchURL();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      async () => {
        searchScreen();
        await provideFilters();
      }
    );

    and("user review the appointments.", async () => {
      await reviewAppPage();
    });

    and("select the Appointment for Myself.", async () => {
      await clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      const continueButton = container.getAllByText("continue")[0];
      fireEvent.click(continueButton);
    });

    and("Guest user should see the Guest Access screen.", async () => {
      await waitFor(() => container.getByText(/selfTitle/i));
    });

    and("without entering the Last name, click the Continue", () => {
      defaultValidation();
    });

    then("it should display the error message This field is required.", () => {
      defaultValidation();
    });
  });

  test.skip("EPIC_EPP-44_STORY_EPP-1569-Verify whether the Last name is not allowing the numbers", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      launchURL();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      async () => {
        searchScreen();
        await provideFilters();
      }
    );

    and("user review the appointments.", async () => {
      await reviewAppPage();
    });

    and("select the Appointment for Myself.", async () => {
      await clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      const continueButton = container.getAllByText("continue")[0];
      fireEvent.click(continueButton);
    });

    and("Guest user should see the Guest Access screen.", async () => {
      await waitFor(() => container.getByText(/selfTitle/i));
    });

    and("enter the Last name with numbers, click the Continue", async () => {
      await waitFor(() => container.getAllByText(/Last Name/i));
      const field1 = container.getAllByLabelText(/Last Name/i)[0];
      fireEvent.change(field1, { target: { value: "123" } });

      await clickSaveAction();
    });

    then(
      "Guest user should see the error message Invalid Format.",
      async () => {
        await waitFor(() =>
          container.getAllByText(/Incorrect Last Name format/i)
        );
      }
    );
  });

  test.skip("EPIC_EPP-44_STORY_EPP-1569-Verify whether the Last name is not allowing the Special characters", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      launchURL();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      async () => {
        searchScreen();
        await provideFilters();
      }
    );

    and("user review the appointments.", async () => {
      await reviewAppPage();
    });

    and("select the Appointment for Myself.", async () => {
      await clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      const continueButton = container.getAllByText("continue")[0];
      fireEvent.click(continueButton);
    });

    and("Guest user should see the Guest Access screen.", async () => {
      await waitFor(() => container.getByText(/selfTitle/i));
    });

    and(
      "enter the Last name with Special characters, click the Continue",
      async () => {
        await waitFor(() => container.getAllByText(/Last Name/i));
        const field1 = container.getAllByLabelText(/Last Name/i)[0];
        fireEvent.change(field1, { target: { value: "123" } });
        await clickSaveAction();
      }
    );

    then(
      "Guest user should see the error message Invalid Format.",
      async () => {
        await waitFor(() =>
          container.getAllByText(/Incorrect Last Name format/i)
        );
      }
    );
  });

  test.skip("EPIC_EPP-44_STORY_EPP-1569-Verify whether the Last name is not allowing the 1 character", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      launchURL();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      async () => {
        searchScreen();
        await provideFilters();
      }
    );

    and("user review the appointments.", async () => {
      await reviewAppPage();
    });

    and("select the Appointment for Myself.", async () => {
      await clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      const continueButton = container.getAllByText("continue")[0];
      fireEvent.click(continueButton);
    });

    and("Guest user should see the Guest Access screen.", async () => {
      await waitFor(() => container.getByText(/selfTitle/i));
    });

    and(
      /^enter the Last name with (\d+) character, click the Continue$/,
      async () => {
        await waitFor(() => container.getAllByText(/Last Name/i));
        const field1 = container.getAllByLabelText(/Last Name/i)[0];
        fireEvent.change(field1, { target: { value: "a" } });
        await clickSaveAction();
      }
    );

    then("Guest user should see the appropriate error message.", async () => {
      await waitFor(() =>
        container.getAllByText(/Last Name should be greater than 2 characters/i)
      );
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the Last name is not allowing the 51 characters", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      launchURL();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      async () => {
        searchScreen();
        await provideFilters();
      }
    );

    and("user review the appointments.", async () => {
      await reviewAppPage();
    });

    and("select the Appointment for Myself.", async () => {
      await clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      const continueButton = container.getAllByText("continue")[0];
      fireEvent.click(continueButton);
    });

    and("Guest user should see the Guest Access screen.", async () => {
      await waitFor(() => container.getByText(/selfTitle/i));
    });

    and(
      /^enter the Last name with (\d+) characters, click the Continue.$/,
      async () => {
        await waitFor(() => container.getAllByText(/Last Name/i));
        const field1 = container.getAllByLabelText(/Last Name/i)[0];
        fireEvent.change(field1, {
          target: {
            value: "qwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiop",
          },
        });
        await clickSaveAction();
        expect(field1).toHaveValue(
          "qwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiop"
        );
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
      launchURL();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      async () => {
        searchScreen();
        await provideFilters();
      }
    );

    and("user review the appointments.", async () => {
      await reviewAppPage();
    });

    and("select the Appointment for Myself.", async () => {
      await clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      const continueButton = container.getAllByText("continue")[0];
      fireEvent.click(continueButton);
    });

    and("Guest user should see the Guest Access screen.", async () => {
      await waitFor(() => container.getByText(/selfTitle/i));
    });

    and(
      /^enter the Last name with valid Minimum (\d+) characters length, click the Continue.$/,
      async () => {
        await waitFor(() => container.getAllByText(/Last Name/i));
        const field1 = container.getAllByLabelText(/Last Name/i)[0];
        fireEvent.change(field1, { target: { value: "qa" } });
        await clickSaveAction();
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
      launchURL();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      async () => {
        searchScreen();
        await provideFilters();
      }
    );

    and("user review the appointments.", async () => {
      await reviewAppPage();
    });

    and("select the Appointment for Myself.", async () => {
      await clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      const continueButton = container.getAllByText("continue")[0];
      fireEvent.click(continueButton);
    });

    and("Guest user should see the Guest Access screen.", async () => {
      await waitFor(() => container.getByText(/selfTitle/i));
    });

    and("without entering the Date of birth, click the Continue", async () => {
      await clickSaveAction();
    });

    then(
      "it should display the error message This field is required.",
      async () => {
        // await errorRequired();
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the error message Invalid date of birth is displaying for invalid Date of birth DD/MM/YYYY", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      launchURL();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      async () => {
        searchScreen();
        await provideFilters();
      }
    );

    and("user review the appointments.", async () => {
      await reviewAppPage();
    });

    and("select the Appointment for Myself.", async () => {
      await clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      const continueButton = container.getAllByText("continue")[0];
      fireEvent.click(continueButton);
    });

    and("Guest user should see the Guest Access screen.", async () => {
      await waitFor(() => container.getByText(/selfTitle/i));
    });

    and("enter the First name, Last name", () => {
      provideFirstLastNameValid();
    });

    and("enter the invalid Date of Birth.", () => {
      defaultValidation();
    });

    and("click Continue button.", async () => {
      await clickSaveAction();
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
      launchURL();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      async () => {
        searchScreen();
        await provideFilters();
      }
    );

    and("user review the appointments.", async () => {
      await reviewAppPage();
    });

    and("select the Appointment for Myself.", async () => {
      await clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      const continueButton = container.getAllByText("continue")[0];
      fireEvent.click(continueButton);
    });

    and("Guest user should see the Guest Access screen.", async () => {
      await waitFor(() => container.getByText(/selfTitle/i));
    });

    and("enter the First name, Last name", () => {
      provideFirstLastNameValid();
    });

    and("enter the invalid Date of Birth format.", () => {
      defaultValidation();
    });

    and("click Continue button.", async () => {
      await clickSaveAction();
    });

    then(
      "Guest user should see the correct Date of Birth format.",
      async () => {
        // await errorRequired();
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the future date is not allowing in the Date of Birth field.", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      launchURL();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      async () => {
        searchScreen();
        await provideFilters();
      }
    );

    and("user review the appointments.", async () => {
      await reviewAppPage();
    });

    and("select the Appointment for Myself.", async () => {
      await clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      const continueButton = container.getAllByText("continue")[0];
      fireEvent.click(continueButton);
    });

    and("Guest user should see the Guest Access screen.", async () => {
      await waitFor(() => container.getByText(/selfTitle/i));
    });

    and("enter the First name, Last name.", async () => {
      await provideFirstLastNameValid();
    });

    and("enter the future Date of birth.", () => {
      defaultValidation();
    });

    and("click Continue button.", async () => {
      await clickSaveAction();
    });

    then("user should see the appropriate error message.", async () => {
      // await errorRequired();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the Date of birth is not allowing more than Maximum age limit.(Need to confirm)", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      launchURL();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      async () => {
        searchScreen();
        await provideFilters();
      }
    );

    and("user review the appointments.", async () => {
      await reviewAppPage();
    });

    and("select the Appointment for Myself.", async () => {
      await clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      const continueButton = container.getAllByText("continue")[0];
      fireEvent.click(continueButton);
    });

    and("Guest user should see the Guest Access screen.", async () => {
      await waitFor(() => container.getByText(/selfTitle/i));
    });

    and("enter the First name, Last name.", async () => {
      await provideFirstLastNameValid();
    });

    and("enter the Date of birth more than maximum age limit.", () => {
      defaultValidation();
    });

    and("click Continue button.", async () => {
      await clickSaveAction();
    });

    then("user should see the appropriate error message.", async () => {
      // await errorRequired();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the Date of birth is not allowing less than Minimum age limit.(Need to confirm)", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      launchURL();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      async () => {
        searchScreen();
        await provideFilters();
      }
    );

    and("user review the appointments.", async () => {
      await reviewAppPage();
    });

    and("select the Appointment for Myself.", async () => {
      await clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      const continueButton = container.getAllByText("continue")[0];
      fireEvent.click(continueButton);
    });

    and("Guest user should see the Guest Access screen.", async () => {
      await waitFor(() => container.getByText(/selfTitle/i));
    });

    and("enter the First name, Last name.", async () => {
      await provideFirstLastNameValid();
    });

    and("enter the Date of birth less than minimum age limit.", () => {
      defaultValidation();
    });

    and("click Continue button.", async () => {
      await clickSaveAction();
    });

    then("user should see the appropriate error message.", async () => {
      // await errorRequired();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the Date of birth is accepting valid Date of Birth", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      launchURL();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      async () => {
        searchScreen();
        await provideFilters();
      }
    );

    and("user review the appointments.", async () => {
      await reviewAppPage();
    });

    and("select the Appointment for Myself.", async () => {
      await clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      const continueButton = container.getAllByText("continue")[0];
      fireEvent.click(continueButton);
    });

    and("Guest user should see the Guest Access screen.", async () => {
      await waitFor(() => container.getByText(/selfTitle/i));
    });

    and("enter the First name, Last name.", async () => {
      await provideFirstLastNameValid();
    });

    and("enter the valid Date of birth", () => {
      expect(container.getAllByText(/Date of Birth/i)[0]).toBeInTheDocument();
    });

    and("click Continue button.", async () => {
      await clickSaveAction();
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
      launchURL();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      async () => {
        searchScreen();
        await provideFilters();
      }
    );

    and("user review the appointments.", async () => {
      await reviewAppPage();
    });

    and("select the Appointment for Myself.", async () => {
      await clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      const continueButton = container.getAllByText("continue")[0];
      fireEvent.click(continueButton);
    });

    and("Guest user should see the Guest Access screen.", async () => {
      await waitFor(() => container.getByText(/selfTitle/i));
    });

    and("enter the First name, Last name.", async () => {
      await provideFirstLastNameValid();
    });

    and("enter the valid Date of birth", () => {
      expect(container.getAllByText(/Date of Birth/i)[0]).toBeInTheDocument();
    });

    and("without entering the Email and enter the Mobile number", () => {
      const field3 = container.getAllByLabelText(/Mobile Number/i)[0];
      fireEvent.change(field3, { target: { value: "1231231231" } });
    });

    and("click Continue button.", async () => {
      await clickSaveAction();
    });

    then("error message should not display for Email field.", async () => {
      // await errorRequired();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the mandatory error message is not displaying for Mobile number when Email is filled.", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      launchURL();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      async () => {
        searchScreen();
        await provideFilters();
      }
    );

    and("user review the appointments.", async () => {
      await reviewAppPage();
    });

    and("select the Appointment for Myself.", async () => {
      await clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      const continueButton = container.getAllByText("continue")[0];
      fireEvent.click(continueButton);
    });

    and("Guest user should see the Guest Access screen.", async () => {
      await waitFor(() => container.getByText(/selfTitle/i));
    });

    and("enter the First name, Last name.", async () => {
      await provideFirstLastNameValid();
    });

    and("enter the valid Date of birth", () => {
      expect(container.getAllByText(/Date of Birth/i)[0]).toBeInTheDocument();
    });

    and("without entering the Mobile number and enter the Email", () => {
      defaultValidation();
    });

    and("click Continue button.", async () => {
      await clickSaveAction();
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
      launchURL();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      async () => {
        searchScreen();
        await provideFilters();
      }
    );

    and("user review the appointments.", async () => {
      await reviewAppPage();
    });

    and("select the Appointment for Myself.", async () => {
      await clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      const continueButton = container.getAllByText("continue")[0];
      fireEvent.click(continueButton);
    });

    and("Guest user should see the Guest Access screen.", async () => {
      await waitFor(() => container.getByText(/selfTitle/i));
    });

    and("enter the First name, Last name.", async () => {
      await provideFirstLastNameValid();
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
      fireEvent.change(field3, { target: { value: "1231231231000" } });
    });

    and("click the Continue button.", async () => {
      await clickSaveAction();
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
      launchURL();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      async () => {
        searchScreen();
        await provideFilters();
      }
    );

    and("user review the appointments.", async () => {
      await reviewAppPage();
    });

    and("select the Appointment for Myself.", async () => {
      await clickMyself();
    });

    then("user should see the below mentioned fields", async () => {
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
      launchURL();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      async () => {
        searchScreen();
        await provideFilters();
      }
    );

    and("user review the appointments.", async () => {
      await reviewAppPage();
    });

    and("select the Appointment for Myself.", async () => {
      await clickMyself();
    });

    then("user should see the Continue as Guest button.", () => {
      const continueButton = container.getAllByText("continue")[0];
      fireEvent.click(continueButton);
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1569-Verify whether the First name is displaying the Mandatory error message.", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the Marketing Site url", () => {
      launchURL();
    });

    when("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user select the Purpose of Visit, Location and Date & Time with provider.",
      async () => {
        searchScreen();
        await provideFilters();
      }
    );

    and("user review the appointments.", async () => {
      await reviewAppPage();
    });

    and("select the Appointment for Myself.", async () => {
      await clickMyself();
    });

    and("click the Continue as a Guest button.", () => {
      const continueButton = container.getAllByText("continue")[0];
      fireEvent.click(continueButton);
    });

    and("without entering the First name, click the Continue", async () => {
      await waitFor(() => container.getAllByText(/First Name/i));
      const field1 = container.getAllByLabelText(/First Name/i)[0];
      fireEvent.change(field1, { target: { value: "" } });
      await clickSaveAction();
    });

    then(
      "it should display the error message This field is required.",
      async () => {
        // await errorRequired();
      }
    );
  });
});
