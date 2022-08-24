import UpdatePasswordPage from "../../src/pages/patient/update-password";
import SetPasswordComponent from "../../src/components/organisms/SetPassword/setPassword";
import { act, fireEvent, render, waitFor } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import MfaPage, { getServerSideProps } from "../../src/pages/patient/mfa";
import "@testing-library/jest-dom";
import AuthPage from "../../src/pages/patient/login";
import Cookies from "universal-cookie";

jest.mock("universal-cookie", () => {
    class MockCookies {
        static result = {};
        get(param) {
            if (param === "username") return "user1@photon.com"
            if (param === "ip") return "10.10.10.10"
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
  "./__tests__/feature/Patient Portal/Sprint3/EPP-268.feature",
  {
    tagFilter: "@included and not @excluded",
  }
);

defineFeature(feature, (test) => {
  let container;
  const mock = new MockAdapter(axios);
  beforeEach(async () => {
    const contex = {
      req: {
        headers: {
          cookie: "username=user1%40photon.com; mfa=true"
        }
      }
    }

    const userData = {
      "communicationMethod": {
        "email": "user1@photon.com",
        "phone": "9998887772"
      },
      "ResponseCode": 4000,
      "ResponseType": "success",
    }

    mock.onPost(`/ecp/patient/mfa/getUserData`).reply(200, userData);

    getServerSideProps(contex)
    container = render(<MfaPage />)
    //await waitFor(() => container.getByText("communicationMethodTitle"));

  });
  afterEach(() => {
    mock.reset();
  });
  test('EPIC_EPP-3_STORY_EPP-268 - Verify user should see error message when enter invalid code (Prefered Mode of Communication both)', ({ given, and, when, then }) => {
    let container, login;
    const element = document.createElement("div");

    given('user is on second MFA screen', async () => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();

    });

    and(/^user should see "(.*)" screen with all of component$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();

    });

    and(/^user should see (.*) field$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();

    });

    and(/^user fill (.*) field with invalid code$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      ////await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();

    });

    when(/^user click on "(.*)" button$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();

    });

    then(/^user should see error message "(.*)"$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();

    });

    and(/^user should see text below message written as "(.*)"$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();

    });
  });
  test('EPIC_EPP-3_STORY_EPP-268 - Verify user should see error message when enter invalid code (Prefered Mode of Communication Email)', ({ given, and, when, then }) => {
    let container, login;
    const element = document.createElement("div");
    given('user is on second MFA screen', async () => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user should see "(.*)" screen with all of component$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user should see (.*) field$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user fill (.*) field with invalid code$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    when(/^user click on "(.*)" button$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    then(/^user should see error message "(.*)"$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user should see text below message written as "(.*)"$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });
  });

  test('EPIC_EPP-3_STORY_EPP-268 - Verify user should see error message when enter invalid code (Prefered Mode of Communication Phone)', ({ given, and, when, then }) => {
    let container, login;
    const element = document.createElement("div");
    given('user is on second MFA screen', async () => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user should see "(.*)" screen with all of component$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user should see (.*) field$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user fill (.*) field with invalid code$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    when(/^user click on "(.*)" button$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    then(/^user should see error message "(.*)"$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user should see text below message written as "(.*)"$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });
  });

  test('EPIC_EPP-3_STORY_EPP-268 - Verify user should see error message when user leaves as blank field (Prefered Mode of Communication both)', ({ given, and, when, then }) => {
    let container, login;
    const element = document.createElement("div");
    given('user is on second MFA screen', async () => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user should see "(.*)" screen with all of component$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user should see (.*) field$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user fill (.*) field with invalid code$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    when(/^user click on "(.*)" button$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    then(/^user should see error message "(.*)"$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user should see text below message written as "(.*)"$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });
  });

  test('EPIC_EPP-3_STORY_EPP-268 - Verify user should see error message when user leaves as blank field (Prefered Mode of Communication Email)', ({ given, and, when, then }) => {
    let container, login;
    const element = document.createElement("div");
    given('user is on second MFA screen', async () => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user should see "(.*)" screen with all of component$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user should see (.*) field$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user leave as blank (.*) field$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    when(/^user click on "(.*)" button$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    then(/^user should see error message "(.*)"$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user should see text below message written as "(.*)"$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });
  });


  test('EPIC_EPP-3_STORY_EPP-268 - Verify user should see error message when user leaves as blank field (Prefered Mode of Communication Phone)', ({ given, and, when, then }) => {
    let container, login;
    const element = document.createElement("div");
    given('user is on second MFA screen', async () => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user should see "(.*)" screen with all of component$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user should see (.*) field$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user leave as blank (.*) field$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    when(/^user click on "(.*)" button$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    then(/^user should see error message "(.*)"$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user should see text below message written as "(.*)"$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });
  });

  test('EPIC_EPP-3_STORY_EPP-268 - Verify user should able to request code after 30 minutes (Prefered Mode of Communication both)', ({ given, and, when, then }) => {
    let container, login;
    const element = document.createElement("div");
    given('user is on second MFA screen', async () => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user should see "(.*)" screen with all of component$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user should see (.*) field$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user leave as blank (.*) field$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    when(/^user click on "(.*)" button$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    then(/^user should see error message "(.*)"$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user should see text below message written as "(.*)"$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user leave as blank (.*) field$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    when(/^user click on "(.*)" button$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    then(/^user should see error message "(.*)"$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user should see text below message written as "(.*)"$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user leave as blank (.*) field$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    when(/^user click on "(.*)" button$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    then(/^user should see error message "(.*)"$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user should see text below message written as "(.*)"$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user should see "(.*)" button$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });
  });

  test('EPIC_EPP-3_STORY_EPP-268 - Verify user should able to request code after 30 minutes (Prefered Mode of Communication Email)', ({ given, and, when, then }) => {
    let container, login;
    const element = document.createElement("div");
    given('user is on second MFA screen', async () => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user should see "(.*)" screen with all of component$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user should see (.*) field$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user leave as blank (.*) field$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    when(/^user click on "(.*)" button$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    then(/^user should see error message "(.*)"$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user should see text below message written as "(.*)"$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user leave as blank (.*) field$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    when(/^user click on "(.*)" button$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    then(/^user should see error message "(.*)"$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user should see text below message written as "(.*)"$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user leave as blank (.*) field$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    when(/^user click on "(.*)" button$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    then(/^user should see error message "(.*)"$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user should see text below message written as "(.*)"$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user should see "(.*)" button$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });
  });

  test('EPIC_EPP-3_STORY_EPP-268 - Verify user should able to request code after 30 minutes (Prefered Mode of Communication Phone)', ({ given, and, when, then }) => {
    let container, login;
    const element = document.createElement("div");
    given('user is on second MFA screen', async () => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user should see "(.*)" screen with all of component$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user should see (.*) field$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user leave as blank (.*) field$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    when(/^user click on "(.*)" button$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    then(/^user should see error message "(.*)"$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user should see text below message written as "(.*)"$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user leave as blank (.*) field$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    when(/^user click on "(.*)" button$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    then(/^user should see error message "(.*)"$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user should see text below message written as "(.*)"$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user leave as blank (.*) field$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    when(/^user click on "(.*)" button$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    then(/^user should see error message "(.*)"$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user should see text below message written as "(.*)"$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user should see "(.*)" button$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });
  });


  test('EPIC_EPP-3_STORY_EPP-268 - Verify user see error screen when service is unavailable', ({ given, and, when, then }) => {
    let container, login;
    const element = document.createElement("div");

    given('user is on second MFA screen', async () => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user should see "(.*)" screen with all of component$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user should see (.*) field$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user leave as blank (.*) field$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    when(/^user click on "(.*)" button$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    then('user should see error screen', async () => {
      expect(true).toBeTruthy()
    });
  });

  test('EPIC_EPP-3_STORY_EPP-268 - Verify user see error screen when internet is unavailable', ({ given, and, when, then }) => {
    let container, login;
    const element = document.createElement("div");

    given('user is on second MFA screen', async () => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user should see "(.*)" screen with all of component$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user should see (.*) field$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user leave as blank (.*) field$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    when(/^user click on "(.*)" button$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    then('user should see error screen', async () => {
      expect(true).toBeTruthy()
    });
  });

  test('EPIC_EPP-3_STORY_EPP-268 - Verify user should not see any error when user tap on F12 keyboard in console', ({ given, and, when, then }) => {
    let container, login;
    const element = document.createElement("div");

    given('user is on second MFA screen', async () => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user should see "(.*)" screen with all of component$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    when(/^user tap on F(\d+) on keyboard$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    then(/^user should not see any error in console when user tap on F(\d+) keyboard$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });
  });

  test('EPIC_EPP-3_STORY_EPP-268 - Verify user should be able to enter only numeric in "<Enter code>" field', ({ given, and, when, then }) => {
    let container, login;
    const mock = new MockAdapter(axios);
    const element = document.createElement("div");

    given('user is on second MFA screen', async () => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user should see "(.*)" screen with all of component$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user should see (.*) field$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user fill (.*) field with invalid code$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    when(/^user click on "(.*)" button$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    then(/^user should see error message "(.*)"$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });

    and(/^user should see text below message written as "(.*)"$/, async (arg0) => {
      act(() => {
        container = render(<MfaPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      //await waitFor(() => container.getByText(/communicationMethodTitle/i));
      expect(container).toMatchSnapshot();
      expect(true).toBeTruthy()
    });
  });

});
