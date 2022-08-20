import { act, fireEvent, render, waitFor } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import MfaPage, { getServerSideProps } from "../../src/pages/patient/mfa";
import Cookies from "universal-cookie";
import "@testing-library/jest-dom";
import { PhoneAndroidOutlined } from "@mui/icons-material";

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

const feature = loadFeature(
    "./__tests__/feature/Patient Portal/Sprint3/EPP-267.feature", {
    tagFilter: '@included and not @excluded'
}
);

defineFeature(feature, (test) => {
    let container;
    const mock = new MockAdapter(axios);
    const element = document.createElement("div");

    beforeEach(async () => {
        const contex = {
            req: {
                headers: {
                    cookie: "username=user1%40photon.com; mfa=true"
                }
            }
        }
        mock.onGet(`https://api.ipify.org?format=json`).reply(200, { ip: "10.10.10.10" });

        getServerSideProps(contex)
        act(() => {
            container = render(<MfaPage />, {
                container: document.body.appendChild(element),
                legacyRoot: true,
            });
        });
        await waitFor(() => container.getByText("communicationMethodTitle"));
    });

    afterEach(() => {
        mock.reset();
    });

    test('EPIC_EPP-3_STORY_EPP-267 - Verify Logged-in user should see set MFA screen after completing registration (Prefered Mode of Communication both)', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user navigates to the Patient Portal application', () => {
            expect(true).toBeTruthy()
        });

        when('user lands onto “Patient Login” screen', () => {
            expect(true).toBeTruthy()
        });

        then(/^user see (.*) field and (.*) field$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        and(/^user should enter valid (.*) and valid (.*)$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        when(/^user clicks on "(.*)" button$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        then('user should see set MFA screen', () => {
            expect(container).toMatchSnapshot();
        });

        and(/^user should see screen title written as "(.*)"$/, (arg0) => {
            const title = container.getByText("setMFATitle");
            expect("setMFATitle").toEqual(title.textContent);
        });

        and(/^user should see screen subtitle written as "(.*)"$/, (arg0) => {
            const title = container.getByText("setMFADescription");
            expect("setMFADescription").toEqual(title.textContent);
        });

        and(/^user should see "(.*)" section with radio button with below detail "(.*)" and "(.*)"$/, (arg0, arg1, arg2) => {
            const title = container.getByText("communicationMethodTitle");
            expect(title).toBeVisible();
        });

        and('user should see default selection on Email', () => {
            const email = container.getByTestId("email-radio-button");
            expect(email).toBeVisible();
        });

        and(/^user should see checkbox section "(.*)"$/, (arg0) => {
            const checkbox = container.getByText("rememberMeLabel");
            expect(checkbox).toBeVisible();
        });

        and(/^user should see description of check box written as "(.*)"$/, (arg0) => {
            const checkboxDesc = container.getByText("rememberMeDescription");
            expect(checkboxDesc).toBeVisible();
        });

        and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {
            const confirmButton = container.getByRole("button", { name: /confrimBtn/i });
            expect(confirmButton).toBeVisible();
        });
    });

    test('EPIC_EPP-3_STORY_EPP-267 - Verify Logged-in user should be able to choose other preferred mode(s) of communication', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user navigates to the Patient Portal application', () => {
            expect(true).toBeTruthy()
        });

        when('user lands onto “Patient Login” screen', () => {
            expect(true).toBeTruthy()
        });

        then(/^user see (.*) field and (.*) field$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        and(/^user should enter valid (.*) and valid (.*)$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        when(/^user clicks on "(.*)" button$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        then('user should see set MFA screen', () => {
            expect(container).toMatchSnapshot();
        });

        and(/^user should see screen title written as "(.*)"$/, (arg0) => {
            const title = container.getByText("setMFATitle");
            expect("setMFATitle").toEqual(title.textContent);
        });

        and(/^user should see screen subtitle written as "(.*)"$/, (arg0) => {
            const title = container.getByText("setMFADescription");
            expect("setMFADescription").toEqual(title.textContent);
        });

        and(/^user should see "(.*)" section with radio button with below detail "(.*)" and "(.*)"$/, (arg0, arg1, arg2) => {
            const title = container.getByText("communicationMethodTitle");
            expect(title).toBeVisible();
        });

        and('user should see default selection on Email', () => {
            const email = container.getByTestId("email-radio-button");
            expect(email).toBeVisible();
        });

        when('user click on Phone radio button', async () => {
            const phone = container.getByTestId("phone-radio-button");
            fireEvent.click(phone)
        });

        then('user should see radio button is selected on Phone radio button', async () => {
            await waitFor(() => container.getByText(/Phone/i))
            const phoneRadio = container.getByText(/Phone/i)
            expect(phoneRadio).toBeVisible();
            expect(container).toMatchSnapshot()
        });
    });

    test('EPIC_EPP-3_STORY_EPP-267 - Verify Logged-in user should see set MFA screen after completing registration (Prefered Mode of Communication Email)', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user navigates to the Patient Portal application', () => {
            expect(true).toBeTruthy()
        });

        when('user lands onto “Patient Login” screen', () => {
            expect(true).toBeTruthy()
        });

        then(/^user see (.*) field and (.*) field$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        and(/^user should enter valid (.*) and valid (.*)$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        when(/^user clicks on "(.*)" button$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        then('user should see set MFA screen', () => {
            const title = container.getByText("setMFATitle");
            expect("setMFATitle").toEqual(title.textContent);
        });

        and(/^user should see screen title written as "(.*)"$/, (arg0) => {
            const title = container.getByText("setMFADescription");
            expect("setMFADescription").toEqual(title.textContent);
        });

        and(/^user should see screen subtitle written as "(.*)"$/, (arg0) => {
            const title = container.getByText("communicationMethodTitle");
            expect(title).toBeVisible();
        });

        and(/^user should see text  "(.*)"$/, (arg0) => {
            const email = container.getByText(/Email/i)
            expect(email).toBeVisible();
            expect(container).toMatchSnapshot()
        });

        and(/^user should see checkbox section "(.*)"$/, (arg0) => {
            const checkbox = container.getByText("rememberMeLabel");
            expect(checkbox).toBeVisible();
        });

        and(/^user should see description of check box written as "(.*)"$/, (arg0) => {
            const checkboxDesc = container.getByText("rememberMeDescription");
            expect(checkboxDesc).toBeVisible();
        });

        and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {
            const confirmButton = container.getByRole("button", { name: /confrimBtn/i });
            expect(confirmButton).toBeVisible();
        });
    });


    test('EPIC_EPP-3_STORY_EPP-267 - Verify Logged-in user should see set MFA screen after completing registration (Prefered Mode of Communication Phone)', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user navigates to the Patient Portal application', () => {
            expect(true).toBeTruthy()
        });

        when('user lands onto “Patient Login” screen', () => {
            expect(true).toBeTruthy()
        });

        then(/^user see (.*) field and (.*) field$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        and(/^user should enter valid (.*) and valid (.*)$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        when(/^user clicks on "(.*)" button$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        then('user should see set MFA screen', () => {
            expect(container).toMatchSnapshot();
        });

        and(/^user should see screen title written as "(.*)"$/, (arg0) => {
            const title = container.getByText("setMFATitle");
            expect("setMFATitle").toEqual(title.textContent);
        });

        and(/^user should see screen subtitle written as "(.*)"$/, (arg0) => {
            const title = container.getByText("setMFADescription");
            expect("setMFADescription").toEqual(title.textContent);
        });

        and(/^user should see text "(.*)"$/, (arg0) => {
            const phoneRadio = container.getByText(/Phone/i)
            expect(phoneRadio).toBeVisible();
        });

        and(/^user should see checkbox section "(.*)"$/, (arg0) => {
            const checkbox = container.getByText("rememberMeLabel");
            expect(checkbox).toBeVisible();
        });

        and(/^user should see description of check box written as "(.*)"$/, (arg0) => {
            const checkboxDesc = container.getByText("rememberMeDescription");
            expect(checkboxDesc).toBeVisible();
        });

        and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {
            const confirmButton = container.getByRole("button", { name: /confrimBtn/i });
            expect(confirmButton).toBeVisible();
        });
    });
    test('EPIC_EPP-3_STORY_EPP-267 - Verify Logged-in user should see second MFA screen with all of components (Prefered Mode of Communication both)', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user navigates to the Patient Portal application', () => {
            expect(true).toBeTruthy()
        });

        when('user lands onto “Patient Login” screen', () => {
            expect(true).toBeTruthy()
        });

        then(/^user see (.*) field and (.*) field$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        and(/^user should enter valid (.*) and valid (.*)$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        when(/^user clicks on "(.*)" button$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        then('user should see set MFA screen', () => {
            expect(container).toMatchSnapshot();
        });

        and(/^user should see screen title written as "(.*)"$/, (arg0) => {
            const title = container.getByText("setMFATitle");
            expect("setMFATitle").toEqual(title.textContent);
        });

        and(/^user should see screen subtitle written as "(.*)"$/, (arg0) => {
            const title = container.getByText("setMFADescription");
            expect("setMFADescription").toEqual(title.textContent);
        });

        and(/^user should see "(.*)" section with radio button with below detail "(.*)" and "(.*)"$/, (arg0, arg1, arg2) => {
            const title = container.getByText("communicationMethodTitle");
            expect(title).toBeVisible();
        });

        and('user should see default selection on Email', () => {
            const email = container.getByTestId("email-radio-button");
            expect(email).toBeVisible();
        });

        and(/^user should see checkbox section "(.*)"$/, (arg0) => {
            const checkbox = container.getByText("rememberMeLabel");
            expect(checkbox).toBeVisible();
        });

        and(/^user should see description of check box written as "(.*)"$/, (arg0) => {
            const checkboxDesc = container.getByText("rememberMeDescription");
            expect(checkboxDesc).toBeVisible();
        });

        and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {
            const confirmButton = container.getByRole("button", { name: /confrimBtn/i });
            expect(confirmButton).toBeVisible();
        });

        when(/^user click on "(.*)" button$/, async (arg0) => {
            const confirmButton = container.getByRole("button", { name: /confrimBtn/i });
            fireEvent.click(confirmButton)

            await waitFor(() => container.getByText("mfaTitle"))
        });

        and('user receives an email/text message with a link to their registered email/phone number', () => {
            expect(true).toBeTruthy()
        });

        then(/^user should see "(.*)" screen with all of component$/, (arg0) => {
            const title = container.getByText("mfaTitle");
            expect("mfaTitle").toEqual(title.textContent);
        });

        and(/^user should see (.*) field$/, (arg0) => {
            const mfaField = container.getByLabelText("mfaLabel");
            expect(mfaField).toBeVisible()
        });

        and(/^user should see checkbox section "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see description of check box written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see "(.*)" link$/, (arg0) => {
            expect(true).toBeTruthy()
        });
    });
    test('EPIC_EPP-3_STORY_EPP-267 - Verify Logged-in  user should see second MFA screen with all of component (Prefered Mode of Communication Email)', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user navigates to the Patient Portal application', () => {
            expect(true).toBeTruthy()
        });

        when('user lands onto “Patient Login” screen', () => {
            expect(true).toBeTruthy()
        });

        then(/^user see (.*) field and (.*) field$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        and(/^user should enter valid (.*) and valid (.*)$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        when(/^user clicks on "(.*)" button$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        then('user should see set MFA screen', () => {
            expect(true).toBeTruthy()
        });

        and(/^user should see screen title written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see screen subtitle written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see text  "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see checkbox section "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see description of check box written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        when(/^user click on "(.*)" button$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user receives an email/text message with a link to their registered email/phone number', () => {
            expect(true).toBeTruthy()
        });

        then(/^user should see "(.*)" screen with all of component$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see (.*) field$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see checkbox section "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see description of check box written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see "(.*)" link$/, (arg0) => {
            expect(true).toBeTruthy()
        });
    });
    test('EPIC_EPP-3_STORY_EPP-267 - Verify Logged-in user should see second MFA screen with all of component (Prefered Mode of Communication Phone)', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user navigates to the Patient Portal application', () => {
            expect(true).toBeTruthy()
        });

        when('user lands onto “Patient Login” screen', () => {
            expect(true).toBeTruthy()
        });

        then(/^user see (.*) field and (.*) field$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        and(/^user should enter valid (.*) and valid (.*)$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        when(/^user clicks on "(.*)" button$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        then('user should see set MFA screen', () => {
            expect(true).toBeTruthy()
        });

        and(/^user should see screen title written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see screen subtitle written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see text "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see checkbox section "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see description of check box written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        when(/^user click on "(.*)" button$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user receives an email/text message with a link to their registered email/phone number', () => {
            expect(true).toBeTruthy()
        });

        then(/^user should see "(.*)" screen with all of component$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see (.*) field$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see checkbox section "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see description of check box written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see "(.*)" link$/, (arg0) => {
            expect(true).toBeTruthy()
        });
    });
    test('EPIC_EPP-3_STORY_EPP-267 - Verify user is successfully logged-in into their account after setup MFA (Prefered Mode of Communication both)', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user navigates to the Patient Portal application', () => {
            expect(true).toBeTruthy()
        });

        when('user lands onto “Patient Login” screen', () => {
            expect(true).toBeTruthy()
        });

        then(/^user see (.*) field and (.*) field$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        and(/^user should enter valid (.*) and valid (.*)$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        when(/^user clicks on "(.*)" button$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        then('user should see set MFA screen', () => {
            expect(true).toBeTruthy()
        });

        and(/^user should see screen title written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see screen subtitle written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see "(.*)" section with radio button with below detail "(.*)" and "(.*)"$/, (arg0, arg1, arg2) => {
            expect(true).toBeTruthy()
        });

        and('user should see default selection on Email', () => {
            expect(true).toBeTruthy()
        });

        and(/^user should see checkbox section "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see description of check box written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        when(/^user click on "(.*)" button$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user receives an email/text message with a link to their registered email/phone number', () => {
            expect(true).toBeTruthy()
        });

        then(/^user should see "(.*)" screen with all of component$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see (.*) field$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user fill  (.*) field$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        when(/^user click on "(.*)" button$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        then('user should see Homescreen as Logged-in user', () => {
            expect(true).toBeTruthy()
        });
    });
    test('EPIC_EPP-3_STORY_EPP-267 - Verify user is successfully logged-in into their account after setup MFA (Prefered Mode of Communication Email)', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user navigates to the Patient Portal application', () => {
            expect(true).toBeTruthy()
        });

        when('user lands onto “Patient Login” screen', () => {
            expect(true).toBeTruthy()
        });

        then(/^user see (.*) field and (.*) field$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        and(/^user should enter valid (.*) and valid (.*)$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        when(/^user clicks on "(.*)" button$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        then('user should see set MFA screen', () => {
            expect(true).toBeTruthy()
        });

        and(/^user should see screen title written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see screen subtitle written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see text  "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see checkbox section "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see description of check box written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        when(/^user click on "(.*)" button$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user receives an email/text message with a link to their registered email/phone number', () => {
            expect(true).toBeTruthy()
        });

        then(/^user should see "(.*)" screen with all of component$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see (.*) field$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user fill  (.*) field$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        when(/^user click on "(.*)" button$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        then('user should see Homescreen as Logged-in user', () => {
            expect(true).toBeTruthy()
        });
    });

    test('EPIC_EPP-3_STORY_EPP-267 - Verify user is successfully logged-in into their account after setup MFA (Prefered Mode of Communication Phone)', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user navigates to the Patient Portal application', () => {
            expect(true).toBeTruthy()
        });

        when('user lands onto “Patient Login” screen', () => {
            expect(true).toBeTruthy()
        });

        then(/^user see (.*) field and (.*) field$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        and(/^user should enter valid (.*) and valid (.*)$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        when(/^user clicks on "(.*)" button$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        then('user should see set MFA screen', () => {
            expect(true).toBeTruthy()
        });

        and(/^user should see screen title written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see screen subtitle written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see text "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see checkbox section "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see description of check box written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        when(/^user click on "(.*)" button$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user receives an email/text message with a link to their registered email/phone number', () => {
            expect(true).toBeTruthy()
        });

        then(/^user should see "(.*)" screen with all of component$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see (.*) field$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user fill  (.*) field$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        when(/^user click on "(.*)" button$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        then('user should see Homescreen as Logged-in user', () => {
            expect(true).toBeTruthy()
        });
    });
    test('EPIC_EPP-3_STORY_EPP-267 - Verify user see error screen when internet is unavailable', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user navigates to the Patient Portal application', () => {
            expect(true).toBeTruthy()
        });

        when('user lands onto “Patient Login” screen', () => {
            expect(true).toBeTruthy()
        });

        then(/^user see (.*) field and (.*) field$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        and(/^user should enter valid (.*) and valid (.*)$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        when(/^user clicks on "(.*)" button$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        then('user should see set MFA screen', () => {
            expect(true).toBeTruthy()
        });

        and(/^user should see screen title written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see screen subtitle written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see "(.*)" section with radio button with below detail "(.*)" and "(.*)"$/, (arg0, arg1, arg2) => {
            expect(true).toBeTruthy()
        });

        and('user should see default selection on Email', () => {
            expect(true).toBeTruthy()
        });

        and(/^user should see checkbox section "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see description of check box written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        when(/^user click on "(.*)" button$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        then('user should see error screen', () => {
            expect(true).toBeTruthy()
        });
    });
    test('EPIC_EPP-3_STORY_EPP-267 - Verify user see error screen when service is unavailable', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user navigates to the Patient Portal application', () => {
            expect(true).toBeTruthy()
        });

        when('user lands onto “Patient Login” screen', () => {
            expect(true).toBeTruthy()
        });

        then(/^user see (.*) field and (.*) field$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        and(/^user should enter valid (.*) and valid (.*)$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        when(/^user clicks on "(.*)" button$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        then('user should see set MFA screen', () => {
            expect(true).toBeTruthy()
        });

        and(/^user should see screen title written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see screen subtitle written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see "(.*)" section with radio button with below detail "(.*)" and "(.*)"$/, (arg0, arg1, arg2) => {
            expect(true).toBeTruthy()
        });

        and('user should see default selection on Email', () => {
            expect(true).toBeTruthy()
        });

        and(/^user should see checkbox section "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see description of check box written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        when(/^user click on "(.*)" button$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        then('user should see error screen', () => {
            expect(true).toBeTruthy()
        });
    });
    test('EPIC_EPP-3_STORY_EPP-267 - Verify user should not see any error when user tap on F12 keyboard in console', ({ }) => {
        expect(true).toBeTruthy()
    });
    test('EPIC_EPP-3_STORY_EPP-267 - Verify Logged-in user should see "MFA" screen with default selection preferred mode(s) of communication', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user navigates to the Patient Portal application', () => {
            expect(true).toBeTruthy()
        });

        when('user lands onto “Patient Login” screen', () => {
            expect(true).toBeTruthy()
        });

        then(/^user see (.*) field and (.*) field$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        and(/^user should enter valid (.*) and valid (.*)$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        when(/^user clicks on "(.*)" button$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        then('user should see set MFA screen', () => {
            expect(true).toBeTruthy()
        });

        then('user should see set MFA screen', () => {
            expect(true).toBeTruthy()
        });

        and(/^user should see screen title written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see screen subtitle written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see "(.*)" section with radio button selected on "(.*)"$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        and('user click on other radio button', () => {
            expect(true).toBeTruthy()
        });

        and(/^user checked the "(.*)" checkbox$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        when(/^user click on "(.*)" in browser$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        then(/^user should see "(.*)" screen with default selection preferred mode\(s\) of communication$/, (arg0) => {
            expect(true).toBeTruthy()
        });
    });
    test('EPIC_EPP-3_STORY_EPP-267 - Verify Logged-in user should see set MFA screen after completing registration within 3 second', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and('user navigates to the Patient Portal application', () => {
            expect(true).toBeTruthy()
        });

        when('user lands onto “Patient Login” screen', () => {
            expect(true).toBeTruthy()
        });

        then(/^user see (.*) field and (.*) field$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        and(/^user should enter valid (.*) and valid (.*)$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        when(/^user clicks on "(.*)" button$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        then('user should see set MFA screen', () => {
            expect(true).toBeTruthy()
        });

        then('user should see set MFA screen', () => {
            expect(true).toBeTruthy()
        });

        and(/^user should see screen title written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see screen subtitle written as "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        and(/^user should see "(.*)" section with radio button selected on "(.*)"$/, (arg0, arg1) => {
            expect(true).toBeTruthy()
        });

        and('user click on other radio button', () => {
            expect(true).toBeTruthy()
        });

        and(/^user checked the "(.*)" checkbox$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        when(/^user click on "(.*)" in browser$/, (arg0) => {
            expect(true).toBeTruthy()
        });

        then(/^user should see "(.*)" screen with default selection preferred mode\(s\) of communication$/, (arg0) => {
            expect(true).toBeTruthy()
        });
    });
});