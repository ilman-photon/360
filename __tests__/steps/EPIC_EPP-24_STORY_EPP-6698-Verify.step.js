import { act, fireEvent, render, cleanup, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { defineFeature, loadFeature } from "jest-cucumber";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import HomePage from "../../src/pages/patient";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import mediaQuery from "css-mediaquery";
import SearchDoctorPage from "../../src/pages/patient/search-doctor";

jest.setTimeout(20000);

const feature = loadFeature(
    "./__tests__/feature/Patient Portal/Sprint8/EPP-6698.feature"
);

const mockApi = () => {
    const mock = new MockAdapter(axios);
    const domain = window.location.origin;
    mock.onGet(`/ecp/appointments/appointment-types`).reply(200, {});
    mock
        .onGet(
            `${domain}/api/dummy/appointment/my-appointment/getAllAppointment/98f9404b-6ea8-4732-b14f-9c1a168d8066`
        )
        .reply(200, {});
    mock
        .onGet(
            `${domain}/api/dummy/appointment/my-appointment/getAllPrescriptions?patientId=98f9404b-6ea8-4732-b14f-9c1a168d8066`
        )
        .reply(200, {});
};

function createMatchMedia(width) {
    return (query) => ({
        matches: mediaQuery.match(query, { width }),
        addListener: () => { },
        removeListener: () => { },
    });
}

const geolocation = () => {
    const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        watchPosition: jest.fn(),
    };
    global.navigator.geolocation = mockGeolocation;
};

defineFeature(feature, (test) => {
    let container;

    beforeEach(() => {
        Object.defineProperty(document, "cookie", {
            writable: true,
            value: "authorized=true;accessToken=1234",
        });
    })

    afterEach(cleanup);

    const defaultValidation = () => {
        expect(true).toBeTruthy();
    };
    test('EPIC_EPP-7205_STORY_EPP-6698 - Verify User should be able to view Appointment sub Menu', ({ given, and, when, then }) => {
        given('user launch Patient Portal url', () => {
            defaultValidation()
        });

        and('user is logged into the portal', () => {
            defaultValidation()
        });

        and('user lands on the dashboard screen', async () => {
            window.matchMedia = createMatchMedia("1980px");
            mockApi();
            geolocation();
            act(() => {
                container = render(
                    <Provider store={store}>{HomePage.getLayout(<HomePage />)}</Provider>
                );
            });
            await waitFor(() => container.getByText(/Search for a doctor/i));
        });

        and('user should see Top Navigation Menu such as', (table) => {
            expect(container.getByLabelText("Dashboard menu")).toBeInTheDocument()
            expect(container.getByLabelText("Appointments menu")).toBeInTheDocument()
            expect(container.getByLabelText("Health Chart menu")).toBeInTheDocument()
            expect(container.getByLabelText("My Care Team menu")).toBeInTheDocument()
            expect(container.getByLabelText("Messaging menu")).toBeInTheDocument()
            expect(container.getByLabelText("Documents menu")).toBeInTheDocument()
        });

        when('User Click on Appointment menu', () => {
            fireEvent.click(container.getByLabelText("Appointments menu"))
        });

        then('Sub menu is displayed such as Find a Doctor, Upcoming & Past Appointment', () => {
            expect(container.getByLabelText("Find a Doctor menu")).toBeInTheDocument()
            expect(container.getByLabelText("Upcoming Appointment menu")).toBeInTheDocument()
        });
    });

    test('EPIC_EPP-7205_STORY_EPP-6698 - Verify User should be able to view search doctors screen', ({ given, and, when, then }) => {
        given('user launch Patient Portal url', () => {

        });

        and('user is logged into the portal', () => {

        });

        and('user lands on the dashboard screen', async () => {
            window.matchMedia = createMatchMedia("1980px");
            mockApi();
            geolocation();
            act(() => {
                container = render(
                    <Provider store={store}>{HomePage.getLayout(<HomePage />)}</Provider>
                );
            });
            await waitFor(() => container.getByText(/Search for a doctor/i));
        });

        and('user should see Top Navigation Menu such as', (table) => {
            expect(container.getByLabelText("Dashboard menu")).toBeInTheDocument()
            expect(container.getByLabelText("Appointments menu")).toBeInTheDocument()
            expect(container.getByLabelText("Health Chart menu")).toBeInTheDocument()
            expect(container.getByLabelText("My Care Team menu")).toBeInTheDocument()
            expect(container.getByLabelText("Messaging menu")).toBeInTheDocument()
            expect(container.getByLabelText("Documents menu")).toBeInTheDocument()
        });

        when('User Click on Appointment menu', () => {
            fireEvent.click(container.getByLabelText("Appointments menu"))
        });

        then('Sub menu is displayed such as Find a Doctor, Upcoming & Past Appointment (TBD)', () => {
            expect(container.getByLabelText("Find a Doctor menu")).toBeInTheDocument()
            expect(container.getByLabelText("Upcoming Appointment menu")).toBeInTheDocument()
        });

        when('user clicks on the ‘Find a Doctor\'  option', () => {
            fireEvent.click(container.getByLabelText("Find a Doctor menu"))
        });

        then('user should be able to view search doctors screen', async () => {
            const mock = new MockAdapter(axios);
            window.matchMedia = createMatchMedia("1980px");

            mock
                .onGet(
                    `/ecp/appointments/getDoctorDetails?pageSize=300&search.query=`
                )
                .reply(200, {"entities": []});
            act(() => {
                container = render(
                    <Provider store={store}>{SearchDoctorPage.getLayout(<SearchDoctorPage />)}</Provider>
                );
            });
            await waitFor(() => container.getByText(/Doctor Search/i));
        });
    });
})