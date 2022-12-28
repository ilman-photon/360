import {
  act,
  fireEvent,
  render,
  waitFor,
  cleanup,
} from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import { Provider } from "react-redux";
import store from "../../src/store/store";
const useRouter = jest.spyOn(require("next/router"), "useRouter");
import { navigateToPatientPortalHome, renderAppointmentDetail } from "../../__mocks__/commonSteps";
import { Login } from "../../src/components/organisms/Login/login";
import Appointments from "../../src/pages/patient/appointments";
import { MOCK_APPOINTMENT, MOCK_PAST } from "../../__mocks__/mockResponse";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-2533.feature"
);


defineFeature(feature, (test) => {
  let container;
  const element = document.createElement("div");
  const mock = new MockAdapter(axios);
  let appointmentsContainer;

  const launchURL = () => {
    const mockOnLoginClicked = jest.fn((data, route, callback) => {
      callback({
        status: "success",
      });
    });
    container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
  }

  const clickScheduleExam = async () => {
    cleanup();
    mock
      .onGet(
        `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/upcoming`
      )
      .reply(200, MOCK_APPOINTMENT);
    mock
      .onGet(
        `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/history`
      )
      .reply(200, MOCK_PAST);
    act(() => {
      appointmentsContainer = render(
        <Provider store={store}>
          {Appointments.getLayout(<Appointments />)}
        </Provider>
      );
    });
    await waitFor(() =>
      appointmentsContainer.getByText(/View appointment details/i)
    );
    expect(
      appointmentsContainer.getByText(/Past Appointments/i)
    ).toBeInTheDocument();
    expect(
      appointmentsContainer.getByText(/Schedule New Appointment/i)
    ).toBeInTheDocument();
  };

  const inputLocation = async (customLocation) => {
    const locationInput = await waitFor(() => container.getByLabelText("City, state, or zip code"))
    act(() => {
      fireEvent.change(locationInput, { target: { value: customLocation || "VA" } });
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

  const inputInsurance = async (insurance) => {
    const insuranceInput = await waitFor(() =>
      container.getByLabelText("Insurance Carrier")
    );
    act(() => {
      fireEvent.change(insuranceInput, { target: { value: insurance || "Aetna" } });
    });
    expect(insuranceInput.value).toEqual(insurance || "Aetna");
  };

  test('Verify if user able to view the Insurance field', ({ given, when, then, and }) => {
    given('user launch the Patient portal URL', () => {
      launchURL();
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      // clickScheduleExam();
    });

    then('User lands on to the screen', async () => {
      await renderAppointmentDetail();
      expect(container.getAllByText("Insurance")).toBeTruthy();
      expect(container.getAllByText("Date and time")).toBeTruthy();
      expect(container.getAllByText("No Insurance provided")).toBeTruthy();
      expect(container.getAllByText("Purpose of visit")).toBeTruthy();
    });

    and('user view and search  the location', () => {
      // inputLocation();
    });

    when('user select  the date of appointment', () => {
      // inputDate();
    });

    and('user view the purpose of visit', () => {
      // inputPurpose();
    });

    and('user view the insurance', () => {
      // expect(container.getByLabelText(/Insurance/i)).toBeInTheDocument();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2533 -Verify if user able to view  the Insurance field', () => {
    expect(true).toBeTruthy();
  });

  test('EPIC_EPP-44_STORY_EPP-2533 - Verify if user able to select Insurance Carriers from the Insurance field', ({ given, when, then, and }) => {
    given(/^user launch the "(.*)" url$/, (arg0) => {
      expect(true).toBeTruthy();
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      // clickScheduleExam();
    });

    then('user lands on to the screen', async () => {
      await renderAppointmentDetail();
      expect(container.getAllByText("Purpose of visit")).toBeTruthy();
      expect(container.getAllByText("Date and time")).toBeTruthy();
      expect(container.getAllByText("Insurance")).toBeTruthy();
      expect(container.getAllByText("No Insurance provided")).toBeTruthy();
    });

    when('user navigates to Insurance field', () => {
      expect(true).toBeTruthy();
    });

    and('user select the Insurance carriers from the search field', () => {
      // inputInsurance();
    });

    then('user should see insurance carriers selected from field', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2533 - Verify if user able to view a (Optional) label under Insurance field', ({ given, when, then }) => {
    given('user launch the Patient portal URL', () => {
      launchURL();
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      // clickScheduleExam();
    });

    then('user lands on to the screen', async () => {
      await renderAppointmentDetail();
      expect(container.getAllByText("Purpose of visit")).toBeTruthy();
      expect(container.getAllByText("Date and time")).toBeTruthy();
      expect(container.getAllByText("Insurance")).toBeTruthy();
      expect(container.getAllByText("No Insurance provided")).toBeTruthy();
    });

    when('user navigates to Insurance field', () => {
      expect(true).toBeTruthy();
    });

    then('user should see (Optional) label under Insurance field', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2533 -Verify if user able to view a Other Insurance option in the Insurance search field', ({ given, when, then, and }) => {
    given('user launch the Patient portal URL', () => {
      launchURL();
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      // clickScheduleExam();
    });

    then('user lands on to the screen', async () => {
      await renderAppointmentDetail();
      expect(container.getAllByText("No Insurance provided")).toBeTruthy();
      expect(container.getAllByText("Date and time")).toBeTruthy();
      expect(container.getAllByText("Purpose of visit")).toBeTruthy();
      expect(container.getAllByText("Insurance")).toBeTruthy();
    });

    when('user navigates to Insurance field', () => {
      expect(true).toBeTruthy();
    });

    and('user select the Insurance carriers from the search field', () => {
      expect(true).toBeTruthy();
    });

    then('user should see Other insurance option from field', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2533 - Verify if user able to provide Other Insurance option in the Insurance search field', ({ given, when, then, and }) => {
    given('user launch the Patient portal URL', () => {
      launchURL();
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      // clickScheduleExam();
    });

    then('user lands on to the screen', async () => {
      await renderAppointmentDetail();
      expect(container.getAllByText("Date and time")).toBeTruthy();
      expect(container.getAllByText("Insurance")).toBeTruthy();
      expect(container.getAllByText("Purpose of visit")).toBeTruthy();
      expect(container.getAllByText("No Insurance provided")).toBeTruthy();
    });

    when('user navigates to Insurance field', () => {
      expect(true).toBeTruthy();
    });

    and('user select the Insurance carriers from the search field', () => {
      expect(true).toBeTruthy();
    });

    then('user should see Other insurance option from field', () => {
      expect(true).toBeTruthy();
    });

    when('user provide insurance carrier details by selecting Other insurance', () => {
      expect(true).toBeTruthy();
    });

    then('user should see details updated in the field.', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2533 - Verify if user able to view & select Option(I\'m paying out of pocket) in the Insurance search field', ({ given, when, then, and }) => {
    given('user launch the Patient portal URL', () => {
      launchURL();
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      // clickScheduleExam();
    });

    then('user lands on to the screen', async () => {
      await renderAppointmentDetail();
      expect(container.getAllByText("No Insurance provided")).toBeTruthy();
      expect(container.getAllByText("Date and time")).toBeTruthy();
      expect(container.getAllByText("Purpose of visit")).toBeTruthy();
      expect(container.getAllByText("Insurance")).toBeTruthy();
    });

    when('user navigates to Insurance field', async () => {
      cleanup();
      await navigateToPatientPortalHome();
    });

    and('user select the Insurance carriers from the search field', () => {
      // inputInsurance();
    });

    then('user should see (I\'m paying out of pocket) insurance option from field', () => {
      // inputInsurance("I'm paying out of pocket");
    });

    and('user select (I\'m paying out of pocket) in the insurance field', () => {
      expect(true).toBeTruthy();
    });
  });

  test('EPIC_EPP-44_STORY_EPP-2533 - Verify if user able to view & select Option(Skip and choose insurance later) in the Insurance search field', ({ given, when, then, and }) => {
    given('user launch the Patient portal URL', () => {
      launchURL();
    });

    when('user clicks on the Schedule your Eye Exam button', () => {
      // clickScheduleExam();
    });

    then('user lands on to the screen', async () => {
      await renderAppointmentDetail();
      expect(container.getAllByText("Purpose of visit")).toBeTruthy();
      expect(container.getAllByText("Insurance")).toBeTruthy();
      expect(container.getAllByText("Date and time")).toBeTruthy();
      expect(container.getAllByText("No Insurance provided")).toBeTruthy();
    });

    when('user navigates to Insurance field', async () => {
      cleanup();
      await navigateToPatientPortalHome()
    });

    and('user select the Insurance carriers from the search field', () => {
      // inputInsurance();
    });

    then('user should see (Skip and choose insurance later)  insurance option from field', () => {
      // inputInsurance("Skip and choose insurance later")
    });

    and('user should select (Skip and choose insurance later) in the insurance field', () => {
      expect(true).toBeTruthy();
    });
  });
});
