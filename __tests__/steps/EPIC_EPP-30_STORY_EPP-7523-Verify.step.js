import { defineFeature, loadFeature } from "jest-cucumber";
import "@testing-library/jest-dom";
import { act, fireEvent, render, waitFor } from "@testing-library/react";
import { Login } from "../../src/components/organisms/Login/login";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { renderWithProviders } from "../src/utils/test-util";
import AccountRecovery from "../../src/pages/patient/admin/account-recovery";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint9/EPP-7523.feature"
);

const mock = new MockAdapter(axios);

const mockGetPatientAccountAxios = [
  {
    patientId: "8ad30e6a-db45-4147-b108-0d8a4c810782",
    emailId: "existi@email.com",
    phoneNumber: "(123) 321-3213",
    preferredCommunication: "both",
    username: "existi@email.com",
    verified: true,
    status: "L"
  },
  {
    patientId: "88aa9b58-0fdc-453e-a125-1bc264d93d15",
    emailId: "exist3@email.com",
    phoneNumber: "(123) 321-3213",
    preferredCommunication: "both",
    username: "exist3@email.com",
  },
  {
    patientId: "0489acb7-e90d-43f3-a39d-9adf1d744b0b",
    emailId: "patient1232@gmail.com",
    phoneNumber: "(977) 623-4567",
    preferredCommunication: "both",
    username: "patient1232@gmail.com",
  },
  {
    patientId: "059a8a7c-9ebb-4a9f-8d89-807c25d4b0df",
    emailId: "fajar.dev2@photon.com",
    phoneNumber: "(123) 123-1231",
    preferredCommunication: "both",
    username: "fajar.dev2@photon.com",
    status: "Y",
  },
  {
    patientId: "f48da1d9-cf46-4ac7-96c2-da213ae2c857",
    emailId: "exist17oct@gmail.com",
    phoneNumber: "(123) 123-1231",
    preferredCommunication: "both",
    username: "exist17oct@gmail.com",
  },
  {
    patientId: "fc600d6f-fdb1-4d40-a453-6555228457ae",
    emailId: "a3@gmail.com",
    phoneNumber: "(123) 456-3213",
    preferredCommunication: "both",
    username: "a3@gmail.com",
  },
  {
    patientId: "1681b935-5c74-4367-ae5f-d9ad7026099f",
    emailId: "email123@gmail.com",
    phoneNumber: "(987) 123-0007",
    preferredCommunication: "both",
    username: "email123@gmail.com",
  },
  {
    patientId: "f352a9fe-53a4-4be8-866f-851ce45331ff",
    emailId: "patient123@gmail.com",
    phoneNumber: "(977) 623-4567",
    preferredCommunication: "both",
    username: "patient123@gmail.com",
    status: "Y",
  },
  {
    patientId: "83287d76-ba1e-4b00-9782-90e910cdaf3a",
    emailId: "home123@photon.com",
    phoneNumber: "(888) 620-1887",
    preferredCommunication: "both",
    username: "home123@photon.com",
  },
  {
    patientId: "6db47b6e-d7f7-4a6d-aaee-843745dbabfb",
    emailId: "fajar.dev3@photon.com",
    phoneNumber: "(123) 123-1231",
    preferredCommunication: "both",
    username: "fajar.dev3@photon.com",
    status: "Y",
  },
  {
    patientId: "8453bb06-f4b0-4dac-a9f6-a00b7c15fefe",
    emailId: "exist1@email.com",
    phoneNumber: "(123) 321-3213",
    preferredCommunication: "both",
    username: "exist1@email.com",
  },
  {
    patientId: "858c98e2-b3c0-47c6-aa6f-6bd224881b33",
    emailId: "17oct@gmail.com",
    phoneNumber: "(123) 123-1231",
    preferredCommunication: "both",
    username: "17oct@gmail.com",
  },
  {
    patientId: "c9077c58-caed-4154-96d7-9297f30a53e6",
    emailId: "testeye8@gmail.com",
    phoneNumber: "(123) 123-1231",
    preferredCommunication: "both",
    username: "testeye8@gmail.com",
    status: "Y",
  },
  {
    patientId: "8285fe12-eca9-44b2-b96c-c69e6d160167",
    emailId: "cordial123@gmail.com",
    phoneNumber: "(966) 123-0007",
    preferredCommunication: "both",
    username: "cordial123@gmail.com",
  },
  {
    patientId: "26096763-42de-4cae-873d-7ffd1717d70f",
    emailId: "testeye20@mailinator.com",
    phoneNumber: "(123) 123-1231",
    preferredCommunication: "both",
    username: "testeye20@mailinator.com",
    status: "Y",
  },
  {
    patientId: "df522eaa-632b-4507-8f49-2638d3933bd0",
    emailId: "home12345@photon.com",
    phoneNumber: "8126201887",
    preferredCommunication: "both",
    username: "home12345@photon.com",
  },
  {
    patientId: "156bbf4d-870a-4ad0-8223-1c78685cf89d",
    emailId: "dewo@gmail.com",
    phoneNumber: "(123) 432-1321",
    preferredCommunication: "email",
    username: "dewo@gmail.com",
    status: "Y",
  },
  {
    patientId: "8f449386-7402-49ee-8d8c-4ec40863a103",
    emailId: "testeye9@gmail.com",
    phoneNumber: "(123) 123-1231",
    preferredCommunication: "both",
    username: "testeye9@gmail.com",
    status: "N",
  },
  {
    patientId: "b8d3b1b1-5ce5-4338-8c5c-7fc7d52e2186",
    emailId: "a4@gmail.com",
    phoneNumber: "(123) 456-3213",
    preferredCommunication: "both",
    username: "a4@gmail.com",
  },
  {
    patientId: "2613b20f-963c-4b32-8fce-5480f8757786",
    emailId: "exist@email.com",
    phoneNumber: "(123) 456-3213",
    preferredCommunication: "both",
    username: "exist@email.com",
  },
  {
    patientId: "71834a3e-d1a0-42fd-9ca4-56884d53e15e",
    emailId: "17cot1@aa.aa",
    phoneNumber: "(123) 123-1231",
    preferredCommunication: "both",
    username: "17cot1@aa.aa",
  },
  {
    patientId: "9d3debf4-a713-422b-8923-1ba5406a1a5b",
    emailId: "guest17oct@aa.aa",
    phoneNumber: "(123) 123-1231",
    preferredCommunication: "both",
    username: "guest17oct@aa.aa",
  },
  {
    patientId: "c14208f3-275b-4e3a-8864-793dd9bdba3a",
    emailId: "teguhbabu@gmail.com",
    phoneNumber: "(123) 456-7890",
    preferredCommunication: "both",
    username: "teguhbabu@gmail.com",
    status: "Y",
  },
  {
    patientId: "ca7bf760-2cb0-4a9c-bb9c-c7519db6d39b",
    emailId: "doublecheckcordial@gmail.com",
    phoneNumber: "(966) 123-4447",
    preferredCommunication: "both",
    username: "doublecheckcordial@gmail.com",
    status: "Y",
  },
  {
    patientId: "2c82059d-767b-4088-bee0-26691f2d846a",
    emailId: "ilmansharif@gmail.com",
    phoneNumber: "(123) 456-7891",
    preferredCommunication: "both",
    username: "ilmansharif@gmail.com",
    status: "Y",
  },
  {
    patientId: "7a3bd6eb-77d5-4dcb-a1c6-c9dd3768ef4e",
    emailId: "a1@gmail.com",
    phoneNumber: "(123) 456-3213",
    preferredCommunication: "both",
    username: "a1@gmail.com",
  },
  {
    patientId: "1a91921f-f1ed-4e02-843a-b5c8c92ec091",
    emailId: "testeye21@mailinator.com",
    phoneNumber: "(123) 123-1231",
    preferredCommunication: "email",
    username: "testeye21@mailinator.com",
    status: "Y",
  },
  {
    patientId: "8fff766c-3f66-4054-84ce-6452e47416fc",
    emailId: "patient123@mailinator.com",
    phoneNumber: "(123) 456-7654",
    preferredCommunication: "both",
    username: "patient123@mailinator.com",
    status: "Y",
  },
  {
    patientId: "040e90ed-75f3-44f9-90b1-6b0ae49ff73b",
    emailId: "exist2@email.com",
    phoneNumber: "(123) 321-3213",
    preferredCommunication: "both",
    username: "exist2@email.com",
  },
  {
    patientId: "18949608-f5f1-4bd0-8028-6edc9067c4f2",
    emailId: "a2@gmail.com",
    phoneNumber: "(123) 456-3213",
    preferredCommunication: "both",
    username: "a2@gmail.com",
  },
  {
    patientId: "b5273cb1-7329-468e-9e41-a7472c4220b2",
    emailId: "a5@gmail.com",
    phoneNumber: "(123) 456-3213",
    preferredCommunication: "both",
    username: "a5@gmail.com",
  },
  {
    patientId: "03352d4a-00a2-42c8-a940-01a6ef1ea537",
    emailId: "doly2@mailinator.com",
    phoneNumber: "(123) 123-1231",
    preferredCommunication: "both",
    username: "doly2@mailinator.com",
  },
  {
    patientId: "13f60844-cc3d-42c2-8ba9-6927f95ad639",
    emailId: "testeye10@gmail.com",
    phoneNumber: "(123) 456-7876",
    preferredCommunication: "both",
    username: "testeye10@gmail.com",
    status: "L",
  },
  {
    patientId: "22d52102-e17c-40d9-9fd5-d2fb74694865",
    emailId: "abcde@gmail.com",
    phoneNumber: "(192) 123-1231",
    preferredCommunication: "both",
    username: "abcde@gmail.com",
  },
  {
    patientId: "5a3ad9c3-695c-4b58-a88f-3f96e7e110b8",
    emailId: "datatest123@gmail.com",
    phoneNumber: "7999631098",
    preferredCommunication: "both",
    username: "datatest123@gmail.com",
  },
  {
    patientId: "a4a0682c-5969-483f-ba94-e187364c3b47",
    emailId: "checktest123@gmail.com",
    phoneNumber: "(917) 620-1567",
    preferredCommunication: "both",
    username: "checktest123@gmail.com",
  },
  {
    patientId: "f6f92a6e-5e94-44f0-bedb-1411a664fb39",
    emailId: "checktest12345@gmail.com",
    phoneNumber: "(917) 620-1577",
    preferredCommunication: "both",
    username: "checktest12345@gmail.com",
  },
  {
    patientId: "c2ef18e6-05c1-4d18-8e1c-8a98f59be1fe",
    emailId: "luck123@gmail.com",
    phoneNumber: "(997) 620-1577",
    preferredCommunication: "both",
    username: "luck123@gmail.com",
  },
  {
    patientId: "ae9e9aa6-c2ea-401a-b8bc-a2931ea7b199",
    emailId: "mycheck123@photon.com",
    phoneNumber: "8121201887",
    preferredCommunication: "both",
    username: "mycheck123@photon.com",
  },
  {
    patientId: "c006bf08-abeb-4e72-b090-3a1a432a9312",
    emailId: "fajar.dev4@photon.com",
    phoneNumber: "(123) 123-1231",
    preferredCommunication: "both",
    username: "fajar.dev4@photon.com",
    status: "N",
  },
];

