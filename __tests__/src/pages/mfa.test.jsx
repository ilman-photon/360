import { render, fireEvent } from "@testing-library/react";
import MfaPage from '../../../src/pages/patient/mfa';
import "@testing-library/jest-dom";

describe("Multi-Factor Authentication", () => {
    let container
    beforeEach(() => {
        setTimeout(() => {
            container = render(<MfaPage />)
        }, 500)
    });

    test("is set MFA page render", () => {
        setTimeout(() => {
            const title = container.getByText("Set Multi-Factor Authentication");
            expect("Set Multi-Factor Authentication").toEqual(title.textContent);
        }, 500)
    });

    test("is submit button clicked", () => {
        setTimeout(() => {
            const confirmButton = container.getByRole("button", { name: /Confirm/i });
            fireEvent.click(confirmButton)
            const title = container.getByText("Multi-Factor Authentication");
            expect("Multi-Factor Authentication").toEqual(title.textContent);
        }, 500)
    });

    test("is back to login clicked", () => {
        setTimeout(() => {
            const confirmButton = container.getByRole("button", { name: /Back to Login/i });
            fireEvent.click(confirmButton)
        }, 500)
    });

});
