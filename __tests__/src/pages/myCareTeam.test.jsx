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

describe("Render My Care Team", () => {
  let container;
  const mock = new MockAdapter(axios);

  const providerListMock = [
    {
      designation: "MBBS, MD",
      firstName: "Jaco",
      lastName: "David",
      nickName: "Jaco",
      employeeNumber: "755708",
      mi: "Jaco",
      dob: "02/07/1971",
      email: "eyecare@gmail.com",
      sex: {
        key: 11,
        name: "M",
        order: 1,
        notes: "",
      },
      available: true,
      note: "Test",
      age: "51",
      address: {
        addressLine1: "568 Allens Mill Rd",
        city: "Yorktown",
        state: "VA",
        zip: "23692",
      },
      homePhone: "4981261115",
      cellPhone: "2812942993",
      inHouse: false,
      providerDetails: {
        isProvider: true,
        isExternalProvider: false,
        materialRate: "0",
        drFirstCredentialDetails: {
          drFirstCredential: false,
          username: "",
          password: "",
          signature: "",
        },
        npi: "1134296023",
        professionalEq: "1234",
        opticalEq: "12",
        surgicalEq: "344",
        contactEq: "12346",
        provider: "",
        onlineProvider: true,
        license: [],
        deaIds: [],
        taxonomyCode: "207ND0101X",
        classification: "Dermatology",
        specialization: "MOHS-Micrographic Surgery",
        rating: 9,
        language1: "Arabic",
        language2: "Chinese",
        language3: "German",
        profilePhoto: {
          digitalAsset: {
            uid: "d72b0b16-99ab-4ae4-aba3-13b81930b68a",
            fileName: "test",
            assetUrl: "/v1/patient",
            _version: "d72b0b16-99ab-4ae4-aba3-13b81930b77a",
          },
        },
      },
      offices: [
        {
          name: "Ballwin",
          addressLine1: "568 Allens Mill Rd",
          addressLine2: "568 Allens Mill Rd",
          city: "Yorktown",
          state: "VA",
          zip: "23692",
          _id: "4cd970a0-8529-4b44-a4c5-99c9f4e8d078",
        },
        {
          name: "Edwardsville ",
          addressLine1: "700 12th St # A",
          city: "Bellingham",
          state: "WA",
          zip: "98225",
          _id: "cd68948d-aa9d-4100-a806-1afd2b227104",
        },
      ],
      status: "UPDATED",
      managerialAdjustments: false,
      overrideExpiredPromo: false,
      sources: [],
      _links: {
        self: {
          href: "/v1/employees/b579b0d1-0c93-4db4-8ca8-294a60e718e4",
        },
      },
      _id: "b579b0d1-0c93-4db4-8ca8-294a60e718e4",
    },
    {
      designation: "MBBS, MD",
      firstName: "Jaco",
      lastName: "David",
      nickName: "Jaco",
      employeeNumber: "755708",
      mi: "Jaco",
      dob: "02/07/1971",
      email: "eyecare@gmail.com",
      sex: {
        key: 11,
        name: "M",
        order: 1,
        notes: "",
      },
      available: true,
      note: "Test",
      age: "51",
      address: {
        addressLine1: "568 Allens Mill Rd",
        city: "Yorktown",
        state: "VA",
        zip: "23692",
      },
      homePhone: "4981261115",
      cellPhone: "2812942993",
      inHouse: false,
      providerDetails: {
        isProvider: true,
        isExternalProvider: false,
        materialRate: "0",
        drFirstCredentialDetails: {
          drFirstCredential: false,
          username: "",
          password: "",
          signature: "",
        },
        npi: "1134296023",
        professionalEq: "1234",
        opticalEq: "12",
        surgicalEq: "344",
        contactEq: "12346",
        provider: "",
        onlineProvider: true,
        license: [],
        deaIds: [],
        taxonomyCode: "207ND0101X",
        classification: "Dermatology",
        specialization: "MOHS-Micrographic Surgery",
        rating: 9,
        language1: "Arabic",
        language2: "Chinese",
        language3: "German",
        profilePhoto: {
          digitalAsset: {
            uid: "d72b0b16-99ab-4ae4-aba3-13b81930b68a",
            fileName: "test",
            assetUrl: "/v1/patient",
            _version: "d72b0b16-99ab-4ae4-aba3-13b81930b77a",
          },
        },
      },
      offices: [
        {
          name: "Ballwin",
          addressLine2: "568 Allens Mill Rd",
          _id: "4cd970a0-8529-4b44-a4c5-99c9f4e8d078",
        },
        {
          name: "Edwardsville ",
          addressLine1: "700 12th St # A",
          city: "Bellingham",
          state: "WA",
          zip: "98225",
          _id: "cd68948d-aa9d-4100-a806-1afd2b227104",
        },
      ],
      status: "UPDATED",
      managerialAdjustments: false,
      overrideExpiredPromo: false,
      sources: [],
      _links: {
        self: {
          href: "/v1/employees/b579b0d1-0c93-4db4-8ca8-294a60e718e4",
        },
      },
      _id: "b579b0d1-0c93-4db4-8ca8-294a60e718e4",
    },
    {
      designation: "MBBS, MD",
      firstName: "Jaco",
      lastName: "David",
      nickName: "Jaco",
      employeeNumber: "755708",
      mi: "Jaco",
      dob: "02/07/1971",
      email: "eyecare@gmail.com",
      sex: {
        key: 11,
        name: "M",
        order: 1,
        notes: "",
      },
      available: true,
      note: "Test",
      age: "51",
      address: {
        addressLine1: "568 Allens Mill Rd",
        city: "Yorktown",
        state: "VA",
        zip: "23692",
      },
      homePhone: "4981261115",
      cellPhone: "2812942993",
      workPhone: "2812942993",
      inHouse: false,
      providerDetails: {
        isProvider: true,
        isExternalProvider: false,
        materialRate: "0",
        drFirstCredentialDetails: {
          drFirstCredential: false,
          username: "",
          password: "",
          signature: "",
        },
        npi: "1134296023",
        professionalEq: "1234",
        opticalEq: "12",
        surgicalEq: "344",
        contactEq: "12346",
        provider: "",
        onlineProvider: true,
        license: [],
        deaIds: [],
        taxonomyCode: "207ND0101X",
        classification: "Dermatology",
        specialization: "MOHS-Micrographic Surgery",
        rating: 9,
        language1: "Arabic",
        language2: "Chinese",
        language3: "German",
        profilePhoto: {
          digitalAsset: {
            uid: "1ffaf737-57ac-4660-8a32-f0650e2285ae",
            fileName: "test",
            assetUrl: "/v1/patient",
            _version: "d72b0b16-99ab-4ae4-aba3-13b81930b77a",
          },
        },
      },
      offices: [
        {
          name: "Ballwin",
          addressLine1: "568 Allens Mill Rd",
          city: "Yorktown",
          state: "VA",
          zip: "23692",
          _id: "4cd970a0-8529-4b44-a4c5-99c9f4e8d078",
        },
        {
          name: "Edwardsville ",
          addressLine1: "700 12th St # A",
          city: "Bellingham",
          state: "WA",
          zip: "98225",
          _id: "cd68948d-aa9d-4100-a806-1afd2b227104",
        },
      ],
      status: "UPDATED",
      managerialAdjustments: false,
      overrideExpiredPromo: false,
      sources: [],
      _links: {
        self: {
          href: "/v1/employees/b579b0d1-0c93-4db4-8ca8-294a60e718e4",
        },
      },
      _id: "b579b0d1-0c93-4db4-8ca8-294a60e718e4",
    },
  ];

  const providerListMockNotCompleted = [
    {
      nickName: "Jaco",
      employeeNumber: "755708",
      mi: "Jaco",
      dob: "02/07/1971",
      sex: {
        key: 11,
        name: "M",
        order: 1,
        notes: "",
      },
      available: true,
      note: "Test",
      age: "51",
      address: {
        addressLine1: "568 Allens Mill Rd",
        city: "Yorktown",
        state: "VA",
        zip: "23692",
      },
      homePhone: "4981261115",
      cellPhone: "2812942993",
      inHouse: false,
      providerDetails: {
        isProvider: true,
        isExternalProvider: false,
        materialRate: "0",
        drFirstCredentialDetails: {
          drFirstCredential: false,
          username: "",
          password: "",
          signature: "",
        },
        npi: "1134296023",
        professionalEq: "1234",
        opticalEq: "12",
        surgicalEq: "344",
        contactEq: "12346",
        provider: "",
        onlineProvider: true,
        license: [],
        deaIds: [],
        taxonomyCode: "207ND0101X",
        classification: "Dermatology",
        specialization: "MOHS-Micrographic Surgery",
        rating: 9,
        language1: "Arabic",
        language2: "Chinese",
        language3: "German",
        profilePhoto: {},
      },
      offices: [
        {
          name: "Ballwin",
          addressLine1: "568 Allens Mill Rd",
          addressLine2: "568 Allens Mill Rd",
          city: "Yorktown",
          state: "VA",
          zip: "23692",
          _id: "4cd970a0-8529-4b44-a4c5-99c9f4e8d078",
        },
        {
          name: "Edwardsville ",
          addressLine1: "700 12th St # A",
          city: "Bellingham",
          state: "WA",
          zip: "98225",
          _id: "cd68948d-aa9d-4100-a806-1afd2b227104",
        },
      ],
      status: "UPDATED",
      managerialAdjustments: false,
      overrideExpiredPromo: false,
      sources: [],
      _links: {
        self: {
          href: "/v1/employees/b579b0d1-0c93-4db4-8ca8-294a60e718e4",
        },
      },
    },
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
    //TODO: Remove
    const domain = window.location.origin;
    const url = `${domain}/api/dummy/appointment/biography/getProviderList`;

    mock.onGet(url).reply(status, {
      results: providerList,
    });

    mock.onGet(`/ecp/appointments/getproviderlist/`).reply(status, {
      results: providerList,
    });

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
      .onPut("/ecp/appointments/available-slot?searchText=VA")
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
