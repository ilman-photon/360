import { render, fireEvent } from "@testing-library/react";
import MfaPage from '../../../src/pages/patient/mfa';
import "@testing-library/jest-dom";

describe("Multi-Factor Authentication", () => {
    let container
    beforeEach(() => {
        container = render(<MfaPage />)
    });

    test("is set MFA page render", () => {
        const title = container.getByText("Set Multi-Factor Authentication");
        expect("Set Multi-Factor Authentication").toEqual(title.textContent);
    });

    test("is submit button clicked", () => {
        const confirmButton = container.getByRole("button", { name: /Confirm/i });
        fireEvent.click(confirmButton)
        const title = container.getByText("Multi-Factor Authentication");
        expect("Multi-Factor Authentication").toEqual(title.textContent);
    });

    test("is back to login clicked", () => {
        const confirmButton = container.getByRole("button", { name: /Back to Login/i });
        fireEvent.click(confirmButton)
    });

});
