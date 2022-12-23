import { act, cleanup, fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { Provider } from "react-redux";
import store from "../../../src/store/store";
import AccountUpdatePasswordPage from "../../../src/pages/patient/account/update-password";

describe("Render change password", () => {
    let container;
    const mock = new MockAdapter(axios);
    const renderUpdatePasswordPage = async (wait = /New Password/i) => {
        act(() => {
            container = render(
                <Provider store={store}>
                    {AccountUpdatePasswordPage.getLayout(<AccountUpdatePasswordPage />)}
                </Provider>
            );
        });
        await waitFor(() => container.getAllByText(wait));
    };

    beforeEach(() => {
        Object.defineProperty(document, "cookie", {
            writable: true,
            value: "authorized=true;accessToken=1234",
        });
    })

    test('confirm password not match', async () => {
        mock
            .onPost(`/ecp/patient/settings/validatePassword`)
            .reply(400, {
                "responseCode": 2001,
                "responseType": " Password is invalid"
            });

        await renderUpdatePasswordPage()
        const newPassField = container.container.querySelector('#new-password');
        fireEvent.change(newPassField, { target: { value: "Password@123" } });
        const confPassField = container.container.querySelector('#confirm-password');
        fireEvent.change(confPassField, { target: { value: "Password" } });

        setTimeout(() => {
            fireEvent.click(container.getByTestId("update-btn"))
        }, 500);
        await waitFor(() => {
            container.getByText(/Passwords do not match/i)
        })
        expect(container.getByText(/Passwords do not match/i)).toBeInTheDocument()
    })

    test('confirm password not meet requirement', async () => {
        mock
            .onPost(`/ecp/patient/settings/validatePassword`)
            .reply(400, {
                "responseCode": 2001,
                "responseType": " Password is invalid"
            });

        await renderUpdatePasswordPage()
        const newPassField = container.container.querySelector('#new-password');
        fireEvent.change(newPassField, { target: { value: "Pa" } });
        const confPassField = container.container.querySelector('#confirm-password');
        fireEvent.change(confPassField, { target: { value: "Pa" } });

        setTimeout(() => {
            fireEvent.click(container.getByTestId("update-btn"))
        }, 500);
        await waitFor(() => {
            container.getAllByText(/Password does not meet requirements/i)
        })
        expect(container.getAllByText(/Password does not meet requirements/i)[0]).toBeInTheDocument()
    })

    test('password same with current password', async () => {
        mock
            .onPost(`/ecp/patient/settings/validatePassword`)
            .reply(200, {
                "responseCode": 2000,
                "responseType": "success"
            });

        await renderUpdatePasswordPage()
        const newPassField = container.container.querySelector('#new-password');
        fireEvent.change(newPassField, { target: { value: "Admin@123" } });
        const confPassField = container.container.querySelector('#confirm-password');
        fireEvent.change(confPassField, { target: { value: "Admin@123" } });

        setTimeout(() => {
            fireEvent.click(container.getByTestId("update-btn"))
        }, 500);
        await waitFor(() => {
            container.getAllByText(/Password does not meet requirements/i)
        })
        expect(container.getAllByText(/Password does not meet requirements/i)[0]).toBeInTheDocument()
    })

    test('close modal', async () => {
        mock
            .onPost(`/ecp/patient/settings/validatePassword`)
            .reply(400, {
                "responseCode": 2001,
                "responseType": " Password is invalid"
            });

        await renderUpdatePasswordPage()
        const newPassField = container.container.querySelector('#new-password');
        fireEvent.change(newPassField, { target: { value: "Password@123" } });
        const confPassField = container.container.querySelector('#confirm-password');
        fireEvent.change(confPassField, { target: { value: "Password@123" } });

        setTimeout(() => {
            fireEvent.click(container.getByTestId("update-btn"))
        }, 500);
        await waitFor(() => {
            container.getAllByText(/Are you sure to change password?/i)[0]
        })
        fireEvent.click(container.getByRole("button", { name: /Cancel/i }))
    })

    test('close modal', async () => {
        mock
            .onPost(`/ecp/patient/settings/validatePassword`)
            .reply(400, {
                "responseCode": 2001,
                "responseType": " Password is invalid"
            });

        await renderUpdatePasswordPage()
        const newPassField = container.container.querySelector('#new-password');
        fireEvent.change(newPassField, { target: { value: "Password@123" } });
        const confPassField = container.container.querySelector('#confirm-password');
        fireEvent.change(confPassField, { target: { value: "Password@123" } });

        setTimeout(() => {
            fireEvent.click(container.getByTestId("update-btn"))
        }, 500);
        await waitFor(() => {
            container.getAllByText(/Are you sure to change password?/i)[0]
        })
        fireEvent.click(container.getByTestId("custom-modal-close-btn"))
    })
})