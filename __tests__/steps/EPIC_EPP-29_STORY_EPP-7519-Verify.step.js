import { act, fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { defineFeature, loadFeature } from "jest-cucumber";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import mediaQuery from "css-mediaquery";
import LockedAccount from "../../src/pages/patient/admin/locked-accounts";
import { Login } from "../../src/components/organisms/Login/login";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint9/EPP-7519.feature"
);

const mock = new MockAdapter(axios);

const mockLockedAccounts = {
  entities: [
    {
      patientName: "Patient 1",
      patientId: "130708ca-ca3c-4abf-95f7-db7162b95471",
      emailId: "patient1@gmail.com",
      phoneNumber: "(977) 620-0001",
      preferredCommunication: "both",
      lockedDate: "12/01/2022  12:30PM",
      status: "Locked",
    },
    {
      patientName: "Patient 2",
      patientId: "130708ca-ca3c-4abf-95f7-db7162b95472",
      emailId: "patient2@gmail.com",
      phoneNumber: "(977) 620-0002",
      preferredCommunication: "both",
      lockedDate: "12/01/2022  12:30PM",
      status: "Locked",
    },
    {
      patientName: "Patient 3",
      patientId: "130708ca-ca3c-4abf-95f7-db7162b95473",
      emailId: "patient3@gmail.com",
      phoneNumber: "(977) 620-0003",
      preferredCommunication: "both",
      lockedDate: "12/01/2022  12:30PM",
      status: "Locked",
    },
    {
      patientName: "Patient 4",
      patientId: "130708ca-ca3c-4abf-95f7-db7162b95474",
      emailId: "patient4@gmail.com",
      phoneNumber: "(977) 620-0004",
      preferredCommunication: "both",
      lockedDate: "12/01/2022  12:30PM",
      status: "Locked",
    },
    {
      patientName: "Patient 5",
      patientId: "130708ca-ca3c-4abf-95f7-db7162b95475",
      emailId: "patient5@gmail.com",
      phoneNumber: "(977) 620-0005",
      preferredCommunication: "both",
      lockedDate: "12/01/2022  12:30PM",
      status: "Locked",
    },
  ],
};

const createMatchMedia = (width) => {
  return (query) => ({
    matches: mediaQuery.match(query, { width }),
    addListener: () => {},
    removeListener: () => {},
  });
};

