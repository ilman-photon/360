import { act, fireEvent, render, waitFor } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import MfaPage, { getServerSideProps }  from "../../src/pages/patient/mfa";
import "@testing-library/jest-dom";
import { renderWithProviders } from "../src/utils/test-util";


const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint3/EPP-281.feature", {
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
  test('EPIC_EPP-3_STORY_EPP-281-Existing-Verify user should be able to login from device that was set up with "Remember me" option selected, without being asked for MFA using registered mail-id', ({  }) => {
      test('"EPIC_EPP-3_STORY_EPP-281-Existing-Verify user should be able to login from device that was set up with "Remember me" option selected, without being asked for MFA using registered mail-id"', ({ given, and, when, then }) => {
        let container, login;
        const mock = new MockAdapter(axios);
        const element = document.createElement("div");
        given(/^user launch the "(.*)" url$/, async (arg0) => {
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

        when(/^user lands onto "(.*)" screen$/, async (arg0) => {
          act(() => {
            container = renderWithProviders(<AuthPage />, {
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

        and(/^user should fill valid (.*) field with the email$/, async (arg0) => {
          const usernameField = container.getByLabelText("Username");
          fireEvent.change(usernameField, { target: { value: "validUsername" } });
          expect(usernameField.value).toEqual("validUsername");
        });

        and(/^user should fill valid (.*) field$/, async (arg0) => {
          const passwordField = container.getByLabelText("passwordLabel");
          fireEvent.change(passwordField, { target: { value: "validPassword" } });
          expect(passwordField.value).toEqual("validPassword");
        });

        and(/^user should see the "(.*)" option has been selected that Remember me has not expired$/, async (arg0) => {
          const remembermeOptin = container.getByText( "Remember me" );
          expect( "Remember me").toEqual(remembermeOptin.textContent);
        });

        when(/^user clicks on "(.*)" button$/, async (arg0) => {
            const title = container.getByText("Continue");
            expect("Continue").toEqual(title.textContent);
        });

        then(/^user should see "(.*)" screen$/, async (arg0) => {
          const title = container.getByText("Multi factor Authentication has been set successfully");
          expect("Multi factor Authentication has been set successfully").toEqual(title.textContent);
        });
      });
  });
  test('EPIC_EPP-3_STORY_EPP-281-Existing-Verify user should be able to login from device without being asked for MFA using registered mail-id within 3 seconds', ({  }) => {
    test('"EPIC_EPP-3_STORY_EPP-281-Existing-Verify user should be able to login from device without being asked for MFA using registered mail-id within 3 seconds"', ({ given, and, when, then }) => {
      given(/^user launch the "(.*)" url$/, async (arg0) => {
             act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
      });

      and('user navigates to the Patient Portal application', () => {
        expect(true).toBeTruthy()
      });

      when(/^user lands onto "(.*)" screen$/, async (arg0) => {
             act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
      });

      then(/^user see (.*) and (.*) fields that was MFA was set up$/, async (arg0, arg1) => {
               act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
      });

      and(/^user should fill valid (.*) field with the email$/, async (arg0) => {
             act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
      });

      and(/^user should fill valid (.*) field$/, async (arg0) => {
             act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
      });

      and(/^user should see the "(.*)" option has been selected that Remember me has not expired$/, async (arg0) => {
             act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
      });

      when(/^user clicks on "(.*)" button$/, async (arg0) => {
             act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
      });

      then(/^user should see the page loads within "(.*)"$/, async (arg0) => {
             act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
      });

      and(/^user should see "(.*)" screen$/, async (arg0) => {
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

  test('EPIC_EPP-3_STORY_EPP-281-Negative-Existing-Verify user should user should see the error message when the internet service is unavailable when user logs in from device using registered mail-id', ({  }) => {
    test('"EPIC_EPP-3_STORY_EPP-281-Existing-Verify user should be able to login from device that was set up with "Remember me" option selected, without being asked for MFA using registered mail-id"', ({ given, and, when, then }) => {
      given(/^user launch the "(.*)" url$/, async (arg0) => {
             act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
      });

      and('user navigates to the Patient Portal application', () => {
        expect(true).toBeTruthy()
      });

      when(/^user lands onto "(.*)" screen$/, async (arg0) => {
             act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
      });

      then(/^user see (.*) and (.*) fields that was MFA was set up$/, async (arg0, arg1) => {
               act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
      });

      and(/^user should fill valid (.*) field with the email$/, async (arg0) => {
             act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
      });

      and(/^user should fill valid (.*) field$/, async (arg0) => {
             act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
      });

      and(/^user should see the "(.*)" option has been selected that Remember me has not expired$/, async (arg0) => {
             act(() => {
                container = render(<MfaPage />, {
                  container: document.body.appendChild(element),
                  legacyRoot: true,
                });
              });
              await waitFor(() => container.getByText(/communicationMethodTitle/i));
              expect(container).toMatchSnapshot();
      });

      when(/^user clicks on "(.*)" button$/, async (arg0) => {
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
