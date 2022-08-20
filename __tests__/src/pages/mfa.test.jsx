import { render, fireEvent, act, waitFor } from "@testing-library/react";
import MfaPage, { getServerSideProps } from '../../../src/pages/patient/mfa';
import Cookies from "universal-cookie";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

jest.mock("universal-cookie", () => {
    class MockCookies {
      static result = {};
      get(param) {
        if (param === "username") return "user1@photon.com"

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
        const contex = {
            req: {
                headers: {
                    cookie: "username=user1%40photon.com; mfa=true"
                }
            }
        }
        mock.onGet(`https://api.ipify.org?format=json`).reply(200, {ip: "10.10.10.10"});

        getServerSideProps(contex)
        container = render(<MfaPage />)
        await waitFor(() => container.getByText("communicationMethodTitle"));

    });

    test("is set MFA page render", () => {
        const title = container.getByText("setMFATitle");
        expect("setMFATitle").toEqual(title.textContent);
    });

    test("is confirm button clicked", async () => {
        const confirmButton = container.getByRole("button", { name: /confrimBtn/i });
        fireEvent.click(confirmButton)

        await waitFor(() => container.getByText("mfaTitle"))

        const title = container.getByText("mfaTitle");
        expect("mfaTitle").toEqual(title.textContent);
    });

    test("is onResendCode button clicked", async () => {
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
        const confirmButton = container.getByRole("button", { name: /confrimBtn/i });
        fireEvent.click(confirmButton)

        await waitFor(() => container.getByRole("button", { name: /submitBtn/i }))

        const mfaField = container.getByLabelText("mfaLabel");
        fireEvent.change(mfaField, { target: { value: "1234" } });

        const submitButton = container.getByRole("button", { name: /submitBtn/i });
        fireEvent.click(submitButton)

        await waitFor(() => container.getByText("mfaTitle"))

        const title = container.getByText("mfaTitle");
        expect("mfaTitle").toEqual(title.textContent);
    })

    test("is submit button clicked with remember me", async () => {
        const confirmButton = container.getByRole("button", { name: /confrimBtn/i });
        fireEvent.click(confirmButton)

        await waitFor(() => container.getByRole("button", { name: /submitBtn/i }))

        const remeberMe = container.getByText("rememberMeLabel");
        fireEvent.click(remeberMe);

        const mfaField = container.getByLabelText("mfaLabel");
        fireEvent.change(mfaField, { target: { value: "1234" } });

        const submitButton = container.getByRole("button", { name: /submitBtn/i });
        fireEvent.click(submitButton)

        await waitFor(() => container.getByText("mfaTitle"))

        const title = container.getByText("mfaTitle");
        expect("mfaTitle").toEqual(title.textContent);
    })

    test("is submit button clicked with new mfa code", async () => {
        const confirmButton = container.getByRole("button", { name: /confrimBtn/i });
        fireEvent.click(confirmButton)

        await waitFor(() => container.getByRole("button", { name: /resendCodeBtn/i }))

        const resendCodeButton = container.getByRole("button", { name: /resendCodeBtn/i });
        fireEvent.click(resendCodeButton)

        await waitFor(() => container.getByRole("button", { name: /submitBtn/i }))

        const mfaField = container.getByLabelText("mfaLabel");
        fireEvent.change(mfaField, { target: { value: "4321" } });

        const submitButton = container.getByRole("button", { name: /submitBtn/i });
        fireEvent.click(submitButton)

        const title = container.getByText("mfaTitle");
        expect("mfaTitle").toEqual(title.textContent);
    })

    test("is submit button clicked wrong mfa", async () => {
        const confirmButton = container.getByRole("button", { name: /confrimBtn/i });
        fireEvent.click(confirmButton)

        await waitFor(() => container.getByRole("button", { name: /submitBtn/i }))

        const mfaField = container.getByLabelText("mfaLabel");
        fireEvent.change(mfaField, { target: { value: "7788" } });

        const submitButton = container.getByRole("button", { name: /submitBtn/i });
        fireEvent.click(submitButton)

        await waitFor(() => container.getByText("mfaFailedTitle"))

        const errorTitle = container.getByText("mfaFailedTitle");
        expect("mfaFailedTitle").toEqual(errorTitle.textContent);
    })


    test("is back to login clicked", () => {
        const confirmButton = container.getByRole("button", { name: /backToLoginBtn/i });
        fireEvent.click(confirmButton)
    });

});
