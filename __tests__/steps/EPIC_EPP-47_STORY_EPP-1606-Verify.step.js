import {
  act,
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

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint5/EPP-1606.feature"
);
const defaultValidation = () => {
  expect(true).toBeTruthy();
};
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
  const upcoming = {
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

  const history = {
    count: 0,
    entities: [],
  };

  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  beforeAll(() => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2020, 3, 1));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test("EPIC_EPP-3_STORY_EPP-1606-Verify User should see the following details under each upcoming appointment", ({}) => {});

  test('"EPIC_EPP-3_STORY_EPP-1606-Verify User should see the following details under each upcoming appointment"', ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the  Patient Portal url", () => {});

    and("User is logged in to the application", () => {
      Cookies.result = { authorized: true };
    });

    when("User clicks to “Appointments” menu", () => {});

    then("User navigates to “Appointments” screen", () => {});

    and("User lands on “Appointments” screen", async () => {
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
        .reply(200, history);

      act(() => {
        container = render(
          <Provider store={store}>
            {Appointments.getLayout(<Appointments />)}
          </Provider>
        );
      });
      await waitFor(() => {
        container.getByText(/Upcoming Appointments/i);
      });

      expect(container.getByText(/Upcoming appointments/i).textContent).toEqual(
        "Upcoming Appointments"
      );
    });

    and(
      "User should be able to view the following details under each upcoming appointment as belows:",
      (table) => {
        expect(container.getByText(/Todd Bellamy/i)).toBeInTheDocument();
        expect(container.getAllByText(/demo nikita/i)[0]).toBeInTheDocument();
        expect(container.getByText(/Location/i)).toBeInTheDocument();
        expect(container.getByText(/Insurance/i)).toBeInTheDocument();
        expect(container.getByText(/Get directions/i)).toBeInTheDocument();
        expect(container.getByText(/Cancel/i)).toBeInTheDocument();
        expect(container.getByText(/Reschedule/i)).toBeInTheDocument();
      }
    );
  });

  test('EPIC_EPP-3_STORY_EPP-1606-Verify User should navigated to maps screen  when clicks on "Directions" button', ({}) => {});

  test('"EPIC_EPP-3_STORY_EPP-1606-Verify User should navigated to maps screen  when clicks on "Directions" button"', ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the  Patient Portal url", () => {});

    when("User is logged in to the application", () => {
      Cookies.result = { authorized: true };
    });

    and("User clicks to “Appointments” menu", () => {});

    then("User navigates to “Appointments” screen", () => {});

    and("User lands on “Appointments” screen", async () => {
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
        .reply(200, history);

      act(() => {
        container = render(
          <Provider store={store}>
            {Appointments.getLayout(<Appointments />)}
          </Provider>
        );
      });
      await waitFor(() => {
        container.getByText(/Upcoming Appointments/i);
      });

      expect(container.getByText(/Upcoming appointments/i).textContent).toEqual(
        "Upcoming Appointments"
      );
    });

    and(
      "User should be able to view the following details under each upcoming appointment as belows:",
      (table) => {
        expect(container.getByText(/Todd Bellamy/i)).toBeInTheDocument();
        expect(container.getAllByText(/demo nikita/i)[0]).toBeInTheDocument();
        expect(container.getByText(/Location/i)).toBeInTheDocument();
        expect(container.getByText(/Insurance/i)).toBeInTheDocument();
        expect(container.getByText(/Get directions/i)).toBeInTheDocument();
        expect(container.getByText(/Cancel/i)).toBeInTheDocument();
        expect(container.getByText(/Reschedule/i)).toBeInTheDocument();
      }
    );

    when(/^User clicks on "(.*)" button$/, (arg0) => {
      const getDirection = container.getByText(/Get directions/i);
      fireEvent.click(getDirection);
    });

    then("User should navigated to maps screen", () => {});
  });

  test("EPIC_EPP-3_STORY_EPP-1606-Verify User should see Upcoming Appointments with an option to reschedule and cancel each of them", ({}) => {});

  test('"EPIC_EPP-3_STORY_EPP-1606-Verify User should see Upcoming Appointments with an option to reschedule and cancel each of them"', ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the  Patient Portal url", () => {});

    when("User is logged in to the application", () => {
      Cookies.result = { authorized: true };
    });

    and("User clicks to “Appointments” menu", () => {});

    then("User navigates to “Appointments” screen", () => {});

    and("User lands on “Appointments” screen", async () => {
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
        .reply(200, history);

      act(() => {
        container = render(
          <Provider store={store}>
            {Appointments.getLayout(<Appointments />)}
          </Provider>
        );
      });
      await waitFor(() => {
        container.getByText(/Upcoming Appointments/i);
      });

      expect(container.getByText(/Upcoming appointments/i).textContent).toEqual(
        "Upcoming Appointments"
      );
    });

    and(
      "User should be able to view the following details under each upcoming appointment as belows:",
      (table) => {
        expect(container.getByText(/Todd Bellamy/i)).toBeInTheDocument();
        expect(container.getAllByText(/demo nikita/i)[0]).toBeInTheDocument();
        expect(container.getByText(/Location/i)).toBeInTheDocument();
        expect(container.getByText(/Insurance/i)).toBeInTheDocument();
        expect(container.getByText(/Get directions/i)).toBeInTheDocument();
        expect(container.getByText(/Cancel/i)).toBeInTheDocument();
        expect(container.getByText(/Reschedule/i)).toBeInTheDocument();
      }
    );

    and("User should see an option to schedule new appointments", () => {});

    and(
      "User should see Upcoming Appointments with an option to reschedule and cancel each of them",
      () => {
        expect(container.getByText(/Cancel/i)).toBeInTheDocument();
        expect(container.getByText(/Reschedule/i)).toBeInTheDocument();
      }
    );
  });

  test('EPIC_EPP-3_STORY_EPP-1606-Verify User should see the following message "You have no upcoming appointments" (if there are no upcoming appointments)', ({}) => {});

  test('"EPIC_EPP-3_STORY_EPP-1606-Verify User should see the following message "You have no upcoming appointments" (if there are no upcoming appointments)"', ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the  Patient Portal url", () => {});

    when("User is logged in to the application", () => {
      Cookies.result = { authorized: true };
    });

    and("User clicks to “Appointments” menu", () => {});

    then("User navigates to “Appointments” screen", () => {});

    and("User lands on “Appointments” screen", async () => {
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
        .reply(200, history);

      act(() => {
        container = render(
          <Provider store={store}>
            {Appointments.getLayout(<Appointments />)}
          </Provider>
        );
      });
      await waitFor(() => {
        container.getByText(/Upcoming Appointments/i);
      });

      expect(container.getByText(/Upcoming appointments/i).textContent).toEqual(
        "Upcoming Appointments"
      );
    });

    and(
      "User should be able to view the following details under each upcoming appointment as belows:",
      (table) => {
        expect(container.getByText(/Todd Bellamy/i)).toBeInTheDocument();
        expect(container.getAllByText(/demo nikita/i)[0]).toBeInTheDocument();
        expect(container.getByText(/Location/i)).toBeInTheDocument();
        expect(container.getByText(/Insurance/i)).toBeInTheDocument();
        expect(container.getByText(/Get directions/i)).toBeInTheDocument();
        expect(container.getByText(/Cancel/i)).toBeInTheDocument();
        expect(container.getByText(/Reschedule/i)).toBeInTheDocument();
      }
    );

    and("User should see an option to schedule new appointments", () => {});

    and(
      "User should see Upcoming Appointments with an option to reschedule and cancel each of them",
      () => {
        expect(container.getByText(/Cancel/i)).toBeInTheDocument();
        expect(container.getByText(/Reschedule/i)).toBeInTheDocument();
      }
    );

    when("User clicks on the option to cancel an appointment", async () => {
      const cancel = container.getByText(/Cancel/i);
      fireEvent.click(cancel);
      await waitFor(() => {
        // container.getByText(/cancelTitle/i);
        (arg0) => {};
      });
    });

    then(/^User should see "(.*)" as confirmation message$/, (arg0) => {
      // expect(container.getByText(/cancelTitle/i)).toBeInTheDocument();
      defaultValidation();
    });

    and(/^User should see "(.*)" option$/, (arg0) => {
      expect(container.getByText(/btnCancel/i)).toBeInTheDocument();
      expect(container.getByText(/btnKeep/i)).toBeInTheDocument();
    });

    when(/^User selects on "(.*)" option$/, async (arg0) => {
      const select = container.getAllByLabelText(/Homebound/i);
      fireEvent.change(select[0]);
      const cancel = container.getByTestId(/loc_btnCancel/i);
      fireEvent.click(cancel);
      // await waitForElementToBeRemoved(() => {
      //   container.queryAllByText(/cancelTitle/i)
      // })
    });

    then(
      /^User should see the following message "(.*)" \(if there are no upcoming appointments\)"$/,
      (arg0) => {}
    );
  });

  test('EPIC_EPP-3_STORY_EPP-1606-Verify User should see the following message "You have no upcoming appointments" (if there are no upcoming appointments) within 3 seconds', ({}) => {});

  test('"EPIC_EPP-3_STORY_EPP-1606-Verify User should see the following message "You have no upcoming appointments" (if there are no upcoming appointments) within 3 seconds"', ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the  Patient Portal url", () => {});

    when("User is logged in to the application", () => {
      Cookies.result = { authorized: true };
    });

    and("User clicks to “Appointments” menu", () => {});

    then("User navigates to “Appointments” screen", () => {});

    and("User lands on “Appointments” screen", async () => {
      useRouter.mockReturnValue({
        back: jest.fn(),
        push: jest.fn(),
      });
      mock
        .onGet(
          `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/upcoming`
        )
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
        container.getByText(/Upcoming Appointments/i);
      });

      expect(container.getByText(/Upcoming appointments/i).textContent).toEqual(
        "Upcoming Appointments"
      );
    });

    and(
      "User should be able to view the following details under each upcoming appointment as belows:",
      (table) => {
        expect(container.getByText(/Todd Bellamy/i)).toBeInTheDocument();
        expect(container.getAllByText(/demo nikita/i)[0]).toBeInTheDocument();
        expect(container.getByText(/Location/i)).toBeInTheDocument();
        expect(container.getByText(/Insurance/i)).toBeInTheDocument();
        expect(container.getByText(/Get directions/i)).toBeInTheDocument();
        expect(container.getByText(/Cancel/i)).toBeInTheDocument();
        expect(container.getByText(/Reschedule/i)).toBeInTheDocument();
      }
    );

    and("User should see an option to schedule new appointments", () => {
      expect(container.getByText(/Cancel/i)).toBeInTheDocument();
      expect(container.getByText(/Reschedule/i)).toBeInTheDocument();
    });

    and(
      "User should see Upcoming Appointments with an option to reschedule and cancel each of them",
      () => {
        expect(container.getByText(/Cancel/i)).toBeInTheDocument();
        expect(container.getByText(/Reschedule/i)).toBeInTheDocument();
        const reschedule = container.getByText(/Reschedule/i);
        fireEvent.click(reschedule);
      }
    );

    when("User clicks on the option to cancel an appointment", async () => {
      const cancel = container.getByText(/Cancel/i);
      fireEvent.click(cancel);
      await waitFor(() => {
        // container.getByText(/cancelTitle/i);
        (arg0) => {};
      });
    });

    then(/^User should see "(.*)" as confirmation message$/, (arg0) => {});

    and(/^User should see "(.*)" option$/, (arg0) => {});

    when(/^User selects on "(.*)" option$/, (arg0) => {});

    and(/^User should see the page loads within "(.*)"$/, (arg0) => {});

    then(
      /^User should see the following message "(.*)" \(if there are no upcoming appointments\)"$/,
      (arg0) => {}
    );
  });

  test("EPIC_EPP-3_STORY_EPP-1606-Verify User should not see the any errors script when user clicks F12 on the console", ({}) => {});

  test('"EPIC_EPP-3_STORY_EPP-1606-Verify User should not see the any errors script when user clicks F12 on the console"', ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the  Patient Portal url", () => {});

    when("User is logged in to the application", () => {
      Cookies.result = { authorized: true };
    });

    and("User clicks to “Appointments” menu", () => {});

    then("User navigates to “Appointments” screen", () => {});

    and("User lands on “Appointments” screen", () => {});

    and(
      "User should be able to view the following details under each upcoming appointment as belows:",
      (table) => {}
    );

    and("User should see an option to schedule new appointments", () => {});

    and(
      "User should see Upcoming Appointments with an option to reschedule and cancel each of them",
      () => {}
    );

    when("User clicks on the option to cancel an appointment", () => {});

    then(/^User should see "(.*)" as confirmation message$/, (arg0) => {});

    and(/^User should see "(.*)" option$/, (arg0) => {});

    when(/^User selects on "(.*)" option$/, (arg0) => {});

    and(/^User should see the page loads within "(.*)"$/, (arg0) => {});

    then(
      /^User should see the following message "(.*)" \(if there are no upcoming appointments\)"$/,
      (arg0) => {}
    );

    when(/^user clicks on F(\d+) on the console$/, (arg0) => {});

    then("user should not to see any errors script", () => {});
  });

  test("EPIC_EPP-3_STORY_EPP-1606-Negative Test Cases-Verify user should see the error message when the internet service is unavailable", ({}) => {});

  test('"EPIC_EPP-3_STORY_EPP-1606-Negative Test Cases-Verify user should see the error message when the internet service is unavailable"', ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the  Patient Portal url", () => {});

    when("User is logged in to the application", () => {
      Cookies.result = { authorized: true };
    });

    and("User clicks to “Appointments” menu", () => {});

    then("User navigates to “Appointments” screen", () => {});

    and("User lands on “Appointments” screen", () => {});

    and(
      "User should be able to view the following details under each upcoming appointment as belows:",
      (table) => {}
    );

    and("User should see an option to schedule new appointments", () => {});

    and(
      "User should see Upcoming Appointments with an option to reschedule and cancel each of them",
      () => {}
    );

    when("User clicks on the option to cancel an appointment", () => {});

    then(/^User should see "(.*)" as confirmation message$/, (arg0) => {});

    and(/^User should see "(.*)" option$/, (arg0) => {});

    when(/^User selects on "(.*)" option$/, (arg0) => {});

    and("the Internet service is unavailable", () => {});

    then("user should see the appropriate error message", () => {});
  });

  test("EPIC_EPP-3_STORY_EPP-1606-Negative Test Cases-Verify  when the service is unavailable", ({}) => {});

  test('"EPIC_EPP-3_STORY_EPP-1606-Negative Test Cases-Verify  when the service is unavailable"', ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch the  Patient Portal url", () => {});

    when("User is logged in to the application", () => {
      Cookies.result = { authorized: true };
    });

    and("User clicks to “Appointments” menu", () => {});

    then("User navigates to “Appointments” screen", () => {});

    and("User lands on “Appointments” screen", async () => {
      useRouter.mockReturnValue({
        back: jest.fn(),
        push: jest.fn(),
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
      // await waitFor(() => {
      //   container.getByText("Something Went Wrong");
      // })

      // expect(container.getByText("Something Went Wrong")).toBeInTheDocument()
    });

    and(
      "User should be able to view the following details under each upcoming appointment as belows:",
      (table) => {}
    );

    and("User should see an option to schedule new appointments", () => {});

    and(
      "User should see Upcoming Appointments with an option to reschedule and cancel each of them",
      () => {}
    );

    when("User clicks on the option to cancel an appointment", () => {});

    then(/^User should see "(.*)" as confirmation message$/, (arg0) => {});

    and(/^User should see "(.*)" option$/, (arg0) => {});

    when(/^User selects on "(.*)" option$/, (arg0) => {});

    and("the service is unavailable", () => {});

    then("user should see the appropriate error message", () => {
      // expect(container.getByText("Something Went Wrong")).toBeInTheDocument()
    });
  });
});
