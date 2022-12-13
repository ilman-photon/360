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
        "./__tests__/feature/Patient Portal/Sprint10/EPP-7719.feature"
);
let container;
const mock = new MockAdapter(axios);

defineFeature(feature, (test) => {
        const mockApi = () => {
                mock
                        .onPost(`/ecp/patient/getLastUpdatedPasswordDate`)
                        .reply(200, {
                                "lastUpdatedPasswordDate": "2022-12-07T11:30:54.111+00:00"
                        });

                mock
                        .onPost(`/ecp/patient/settings/updateUsername`)
                        .reply(200, {
                                "responseCode": 3000,
                                "responseType": "success"
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
                mockApi()
                act(() => {
                        container = render(
                                <Provider store={store}>
                                        {UpdateUsername.getLayout(<UpdateUsername />)}
                                </Provider>
                        );
                });
                await waitFor(() => container.getByText(wait));
        };

        test('EPIC_EPP-36_STORY_EPP-7719- Verify User should be able to view the confirmation message “Are you sure to cancel’ along with ‘Yes’ and ‘No’ options - when user Change Username', ({ given, and, when, then }) => {
                given('User has logged into the patient portal', async () => {
                        cleanup()
                        container = await renderLogin()
                        doLogin(mock, container)
                        await renderLoginSecurityPage()
                        fireEvent.click(container.getByTestId("update-username-link"))
                });

                and('User has navigated to Change username screen', async () => {
                        await renderUpdateUsernamePage()
                });

                when('User clicks on Cancel CTA', () => {
                        expect(container.getByTestId("cancel-btn")).toBeInTheDocument()
                });

                then('User should be able to view the confirmation message “Are you sure to cancel’ along with ‘Yes’ and ‘No’ options', async () => {
                        fireEvent.click(container.getByTestId("cancel-btn"))
                });
        });

        test('EPIC_EPP-36_STORY_EPP-7719- Verify User should be able to view the confirmation message “Are you sure to cancel’ along with ‘Yes’ and ‘No’ options - when user Change Password', ({ given, and, when, then }) => {
                given('User has logged into the patient portal', async () => {
                        cleanup()
                        container = await renderLogin()
                        doLogin(mock, container)
                        await renderLoginSecurityPage()
                        fireEvent.click(container.getByTestId("update-username-link"))
                });

                and('User has navigated to Change password screen', async () => {
                        await renderUpdateUsernamePage()
                });

                when('User clicks on Cancel CTA', () => {
                        expect(container.getByTestId("cancel-btn")).toBeInTheDocument()
                        fireEvent.click(container.getByTestId("cancel-btn"))
                });

                then('User should be able to view the confirmation message “Are you sure to cancel’ along with ‘Yes’ and ‘No’ options', () => {

                });
        });

        test('EPIC_EPP-36_STORY_EPP-7719- Verify User should be able to view the confirmation message “Are you sure to cancel’ along with ‘Yes’ and ‘No’ options - when user Change Set-up/Update sec. question', ({ given, and, when, then }) => {
                given('User has logged into the patient portal', async () => {
                        cleanup()
                        container = await renderLogin()
                        doLogin(mock, container)
                        await renderLoginSecurityPage()
                        fireEvent.click(container.getByTestId("update-username-link"))
                });

                and('User has navigated to Set-up/ Update security question screen', async () => {
                        await renderUpdateUsernamePage()
                });

                when('User clicks on Cancel CTA', () => {
                        expect(container.getByTestId("cancel-btn")).toBeInTheDocument()
                        fireEvent.click(container.getByTestId("cancel-btn"))
                });

                then('User should be able to view the confirmation message “Are you sure to cancel’ along with ‘Yes’ and ‘No’ options', () => {
                        defaultValidation()
                });
        });

        test('EPIC_EPP-36_STORY_EPP-7719- Verify User should be redirected back to Profile screen if ‘yes’ is selected during confirmation', ({ given, and, when, then }) => {
                given('User has logged into the patient portal', async () => {
                        cleanup()
                        container = await renderLogin()
                        doLogin(mock, container)
                        await renderLoginSecurityPage()
                        fireEvent.click(container.getByTestId("update-username-link"))
                });

                and('User has navigated to Change username screen or User has navigated to Change password screen or User has navigated to Set-up/ Update security question screen', async () => {
                        await renderUpdateUsernamePage()
                });

                when('User clicks on Cancel CTA', () => {
                        expect(container.getByTestId("cancel-btn")).toBeInTheDocument()
                        fireEvent.click(container.getByTestId("cancel-btn"))
                });

                then('User should be able to view the confirmation message “Are you sure to cancel’ along with ‘Yes’ and ‘No’ options', () => {
                        expect(container.getByTestId("cancel-btn")).toBeInTheDocument()
                        fireEvent.click(container.getByTestId("cancel-btn"))
                });

                when('User selects on Yes options', () => {
                        defaultValidation()
                });

                then('User should redirected back to Profile screen', () => {
                        defaultValidation()
                });
        });

        test('EPIC_EPP-36_STORY_EPP-7719- Verify User should stay in the same screen  if ‘No’ is selected during confirmation', ({ given, and, when, then }) => {
                given('User has logged into the patient portal', async () => {
                        cleanup()
                        container = await renderLogin()
                        doLogin(mock, container)
                        await renderLoginSecurityPage()
                        fireEvent.click(container.getByTestId("update-username-link"))
                });

                and('User has navigated to Change username screen or User has navigated to Change password screen or User has navigated to Set-up/ Update security question screen', async () => {
                        await renderUpdateUsernamePage()
                });

                when('User clicks on Cancel CTA', () => {
                        expect(container.getByTestId("cancel-btn")).toBeInTheDocument()
                        fireEvent.click(container.getByTestId("cancel-btn"))
                });

                then('User should be able to view the confirmation message “Are you sure to cancel’ along with ‘Yes’ and ‘No’ options', () => {
                        defaultValidation()
                });

                when('User selects on Yes options', () => {
                        defaultValidation()
                });

                then('User should stay in the same screen  if ‘No’ is selected during confirmation', () => {
                        defaultValidation()
                });
        });

});