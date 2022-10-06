import Bio, { getServerSideProps } from "../../../src/pages/patient/bio/[bio]";
import "@testing-library/jest-dom";
import { act, fireEvent, render, waitFor } from "@testing-library/react";
import store from "../../../src/store/store";
import { Provider } from "react-redux";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import constants from "../../../src/utils/constants";
const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe("Render Bio", () => {
  let container;
  const mock = new MockAdapter(axios);
  const TEST_ID = constants.TEST_ID.BIOGRAPHY_TEST_ID;
  const userData = {
    "designation": "MD",
    "firstName": "PortalTesting",
    "lastName": "PHOTON",
    "nickName": "P",
    "employeeNumber": "7698165",
    "mi": "N",
    "dob": "08/29/2004",
    "email": "n@n.com",
    "sex": {
      "key": 11,
      "name": "M",
      "order": 1,
      "notes": ""
    },
    "id": "143365",
    "available": true,
    "age": "18",
    "address": {
      "addressLine1": "12 15th St SW",
      "city": "Roanoke",
      "state": "VA",
      "zip": "24016"
    },
    "homePhone": "3543456557",
    "workPhone": "7565456457",
    "cellPhone": "7565456457",
    "inHouse": false,
    "providerDetails": {
      "isProvider": true,
      "isExternalProvider": false,
      "directAddress": "a@a.com",
      "drFirstCredentialDetails": {
        "drFirstCredential": false,
        "username": "",
        "password": "",
        "signature": ""
      },
      "npi": "4621189180",
      "professionalEq": "8567567568",
      "opticalEq": "7657645646",
      "surgicalEq": "2432435467",
      "contactEq": "8576567567",
      "provider": "4654576587",
      "onlineProvider": false,
      "license": [],
      "deaIds": [],
      "taxonomyCode": "1223P0106X",
      "classification": "Dentist",
      "specialization": "Oral and Maxillofacial Pathology",
      "rating": 2,
      "about": "naresh",
      "language1": "English",
      "language2": "telugu",
      "inNetworkInsurance": "yes",
      "education": "MBA",
      "membershipAndAffiliation": "dummy",
      "profilePhoto": {
        "digitalAsset": {
          "uid": "d72b0b16-99ab-4ae4-aba3-13b81930b68a",
          "fileName": "test",
          "assetUrl": "/v1/patient",
          "_version": "d72b0b16-99ab-4ae4-aba3-13b81930b77a"
        }
      }
    },
    "offices": [
      {
        "name": "Ballwin",
        "addressLine1": "568 Allens Mill Rd",
        "city": "Yorktown",
        "state": "VA",
        "zip": "23692",
        "_id": "4cd970a0-8529-4b44-a4c5-99c9f4e8d078"
      }
    ]
  };

  const imageMock = {
    "name": "Merabu_02.jpg",
    "originalFileName": "Merabu_02.jpg",
    "type": "jpeg",
    "subType": "image",
    "description": "Merabu_02.jpg",
    "remoteLocation": {
      "bucketName": "dgassets-bucket1",
      "region": "us-east-1",
      "locationType": "AWS"
    },
    "presignedUrl": "https://dgassets-bucket1.s3.amazonaws.com/1ffaf737-57ac-4660-8a32-f0650e2285ae?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221003T051746Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=AKIAQ2MAPFH4C64PCZO6%2F20221003%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=80e799bb9072758f67f3abd71e3ae8d8f8248cf8378fd7412d1e725cf4f88c96",
  }
  beforeEach(async () => {
    useRouter.mockReturnValue({
      back: jest.fn(),
    });
    window.scrollTo = jest.fn();
    mock
      .onGet(
        `/ecp/appointments/getprovider/56bafbaf-6bc6-47d2-b3ab-5cee17cf7e30`
      )
      .reply(200, userData);
    mock
      .onGet(
        `/ecp/digital-asset/v1/asset/d72b0b16-99ab-4ae4-aba3-13b81930b68a`
      )
      .reply(200, imageMock);
    const contex = {
      query: {
        bio: "56bafbaf-6bc6-47d2-b3ab-5cee17cf7e30"
      }
    }
    await getServerSideProps(contex);
    act(() => {
      container = render(
        <Provider store={store}>{Bio.getLayout(<Bio bio="56bafbaf-6bc6-47d2-b3ab-5cee17cf7e30" googleApiKey="123"/>)}</Provider>
      );
    });

    await waitFor(() => {
      container.getByTestId(TEST_ID.about);
    });
  });

  afterAll(() => {
    mock.reset();
  });

  test("is Bio page render", () => {
    expect(container.getByTestId(TEST_ID.about)).toBeInTheDocument();
  });

  test("Bio Click About", () => {
    expect(container.getByTestId(TEST_ID.about)).toBeInTheDocument();
    fireEvent.click(container.getByTestId(TEST_ID.about));
  });

  test("Bio Click Location", () => {
    expect(container.getByTestId(TEST_ID.location)).toBeInTheDocument();
    fireEvent.click(container.getByTestId(TEST_ID.location));
  });

  test("Bio Click Insurance", () => {
    expect(container.getByTestId(TEST_ID.insurance)).toBeInTheDocument();
    fireEvent.click(container.getByTestId(TEST_ID.insurance));
  });

  test("Bio Click Education", () => {
    expect(container.getByTestId(TEST_ID.education)).toBeInTheDocument();
    fireEvent.click(container.getByTestId(TEST_ID.education));
  });

  test("Bio Click SubNav", () => {
    expect(
      container.getByTestId(constants.TEST_ID.SUBNAVIGATION)
    ).toBeInTheDocument();
    fireEvent.click(container.getByTestId(constants.TEST_ID.SUBNAVIGATION));
  });
});
