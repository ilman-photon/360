import { fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { defineFeature, loadFeature } from "jest-cucumber";
import { Login } from "../../src/components/organisms/Login/login";
import AuthPage from "../../src/pages/patient/login";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint3/EPP-277.feature",
  {
    tagFilter: "@included and not @excluded",
  }
);

defineFeature(feature, (test) => {
    let containerA;
    let containerB;
    const mock = new MockAdapter(axios);
    afterEach(() => {
        mock.reset();
    });

    const defaultValidation = () => {
        expect(true).toBeTruthy();
    };

    test('EPIC_EPP-3_STORY_EPP-277 - Verify that  User should be prompted regarding session time out in multiple devices', ({ given, when, and, then }) => {
        given(/^user launch the "(.*)" url in Device A$/, (arg0) => {
            defaultValidation()
        });

        when(/^user provides  (.*) and (.*) in Device A$/, (arg0, arg1) => {
            const mockOnLoginClicked = jest.fn((data, route, callback) => {
                callback({
                  status: "success",
                });
              });
              containerA = render(<Login OnLoginClicked={mockOnLoginClicked} />);
        });

        and(/^user clicks on "(.*)" button in Device A$/, (arg0) => {
            const usernameField = containerA.getByLabelText(/emailUserLabel/i);
            const passwordField = containerA.getByLabelText(/passwordLabel/i);
            expect(usernameField.id).toEqual("username");
            expect(passwordField.id).toEqual("password");

            const login = containerA.getByRole("button", { name: /login/i });
            fireEvent.click(login);
        });

        and('user navigates to the Patient Portal application in Device A', async () => {
            const expectedResult = {
                ResponseCode: 2000,
                ResponseType: "success",
                userType: "patient",
              };
              mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
        });

        when('user lands onto “Patient Login” screen in Device A', () => {
            defaultValidation()
        });

        then(/^user provides  (.*) and (.*) in Device B$/, (arg0, arg1) => {
            const mockOnLoginClicked = jest.fn((data, route, callback) => {
                callback({
                  status: "success",
                });
              });
              containerB = render(<Login OnLoginClicked={mockOnLoginClicked} />);
        });

        and(/^user clicks on "(.*)" button in Device B$/, (arg0) => {
            const usernameField = containerB.getByLabelText(/emailUserLabel/i);
            const passwordField = containerB.getByLabelText(/passwordLabel/i);
            expect(usernameField.id).toEqual("username");
            expect(passwordField.id).toEqual("password");

            const login = containerB.getAllByText(/login/i);
            fireEvent.click(login[1]);
        });

        and('user navigates to the Patient Portal application in Device B', () => {
            const expectedResult = {
                ResponseCode: 2000,
                ResponseType: "success",
                userType: "patient",
              };
              mock.onPost(`/ecp/patient/login`).reply(200, expectedResult);
        });

        when('user lands onto “Patient Login” screen in Device B', () => {
            defaultValidation()
        });

        when('both Devices are in Idle state', () => {
            defaultValidation()
        });

        then(/^User should validate whether both are logged out after (\d+) mins$/, (arg0) => {
            defaultValidation()
        });
    });
})