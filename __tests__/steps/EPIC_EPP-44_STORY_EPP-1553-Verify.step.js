import { act, fireEvent, render, waitFor, cleanup } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import "@testing-library/jest-dom";
import Cookies from "universal-cookie";
import { Login } from "../../src/components/organisms/Login/login";
import { renderWithProviders } from "../src/utils/test-util";
import { TEST_ID } from "../../src/utils/constants";
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
            defaultValidation();
        });

        then('user should see time slot for provider', async () => {
            defaultValidation();
        });

        and('user selected  provider with the time slot available', () => {
            defaultValidation();
        });

        then('user land to Review Appointnment detail page', () => {
            defaultValidation();
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
            // clickPin();
        });

        then('user should see time slot for provider', async () => {
            defaultValidation();
        });

        and('user selected provider with the time slot available', () => {
            defaultValidation();
        });

        then('user lands onto Review Appointnment detail page', () => {
            defaultValidation();
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
            defaultValidation();
        });

        then('user should see time slot for provider', async () => {
            defaultValidation();
        });

        and('user selected provider with the time slot available', () => {
            defaultValidation();
        });

        then('user lands onto Review Appointnment detail page', () => {
            defaultValidation();
        });

        and('user should see option to change the selected location to another location', () => {
            defaultValidation();
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
            defaultValidation();
        });

        then('user should see time slot for provider', async () => {
            defaultValidation();
        });

        and('user selected provider with the time slot available', () => {
            defaultValidation();
        });

        then('user lands onto Review Appointnment detail page', () => {
            defaultValidation();
        });

        and(/^user should see option to change the selected "(.*)" to another date and time$/, () => {
            defaultValidation();
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
            defaultValidation();
        });

        then('user should see time slot for provider', async () => {
            defaultValidation();
        });

        and('user selected provider with the time slot available', () => {
            defaultValidation();
        });

        then('user lands onto Review Appointnment detail page', () => {
            defaultValidation();
        });

        and(/^user should see option to change the selected "(.*)" one to other$/, () => {
            defaultValidation();
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
            defaultValidation();
        });

        then('user should see time slot for provider', async () => {
            defaultValidation();
        });

        and('user selected provider with the time slot available', () => {
            defaultValidation();
        });

        then('user lands onto Review Appointnment detail page', () => {
            defaultValidation();
        });

        when('user should see option Date and Time,Insurance , purpose of visit', () => {
            defaultValidation();
        });

        and('user should click on continue button', () => {
            defaultValidation();
        });

        then('user should see option to schedule the appointment', () => {
            defaultValidation();
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
            expect(true).toBeTruthy();
        });

        then('user should see time slot for provider', async () => {
            defaultValidation();
        });

        and('user selected provider with the time slot available', () => {
            defaultValidation();
        });

        then('user lands onto Review Appointnment detail page', () => {
            expect(true).toBeTruthy();
        });

        and(/^user should see option to change the selected "(.*)" one to other$/, (arg0) => {
            expect(true).toBeTruthy();
        });
    });
});

