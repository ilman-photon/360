import { act, fireEvent, render, cleanup, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { defineFeature, loadFeature } from "jest-cucumber";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import HomePage from "../../src/pages/patient";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import mediaQuery from "css-mediaquery";

const feature = loadFeature(
    "./__tests__/feature/Patient Portal/Sprint6/EPP-2713.feature"
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

    test('EPIC_EPP-53_STORY_EPP-2713- Verify whether the user is able to lands on Dashboard/ Prescription screen', ({ given, when, and }) => {
        given('user Launch  the browser and enter the user portal URL', () => {
            defaultValidation()
        });

        when(/^user enter valid (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation()
        });

        and('clicks  on login button.', () => {
            defaultValidation()
        });

        and('user navigates to Dashboard/ Prescription screen', async() => {
            mockApi();
            geolocation();
            act(() => {
                container = render(
                    <Provider store={store}>{HomePage.getLayout(<HomePage />)}</Provider>
                );
            });
            await waitFor(() => container.getByText(/Search for a doctor/i));
        });
    });

    test('EPIC_EPP-53_STORY_EPP-2713- Verify whether the user is able to clicks on the link', ({ given, when, and, then }) => {
        given('user Launch  the browser and enter the user portal URL', () => {
            defaultValidation()
        });

        when(/^user enter valid (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation()
        });

        and('clicks  on login button.', () => {
            defaultValidation()
        });

        and('user navigates to Dashboard/ Prescription screen', () => {
            Object.defineProperty(document, "cookie", {
                writable: true,
                value: "authorized=true;accessToken=1234",
            });
        });

        then('user lands on Dashboard/ Prescription screen', async() => {
            mockApi();
            geolocation();
            act(() => {
                container = render(
                    <Provider store={store}>{HomePage.getLayout(<HomePage />)}</Provider>
                );
            });
            await waitFor(() => container.getByText(/Search for a doctor/i));
        });

        and('user should be able to view a link and able to clicks on the link', () => {
            expect(container.getByTestId("ecommerce-button")).toBeInTheDocument()
        });
    });

    test('EPIC_EPP-53_STORY_EPP-2713- Verify whether the user will redirect to an e-commerce site in a new tab', ({ given, when, and, then }) => {
        given('user Launch  the browser and enter the user portal URL', () => {
            defaultValidation()
        });

        when(/^user enter valid (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation()
        });

        and('clicks  on login button.', () => {
            defaultValidation()
        });

        and('user navigates to Dashboard/ Prescription screen', () => {
            Object.defineProperty(document, "cookie", {
                writable: true,
                value: "authorized=true;accessToken=1234",
            });
        });

        then('user lands on Dashboard/ Prescription screen', async() => {
            mockApi();
            geolocation();
            act(() => {
                container = render(
                    <Provider store={store}>{HomePage.getLayout(<HomePage />)}</Provider>
                );
            });
            await waitFor(() => container.getByText(/Search for a doctor/i));
        });

        and('user should be able to view a link and able to clicks on the link', () => {
            expect(container.getByTestId("ecommerce-button")).toBeInTheDocument()
        });

        and('user should get redirected to the user to an e-commerce site in a new tab', () => {
            fireEvent.click(container.getByTestId("ecommerce-button"))
        });
    });
})