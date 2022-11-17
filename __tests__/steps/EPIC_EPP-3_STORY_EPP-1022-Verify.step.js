import { act, fireEvent, render, waitFor } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import MfaPage  from "../../src/pages/patient/mfa";
import "@testing-library/jest-dom";
import Cookies from "universal-cookie";
import { Provider } from "react-redux";
import store from "../../src/store/store";

jest.mock("universal-cookie", () => {
  class MockCookies {
    static result = {};
    get() {
      return MockCookies.result;
    }
    remove() {
      return jest.fn();
    }
  }
  return MockCookies;
});

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint3/EPP-1022.feature", {
    tagFilter: '@included and not @excluded'
  }
);

defineFeature(feature, (test) => {
    let container
    beforeEach(async () => {
        Cookies.result = { mfa: true };
        container = render(
          <Provider store={store}>
            <MfaPage />
          </Provider>
        )
        await waitFor(() => container.getByText("setMFATitle"));
    });
    test('EPIC_EPP-3_STORY_EPP-1022-Existing-Verify user should be able to login from device that was set up with "Remember me" option selected, without being asked for MFA using registered mail-id', ({  }) => {
        let container, login;
        const mock = new MockAdapter(axios);
        const element = document.createElement("div");
        test('"EPIC_EPP-3_STORY_EPP-1022-Existing-Verify user should be able to login from device that was set up with "Remember me" option selected, without being asked for MFA using registered mail-id"', ({ given, and, when, then }) => {
            let container, login;
            const mock = new MockAdapter(axios);
            const element = document.createElement("div");
            given(/^user launch the "(.*)" url$/, async (arg0) => {
             act(() => {
                container = render(<Provider store={store}>
                    <MfaPage />
                  </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
            });
    
            and('user navigates to the Patient Portal application', async () => {
                const expectedResult = {
                    ResponseCode: 2001,
                    ResponseType: "failure",
                    userType: "patient",
                  };
                  mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
            });
    
            when(/^user lands onto "(.*)" screen$/, async (arg0) => {
                act(() => {
                    container = render(<Provider store={store}>
                      <MfaPage />
                    </Provider>, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  const title = container.getByText("formTitle");
                  expect("formTitle").toEqual(title.textContent);
            });
    
            then(/^user see (.*) and (.*) fields that was MFA was set up$/, async (arg0, arg1) => {
                act(() => {
                    container = render(<Provider store={store}>
                      <MfaPage />
                    </Provider>, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
            });
    
            and(/^user should fill valid (.*) field with the email$/, async (arg0) => {
                const inputFieldError = container.getByLabelText();
                expect(true).toBeTruthy()
            });
    
            and(/^user should fill valid (.*) field$/, async (arg0) => {
                act(() => {
                    container = render(<Provider store={store}>
                      <MfaPage />
                    </Provider>, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
            });
    
            and(/^user should see the "(.*)" option has been selected that Remember me has exipred$/, async (arg0) => {
                act(() => {
                    container = render(<Provider store={store}>
                        <MfaPage />
                      </Provider>, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
            });
    
            when(/^user clicks on "(.*)" button$/, async (arg0) => {
                const confirmButton = container.getByRole("button", { name: /Confirm/i });
                fireEvent.click(confirmButton)
                const title = container.getByText("setMFATitle");
                expect("setMFATitle").toEqual(title.textContent);
            });
    
            then(/^user should see "(.*)" screen with all of component$/, async (arg0) => {
                const title = container.getByText("setMFATitle");
                expect("setMFATitle").toEqual(title.textContent);
                    });
            
                    and(/^user should see (.*) field$/, async (arg0) => {
                        const submissionMessage = container.getByTestId("mfaCode");
                        expect("mfaLabel").toEqual(
                        submissionMessage.placeHolder
                        )
            });
    
            and(/^user should see checkbox section "(.*)"$/, async (arg0) => {
                async () => {
                    const confirmButton = container.getByRole("button", { name: /confrimBtn/i });
                    fireEvent.click(confirmButton)
            
                    await waitFor(() => container.getByRole("button", { name: /resendCodeBtn/i }))
            
                    const resendCodeButton = container.getByRole("button", { name: /resendCodeBtn/i });
                    fireEvent.click(resendCodeButton)
            
                    await waitFor(() => container.getByText("mfaTitle"))
            
                    const title = container.getByText("mfaTitle");
                    expect("mfaTitle").toEqual(title.textContent);
                }
            });
    
            and(/^user should see description of check box written as "(.*)"$/, async (arg0) => {
                act(() => {
                    container = render(<Provider store={store}>
                        <MfaPage />
                      </Provider>, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  const title = container.getByText("mfaTitle");
                  expect("mfaTitle").toEqual(title.textContent);
            });
    
            and(/^user should see "(.*)" & "(.*)" button$/, async (arg0, arg1) => {
                act(() => {
                    container = render(<Provider store={store}>
                        <MfaPage />
                      </Provider>, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
            });
    
            when(/^user clicks on "(.*)" button$/, async (arg0) => {
                const confirmButton = container.getByRole("button", { name: /confrimBtn/i });
                fireEvent.click(confirmButton)
                const resendCodeButton = container.getByRole("button", { name: /resendCodeBtn/i });
                fireEvent.click(resendCodeButton)
                const title = container.getByText("mfaTitle");
                expect("mfaTitle").toEqual(title.textContent);
            });
    
            then('user receives an email/text message with the code to the email and mobile number', async () => {
                act(() => {
                    container = render(<Provider store={store}>
                        <MfaPage />
                      </Provider>, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
            });
    
            and(/^user should see (.*) field$/, async (arg0) => {
                act(() => {
                    container = render(<Provider store={store}>
                        <MfaPage />
                      </Provider>, {
                      container: document.body.appendChild(element),
                      legacyRoot: true,
                    });
                  });
                  await waitFor(() => container.getByText(/communicationMethodTitle/i));
                  expect(container).toMatchSnapshot();
            });
    
            and(/^user fill (.*) field with valid code$/, async (arg0) => {
                    const error = container.getByText("rememberMeLabel");
                        expect("rememberMeLabel").toEqual(error.textContent);
            });
    
            when(/^user click on "(.*)" button$/, async (arg0) => {
                async () => {
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
                }
            });
    
            then(/^user should see the following message "(.*)"$/, async (arg0) => {
                const errorMessage = container.getByLabelText("mfaDescription");
                expect("mfaDescription").toEqual(
                    errorMessage.textContent
                  );
            });
        });
    });
   
    test('EPIC_EPP-3_STORY_EPP-1022-Existing-Verify user should be able to login from device without being asked for MFA using registered mail-id within 3 seconds', ({  }) => {
        let container, login;
        const mock = new MockAdapter(axios);
        const element = document.createElement("div");
        test('"EPIC_EPP-3_STORY_EPP-1022-Existing-Verify user should be able to login from device without being asked for MFA using registered mail-id within 3 seconds"', ({ given, and, when, then }) => {
            given(/^user launch the "(.*)" url$/, async (arg0) => {
             act(() => {
                container = render(<Provider store={store}>
                    <MfaPage />
                  </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            and('user navigates to the Patient Portal application', async () => {
                act(() => {
                container = render(<Provider store={store}>
                    <MfaPage />
                  </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            when(/^user lands onto "(.*)" screen$/, async (arg0) => {
             act(() => {
                container = render(<Provider store={store}>
                    <MfaPage />
                  </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            then(/^user see (.*) and (.*) fields that was MFA was set up$/, async (arg0, arg1) => {
                act(() => {
                container = render(<Provider store={store}>
                    <MfaPage />
                  </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            and(/^user should fill valid (.*) field with the email$/, async (arg0) => {
             act(() => {
                container = render(<Provider store={store}>
                    <MfaPage />
                  </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            and(/^user should fill valid (.*) field$/, async (arg0) => {
             act(() => {
                container = render(<Provider store={store}>
                    <MfaPage />
                  </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            and(/^user should see the "(.*)" option has been selected that Remember me has exipred$/, async (arg0) => {
             act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            when(/^user clicks on "(.*)" button$/, async (arg0) => {
             act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            then(/^user should see "(.*)" screen with all of component$/, async (arg0) => {
             act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            and(/^user should see (.*) field$/, async (arg0) => {
             act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            and(/^user should see checkbox section "(.*)"$/, async (arg0) => {
             act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            and(/^user should see description of check box written as "(.*)"$/, async (arg0) => {
             act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            and(/^user should see "(.*)" & "(.*)" button$/, async (arg0, arg1) => {
                act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            when(/^user clicks on "(.*)" button$/, async (arg0) => {
             act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            then('user receives an email/text message with the code to the email and mobile number', async () => {
                act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            and(/^user should see (.*) field$/, async (arg0) => {
             act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            and(/^user fill (.*) field with valid code$/, async (arg0) => {
             act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            when(/^user click on "(.*)" button$/, async (arg0) => {
             act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            then(/^user should see the page loads within "(.*)"$/, async (arg0) => {
             act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            and(/^user should see the following message "(.*)"$/, async (arg0) => {
             act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
        });
    });
   
    test("EPIC_EPP-3_STORY_EPP-1022-Negative-Existing-Verify user should user should see the error message when the service is unavailable when user logs in from device without being asked for MFA using registered registered mail-id", ({  }) => {
        let container, login;
        const mock = new MockAdapter(axios);
        const element = document.createElement("div");
        test('"EPIC_EPP-3_STORY_EPP-1022-Negative-Existing-Verify user should user should see the error message when the service is unavailable when user logs in from device without being asked for MFA using registered registered mail-id"', ({ given, and, when, then }) => {
            given(/^user launch the "(.*)" url$/, async (arg0) => {
             act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            and('user navigates to the Patient Portal application', async () => {
                act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            when(/^user lands onto "(.*)" screen$/, async (arg0) => {
             act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            then(/^user see (.*) and (.*) fields that was MFA was set up$/, async (arg0, arg1) => {
                act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            and(/^user should fill valid (.*) field with the email$/, async (arg0) => {
             act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            and(/^user should fill valid (.*) field$/, async (arg0) => {
             act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            and(/^user should see the "(.*)" option has been selected that Remember me has exipred$/, async (arg0) => {
             act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            when(/^user clicks on "(.*)" button$/, async (arg0) => {
             act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            then(/^user should see "(.*)" screen with all of component$/, async (arg0) => {
             act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            and(/^user should see (.*) field$/, async (arg0) => {
             act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            and(/^user should see checkbox section "(.*)"$/, async (arg0) => {
             act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            and(/^user should see description of check box written as "(.*)"$/, async (arg0) => {
    
            });
    
            and(/^user should see "(.*)" & "(.*)" button$/, async (arg0, arg1) => {
                act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            when(/^user clicks on "(.*)" button$/, async (arg0) => {
             act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            then('user receives an email/text message with the code to the email and mobile number', async () => {
                act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            and(/^user should see (.*) field$/, async (arg0) => {
             act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            and(/^user fill (.*) field with valid code$/, async (arg0) => {
             act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            when(/^user click on "(.*)" button$/, async (arg0) => {
             act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            then('user should see the appropriate error message', async () => {
                act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
        });
         
    });
    
    test('EPIC_EPP-3_STORY_EPP-1022-Negative-Existing-Verify user should user should see the error message when the internet service is unavailable when user logs in from device using registered mail-id', ({  }) => {
        let container, login;
        const mock = new MockAdapter(axios);
        const element = document.createElement("div");
        test('"EPIC_EPP-3_STORY_EPP-1022-Existing-Verify user should be able to login from device that was set up with "Remember me" option selected, without being asked for MFA using registered mail-id"', ({ given, and, when, then }) => {
            given(/^user launch the "(.*)" url$/, async (arg0) => {
             act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            and('user navigates to the Patient Portal application', async () => {
                act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            when(/^user lands onto "(.*)" screen$/, async (arg0) => {
             act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            then(/^user see (.*) and (.*) fields that was MFA was set up$/, async (arg0, arg1) => {
                act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            and(/^user should fill valid (.*) field with the email$/, async (arg0) => {
             act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            and(/^user should fill valid (.*) field$/, async (arg0) => {
             act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            and(/^user should see the "(.*)" option has been selected that Remember me has exipred$/, async (arg0) => {
             act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            when(/^user clicks on "(.*)" button$/, async (arg0) => {
             act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            then(/^user should see "(.*)" screen with all of component$/, async (arg0) => {
             act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            and(/^user should see (.*) field$/, async (arg0) => {
             act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            and(/^user should see checkbox section "(.*)"$/, async (arg0) => {
             act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            and(/^user should see description of check box written as "(.*)"$/, async (arg0) => {
             act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            and(/^user should see "(.*)" & "(.*)" button$/, async (arg0, arg1) => {
    
            });
    
            when(/^user clicks on "(.*)" button$/, async (arg0) => {
             act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            then('user receives an email/text message with the code to the email and mobile number', async () => {
                act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            and(/^user should see (.*) field$/, async (arg0) => {
             act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            and(/^user fill (.*) field with valid code$/, async (arg0) => {
             act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            when(/^user click on "(.*)" button$/, async (arg0) => {
             act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
            });
    
            then(/^user should see the following message "(.*)"$/, async (arg0) => {
             act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
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
        
    });
    test('"EPIC_EPP-3_STORY_EPP-1022-Negative -Existing-Verify user should user should see the error message when the internet service is unavailable when user logs in from device without being asked for MFA using registered phone number"', ({ given, and, when, then }) => {
        given(/^user launch the "(.*)" url$/, async () => {
                act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
        });

        and('user navigates to the Patient Portal application', async () => {
                act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
        });

        when(/^user lands onto "(.*)" screen$/, async () => {
                act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
        });

        then(/^user see (.*) and (.*) fields that was MFA was set up$/, async (arg0, arg1) => {
               act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
        });

        and(/^user should fill valid (.*) field with the Phone Number$/, async () => {
                act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
        });

        and(/^user should fill valid (.*) field$/, async () => {
                act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
        });

        and(/^user should see the "(.*)" option has been selected that Remember me has exipred$/, async () => {
                act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
        });

        when(/^user clicks on "(.*)" button$/, async () => {
                act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
        });

        then(/^user should see "(.*)" screen with all of component$/, async () => {
                act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
        });

        and(/^user should see (.*) field$/, async () => {
                act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
        });

        and(/^user should see checkbox section "(.*)"$/, async () => {
                act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
        });

        and(/^user should see description of check box written as "(.*)"$/, async () => {
                act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
        });

        and(/^user should see "(.*)" & "(.*)" button$/, async (arg0, arg1) => {
               act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
        });

        when(/^user clicks on "(.*)" button$/, async () => {
                act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
        });

        then('user receives an email/text message with the code to the email and mobile number', async () => {
                act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
        });

        and(/^user should see (.*) field$/, async () => {
                act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
        });

        and(/^user fill (.*) field with valid code$/, async () => {
                act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
        });

        when(/^user click on "(.*)" button$/, async () => {
                act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
        });

        then('user should see the appropriate error message', async () => {
                act(() => {
                container = render(<Provider store={store}>
          <MfaPage />
        </Provider>, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
        });
    });
});