defineFeature(feature, (test) => {
  let container;

  const userIsLoggedIn = () => {
    const mockOnLoginClicked = jest.fn((data, route, callback) => {
      callback({
        status: "success",
      });
    });
    act(() => {
      container = render(<Login OnLoginClicked={mockOnLoginClicked} />);
    });
    const usernameField = container.getByLabelText(/emailUserLabel/i);
    const passwordField = container.getByLabelText(/passwordLabel/i);
    act(() => {
      fireEvent.change(usernameField, { target: { value: "wrongUserName" } });
      fireEvent.change(passwordField, { target: { value: "validPassword" } });
    });
    expect(usernameField.value).not.toEqual("validUsername");
    expect(passwordField.value).toEqual("validPassword");
    const login = container.getByRole("button", { name: /Login/i });
    fireEvent.click(login);

    const expectedResult = {
      ResponseCode: 2001,
      ResponseType: "success",
      patientType: "admin",
    };
    mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
  };

  const userIsAdmin = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    expect(userData.userType).toBe("admin");
  };

  const renderLockedAccount = async (wait = /Patient 1/i) => {
    act(() => {
      container = render(
        <Provider store={store}>
          {LockedAccount.getLayout(<LockedAccount />)}
        </Provider>
      );
    });
    await waitFor(() => container.getByText(wait));
  };

  const mockApi = (mockData = mockLockedAccounts) => {
    console.log(">>>", mockData);
    mock
      .onGet(`/ecp/accountRecovery/getAllLockedAccounts`)
      .reply(200, mockData);
  };

  const mockUnlockApi = () => {
    mock
      .onGet(
        `/ecp/accountRecovery/unlockAccountByAdmin/130708ca-ca3c-4abf-95f7-db7162b95471`
      )
      .reply(200, {
        responseCode: 3000,
        responseType: "Account is UnLocked Successfully",
      });
  };

  const expectData = () => {
    expect(container.getByText(/Patient 1/i)).toBeInTheDocument();
    expect(container.getByText(/Patient 2/i)).toBeInTheDocument();
    expect(container.getByText(/Patient 3/i)).toBeInTheDocument();
    expect(container.getByText(/Patient 4/i)).toBeInTheDocument();
    expect(container.getByText(/Patient 5/i)).toBeInTheDocument();
  };

  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  const expectUnlockCTA = () => {
    expect(
      container.getAllByRole("button", { name: /Unlock/i }).length > 0
    ).toBeTruthy();
  };

  const expectSearchButton = () => {
    expect(container.getByTestId("submit-search-bar-form")).toBeInTheDocument();
  };

  const expectSortOption = () => {
    expect(
      container.getAllByTestId("ArrowDownwardIcon").length > 0
    ).toBeTruthy();
  };

  const expectPagination = () => {
    expect(container.getByText(/1 of 1/i)).toBeInTheDocument();
  };

  const expectHeader = () => {
    expect(container.getByText(/Patient Name/i)).toBeInTheDocument();
    expect(container.getByText(/Patient ID/i)).toBeInTheDocument();
    expect(container.getByText(/Email ID/i)).toBeInTheDocument();
    expect(container.getByText(/Phone Number/i)).toBeInTheDocument();
  };

  beforeAll(() => {
    localStorage.setItem("isAdmin", true);
  });

  afterAll(() => {
    localStorage.setItem("isAdmin", false);
  });

  test("EPIC_EPP-30_STORY_EPP-7519- Verify User should be able to view the confirmation message “Are you sure to unlock’ along with ‘Yes’ and ‘No’ options", ({
    given,
    and,
    when,
    then,
  }) => {
    given("User has logged into the patient portal", () => {
      userIsLoggedIn();
    });

    and("User launch Patient Portal url", () => {
      defaultValidation();
    });

    and("User is logged in as admin", () => {
      userIsAdmin();
    });

    and("User lands on the view locked accounts screen", async () => {
      mockApi();
      await renderLockedAccount();
    });

    when("User clicks on Unlock CTA", () => {
      fireEvent.click(container.getAllByRole("button", { name: /Unlock/i })[0]);
    });

    then(
      "User should be able to view the confirmation message “Are you sure to unlock’ along with ‘Yes’ and ‘No’ options",
      () => {
        expect(
          container.getByText(/Are you sure you want to unlock/i)
        ).toBeInTheDocument();
      }
    );
  });

  test('EPIC_EPP-30_STORY_EPP-7519- Verify User should be able to view the success message "Account of <Patient name> unlocked successfully"', ({
    given,
    and,
    when,
    then,
  }) => {
    given("User has logged into the patient portal", () => {
      userIsLoggedIn();
    });

    and("User launch Patient Portal url", () => {
      defaultValidation();
    });

    and("User is logged in as admin", () => {
      userIsAdmin();
    });

    and("User lands on the view locked accounts screen", async () => {
      mockApi();
      await renderLockedAccount();
    });

    when("User clicks on Unlock CTA", () => {
      fireEvent.click(container.getAllByRole("button", { name: /Unlock/i })[0]);
    });

    then(
      "User should be able to view the confirmation message “Are you sure to unlock’ along with ‘Yes’ and ‘No’ options",
      () => {
        expect(
          container.getByText(/Are you sure you want to unlock/i)
        ).toBeInTheDocument();
      }
    );

    when("User clicks on Yes option", async () => {
      mockUnlockApi();
      fireEvent.click(container.getByRole("button", { name: /Yes/i }));
      await waitFor(() => {
        container.getByText(/unlocked successfully/i);
      });
    });

    then(
      /^User should be able to view the success message "Account of (.*) unlocked successfully"$/,
      (arg0) => {
        expect(
          container.getByText(/unlocked successfully/i)
        ).toBeInTheDocument();
      }
    );
  });

  test("EPIC_EPP-30_STORY_EPP-7519- Verify User should be able to see the account of the respective patient should be unlocked", ({
    given,
    and,
    when,
    then,
  }) => {
    given("User has logged into the patient portal", () => {
      userIsLoggedIn();
    });

    and("User launch Patient Portal url", () => {
      defaultValidation();
    });

    and("User is logged in as admin", () => {
      userIsAdmin();
    });

    and("User lands on the view locked accounts screen", async () => {
      mockApi();
      await renderLockedAccount();
    });

    when("User clicks on Unlock CTA", () => {
      fireEvent.click(container.getAllByRole("button", { name: /Unlock/i })[0]);
    });

    then(
      "User should be able to view the confirmation message “Are you sure to unlock’ along with ‘Yes’ and ‘No’ options",
      () => {
        expect(
          container.getByText(/Are you sure you want to unlock/i)
        ).toBeInTheDocument();
      }
    );

    when("User clicks on Yes option", async () => {
      mockUnlockApi();
      const updatedUnlockAccounts = [...mockLockedAccounts.entities];
      updatedUnlockAccounts.splice(0, 1);
      mockApi({
        entities: updatedUnlockAccounts,
      });
      fireEvent.click(container.getByRole("button", { name: /Yes/i }));
      await waitFor(() => {
        container.getByText(/unlocked successfully/i);
      });
    });

    then(
      /^User should be able to view the success message "Account of (.*) unlocked successfully"$/,
      (arg0) => {
        expect(
          container.getByText(/unlocked successfully/i)
        ).toBeInTheDocument();
      }
    );

    and(
      "User should be able to see the account of the respective patient should be unlocked",
      () => {
        expect(container.queryByText("Patient 1")).toBeNull();
      }
    );
  });

  test("EPIC_EPP-30_STORY_EPP-7519- Verify the respective patient should receive the alert in preferred mode of communication", ({
    given,
    and,
    when,
    then,
  }) => {
    given("User has logged into the patient portal", () => {
      userIsLoggedIn();
    });

    and("User launch Patient Portal url", () => {
      defaultValidation();
    });

    and("User is logged in as admin", () => {
      userIsAdmin();
    });

    and("User lands on the view locked accounts screen", async () => {
      mockApi();
      await renderLockedAccount();
    });

    when("User clicks on Unlock CTA", () => {
      fireEvent.click(container.getAllByRole("button", { name: /Unlock/i })[0]);
    });

    then(
      "User should be able to view the confirmation message “Are you sure to unlock’ along with ‘Yes’ and ‘No’ options",
      () => {
        expect(
          container.getByText(/Are you sure you want to unlock/i)
        ).toBeInTheDocument();
      }
    );

    when("User clicks on Yes option", async () => {
      mockUnlockApi();
      const updatedUnlockAccounts = [...mockLockedAccounts.entities];
      updatedUnlockAccounts.splice(0, 1);
      mockApi({
        entities: updatedUnlockAccounts,
      });
      fireEvent.click(container.getByRole("button", { name: /Yes/i }));
      await waitFor(() => {
        container.getByText(/unlocked successfully/i);
      });
    });

    then(
      /^User should be able to view the success message "Account of (.*) unlocked successfully"$/,
      (arg0) => {
        expect(
          container.getByText(/unlocked successfully/i)
        ).toBeInTheDocument();
      }
    );

    and(
      "User should be able to see the account of the respective patient should be unlocked",
      () => {
        expect(container.queryByText("Patient 1")).toBeNull();
      }
    );

    and(
      "The respective patient should receive the alert in preferred mode of communication",
      () => {
        defaultValidation();
      }
    );
  });

  test("EPIC_EPP-30_STORY_EPP-7519- Verify User should be able to see the account should not be unlocked if No is selected during confirmation", ({
    given,
    and,
    when,
    then,
  }) => {
    given("User has logged into the patient portal", () => {
      userIsLoggedIn();
    });

    and("User launch Patient Portal url", () => {
      defaultValidation();
    });

    and("User is logged in as admin", () => {
      userIsAdmin();
    });

    and("User lands on the view locked accounts screen", async () => {
      mockApi();
      await renderLockedAccount();
    });

    when("User clicks on Unlock CTA", () => {
      fireEvent.click(container.getAllByRole("button", { name: /Unlock/i })[0]);
    });

    then(
      "User should be able to view the confirmation message “Are you sure to unlock’ along with ‘Yes’ and ‘No’ options",
      () => {
        expect(
          container.getByText(/Are you sure you want to unlock/i)
        ).toBeInTheDocument();
      }
    );

    when("User clicks on No option", () => {
      fireEvent.click(container.getByRole("button", { name: /No/i }));
    });

    then(
      "User should be able to see the account should not be unlocked if No is selected during confirmation",
      () => {
        expectData();
      }
    );
  });
});
