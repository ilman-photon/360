import { act, cleanup, fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { defineFeature, loadFeature } from "jest-cucumber";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import { defaultValidation, doLogin, renderLogin } from "../../__mocks__/commonSteps";
import LoginSecurityPage from "../../src/pages/patient/account/login-&-security";
import AccountUpdatePasswordPage from "../../src/pages/patient/account/update-password";
import moment from "moment";

const feature = loadFeature(
        "./__tests__/feature/Patient Portal/Sprint10/EPP-9323.feature"
);

const mock = new MockAdapter(axios);

defineFeature(feature, (test) => {
        let container;

        const mockApi = () => {
                mock
                        .onPost(`/ecp/patient/getLastUpdatedPasswordDate`)
                        .reply(200, {
                                "lastUpdatedPasswordDate": moment().subtract(2, 'd').format()
                        });

                mock
                        .onPost(`/ecp/patient/settings/changePassword`)
                        .reply(200, {
                                "responseCode": 3000,
                                "responseType": "success"
                        });

                mock
                        .onPost(`/ecp/patient/settings/validatePassword`)
                        .reply(400, {
                                "responseCode": 2001,
                                "responseType": " Password is invalid"
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

        const renderUpdatePasswordPage = async (wait = /New Password/i) => {
                mockApi()
                act(() => {
                        container = render(
                                <Provider store={store}>
                                        {AccountUpdatePasswordPage.getLayout(<AccountUpdatePasswordPage />)}
                                </Provider>
                        );
                });
                await waitFor(() => container.getAllByText(wait));
        };

        test('EPIC_EPP-37_STORY_EPP-9323- Verify User should be navigated to change password page', ({ given, and, then }) => {
                given('User launch Patient Portal url', async () => {
                        cleanup()
                        container = await renderLogin()
                });

                and('user is logged into patient portal', () => {
                        doLogin(mock, container)
                });

                then('user lands on the Dashboard screen', () => {
                        defaultValidation();
                });

                then('user navigates to change password page', async () => {
                        await renderLoginSecurityPage()
                        fireEvent.click(container.getByTestId("update-password-link"))
                });
        });

        test('EPIC_EPP-37_STORY_EPP-9323- Verify User updates the password and view the success message', ({ given, and, then, when }) => {
                given('User launch Patient Portal url', async () => {
                        cleanup()
                        container = await renderLogin()
                });

                and('user is logged into patient portal', () => {
                        doLogin(mock, container)
                });

                then('user lands on the Dashboard screen', () => {
                        defaultValidation();
                });

                then('user navigates to change password page', async () => {
                        await renderLoginSecurityPage()
                        fireEvent.click(container.getByTestId("update-password-link"))
                });

                then('user should see Update Password Page', async () => {
                        await renderUpdatePasswordPage()
                });

                and('User should see New Password and Confirm New Password fields', () => {
                        expect(container.container.querySelector('#new-password')).toBeInTheDocument()
                        expect(container.container.querySelector('#confirm-password')).toBeInTheDocument()
                });

                when('User should fill the valid New Password and Confirm New Password fields', () => {
                        const newPassField = container.container.querySelector('#new-password');
                        fireEvent.change(newPassField, { target: { value: "Password@123" } });
                        const confPassField = container.container.querySelector('#confirm-password');
                        fireEvent.change(confPassField, { target: { value: "Password@123" } });
                });

                then('user should see mask the entered password along with an option to unmask it by default', () => {
                        defaultValidation();
                });

                and('User should see Update button', () => {
                        expect(container.getByTestId("update-btn")).toBeInTheDocument()
                });

                when('User should click on Update button', () => {
                        expect(container.getByTestId("update-btn")).toBeInTheDocument()
                });

                then('User should be able to view the confirmation message Are you sure to change password along with Yes and No options', async () => {
                        setTimeout(() => {
                                fireEvent.click(container.getByTestId("update-btn"))
                        }, 500);
                        await waitFor(() => {
                                container.getByText(/Are you sure to change password?/i)
                        })
                });

                when('user clicks Yes', () => {
                        expect(container.getByRole("button", { name: /Update/i })).toBeInTheDocument()
                        fireEvent.click(container.getByRole("button", { name: /Update/i }))
                });

                then('user should see Password has been updated success message Password changed successfully', async () => {
                        container = await renderLogin()
                });
        });

        test('EPIC_EPP-37_STORY_EPP-9323- Verify User should unmask the entered password', ({ given, and, then, when }) => {
                given('User launch Patient Portal url', async () => {
                        cleanup()
                        container = await renderLogin()
                });

                and('user is logged into patient portal', () => {
                        doLogin(mock, container)
                });

                then('user lands on the Dashboard screen', () => {
                        defaultValidation();
                });

                then('user navigates to change password page', async () => {
                        await renderLoginSecurityPage()
                        fireEvent.click(container.getByTestId("update-password-link"))
                });

                then('user should see Update Password Page', async () => {
                        await renderUpdatePasswordPage()
                });

                and('User should see New Password and Confirm New Password fields', () => {
                        expect(container.container.querySelector('#new-password')).toBeInTheDocument()
                        expect(container.container.querySelector('#confirm-password')).toBeInTheDocument()
                });

                when('User should fill the valid New Password and Confirm New Password fields', () => {
                        const newPassField = container.container.querySelector('#new-password');
                        fireEvent.change(newPassField, { target: { value: "Password@123" } });
                        const confPassField = container.container.querySelector('#confirm-password');
                        fireEvent.change(confPassField, { target: { value: "Password@123" } });
                });

                then('user should see mask the entered password along with an option to unmask it by default', () => {
                        defaultValidation();
                });

                and('User should see Password Eye icon', () => {
                        defaultValidation();
                });

                when('User clicks on Password Eye icon', () => {
                        defaultValidation();
                });

                then('User should see the entered password', () => {
                        defaultValidation();
                });

                and('User should see Update button', () => {
                        expect(container.getByTestId("update-btn")).toBeInTheDocument()
                });

                when('User should click on Update button', () => {
                        expect(container.getByTestId("update-btn")).toBeInTheDocument()
                });

                then('User should be able to view the confirmation message Are you sure to change password along with Yes and No options', async () => {
                        setTimeout(() => {
                                fireEvent.click(container.getByTestId("update-btn"))
                        }, 500);
                        await waitFor(() => {
                                container.getByText(/Are you sure to change password?/i)
                        })
                });

                when('user clicks Yes', () => {
                        expect(container.getByRole("button", { name: /Update/i })).toBeInTheDocument()
                        fireEvent.click(container.getByRole("button", { name: /Update/i }))
                });

                then('user should see Password has been updated success message Password changed successfully', async () => {
                        container = await renderLogin()
                });
        });

        test('EPIC_EPP-37_STORY_EPP-9323- Verify User should Login using new Password', ({ given, and, then, when }) => {
                given('User launch Patient Portal url', async () => {
                        cleanup()
                        container = await renderLogin()
                });

                and('user is logged into patient portal', () => {
                        doLogin(mock, container)
                });

                then('user lands on the Dashboard screen', () => {
                        defaultValidation();
                });

                then('user navigates to change password page', async () => {
                        await renderLoginSecurityPage()
                        fireEvent.click(container.getByTestId("update-password-link"))
                });

                then('user should see Update Password Page', async () => {
                        await renderUpdatePasswordPage()
                });

                and('User should see New Password and Confirm New Password fields', () => {
                        expect(container.container.querySelector('#new-password')).toBeInTheDocument()
                        expect(container.container.querySelector('#confirm-password')).toBeInTheDocument()
                });

                when('User should fill the valid New Password and Confirm New Password fields', () => {
                        const newPassField = container.container.querySelector('#new-password');
                        fireEvent.change(newPassField, { target: { value: "Password@123" } });
                        const confPassField = container.container.querySelector('#confirm-password');
                        fireEvent.change(confPassField, { target: { value: "Password@123" } });
                });

                then('user should see mask the entered password along with an option to unmask it by default', () => {
                        defaultValidation();
                });

                and('User should see Password Eye icon', () => {
                        defaultValidation();
                });

                when('User clicks on Password Eye icon', () => {
                        defaultValidation();
                });

                then('User should see the entered password', () => {
                        defaultValidation();
                });

                and('User should see Update button', () => {
                        expect(container.getByTestId("update-btn")).toBeInTheDocument()
                });

                when('User should click on Update button', () => {
                        expect(container.getByTestId("update-btn")).toBeInTheDocument()
                });

                then('User should be able to view the confirmation message Are you sure to change password along with Yes and No options', async () => {
                        setTimeout(() => {
                                fireEvent.click(container.getByTestId("update-btn"))
                        }, 500);
                        await waitFor(() => {
                                container.getByText(/Are you sure to change password?/i)
                        })
                });

                when('user clicks Yes', () => {
                        expect(container.getByRole("button", { name: /Update/i })).toBeInTheDocument()
                        fireEvent.click(container.getByRole("button", { name: /Update/i }))
                });

                then('user should see Password has been updated success message Password changed successfully', async () => {
                        container = await renderLogin()
                });

                then('User should navigated to Patien Login screen', () => {
                        defaultValidation();
                });

                and('User should see Patient Login screen', async () => {
                        container = await renderLogin()
                });

                and('User should see username and password field', () => {
                        defaultValidation();
                });

                when('User inputs valid username field', () => {
                        defaultValidation();
                });

                and('User input New Password field', () => {
                        defaultValidation();
                });

                then('User should navigated to Dashboard screen', () => {
                        defaultValidation();
                });
        });

        test('EPIC_EPP-37_STORY_EPP-9323- Verify User should not copy and paste on New Password and Confirm New Password fields', ({ given, and, then, when }) => {
                given('User launch Patient Portal url', async () => {
                        cleanup()
                        container = await renderLogin()
                });

                and('user is logged into patient portal', () => {
                        doLogin(mock, container)
                });

                then('user lands on the Dashboard screen', () => {
                        defaultValidation();
                });

                then('user navigates to change password page', async () => {
                        await renderLoginSecurityPage()
                        fireEvent.click(container.getByTestId("update-password-link"))
                });

                then('user should see Update Password Page', async () => {
                        await renderUpdatePasswordPage()
                });

                and('User should see New Password and Confirm New Password fields', () => {
                        expect(container.container.querySelector('#new-password')).toBeInTheDocument()
                        expect(container.container.querySelector('#confirm-password')).toBeInTheDocument()
                });

                when('User should fill the valid New Password and Confirm New Password fields', () => {
                        const newPassField = container.container.querySelector('#new-password');
                        fireEvent.change(newPassField, { target: { value: "Password@123" } });
                        const confPassField = container.container.querySelector('#confirm-password');
                        fireEvent.change(confPassField, { target: { value: "Password@123" } });
                });

                then('User should not copy and paste on New Password and Confirm New Password fields', () => {
                        defaultValidation();
                });

                then('user should see mask the entered password along with an option to unmask it by default', () => {
                        defaultValidation();
                });

                and('User should see Password Eye icon', () => {
                        defaultValidation();
                });

                when('User clicks on Password Eye icon', () => {
                        defaultValidation();
                });

                then('User should see the entered password', () => {
                        defaultValidation();
                });

                and('User should see Update button', () => {
                        expect(container.getByTestId("update-btn")).toBeInTheDocument()
                });

                when('User should click on Update button', () => {
                        expect(container.getByTestId("update-btn")).toBeInTheDocument()
                });

                then('User should be able to view the confirmation message Are you sure to change password along with Yes and No options', async () => {
                        setTimeout(() => {
                                fireEvent.click(container.getByTestId("update-btn"))
                        }, 500);
                        await waitFor(() => {
                                container.getByText(/Are you sure to change password?/i)
                        })
                });

                when('user clicks Yes', () => {
                        expect(container.getByRole("button", { name: /Update/i })).toBeInTheDocument()
                        fireEvent.click(container.getByRole("button", { name: /Update/i }))
                });

                then('user should see Password has been updated success message Password changed successfully', async () => {
                        container = await renderLogin()
                });

                then('User should navigated to Patien Login screen', () => {
                        defaultValidation();
                });

                and('User should see Patient Login screen', async () => {
                        container = await renderLogin()
                });

                and('User should see username and password field', () => {
                        defaultValidation();
                });

                when('User inputs valid username field', () => {
                        defaultValidation();
                });

                and('User input New Password field', () => {
                        defaultValidation();
                });

                then('User should navigated to Dashboard screen', () => {
                        defaultValidation();
                });
        });

        test('EPIC_EPP-37_STORY_EPP-9323- Verify the password should not be changed if No is selected during confirmation by the user', ({ given, and, then, when }) => {
                given('User launch Patient Portal url', async () => {
                        cleanup()
                        container = await renderLogin()
                });

                and('user is logged into patient portal', () => {
                        doLogin(mock, container)
                });

                then('user lands on the Dashboard screen', () => {
                        defaultValidation();
                });

                then('user navigates to change password page', async () => {
                        await renderLoginSecurityPage()
                        fireEvent.click(container.getByTestId("update-password-link"))
                });

                then('user should see Update Password Page', async () => {
                        await renderUpdatePasswordPage()
                });

                and('User should see New Password and Confirm New Password fields', () => {
                        expect(container.container.querySelector('#new-password')).toBeInTheDocument()
                        expect(container.container.querySelector('#confirm-password')).toBeInTheDocument()
                });

                when('User should fill the valid New Password and Confirm New Password fields', () => {
                        const newPassField = container.container.querySelector('#new-password');
                        fireEvent.change(newPassField, { target: { value: "Password@123" } });
                        const confPassField = container.container.querySelector('#confirm-password');
                        fireEvent.change(confPassField, { target: { value: "Password@123" } });
                });

                then('User should not copy and paste on New Password and Confirm New Password fields', () => {
                        defaultValidation();
                });

                then('user should see mask the entered password along with an option to unmask it by default', () => {
                        defaultValidation();
                });

                and('User should see Password Eye icon', () => {
                        defaultValidation();
                });

                when('User clicks on Password Eye icon', () => {
                        defaultValidation();
                });

                then('User should see the entered password', () => {
                        defaultValidation();
                });

                and('User should see Update button', () => {
                        expect(container.getByTestId("update-btn")).toBeInTheDocument()
                });

                when('User should click on Update button', () => {
                        expect(container.getByTestId("update-btn")).toBeInTheDocument()
                });

                then('User should be able to view the confirmation message Are you sure to change password along with Yes and No options', async () => {
                        setTimeout(() => {
                                fireEvent.click(container.getByTestId("update-btn"))
                        }, 500);
                        await waitFor(() => {
                                container.getByText(/Are you sure to change password?/i)
                        })
                });

                when('user clicks No', () => {
                        defaultValidation();
                });

                then('password should not be changed', () => {
                        defaultValidation();
                });
        });

        test('EPIC_EPP-37_STORY_EPP-9323- Verify the patient should receive the alert in preferred mode of communication  on password change', ({ given, and, then, when }) => {
                given('User launch Patient Portal url', async () => {
                        cleanup()
                        container = await renderLogin()
                });

                and('user is logged into patient portal', () => {
                        doLogin(mock, container)
                });

                then('user lands on the Dashboard screen', () => {
                        defaultValidation();
                });

                then('user navigates to change password page', async () => {
                        await renderLoginSecurityPage()
                        fireEvent.click(container.getByTestId("update-password-link"))
                });

                then('user should see Update Password Page', async () => {
                        await renderUpdatePasswordPage()
                });

                and('User should see New Password and Confirm New Password fields', () => {
                        expect(container.container.querySelector('#new-password')).toBeInTheDocument()
                        expect(container.container.querySelector('#confirm-password')).toBeInTheDocument()
                });

                when('User should fill the valid New Password and Confirm New Password fields', () => {
                        const newPassField = container.container.querySelector('#new-password');
                        fireEvent.change(newPassField, { target: { value: "Password@123" } });
                        const confPassField = container.container.querySelector('#confirm-password');
                        fireEvent.change(confPassField, { target: { value: "Password@123" } });
                });

                then('user should see mask the entered password along with an option to unmask it by default', () => {
                        defaultValidation();
                });

                and('User should see Password Eye icon', () => {
                        defaultValidation();
                });

                when('User clicks on Password Eye icon', () => {
                        defaultValidation();
                });

                then('User should see the entered password', () => {
                        defaultValidation();
                });

                and('User should see Update button', () => {
                        expect(container.getByTestId("update-btn")).toBeInTheDocument()
                });

                when('User should click on Update button', () => {
                        expect(container.getByTestId("update-btn")).toBeInTheDocument()
                });

                then('User should be able to view the confirmation message Are you sure to change password along with Yes and No options', async () => {
                        setTimeout(() => {
                                fireEvent.click(container.getByTestId("update-btn"))
                        }, 500);
                        await waitFor(() => {
                                container.getByText(/Are you sure to change password?/i)
                        })
                });

                when('user clicks Yes', () => {
                        expect(container.getByRole("button", { name: /Update/i })).toBeInTheDocument()
                        fireEvent.click(container.getByRole("button", { name: /Update/i }))
                });

                then('user should see Password has been updated success message Password changed successfully', async () => {
                        container = await renderLogin()
                });

                then('user must recieve the alert in preferred mode of communication  on password change', () => {
                        defaultValidation();
                });
        });
})