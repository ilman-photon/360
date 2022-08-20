import { act, fireEvent, render, waitFor } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import MfaPage, { getServerSideProps }  from "../../src/pages/patient/mfa";
import "@testing-library/jest-dom";
import AuthPage from "../../src/pages/patient/login";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint3/EPP-265.feature", {
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
    test('EPIC_EPP-3_STORY_EPP-265 - Verify user should see second MFA screen with all of components (Prefered Mode of Communication both)', ({ given, and, when, then }) => {
        let container, login;
        const mock = new MockAdapter(axios);
        const element = document.createElement("div");

    
        given(/^user launch "(.*)" URL$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            ;
        });

        and('user is in “Patient Login” screen', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            ;
        });

        when(/^user clicks on the "(.*)" CTA in the"(.*)" screen$/,  async (arg0, arg1) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });


        then(/^user lands on the "(.*)" screen$/,  async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user should able to fill all madantory details and option to choose both',  async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user receives an email/text message with a link to their registered email id/ mobile number',  async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        when('user click on the link', async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        then('user lands onto “Set New Username and Password” screen', async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user should able to view Username field updated with either as email-id or Phone Number by default',  async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user should able to view and fill the following fields',  async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        when(/^user provide the same password details to the field  (.*),(.*)$/,  async (arg0, arg1) => {
      
        });

        and(/^user click on "(.*)" CTA$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        then('user should see set MFA screen', async ()=> {
            
        });
        and(/^user should see screen title written as "(.*)"$/,  async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see screen subtitle written as "(.*)"$/,  async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see "(.*)" section with radio button with below detail "(.*)" and "(.*)"$/,  async (arg0, arg1, arg2) => {
      
        });

        and('user should see default selection on Email',  async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see checkbox section "(.*)"$/,  async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see description of check box written as "(.*)"$/,  async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see "(.*)" & "(.*)" button$/,   async (arg0, arg1) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            ;
        });

        when(/^user click on "(.*)" button$/,  async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user receives an email/text message with a link to their registered email/phone number',  async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        then(/^user should see "(.*)" screen with all of component$/,  async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see (.*) field$/,  async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see checkbox section "(.*)"$/,  async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see description of check box written as "(.*)"$/,  async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see "(.*)" & "(.*)" button$/,  async (arg0, arg1) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see "(.*)" link$/,  async (arg0) => {
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
 
    test('EPIC_EPP-3_STORY_EPP-265 - Verify user should see second MFA screen with all of component (Prefered Mode of Communication Email)', ({ given, and, when, then }) => {
        let container, login;
        const mock = new MockAdapter(axios);
        const element = document.createElement("div");
        given(/^user launch "(.*)" URL$/,  async (arg0) => {
      
        });

        and('user is in “Patient Login” screen', async ()  => {
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
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user should able to fill all madantory details and option to choose email', async ()  => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user receives an email/text message with a link to their registered email id', async ()  => {
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

        then('user lands onto “Set New Username and Password” screen', async ()  => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user should able to view Username field updated with email-id by default', async ()  => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user should able to view and fill the following fields', async  (table) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
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

        and(/^user click on "(.*)" CTA$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        then('user should see set MFA screen', async ()  => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see screen title written as "(.*)"$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see screen subtitle written as "(.*)"$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see text  "(.*)"$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see checkbox section "(.*)"$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see description of check box written as "(.*)"$/, async (arg0) => {
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

        when(/^user click on "(.*)" button$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user receives an email/text message with a link to their registered email', async ()  => {
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
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see (.*) field$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see checkbox section "(.*)"$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see description of check box written as "(.*)"$/, async (arg0) => {
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

        and(/^user should see "(.*)" link$/, async (arg0) => {
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
    

    test('EPIC_EPP-3_STORY_EPP-265 - Verify user should see second MFA screen with all of component (Prefered Mode of Communication Phone)', ({ given, and, when, then }) => {
        let container, login;
        const mock = new MockAdapter(axios);
        const element = document.createElement("div");
        given(/^user launch "(.*)" URL$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user is in “Patient Login” screen', async ()=> {
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
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user should able to fill all madantory details and option to choose email', async () => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user receives an email/text message with a link to their registered email id', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        when('user click on the link',  async () => {
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

        and('user should able to view Username field updated with email-id by default', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user should able to view and fill the following fields', async (table) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
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

        and(/^user click on "(.*)" CTA$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        then('user should see set MFA screen', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see screen title written as "(.*)"$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see screen subtitle written as "(.*)"$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see text  "(.*)"$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see checkbox section "(.*)"$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see description of check box written as "(.*)"$/, async (arg0) => {
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

        when(/^user click on "(.*)" button$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user receives an email/text message with a link to their registered Phone number', async ()=> {
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
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see (.*) field$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see checkbox section "(.*)"$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see description of check box written as "(.*)"$/, async (arg0) => {
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

        and(/^user should see "(.*)" link$/, async (arg0) => {
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

    test('EPIC_EPP-3_STORY_EPP-265 - Verify user should be able to request new code when click on "Resend Code" button (Prefered Mode of Communication both)', ({ given, and, when, then }) => {
        let container, login;
        const mock = new MockAdapter(axios);
        const element = document.createElement("div");
        given(/^user launch "(.*)" URL$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user is in “Patient Login” screen', async ()=> {
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
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user should able to fill all madantory details and option to choose both', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user receives an email/text message with a link to their registered email id/ mobile number', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        when('user click on the link', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        then('user lands onto “Set New Username and Password” screen', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user should able to view Username field updated with either as email-id or Phone Number by default', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user should able to view and fill the following fields', async (table) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
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

        and(/^user click on "(.*)" CTA$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        then('user should see set MFA screen', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see screen title written as "(.*)"$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see screen subtitle written as "(.*)"$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see "(.*)" section with radio button with below detail "(.*)" and "(.*)"$/, async (arg0, arg1, arg2) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user should see default selection on Email', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see checkbox section "(.*)"$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see description of check box written as "(.*)"$/, async (arg0) => {
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

        when(/^user click on "(.*)" button$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user receives an email/text message with a link to their registered email/phone number', async ()=> {
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
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see (.*) field$/, async (arg0) => {
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

        when(/^user click on "(.*)" button$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        then('user receives an email/text message with a link to their registered email/phone number', async ()=> {
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

    test('EPIC_EPP-3_STORY_EPP-265 - Verify user should be able to request new code when click on "Resend Code" button (Prefered Mode of Communication Email)', ({ given, and, when, then }) => {
        let container, login;
        const mock = new MockAdapter(axios);
        const element = document.createElement("div");
        given(/^user launch "(.*)" URL$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user is in “Patient Login” screen', async ()=> {
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
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user should able to fill all madantory details and option to choose email', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user receives an email/text message with a link to their registered email id', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        when('user click on the link', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        then('user lands onto “Set New Username and Password” screen', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user should able to view Username field updated with email-id by default', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user should able to view and fill the following fields', async (table) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
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

        and(/^user click on "(.*)" CTA$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        then('user should see set MFA screen', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see screen title written as "(.*)"$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see screen subtitle written as "(.*)"$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see text  "(.*)"$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see checkbox section "(.*)"$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see description of check box written as "(.*)"$/, async (arg0) => {
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

        when(/^user click on "(.*)" button$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user receives an email/text message with a link to their registered email', async ()=> {
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
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see (.*) field$/, async (arg0) => {
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

        when(/^user click on "(.*)" button$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        then('user receives an email/text message with a link to their registered email', async ()=> {
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

    test('EPIC_EPP-3_STORY_EPP-265 - Verify user should be able to request new code when click on "Resend Code" button (Prefered Mode of Communication Phone)', ({ given, and, when, then }) => {
        let container, login;
        const mock = new MockAdapter(axios);
        const element = document.createElement("div");
        given(/^user launch "(.*)" URL$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user is in “Patient Login” screen', async ()=> {
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
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user should able to fill all madantory details and option to choose email', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user receives an email/text message with a link to their registered email id', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        when('user click on the link', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        then('user lands onto “Set New Username and Password” screen', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user should able to view Username field updated with email-id by default', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user should able to view and fill the following fields', async (table) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
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

        and(/^user click on "(.*)" CTA$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        then('user should see set MFA screen', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see screen title written as "(.*)"$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see screen subtitle written as "(.*)"$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see text  "(.*)"$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see checkbox section "(.*)"$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see description of check box written as "(.*)"$/, async (arg0) => {
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

        when(/^user click on "(.*)" button$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user receives an email/text message with a link to their registered Phone number', async ()=> {
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
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see (.*) field$/, async (arg0) => {
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

        when(/^user click on "(.*)" button$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        then('user receives an email/text message with a link to their registered phone number', async ()=> {
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

    test('EPIC_EPP-3_STORY_EPP-265 - Verify user should lands onto “Patient Login” screen when user click on "Back to Login" link', ({ given, and, when, then }) => {
        let container, login;
        const mock = new MockAdapter(axios);
        const element = document.createElement("div");
        given(/^user launch "(.*)" URL$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user is in “Patient Login” screen', async ()=> {
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
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user should able to fill all madantory details and option to choose both', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user receives an email/text message with a link to their registered email id/ mobile number', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        when('user click on the link', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        then('user lands onto “Set New Username and Password” screen', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user should able to view Username field updated with either as email-id or Phone Number by default', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user should able to view and fill the following fields', async (table) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
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

        and(/^user click on "(.*)" CTA$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        then('user should see set MFA screen', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see screen title written as "(.*)"$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see screen subtitle written as "(.*)"$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see "(.*)" section with radio button with below detail "(.*)" and "(.*)"$/, async (arg0, arg1, arg2) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user should see default selection on Email', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see checkbox section "(.*)"$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see description of check box written as "(.*)"$/, async (arg0) => {
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

        when(/^user click on "(.*)" button$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user receives an email/text message with a link to their registered email/phone number', async ()=> {
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
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see "(.*)" link$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        when('user click on Back to Login" link', async ()=> {
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

    test('EPIC_EPP-3_STORY_EPP-265 - Verify user should see "<Enter Code>" field is blank after reload the screen', ({ given, and, when, then }) => {
        let container, login;
        const mock = new MockAdapter(axios);
        const element = document.createElement("div");
        given(/^user launch "(.*)" URL$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user is in “Patient Login” screen', async ()=> {
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
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user should able to fill all madantory details and option to choose email', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user receives an email/text message with a link to their registered email id', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        when('user click on the link', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        then('user lands onto “Set New Username and Password” screen', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user should able to view Username field updated with email-id by default', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user should able to view and fill the following fields', async (table) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
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

        and(/^user click on "(.*)" CTA$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        then('user should see set MFA screen', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see screen title written as "(.*)"$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see screen subtitle written as "(.*)"$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see text  "(.*)"$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see checkbox section "(.*)"$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see description of check box written as "(.*)"$/, async (arg0) => {
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

        when(/^user click on "(.*)" button$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user receives an email/text message with a link to their registered Phone number', async ()=> {
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
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see (.*) field$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        when(/^user fiil in  (.*) field$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        then(/^user should see text in (.*) field$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        when('user reload the page', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        then(/^user should see (.*) field blank$/, async (arg0) => {
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

    test('EPIC_EPP-3_STORY_EPP-265 - Verify user see error screen when internet is unavailable', ({ given, and, when, then }) => {
        let container, login;
        const mock = new MockAdapter(axios);
        const element = document.createElement("div");
        given(/^user launch "(.*)" URL$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user is in “Patient Login” screen', async ()=> {
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
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user should able to fill all madantory details and option to choose email', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user receives an email/text message with a link to their registered email id', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        when('user click on the link', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        then('user lands onto “Set New Username and Password” screen', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user should able to view Username field updated with email-id by default', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user should able to view and fill the following fields', async (table) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
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

        and(/^user click on "(.*)" CTA$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        then('user should see set MFA screen', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see screen title written as "(.*)"$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see screen subtitle written as "(.*)"$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see text  "(.*)"$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see checkbox section "(.*)"$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see description of check box written as "(.*)"$/, async (arg0) => {
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

        when(/^user click on "(.*)" button$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user receives an email/text message with a link to their registered Phone number', async ()=> {
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
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see (.*) field$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        when(/^user fiil in  (.*) field$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        then(/^user should see text in (.*) field$/, async (arg0) => {
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
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        then('user should see error screen', async ()=> {
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


    test('EPIC_EPP-3_STORY_EPP-265 - Verify user see error screen when service is unavailable', ({ given, and, when, then }) => {
        let container, login;
        const mock = new MockAdapter(axios);
        const element = document.createElement("div");
        given(/^user launch "(.*)" URL$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user is in “Patient Login” screen', async ()=> {
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
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user should able to fill all madantory details and option to choose email', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user receives an email/text message with a link to their registered email id', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        when('user click on the link', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        then('user lands onto “Set New Username and Password” screen', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user should able to view Username field updated with email-id by default', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user should able to view and fill the following fields', async (table) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
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

        and(/^user click on "(.*)" CTA$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        then('user should see set MFA screen', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see screen title written as "(.*)"$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see screen subtitle written as "(.*)"$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see text  "(.*)"$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see checkbox section "(.*)"$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see description of check box written as "(.*)"$/, async (arg0) => {
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

        when(/^user click on "(.*)" button$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user receives an email/text message with a link to their registered Phone number', async ()=> {
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
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
        }); 
            

        and(/^user should see (.*) field$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        when(/^user fiil in  (.*) field$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        then(/^user should see text in (.*) field$/, async (arg0) => {
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
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        then('user should see error screen', async ()=> {
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

    test('EPIC_EPP-3_STORY_EPP-265 - Verify user should not see any error when user tap on F12 keyboard in console', ({ given, and, when, then }) => {
        let container, login;
        const mock = new MockAdapter(axios);
        const element = document.createElement("div");
        given(/^user launch "(.*)" URL$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user is in “Patient Login” screen', async ()=> {
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
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user should able to fill all madantory details and option to choose email', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user receives an email/text message with a link to their registered email id', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        when('user click on the link', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        then('user lands onto “Set New Username and Password” screen', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user should able to view Username field updated with email-id by default', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user should able to view and fill the following fields', async (table) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
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

        and(/^user click on "(.*)" CTA$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        then('user should see set MFA screen', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see screen title written as "(.*)"$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see screen subtitle written as "(.*)"$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see text  "(.*)"$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see checkbox section "(.*)"$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see description of check box written as "(.*)"$/, async (arg0) => {
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

        when(/^user click on "(.*)" button$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user receives an email/text message with a link to their registered Phone number', async ()=> {
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
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see (.*) field$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        when(/^user tap on F(\d+) on keyboard$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        then(/^user should not see any error in console when user tap on F(\d+) keyboard$/, async (arg0) => {
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

    test('EPIC_EPP-3_STORY_EPP-265 - Verify user should see "second MFA" screen within 3 second', ({ given, and, when, then }) => {
        let container, login;
        const mock = new MockAdapter(axios);
        const element = document.createElement("div");
        given(/^user launch "(.*)" URL$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user is in “Patient Login” screen', async ()=> {
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
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user should able to fill all madantory details and option to choose both', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user receives an email/text message with a link to their registered email id/ mobile number', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        when('user click on the link', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        then('user lands onto “Set New Username and Password” screen', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user should able to view Username field updated with either as email-id or Phone Number by default', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user should able to view and fill the following fields', async (table) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
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

        and(/^user click on "(.*)" CTA$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        then('user should see set MFA screen', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see screen title written as "(.*)"$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see screen subtitle written as "(.*)"$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see "(.*)" section with radio button with below detail "(.*)" and "(.*)"$/, async (arg0, arg1, arg2) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user should see default selection on Email', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see checkbox section "(.*)"$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see description of check box written as "(.*)"$/, async (arg0) => {
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

        when(/^user click on "(.*)" button$/, async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and('user receives an email/text message with a link to their registered email/phone number', async ()=> {
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
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            
        });

        and(/^user should see "(.*)" screen within (\d+) second$/, async (arg0, arg1) => {
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
