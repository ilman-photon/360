import MyCareTeamPage from "../../../src/pages/patient/my-care-team";
import "@testing-library/jest-dom";
import { act, fireEvent, render, waitFor } from "@testing-library/react";
import store from "../../../src/store/store";
import { Provider } from "react-redux";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import {
  mockAppointmentTypes,
  mockInsurance,
  submitFilter,
} from "../../../__mocks__/mockResponse";

const useGeolocated = jest.spyOn(require("react-geolocated"), "useGeolocated");

describe("Render My Care Team", () => {
  let container;
  const mock = new MockAdapter(axios);
  
  useGeolocated.mockReturnValue({
    coords: { latitude: 36.8493937, longitude: -76.0106753 },
    isGeolocationEnabled: true,
  });

  const providerListMock = [
    {
      "provider": {
        "firstName": "Jaco",
        "lastName": "David",
        "designation": "MBBS, MD",
        "inHouse": false,
        "workPhone": "8675456888",
        "email": "eyecare@gmail.com",
        "rating": 2,
        "profilePhoto": {
          "digitalAsset": {
            "uid": "d72b0b16-99ab-4ae4-aba3-13b81930b68a",
            "fileName": "test",
            "assetUrl": "/v1/patient",
            "_version": "f64310c3-1c5c-4b9e-b3d8-32c9b4bdc74f"
          }
        },
        "address": {
          "addressLine1": "800 14th St Apt B",
          "city": "Virginia Beach",
          "state": "VA",
          "zip": "23451"
        },
        "sex": {
          "key": 11,
          "name": "M",
          "order": 3,
          "notes": ""
        },
        "taxonomyCode": "1223P0106X",
        "classification": "Dentist",
        "specialization": "Oral and Maxillofacial Pathology",
        "language1": "English",
        "language2": "Arabic",
        "language3": "Chinese",
        "directAddress": "a@a.com",
        "_id": "e324e29f-2e89-460d-ad11-9435360244f8",
        "_version": "94d94cc9-d486-4df1-ae8d-df699554bac1",
        "_updated": "Nov 14, 2022, 9:54:59 AM",
        "_updatedBy": {
          "_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
          "_links": {
            "self": {
              "href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
            }
          }
        },
        "_created": "Oct 31, 2022, 9:15:39 AM",
        "_createdBy": {
          "_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
          "_links": {
            "self": {
              "href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
            }
          }
        }
      },
      "office": [{
        name: "Ballwin",
        addressLine1: "568 Allens Mill Rd",
        addressLine2: "568 Allens Mill Rd",
        city: "Yorktown",
        state: "VA",
        zip: "23692",
        _id: "4cd970a0-8529-4b44-a4c5-99c9f4e8d078",
      }],
    },
    {
      "provider": {
        "firstName": "Jaco",
        "lastName": "David",
        "designation": "MBBS, MD",
        "inHouse": false,
        "rating": 2,
        "profilePhoto": {
          "digitalAsset": {
            "uid": "d72b0b16-99ab-4ae4-aba3-13b81930b68a",
            "fileName": "test",
            "assetUrl": "/v1/patient",
            "_version": "f64310c3-1c5c-4b9e-b3d8-32c9b4bdc74f"
          }
        },
        "address": {
          "addressLine1": "800 14th St Apt B",
          "city": "Virginia Beach",
          "state": "VA",
          "zip": "23451"
        },
        "sex": {
          "key": 11,
          "name": "M",
          "order": 3,
          "notes": ""
        },
        "taxonomyCode": "1223P0106X",
        "classification": "Dentist",
        "specialization": "Oral and Maxillofacial Pathology",
        "language1": "English",
        "language2": "Arabic",
        "language3": "Chinese",
        "directAddress": "a@a.com",
        "_id": "e324e29f-2e89-460d-ad11-9435360244f8",
        "_version": "94d94cc9-d486-4df1-ae8d-df699554bac1",
        "_updated": "Nov 14, 2022, 9:54:59 AM",
        "_updatedBy": {
          "_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
          "_links": {
            "self": {
              "href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
            }
          }
        },
        "_created": "Oct 31, 2022, 9:15:39 AM",
        "_createdBy": {
          "_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
          "_links": {
            "self": {
              "href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
            }
          }
        }
      },
      "office": [{
        name: "Ballwin",
        addressLine1: "568 Allens Mill Rd",
        addressLine2: "568 Allens Mill Rd",
        state: "VA",
        zip: "23692",
        _id: "4cd970a0-8529-4b44-a4c5-99c9f4e8d078",
      }],
    },
    {
      "provider": {
        "firstName": "Jaco",
        "lastName": "David",
        "designation": "MBBS, MD",
        "inHouse": false,
        "rating": 2,
        "profilePhoto": {
          "digitalAsset": {
            "uid": "d72b0b16-99ab-4ae4-aba3-13b81930b68a",
            "fileName": "test",
            "assetUrl": "/v1/patient",
            "_version": "f64310c3-1c5c-4b9e-b3d8-32c9b4bdc74f"
          }
        },
        "address": {
          "addressLine1": "800 14th St Apt B",
          "city": "Virginia Beach",
          "state": "VA",
          "zip": "23451"
        },
        "sex": {
          "key": 11,
          "name": "M",
          "order": 3,
          "notes": ""
        },
        "taxonomyCode": "1223P0106X",
        "classification": "Dentist",
        "specialization": "Oral and Maxillofacial Pathology",
        "language1": "English",
        "language2": "Arabic",
        "language3": "Chinese",
        "directAddress": "a@a.com",
        "_id": "e324e29f-2e89-460d-ad11-9435360244f8",
        "_version": "94d94cc9-d486-4df1-ae8d-df699554bac1",
        "_updated": "Nov 14, 2022, 9:54:59 AM",
        "_updatedBy": {
          "_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
          "_links": {
            "self": {
              "href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
            }
          }
        },
        "_created": "Oct 31, 2022, 9:15:39 AM",
        "_createdBy": {
          "_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
          "_links": {
            "self": {
              "href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
            }
          }
        }
      },
      "office": [{
        name: "Ballwin",
        addressLine1: "568 Allens Mill Rd",
        addressLine2: "568 Allens Mill Rd",
        zip: "23692",
        _id: "4cd970a0-8529-4b44-a4c5-99c9f4e8d078",
      }],
    }
  ];

  const providerListMockNotCompleted = [
    {
      "provider": {
        "inHouse": false,
        "rating": 2,
        "profilePhoto": {
          "digitalAsset": {
            "uid": "d72b0b16-99ab-4ae4-aba3-13b81930b68a",
            "fileName": "test",
            "assetUrl": "/v1/patient",
            "_version": "f64310c3-1c5c-4b9e-b3d8-32c9b4bdc74f"
          }
        },
        "address": {
          "addressLine1": "800 14th St Apt B",
          "city": "Virginia Beach",
          "state": "VA",
          "zip": "23451"
        },
        "sex": {
          "key": 11,
          "name": "M",
          "order": 3,
          "notes": ""
        },
        "taxonomyCode": "1223P0106X",
        "classification": "Dentist",
        "specialization": "Oral and Maxillofacial Pathology",
        "language1": "English",
        "language2": "Arabic",
        "language3": "Chinese",
        "directAddress": "a@a.com",
        "_id": "e324e29f-2e89-460d-ad11-9435360244f8",
        "_version": "94d94cc9-d486-4df1-ae8d-df699554bac1",
        "_updated": "Nov 14, 2022, 9:54:59 AM",
        "_updatedBy": {
          "_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
          "_links": {
            "self": {
              "href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
            }
          }
        },
        "_created": "Oct 31, 2022, 9:15:39 AM",
        "_createdBy": {
          "_id": "981ad89e-7fee-42d8-92ec-c34324d862a0",
          "_links": {
            "self": {
              "href": "/v1/employees/981ad89e-7fee-42d8-92ec-c34324d862a0"
            }
          }
        }
      },
      "office": [{
        _id: "4cd970a0-8529-4b44-a4c5-99c9f4e8d078",
      }],
    }
  ];

  const imageMock = {
    name: "Merabu_02.jpg",
    originalFileName: "Merabu_02.jpg",
    type: "jpeg",
    subType: "image",
    description: "Merabu_02.jpg",
    remoteLocation: {
      bucketName: "dgassets-bucket1",
      region: "us-east-1",
      locationType: "AWS",
    },
    presignedUrl:
      "https://dgassets-bucket1.s3.amazonaws.com/1ffaf737-57ac-4660-8a32-f0650e2285ae?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221003T051746Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=AKIAQ2MAPFH4C64PCZO6%2F20221003%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=80e799bb9072758f67f3abd71e3ae8d8f8248cf8378fd7412d1e725cf4f88c96",
  };

  const renderList = async (providerList, isMockImage = true, status = 200) => {
    mock.onGet(`/ecp/appointments/getProvidersBasedOnPatientName?search.query=((patient.firstName=eq=dewo)AND(patient.lastName=eq=Simanjuntak))`).reply(status,
      providerList,
    );

    isMockImage &&
      mock
        .onGet(
          `/ecp/digital-asset/v1/asset/d72b0b16-99ab-4ae4-aba3-13b81930b68a`
        )
        .reply(200, imageMock);

    mock
      .onGet("/ecp/appointments/appointment-types", mockAppointmentTypes)
      .reply(200, mockAppointmentTypes);
    mock
      .onGet("/ecp/appointments/insurance/allpayers", mockInsurance)
      .reply(200, mockInsurance);
    mock
      .onPut("/ecp/appointments/available-slot?searchText=Yorktown")
      .reply(200, submitFilter);

    act(() => {
      container = render(
        <Provider store={store}>
          {MyCareTeamPage.getLayout(<MyCareTeamPage />)}
        </Provider>
      );
    });

    if (status === 200) {
      if (providerList.length > 0) {
        await waitFor(() => {
          container.getAllByText(/View Profile/i);
        });
      } else {
        await waitFor(() => {
          container.getByText(/There are no doctor/i);
        });
      }
    }
  };

  afterAll(() => {
    mock.reset();
  });

  test("is My Care Team page rendered", async () => {
    await renderList(providerListMock);
    expect(container.getAllByText(/View Profile/i).length > 0).toBeTruthy();
  });

  test("Click schedule button", async () => {
    await renderList(providerListMock);
    expect(container.getAllByTestId("schedule-btn")[0]).toBeInTheDocument();
    fireEvent.click(container.getAllByTestId("schedule-btn")[0]);
    fireEvent.click(container.getAllByTestId("schedule-btn")[1]);
    fireEvent.click(container.getAllByTestId("schedule-btn")[2]);
  });

  test("is My Care Team page rendered", async () => {
    await renderList(providerListMockNotCompleted);
    expect(container.getAllByText(/View Profile/i).length > 0).toBeTruthy();
  });

  test("is My Care Team page rendered", async () => {
    await renderList([], false);
    expect(container.getByText(/My Care Team/i)).toBeInTheDocument();
    expect(container.getByText(/There are no doctor/i)).toBeInTheDocument();
  });

  test("is My Care Team page rendered catch error", async () => {
    await renderList([], false, 404);
    expect(container.getByText(/My Care Team/i)).toBeInTheDocument();
  });
});
