// import "@testing-library/jest-dom";
import { waitFor } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import store from "../../../src/store/store";
import {
  addUserInsuranceData,
  deleteInsurance,
  fetchInsurance,
  fetchUser,
  postInsurance,
  removeUserInsuranceData,
  setUserData,
  setUserInsuranceDataById,
  updateInsurance,
  updateUser,
} from "../../../src/store/user";

import {
  mockExistingInsurance,
  mockSubmitInsurance,
  mockUserData,
} from "../../../__mocks__/mockResponse";

describe("Store User", () => {
  const mock = new MockAdapter(axios);
  const userData = JSON.parse(localStorage.getItem("userData"));
  beforeEach(() => {
    mock
      .onGet(`/ecp/patient/getPatient/${userData?.patientId}`)
      .reply(200, mockUserData);

    mock
      .onPut(`/ecp/patient/editPatient/${userData?.patientId}`)
      .reply(200, mockUserData);
  });
  afterEach(() => {
    mock.reset();
  });

  afterAll(() => {
    mock.reset();
  });

  test("setUserData", async () => {
    const userStorageData = JSON.parse(localStorage.getItem("userProfile"));

    let result = await store.dispatch(setUserData(userStorageData));
    expect(result.payload._id).toEqual("98f9404b-6ea8-4732-b14f-9c1a168d8066");

    userStorageData.contactInformation.contactPreferenceDetail.email = true;
    result = await store.dispatch(setUserData(userStorageData));
    expect(result.payload._id).toEqual("98f9404b-6ea8-4732-b14f-9c1a168d8066");

    userStorageData.contactInformation.contactPreferenceDetail.phone = true;
    result = await store.dispatch(setUserData(userStorageData));
    expect(result.payload._id).toEqual("98f9404b-6ea8-4732-b14f-9c1a168d8066");

    userStorageData.contactInformation.contactPreferenceDetail.email = false;
    result = await store.dispatch(setUserData(userStorageData));
    expect(result.payload._id).toEqual("98f9404b-6ea8-4732-b14f-9c1a168d8066");
  });

  test("fetchUser", async () => {
    const result = await store.dispatch(
      fetchUser({ patientId: userData.patientId })
    );
    expect(result.payload._id).toEqual("f352a9fe-53a4-4be8-866f-851ce45331ff");
  });

  test("updateUser failed", async () => {
    mock
      .onPut(`/ecp/patient/editPatient/${userData?.patientId}`)
      .reply(404, mockUserData);
    const result = await store.dispatch(
      updateUser({
        patientId: userData.patientId,
        payload: {},
      })
    );
    expect(result.payload.success).toEqual(false);
  });

  test("updateUser no image", async () => {
    const result = await store.dispatch(
      updateUser({
        patientId: userData.patientId,
        payload: {
          firstName: "dewo",
          lastName: "Simanjuntak",
          name: "dewo Simanjuntak",
          preferredName: "",
          profilePhoto: null,
          issuedCardFront: null,
          issuedCardBack: null,
          dob: "12/12/1991",
          title: "",
          email: "patient123@gmail.com",
          mobile: "(977) 623-4567",
          address: "",
          city: "",
          state: "",
          zip: "",
          preferredCommunication: "phone",
          age: "30",
          gender: "",
        },
      })
    );
    expect(result.payload.response._id).toEqual(
      "f352a9fe-53a4-4be8-866f-851ce45331ff"
    );
  });

  test("updateUser with image", async () => {
    const postBody = {
      patientId: userData.patientId,
      payload: {
        firstName: "dewo",
        lastName: "Simanjuntak",
        name: "dewo Simanjuntak",
        preferredName: "",
        profilePhoto: {
          uid: "6c747058-c1a8-4b10-bec3-db9471ed8a32",
          fileName: "MyCareTeam-Copy of Biography tree.jpg",
          assetUrl: "/v1/patient",
          _version: "78481ed0-d0e2-4642-89f1-a5403223b6a2",
        },
        issuedCardFront: {
          uid: "6c747058-c1a8-4b10-bec3-db9471ed8a32",
          fileName: "MyCareTeam-Copy of Biography tree.jpg",
          assetUrl: "/v1/patient",
          _version: "78481ed0-d0e2-4642-89f1-a5403223b6a2",
        },
        issuedCardBack: {
          uid: "e3f24f8d-014a-4fe8-9bb5-e246d4b71983",
          fileName: "MyCareTeam-Biography tree.jpg",
          assetUrl: "/v1/patient",
          _version: "6a7dd383-f942-4028-86c6-767c74a3ed57",
        },
        dob: "12/12/1991",
        title: "",
        email: "patient123@gmail.com",
        mobile: "(977) 623-4567",
        address: "Limus Pratama Regency",
        city: "Bogor Regency",
        state: "MP",
        zip: "16820",
        preferredCommunication: "phone",
        age: "30",
        gender: "",
      },
    };
    let result = await store.dispatch(updateUser(postBody));
    expect(result.payload.response._id).toEqual(
      "f352a9fe-53a4-4be8-866f-851ce45331ff"
    );
    postBody.payload.profilePhoto = {};
    postBody.payload.issuedCardFront = {};
    postBody.payload.issuedCardBack = {};
    result = await store.dispatch(updateUser(postBody));
    expect(result.payload.response._id).toEqual(
      "f352a9fe-53a4-4be8-866f-851ce45331ff"
    );
    delete postBody.payload.profilePhoto.uid;
    delete postBody.payload.issuedCardFront.uid;
    delete postBody.payload.issuedCardBack.uid;
    result = await store.dispatch(updateUser(postBody));
    expect(result.payload.response._id).toEqual(
      "f352a9fe-53a4-4be8-866f-851ce45331ff"
    );
  });

  test("fetchInsurance", async () => {
    mock
      .onGet(`/ecp/insurance/beneficiaries/${userData.patientId}/coverages`)
      .reply(200, {
        count: 0,
        entities: [],
        _links: { self: { href: "/api?pageNo=0&pageSize=100" } },
      });
    let result = await store.dispatch(fetchInsurance(userData.patientId));
    expect(result.payload).toEqual(undefined);
  });

  test("fetchInsurance", async () => {
    mock
      .onGet(`/ecp/insurance/beneficiaries/${userData.patientId}/coverages`)
      .reply(200, mockExistingInsurance);
    let result = await store.dispatch(fetchInsurance(userData.patientId));
    expect(result.payload).toEqual(undefined);
  });

  const payLoadAddInsurance = {
    id: "fb1e093d-9eb3-4b0c-aa5d-52e02f90df9b",
    provider: {
      id: "40df17d8-b546-400d-94a4-218b1bc92747",
      label: "Vision Care",
      value: "Vision Care",
    },
    plan: {
      id: "e64e89ab-ff29-47d3-acc3-62e2b0efd412",
      label: "Other",
      value: "Other",
    },
    memberID: "f352a9fe-53a4-4be8-866f-851ce45331ff",
    groupID: "",
    isSubscriber: "Yes",
    subscriberData: {
      firstName: "dewo",
      lastName: "Simanjuntak",
      dob: "1991-12-11T17:00:00.000Z",
      relationship: "Spouse",
    },
    priority: "PRIMARY",
    frontCard: {
      uid: "f55e7328-63ff-4b20-a5e5-4581a0d1a95b",
      fileName: "MyCareTeam-Copy of Biography tree.jpg",
      metaInfo: {},
      _version: "58b4e33d-6083-407f-97dc-89a1740e51ad",
    },
    backCard: {
      uid: "ecf0df4f-a551-4f15-8537-2542e78a9f6b",
      fileName: "MyCareTeam-Biography tree.jpg",
      metaInfo: {},
      _version: "685a317c-0f72-408b-abe2-cc96adc79987",
    },
  };

  test("addInsurance", async () => {
    const postBody = {
      patientId: userData.patientId,
      payload: payLoadAddInsurance,
    };
    let addInsuranceData = await store.dispatch(postInsurance(postBody));
    expect(addInsuranceData.payload.success).toBeFalsy();
    mock
      .onPost(`/ecp/insurance/beneficiaries/${userData.patientId}/coverages/`)
      .reply(200, mockSubmitInsurance);
    addInsuranceData = await store.dispatch(postInsurance(postBody));
    expect(addInsuranceData.payload.success).toBeTruthy();
    let result = store.dispatch(
      addUserInsuranceData(addInsuranceData.payload.response)
    );
    expect(result.payload.subscriber._id).toEqual(postBody.payload.memberID);
  });

  const updateInsuranceFlow = async () => {
    const coverageId = "24bea5f6-146c-430d-9578-e024f4790afb";
    const postBody = {
      patientId: userData.patientId,
      coverageId,
      payload: { ...payLoadAddInsurance },
    };
    let updateInsuranceData = await store.dispatch(updateInsurance(postBody));
    expect(updateInsuranceData.payload.success).toBeFalsy();
    mock
      .onPut(
        `/ecp/insurance/beneficiaries/${userData.patientId}/coverages/${coverageId}`
      )
      .reply(200, mockSubmitInsurance);
    updateInsuranceData = await store.dispatch(updateInsurance(postBody));
    expect(updateInsuranceData.payload.success).toBeTruthy();

    let result = await store.dispatch(
      setUserInsuranceDataById(updateInsuranceData.payload.response)
    );
    expect(result.payload.subscriber._id).toEqual(postBody.payload.memberID);
    delete postBody.payload.backCard.uid;
    delete postBody.payload.frontCard.uid;
    updateInsuranceData = await store.dispatch(updateInsurance(postBody));
    expect(updateInsuranceData.payload.success).toBeTruthy();
  };

  test("updateInsurance", updateInsuranceFlow);

  test("deleteInsurance", async () => {
    await updateInsuranceFlow();
    const formDeleteInsurance = {
      id: "24bea5f6-146c-430d-9578-e024f4790afb",
      provider: {
        id: "2a7601c4-f9e7-4698-ae56-bbe44dee0c9a",
        label: "EyeMed",
        value: "EyeMed",
      },
      plan: {
        id: "b4a0e67e-a038-4726-a5c1-a019c6fdd6f8",
        label: "Eye Care",
        value: "Eye Care",
      },
      memberID: "f352a9fe-53a4-4be8-866f-851ce45331ff",
      groupID: "",
      isSubscriber: "Yes",
      subscriberData: {
        firstName: "dewo",
        lastName: "Simanjuntak",
        dob: "1991-12-11T17:00:00.000Z",
        relationship: "Spouse",
      },
      priority: "PRIMARY",
      frontCard: {
        uid: "11802ccd-4318-4ed9-a488-d3e23ca23a76",
        fileName: "Appointment-bioComp.jpg",
        metaInfo: {},
        _version: "68065403-bbb4-4d58-9a6a-873b3d258927",
      },
    };
    //delete flow
    let deleteInsuranceData = await store.dispatch(
      deleteInsurance({
        patientId: userData.patientId,
        coverageId: formDeleteInsurance.id,
      })
    );
    expect(deleteInsuranceData.payload.success).toBeFalsy();
    mock
      .onPatch(`/ecp/insurance/beneficiaries/${userData.patientId}/coverages`)
      .reply(200, [
        { message: "SUCCESS", _id: "4f365b32-a64f-4167-b31c-b097aacc4784" },
      ]);

    deleteInsuranceData = await store.dispatch(
      deleteInsurance({
        patientId: userData.patientId,
        coverageId: formDeleteInsurance.id,
      })
    );
    expect(deleteInsuranceData.payload.success).toBeTruthy();
    store.dispatch(removeUserInsuranceData(formDeleteInsurance));
  });
});
