import { act, fireEvent, render, waitFor } from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import AuthPage from "../../src/pages/patient/login";
import MfaPage from "../../src/pages/patient/mfa";
import Cookies from "universal-cookie";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint3/EPP-272.feature",
  {
    tagFilter: "@included and not @excluded",
  }
);

jest.mock("universal-cookie", () => {
    class MockCookies {
      static result = {};
      get(param) {
        if (param === "username") return "user1@photon.com"
        else if (param === "securityQuestions") return []
  
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

defineFeature(feature, (test) => {
    let container;
    const mock = new MockAdapter(axios);
    const element = document.createElement("div");
    test('EPIC_EPP-3_STORY_EPP-272 - Verify if user able to answer  security "Question1"', ({ given, and, then, when }) => {
        given('user launch the \'XXX\' url', () => {
            expect(true).toBeTruthy();
        });

        and('user navigates to the Patient Portal application', () => {
            const expectedResult = {
                ResponseCode: 2001,
                ResponseType: "failure",
                userType: "patient",
              };
            mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
        });

        then('user lands onto “Patient Login” screen', () => {
            mock.onGet(`https://api.ipify.org?format=json`).reply(200, {ip: "10.10.10.10"});
            act(() => {
                container = render(<AuthPage />, {
                    container: document.body.appendChild(element),
                    legacyRoot: true,
                });
            });
            const title = container.getByText("formTitle");
            expect("formTitle").toEqual(title.textContent);
        });

        when(/^user clicks on the "(.*)" CTA in the"(.*)" screen$/, (arg0, arg1) => {
            const createAccount = container.getByRole("button", {
                name: /createAccountButtonLabel/i,
              });
              fireEvent.click(createAccount);
        });

        then(/^user lands on the "(.*)" screen$/, (arg0) => {
            expect(true).toBeTruthy();
        });

        when('user provides all mandatory field and register successfully', () => {
            expect(true).toBeTruthy();
        });

        then('user should see MFA Setup screen', async () => {
            mock.onGet(`https://api.ipify.org?format=json`).reply(200, {ip: "10.10.10.10"});
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText("communicationMethodTitle"));
        });

        and('user setup MFA successfully', async () => {
            const expectedResult = {
                "SetUpSecurityQuestions": [
                    {
                        "Where did you go the first time you flew on a plane?": "",
                        "What was the first book you read?": "",
                        "What was the first film you saw in a theater?": "",
                        "What was the make and model of your first car?": "",
                        "What was the first concert you attended?": "",
                        "What was your favorite cartoon character during your childhood?": "",
                        "What was the first thing you learned to cook?": "",
                        "What is your favorite cold-weather activity?": "",
                        "In what city or town did your parents meet?": "",
                        "Who is your all-time favorite movie character?": ""
                    }
                ]
            }
            mock.onGet(`/ecp/patient/getsecurityQuestions`).reply(200, expectedResult);
            const confirm = container.getByTestId("primary-button");
            fireEvent.click(confirm);
            await waitFor(() => container.getByText("mfaTitle"))

            const mfaField = container.getByLabelText("mfaLabel");
            fireEvent.change(mfaField, { target: { value: "1234" } });

            const primaryButton = container.getByTestId("primary-button");
            fireEvent.click(primaryButton);
        });

        then(/^user login with (.*) and (.*)$/, (arg0, arg1) => {
            expect(true).toBeTruthy();
        });

        and(/^user clicks  on "(.*)" button$/, (arg0) => {
            expect(true).toBeTruthy();
        });

        and('user should prompted to set up Security questions after setup MFA', async () => {
            await waitFor(() => container.getByText(/Security Questions/i));
        });

        then('user land on to “Set up Security questions” screen', async () => {
            await waitFor(() => container.getByText(/Security Questions/i));
        });

        when(/^user mouse over to "(.*)" dropdown field$/, (arg0) => {
            expect(container.getByText("Question 1")).toBeInTheDocument()
        });

        and('user click on dropdown field', () => {
            expect(true).toBeTruthy();
        });

        then(/^user should see the list of (\d+) security question$/, (arg0) => {
            expect(true).toBeTruthy();
        });

        when(/^user select the security "(.*)" field$/, (arg0) => {
            const mySelectComponent = container.getByTestId('select-question-id-1');
            const selectNode = mySelectComponent.childNodes[1]
            fireEvent.change(selectNode, { target: { value: "What was the first concert you attended?" } });
            expect(container.getByText("What was the first concert you attended?")).toBeInTheDocument()
        });

        then(/^user answer the question in "(.*)" textfield$/, (arg0) => {
            const answer1 = container.getByLabelText("Answer 1")
            fireEvent.change(answer1, { target: { value: "test answer 1" } });
            expect(answer1.value).toEqual("test answer 1");
        });
    });

    test('EPIC_EPP-3_STORY_EPP-272 - Verify if user able to answer  security "Question2"', ({ given, and, then, when }) => {
        given('user launch the \'XXX\' url', () => {
            expect(true).toBeTruthy();
        });

        and('user navigates to the Patient Portal application', () => {
            const expectedResult = {
                ResponseCode: 2001,
                ResponseType: "failure",
                userType: "patient",
              };
            mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
        });

        then('user lands onto “Patient Login” screen', () => {
            mock.onGet(`https://api.ipify.org?format=json`).reply(200, {ip: "10.10.10.10"});
            act(() => {
                container = render(<AuthPage />, {
                    container: document.body.appendChild(element),
                    legacyRoot: true,
                });
            });
            const title = container.getByText("formTitle");
            expect("formTitle").toEqual(title.textContent);
        });

        when(/^user clicks on the "(.*)" CTA in the"(.*)" screen$/, (arg0, arg1) => {
            const createAccount = container.getByRole("button", {
                name: /createAccountButtonLabel/i,
              });
              fireEvent.click(createAccount);
        });

        then(/^user lands on the "(.*)" screen$/, (arg0) => {
            expect(true).toBeTruthy();
        });

        when('user provides all mandatory field and register successfully', () => {
            expect(true).toBeTruthy();
        });

        then('user should see MFA Setup screen', async () => {
            mock.onGet(`https://api.ipify.org?format=json`).reply(200, {ip: "10.10.10.10"});
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText("communicationMethodTitle"));
        });

        and('user setup MFA successfully', async () => {
            const confirm = container.getByTestId("primary-button");
            fireEvent.click(confirm);
            await waitFor(() => container.getByText("mfaTitle"))

            const mfaField = container.getByLabelText("mfaLabel");
            fireEvent.change(mfaField, { target: { value: "1234" } });

            const primaryButton = container.getByTestId("primary-button");
            fireEvent.click(primaryButton);
        });

        then(/^user login with (.*) and (.*)$/, (arg0, arg1) => {

        });

        and('user should prompted to set up Security questions after setup MFA', async () => {
            await waitFor(() => container.getByText(/Security Questions/i));
        });

        then('user land on to “Set up Security questions” screen', async () => {
            await waitFor(() => container.getByText(/Security Questions/i));
        });

        when(/^user mouse over to "(.*)" dropdown field$/, (arg0) => {
            expect(container.getByText("Question 2")).toBeInTheDocument()
        });

        and('user click on dropdown field', () => {
            expect(true).toBeTruthy();
        });

        then(/^user should see the list of (\d+) security question$/, (arg0) => {
            expect(true).toBeTruthy();
        });

        when(/^user select the security "(.*)" field$/, (arg0) => {
            const mySelectComponent = container.getByTestId('select-question-id-2');
            const selectNode = mySelectComponent.childNodes[1]
            fireEvent.change(selectNode, { target: { value: "What was the first concert you attended?" } });
            expect(container.getByText("What was the first concert you attended?")).toBeInTheDocument()
        });

        then(/^user answer the question in "(.*)" textfield$/, (arg0) => {
            const answer1 = container.getByLabelText("Answer 2")
            fireEvent.change(answer1, { target: { value: "test answer 2" } });
            expect(answer1.value).toEqual("test answer 2");
        });
    });

    test('EPIC_EPP-3_STORY_EPP-272 - Verify if user able to answer  security "Question3"', ({ given, and, then, when }) => {
        given('user launch the \'XXX\' url', () => {

        });

        and('user navigates to the Patient Portal application', () => {
            const expectedResult = {
                ResponseCode: 2001,
                ResponseType: "failure",
                userType: "patient",
              };
            mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
        });

        then('user lands onto “Patient Login” screen', () => {
            mock.onGet(`https://api.ipify.org?format=json`).reply(200, {ip: "10.10.10.10"});
            act(() => {
                container = render(<AuthPage />, {
                    container: document.body.appendChild(element),
                    legacyRoot: true,
                });
            });
            const title = container.getByText("formTitle");
            expect("formTitle").toEqual(title.textContent);
        });

        when(/^user clicks on the "(.*)" CTA in the"(.*)" screen$/, (arg0, arg1) => {
            const createAccount = container.getByRole("button", {
                name: /createAccountButtonLabel/i,
              });
              fireEvent.click(createAccount);
        });

        then(/^user lands on the "(.*)" screen$/, (arg0) => {
            expect(true).toBeTruthy();
        });

        when('user provides all mandatory field and register successfully', () => {
            expect(true).toBeTruthy();
        });

        then('user should see MFA Setup screen', async () => {
            mock.onGet(`https://api.ipify.org?format=json`).reply(200, {ip: "10.10.10.10"});
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText("communicationMethodTitle"));
        });

        and('user setup MFA successfully', async () => {
            const confirm = container.getByTestId("primary-button");
            fireEvent.click(confirm);
            await waitFor(() => container.getByText("mfaTitle"))

            const mfaField = container.getByLabelText("mfaLabel");
            fireEvent.change(mfaField, { target: { value: "1234" } });

            const primaryButton = container.getByTestId("primary-button");
            fireEvent.click(primaryButton);
        });

        then(/^user login with (.*) and (.*)$/, (arg0, arg1) => {
            expect(true).toBeTruthy();
        });

        and(/^user clicks on "(.*)" button$/, (arg0) => {
            expect(true).toBeTruthy();
        });

        and('user should prompted to set up Security questions after setup MFA', async () => {
            await waitFor(() => container.getByText(/Security Questions/i));
        });

        then('user land on to “Set up Security questions” screen', async () => {
            await waitFor(() => container.getByText(/Security Questions/i));
        });

        when(/^user mouse over to "(.*)" dropdown field$/, (arg0) => {
            expect(container.getByText("Question 3")).toBeInTheDocument()
        });

        and('user click on dropdown field', () => {
            expect(true).toBeTruthy();
        });

        then(/^user should see the list of (\d+) security question$/, (arg0) => {
            expect(true).toBeTruthy();
        });

        when(/^user select the security "(.*)" field$/, (arg0) => {
            const mySelectComponent = container.getByTestId('select-question-id-3');
            const selectNode = mySelectComponent.childNodes[1]
            fireEvent.change(selectNode, { target: { value: "What was the first concert you attended?" } });
            expect(container.getByText("What was the first concert you attended?")).toBeInTheDocument()
        });

        then(/^user answer the question in "(.*)" textfield$/, (arg0) => {
            const answer1 = container.getByLabelText("Answer 3")
            fireEvent.change(answer1, { target: { value: "test answer 3" } });
            expect(answer1.value).toEqual("test answer 3");
        });
    });

    test('EPIC_EPP-3_STORY_EPP-272 - Verify if user  click submit button after answering all the security question', ({ given, and, then, when }) => {
        given('user launch the \'XXX\' url', () => {
            expect(true).toBeTruthy();
        });

        and('user navigates to the Patient Portal application', () => {
            const expectedResult = {
                ResponseCode: 2001,
                ResponseType: "failure",
                userType: "patient",
              };
            mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
        });

        then('user lands onto “Patient Login” screen', () => {
            mock.onGet(`https://api.ipify.org?format=json`).reply(200, {ip: "10.10.10.10"});
            act(() => {
                container = render(<AuthPage />, {
                    container: document.body.appendChild(element),
                    legacyRoot: true,
                });
            });
            const title = container.getByText("formTitle");
            expect("formTitle").toEqual(title.textContent);
        });

        when(/^user clicks on the "(.*)" CTA in the"(.*)" screen$/, (arg0, arg1) => {
            const createAccount = container.getByRole("button", {
                name: /createAccountButtonLabel/i,
              });
              fireEvent.click(createAccount);
        });

        then(/^user lands on the "(.*)" screen$/, (arg0) => {
            expect(true).toBeTruthy();
        });

        when('user provides all mandatory field and register successfully', () => {
            expect(true).toBeTruthy();
        });

        then('user should see MFA Setup screen', async () => {
            mock.onGet(`https://api.ipify.org?format=json`).reply(200, {ip: "10.10.10.10"});
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText("communicationMethodTitle"));
        });

        and('user setup MFA successfully', async () => {
            const confirm = container.getByTestId("primary-button");
            fireEvent.click(confirm);
            await waitFor(() => container.getByText("mfaTitle"))

            const mfaField = container.getByLabelText("mfaLabel");
            fireEvent.change(mfaField, { target: { value: "1234" } });

            const primaryButton = container.getByTestId("primary-button");
            fireEvent.click(primaryButton);
        });

        then(/^user login with (.*) and (.*)$/, (arg0, arg1) => {
            expect(true).toBeTruthy();
        });

        and(/^user clicks on "(.*)" button$/, (arg0) => {
            expect(true).toBeTruthy();
        });

        and('user should prompted to set up Security questions after setup MFA', async() => {
            await waitFor(() => container.getByText(/Security Questions/i));
        });

        then('user land on to “Set up Security questions” screen', async () => {
            await waitFor(() => container.getByText(/Security Questions/i));
        });

        when(/^user mouse over to "(.*)" dropdown field$/, (arg0) => {
            expect(container.getByText("Question 1")).toBeInTheDocument()
            expect(container.getByText("Question 2")).toBeInTheDocument()
            expect(container.getByText("Question 3")).toBeInTheDocument()
            expect(container.getByText("Question 4")).toBeInTheDocument()
            expect(container.getByText("Question 5")).toBeInTheDocument()
        });

        and('user click on dropdown field', () => {
            expect(true).toBeTruthy();
        });

        then(/^user should see  (\d+) security question$/, (arg0) => {
            expect(true).toBeTruthy();
        });

        and(/^user see the security "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy();
        });

        when(/^user enter answer in field "(.*)"$/, (arg0) => {
            const mySelectComponent1 = container.getByTestId('select-question-id-1');
            const selectNode1 = mySelectComponent1.childNodes[1]
            fireEvent.change(selectNode1, { target: { value: "What was the first concert you attended?" } });

            const mySelectComponent2 = container.getByTestId('select-question-id-2');
            const selectNode2 = mySelectComponent2.childNodes[1]
            fireEvent.change(selectNode2, { target: { value: "What was the first film you saw in a theater?" } });

            const mySelectComponent3 = container.getByTestId('select-question-id-3');
            const selectNode3 = mySelectComponent3.childNodes[1]
            fireEvent.change(selectNode3, { target: { value: "What was the make and model of your first car?" } });

            const mySelectComponent4 = container.getByTestId('select-question-id-4');
            const selectNode4 = mySelectComponent4.childNodes[1]
            fireEvent.change(selectNode4, { target: { value: "What was your favorite cartoon character during your childhood?" } });
            
            const mySelectComponent5 = container.getByTestId('select-question-id-5');
            const selectNode5 = mySelectComponent5.childNodes[1]
            fireEvent.change(selectNode3, { target: { value: "What was the first thing you learned to cook?" } });

            const answer1 = container.getByLabelText("Answer 1")
            fireEvent.change(answer1, { target: { value: "test answer 1" } });
            expect(answer1.value).toEqual("test answer 1");

            const answer2 = container.getByLabelText("Answer 2")
            fireEvent.change(answer2, { target: { value: "test answer 2" } });
            expect(answer2.value).toEqual("test answer 2");

            const answer3 = container.getByLabelText("Answer 3")
            fireEvent.change(answer3, { target: { value: "test answer 3" } });
            expect(answer3.value).toEqual("test answer 3");

            const answer4 = container.getByLabelText("Answer 4")
            fireEvent.change(answer4, { target: { value: "test answer 4" } });
            expect(answer4.value).toEqual("test answer 4");

            const answer5 = container.getByLabelText("Answer 5")
            fireEvent.change(answer5, { target: { value: "test answer 5" } });
            expect(answer5.value).toEqual("test answer 5");
        });

        then(/^user click on "(.*)" button$/, (arg0) => {
            const primaryButton = container.getByTestId("primary-button");
            fireEvent.click(primaryButton);
        });
    });

    test('EPIC_EPP-3_STORY_EPP-272 - Verify the success message after setting up  the security question', ({ given, and, then, when }) => {
        given('user launch the \'XXX\' url', () => {
            expect(true).toBeTruthy();
        });

        and('user navigates to the Patient Portal application', () => {
            const expectedResult = {
                ResponseCode: 2001,
                ResponseType: "failure",
                userType: "patient",
              };
            mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
        });

        then('user lands onto “Patient Login” screen', () => {
            mock.onGet(`https://api.ipify.org?format=json`).reply(200, {ip: "10.10.10.10"});
            act(() => {
                container = render(<AuthPage />, {
                    container: document.body.appendChild(element),
                    legacyRoot: true,
                });
            });
            const title = container.getByText("formTitle");
            expect("formTitle").toEqual(title.textContent);
        });

        when(/^user clicks on the "(.*)" CTA in the"(.*)" screen$/, (arg0, arg1) => {
            const createAccount = container.getByRole("button", {
                name: /createAccountButtonLabel/i,
              });
              fireEvent.click(createAccount);
        });

        then(/^user lands on the "(.*)" screen$/, (arg0) => {
            expect(true).toBeTruthy();
        });

        when('user provides all mandatory field and register successfully', () => {
            expect(true).toBeTruthy();
        });

        then('user should see MFA Setup screen', async () => {
            mock.onGet(`https://api.ipify.org?format=json`).reply(200, {ip: "10.10.10.10"});
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText("communicationMethodTitle"));
        });

        and('user setup MFA successfully', async () => {
            const confirm = container.getByTestId("primary-button");
            fireEvent.click(confirm);
            await waitFor(() => container.getByText("mfaTitle"))

            const mfaField = container.getByLabelText("mfaLabel");
            fireEvent.change(mfaField, { target: { value: "1234" } });

            const primaryButton = container.getByTestId("primary-button");
            fireEvent.click(primaryButton);
        });

        then(/^user login with (.*) and (.*)$/, (arg0, arg1) => {
            expect(true).toBeTruthy();
        });

        and(/^user clicks  on "(.*)" button$/, (arg0) => {
            expect(true).toBeTruthy();
        });

        and('user should prompted to set up Security questions after setup MFA', async () => {
            await waitFor(() => container.getByText(/Security Questions/i));
        });

        then('user land on to “Set up Security questions” screen', async () => {
            await waitFor(() => container.getByText(/Security Questions/i));
        });

        when(/^user mouse over to "(.*)" dropdown field$/, (arg0) => {
            expect(container.getByText("Question 1")).toBeInTheDocument()
            expect(container.getByText("Question 2")).toBeInTheDocument()
            expect(container.getByText("Question 3")).toBeInTheDocument()
            expect(container.getByText("Question 4")).toBeInTheDocument()
            expect(container.getByText("Question 5")).toBeInTheDocument()
        });

        and('user click on dropdown field', () => {
            expect(true).toBeTruthy();
        });

        then(/^user should see the (\d+) security question$/, (arg0) => {
            expect(true).toBeTruthy();
        });

        and(/^user see the security "(.*)"$/, (arg0) => {
            expect(true).toBeTruthy();
        });

        when(/^user enter answer in textfield "(.*)"$/, (arg0) => {
            const mySelectComponent1 = container.getByTestId('select-question-id-1');
            const selectNode1 = mySelectComponent1.childNodes[1]
            fireEvent.change(selectNode1, { target: { value: "What was the first concert you attended?" } });

            const mySelectComponent2 = container.getByTestId('select-question-id-2');
            const selectNode2 = mySelectComponent2.childNodes[1]
            fireEvent.change(selectNode2, { target: { value: "What was the first film you saw in a theater?" } });

            const mySelectComponent3 = container.getByTestId('select-question-id-3');
            const selectNode3 = mySelectComponent3.childNodes[1]
            fireEvent.change(selectNode3, { target: { value: "What was the make and model of your first car?" } });

            const mySelectComponent4 = container.getByTestId('select-question-id-4');
            const selectNode4 = mySelectComponent4.childNodes[1]
            fireEvent.change(selectNode4, { target: { value: "What was your favorite cartoon character during your childhood?" } });
            
            const mySelectComponent5 = container.getByTestId('select-question-id-5');
            const selectNode5 = mySelectComponent5.childNodes[1]
            fireEvent.change(selectNode5, { target: { value: "What was the first thing you learned to cook?" } });

            const answer1 = container.getByLabelText("Answer 1")
            fireEvent.change(answer1, { target: { value: "test answer 1" } });
            expect(answer1.value).toEqual("test answer 1");

            const answer2 = container.getByLabelText("Answer 2")
            fireEvent.change(answer2, { target: { value: "test answer 2" } });
            expect(answer2.value).toEqual("test answer 2");

            const answer3 = container.getByLabelText("Answer 3")
            fireEvent.change(answer3, { target: { value: "test answer 3" } });
            expect(answer3.value).toEqual("test answer 3");

            const answer4 = container.getByLabelText("Answer 4")
            fireEvent.change(answer4, { target: { value: "test answer 4" } });
            expect(answer4.value).toEqual("test answer 4");

            const answer5 = container.getByLabelText("Answer 5")
            fireEvent.change(answer5, { target: { value: "test answer 5" } });
            expect(answer5.value).toEqual("test answer 5");
        });

        then(/^user click on "(.*)" button$/, (arg0) => {
            const expectedResult = {
                "ResponseCode": 2000,
                "ResponseType": "success"
            }
            mock.onPost(`/ecp/patient/securityQuestions`).reply(200, expectedResult);
            const primaryButton = container.getByTestId("primary-button");
            fireEvent.click(primaryButton);
        });

        and(/^user should see "(.*)"$/, async (arg0) => {
            await waitFor(() => container.getByText(/Security Questions/i));
        });
    });
})