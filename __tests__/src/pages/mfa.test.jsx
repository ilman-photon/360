import { render, fireEvent, waitFor } from "@testing-library/react";
import MfaPage from '../../../src/pages/patient/mfa';
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import Cookies from "universal-cookie";

jest.mock("universal-cookie", () => {
    class MockCookies {
        static result = {};
        get(param) {
            if (param === "username") return "user1@photon.com"
            if (param === "ip") return "10.10.10.10"
            return MockCookies.result;
        }
        remove() {
            return jest.fn();
        }
        set() {
            return jest.fn();
        }
    }
    return MockCookies;
});

describe("Multi-Factor Authentication", () => {
    const mock = new MockAdapter(axios);
    let container
    beforeEach(async () => {
        Cookies.result = { mfa: true };

        const userData = {
            "communicationMethod": {
                "email": "user1@photon.com",
                "phone": "9998887772"
            },
            "ResponseCode": 4000,
            "ResponseType": "success",
        }

        mock.onPost(`/ecp/patient/mfa/getUserData`).reply(200, userData);

        container = render(<MfaPage />)
        await waitFor(() => container.getByText("communicationMethodTitle"));

    });

    test("is set MFA page render", () => {
        const title = container.getByText("setMFATitle");
        expect("setMFATitle").toEqual(title.textContent);
    });

    test("is confirm button clicked", async () => {
        const data = {
            "mfaCode": 660927,
            "ResponseCode": 4000,
            "ResponseType": "success"
        }
        mock.onPost(`/ecp/patient/mfa/sendotp`).reply(200, data);
        const confirmButton = container.getByRole("button", { name: /confrimBtn/i });
        fireEvent.click(confirmButton)

        await waitFor(() => container.getByText("mfaTitle"))

        const title = container.getByText("mfaTitle");
        expect("mfaTitle").toEqual(title.textContent);
    });

    test("is onResendCode button clicked", async () => {
        const data = {
            "mfaCode": 123456,
            "ResponseCode": 4000,
            "ResponseType": "success"
        }
        mock.onPost(`/ecp/patient/mfa/sendotp`).reply(200, data);
        const confirmButton = container.getByRole("button", { name: /confrimBtn/i });
        fireEvent.click(confirmButton)

        await waitFor(() => container.getByRole("button", { name: /resendCodeBtn/i }))

        const resendCodeButton = container.getByRole("button", { name: /resendCodeBtn/i });
        fireEvent.click(resendCodeButton)

        await waitFor(() => container.getByText("mfaTitle"))

        const title = container.getByText("mfaTitle");
        expect("mfaTitle").toEqual(title.textContent);
    })

    test("is submit button clicked", async () => {
        const data = {
            "ResponseCode": 4000,
            "ResponseType": "success"
        }
        mock.onPost(`/ecp/patient/mfa/verifyotp`).reply(200, data);
        const confirmButton = container.getByRole("button", { name: /confrimBtn/i });
        fireEvent.click(confirmButton)

        await waitFor(() => container.getByRole("button", { name: /submitBtn/i }))

        const mfaField = container.getByLabelText("mfaLabel");
        fireEvent.change(mfaField, { target: { value: "123456" } });

        const submitButton = container.getByRole("button", { name: /submitBtn/i });
        fireEvent.click(submitButton)

        await waitFor(() => container.getByText("mfaTitle"))

        const title = container.getByText("mfaTitle");
        expect("mfaTitle").toEqual(title.textContent);
    })

    test("is submit button clicked with remember me", async () => {
        const data = {
            "ResponseCode": 4000,
            "ResponseType": "success",
            "mfaAccessToken": "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InVzZXIzQHBob3Rvbi5jb20iLCJzdWIiOiJ1c2VyM0BwaG90b24uY29tIiwianRpIjoiMDBkMDhkYmMtMWQwYy00MTRlLTliN2EtNDdhNmI1MTY5MjYyIiwiaWF0IjoxNjYwODE3MjQwLCJleHAiOjE2Njg1OTMyNDB9.ALpmECst225hVk6X1d6QZutKN-Ykyl5pZ3K8LlIBmE4"
        }
        mock.onPost(`/ecp/patient/mfa/verifyotp`).reply(200, data);
        const confirmButton = container.getByRole("button", { name: /confrimBtn/i });
        fireEvent.click(confirmButton)

        await waitFor(() => container.getByRole("button", { name: /submitBtn/i }))

        const remeberMe = container.getByText("rememberMeLabel");
        fireEvent.click(remeberMe);

        const mfaField = container.getByLabelText("mfaLabel");
        fireEvent.change(mfaField, { target: { value: "123456" } });

        const submitButton = container.getByRole("button", { name: /submitBtn/i });
        fireEvent.click(submitButton)

        await waitFor(() => container.getByText("mfaTitle"))

        const title = container.getByText("mfaTitle");
        expect("mfaTitle").toEqual(title.textContent);
    })

    test("is submit button clicked with new mfa code", async () => {
        const data = {
            "mfaCode": 111111,
            "ResponseCode": 4000,
            "ResponseType": "success"
        }
        mock.onPost(`/ecp/patient/mfa/sendotp`).reply(200, data);
        const submitData = {
            "ResponseCode": 4000,
            "ResponseType": "success"
        }
        mock.onPost(`/ecp/patient/mfa/verifyotp`).reply(200, submitData);
        const confirmButton = container.getByRole("button", { name: /confrimBtn/i });
        fireEvent.click(confirmButton)

        await waitFor(() => container.getByRole("button", { name: /resendCodeBtn/i }))

        const resendCodeButton = container.getByRole("button", { name: /resendCodeBtn/i });
        fireEvent.click(resendCodeButton)

        await waitFor(() => container.getByRole("button", { name: /submitBtn/i }))

        const mfaField = container.getByLabelText("mfaLabel");
        fireEvent.change(mfaField, { target: { value: "111111" } });

        const submitButton = container.getByRole("button", { name: /submitBtn/i });
        fireEvent.click(submitButton)

        const title = container.getByText("mfaTitle");
        expect("mfaTitle").toEqual(title.textContent);
    })

    test("is submit button clicked wrong mfa", async () => {
        const data = {
            "mfaCode": 123456,
            "ResponseCode": 4000,
            "ResponseType": "success"
        }
        mock.onPost(`/ecp/patient/mfa/sendotp`).reply(200, data);
        const submitData = {
            "ResponseCode": 4002,
            "ResponseType": "Incorrect Code. Please try again"
        }
        mock.onPost(`/ecp/patient/mfa/verifyotp`).reply(200, submitData);
        const confirmButton = container.getByRole("button", { name: /confrimBtn/i });
        fireEvent.click(confirmButton)

        await waitFor(() => container.getByRole("button", { name: /submitBtn/i }))

        const mfaField = container.getByLabelText("mfaLabel");
        fireEvent.change(mfaField, { target: { value: "999999" } });

        const submitButton = container.getByRole("button", { name: /submitBtn/i });
        fireEvent.click(submitButton)

        await waitFor(() => container.getByText("mfaFailedTitle"))

        const errorTitle = container.getByText("mfaFailedTitle");
        expect("mfaFailedTitle").toEqual(errorTitle.textContent);
    })

    test("is submit button clicked locked", async () => {
        const data = {
            "mfaCode": 123456,
            "ResponseCode": 4000,
            "ResponseType": "success"
        }
        mock.onPost(`/ecp/patient/mfa/sendotp`).reply(200, data);
        const submitData = {
            "ResponseCode": 4003,
            "ResponseType": "Locked"
        }
        mock.onPost(`/ecp/patient/mfa/verifyotp`).reply(200, submitData);
        const confirmButton = container.getByRole("button", { name: /confrimBtn/i });
        fireEvent.click(confirmButton)

        await waitFor(() => container.getByRole("button", { name: /submitBtn/i }))

        const mfaField = container.getByLabelText("mfaLabel");
        fireEvent.change(mfaField, { target: { value: "999999" } });

        const submitButton = container.getByRole("button", { name: /submitBtn/i });
        fireEvent.click(submitButton)

        await waitFor(() => container.getByText("mfaLockTitle"))

        const errorTitle = container.getByText("mfaLockTitle");
        expect("mfaLockTitle").toEqual(errorTitle.textContent);
    })

    test("is onResendCode button catch", async () => {
        let data = {
            "mfaCode": 123456,
            "ResponseCode": 4000,
            "ResponseType": "success"
        }
        mock.onPost(`/ecp/patient/mfa/sendotp`).reply(200, data);
        const confirmButton = container.getByRole("button", { name: /confrimBtn/i });
        fireEvent.click(confirmButton)

        data = {
            "ResponseCode": 4001,
            "ResponseType": "Please try setting up MultiFactor Authentication after 30 minutes"
        }
        mock.onPost(`/ecp/patient/mfa/sendotp`).reply(400, data);

        await waitFor(() => container.getByRole("button", { name: /resendCodeBtn/i }))

        const resendCodeButton = container.getByRole("button", { name: /resendCodeBtn/i });
        fireEvent.click(resendCodeButton)

        await waitFor(() => container.getByText("mfaTitle"))

        const title = container.getByText("mfaTitle");
        expect("mfaTitle").toEqual(title.textContent);
    })

    test("is confirm button clicked catch", async () => {
        const data = {
            "ResponseCode": 4004,
            "ResponseType": "Please try setting up MultiFactor Authentication after 30 minutes"
        }
        mock.onPost(`/ecp/patient/mfa/sendotp`).reply(400, data);
        const confirmButton = container.getByRole("button", { name: /confrimBtn/i });
        fireEvent.click(confirmButton)

        await waitFor(() => container.getByText("Please try setting up MultiFactor Authentication after 30 minutes"))

        const title = container.getByText("setMFATitle");
        expect("setMFATitle").toEqual(title.textContent);
    });

    test("is back to login clicked", () => {
        const confirmButton = container.getByRole("button", { name: /backToLoginBtn/i });
        fireEvent.click(confirmButton)
    });
});

describe("Multi-Factor Authentication", () => {
    test("render with mfa cookie false", () => {
        const container = render(<MfaPage />)
    });
});
