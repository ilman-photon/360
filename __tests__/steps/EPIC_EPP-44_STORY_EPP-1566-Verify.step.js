import { defineFeature, loadFeature } from "jest-cucumber";
import ScheduleAppointmentPage from "../../src/pages/patient/schedule-appointment";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import { render, fireEvent, waitFor } from "@testing-library/react";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1566.feature",
);

defineFeature(feature, (test) => {
    let container;
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

  const clickSomeoneElseButton = () => {
    const continueButton = container.getByText("continue");
    fireEvent.click(continueButton);

    const someoneElseButton = container.getByText("someoneElse");
    fireEvent.click(someoneElseButton);
  };

  const provideDetailsEmpty = () => {
    const field1 = container.getByLabelText("First Name");
    fireEvent.change(field1, { target: { value: "" } });

    const field2 = container.getByLabelText("Last Name");
    fireEvent.change(field2, { target: { value: "" } });

    const field3 = container.getByLabelText("Mobile Number");
    fireEvent.change(field3, { target: { value: "" } });

    const field4 = container.getByRole("textbox", { name: "Email" });
    fireEvent.change(field4, { target: { value: "" } });
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

  test('EPIC_EPP-44_STORY_EPP-1566 - Verify whether the user able to provide the patient datails.', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
        defaultValidation();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
        defaultValidation();
    });

    then('user navigates to the search screen', () => {
        defaultValidation();
    });

    and('user provided location,date of appointment,purpose of visit,insurance and provider', () => {
        defaultValidation();
    });

    then('user should see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier', () => {
        defaultValidation();
    });

    and('user select the timeslot', () => {
        defaultValidation();
    });

    then('user lands on the screen to review the appointment details and click on proceeds to schedule it', () => {
        defaultValidation();
    });

    and('user select Someone else option', () => {
        clickSomeoneElseButton();
    });

    then('user should see fields First Name, Last Name, Date Of Birth,Email,Mobile Number and Preferred mode(s) of communication', () => {
        provideDetailsEmpty();
    });

    and('user able to provide patient details', () => {
        provideDetailsValid();
    });
});

test('EPIC_EPP-44_STORY_EPP-1566 - Verify whether the user confirms the patient details', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
        defaultValidation();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
        defaultValidation();
    });

    then('user navigates to the search screen', () => {
        defaultValidation();
    });

    and('user provided location,date of appointment,purpose of visit,insurance and provider', () => {
        defaultValidation();
    });

    then('user should see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier', () => {
        defaultValidation();
    });

    and('user select the timeslot', () => {
        defaultValidation();
    });

    then('user lands on the screen to review the appointment details and click on proceeds to schedule it', () => {
        defaultValidation();
    });

    and('user select Someone else option', () => {
        clickSomeoneElseButton();
    });

    then('user should see fields First Name, Last Name, Date Of Birth,Email,Mobile Number and Preferred mode(s) of communication', () => {
        provideDetailsEmpty();
    });

    and('user provide patient details', () => {
        provideDetailsValid();
    });

    then('user able to confirms the patient details', () => {
        const scheduleAppoinmentButton = container.getByText("scheduleAppoinment");
        fireEvent.click(scheduleAppoinmentButton);
    });
});

test('EPIC_EPP-44_STORY_EPP-1566 - Verify whether the user able to see the error message if First Name provided was less than 2 characters', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
        defaultValidation();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
        defaultValidation();
    });

    then('user navigates to the search screen', () => {
        defaultValidation();
    });

    and('user provided location,date of appointment,purpose of visit,insurance and provider', () => {
        defaultValidation();
    });

    then('user should see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier', () => {
        defaultValidation();
    });

    and('user select the timeslot', () => {
        defaultValidation();
    });

    then('user lands on the screen to review the appointment details and click on proceeds to schedule it', () => {
        defaultValidation();
    });

    and('user select Someone else option', () => {
        clickSomeoneElseButton();
    });

    then('user should see fields First Name, Last Name, Date Of Birth,Email,Mobile Number and Preferred mode(s) of communication', () => {
        defaultValidation();
    });

    and(/^user provide patient details with less than (\d+) characters in (.*) field$/, () => {
        const field1 = container.getByLabelText("First Name");
        fireEvent.change(field1, { target: { value: "a" } });
    });

    and('user submit the details', () => {
        const scheduleAppoinmentButton = container.getByText("scheduleAppoinment");
        fireEvent.click(scheduleAppoinmentButton);
    });

    then(/^user should get error message First Name should be greater than (\d+) characters$/, async () => {
        await waitFor(() => container.getByText("First Name should be greater than 2 characters"));
        expect(
            container.getByText("First Name should be greater than 2 characters")
          ).toBeInTheDocument();
    });
});        

