import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { Api } from "../../../../src/pages/api/api";

import store, { setGenericErrorMessage } from "../../../../src/store/store";
import constants from "../../../../src/utils/constants";

describe("Api test", () => {
  let mock;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  describe("when API call is successful", () => {
    it("logout", async () => {
      const expectedResult = {
        ResponseCode: 2005,
        ResponseType: "success",
      };
      mock.onPost(`/ecp/patient/logout`).reply(200, expectedResult);
      const api = new Api();
      const result = await api.logout({
        username: "9876543210",
      });
      expect(result).toEqual(expectedResult);
    });

    it("login", async () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "success",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
      const api = new Api();
      const result = await api.login({
        username: "user1@photon.com",
        password: "Password@123",
      });
      expect(result).toEqual(expectedResult);
    });

    it("validateUserName", async () => {
      const expectedResult = {
        ResponseCode: 1000,
        ResponseType: "success",
        SecurityQuestions: [
          {
            "Where did you go the first time you flew on a plane?": "America",
            "Who is your all-time favorite movie character": "Peter",
            "In what city or town did your parents meet?": "Berlin",
          },
        ],

        PreferredComunication: "Both",
      };
      mock.onPost(`/ecp/patient/validate`).reply(200, expectedResult);
      const api = new Api();
      const result = await api.validateUserName({
        answerSecurityQuestions: true,
        patient: {
          userName: "smith1@photon.com",
        },
      });
      expect(result).toEqual(expectedResult);
    });

    it("resetPassword", async () => {
      const expectedResult = {
        ResponseCode: 1000,
        ResponseType: "success",
        email: "smith1@photon.com",
      };
      mock.onPost(`/ecp/patient/resetPasswordLink`).reply(200, expectedResult);
      const api = new Api();
      const result = await api.resetPassword({
        resetPassword: true,
        preferredComunication: "email",
        patient: {
          userName: "smith1@photon.com",
        },
      });
      expect(result).toEqual(expectedResult);
    });

    it("oneTimeLink", async () => {
      const expectedResult = {
        ResponseCode: 1000,
        ResponseType: "success",
      };
      mock.onPost(`/ecp/patient/onetimelink`).reply(200, expectedResult);
      const api = new Api();
      const result = await api.oneTimeLink({
        oneTimeLinkEnable: true,
        patient: {
          userName: "smith1@photon.com",
        },
      });
      expect(result).toEqual(expectedResult);
    });

    it("updatePassword", async () => {
      const expectedResult = {
        ResponseCode: 1000,
        ResponseType: "success",
      };
      mock.onPost(`/ecp/patient/updatepassword`).reply(200, expectedResult);
      const api = new Api();
      const result = await api.updatePassword({
        confirmPassword: {
          ConfirmPassword: "Password@123",
          password: "Password@123",
        },
        patient: {
          userName: "smith1@photon.com",
        },
      });
      expect(result).toEqual(expectedResult);
    });

    it("tokenValidation", async () => {
      const expectedResult = {
        tokenStatus: "true",
        email: "smith1@photon.com",
      };
      mock.onPost(`/ecp/patient/oneTimeLinkToken`).reply(200, expectedResult);
      const api = new Api();
      const result = await api.tokenValidation(
        {
          oneTimeToken: "123",
        },
        "oneTimeLink"
      );
      expect(result).toEqual(expectedResult);
    });

    it("tokenValidation", async () => {
      const expectedResult = {
        tokenStatus: "true",
        email: "smith3@photon.com",
      };
      mock.onPost(`/ecp/patient/resetPasswordToken`).reply(200, expectedResult);
      const api = new Api();
      const result = await api.tokenValidation(
        {
          resetPasswordToken: "123",
        },
        "reset"
      );
      expect(result).toEqual(expectedResult);
    });
  });

  describe("when API call is failed", () => {
    it("login", async () => {
      const expectedResult = {
        ResponseCode: 2000,
        ResponseType: "success",
        userType: "patient",
      };
      mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
      const api = new Api();
      const result = await api.login({
        username: "user123",
        password: "Password@123",
      });
      expect(result).toEqual(expectedResult);
    });

    it("validateUserName", async () => {
      const expectedResult = {
        ResponseCode: 1001,
        ResponseType: "failure",
      };
      mock.onPost(`/ecp/patient/validate`).reply(200, expectedResult);
      const api = new Api();
      await api
        .validateUserName({
          answerSecurityQuestions: true,
          patient: {
            userName: "smith1@photon.com",
          },
        })
        .catch((result) => {
          expect(result).toEqual(expectedResult);
        });
    });

    it("resetPassword", async () => {
      const expectedResult = {
        message: "invalid username format",
      };
      mock.onPost(`/ecp/patient/resetPasswordLink`).reply(200, expectedResult);
      const api = new Api();
      await api
        .resetPassword({
          resetPassword: true,
          preferredComunication: "email",
          patient: {
            userName: "smith1photon.com",
          },
        })
        .catch((result) => {
          expect(result).toEqual(expectedResult);
        });
    });

    it("tokenValidation", async () => {
      const expectedResult = {
        message: "internal server error",
      };
      mock.onPost(`/ecp/patient/oneTimeLinkToken`).reply(200, expectedResult);
      const api = new Api();
      const result = await api.tokenValidation(
        {
          oneTimeToken: "123",
        },
        "oneTimeLink"
      );
      expect(result).toEqual(expectedResult);
    });

    it("tokenValidation", async () => {
      const expectedResult = null;
      mock.onPost(`/ecp/patient/resetPasswordToken`).reply(200, expectedResult);
      const api = new Api();
      api
        .tokenValidation(
          {
            resetPasswordToken: "123",
          },
          "reset"
        )
        .catch((response) => {
          expect(response.request.responseURL).toEqual(
            "/ecp/patient/resetPasswordToken"
          );
        });
    });

    it("tokenValidation", async () => {
      const expectedResult = null;
      mock.onPost(`/ecp/patient/resetPasswordToken`).reply(200, expectedResult);
      const api = new Api();
      api
        .tokenValidation(
          {
            resetPasswordToken: "123",
          },
          "reset"
        )
        .catch((response) => {
          expect(response.request.responseURL).toEqual(
            "/ecp/patient/resetPasswordToken"
          );
        });
    });

    it("updatePassword timeout error", async () => {
      mock.onPost(`/ecp/patient/updatepassword`).timeoutOnce();
      const api = new Api();
      await api
        .updatePassword({
          confirmPassword: {
            ConfirmPassword: "Password@123",
            password: "Password@123",
          },
          patient: {
            userName: "smith1@photon.com",
          },
        })
        .catch((response) => {
          expect(response.message).toEqual("timeout of 20000ms exceeded");
        });
    });

    it("timeout error", async () => {
      const expectedResult = {
        ResponseCode: 500,
        description: "Something went wrong. Please try again after sometime.",
      };
      mock.onPost(`/ecp/patient/resetPasswordToken`).reply(500, expectedResult);
      const api = new Api();
      api
        .tokenValidation(
          {
            resetPasswordToken: "123",
          },
          "reset"
        )
        .catch((response) => {
          expect(response).toEqual(expectedResult);
        });
    });

    it("create client error", async () => {
      const expectedResult = new Error("Request failed with status code 404");
      const api = new Api();
      api
        .getResponse(
          `/ecp/patient/resetPasswordToken`,
          {
            resetPasswordToken: "123",
          },
          "posts"
        )
        .catch((response) => {
          expect(response).toEqual(expectedResult);
        });
    });

    it("errorGenericValidation", async () => {
      const err = {
        code: constants.ERROR_CODE.BAD_REQUEST,
        response: {
          data: {
            ResponseCode: "Not Empty",
          },
        },
      };
      const err2 = {
        code: constants.ERROR_CODE.NETWORK_ERR,
        response: {
          data: {
            ResponseCode: "Not Empty",
          },
        },
      };
      const api = new Api();
      api.errorGenericValidation(err);
      api.errorGenericValidation({ ...err, response: null });
      api.errorGenericValidation({ ...err, data: null });
      api.errorGenericValidation({
        ...err,
        data: {
          ResponseCode: undefined,
        },
      });
      api.errorGenericValidation(err2);
    });

    it("responseCodeValidation", async () => {
      const err = {
        code: constants.ERROR_CODE.BAD_REQUEST,
        response: {
          data: {
            ResponseCode: "Not Empty",
          },
        },
      };
      const api = new Api();
      expect(api.responseCodeValidation(err)).toBeTruthy();
    });
  });

  it("create client error", async () => {
    const errorResult = {
      ResponseCode: 400,
      data: {
        _errors: "Error Test",
      },
      _errors: "Error Test",
    };

    mock.onPost(`/ecp/patient/search/ecppatientid`).reply(300, errorResult);
    const api = new Api();
    api
      .getResponse(
        `/ecp/patient/search/ecppatientid`,
        {
          resetPasswordToken: "123",
        },
        "post"
      )
      .catch((response) => {});
  });

  it("tokenValidation", async () => {
    const expectedResult = {
      ResponseCode: 1000,
      ResponseType: "success",
    };
    mock.onPost(`/ecp/patient/oneTimeLinkToken`).reply(200, expectedResult);
    const api = new Api();
    const result = await api.tokenValidation(
      {
        resetPasswordToken: "123",
      },
      "link"
    );
    expect(result).toEqual(expectedResult);
  });

  it("getIpAddress", async () => {
    const expectedResult = {
      message: "Your refill request has been canceled",
    };
    mock.onPost(`/ecp/prescriptions/cancelRefill`).reply(200, expectedResult);

    const api = new Api();
    const result = await api.doMedicationCancelRequestRefill({
      patientId: "001",
    });
    expect(result).toEqual(expectedResult);
  });

  it("uploadFile", async () => {
    const api = new Api();
    const result = await api.uploadFile("http//dummy.com", {});
    // expect(result).toEqual(expectedResult);
  });
});
