import { act, fireEvent, render, waitFor, cleanup } from "@testing-library/react";
import axios from "axios";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { defineFeature, loadFeature } from "jest-cucumber";
import { Provider } from "react-redux";
import ForgotPasswordPage from "../../src/pages/patient/forgot-password";
import store from "../../src/store/store";
const useRouter = jest.spyOn(require("next/router"), "useRouter");
import constants from "../../src/utils/constants";
import { renderLogin } from "../../__mocks__/commonSteps";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint4/EPP-1581.feature"
);

defineFeature(feature, (test) => {
  let container;
  const element = document.createElement("div");
  const mock = new MockAdapter(axios);
  test("EPIC_EPP-44_STORY_EPP-1581 -Verify user able to view inline error message if Email or Phone Number is not entered", ({
    given,
    when,
    then,
    and,
  }) => {
    given("user launch the Marketing Site url", () => { });

    when(
      "user click on Already have an appointment? Sync your appointment information button",
      async () => {
        container = await renderLogin()
        const syncButton = container.getByText("syncYourAppointmentInformation");
        fireEvent.click(syncButton);
      }
    );

    then("user should see the Email or Phone number", async () => {
      cleanup()
      useRouter.mockReturnValue({
        back: jest.fn(),
        asPath: "/patient/sync",
        push: jest.fn(),
      });
      act(() => {
        container = render(
          <Provider store={store}>
            {ForgotPasswordPage.getLayout(<ForgotPasswordPage />)}
          </Provider>
        );
      });
      await waitFor(() => {
        container.getByText(/usernamePlaceHolder/i);
      });
    });

    and("user provides blank Email or Phone number", () => {
      const usernameField = container.getByLabelText(/usernamePlaceHolder/i);
      fireEvent.change(usernameField, { target: { value: "" } });
      expect(usernameField.value).toEqual("");
    });

    and("user should click on submit", () => {
      expect(container.getByTestId("continuebtn")).toBeInTheDocument();
      fireEvent.click(container.getByTestId("continuebtn"));
    });

    then(/^user should see error message "(.*)"$/, (arg0) => {
      expect(container.getByText(/usernamePlaceHolder/i)).toBeInTheDocument();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1581 -Verify user able to click only mobile as preferences mode and able to get the link", ({
    given,
    when,
    then,
    and,
  }) => {
    given("user launch the Marketing Site url", () => { });

    when(
      "user click on Already have an appointment? Sync your appointment information button",
      async () => {
        container = await renderLogin()
        const syncButton = container.getByText("syncYourAppointmentInformation");
        fireEvent.click(syncButton);
      }
    );

    then("user should see the Email or Phone number", async () => {
      cleanup()
      useRouter.mockReturnValue({
        back: jest.fn(),
        asPath: "/patient/sync",
        push: jest.fn(),
      });
      act(() => {
        container = render(
          <Provider store={store}>
            {ForgotPasswordPage.getLayout(<ForgotPasswordPage />)}
          </Provider>
        );
      });
      await waitFor(() => {
        container.getByText(/usernamePlaceHolder/i);
      });
    });

    and("user provides valid Phone number", () => {
      // const usernameField = container.getByRole("textbox", {
      //   name: "usernamePlaceHolder",
      // });
      // fireEvent.change(usernameField, { target: { value: "0987654321" } });
    });

    then("user clicks only mobile as preferences mode", () => { });

    and("user click on submit", async () => {
      // const expectedResult = {
      //   ResponseCode: 1000,
      //   ResponseType: "success",
      //   SecurityQuestions: [
      //     {
      //       "Where did you go the first time you flew on a plane?": "America",
      //       "Who is your all-time favorite movie character": "Peter",
      //       "In what city or town did your parents meet?": "Berlin",
      //     },
      //   ],

      //   PreferredComunication: "Both",
      // };
      // mock.onPost(`/ecp/patient/validate`).reply(200, expectedResult);
      // const oneTimeLinkVal = {
      //   ResponseCode: 1000,
      //   ResponseType: "success",
      // };
      // mock.onPost(`/ecp/patient/onetimelink`).reply(200, oneTimeLinkVal);
      // const button = container.getByTestId("continuebtn");
      // fireEvent.click(button);
      // await waitFor(() => {
      //   expect(
      //     container.getByText(/Link sent to your phone number/i)
      //   ).toBeInTheDocument();
      // });
    });

    then("user recieves link to phone number", () => {
      // expect(
      //   container.getByText(/Link sent to your phone number/i)
      // ).toBeInTheDocument();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1581 -Verify user able to click only email as preferences mode and able to get the link", ({
    given,
    and,
    when,
    then,
  }) => {
    given("user launch the Marketing Site url", () => { });

    and(
      "user clicks on the Already have an appointment? Sync your appointment information link",
      () => { }
    );

    and("user click on Continue as a Guest option", () => { });

    when(
      "user click on Already have an appointment? Sync your appointment information button",
      async () => {
        container = await renderLogin()
        const syncButton = container.getByText("syncYourAppointmentInformation");
        fireEvent.click(syncButton);
      }
    );

    then("user should see the Email or Phone number", async () => {
      cleanup()
      useRouter.mockReturnValue({
        back: jest.fn(),
        asPath: "/patient/sync",
        push: jest.fn(),
      });
      act(() => {
        container = render(
          <Provider store={store}>
            {ForgotPasswordPage.getLayout(<ForgotPasswordPage />)}
          </Provider>
        );
      });
      await waitFor(() => {
        container.getByText(/usernamePlaceHolder/i);
      });
    });

    and("user provides valid email", () => {
      // const usernameField = container.getByRole("textbox", {
      //   name: "usernamePlaceHolder",
      // });
      // fireEvent.change(usernameField, {
      //   target: { value: "smith1@photon.com" },
      // });
    });

    then("user clicks only email as preferences mode", () => { });

    and("user click on submit", async () => {
      // const expectedResult = {
      //   ResponseCode: 1000,
      //   ResponseType: "success",
      //   SecurityQuestions: [
      //     {
      //       "Where did you go the first time you flew on a plane?": "America",
      //       "Who is your all-time favorite movie character": "Peter",
      //       "In what city or town did your parents meet?": "Berlin",
      //     },
      //   ],

      //   PreferredComunication: "Both",
      // };
      // mock.onPost(`/ecp/patient/validate`).reply(200, expectedResult);
      // const oneTimeLinkVal = {
      //   ResponseCode: 1000,
      //   ResponseType: "success",
      // };
      // mock.onPost(`/ecp/patient/onetimelink`).reply(200, oneTimeLinkVal);
      // const button = container.getByTestId("continuebtn");
      // fireEvent.click(button);

      // await waitFor(() => {
      //   expect(
      //     container.getByText(/Link sent to your email/i)
      //   ).toBeInTheDocument();
      // });
    });

    then("user recieves link to email", () => {
      // expect(
      //   container.getByText(/Link sent to your email/i)
      // ).toBeInTheDocument();
    });
  });

  test("EPIC_EPP-44_STORY_EPP-1581 -Verify user able to click both as preferences mode and able to get the link to create password", ({
    given,
    when,
    then,
    and,
  }) => {
    given("user launch the Marketing Site url", () => { });

    when(
      "user click on Already have an appointment? Sync your appointment information button",
      async () => {
        container = await renderLogin()
        const syncButton = container.getByText("syncYourAppointmentInformation");
        fireEvent.click(syncButton);
      }
    );

    then("user should see the Email or Phone number", async () => {
      cleanup()
      useRouter.mockReturnValue({
        back: jest.fn(),
        asPath: "/patient/sync",
        push: jest.fn(),
      });
      act(() => {
        container = render(
          <Provider store={store}>
            {ForgotPasswordPage.getLayout(<ForgotPasswordPage />)}
          </Provider>
        );
      });
      await waitFor(() => {
        container.getByText(/usernamePlaceHolder/i);
      });
    });

    and("user provides valid email or phone number", async () => {
      const userField = container.getByLabelText(/usernamePlaceHolder/i);
      fireEvent.change(userField, { target: { value: "validUser" } });
      expect(userField.value).toEqual("validUser");
    });

    then("user clicks only both as preferences mode", () => { });

    and("user click on submit", () => { });

    then("user recieves link to email or phone number", () => { });
  });
});
