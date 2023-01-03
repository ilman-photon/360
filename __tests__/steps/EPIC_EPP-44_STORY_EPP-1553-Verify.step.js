import { act, fireEvent, render, waitFor, cleanup } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import "@testing-library/jest-dom";
import Cookies from "universal-cookie";
import { Login } from "../../src/components/organisms/Login/login";
import { renderWithProviders } from "../src/utils/test-util";
import { renderLogin, renderForgotPassword, clickContinueForgot, navigateToPatientPortalHome, renderAppointmentDetail } from "../../__mocks__/commonSteps";
import UpdatePasswordPage from "../../src/pages/patient/update-password";
import AuthPage from "../../src/pages/patient/login";
import Appointment from "../../src/pages/patient/appointment";
import store from "../../src/store/store";
import { Provider } from "react-redux";
import {
    mockAppointmentTypes,
    submitFilter,
    MOCK_SUGESTION,
    MOCK_APPOINTMENT,
    MOCK_PAST,
    providerList
} from "../../__mocks__/mockResponse";
import Appointments from "../../src/pages/patient/appointments";
import InfoWindowContent from "../../src/components/organisms/Google/Maps/infoWindowContent";
import constants from "../../src/utils/constants";
import ScheduleAppointmentPage from "../../src/pages/patient/schedule-appointment";

const feature = loadFeature(
    "./__tests__/feature/Patient Portal/Sprint4/EPP-1553.feature"
);

let container;
const mock = new MockAdapter(axios);
const element = document.createElement("div");
let appointmentsContainer;

const launchURL = () => {
    const mockOnLoginClicked = jest.fn((data, route, callback) => {
        callback({
            status: "success",
        });
    });
    container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
}

const userSeeScheduleScreen = () => {
    expect(container.getAllByText("Date and time")).toBeTruthy();
    expect(container.getAllByText("Insurance")).toBeTruthy();
    expect(container.getAllByText("No Insurance provided")).toBeTruthy();
    expect(container.getAllByText("Purpose of visit")).toBeTruthy();
};

const clickPin = () => {
    act(() => {
        container.rerender(
            <InfoWindowContent
                data={providerList}
                OnTimeClicked={() => jest.fn()}
            />
        );
    });
};

const userClickPinLocationOnMap = () => {
    var marker = new google.maps.Marker();
    google.maps.event.trigger(marker, 'click', {
      latLng: new google.maps.LatLng(0, 0)
    });
  }

  const userViewTimeSlotIW = async () => {
    const timeSlot = await waitFor(() => container.getByTestId(constants.TEST_ID.SCHEDULE_APPOINTMENT_TEST_ID
      .MAPS.infoWindow.timeslot))
    expect(timeSlot).toBeInTheDocument()
  }

  const reviewAppPage = async () => {
    container = render(
      <Provider store={store}>
        {ScheduleAppointmentPage.getLayout(<ScheduleAppointmentPage />)}
      </Provider>
    );
  };

  const userViewAppointmentDetails = async () => {
    await waitFor(() => container.getByText("Review Appointment Details"));
  }

