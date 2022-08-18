import { act, fireEvent, render, waitFor } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import MfaPage, { getServerSideProps }  from "../../src/pages/patient/mfa";
import "@testing-library/jest-dom";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint3/EPP-1022.feature", {
    tagFilter: '@included and not @excluded'
  }
);

defineFeature(feature, (test) => {
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
    test('EPIC_EPP-3_STORY_EPP-1022-Existing-Verify user should be able to login from device that was set up with "Remember me" option selected, without being asked for MFA using registered mail-id', ({  }) => {
        test('"EPIC_EPP-3_STORY_EPP-1022-Existing-Verify user should be able to login from device that was set up with "Remember me" option selected, without being asked for MFA using registered mail-id"', ({ given, and, when, then }) => {
            let container, login;
            const mock = new MockAdapter(axios);
            const element = document.createElement("div");
            given(/^user launch the "(.*)" url$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            and('user navigates to the Patient Portal application', () => {
                const expectedResult = {
                    ResponseCode: 2001,
                    ResponseType: "failure",
                    userType: "patient",
                  };
                  mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
            });
    
            when(/^user lands onto "(.*)" screen$/, (arg0) => {
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  const title = container.getByText("formTitle");
                  expect("formTitle").toEqual(title.textContent);
            });
    
            then(/^user see (.*) and (.*) fields that was MFA was set up$/, (arg0, arg1) => {
                expect(true).toBeTruthy()
            });
    
            and(/^user should fill valid (.*) field with the email$/, (arg0) => {
                const inputFieldError = container.getByLabelText();
                expect(true).toBeTruthy()
            });
    
            and(/^user should fill valid (.*) field$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            and(/^user should see the "(.*)" option has been selected that Remember me has exipred$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            when(/^user clicks on "(.*)" button$/, (arg0) => {
                const confirmButton = container.getByRole("button", { name: /Confirm/i });
                fireEvent.click(confirmButton)
                const title = container.getByText("Multi-Factor Authentication");
                expect("Multi-Factor Authentication").toEqual(title.textContent);
            });
    
            then(/^user should see "(.*)" screen with all of component$/, (arg0) => {
                const title = container.getByText("Set Multi-Factor Authentication");
                expect("Set Multi-Factor Authentication").toEqual(title.textContent);
                    });
            
                    and(/^user should see (.*) field$/, (arg0) => {
                        const submissionMessage = container.getByTestId("mfaCode");
                        expect("Enter Code").toEqual(
                        submissionMessage.placeHolder
                        )
            });
    
            and(/^user should see checkbox section "(.*)"$/, (arg0) => {
                async () => {
                    const confirmButton = container.getByRole("button", { name: /Confirm/i });
                    fireEvent.click(confirmButton)
            
                    await waitFor(() => container.getByRole("button", { name: /Resend Code/i }))
            
                    const resendCodeButton = container.getByRole("button", { name: /Resend Code/i });
                    fireEvent.click(resendCodeButton)
            
                    await waitFor(() => container.getByText("Multi-Factor Authentication"))
            
                    const title = container.getByText("Multi-Factor Authentication");
                    expect("Multi-Factor Authentication").toEqual(title.textContent);
                }
            });
    
            and(/^user should see description of check box written as "(.*)"$/, (arg0) => {
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  const title = container.getByText("This means you won’t have to authenticate at every sign-in");
                  expect("formTitle").toEqual(title.textContent);
            });
    
            and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {
                expect(true).toBeTruthy()
            });
    
            when(/^user clicks on "(.*)" button$/, (arg0) => {
                const confirmButton = container.getByRole("button", { name: /Confirm/i });
                fireEvent.click(confirmButton)
                const resendCodeButton = container.getByRole("button", { name: /Resend Code/i });
                fireEvent.click(resendCodeButton)
                const title = container.getByText("Multi-Factor Authentication");
                expect("Multi-Factor Authentication").toEqual(title.textContent);
            });
    
            then('user receives an email/text message with the code to the email and mobile number', () => {
                expect(true).toBeTruthy()
            });
    
            and(/^user should see (.*) field$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            and(/^user fill (.*) field with valid code$/, (arg0) => {
                    const error = container.getByText("Remember me");
                        expect("Remember me").toEqual(error.textContent);
            });
    
            when(/^user click on "(.*)" button$/, (arg0) => {
                async () => {
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
                }
            });
    
            then(/^user should see the following message "(.*)"$/, (arg0) => {
                const errorMessage = container.getByLabelText("Multi factor Authentication has been set successfully");
                expect("Multi factor Authentication has been set successfully").toEqual(
                    errorMessage.textContent
                  );
            });
        });
    });
   
    test('EPIC_EPP-3_STORY_EPP-1022-Existing-Verify user should be able to login from device without being asked for MFA using registered mail-id within 3 seconds', ({  }) => {

    
        test('"EPIC_EPP-3_STORY_EPP-1022-Existing-Verify user should be able to login from device without being asked for MFA using registered mail-id within 3 seconds"', ({ given, and, when, then }) => {
            given(/^user launch the "(.*)" url$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            and('user navigates to the Patient Portal application', () => {
                expect(true).toBeTruthy()
            });
    
            when(/^user lands onto "(.*)" screen$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            then(/^user see (.*) and (.*) fields that was MFA was set up$/, (arg0, arg1) => {
                expect(true).toBeTruthy()
            });
    
            and(/^user should fill valid (.*) field with the email$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            and(/^user should fill valid (.*) field$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            and(/^user should see the "(.*)" option has been selected that Remember me has exipred$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            when(/^user clicks on "(.*)" button$/, (arg0) => {
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
    
            when(/^user clicks on "(.*)" button$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            then('user receives an email/text message with the code to the email and mobile number', () => {
                expect(true).toBeTruthy()
            });
    
            and(/^user should see (.*) field$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            and(/^user fill (.*) field with valid code$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            when(/^user click on "(.*)" button$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            then(/^user should see the page loads within "(.*)"$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            and(/^user should see the following message "(.*)"$/, (arg0) => {
                expect(true).toBeTruthy()
            });
        });
    });
   
    test("EPIC_EPP-3_STORY_EPP-1022-Negative-Existing-Verify user should user should see the error message when the service is unavailable when user logs in from device without being asked for MFA using registered registered mail-id", ({  }) => {
        test('"EPIC_EPP-3_STORY_EPP-1022-Negative-Existing-Verify user should user should see the error message when the service is unavailable when user logs in from device without being asked for MFA using registered registered mail-id"', ({ given, and, when, then }) => {
            given(/^user launch the "(.*)" url$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            and('user navigates to the Patient Portal application', () => {
                expect(true).toBeTruthy()
            });
    
            when(/^user lands onto "(.*)" screen$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            then(/^user see (.*) and (.*) fields that was MFA was set up$/, (arg0, arg1) => {
                expect(true).toBeTruthy()
            });
    
            and(/^user should fill valid (.*) field with the email$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            and(/^user should fill valid (.*) field$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            and(/^user should see the "(.*)" option has been selected that Remember me has exipred$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            when(/^user clicks on "(.*)" button$/, (arg0) => {
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
    
            });
    
            and(/^user should see "(.*)" & "(.*)" button$/, (arg0, arg1) => {
                expect(true).toBeTruthy()
            });
    
            when(/^user clicks on "(.*)" button$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            then('user receives an email/text message with the code to the email and mobile number', () => {
                expect(true).toBeTruthy()
            });
    
            and(/^user should see (.*) field$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            and(/^user fill (.*) field with valid code$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            when(/^user click on "(.*)" button$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            then('user should see the appropriate error message', () => {
                expect(true).toBeTruthy()
            });
        });
         
    });
    
    test('EPIC_EPP-3_STORY_EPP-1022-Negative-Existing-Verify user should user should see the error message when the internet service is unavailable when user logs in from device using registered mail-id', ({  }) => {
        test('"EPIC_EPP-3_STORY_EPP-1022-Existing-Verify user should be able to login from device that was set up with "Remember me" option selected, without being asked for MFA using registered mail-id"', ({ given, and, when, then }) => {
            given(/^user launch the "(.*)" url$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            and('user navigates to the Patient Portal application', () => {
                expect(true).toBeTruthy()
            });
    
            when(/^user lands onto "(.*)" screen$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            then(/^user see (.*) and (.*) fields that was MFA was set up$/, (arg0, arg1) => {
                expect(true).toBeTruthy()
            });
    
            and(/^user should fill valid (.*) field with the email$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            and(/^user should fill valid (.*) field$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            and(/^user should see the "(.*)" option has been selected that Remember me has exipred$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            when(/^user clicks on "(.*)" button$/, (arg0) => {
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
    
            });
    
            when(/^user clicks on "(.*)" button$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            then('user receives an email/text message with the code to the email and mobile number', () => {
                expect(true).toBeTruthy()
            });
    
            and(/^user should see (.*) field$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            and(/^user fill (.*) field with valid code$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            when(/^user click on "(.*)" button$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            then(/^user should see the following message "(.*)"$/, (arg0) => {
                expect(true).toBeTruthy()
            });
    
            
        });
    });
    
    test('EPIC_EPP-3_STORY_EPP-1022-Existing-Verify user should be able to login from device that was set up with "Remember me" option selected, without being asked for MFA using phone number', ({  }) => {
        expect(true).toBeTruthy()
    });
    test('EPIC_EPP-3_STORY_EPP-1022-Existing-Verify user should be able to login from device without being asked for MFA using registered phone number within 3 seconds', ({  }) => {
        expect(true).toBeTruthy()
    });
    test('EPIC_EPP-3_STORY_EPP-1022-Negative-Existing-Verify user should user should see the error message when the service is unavailable when user logs in from device without being asked for MFA using registered registered phone number', ({  }) => {
        expect(true).toBeTruthy()
    });
    test('EPIC_EPP-3_STORY_EPP-1022-Negative -Existing-Verify user should user should see the error message when the internet service is unavailable when user logs in from device without being asked for MFA using registered phone number', ({  }) => {
        expect(true).toBeTruthy()
    });
});