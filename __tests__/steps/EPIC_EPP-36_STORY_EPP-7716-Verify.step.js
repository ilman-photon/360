import { act, cleanup, fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { defineFeature, loadFeature } from "jest-cucumber";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import { doLogin, renderLogin } from "../../__mocks__/commonSteps";
import LoginSecurityPage from "../../src/pages/patient/account/login-&-security";
import UpdateUsername from "../../src/pages/patient/account/update-username";
import moment from "moment";

const feature = loadFeature(
    "./__tests__/feature/Patient Portal/Sprint10/EPP-7716.feature"
);

const mock = new MockAdapter(axios);

defineFeature(feature, (test) => {
    let container;

    const mockApi = () => {
        mock
            .onPost(`/ecp/patient/getLastUpdatedPasswordDate`)
            .reply(200, {
                "lastUpdatedPasswordDate": moment().subtract(40, 'd').format()
            });

        mock.onPost(`/ecp/patient/logout`).reply(200, {
            ResponseCode: 2005,
            ResponseType: "success",
        });
    }

    beforeEach(() => {
        Object.defineProperty(document, "cookie", {
            writable: true,
            value: "authorized=true;accessToken=1234",
        });
    })

    const renderLoginSecurityPage = async (wait = /patient1@photoninfotech/i) => {
        mockApi()
        act(() => {
            container = render(
                <Provider store={store}>
                    {LoginSecurityPage.getLayout(<LoginSecurityPage />)}
                </Provider>
            );
        });
        await waitFor(() => container.getByText(wait));
    };

    const renderUpdateUsernamePage = async (wait = /patient1@photoninfotech/i) => {
        act(() => {
            container = render(
                <Provider store={store}>
                    {UpdateUsername.getLayout(<UpdateUsername />)}
                </Provider>
            );
        });
        await waitFor(() => container.getByText(wait));
    };

    test('EPIC_EPP-36_STORY_EPP-7716- Verify User should be able to view an option to input new username', ({ given, and, when, then }) => {
        given('User has logged into the patient portal', async () => {
            cleanup()
            container = await renderLogin()
        });

        and('User has logged in as patient', () => {
            doLogin(mock, container)
        });

        and('User has navigated to Login & Security screen', async () => {
            await renderLoginSecurityPage()
        });

        and('User should be able to see on Update CTA in the username section', () => {
            expect(container.getByTestId("update-username-link")).toBeInTheDocument()
        });

        when('User clicks on Update CTA in the username section', () => {
            fireEvent.click(container.getByTestId("update-username-link"))
        });

        then('User should be able to view an option to input new username', async () => {
            await renderUpdateUsernamePage()
        });
    });

    test('EPIC_EPP-36_STORY_EPP-7716- Verify User should be able to input new username', ({ given, and, when, then }) => {
        given('User has logged into the patient portal', async () => {
            cleanup()
            container = await renderLogin()
        });

        and('User has logged in as patient', () => {
            doLogin(mock, container)
        });

        and('User has navigated to Login & Security screen', async () => {
            await renderLoginSecurityPage()
        });

        and('User should be able to see on Update CTA in the username section', () => {
            expect(container.getByTestId("update-username-link")).toBeInTheDocument()
        });

        when('User clicks on Update CTA in the username section', () => {
            fireEvent.click(container.getByTestId("update-username-link"))
        });

        then('User should be able to view an option to input new username', async () => {
            await renderUpdateUsernamePage()
        });

        and('User should be able to input new username', () => {
            const usernameField = container.container.querySelector('#update-username');
            fireEvent.change(usernameField, { target: { value: "patient2@photoninfotech.net" } });
        });
    });

    test('EPIC_EPP-36_STORY_EPP-7716- Verify User should be able to view the information message ” Enter a  valid email ID or phone number as your username”', ({ given, and, when, then }) => {
        given('User has logged into the patient portal', async () => {
            cleanup()
            container = await renderLogin()
        });

        and('User has logged in as patient', () => {
            doLogin(mock, container)
        });

        and('User has navigated to Login & Security screen', async () => {
            await renderLoginSecurityPage()
        });

        and('User should be able to see on Update CTA in the username section', () => {
            expect(container.getByTestId("update-username-link")).toBeInTheDocument()
        });

        when('User clicks on Update CTA in the username section', () => {
            fireEvent.click(container.getByTestId("update-username-link"))
        });

        then('User should be able to view an option to input new username', async () => {
            await renderUpdateUsernamePage()
        });

        and('User should be able to input new username', () => {
            const usernameField = container.container.querySelector('#update-username');
            fireEvent.change(usernameField, { target: { value: "patient2" } });
        });

        and('User should be able to view the information message ” Enter a  valid email ID or phone number as your username”', async () => {
            fireEvent.click(container.getByTestId("update-btn"))
            await waitFor(() => {
                container.getByText(/Please enter a valid email ID or Phone number/i)
            })
            expect(container.getByText(/Please enter a valid email ID or Phone number/i)).toBeInTheDocument()
        });
    });

    test('EPIC_EPP-36_STORY_EPP-7716- Verify User should be able to view Update CTA', ({ given, and, when, then }) => {
        given('User has logged into the patient portal', async () => {
            cleanup()
            container = await renderLogin()
        });

        and('User has logged in as patient', () => {
            doLogin(mock, container)
        });

        and('User has navigated to Login & Security screen', async () => {
            await renderLoginSecurityPage()
        });

        and('User should be able to see on Update CTA in the username section', () => {
            expect(container.getByTestId("update-username-link")).toBeInTheDocument()
        });

        when('User clicks on Update CTA in the username section', () => {
            fireEvent.click(container.getByTestId("update-username-link"))
        });

        then('User should be able to view an option to input new username', async () => {
            await renderUpdateUsernamePage()
        });

        and('User should be able to input new username', () => {
            const usernameField = container.container.querySelector('#update-username');
            fireEvent.change(usernameField, { target: { value: "patient2" } });
        });

        and('User should be able to view the information message ” Enter a  valid email ID or phone number as your username”', async () => {
            fireEvent.click(container.getByTestId("update-btn"))
            await waitFor(() => {
                container.getByText(/Please enter a valid email ID or Phone number/i)
            })
            expect(container.getByText(/Please enter a valid email ID or Phone number/i)).toBeInTheDocument()
        });

        and('User should be able to view Update CTA', () => {
            expect(container.getByTestId("update-btn")).toBeInTheDocument()
        });
    });

    test('EPIC_EPP-36_STORY_EPP-7716- Verify User should be able to view Cancel CTA', ({ given, and, when, then }) => {
        given('User has logged into the patient portal', async () => {
            cleanup()
            container = await renderLogin()
        });

        and('User has logged in as patient', () => {
            doLogin(mock, container)
        });

        and('User has navigated to Login & Security screen', async () => {
            await renderLoginSecurityPage()
        });

        and('User should be able to see on Update CTA in the username section', () => {
            expect(container.getByTestId("update-username-link")).toBeInTheDocument()
        });

        when('User clicks on Update CTA in the username section', () => {
            fireEvent.click(container.getByTestId("update-username-link"))
        });

        then('User should be able to view an option to input new username', async () => {
            await renderUpdateUsernamePage()
        });

        and('User should be able to input new username', () => {
            const usernameField = container.container.querySelector('#update-username');
            fireEvent.change(usernameField, { target: { value: "patient2" } });
        });

        and('User should be able to view the information message ” Enter a  valid email ID or phone number as your username”', async () => {
            fireEvent.click(container.getByTestId("update-btn"))
            await waitFor(() => {
                container.getByText(/Please enter a valid email ID or Phone number/i)
            })
            expect(container.getByText(/Please enter a valid email ID or Phone number/i)).toBeInTheDocument()
        });

        and('User should be able to view Update CTA', () => {
            expect(container.getByTestId("update-btn")).toBeInTheDocument()
        });

        and('User should be able to view Cancel CTA', () => {
            expect(container.getByTestId("cancel-btn")).toBeInTheDocument()
        });
    });

})