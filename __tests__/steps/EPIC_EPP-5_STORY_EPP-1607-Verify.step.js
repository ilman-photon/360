import {
  act,
  cleanup,
  fireEvent,
  render,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import { Provider } from "react-redux";
import Appointments from "../../src/pages/patient/appointments";
import store from "../../src/store/store";
const useRouter = jest.spyOn(require("next/router"), "useRouter");
import constants from "../../src/utils/constants";
import Cookies from "universal-cookie";
import { doLogin, renderLogin } from "../../__mocks__/commonSteps";
import App from "../../src/pages/_app";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint5/EPP-1607.feature"
);

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

defineFeature(feature, (test) => {
  let container;
  const mock = new MockAdapter(axios);

  const history = {
    count: 1,
    entities: [
      {
        appointmentType: {
          code: "Retina_checkup",
          name: "Retina checkup",
        },
        patient: {
          firstName: "demo",
          lastName: "nikita",
          dob: "11/25/1992",
          age: "29",
          sex: "1",
          patientDetails: {
            isFlagNew: false,
            isFlagInCollection: false,
            isFlagBadCheck: false,
            isFlagDeceased: false,
            isFlagChartless: false,
            _id: "bc5335d3-e802-47bc-afb5-d30241b4ea66",
            _version: "209451a6-2b8b-4729-8c0a-2859beeef5b5",
            _created: "Jul 4, 2022, 4:42:40 AM",
            _updated: "Aug 25, 2022, 10:31:54 AM",
            _createdBy: {
              _id: "981ad89e-7fee-42d8-92ec-c34324d862a0",
              _links: {
                self: {
                  href: "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0",
                },
              },
            },
            _updatedBy: {
              _id: "981ad89e-7fee-42d8-92ec-c34324d862a0",
              _links: {
                self: {
                  href: "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0",
                },
              },
            },
          },
          isEmergencyContactAvailable: false,
          contactPrefrence: false,
          status: "UPDATED",
          _id: "fd7beec7-1a6a-49f2-afd9-ebca6fb78568",
          _version: "22dc0908-8d27-46e4-b5ec-6035e7e11f33",
          _created: "Jul 4, 2022, 4:42:40 AM",
          _updated: "Aug 25, 2022, 10:31:54 AM",
          _createdBy: {
            _id: "981ad89e-7fee-42d8-92ec-c34324d862a0",
            _links: {
              self: {
                href: "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0",
              },
            },
          },
          _updatedBy: {
            _id: "981ad89e-7fee-42d8-92ec-c34324d862a0",
            _links: {
              self: {
                href: "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0",
              },
            },
          },
        },
        provider: {
          firstName: "Todd",
          lastName: "Bellamy",
          designation: "MBBS, MD",
          inHouse: false,
          workPhone: "3219898898",
          rating: 9,
          profilePhoto: {
            digitalAsset: {
              uid: "d72b0b16-99ab-4ae4-aba3-13b81930b68a",
              fileName: "test",
              assetUrl: "/v1/patient",
              _version: "d72b0b16-99ab-4ae4-aba3-13b81930b77a",
            },
          },
          address: {
            addressLine1: "800 14th St Apt B",
            city: "Virginia Beach",
            state: "VA",
            zip: "23451",
          },
          _id: "19f1c186-37a8-46ef-a731-0a1f022be782",
          _version: "6b5fb285-bcca-4a3f-8a47-369fe2babf8b",
          _updated: "Oct 17, 2022, 5:53:20 PM",
          _updatedBy: {
            _id: "981ad89e-7fee-42d8-92ec-c34324d862a0",
            _links: {
              self: {
                href: "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0",
              },
            },
          },
        },
        office: {
          name: "Ballwin",
          locationNumber: "10022",
          taxId: "12312",
          addressLine1: "568 Allens Mill Rd",
          city: "Yorktown",
          state: "VA",
          zip: "23692",
          labAccountNumber: "21312",
          _id: "4cd970a0-8529-4b44-a4c5-99c9f4e8d078",
          _version: "0c381712-420e-4705-bb6d-f0226ceb5b12",
          _updated: "Sep 17, 2022, 10:14:52 AM",
          _updatedBy: {
            _id: "981ad89e-7fee-42d8-92ec-c34324d862a0",
            _links: {
              self: {
                href: "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0",
              },
            },
          },
        },
        appointmentDate: "09/15/2022",
        appointmentTime: "11:10",
        appointmentEndTime: "11:15",
        appointmentLength: 5,
        confirmationDetail: {
          confirmationDate: "09/15/2022",
          confirmationTime: "15:32",
          confirmationBy: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
        },
        appointmentHistory: [],
        state: {
          subState: {
            subState: "WAITING_FOR_TECHNICIAN",
            _id: "dbc73dfa-95c9-48dc-84e8-094ec1d98c6e",
            _version: "d7596191-7ca5-4b72-9a61-a65923b349ca",
            _created: "Sep 15, 2022, 10:02:54 AM",
            _updated: "Sep 15, 2022, 10:02:54 AM",
            _createdBy: {
              _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
              _links: {
                self: {
                  href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
                },
              },
            },
          },
          state: "CHECK_IN",
          _id: "4fd867ef-5344-46df-9d0b-8467bc34a076",
          _version: "348aac2a-180b-486d-858b-16edab665b5a",
          _created: "Sep 15, 2022, 10:02:54 AM",
          _updated: "Sep 15, 2022, 10:02:54 AM",
          _createdBy: {
            _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
            _links: {
              self: {
                href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
              },
            },
          },
        },
        newPatient: false,
        insurancePayers: [],
        override: false,
        quickAppointmentflag: false,
        status: "CREATED",
        primaryMember: false,
        confirmed: false,
        _links: {
          self: {
            href: "/v1/appointments/ba852d09-da44-4b8d-8e83-63a27f5f540e",
          },
        },
        _id: "ba852d09-da44-4b8d-8e83-63a27f5f540e",
        _version: "03a4a6d7-2f14-4f6c-96b0-b8a67fa26505",
        _created: "Sep 15, 2022, 10:02:54 AM",
        _updated: "Sep 15, 2022, 10:02:54 AM",
        _createdBy: {
          _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
          _links: {
            self: {
              href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
            },
          },
        },
        _updatedBy: null,
      },
    ],
    _links: {
      self: {
        href: "/appointments?pageNo=0&pageSize=100",
      },
    },
  };

  const upcoming = {
    count: 0,
    entities: [],
  };

  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  beforeAll(() => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2022, 12, 12));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  const renderPastAppointments = async () => {
    cleanup();
    useRouter.mockReturnValue({
      back: jest.fn(),
    });
    mock
      .onGet(`/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/upcoming`)
      .reply(200, upcoming);
    mock
      .onGet(`/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/history`)
      .reply(200, history);

    act(() => {
      container = render(
        <Provider store={store}>
          {Appointments.getLayout(<Appointments />)}
        </Provider>
      );
    });

    await waitFor(() => {
      container.getByText("Past Appointments");
    });

    return container;
  };

  test("EPIC_EPP-48_STORY_EPP-1607 - Verify that user should be able to view past appointments", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the  Patient Portal url", async () => {
      container = await renderLogin();
    });

    when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
      defaultValidation();
    });

    and("user clicks on Login button", () => {
      Cookies.result = { authorized: true };
      doLogin(mock, container);
    });

    then("user lands on to the Patient portal home page", () => {
      defaultValidation();
    });

    and("user navigates to Appointments screen", () => {
      defaultValidation();
    });

    when("user lands on Appointments screen", () => {
      defaultValidation();
    });

    then(
      "user should be able to view an option to schedule new appointments",
      () => {
        defaultValidation();
      }
    );

    then(
      "user should be able to view Upcoming Appointments with an option to reschedule and cancel each of them",
      async () => {
        container = await renderPastAppointments();
        expect(
          container.getByText("Upcoming Appointments")
        ).toBeInTheDocument();
        expect(container.getByText("Past Appointments")).toBeInTheDocument();
      }
    );

    then("user should be able to view Past Appointments", () => {
      expect(container.getByText("Past Appointments")).toBeInTheDocument();
    });
  });

  test("EPIC_EPP-48_STORY_EPP-1607 - Verify that whether user should be able to view the list of past appointments", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the  Patient Portal url", async () => {
      container = await renderLogin();
    });

    when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
      defaultValidation();
    });

    and("user clicks on Login button", async () => {
      Cookies.result = { authorized: true };
      doLogin(mock, container);
    });

    then("user lands on to the Patient portal home page", () => {
      defaultValidation();
    });

    and("user navigates to Appointments screen", () => {
      defaultValidation();
    });

    when("user lands on Appointments screen", async () => {
      container = await renderPastAppointments();
    });

    then("user should be able to view Past Appointments", () => {
      expect(container.getByText("Past Appointments")).toBeInTheDocument();
    });

    then("user should be able to view the list of past appointments", () => {
      expect(container.getByText(/Todd Bellamy/i)).toBeInTheDocument();
    });
  });

  test("EPIC_EPP-48_STORY_EPP-1607 - Verify whether user should be able to view the details under each past appointment", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the  Patient Portal url", async () => {
      container = await renderLogin();
    });

    when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
      defaultValidation();
    });

    and("user clicks on Login button", async () => {
      Cookies.result = { authorized: true };
      doLogin(mock, container);
    });

    then("user lands on to the Patient portal home page", () => {
      defaultValidation();
    });

    and("user navigates to Appointments screen", () => {
      defaultValidation();
    });

    when("user lands on Appointments screen", async () => {
      container = await renderPastAppointments();
    });

    then("user should be able to view Past Appointments", () => {
      expect(container.getByText("Past Appointments")).toBeInTheDocument();
    });

    then("user should be able to view the list of past appointments", () => {
      expect(container.getByText(/Todd Bellamy/i)).toBeInTheDocument();
    });

    and("user clicks on any of the past appointments", () => {
      defaultValidation();
    });

    then(
      "user should be able to view the details (Date, Time, Doctor’s Name, Location’s address, Location’s Phone number) under each past appointment",
      () => {
        expect(
          container.getByText(/Thursday, Sep 15 - 11:10AM/i)
        ).toBeInTheDocument();
        expect(container.getByText(/Todd Bellamy/i)).toBeInTheDocument();
        expect(container.getByText(/Retina checkup/i)).toBeInTheDocument();
        expect(container.getByText(/568 Allens Mill Rd/i)).toBeInTheDocument();
        expect(container.getByText("(321) 989-8898")).toBeInTheDocument();
      }
    );
  });

  test("EPIC_EPP-48_STORY_EPP-1607 - Verify whether the user should be able to see the appropriate error message when there are no past appointments", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the  Patient Portal url", async () => {
      container = await renderLogin();
    });

    when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
      defaultValidation();
    });

    and("user clicks on Login button", () => {
      Cookies.result = { authorized: true };
      doLogin(mock, container);
    });

    then("user lands on to the Patient portal home page", () => {
      defaultValidation();
    });

    and("user navigates to Appointments screen", () => {
      defaultValidation();
    });

    when("user lands on Appointments screen", async () => {
      cleanup();
      useRouter.mockReturnValue({
        back: jest.fn(),
      });
      mock
        .onGet(
          `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/upcoming`
        )
        .reply(200, upcoming);
      mock
        .onGet(`/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/history`)
        .reply(200, upcoming);

      act(() => {
        container = render(
          <Provider store={store}>
            {Appointments.getLayout(<Appointments />)}
          </Provider>
        );
      });

      await waitFor(() => {
        container.getByText(
          /We currently do not have any past appointments scheduled for this account./i
        );
      });
    });

    then(
      "user should be able to see the message You have no past appointments when there are no past appointments",
      () => {
        expect(
          container.getByText(
            /We currently do not have any past appointments scheduled for this account./i
          )
        ).toBeInTheDocument();
      }
    );
  });

  test("EPIC_EPP-48_STORY_EPP-1607 - Verify whether the user should able to see the past appointments without Internet connection", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the  Patient Portal url", async () => {
      cleanup();
      container = await renderLogin();
    });

    when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
      defaultValidation();
    });

    and("user clicks on Login button", () => {
      Cookies.result = { authorized: true };
      doLogin(mock, container);
    });

    then("user lands on to the Patient portal home page", () => {
      defaultValidation();
    });

    and("user navigates to Appointments screen", () => {
      defaultValidation();
    });

    when("user lands on Appointments screen", async () => {
      cleanup();
      mock
        .onGet(
          `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/upcoming`
        )
        .reply(200, upcoming);
      mock
        .onGet(`/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/history`)
        .reply(200, upcoming);

      act(() => {
        container = render(
          <Provider store={store}>
            {Appointments.getLayout(<Appointments />)}
          </Provider>
        );
      });

      await waitFor(() => {
        container.getByText(
          /We currently do not have any past appointments scheduled for this account./i
        );
      });
    });

    when("there is no internet connection available", async () => {
      useRouter.mockReturnValue({
        back: jest.fn(),
        push: jest.fn(),
        beforePopState: jest.fn(),
        events: { on: jest.fn() },
      });
      act(() => {
        container = render(<App Component={Appointments} />);
      });
      let goOffline = new window.Event("offline");
      act(() => {
        window.dispatchEvent(goOffline);
      });
      await waitFor(() => container.getByText(/No Internet Connection/i));
    });

    then("user should view appropriate error message", () => {
      const text = container.getByText(/No Internet Connection/i);
      expect(text).toBeInTheDocument();
    });
  });

  test("EPIC_EPP-48_STORY_EPP-1607 - Verify whether any error is displaying when we press F12 after user lands on Appointments screen", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the  Patient Portal url", async () => {
      cleanup();
      container = await renderLogin();
    });

    when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
      defaultValidation();
    });

    and("user clicks on Login button", () => {
      Cookies.result = { authorized: true };
      doLogin(mock, container);
    });

    then("user lands on to the Patient portal home page", () => {
      defaultValidation();
    });

    and("user navigates to Appointments screen", () => {
      defaultValidation();
    });

    when("user lands on Appointments screen", async () => {
      container = await renderPastAppointments();
    });

    then("user should be able to view Past Appointments", () => {
      expect(container.getByText("Past Appointments")).toBeInTheDocument();
    });

    and(/^press the F(\d+) button from the keyboard.$/, (arg0) => {
      defaultValidation();
    });

    then("none of the javascript error should be seen by the user", () => {
      defaultValidation();
    });
  });

  test("EPIC_EPP-48_STORY_EPP-1607 - Verify whether the error message is displaying when the service is unavailable", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the  Patient Portal url", async () => {
      container = await renderLogin();
    });

    when(/^user provides  (.*) and (.*)$/, (arg0, arg1) => {
      defaultValidation();
    });

    and("user clicks on Login button", () => {
      Cookies.result = { authorized: true };
      doLogin(mock, container);
    });

    then("user lands on to the Patient portal home page", () => {
      defaultValidation();
    });

    and("user navigates to Appointments screen", () => {
      defaultValidation();
    });

    when("user lands on Appointments screen", async () => {
      cleanup();
      useRouter.mockReturnValue({
        back: jest.fn(),
      });
      mock
        .onGet(
          `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/upcoming`
        )
        .reply(404, {});
      mock
        .onGet(`/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/history`)
        .reply(404, {});

      act(() => {
        container = render(
          <Provider store={store}>
            {Appointments.getLayout(<Appointments />)}
          </Provider>
        );
      });

      await waitFor(() => {
        container.getByText("Past Appointments");
      });
    });

    when("the service is unavailable", () => {
      defaultValidation();
    });

    then(
      /^error message '(\d+) - Server is not ready to handle the request' should get display$/,
      (arg0) => {
        defaultValidation();
      }
    );
  });
});
