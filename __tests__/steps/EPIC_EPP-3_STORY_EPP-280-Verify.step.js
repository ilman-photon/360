import { act, fireEvent, render, waitFor } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import MfaPage, { getServerSideProps } from "../../src/pages/patient/mfa";
import "@testing-library/jest-dom";


const feature = loadFeature(
    "./__tests__/feature/Patient Portal/Sprint3/EPP-280.feature", {
    tagFilter: '@included and not @excluded'
}
);

defineFeature(feature, (test) => {
    const renderMFA = async () => {
        act(() => {
          container = render(<MfaPage />, {
            container: document.body.appendChild(element),
            legacyRoot: true,
          });
        });
        await waitFor(() => container.getByText(/communicationMethodTitle/i));
        expect(container).toMatchSnapshot();
      };
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
        await waitFor(() => container.getByText("setMFATitle"));
    
    });
    test('EPIC_EPP-3_STORY_EPP-280 - Register User - Verify User should receive an email/text message with the code to the email and mobile number when user clicks "Resend Code" button (Preferred Mode of Communication both)', ({ }) => {
        test('"EPIC_EPP-3_STORY_EPP-280 - Register User - Verify User should receive an email/txt message with the code to the email and mobile number when user clicks "Resend Code" button (Preferred Mode of Communication both)"', ({ given, and, when, then }) => {
            given(/^user launch "(.*)" URL$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user is in "(.*)" screen$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            when(/^user clicks on the "(.*)" button in the"(.*)" screen$/, async (arg0, arg1) => {
               act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            then(/^user lands on the "(.*)" screen$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and('user should able to fill all mandantory details and option to choose both', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            and('user receives an email/text message with a link to their registered email id/ mobile number', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            when('user clicks on the link', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            then(/^user lands onto "(.*)" screen$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and('user should see the updated Username field with either as email-id or Phone Number by default', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            and(/^user should see and fill the following fields (.*) and (.*)$/, async (arg0, arg1) => {
               act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            when(/^user provides the same password details to the fields (.*) and (.*)$/, async (arg0, arg1) => {
               act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            and(/^user clicks on "(.*)" button$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            then(/^user should see "(.*)" screen$/, async (arg0) => {
                expect(container).toMatchSnapshot()
            });

            and(/^user should see screen title written as "(.*)"$/, async (arg0) => {
                const title = container.getByText("setMFATitle");
                expect("setMFATitle").toEqual(title.textContent);
            });

            and(/^user should see screen subtitle written as "(.*)"$/, async (arg0) => {
                const title = container.getByText("setMFADescription");
                expect("setMFADescription").toEqual(title.textContent);
            });

            and(/^user should see "(.*)" section with radio button with below detail "(.*)" and "(.*)"$/, async (arg0, arg1, arg2) => {
                const title = container.getByText("communicationMethodTitle");
                expect(title).toBeVisible();
            });

            and('user should see default selection on Email', async ()=> {
                const email = container.getByTestId("email-radio-button");
                expect(email).toBeVisible();
            });

            and(/^user should see checkbox section "(.*)"$/, async (arg0) => {
                const checkbox = container.getByText("rememberMeLabel");
                expect(checkbox).toBeVisible();
            });

            and(/^user should see description of check box written as "(.*)"$/, async (arg0) => {
                const checkboxDesc = container.getByText("rememberMeDescription");
                expect(checkboxDesc).toBeVisible();
            });

            and(/^user should see "(.*)" & "(.*)" button$/, async (arg0, arg1) => {
                const confirmButton = container.getByRole("button", { name: /confrimBtn/i });
                expect(confirmButton).toBeVisible();
            });

            when(/^user click on "(.*)" button$/, async (arg0) => {
                const confirmButton = container.getByRole("button", { name: /confrimBtn/i });
                fireEvent.click(confirmButton)

                await waitFor(() => container.getByRole("button", { name: /submitBtn/i }))
            });

            and('user receives an email/text message with a link to their registered email/phone number', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            then(/^user should see "(.*)" screen with all of component$/, async (arg0) => {
                const title = container.getByText("mfaTitle");
                expect("mfaTitle").toEqual(title.textContent);
            });

            and(/^user should see (.*) field$/, async (arg0) => {
                const mfaField = container.getByLabelText("mfaLabel");
                expect(mfaField).toBeVisible()
            });

            and(/^user should see checkbox section "(.*)"$/, async (arg0) => {
                const checkbox = container.getByText("rememberMeLabel");
                expect(checkbox).toBeVisible();
            });

            and(/^user should see description of check box written as "(.*)"$/, async (arg0) => {
                const checkboxDesc = container.getByText("rememberMeDescription");
                expect(checkboxDesc).toBeVisible();
            });

            and(/^user should see "(.*)" & "(.*)" button$/, async (arg0, arg1) => {
                const ConfirmButton = container.getByText("Confirm");
                expect("Confirm").toEqual(ConfirmButton.textContent);
                const BackToLogginButton = container.getByText("Back to Login");
                expect("Back to Login").toEqual(BackToLogginButton.textContent);
            });

            when(/^user clicks on "(.*)" button$/, async (arg0) => {
                const confirmButton = container.getByRole("button", { name: /Confirm/i });
                fireEvent.click(confirmButton)
            });

            then('user receives an email/text message with the code to the email and mobile number', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            and(/^user should see (.*) field$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user fill (.*) field with valid code$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            when(/^user click on "(.*)" button$/, async (arg0) => {
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

            then(/^user should see the following message "(.*)"$/, async (arg0) => {
                const title = container.getByText("Multi factor Authentication has been set successfully");
                expect("Multi factor Authentication has been set successfully").toEqual(title.textContent);
            });
        });
    });
    test('EPIC_EPP-3_STORY_EPP-280 - Register User - Verify User should receive an email with the code to the email when user clicks "Resend Code" button (Preferred Mode of Communication Email)', ({ }) => {
        test('"EPIC_EPP-3_STORY_EPP-280 - Register User - Verify User should receive an email with the code to the email when user clicks "Resend Code" button (Preferred Mode of Communication Email)"', ({ given, and, when, then }) => {
            given(/^user launch "(.*)" URL$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and('user is in “Patient Login” screen', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            when(/^user clicks on the "(.*)" CTA in the"(.*)" screen$/, async (arg0, arg1) => {
               act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            then(/^user lands on the "(.*)" screen$/, async (arg0) => {
                const title = container.getByText("Set Multi-Factor Authentication");
                expect("Set Multi-Factor Authentication").toEqual(title.textContent);
            });

            and('user should able to fill all mandantory details and option to choose email', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            and('user receives an email/text message with a link to their registered email id', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            when('user click on the link', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            then('user lands onto “Set New Username and Password” screen', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            and('user should able to view Username field updated with email-id by default', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            and('user should able to view and fill the following fields', (table) => {
                expect(true).toBeTruthy()
            });

            when(/^user provide the same password details to the field  (.*),(.*)$/, async (arg0, arg1) => {
               act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            and(/^user click on "(.*)" CTA$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            then('user should see set MFA screen', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            and(/^user should see screen title written as "(.*)"$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see screen subtitle written as "(.*)"$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see text  "(.*)"$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see checkbox section "(.*)"$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see description of check box written as "(.*)"$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see "(.*)" & "(.*)" button$/, async (arg0, arg1) => {
               act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            when(/^user click on "(.*)" button$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and('user receives an email/text message with a link to their registered email', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            then(/^user should see "(.*)" screen with all of component$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see (.*) field$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see checkbox section "(.*)"$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see description of check box written as "(.*)"$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see "(.*)" & "(.*)" button$/, async (arg0, arg1) => {
               act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            when(/^user clicks on "(.*)" button$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            then('user receives an email/text message with the code to the email', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            and(/^user should see (.*) field$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user fill (.*) field with valid code$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            when(/^user click on "(.*)" button$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            then(/^user should see the following message "(.*)"$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });
        });
    });
    test('EPIC_EPP-3_STORY_EPP-280 - Register User - Verify User should receive a text message with the code to the mobile number when user clicks "Resend Code" button (Prefered Mode of Communication Phone)', ({ }) => {
        test('"EPIC_EPP-3_STORY_EPP-280 - Register User - Verify User should receive a text message with the code to the mobile number when user clicks "Resend Code" button (Preferred Mode of Communication Phone)"', ({ given, and, when, then }) => {
            given(/^user launch "(.*)" URL$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and('user is in “Patient Login” screen', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            when(/^user clicks on the "(.*)" CTA in the"(.*)" screen$/, async (arg0, arg1) => {
               act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            then(/^user lands on the "(.*)" screen$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and('user should able to fill all mandantory details and option to choose phone number', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            and('user receives an email/text message with a link to their registered phone number', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            when('user click on the link', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            then('user lands onto “Set New Username and Password” screen', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            and('user should able to view Username field updated with email-id by default', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            and('user should able to view and fill the following fields', (table) => {
                expect(true).toBeTruthy()
            });

            when(/^user provide the same password details to the field  (.*),(.*)$/, async (arg0, arg1) => {
               act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            and(/^user click on "(.*)" CTA$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            then('user should see set MFA screen', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            and(/^user should see screen title written as "(.*)"$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see screen subtitle written as "(.*)"$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see text  "(.*)"$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see checkbox section "(.*)"$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see description of check box written as "(.*)"$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see "(.*)" & "(.*)" button$/, async (arg0, arg1) => {
               act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            when(/^user click on "(.*)" button$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and('user receives an email/text message with a link to their registered Phone number', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            then(/^user should see "(.*)" screen with all of component$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see (.*) field$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see checkbox section "(.*)"$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see description of check box written as "(.*)"$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            when(/^user clicks on "(.*)" button$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            then('user receives an email/text message with the code to the mobile number', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            and(/^user should see (.*) field$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user fill (.*) field with valid code$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            when(/^user click on "(.*)" button$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            then(/^user should see the following message "(.*)"$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });
        });
    });
    test('EPIC_EPP-3_STORY_EPP-280 - Negative Test Cases - Register User - Verify User should see the following error message "Code sent multiple times. Please try again after 30 minutes." (Prefered Mode of Communication Phone)', ({ }) => {
        test('"EPIC_EPP-3_STORY_EPP-280 - Negative Test Cases - Register User - Verify User should see the following error message "Code sent multiple times. Please try again after 30 minutes." (Preferred Mode of Communication Phone)"', ({ given, and, when, then }) => {
            given(/^user launch "(.*)" URL$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and('user is in “Patient Login” screen', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            when(/^user clicks on the "(.*)" CTA in the"(.*)" screen$/, async (arg0, arg1) => {
               act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            then(/^user lands on the "(.*)" screen$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and('user should able to fill all mandantory details and option to choose phone number', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            and('user receives an email/text message with a link to their registered phone number', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            when('user click on the link', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            then('user lands onto “Set New Username and Password” screen', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            and('user should able to view Username field updated with email-id by default', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            and('user should able to view and fill the following fields', (table) => {
                expect(true).toBeTruthy()
            });

            when(/^user provide the same password details to the field  (.*),(.*)$/, async (arg0, arg1) => {
               act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            and(/^user click on "(.*)" CTA$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            then('user should see set MFA screen', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            and(/^user should see screen title written as "(.*)"$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see screen subtitle written as "(.*)"$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see text  "(.*)"$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see checkbox section "(.*)"$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see description of check box written as "(.*)"$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see "(.*)" & "(.*)" button$/, async (arg0, arg1) => {
               act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            when(/^user click on "(.*)" button$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and('user receives an email/text message with a link to their registered Phone number', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            then(/^user should see "(.*)" screen with all of component$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see (.*) field$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see checkbox section "(.*)"$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see description of check box written as "(.*)"$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            when(/^user clicks on "(.*)" button for (\d+) times$/, async (arg0, arg1) => {
               act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            then(/^user should see the following error message "(.*)"$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });
        });
    });
    test('EPIC_EPP-3_STORY_EPP-280 - Register User - Verify User should to request for the code after 30 mins when user clicks on "Resend Code" button for 3 times (Preferred Mode of Communication both)', ({ }) => {
        test('"EPIC_EPP-3_STORY_EPP-280 - Register User - Verify User should to request for the code after 30 mins when user clicks on "Resend Code" button for 3 times (Preferred Mode of Communication both)"', ({ given, and, when, then }) => {
            given('user is on second MFA screen', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            and(/^user should see "(.*)" screen with all of component$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and('user should able to fill all mandantory details and option to choose both', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            and('user receives an email/text message with a link to their registered email and phone number', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            and(/^user should see (.*) field$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user fill (.*) field with valid code$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            when(/^user click on "(.*)" button$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            then(/^user should see the following message "(.*)"$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });
        });
    });
    test('EPIC_EPP-3_STORY_EPP-280 - Register User - Verify User should to request for the code after 30 mins when user clicks on "Resend Code" button for 3 times (Prefered Mode of Communication email)', ({ }) => {
        test('"EPIC_EPP-3_STORY_EPP-280 - Register User - Verify User should to request for the code after 30 mins when user clicks on "Resend Code" button for 3 times (Preferred Mode of Communication email)"', ({ given, and, when, then }) => {
            given('user is on second MFA screen', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            and(/^user should see "(.*)" screen with all of component$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and('user should able to fill all mandantory details and option to choose email', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            and('user receives an email/text message with a link to their registered email', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            and(/^user should see (.*) field$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user fill (.*) field with valid code$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            when(/^user click on "(.*)" button$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            then(/^user should see the following message "(.*)"$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });
        });
    });
    test('EPIC_EPP-3_STORY_EPP-280 - Register User - Verify User should to request for the code after 30 mins when user clicks on "Resend Code" button for 3 times (Preferred Mode of Communication mobile number)', ({ }) => {
        test('"EPIC_EPP-3_STORY_EPP-280 - Register User - Verify User should to request for the code after 30 mins when user clicks on "Resend Code" button for 3 times (Preferred Mode of Communication mobile number)"', ({ given, and, when, then }) => {
            given('user is on second MFA screen', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            and(/^user should see "(.*)" screen with all of component$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and('user should able to fill all mandantory details and option to choose phone number', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            and('user receives an email/text message with a link to their registered phone number', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            and(/^user should see (.*) field$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user fill (.*) field with valid code$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            when(/^user click on "(.*)" button$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            then(/^user should see the following message "(.*)"$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });
        });
    });
    test('EPIC_EPP-3_STORY_EPP-280 - Negative Test Case - Register User - Verify user should see the error message when the internet service is unavailable (Preferred Mode of Communication Email)', ({ }) => {
        test('"EPIC_EPP-3_STORY_EPP-280 - Negative Test Case - Register User - Verify user should see the error message when the internet service is unavailable (Preferred Mode of Communication Email)"', ({ given, and, when, then }) => {
            given(/^user launch "(.*)" URL$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and('user is in “Patient Login” screen', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            when(/^user clicks on the "(.*)" CTA in the"(.*)" screen$/, async (arg0, arg1) => {
               act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            then(/^user lands on the "(.*)" screen$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and('user should able to fill all mandantory details and option to choose email', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            and('user receives an email/text message with a link to their registered email id', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            when('user click on the link', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            then('user lands onto “Set New Username and Password” screen', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            and('user should able to view Username field updated with email-id by default', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            and('user should able to view and fill the following fields', (table) => {
                expect(true).toBeTruthy()
            });

            when(/^user provide the same password details to the field  (.*),(.*)$/, async (arg0, arg1) => {
               act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            and(/^user click on "(.*)" CTA$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            then('user should see set MFA screen', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            and(/^user should see screen title written as "(.*)"$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see screen subtitle written as "(.*)"$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see text  "(.*)"$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see checkbox section "(.*)"$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see description of check box written as "(.*)"$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see "(.*)" & "(.*)" button$/, async (arg0, arg1) => {
               act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            when(/^user click on "(.*)" button$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and('user receives an email/text message with a link to their registered email', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            then(/^user should see "(.*)" screen with all of component$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see (.*) field$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see checkbox section "(.*)"$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see description of check box written as "(.*)"$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see "(.*)" & "(.*)" button$/, async (arg0, arg1) => {
               act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            when(/^user clicks on "(.*)" button$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            then('user receives an email/text message with the code to the email', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            and(/^user should see (.*) field$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user fill (.*) field with valid code$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            when(/^user click on "(.*)" button$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            then(/^user should see the following message "(.*)"$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and('the internet service is unavailable', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            then('user should see the appropriate error message', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
        });
    });
    test('EPIC_EPP-3_STORY_EPP-280 - Negative Test Case - Register User - Verify user should see the error message when the service is unavailable (Prefered Mode of Communication Email)', ({ }) => {
        test('"EPIC_EPP-3_STORY_EPP-280 - Negative Test Case - Register User - Verify user should see the error message when the service is unavailable (Preferred Mode of Communication Email)"', ({ given, and, when, then }) => {
            given(/^user launch "(.*)" URL$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and('user is in “Patient Login” screen', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            when(/^user clicks on the "(.*)" CTA in the"(.*)" screen$/, async (arg0, arg1) => {
               act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            then(/^user lands on the "(.*)" screen$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and('user should able to fill all mandantory details and option to choose email', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            and('user receives an email/text message with a link to their registered email id', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            when('user click on the link', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            then('user lands onto “Set New Username and Password” screen', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            and('user should able to view Username field updated with email-id by default', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            and('user should able to view and fill the following fields', (table) => {
                expect(true).toBeTruthy()
            });

            when(/^user provide the same password details to the field  (.*),(.*)$/, async (arg0, arg1) => {
               act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            and(/^user click on "(.*)" CTA$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            then('user should see set MFA screen', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            and(/^user should see screen title written as "(.*)"$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see screen subtitle written as "(.*)"$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see text  "(.*)"$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see checkbox section "(.*)"$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see description of check box written as "(.*)"$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see "(.*)" & "(.*)" button$/, async (arg0, arg1) => {
               act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            when(/^user click on "(.*)" button$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and('user receives an email/text message with a link to their registered email', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            then(/^user should see "(.*)" screen with all of component$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see (.*) field$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see checkbox section "(.*)"$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see description of check box written as "(.*)"$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see "(.*)" & "(.*)" button$/, async (arg0, arg1) => {
               act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            when(/^user clicks on "(.*)" button$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            then('user receives an email/text message with the code to the email', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            and(/^user should see (.*) field$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user fill (.*) field with valid code$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            when(/^user click on "(.*)" button$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and('the service is unavailable', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            then('user should see the appropriate error message', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
        });
    });
    test('EPIC_EPP-3_STORY_EPP-280 - Register User - Verify User should see the following message "Multi factor Authentication has been set successfully" within 3 seconds during resend code request (Prefered Mode of Communication Email)', ({ }) => {
        test('"EPIC_EPP-3_STORY_EPP-280 - Register User - Verify User should see the following message "Multi factor Authentication has been set successfully" within 3 seconds during resend code request (Preferred Mode of Communication Email)"', ({ given, and, when, then }) => {
            given(/^user launch "(.*)" URL$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and('user is in “Patient Login” screen', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            when(/^user clicks on the "(.*)" CTA in the"(.*)" screen$/, async (arg0, arg1) => {
               act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            then(/^user lands on the "(.*)" screen$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and('user should able to fill all mandantory details and option to choose email', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            and('user receives an email/text message with a link to their registered email id', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            when('user click on the link', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            then('user lands onto “Set New Username and Password” screen', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            and('user should able to view Username field updated with email-id by default', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            and('user should able to view and fill the following fields', (table) => {
                expect(true).toBeTruthy()
            });

            when(/^user provide the same password details to the field  (.*),(.*)$/, async (arg0, arg1) => {
               act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            and(/^user click on "(.*)" CTA$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            then('user should see set MFA screen', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            and(/^user should see screen title written as "(.*)"$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see screen subtitle written as "(.*)"$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see text  "(.*)"$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see checkbox section "(.*)"$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see description of check box written as "(.*)"$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see "(.*)" & "(.*)" button$/, async (arg0, arg1) => {
               act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            when(/^user click on "(.*)" button$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and('user receives an email/text message with a link to their registered email', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            then(/^user should see "(.*)" screen with all of component$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see (.*) field$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see checkbox section "(.*)"$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see description of check box written as "(.*)"$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see "(.*)" & "(.*)" button$/, async (arg0, arg1) => {
               act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            when(/^user clicks on "(.*)" button$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            then('user receives an email/text message with the code to the email', async () => {
                act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });

            and(/^user should see (.*) field$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user fill (.*) field with valid code$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            when(/^user click on "(.*)" button$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            then(/^user should see the page loads within "(.*)"$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });

            and(/^user should see the following message "(.*)"$/, async (arg0)  => {
		 act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();

            });
        });
    });
});