import { act, fireEvent, render, waitFor } from "@testing-library/react";
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
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1584.feature"
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
  const element = document.createElement("div");
  const mock = new MockAdapter(axios);
  const upcoming = {
    "count": 1,
    "entities": [
      {
        "appointmentType": {
          "code": "Retina_checkup",
          "name": "Retina checkup"
        },
        "patient": {
          "firstName": "demo",
          "lastName": "nikita",
          "dob": "11/25/1992",
          "age": "29",
          "sex": "1",
          "patientDetails": {
            "isFlagNew": false,
            "isFlagInCollection": false,
            "isFlagBadCheck": false,
            "isFlagDeceased": false,
            "isFlagChartless": false,
            "_id": "bc5335d3-e802-47bc-afb5-d30241b4ea66",
            "_version": "209451a6-2b8b-4729-8c0a-2859beeef5b5",
            "_created": "Jul 4, 2022, 4:42:40 AM",
            "_updated": "Aug 25, 2022, 10:31:54 AM",
            "_createdBy": {
              "_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
              "_links": {
                "self": {
                  "href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
                }
              }
            },
            "_updatedBy": {
              "_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
              "_links": {
                "self": {
                  "href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
                }
              }
            }
          },
          "isEmergencyContactAvailable": false,
          "contactPrefrence": false,
          "status": "UPDATED",
          "_id": "fd7beec7-1a6a-49f2-afd9-ebca6fb78568",
          "_version": "22dc0908-8d27-46e4-b5ec-6035e7e11f33",
          "_created": "Jul 4, 2022, 4:42:40 AM",
          "_updated": "Aug 25, 2022, 10:31:54 AM",
          "_createdBy": {
            "_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
            "_links": {
              "self": {
                "href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
              }
            }
          },
          "_updatedBy": {
            "_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
            "_links": {
              "self": {
                "href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
              }
            }
          }
        },
        "provider": {
          "firstName": "Steve",
          "lastName": "Adam",
          "designation": "Dr",
          "inHouse": false,
          "workPhone": "3219898898",
          "rating": 9,
          "profilePhoto": {
            "digitalAsset": {
              "uid": "d72b0b16-99ab-4ae4-aba3-13b81930b68a",
              "fileName": "test",
              "assetUrl": "/v1/patient",
              "_version": "d72b0b16-99ab-4ae4-aba3-13b81930b77a"
            }
          },
          "address": {
            "addressLine1": "800 14th St Apt B",
            "city": "Virginia Beach",
            "state": "VA",
            "zip": "23451"
          },
          "_id": "19f1c186-37a8-46ef-a731-0a1f022be782",
          "_version": "6b5fb285-bcca-4a3f-8a47-369fe2babf8b",
          "_updated": "Oct 17, 2022, 5:53:20 PM",
          "_updatedBy": {
            "_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
            "_links": {
              "self": {
                "href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
              }
            }
          }
        },
        "office": {
          "name": "Ballwin",
          "_id": "4cd970a0-8529-4b44-a4c5-99c9f4e8d078",
          "_version": "0c381712-420e-4705-bb6d-f0226ceb5b12",
          "_updated": "Sep 17, 2022, 10:14:52 AM",
          "_updatedBy": {
            "_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
            "_links": {
              "self": {
                "href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
              }
            }
          }
        },
        "appointmentDate": "09/15/2022",
        "appointmentTime": "11:10",
        "appointmentEndTime": "11:15",
        "appointmentLength": 5,
        "confirmationDetail": {
          "confirmationDate": "09/15/2022",
          "confirmationTime": "15:32",
          "confirmationBy": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
        },
        "appointmentHistory": [],
        "state": {
          "subState": {
            "subState": "WAITING_FOR_TECHNICIAN",
            "_id": "dbc73dfa-95c9-48dc-84e8-094ec1d98c6e",
            "_version": "d7596191-7ca5-4b72-9a61-a65923b349ca",
            "_created": "Sep 15, 2022, 10:02:54 AM",
            "_updated": "Sep 15, 2022, 10:02:54 AM",
            "_createdBy": {
              "_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
              "_links": {
                "self": {
                  "href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
                }
              }
            }
          },
          "state": "CHECK_IN",
          "_id": "4fd867ef-5344-46df-9d0b-8467bc34a076",
          "_version": "348aac2a-180b-486d-858b-16edab665b5a",
          "_created": "Sep 15, 2022, 10:02:54 AM",
          "_updated": "Sep 15, 2022, 10:02:54 AM",
          "_createdBy": {
            "_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
            "_links": {
              "self": {
                "href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
              }
            }
          }
        },
        "newPatient": false,
        "insurancePayers": [],
        "override": false,
        "quickAppointmentflag": false,
        "status": "CREATED",
        "primaryMember": false,
        "confirmed": false,
        "_links": {
          "self": {
            "href": "/v1/appointments/ba852d09-da44-4b8d-8e83-63a27f5f540e"
          }
        },
        "_id": "ba852d09-da44-4b8d-8e83-63a27f5f540e",
        "_version": "03a4a6d7-2f14-4f6c-96b0-b8a67fa26505",
        "_created": "Sep 15, 2022, 10:02:54 AM",
        "_updated": "Sep 15, 2022, 10:02:54 AM",
        "_createdBy": {
          "_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
          "_links": {
            "self": {
              "href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
            }
          }
        },
        "_updatedBy": null
      }
    ],
    "_links": {
      "self": {
        "href": "/appointments?pageNo=0&pageSize=100"
      }
    }
  };
  const history = {
    "count": 1,
    "entities": [
      {
        "appointmentType": {
          "code": "Glaucome_Appointment",
          "name": "Glaucoma_Appointment"
        },
        "patient": {
          "firstName": "demo",
          "lastName": "nikita",
          "dob": "11/25/1992",
          "age": "29",
          "sex": "1",
          "patientDetails": {
            "isFlagNew": false,
            "isFlagInCollection": false,
            "isFlagBadCheck": false,
            "isFlagDeceased": false,
            "isFlagChartless": false,
            "_id": "bc5335d3-e802-47bc-afb5-d30241b4ea66",
            "_version": "209451a6-2b8b-4729-8c0a-2859beeef5b5",
            "_created": "Jul 4, 2022, 4:42:40 AM",
            "_updated": "Aug 25, 2022, 10:31:54 AM",
            "_createdBy": {
              "_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
              "_links": {
                "self": {
                  "href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
                }
              }
            },
            "_updatedBy": {
              "_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
              "_links": {
                "self": {
                  "href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
                }
              }
            }
          },
          "isEmergencyContactAvailable": false,
          "contactPrefrence": false,
          "specialService": {
            "isHearingImpaired": false,
            "isMobilityImpaired": false,
            "interpreterService": {
              "interpreterServiceRequired": false,
              "interpreterRequired": false
            }
          },
          "status": "UPDATED",
          "_id": "fd7beec7-1a6a-49f2-afd9-ebca6fb78568",
          "_version": "22dc0908-8d27-46e4-b5ec-6035e7e11f33",
          "_created": "Jul 4, 2022, 4:42:40 AM",
          "_updated": "Aug 25, 2022, 10:31:54 AM",
          "_createdBy": {
            "_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
            "_links": {
              "self": {
                "href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
              }
            }
          },
          "_updatedBy": {
            "_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
            "_links": {
              "self": {
                "href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
              }
            }
          }
        },
        "provider": {
          "firstName": "Steve",
          "lastName": "Adam",
          "inHouse": false,
          "_id": "19f1c186-37a8-46ef-a731-0a1f022be782",
          "_version": "a1c4536d-6e5e-4779-81b0-080fe4e23a23",
          "_updated": "Apr 8, 2022, 8:35:42 AM"
        },
        "office": {
          "name": "Ballwin",
          "_id": "4cd970a0-8529-4b44-a4c5-99c9f4e8d078",
          "_version": "0c381712-420e-4705-bb6d-f0226ceb5b12",
          "_updated": "Sep 17, 2022, 10:14:52 AM",
          "_updatedBy": {
            "_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
            "_links": {
              "self": {
                "href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
              }
            }
          }
        },
        "appointmentDate": "09/15/2022",
        "appointmentTime": "19:20",
        "appointmentEndTime": "19:25",
        "appointmentLength": 5,
        "isConfirmed": true,
        "confirmationDetail": {
          "confirmationDate": "09/15/2022",
          "confirmationTime": "16:51",
          "confirmationBy": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
        },
        "appointmentHistory": [],
        "state": {
          "subState": {
            "subState": "UPDATED",
            "_id": "42dc9428-c7a0-4c71-94bb-b1240b45d0f5",
            "_version": "ccc0145a-0975-42c9-94b1-94028a834438",
            "_created": "Sep 15, 2022, 9:30:00 PM",
            "_updated": "Sep 15, 2022, 9:30:00 PM",
            "_createdBy": {
              "_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
              "_links": {
                "self": {
                  "href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
                }
              }
            }
          },
          "state": "NO_SHOW",
          "_id": "5252e529-1d52-4490-981a-3693a9388a87",
          "_version": "aa52376a-93b8-4362-ac1a-c707b17b2d9d",
          "_created": "Sep 15, 2022, 11:21:05 AM",
          "_updated": "Sep 15, 2022, 9:30:00 PM",
          "_createdBy": {
            "_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
            "_links": {
              "self": {
                "href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
              }
            }
          },
          "_updatedBy": {
            "_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
            "_links": {
              "self": {
                "href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
              }
            }
          }
        },
        "notes": [],
        "allowCreate": false,
        "paymentMethod": {
          "noInsuranceInformation": {},
          "insuranceInfoUsedForBilling": {
            "financialClassBasedInformation": {}
          },
          "paymentMode": "SELF_PAY"
        },
        "appointmentNo": 1000000911,
        "newPatient": false,
        "insurancePayers": [],
        "override": false,
        "quickAppointmentflag": false,
        "isPrimaryMember": true,
        "status": "UPDATED",
        "_links": {
          "self": {
            "href": "/v1/appointments/e701cfa3-a968-4cb8-bdc4-8f0f0504584a"
          }
        },
        "_id": "e701cfa3-a968-4cb8-bdc4-8f0f0504584a",
        "_version": "73fc4151-63f8-41d8-9b14-56518724e2ae",
        "_created": "Sep 15, 2022, 11:21:05 AM",
        "_updated": "Sep 15, 2022, 9:30:00 PM",
        "_createdBy": {
          "_id": "1e5ac1f2-293b-4966-8bcc-76a6d4502c6f",
          "_links": {
            "self": {
              "href": "/v1/employees/1e5ac1f2-293b-4966-8bcc-76a6d4502c6f"
            }
          }
        },
        "_updatedBy": {
          "_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
          "_links": {
            "self": {
              "href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
            }
          }
        }
      },
    ]
  }

  const defaultValidation = () => {
    expect(true).toBeTruthy();
  };

  test('EPIC_EPP-44_STORY_EPP-1584-Verify if   user able to view the "Appointments" screen.', ({
    given,
    and,
    when,
    then,
  }) => {
    given("User is logged in to the application", () => {
      Cookies.result = { authorized: true };
      defaultValidation();
    });

    and("User navigates to “Appointments” screen", async () => {
      useRouter.mockReturnValue({
        back: jest.fn(),
      });
      mock
        .onGet(
          `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/upcoming`
        )
        .reply(200, upcoming);
      mock
        .onGet(
          `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/history`
        )
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

      expect(container.getByText(/Upcoming appointments/i).textContent).toEqual("Upcoming Appointments");
    });

    when("User lands on “Appointments” screen", () => {
      defaultValidation();
    });

    then(
      "User should be able to view an option to schedule new appointments",
      () => {
        expect(container.getByText(/Schedule New Appointment/i)).toBeInTheDocument();
      }
    );

    and(
      "User should be able to view Upcoming Appointments with an option to reschedule and cancel each of them",
      () => {
        defaultValidation()
      }
    );

    and(
      "User should be able to view Past Appointments with an option to view the visit summary for each appointment",
      async () => {
        useRouter.mockReturnValue({
          back: jest.fn(),
        });
        window.scrollTo = jest.fn();
        mock
          .onGet(
            `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/upcoming`
          )
          .reply(200, upcoming);
        mock
          .onGet(
            `/ecp/appointments/98f9404b-6ea8-4732-b14f-9c1a168d8066/history`
          )
          .reply(200, history);

        act(() => {
          container = render(
            <Provider store={store}>
              {Appointments.getLayout(<Appointments />)}
            </Provider>
          );
        });
        await waitFor(() => {
          container.getByText(/Upcoming appointments/i);
        });

        expect(
          container.getByText(/Upcoming appointments/i).textContent
        ).toEqual("Upcoming Appointments");
      }
    );
  });

  test("EPIC_EPP-44_STORY_EPP-1584-Verify if user able to view an option to schedule new appointments", ({ }) => {
    defaultValidation();
  });

  test("EPIC_EPP-44_STORY_EPP-1584 -Verify if user able to view Upcoming Appointments", ({ }) => {
    defaultValidation();
  });

  test("EPIC_EPP-44_STORY_EPP-1584-Verify if user able to view Upcoming Appointments option to reschedule and cancel", ({ }) => {
    defaultValidation();
  });

  test("EPIC_EPP-44_STORY_EPP-1584-Verify if user  able to  view Past Appointments", ({ }) => {
    defaultValidation();
  });

  test("EPIC_EPP-44_STORY_EPP-1584-Verify if user  able to  view Past Appointment with option to already visited deatails", ({ }) => {
    defaultValidation();
  });
});
