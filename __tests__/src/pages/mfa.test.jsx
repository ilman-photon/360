import { render, fireEvent, act, waitFor } from "@testing-library/react";
import MfaPage, { getServerSideProps } from '../../../src/pages/patient/mfa';
import Cookies from "universal-cookie";
import "@testing-library/jest-dom";

describe("Multi-Factor Authentication", () => {
    let container
    beforeEach(async () => {
        const contex = {
            req: {
                headers: {
                    cookie: "username=user1%40photon.com; mfa=true"
                }
            }
        }

        getServerSideProps(contex)
        container = render(<MfaPage />)
        await waitFor(() => container.getByText("Set Multi-Factor Authentication"));

    });

    test("is set MFA page render", () => {
        const title = container.getByText("Set Multi-Factor Authentication");
        expect("Set Multi-Factor Authentication").toEqual(title.textContent);
    });

    test("is confirm button clicked", async () => {
        const confirmButton = container.getByRole("button", { name: /Confirm/i });
        fireEvent.click(confirmButton)

        await waitFor(() => container.getByText("Multi-Factor Authentication"))

        const title = container.getByText("Multi-Factor Authentication");
        expect("Multi-Factor Authentication").toEqual(title.textContent);
    });

    test("is onResendCode button clicked", async () => {
        const confirmButton = container.getByRole("button", { name: /Confirm/i });
        fireEvent.click(confirmButton)

        await waitFor(() => container.getByRole("button", { name: /Resend Code/i }))

        const resendCodeButton = container.getByRole("button", { name: /Resend Code/i });
        fireEvent.click(resendCodeButton)

        await waitFor(() => container.getByText("Multi-Factor Authentication"))

        const title = container.getByText("Multi-Factor Authentication");
        expect("Multi-Factor Authentication").toEqual(title.textContent);
    })

    test("is submit button clicked", async () => {
        const confirmButton = container.getByRole("button", { name: /Confirm/i });
        fireEvent.click(confirmButton)

        await waitFor(() => container.getByRole("button", { name: /Submit/i }))

        const mfaField = container.getByLabelText("Enter Code");
        fireEvent.change(mfaField, { target: { value: "1234" } });

        const submitButton = container.getByRole("button", { name: /Submit/i });
        fireEvent.click(submitButton)

        await waitFor(() => container.getByText("Multi-Factor Authentication"))

        const title = container.getByText("Multi-Factor Authentication");
        expect("Multi-Factor Authentication").toEqual(title.textContent);
    })

    test("is submit button clicked with remember me", async () => {
        const confirmButton = container.getByRole("button", { name: /Confirm/i });
        fireEvent.click(confirmButton)

        await waitFor(() => container.getByRole("button", { name: /Submit/i }))

        const remeberMe = container.getByText("Remember me");
        fireEvent.click(remeberMe);

        const mfaField = container.getByLabelText("Enter Code");
        fireEvent.change(mfaField, { target: { value: "1234" } });

        const submitButton = container.getByRole("button", { name: /Submit/i });
        fireEvent.click(submitButton)

        await waitFor(() => container.getByText("Multi-Factor Authentication"))

        const title = container.getByText("Multi-Factor Authentication");
        expect("Multi-Factor Authentication").toEqual(title.textContent);
    })

    test("is submit button clicked with new mfa code", async () => {
        const confirmButton = container.getByRole("button", { name: /Confirm/i });
        fireEvent.click(confirmButton)

        await waitFor(() => container.getByRole("button", { name: /Resend Code/i }))

        const resendCodeButton = container.getByRole("button", { name: /Resend Code/i });
        fireEvent.click(resendCodeButton)

        await waitFor(() => container.getByRole("button", { name: /Submit/i }))

        const mfaField = container.getByLabelText("Enter Code");
        fireEvent.change(mfaField, { target: { value: "4321" } });

        const submitButton = container.getByRole("button", { name: /Submit/i });
        fireEvent.click(submitButton)

        const title = container.getByText("Multi-Factor Authentication");
        expect("Multi-Factor Authentication").toEqual(title.textContent);
    })

    test("is submit button clicked wrong mfa", async () => {
        const confirmButton = container.getByRole("button", { name: /Confirm/i });
        fireEvent.click(confirmButton)

        await waitFor(() => container.getByRole("button", { name: /Submit/i }))

        const mfaField = container.getByLabelText("Enter Code");
        fireEvent.change(mfaField, { target: { value: "7788" } });

        const submitButton = container.getByRole("button", { name: /Submit/i });
        fireEvent.click(submitButton)

        await waitFor(() => container.getByText("Incorrect Code."))

        const errorTitle = container.getByText("Incorrect Code.");
        expect("Incorrect Code.").toEqual(errorTitle.textContent);
    })


    test("is back to login clicked", () => {
        const confirmButton = container.getByRole("button", { name: /Back to Login/i });
        fireEvent.click(confirmButton)
    });

});