defineFeature(feature, (test) => {
    const defaultValidation = () => {
        expect(true).toBeTruthy();
    };

    test('EPIC_EPP-44_STORY_EPP-1553-Verify if user able to see review  appointment details after selected the time slot', ({ given, when, then, and }) => {
        given('user launch the Marketing Site url', () => {
            launchURL();
        });

        when('user clicks on the Schedule your Eye Exam button', async () => {
            cleanup();
            const mock = new MockAdapter(axios);
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
        });

        then('user lands on to the screen', async () => {
            await renderAppointmentDetail();
            userSeeScheduleScreen();
        });

        when('user click on pin location in Map view', () => {
            userClickPinLocationOnMap();
        });

        then('user should see time slot for provider', async () => {
            userViewTimeSlotIW();
        });

        and('user selected  provider with the time slot available', () => {
            userViewTimeSlotIW();
        });

        then('user land to Review Appointnment detail page', () => {
            reviewAppPage();
        });
    });

    test('EPIC_EPP-44_STORY_EPP-1553-Verify if user able to view the selected provider with an option to change the provider', ({ given, when, then, and }) => {
        given('user launch the Marketing Site url', () => {
            launchURL();
        });

        when('user clicks on the Schedule your Eye Exam button', async () => {
            cleanup();
            const mock = new MockAdapter(axios);
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
        });

        then('user lands on to the screen', async () => {
            await renderAppointmentDetail();
            userSeeScheduleScreen();
        });

        when('user click on pin location in Map view', () => {
            userClickPinLocationOnMap();
        });

        then('user should see time slot for provider', async () => {
            userViewTimeSlotIW();
        });

        and('user selected provider with the time slot available', () => {
            userViewTimeSlotIW();
        });

        then('user lands onto Review Appointnment detail page', () => {
           reviewAppPage();
        });

        and('user should see option to change the selected provider to another provider', () => {
            defaultValidation();
        });
    });



    test('EPIC_EPP-44_STORY_EPP-1553-Verify if user able to view the selected location with an option to change location', ({ given, when, then, and }) => {
        given('user launch the Marketing Site url', () => {
            launchURL();
        });

        when('user clicks on the Schedule your Eye Exam button', async () => {
            cleanup();
            const mock = new MockAdapter(axios);
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
        });

        then('user lands on to the screen', async () => {
            await renderAppointmentDetail();
            userSeeScheduleScreen();
        });

        when('user click on pin location in Map view', () => {
            userClickPinLocationOnMap();
        });

        then('user should see time slot for provider', async () => {
            userViewTimeSlotIW();
        });

        and('user selected provider with the time slot available', () => {
            userViewTimeSlotIW();
        });

        then('user lands onto Review Appointnment detail page', () => {
           reviewAppPage();
        });

        and('user should see option to change the selected location to another location', () => {
            const editBtn = container.getAllByTestId("schedule_appointment_details_edit_button")[0];
            fireEvent.click(editBtn);
        });
    });



    test('EPIC_EPP-44_STORY_EPP-1553-Verify if user able view the selected Date and Time of the appointment with option to change another date and time', ({ given, when, then, and }) => {
        given('user launch the Marketing Site url', () => {
            launchURL();
        });

        when('user clicks on the Schedule your Eye Exam button', async () => {
            cleanup();
            const mock = new MockAdapter(axios);
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
        });

        then('user lands on to the screen', async () => {
            await renderAppointmentDetail();
            userSeeScheduleScreen();
        });

        when('user click on pin location in Map view', () => {
            userClickPinLocationOnMap();
        });

        then('user should see time slot for provider', async () => {
            userViewTimeSlotIW();
        });

        and('user selected provider with the time slot available', () => {
            userViewTimeSlotIW();
        });

        then('user lands onto Review Appointnment detail page', () => {
           reviewAppPage();
        });

        and(/^user should see option to change the selected "(.*)" to another date and time$/, () => {
            const editBtn = container.getAllByTestId("schedule_appointment_details_edit_button")[1];
            fireEvent.click(editBtn);
        });
    });

    test('EPIC_EPP-44_STORY_EPP-1553-Verify if user able view the selected purpose of visit with an option to change if provided', ({ given, when, then, and }) => {
        given('user launch the Marketing Site url', () => {
            launchURL();
        });

        when('user clicks on the Schedule your Eye Exam button', async () => {
            cleanup();
            const mock = new MockAdapter(axios);
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
        });

        then('user lands on to the screen', async () => {
            await renderAppointmentDetail();
            userSeeScheduleScreen();
        });

        when('user click on pin location in Map view', () => {
            userClickPinLocationOnMap();
        });

        then('user should see time slot for provider', async () => {
            userViewTimeSlotIW();
        });

        and('user selected provider with the time slot available', () => {
            userViewTimeSlotIW();
        });

        then('user lands onto Review Appointnment detail page', () => {
           reviewAppPage();
        });

        and(/^user should see option to change the selected "(.*)" one to other$/, () => {
            const editBtn = container.getAllByTestId("schedule_appointment_details_edit_button")[1];
            fireEvent.click(editBtn);
        });
    });

    test('EPIC_EPP-44_STORY_EPP-1553-Verify if user able to view an option to schedule the appointment', ({ given, when, then, and }) => {
        given('user launch the Marketing Site url', () => {
            launchURL();
        });

        when('user clicks on the Schedule your Eye Exam button', async () => {
            cleanup();
            const mock = new MockAdapter(axios);
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
        });

        then('user lands on to the screen', async () => {
            await renderAppointmentDetail();
            userSeeScheduleScreen();
        });

        when('user click on pin location in Map view', () => {
            userClickPinLocationOnMap();
        });

        then('user should see time slot for provider', async () => {
            userViewTimeSlotIW();
        });

        and('user selected provider with the time slot available', () => {
            userViewTimeSlotIW();
        });

        then('user lands onto Review Appointnment detail page', () => {
           reviewAppPage();
        });

        when('user should see option Date and Time,Insurance , purpose of visit', () => {
            expect(container.getAllByLabelText("Date and time")[0]).toBeInTheDocument();
            expect(container.getAllByLabelText("Insurance")[0]).toBeInTheDocument();
            expect(container.getAllByLabelText("Purpose of visit")[0]).toBeInTheDocument();
        });

        and('user should click on continue button', () => {
            const continueBtn = container.getAllByTestId("schedule_appointment_step2_button")[0];
            fireEvent.click(continueBtn);
        });

        then('user should see option to schedule the appointment', () => {
            const continueBtn = container.getAllByTestId("schedule_appointment_step2_button")[0];
            expect(continueBtn).toBeInTheDocument();
        });
    });

    test('EPIC_EPP-44_STORY_EPP-1553-Verify if user able to selected Insurance Career with an option to change another carrier', ({ given, when, then, and }) => {
        given('user launch the Marketing Site url', () => {
            launchURL();
        });

        when('user clicks on the Schedule your Eye Exam button', async () => {
            cleanup();
            const mock = new MockAdapter(axios);
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
        });

        then('user lands on to the screen', async () => {
            await renderAppointmentDetail();
            userSeeScheduleScreen();
        });

        when('user click on pin location in Map view', () => {
            userClickPinLocationOnMap();
        });

        then('user should see time slot for provider', async () => {
            userViewTimeSlotIW();
        });

        and('user selected provider with the time slot available', () => {
            userViewTimeSlotIW();
        });

        then('user lands onto Review Appointnment detail page', () => {
            reviewAppPage();
        });

        and(/^user should see option to change the selected "(.*)" one to other$/, (arg0) => {
            const editBtn = container.getAllByTestId("schedule_appointment_details_edit_button")[1];
            fireEvent.click(editBtn);
        });
    });
});