defineFeature(feature, (test) => {
  let container;
  
  beforeEach(async () => {
    let localStore = {};
    localStorage.getItem = (key) => {
      if (key === "userData") {
        return JSON.stringify({
          communicationMethod: {
            email: "patient1@photoninfotech.net",
            phone: "(977) 623-4567",
          },
          patientId: "98f9404b-6ea8-4732-b14f-9c1a168d8066",
          userType: "admin",
        });
      } else if (key === "userProfile") {
        return JSON.stringify({
          title: 0,
          firstName: "dewo",
          lastName: "Simanjuntak",
          dob: "12/12/1991",
          age: "30",
          sex: 0,
          address: [],
          smokingHistory: [],
          contactPrefrence: true,
          contactInformation: {
            phones: [{ type: 3, number: "(977) 623-4567" }],
            emails: [
              {
                type: 1,
                email: "patient123@gmail.com",
                _id: "69218e5a-dc72-4883-82c5-ea359b058c74",
                _version: "8f2d0a2a-c528-441c-a598-61e5d76eef9c",
                _created: "Oct 13, 2022, 4:31:42 PM",
                _updated: "Oct 13, 2022, 4:31:42 PM",
                _createdBy: {
                  _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                  _links: {
                    self: {
                      href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                    },
                  },
                },
              },
            ],
            noEmail: false,
            contactPreferenceDetail: {
              phone: false,
              text: false,
              email: false,
              _id: "6132788a-1a30-4b7d-b099-0e2812a4a2b2",
              _version: "7b45daa1-df05-4931-adbe-4018c9ba3bf3",
              _created: "Oct 13, 2022, 4:31:42 PM",
              _updated: "Oct 13, 2022, 4:31:42 PM",
              _createdBy: {
                _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                _links: {
                  self: {
                    href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                  },
                },
              },
            },
            _id: "ff408b85-1e4f-4dc8-9af9-64930cd3e904",
            _version: "9863ac12-b6fd-4b35-8b04-9614c8745c0d",
            _created: "Oct 13, 2022, 4:31:42 PM",
            _updated: "Oct 13, 2022, 4:31:42 PM",
            _createdBy: {
              _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
              _links: {
                self: {
                  href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                },
              },
            },
          },
          patientDetails: {
            isFlagNew: true,
            isFlagInCollection: false,
            isFlagBadCheck: false,
            isFlagDeceased: false,
            isFlagChartless: true,
            _id: "8c2a42bd-b917-4ef4-8a43-d78baae992ca",
            _version: "c8978b70-2ab5-4e89-90e4-00d03a690213",
            _created: "Oct 13, 2022, 4:31:42 PM",
            _updated: "Oct 13, 2022, 4:31:42 PM",
            _createdBy: {
              _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
              _links: {
                self: {
                  href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                },
              },
            },
          },
          alerts: [],
          familyMember: [],
          status: "CREATED",
          sources: [],
          isEmergencyContactAvailable: false,
          _links: {
            self: { href: "/v1/patients/f352a9fe-53a4-4be8-866f-851ce45331ff" },
          },
          _id: "98f9404b-6ea8-4732-b14f-9c1a168d8066",
          _version: "4a2be31b-96f8-4804-95df-a673c0801713",
          _created: "Oct 13, 2022, 4:31:42 PM",
          _updated: "Oct 19, 2022, 4:09:50 PM",
          _createdBy: {
            _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
            _links: {
              self: {
                href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
              },
            },
          },
          _updatedBy: {
            _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
            _links: {
              self: {
                href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
              },
            },
          },
        });
      }
      return localStore[key] || null;
    }
  });

  afterEach(() => {
    mock.reset();
  });

  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  function userIsLoggedIn() {
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
  }

  function userIsAdmin() {
    const userData = JSON.parse(localStorage.getItem("userData"))
    expect(userData.userType).toBe("admin")
  }

  function adminLandsOnAccountRecoveryPage() {
    container = renderWithProviders(<AccountRecovery />);
  }

  function adminViewTheSearchBar() {
    const searchBar = container.getAllByTestId("search-bar-input")
    expect(searchBar).toHaveLength(2)
  }

  async function searchSomething() {
    const keyword = 'a'
    mock
      .onGet(`/ecp/accountRecovery/getPatientDetails/${keyword}`)
      .reply(200, mockGetPatientAccountAxios);
    const searchBarInputs = await waitFor(() => container.getAllByLabelText(/Search by name, email or phone/i))
    fireEvent.change(searchBarInputs[0], {target: {value: keyword}})
    const searchBarSubmitBtns = container.getAllByTestId("submit-search-bar-form")
    act(() => {
      fireEvent.click(searchBarSubmitBtns[0])
    })
  }

  async function searchSomethingEmpty() {
    const keyword = 'empty'
    mock
      .onGet(`/ecp/accountRecovery/getPatientDetails/${keyword}`)
      .reply(200, []);
  
    const searchBarInputs = await waitFor(() => container.getAllByLabelText(/Search by name, email or phone/i))
    fireEvent.change(searchBarInputs[0], {target: {value: keyword}})
    const searchBarSubmitBtns = container.getAllByTestId("submit-search-bar-form")
    act(() => {
      fireEvent.click(searchBarSubmitBtns[0])
    })
  }

  async function seeSearchResult() {
    const searchResultTitle = await waitFor(() => container.getAllByText(/40 Results found using your search criteria/i))
    expect(searchResultTitle[0]).toBeInTheDocument()
  }

  test('EPIC_EPP-30_STORY_EPP-7523- Verify Admin should be able to view the options for searching for a patient on Recover username/reset password screen', ({ given, and }) => {
    given('User has logged into the patient portal', () => {
      userIsLoggedIn();
    });

    and('User is logged in as Admin', () => {
      userIsAdmin()
    });

    and('Admin lands on the Recover username/reset password screen', () => {
      adminLandsOnAccountRecoveryPage()
    });

    and('Admin should be able to view the options for searching for a patient on Recover username/reset password screen such as', (table) => {
      adminViewTheSearchBar()
    });
  });

  test('EPIC_EPP-30_STORY_EPP-7523- Verify Admin should be able to view the search results based on search input', ({ given, and, when, then }) => {
    given('User has logged into the patient portal', () => {
      userIsLoggedIn();
    });

    and('User is logged in as Admin', () => {
      userIsAdmin()
    });

    and('Admin lands on the Recover username/reset password screen', () => {
      adminLandsOnAccountRecoveryPage()
    });

    and('Admin should be able to view the options for searching for a patient on Recover username/reset password screen such as', (table) => {
      adminViewTheSearchBar()
    });

    when('Admin should be able to input Patient name, Email ID or Phone No to initiate the searc', () => {
      searchSomething()
    });

    then('Admin should be able to view the search results based on search input', () => {
      seeSearchResult()
    });
  });

  test('EPIC_EPP-30_STORY_EPP-7523- Verify Admin should be able to view the message ‘No records found’ if the search result is empty', ({ given, and, when, then }) => {
    given('User has logged into the patient portal', () => {
      userIsLoggedIn();
    });

    and('User is logged in as Admin', () => {
      userIsAdmin()
    });

    and('Admin lands on the Recover username/reset password screen', () => {
      adminLandsOnAccountRecoveryPage()
    });

    and('Admin should be able to view the options for searching for a patient on Recover username/reset password screen such as', (table) => {
      adminViewTheSearchBar()
    });

    when('Admin should be able to input Patient name, Email ID or Phone No to initiate the search', () => {
      searchSomethingEmpty()
    });

    then('Admin should be able to view the message ‘No records found’ if the search result is empty', async () => {
      const noResultMsg = await waitFor(() => container.getAllByText(/No records found./i))
      expect(noResultMsg[0]).toBeInTheDocument()
    });
  });

  test('EPIC_EPP-30_STORY_EPP-7523- Verify Admin should be able to view the message ‘Please search to find the patient details’ when the page loads', ({ given, and, when, then }) => {
    given('User has logged into the patient portal', () => {
      userIsLoggedIn();
    });

    and('User is logged in as Admin', () => {
      userIsAdmin()
    });

    and('Admin lands on the Recover username/reset password screen', () => {
      adminLandsOnAccountRecoveryPage()
    });

    and('Admin should be able to view the options for searching for a patient on Recover username/reset password screen such as', (table) => {
      adminViewTheSearchBar()
    });

    when('Admin should be able to input Patient name, Email ID or Phone No to initiate the searc', () => {
      searchSomething()
    });

    then('Admin should be able to view the search results based on search input', () => {
      seeSearchResult()
    });
  });
})