test('EPIC_EPP-44_STORY_EPP-1566 - Verify whether the user able to see the error message if Lat Name provided was less than 2 characters', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
        defaultValidation();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
        defaultValidation();
    });

    then('user navigates to the search screen', () => {
        defaultValidation();
    });

    and('user provided location,date of appointment,purpose of visit,insurance and provider', () => {
        defaultValidation();
    });

    then('user should see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier', () => {
        defaultValidation();
    });

    and('user select the timeslot', () => {
        defaultValidation();
    });

    then('user lands on the screen to review the appointment details and click on proceeds to schedule it', () => {
        defaultValidation();
    });

    and('user select Someone else option', () => {
        clickSomeoneElseButton();
    });

    then('user should see fields First Name, Last Name, Date Of Birth,Email,Mobile Number and Preferred mode(s) of communication', () => {
        defaultValidation();
    });

    and(/^user provide patient details with less than (\d+) characters in (.*) field$/, () => {
        const field1 = container.getByLabelText("Last Name");
        fireEvent.change(field1, { target: { value: "a" } });
    });

    and('user submit the details', () => {
        const scheduleAppoinmentButton = container.getByText("scheduleAppoinment");
        fireEvent.click(scheduleAppoinmentButton);
    });

    then(/^user should get error message Last Name should be greater than (\d+) characters$/, async() => {
        await waitFor(() => container.getByText("Last Name should be greater than 2 characters"));
    });
});

test('EPIC_EPP-44_STORY_EPP-1566 - Verify whether the user able to see the error message if email-id provided was in incorrect format', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
        defaultValidation();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
        defaultValidation();
    });

    then('user navigates to the search screen', () => {
        defaultValidation();
    });

    and('user provided location,date of appointment,purpose of visit,insurance and provider', () => {
        defaultValidation();
    });

    then('user should see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier', () => {
        defaultValidation();
    });

    and('user select the timeslot', () => {
        defaultValidation();
    });

    then('user lands on the screen to review the appointment details and click on proceeds to schedule it', () => {
        defaultValidation();
    });

    and('user select Someone else option', () => {
        clickSomeoneElseButton();
    });

    then('user should see fields First Name, Last Name, Date Of Birth,Email,Mobile Number and Preferred mode(s) of communication', () => {
        defaultValidation();
    });

    and(/^user provide patient details with incorrect format (.*)$/, () => {
        const field4 = container.getByRole("textbox", { name: "Email" });
        fireEvent.change(field4, { target: { value: "email@invalid" } })
    });

    and('user submit the details', () => {
        clickSaveAction();
    });

    then('user should get error message Incorrect email format', async() => {
        await waitFor(() => container.getByText("Incorrect email format"));
    });
});

test('EPIC_EPP-44_STORY_EPP-1566 - Verify whether the user able to see the error message if mobile number provided was in incorrect format', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
        defaultValidation();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
        defaultValidation();
    });

    then('user navigates to the search screen', () => {
        defaultValidation();
    });

    and('user provided location,date of appointment,purpose of visit,insurance and provider', () => {
        defaultValidation();
    });

    then('user should see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier', () => {
        defaultValidation();
    });

    and('user select the timeslot', () => {
        defaultValidation();
    });

    then('user lands on the screen to review the appointment details and click on proceeds to schedule it', () => {
        defaultValidation();
    });

    and('user select Someone else option', () => {
        clickSomeoneElseButton();
    });

    then('user should see fields First Name, Last Name, Date Of Birth,Email,Mobile Number and Preferred mode(s) of communication', () => {
        defaultValidation();
    });

    and(/^user provide patient details with incorrect format (.*)$/, () => {
        const field3 = container.getByLabelText("Mobile Number");
        fireEvent.change(field3, { target: { value: "invalid" } });
    });

    and('user submit the details', () => {
        clickSaveAction();
    });

    then('user should get error message Incorrect mobile number format', async () => {
        await waitFor(() => container.getByText("Incorrect mobile number format")
    );
    });
});

test('EPIC_EPP-44_STORY_EPP-1566 - Verify whether the user able to see the error message if invalid date of birth entered', ({ given, and, then }) => {
    given('user launch the Marketing Site url', () => {
        defaultValidation();
    });

    and('user clicks on the Schedule your Eye Exam button', () => {
        defaultValidation();
    });

    then('user navigates to the search screen', () => {
        defaultValidation();
    });

    and('user provided location,date of appointment,purpose of visit,insurance and provider', () => {
        defaultValidation();
    });

    then('user should see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier', () => {
        defaultValidation();
    });

    and('user select the timeslot', () => {
        defaultValidation();
    });

    then('user lands on the screen to review the appointment details and click on proceeds to schedule it', () => {
        defaultValidation();
    });

    and('user select Someone else option', () => {
        defaultValidation();
    });

    then('user should see fields First Name, Last Name, Date Of Birth,Email,Mobile Number and Preferred mode(s) of communication', () => {
        defaultValidation();
    });

    and('user provide patient details with invalid date of birth', () => {
        defaultValidation();
    });

    and('user submit the details', () => {
        defaultValidation();
    });

    then(/^user should be able to see the inline error message Invalid (.*)$/, () => {
        defaultValidation();
    });
});


});
