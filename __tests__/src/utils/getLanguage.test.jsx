import "@testing-library/jest-dom";
import getLanguage from "../../../src/utils/getLanguage";

describe("getLanguage", () => {
  test("getLanguage success funtionality", () => {
    const providerDetails = {
      isProvider: true,
      isExternalProvider: false,
      materialRate: "0",
      directAddress: "direct@test.com",
      drFirstCredentialDetails: {
        drFirstCredential: true,
        username: "indraku",
        password: "Pass",
        signature: "",
      },
      npi: "1134296023",
      professionalEq: "1234",
      opticalEq: "5678",
      surgicalEq: "8989",
      contactEq: "9876",
      provider: "98127364555378",
      onlineProvider: true,
      license: [
        {
          licenseId: "1234567890",
          state: "NY",
          _id: "a44907e2-04e0-4e09-b5ac-533ee2d56d98",
        },
      ],
      deaIds: [],
      taxonomyCode: "207NI0002X",
      classification: "Dermatology",
      specialization: "Clinical & Laboratory Dermatological Immunology",
      rating: 2,
      about: "This provider is for OPH",
      language1: "English",
      language2: "Arabic",
      language3: "Chinese",
      inNetworkInsurance: "yes",
      education: "MBA",
      membershipAndAffiliation: "dummy",
      profilePhoto: {
        digitalAsset: {
          uid: "d72b0b16-99ab-4ae4-aba3-13b81930b68a",
          fileName: "test",
          assetUrl: "/v1/patient",
          _version: "d72b0b16-99ab-4ae4-aba3-13b81930b77a",
        },
      },
    }
    const result = ["English", "Arabic", "Chinese"]
    expect(getLanguage(providerDetails)).toEqual(result)
  });
});
