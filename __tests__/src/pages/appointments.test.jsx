import Appointments from "../../../src/pages/patient/appointments";
import "@testing-library/jest-dom";
import { act, render, waitFor } from "@testing-library/react";
import App from "next/app";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { Provider } from "react-redux";
import store from "../../../src/store/store";
import Cookies from "universal-cookie";

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

describe("Render Appointment", () => {
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
          _id: "c68ced42-dfad-452a-acf0-0cee3a066157",
          _version: "585d1501-cfad-4123-b2c8-950a32403563",
          _updated: "Feb 15, 2022, 7:07:35 AM",
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
    count: 1,
    entities: [
      {
        appointmentType: {
          code: "Glaucome_Appointment",
          name: "Glaucoma_Appointment",
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
          specialService: {
            isHearingImpaired: false,
            isMobilityImpaired: false,
            interpreterService: {
              interpreterServiceRequired: false,
              interpreterRequired: false,
            },
          },
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
          firstName: "Steve",
          lastName: "Adam",
          designation: "Dr",
          inHouse: false,
          _id: "19f1c186-37a8-46ef-a731-0a1f022be782",
          _version: "a1c4536d-6e5e-4779-81b0-080fe4e23a23",
          _updated: "Apr 8, 2022, 8:35:42 AM",
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
        appointmentTime: "19:20",
        appointmentEndTime: "19:25",
        appointmentLength: 5,
        isConfirmed: true,
        confirmationDetail: {
          confirmationDate: "09/15/2022",
          confirmationTime: "16:51",
          confirmationBy: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
        },
        appointmentHistory: [],
        state: {
          subState: {
            subState: "UPDATED",
            _id: "42dc9428-c7a0-4c71-94bb-b1240b45d0f5",
            _version: "ccc0145a-0975-42c9-94b1-94028a834438",
            _created: "Sep 15, 2022, 9:30:00 PM",
            _updated: "Sep 15, 2022, 9:30:00 PM",
            _createdBy: {
              _id: "981ad89e-7fee-42d8-92ec-c34324d862a0",
              _links: {
                self: {
                  href: "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0",
                },
              },
            },
          },
          state: "NO_SHOW",
          _id: "5252e529-1d52-4490-981a-3693a9388a87",
          _version: "aa52376a-93b8-4362-ac1a-c707b17b2d9d",
          _created: "Sep 15, 2022, 11:21:05 AM",
          _updated: "Sep 15, 2022, 9:30:00 PM",
          _createdBy: {
            _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
            _links: {
              self: {
                href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
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
        notes: [],
        allowCreate: false,
        paymentMethod: {
          noInsuranceInformation: {},
          insuranceInfoUsedForBilling: {
            financialClassBasedInformation: {},
          },
          paymentMode: "SELF_PAY",
        },
        appointmentNo: 1000000911,
        newPatient: false,
        insurancePayers: [],
        override: false,
        quickAppointmentflag: false,
        isPrimaryMember: true,
        status: "UPDATED",
        _links: {
          self: {
            href: "/v1/appointments/e701cfa3-a968-4cb8-bdc4-8f0f0504584a",
          },
        },
        _id: "e701cfa3-a968-4cb8-bdc4-8f0f0504584a",
        _version: "73fc4151-63f8-41d8-9b14-56518724e2ae",
        _created: "Sep 15, 2022, 11:21:05 AM",
        _updated: "Sep 15, 2022, 9:30:00 PM",
        _createdBy: {
          _id: "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
          _links: {
            self: {
              href: "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
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
    ],
  };
  beforeEach(async () => {
    Cookies.result = { authorized: true };
    mock
      .onGet(
        `http://internal-k8s-default-backendi-4e2c95f4f1-1640855473.us-east-1.elb.amazonaws.com/ecp/appointments/a2f0b4e0-4786-4b9e-b54e-f24d8a3d10f9/upcoming?currentDate=10/04/2022&time=10:23`
      )
      .reply(200, history);
    act(() => {
      container = render(
        <Provider store={store}>
          {Appointments.getLayout(<Appointments />)}
        </Provider>
      );
    });
    expect(container).toMatchSnapshot()
    // await waitFor(() => {
    //   container.getAllByText(`Rebecca Chan`)[0];
    // });
  });

  afterAll(() => {
    // mock.reset();
  });

  test("is Appointment page render", async () => {
    // expect(container.getAllByText(`Rebecca Chan`)[0]).toBeInTheDocument();
  });
});
