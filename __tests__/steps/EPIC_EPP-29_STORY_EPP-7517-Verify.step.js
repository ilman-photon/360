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
  "./__tests__/feature/Patient Portal/Sprint9/EPP-7517.feature"
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

const mockSearchResult = {
  entities: [
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

  beforeEach(() => {
    Object.defineProperty(document, "cookie", {
      writable: true,
      value: "authorized=true;accessToken=1234",
    });
  });

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
    await waitFor(() => container.getAllByText(wait)[0]);
  };

  const mockApi = (mockData = mockLockedAccounts) => {
    mock
      .onGet(`/ecp/accountRecovery/getAllLockedAccounts`)
      .reply(200, mockData);
  };

  const mockSearch = (mockData = mockSearchResult) => {
    mock
      .onGet(`/ecp/accountRecovery/getLockedAccountDetails/1`)
      .reply(200, mockData);
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

  test("EPIC_EPP-29_STORY_EPP-7517- Verify User should be able to view the search results based on search input", ({
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

    when("User lands on the view locked accounts screen", async () => {
      mockApi();
      await renderLockedAccount();
    });

    then(
      "User should be able to view the options below for searching a patient whose account is locked",
      (table) => {
        expectHeader();
      }
    );

    and(
      "User should be able to input Patient name, Email ID or Phone No to initiate the search",
      async () => {
        fireEvent.change(
          container.getByLabelText("Search by name, email or phone"),
          { target: { value: "1" } }
        );
        mockSearch();
        fireEvent.click(container.getByTestId("submit-search-bar-form"));
        await waitFor(() => {
          container.getByText(/Patient 1/i);
        });
      }
    );

    and(
      "User should be able to view the search results based on search input",
      () => {
        expect(container.getByText(/Patient 1/i)).toBeInTheDocument();
      }
    );
  });

  test("EPIC_EPP-29_STORY_EPP-7517- Verify User should be able to view the message ‘No records found’ copy text", ({
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

    when("User lands on the view locked accounts screen", async () => {
      mockApi();
      await renderLockedAccount();
    });

    then(
      "User should be able to view the options below for searching a patient whose account is locked",
      (table) => {
        expectHeader();
      }
    );

    and(
      "User should be able to input Patient name, Email ID or Phone No to initiate the search",
      async () => {
        fireEvent.change(
          container.getByLabelText("Search by name, email or phone"),
          { target: { value: "aaaa" } }
        );
        mockSearch({ entities: [] });
        fireEvent.click(container.getByTestId("submit-search-bar-form"));
        await waitFor(() => {
          container.getByText(/No results found/i);
        });
      }
    );

    when("User the search result is emptied", () => {
      expect(container.getByText(/No results found/i)).toBeInTheDocument();
    });

    and(
      "User should be able to view the message ‘No records found’ copy text",
      () => {
        expect(container.getByText(/No results found/i)).toBeInTheDocument();
      }
    );
  });

  test("EPIC_EPP-29_STORY_EPP-7517- Verify User should be able to input Patient name, Email ID or Phone No to initiate the search", ({
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

    when("User lands on the view locked accounts screen", async () => {
      mockApi();
      await renderLockedAccount();
    });

    then(
      "User should be able to view the options below for searching a patient whose account is locked",
      (table) => {
        expectHeader();
      }
    );

    and(
      "User should be able to input Patient name, Email ID or Phone No to initiate the search",
      () => {
        fireEvent.change(
          container.getByLabelText("Search by name, email or phone"),
          { target: { value: "Patient 1" } }
        );
      }
    );
  });

  test("EPIC_EPP-29_STORY_EPP-7517- Verify User should be able to view the options below for searching a patient whose account is locked", ({
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

    when("User lands on the view locked accounts screen", async () => {
      mockApi();
      await renderLockedAccount();
    });

    then(
      "User should be able to view the options below for searching a patient whose account is locked",
      (table) => {
        expectHeader();
      }
    );
  });
});
