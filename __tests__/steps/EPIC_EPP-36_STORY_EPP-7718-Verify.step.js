import { act, cleanup, fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { defineFeature, loadFeature } from "jest-cucumber";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import { defaultValidation, doLogin, renderLogin } from "../../__mocks__/commonSteps";
import LoginSecurityPage from "../../src/pages/patient/account/login-&-security";
import UpdateUsername from "../../src/pages/patient/account/update-username";

const feature = loadFeature(
        "./__tests__/feature/Patient Portal/Sprint10/EPP-7718.feature"
);

const mock = new MockAdapter(axios);

defineFeature(feature, (test) => {
        let container;

        const mockApi = (error = false) => {
                mock
                        .onPost(`/ecp/patient/getLastUpdatedPasswordDate`)
                        .reply(200, {
                                "lastUpdatedPasswordDate": "2022-12-07T11:30:54.111+00:00"
                        });
                const mockSecurityQuestions = {
                        ResponseCode: 3000,
                        ResponseType: "success",
                        SecurityQuestions: [
                                {
                                        "What was the first book you read?": "test3",
                                        "What was your favorite cartoon character during your childhood?":
                                                "test2",
                                        "What is your favorite cold-weather activity?": "test1",
                                },
                        ],
                };

                mock
                        .onGet(`/ecp/accountRecovery/viewSecurityQuestions/98f9404b-6ea8-4732-b14f-9c1a168d8066`)
                        .reply(200, mockSecurityQuestions);

                if (!error) {

                        mock
                                .onPost(`/ecp/patient/settings/updateUsername`)
                                .reply(200, {
                                        "responseCode": 3000,
                                        "responseType": "success"
                                });

                } else {
                        mock
                                .onPost(`/ecp/patient/settings/updateUsername`)
                                .reply(400, {
                                        "responseCode": 3002,
                                        "responseType": "New Username already exists! Please provide a different Email id or Phone number"
                                });
                }

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

        const renderUpdateUsernamePage = async (wait = /patient1@photoninfotech/i, error = false) => {
                mockApi(error)
                act(() => {
                        container = render(
                                <Provider store={store}>
                                        {UpdateUsername.getLayout(<UpdateUsername />)}
                                </Provider>
                        );
                });
                await waitFor(() => container.getByText(wait));
        };

        test('EPIC_EPP-36_STORY_EPP-7718 - Verify User should be able to view the error message “Please enter a valid email ID or Phone number” if the new email ID or phone number entered is not in correct format', ({ given, and, when, then }) => {
                given('User launch Patient Portal url', async () => {
                        cleanup()
                        container = await renderLogin()
                });

                and('user is logged into the portal with valid credential', () => {
                        doLogin(mock, container)
                });

                and('user lands on the Dashboard screen', () => {
                        defaultValidation()
                });

                when('user click on account menu in header', () => {
                        defaultValidation()
                });

                then('user should be navigated to Account screen', async () => {
                        await renderLoginSecurityPage()
                });

                and('user should be able to view sub menu under Profile to setup change user name', () => {
                        expect(container.getAllByText(/Login & Security/i)[1]).toBeInTheDocument()
                });

                and(/^sub menu written as "(.*)"$/, (arg0) => {
                        expect(container.getByText("Login")).toBeInTheDocument()
                });

                when(/^user click on "(.*)" screen sub menu$/, (arg0) => {
                        defaultValidation()
                });

                then(/^user should be able to view "(.*)" screen sub menu$/, (arg0) => {
                        expect(container.getByText("Login")).toBeInTheDocument()
                });

                when('user click on \'Update\' Link', () => {
                        fireEvent.click(container.getByTestId("update-username-link"))
                });

                then('user  should be able to navigated  Update Username screen', async () => {
                        await renderUpdateUsernamePage()
                });

                and(/^user enter new user name on (.*) field with invalid format$/, (arg0) => {
                        const usernameField = container.container.querySelector('#update-username');
                        fireEvent.change(usernameField, { target: { value: "patient1" } });
                });

                when('user click on \'Update\' button', async () => {
                        fireEvent.click(container.getByTestId("update-btn"))
                        await waitFor(() => {
                                container.getByText(/Please enter a valid email ID or Phone number/i)
                        })
                });

                then('user should be able to view Are you sure want to update your username modal', () => {
                        defaultValidation()
                });

                and('user should be able to view Update button', () => {
                        expect(container.getByTestId("update-btn")).toBeInTheDocument()
                });

                and('user should be able to view Cancel button', () => {
                        expect(container.getByTestId("cancel-btn")).toBeInTheDocument()
                });

                when('user click on Update button', async () => {
                        fireEvent.click(container.getByTestId("update-btn"))
                        await waitFor(() => {
                                container.getByText(/Please enter a valid email ID or Phone number/i)
                        })
                });

                then('user should be able to view the error message “Please enter a valid email ID or Phone number” if the new email ID or phone number entered is not in correct format', () => {
                        expect(container.getByText(/Please enter a valid email ID or Phone number/i)).toBeInTheDocument()
                });
        });

        test('EPIC_EPP-36_STORY_EPP-7718 - Verify User should be able to view the error message “Please enter a different username other than the previous username” if the new username matches with the previous username', ({ given, and, when, then }) => {
                given('User launch Patient Portal url', async () => {
                        cleanup()
                        container = await renderLogin()
                });

                and('user is logged into the portal with valid credential', () => {
                        doLogin(mock, container)
                });

                and('user lands on the Dashboard screen', () => {
                        defaultValidation()
                });

                when('user click on account menu in header', () => {
                        defaultValidation()
                });

                then('user should be navigated to Account screen', async () => {
                        await renderLoginSecurityPage()
                });

                and('user should be able to view sub menu under Profile to setup change user name', () => {
                        expect(container.getAllByText(/Login & Security/i)[1]).toBeInTheDocument()
                });

                and(/^sub menu written as "(.*)"$/, (arg0) => {
                        expect(container.getByText("Login")).toBeInTheDocument()
                });

                when(/^user click on "(.*)" screen sub menu$/, (arg0) => {
                        defaultValidation()
                });

                then(/^user should be able to view "(.*)" screen sub menu$/, (arg0) => {
                        expect(container.getByText("Login")).toBeInTheDocument()
                });

                when('user click on \'Update\' Link', () => {
                        fireEvent.click(container.getByTestId("update-username-link"))
                });

                then('user  should be able to navigated  Update Username screen', async () => {
                        await renderUpdateUsernamePage()
                });

                and(/^user enter new user name on (.*) field with same with previously$/, (arg0) => {
                        const usernameField = container.container.querySelector('#update-username');
                        fireEvent.change(usernameField, { target: { value: "patient1@photoninfotech.net" } });
                });

                when('user click on \'Update\' button', async () => {
                        fireEvent.click(container.getByTestId("update-btn"))
                        await waitFor(() => {
                                container.getByText(/Please enter a different username other than the previous username/i)
                        })
                });

                then('user should be able to view Are you sure want to update your username modal', () => {
                        defaultValidation()
                });

                and('user should be able to view Update button', () => {
                        expect(container.getByTestId("update-btn")).toBeInTheDocument()
                });

                and('user should be able to view Cancel button', () => {
                        expect(container.getByTestId("cancel-btn")).toBeInTheDocument()
                });

                when('user click on Update button', async () => {
                        fireEvent.click(container.getByTestId("update-btn"))
                        await waitFor(() => {
                                container.getByText(/Please enter a different username other than the previous username/i)
                        })
                });

                then('user should be able to view the error message “Please enter a different username other than the previous username” if the new username matches with the previous username', () => {
                        expect(container.getByText(/Please enter a different username other than the previous username/i)).toBeInTheDocument()
                });
        });

        test('EPIC_EPP-36_STORY_EPP-7718 - Verify User should be able to view the error message “Please enter a valid email ID or Phone number ” if anything other than email ID or Phone number is entered as username', ({ given, and, when, then }) => {
                given('User launch Patient Portal url', async () => {
                        cleanup()
                        container = await renderLogin()
                });

                and('user is logged into the portal with valid credential', () => {
                        doLogin(mock, container)
                });

                and('user lands on the Dashboard screen', () => {
                        defaultValidation()
                });

                when('user click on account menu in header', () => {
                        defaultValidation()
                });

                then('user should be navigated to Account screen', async () => {
                        await renderLoginSecurityPage()
                });

                and('user should be able to view sub menu under Profile to setup change user name', () => {
                        expect(container.getAllByText(/Login & Security/i)[1]).toBeInTheDocument()
                });

                and(/^sub menu written as "(.*)"$/, (arg0) => {
                        expect(container.getByText("Login")).toBeInTheDocument()
                });

                when(/^user click on "(.*)" screen sub menu$/, (arg0) => {
                        defaultValidation()
                });

                then(/^user should be able to view "(.*)" screen sub menu$/, (arg0) => {
                        expect(container.getByText("Login")).toBeInTheDocument()
                });

                when('user click on \'Update\' Link', () => {
                        fireEvent.click(container.getByTestId("update-username-link"))
                });

                then('user  should be able to navigated  Update Username screen', async () => {
                        await renderUpdateUsernamePage(/patient1@photoninfotech/i, true)
                });

                and(/^user enter new user name on (.*) field with invalid format$/, (arg0) => {
                        const usernameField = container.container.querySelector('#update-username');
                        fireEvent.change(usernameField, { target: { value: "patient2@mail.cc" } });
                });

                when('user click on \'Update\' button', async () => {
                        fireEvent.click(container.getByTestId("update-btn"))
                        await waitFor(() => {
                                container.getByText(/Are you sure you want to update your username?/i);
                        });
                });

                then('user should be able to view Are you sure want to update your username modal', () => {
                        expect(container.getByText(/Are you sure you want to update your username?/i)).toBeInTheDocument();
                });

                and('user should be able to view Update button', () => {
                        expect(container.getAllByRole("link", { name: /Update/i })[2]).toBeInTheDocument();
                });

                and('user should be able to view Cancel button', () => {
                        expect(container.getAllByRole("button", { name: /Cancel/i })[1]).toBeInTheDocument();
                });

                when('user click on Update button', async () => {
                        fireEvent.click(container.getAllByRole("button", { name: /Update/i })[1]);
                        await waitFor(() => {
                                container.getByText(/Username already exists!/i)
                        })
                });

                then('user should be able to view the error message “Please enter a different username other than the previous username” if the new username matches with the previous username', () => {
                        expect(container.getByText(/Username already exists!/i)).toBeInTheDocument()
                });
        });

})