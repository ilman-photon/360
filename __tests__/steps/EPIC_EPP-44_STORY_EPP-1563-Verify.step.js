import { defineFeature, loadFeature } from "jest-cucumber";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import ScheduleAppointmentPage from "../../src/pages/patient/schedule-appointment";
import mediaQuery from "css-mediaquery";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1563.feature"
);

defineFeature(feature, (test) => {
  let container;
  jest.useFakeTimers("modern");
  jest.setSystemTime(new Date(2022, 8, 1));

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

  window.matchMedia = createMatchMedia("1920px");
  container = render(
    <Provider store={store}>
      {ScheduleAppointmentPage.getLayout(<ScheduleAppointmentPage />)}
    </Provider>
  );

  test("EPIC_EPP-44_STORY_EPP-1563 - Verify user able to provide the basic details when scheduling appointment for someone else.", ({
    given,
    then,
    and,
  }) => {
    given("user launch the Marketing Site url", () => {
      defaultValidation();
    });

    and("user clicks on the Schedule your Eye Exam button", () => {
      defaultValidation();
    });

    and(
      "user provided location,date of appointment,purpose of visit,insurance and provider",
      () => {
        defaultValidation();
      }
    );

    then(
      "user should see Schedule Appointment screen with the selected location, date, purpose of visit and insurance carrier",
      async () => {
        expect(container.getAllByText(/location/i)).toBeTruthy();
        expect(container.getAllByText(/appointmentDetails/i)).toBeTruthy();
        expect(container.getAllByText("Date and time")).toBeTruthy();
        expect(container.getAllByText("Insurance")).toBeTruthy();
        expect(container.getAllByText("No Insurance provided")).toBeTruthy();
        expect(container.getAllByText("Purpose of visit")).toBeTruthy();
      }
    );

    and("user selects a time slot", () => {
      defaultValidation();
    });

    then("user should see Review appointment details screen", () => {
      // expect(container.getByText("Review Appointment Details")).toBeTruthy();
    });

    and("user selects Someone Else", () => {
      const continueButton = container.getByText("continue");
      fireEvent.click(continueButton);

      const someoneElseButton = container.getByText("someoneElse");
      fireEvent.click(someoneElseButton);
    });

    then(
      "user should see fields First Name, Last Name, Date Of Birth,Email,Mobile Number, Preferred mode(s) of communication",
      () => {
        // const field1 = container.getAllByLabelText(/First Name/i)[0];
        // fireEvent.change(field1, { target: { value: "" } });
        // const field2 = container.getAllByLabelText(/Last Name/i)[0];
        // fireEvent.change(field2, { target: { value: "" } });
        // const field3 = container.getAllByLabelText(/Mobile Number/i)[0];
        // fireEvent.change(field3, { target: { value: "" } });
        // const field4 = container.getByLabelText("Email");
        // fireEvent.change(field4, { target: { value: "" } });
      }
    );

    and("user should see submit", () => {
      const submitButton = container.getByRole("button", {
        name: "scheduleAppoinment",
      });
      expect(submitButton).toBeTruthy();
    });
  });
});
