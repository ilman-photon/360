import { act, fireEvent, render, waitFor } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import MfaPage, { getServerSideProps }  from "../../src/pages/patient/mfa";
import "@testing-library/jest-dom";
import AuthPage from "../../src/pages/patient/login";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint3/EPP-269.feature", {
    tagFilter: '@included and not @excluded'
  }
);

defineFeature(feature, (test)  =>{   
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
    test('EPIC_EPP-3_STORY_EPP-269 - Verify User receives an email from registered mail-id when user logs in from different device/IP Address', ({ given, and, when, then })  =>{   
        let container, login;
        const mock = new MockAdapter(axios);
        const element = document.createElement("div");
        test('"EPIC_EPP-3_STORY_EPP-269 - Verify User receives an email from registered mail-id when user logs in from different device/IP Address"', ({ given, and, when, then })  =>{   
            given(/^user launch the "(.*)" url$/,async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();  
                
            });
    
            and('user navigates to the Patient Portal application', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();   
                
            });
    
            when(/^user lands onto "(.*)" screen$/,async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();  
                
            });
    
            then(/^user see (.*) and (.*) fields that was MFA was set up on device A$/, async (arg0, arg1)  =>{   
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
            });
    
            and('user login from device A', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();   
                
            });
    
            and(/^user should fill valid (.*) and (.*)$/, async (arg0, arg1)  =>{   
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
            });
    
            and(/^user should see "(.*)" option$/,async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();  
                
            });
    
            when(/^user checklist the "(.*)" option$/,async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();  
                
            });
    
            then(/^user should see the "(.*)" option has been selected$/,async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();  
                
            });
    
            and(/^user tries to login from another deviceAnd user should see "(.*)" option$/,async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();  
                
            });
    
            when(/^user checklist the "(.*)" option$/,async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();  
                
            });
    
            then(/^user should see the "(.*)" option has been selected$/,async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();  
                
            });
    
            when(/^user clicks on "(.*)" button$/,async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();  
                const button = container.getByLabelText("Continue");
                fireEvent.click(button);
            });
    
            then(/^user shoud see "(.*)" screen$/,async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();  
                
            });
    
            and('user login from device B', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();   
                
            });
    
            when(/^user should fill valid (.*) and (.*)$/, async (arg0, arg1)  =>{   
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
            });
    
            and(/^user clicks on "(.*)" button$/,async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();  
                const button = container.getByLabelText("Continue");
                fireEvent.click(button);
            });
    
            then('user receives an email from registered email-id', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();   
            
            });
    
            and(/^user should see the mail with Email Subject as "(.*)"$/,async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();  
               
            });
    
            and('user should see a mail body as', (table)  =>{   
               
            });
        });
    });

    test('EPIC_EPP-3_STORY_EPP-269 - Verify User should be able to receives a text that registered phone number when user logs in from different device/IP Address', ({  })  =>{   
        let container, login;
        const mock = new MockAdapter(axios);
        const element = document.createElement("div");
        test('"EPIC_EPP-3_STORY_EPP-269 - Verify User should be able to receives a text that registered phone number when user logs in from different device/IP Address"', ({ given, and, when, then })  =>{   
            given(/^user launch the "(.*)" url$/,async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();  
    
            });
    
            and('user navigates to the Patient Portal application', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();   
    
            });
    
            when(/^user lands onto "(.*)" screen$/,async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();  
    
            });
    
            then(/^user see (.*) and (.*) fields that was MFA was set up on device A$/, async (arg0, arg1)  =>{   
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
            });
    
            and('user login from device A', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();   
    
            });
    
            and(/^user should fill valid (.*) and (.*)$/, async (arg0, arg1)  =>{   
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
            });
    
            and(/^user should see "(.*)" option$/,async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();  
    
            });
    
            when(/^user checklist the "(.*)" option$/,async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();  
    
            });
    
            then(/^user should see the "(.*)" option has been selected$/,async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();  
    
            });
    
            and(/^user tries to login from another deviceAnd user should see "(.*)" option$/,async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();  
    
            });
    
            when(/^user checklist the "(.*)" option$/,async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();  
    
            });
    
            then(/^user should see the "(.*)" option has been selected$/,async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();  
    
            });
    
            when(/^user clicks on "(.*)" button$/,async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();  
    
            });
    
            then(/^user shoud see "(.*)" screen$/,async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();  
    
            });
    
            and('user login from device B', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();   
    
            });
    
            when(/^user should fill valid (.*) and (.*)$/, async (arg0, arg1)  =>{   
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
            });
    
            and(/^user clicks on "(.*)" button$/,async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();  
    
            });
    
            then('user receives a text from registered phone number', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();   
    
            });
    
            and(/^user should see the text with Text Subject as "(.*)"$/,async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();  
    
            });
    
            and('user should see a message body as', (table)  =>{   
    
            });
        });
    });
    test('EPIC_EPP-3_STORY_EPP-269 - Verify user should see the following success message "Multi factor Authentication has been set successfully" when user logs in from different device/IP Address and receives text alert from a registered mail-id', ({  })  =>{   
        let container, login;
        const mock = new MockAdapter(axios);
        const element = document.createElement("div");
        test('"EPIC_EPP-3_STORY_EPP-269 - Verify user should see the following success message "Multi factor Authentication has been set successfully" when user logs in from different device/IP Address and receives text alert from a registered mail-id"', ({ given, and, when, then })  =>{   
            given(/^user launch the "(.*)" url$/,async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();  
    
            });
    
            and('user navigates to the Patient Portal application', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();   
    
            });
    
            when(/^user lands onto "(.*)" screen$/,async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();  
    
            });
    
            then(/^user see (.*) and (.*) fields that was MFA was set up on device A$/, async (arg0, arg1)  =>{   
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
            });
    
            and('user login from device A', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();   
    
            });
    
            and(/^user should fill valid (.*) and (.*)$/, async (arg0, arg1)  =>{   
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
            });
    
            and(/^user should see "(.*)" option$/,async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();  
    
            });
    
            when(/^user checklist the "(.*)" option$/,async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();  
    
            });
    
            then(/^user should see the "(.*)" option has been selected$/,async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();  
    
            });
    
            and(/^user tries to login from another deviceAnd user should see "(.*)" option$/,async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();  
    
            });
    
            when(/^user checklist the "(.*)" option$/,async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();  
    
            });
    
            then(/^user should see the "(.*)" option has been selected$/,async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();  
    
            });
    
            when(/^user clicks on "(.*)" button$/,async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();  
    
            });
    
            then(/^user shoud see "(.*)" screen$/,async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();  
    
            });
    
            and('user login from device B', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();   
    
            });
    
            when(/^user should fill valid (.*) and (.*)$/, async (arg0, arg1)  =>{   
    
            });
    
            and(/^user clicks on "(.*)" button$/,async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();  
    
            });
    
            then('user receives an email message with the code to the email', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();   
    
            });
    
            and(/^user should see the mail with Email Subject as "(.*)"$/,async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();  
    
            });
    
            and('user should see a message body as', (table)  =>{   
    
            });
    
            then('user receives an email/ text message with the code to the email or mobile number', async ()=> {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();   
    
            });
    
            and(/^user should see the mail with Email Subject as "(.*)"$/,async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();  
    
            });
    
            and('user should see a message body as', (table)  =>{   
    
            });
    
            when(/^user lands onto "(.*)" screen$/,async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();  
    
            });
    
            and(/^user should see (.*) field$/,async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();  
    
            });
    
            and(/^user should fill valid (.*) fied$/,async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();  
    
            });
    
            when(/^user clicks on "(.*)" button$/,async (arg0) => {
            act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();  
    
            });
    
            then(/^user should see the following message "(.*)"$/,async (arg0) => {
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



    test('EPIC_EPP-3_STORY_EPP-269 - Verify user should see the following success message "Multi factor Authentication has been set successfully" when user logs in from different device/IP Address and receives text alert from a registered phone number', ({  }) =>{
        let container, login;
        const mock = new MockAdapter(axios);
        const element = document.createElement("div");
        test('"EPIC_EPP-3_STORY_EPP-269 - Verify user should see the following success message "Multi factor Authentication has been set successfully" when user logs in from different device/IP Address and receives text alert from a registered phone number"', ({ given, and, when, then }) =>{
            given(/^user launch the "(.*)" url$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
                
            });
    
            and('user navigates to the Patient Portal application', async () =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            when(/^user lands onto "(.*)" screen$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            then(/^user see (.*) and (.*) fields that was MFA was set up on device A$/, async (arg0, arg1) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  const title = container.getByText("formTitle");
                  expect("formTitle").toEqual(title.textContent);
    
            });
    
            and('user login from device A', async () =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and(/^user should fill valid (.*) and (.*)$/, async (arg0, arg1) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  const title = container.getByText("formTitle");
                  expect("formTitle").toEqual(title.textContent);
    
            });
    
            and(/^user should see "(.*)" option$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            when(/^user checklist the "(.*)" option$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            then(/^user should see the "(.*)" option has been selected$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and('user tries to login from another device', async () =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and(/^user should see "(.*)" option$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            when(/^user checklist the "(.*)" option$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            then(/^user should see the "(.*)" option has been selected$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            when(/^user clicks on "(.*)" button$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            then(/^user shoud see "(.*)" screen$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and('user login from device B', async () =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            when(/^user should fill valid (.*) and (.*)$/, async (arg0, arg1) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  const title = container.getByText("formTitle");
                  expect("formTitle").toEqual(title.textContent);
    
            });
    
            and(/^user clicks on "(.*)" button$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            then('user receives an email/ text message with the code to the email or mobile number', async () =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and(/^user should see the mail with Email Subject as "(.*)"$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and('user should see a message body as', (table) =>{
    
            });
    
            then('user receives a text message with the code to phone number', async () =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and(/^user should see the mail with Email Subject as "(.*)"$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and('user should see a message body as', (table) =>{
    
            });
    
            when(/^user lands onto "(.*)" screen$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and(/^user should see (.*) field$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and(/^user should fill valid (.*) fied$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            when(/^user clicks on "(.*)" button$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            then(/^user should see the following message "(.*)"$/, async (arg0) =>{
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

    test('EPIC_EPP-3_STORY_EPP-269 - Verify user should see the following success message "Multi factor Authentication has been set successfully" within "3 seconds" when user logs in from different device/IP Address', ({  }) =>{
        let container, login;
        const mock = new MockAdapter(axios);
        const element = document.createElement("div");
        test('"EPIC_EPP-3_STORY_EPP-269 - Verify user should see the following success message "Multi factor Authentication has been set successfully" within "3 seconds" when user logs in from different device/IP Address"', ({ given, and, when, then }) =>{
            given(/^user launch the "(.*)" url$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and('user navigates to the Patient Portal application', async () =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            when(/^user lands onto "(.*)" screen$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            then(/^user see (.*) and (.*) fields that was MFA was set up on device A$/, async (arg0, arg1) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  const title = container.getByText("formTitle");
                  expect("formTitle").toEqual(title.textContent);
    
            });
    
            and('user login from device A', async () =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and(/^user should fill valid (.*) and (.*)$/, async (arg0, arg1) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  const title = container.getByText("formTitle");
                  expect("formTitle").toEqual(title.textContent);
                
            });
    
            and(/^user should see "(.*)" option$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            when(/^user checklist the "(.*)" option$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            then(/^user should see the "(.*)" option has been selected$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and('user tries to login from another device', async () =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and(/^user should see "(.*)" option$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            when(/^user checklist the "(.*)" option$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            then(/^user should see the "(.*)" option has been selected$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            when(/^user clicks on "(.*)" button$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            then(/^user shoud see "(.*)" screen$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and('user login from device B', async () =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
                
            });
    
            when(/^user should fill valid (.*) and (.*)$/, async (arg0, arg1) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  const title = container.getByText("formTitle");
                  expect("formTitle").toEqual(title.textContent);
    
            });
    
            and(/^user clicks on "(.*)" button$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            then('user receives an email/ text message with the code to the email or mobile number', async () =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and(/^user should see the mail with Email Subject as "(.*)"$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and('user should see a message body as', (table) =>{
    
            });
    
            then('user receives a text message with the code to phone number', async () =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and(/^user should see the mail with Email Subject as "(.*)"$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and('user should see a message body as', (table) =>{
    
            });
    
            when(/^user lands onto "(.*)" screen$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and(/^user should see (.*) field$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and(/^user should fill valid (.*) fied$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            when(/^user clicks on "(.*)" button$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            then(/^user should see the page loads within "(.*)"$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and(/^user should see the following message "(.*)"$/, async (arg0) =>{
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

    test('EPIC_EPP-3_STORY_EPP-269 - Verify user should not see the any errors script when user clicks F12 on the console when user succes set up MFA due to user logs in from different device/IP Address', ({  }) =>{
        let container, login;
        const mock = new MockAdapter(axios);
        const element = document.createElement("div");
        test('"EPIC_EPP-3_STORY_EPP-269 - Verify user should not see the any errors script when user clicks F12 on the console when user succes set up MFA due to user logs in from different device/IP Address"', ({ given, and, when, then }) =>{
            given(/^user launch the "(.*)" url$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and('user navigates to the Patient Portal application', async () =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            when(/^user lands onto "(.*)" screen$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            then(/^user see (.*) and (.*) fields that was MFA was set up on device A$/, async (arg0, arg1) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  const title = container.getByText("formTitle");
                  expect("formTitle").toEqual(title.textContent);
    
            });
    
            and('user login from device A', async () =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and(/^user should fill valid (.*) and (.*)$/, async (arg0, arg1) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  const title = container.getByText("formTitle");
                  expect("formTitle").toEqual(title.textContent);
    
            });
    
            and(/^user should see "(.*)" option$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            when(/^user checklist the "(.*)" option$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            then(/^user should see the "(.*)" option has been selected$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and('user tries to login from another device', async () =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and(/^user should see "(.*)" option$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            when(/^user checklist the "(.*)" option$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            then(/^user should see the "(.*)" option has been selected$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            when(/^user clicks on "(.*)" button$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            then(/^user shoud see "(.*)" screen$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and('user login from device B', async () =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            when(/^user should fill valid (.*) and (.*)$/, async (arg0, arg1) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  const title = container.getByText("formTitle");
                  expect("formTitle").toEqual(title.textContent);
    
            });
    
            and(/^user clicks on "(.*)" button$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            then('user receives an email/ text message with the code to the email or mobile number', async () =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and(/^user should see the mail with Email Subject as "(.*)"$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and('user should see a message body as', (table) =>{
    
            });
    
            then('user receives a text message with the code to phone number', async () =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and(/^user should see the mail with Email Subject as "(.*)"$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and('user should see a message body as', (table) =>{
    
            });
    
            when(/^user lands onto "(.*)" screen$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and(/^user should see (.*) field$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and(/^user should fill valid (.*) fied$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            when(/^user clicks on "(.*)" button$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            then(/^user should see the following message "(.*)"$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            when(/^user clicks on F(\d+) on the console$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            then('user should not to see any errors script', async () =>{
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
    test('EPIC_EPP-3_STORY_EPP-269 - Negative Test Cases - Verify user should see the following error message "Incorrect Code. Please try again." when user logs in from different device/IP Address and receives text alert from a registered mail-id', ({  }) =>{
        let container, login;
        const mock = new MockAdapter(axios);
        const element = document.createElement("div");
        test('"EPIC_EPP-3_STORY_EPP-269 - Negative Test Cases - Verify user should see the following error message "Incorrect Code. Please try again." when user logs in from different device/IP Address and receives text alert from a registered mail-id"', ({ given, and, when, then }) =>{
            given(/^user launch the "(.*)" url$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and('user navigates to the Patient Portal application', async () =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            when(/^user lands onto "(.*)" screen$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            then(/^user see (.*) and (.*) fields that was MFA was set up on device A$/, async (arg0, arg1) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  const title = container.getByText("formTitle");
                  expect("formTitle").toEqual(title.textContent);
    
            });
    
            and('user login from device A', async () =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and(/^user should fill valid (.*) and (.*)$/, async (arg0, arg1) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  const title = container.getByText("formTitle");
                  expect("formTitle").toEqual(title.textContent);
    
            });
    
            and(/^user should see "(.*)" option$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            when(/^user checklist the "(.*)" option$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            then(/^user should see the "(.*)" option has been selected$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and('user tries to login from another device', async () =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and(/^user should see "(.*)" option$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            when(/^user checklist the "(.*)" option$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            then(/^user should see the "(.*)" option has been selected$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            when(/^user clicks on "(.*)" button$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            then(/^user shoud see "(.*)" screen$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and('user login from device B', async () =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            when(/^user should fill valid (.*) and (.*)$/, async (arg0, arg1) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  const title = container.getByText("formTitle");
                  expect("formTitle").toEqual(title.textContent);
    
            });
    
            and(/^user clicks on "(.*)" button$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            then('user receives an emai with the code to the mobile number', async () =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and(/^user should see the mail with Email Subject as "(.*)"$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and('user should see a message body as', (table) =>{
    
            });
    
            then('user receives a text message with the code to phone number', async () =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and(/^user should see the mail with Email Subject as "(.*)"$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and('user should see a message body as', (table) =>{
    
            });
    
            when(/^user lands onto "(.*)" screen$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and(/^user should see (.*) field$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and(/^user should fill invalid (.*) fied$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            when(/^user clicks on "(.*)" button$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            then(/^user should see the following message "(.*)"$/, async (arg0) =>{
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
    test('EPIC_EPP-3_STORY_EPP-269 - Negative Test Cases - Verify user should see the following error message "Incorrect Code. Please try again." when user logs in from different device/IP Address and receives text alert from a registered phone number', ({  }) =>{
        let container, login;
        const mock = new MockAdapter(axios);
        const element = document.createElement("div");
        test('"EPIC_EPP-3_STORY_EPP-269 - Negative Test Cases - Verify User should see the following error message "Incorrect Code. Please try again." when user Set up Multi Factor Authentication from a different device/IP Address"', ({ given, and, when, then }) =>{
            given(/^user launch the "(.*)" url$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and('user navigates to the Patient Portal application', async () =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            when(/^user lands onto "(.*)" screen$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            then(/^user see (.*) and (.*) fields that was MFA was set up on device A$/, async (arg0, arg1) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  const title = container.getByText("formTitle");
                  expect("formTitle").toEqual(title.textContent);
    
            });
    
            and('user login from device A', async () =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and(/^user should fill valid (.*) and (.*)$/, async (arg0, arg1) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  const title = container.getByText("formTitle");
                  expect("formTitle").toEqual(title.textContent);
    
            });
    
            and(/^user should see "(.*)" option$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            when(/^user checklist the "(.*)" option$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            then(/^user should see the "(.*)" option has been selected$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and('user tries to login from another device', async () =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and(/^user should see "(.*)" option$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            when(/^user checklist the "(.*)" option$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            then(/^user should see the "(.*)" option has been selected$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            when(/^user clicks on "(.*)" button$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            then(/^user shoud see "(.*)" screen$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and('user login from device B', async () =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            when(/^user should fill valid (.*) and (.*)$/, async (arg0, arg1) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  const title = container.getByText("formTitle");
                  expect("formTitle").toEqual(title.textContent);
    
            });
    
            and(/^user clicks on "(.*)" button$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            then('user receives a text message with the code to the phone number', async () =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and(/^user should see the mail with text Subject as "(.*)"$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and('user should see a message body as', (table) =>{
    
            });
    
            then('user receives a text message with the code to phone number', async () =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and(/^user should see the mail with Email Subject as "(.*)"$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and('user should see a message body as', (table) =>{
    
            });
    
            when(/^user lands onto "(.*)" screen$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and(/^user should see (.*) field$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and(/^user should fill invalid (.*) fied$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            when(/^user clicks on "(.*)" button$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            then(/^user should see the following message "(.*)"$/, async (arg0) =>{
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
    test('EPIC_EPP-3_STORY_EPP-269 - Negative Test Cases - Verify user logs in from different device/IP Address and should see the error message when the internet service is unavailable', ({  }) =>{
        let container, login;
        const mock = new MockAdapter(axios);
        const element = document.createElement("div");        test('"EPIC_EPP-3_STORY_EPP-269 - Negative Test Cases - Verify user logs in from different device/IP Address and should see the error message when the internet service is unavailable"', ({ given, and, when, then }) =>{
            given(/^user launch the "(.*)" url$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and('user navigates to the Patient Portal application', async () =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            when(/^user lands onto "(.*)" screen$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            then(/^user see (.*) and (.*) fields that was MFA was set up on device A$/, async (arg0, arg1) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  const title = container.getByText("formTitle");
                  expect("formTitle").toEqual(title.textContent);
    
            });
    
            and('user login from device A', async () =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and(/^user should fill valid (.*) and (.*)$/, async (arg0, arg1) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  const title = container.getByText("formTitle");
                  expect("formTitle").toEqual(title.textContent);
    
            });
    
            and(/^user should see "(.*)" option$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            when(/^user checklist the "(.*)" option$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            then(/^user should see the "(.*)" option has been selected$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and('user tries to login from another device', async () =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and(/^user should see "(.*)" option$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            when(/^user checklist the "(.*)" option$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            then(/^user should see the "(.*)" option has been selected$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            when(/^user clicks on "(.*)" button$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            then(/^user shoud see "(.*)" screen$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and('user login from device B', async () =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            when(/^user should fill valid (.*) and (.*)$/, async (arg0, arg1) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  const title = container.getByText("formTitle");
                  expect("formTitle").toEqual(title.textContent);
    
            });
    
            and(/^user clicks on "(.*)" button$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            then('user receives a text message with the code to the phone number', async () =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and(/^user should see the mail with text Subject as "(.*)"$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and('user should see a message body as', (table) =>{
    
            });
    
            then('user receives a text message with the code to phone number', async () =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and(/^user should see the mail with Email Subject as "(.*)"$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and('user should see a message body as', (table) =>{
    
            });
    
            when(/^user lands onto "(.*)" screen$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and(/^user should see (.*) field$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            and(/^user should fill invalid (.*) fied$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            when(/^user clicks on "(.*)" button$/, async (arg0) =>{
                act(() => {
                    container = render(<MfaPage />, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
    
            });
    
            then('user should see the appropriate error message', async () =>{
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