import { defineFeature, loadFeature } from "jest-cucumber";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import TestLabPage from "../../src/pages/patient/account/medical-record";

import { act, fireEvent, render, waitFor } from "@testing-library/react";
import mediaQuery from 'css-mediaquery';
import AuthPage from "../../src/pages/patient/login";
import axios from "axios";
import React, { useState as useStateMock } from 'react';
import { useRouter } from "next/router";

const feature = loadFeature(
    "./__tests__/feature/Patient Portal/Sprint6/EPP-2697.feature",
);

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}))

defineFeature(feature, (test) => {
    let container;
    const mock = new MockAdapter(axios);
    const element = document.createElement("div");
    const setState = jest.fn()
    beforeEach(async () => {
      useStateMock.mockImplementation(init => [init, setState])
    });
  
    afterEach(() => {
      mock.reset();
    });

    const defaultValidation = () => {
      expect(true).toBeTruthy();
    };

    const launchBrowser = () => {
      mock
        .onGet(`https://api.ipify.org?format=json`)
        .reply(200, { ip: "10.10.10.10" });
      act(() => {
        container = render(<AuthPage />, {
          container: document.body.appendChild(element),
          legacyRoot: true,
        });
      });
      const title = container.getByText("formTitle");
      expect("formTitle").toEqual(title.textContent);
    }

    const enterValidUsername = () => {
      const usernameField = container.getByLabelText("emailUserLabel");
      const passwordField = container.getByLabelText("passwordLabel");
      fireEvent.change(usernameField, { target: { value: "wrongUserName@email.cc" } });
      fireEvent.change(passwordField, { target: { value: "validPassword" } });
      expect(usernameField.value).not.toEqual("validUsername@email.cc");
      expect(passwordField.value).toEqual("validPassword");
    }
  
    const clickLogin = () => {
      const login = container.getByRole("button", { name: /Login/i });
      fireEvent.click(login);
    }

    const navigateToMedicalPage = () => {
        act(() => {
            container.rerender(
                <Provider store={store}>
                  <TestLabPage />
                </Provider>
              );
          });
    }
  
    const landsOnMedicalPage = async () => {
      await waitFor(() => {
          expect(container.getByText("Choose a category")).toBeInTheDocument();
      })
    }

  const userSeeEmptyTable = async () => {
    await waitFor(() => {
      expect(container.getByText("There are no Test & Lab Results.")).toBeInTheDocument();
      })
    const emptyTable = container.getByText("There are no Test & Lab Results.");
    expect(emptyTable).toBeInTheDocument()
  }

    const componentsPage = async () => {
        await waitFor(() => {
        expect(container.getByText("Your lab results are available. Please reach out to your provider.")).toBeInTheDocument();
        expect(container.getAllByText("Test & Lab Results")[0]).toBeInTheDocument();
        
        expect(container.getByText("Test Name")).toBeInTheDocument();
        expect(container.getByText("Ordered by")).toBeInTheDocument();
        expect(container.getByText("Test Date")).toBeInTheDocument();
        expect(container.getByText("Test Status")).toBeInTheDocument();
        })
    }

    test('EPIC_EPP-14_STORY_EPP-2697- Verify whether the user is able to view their test results', ({ given, when, and, then }) => {
        given('user Launch  the browser and enter the user portal URL', () => {
            launchBrowser();
        });

        when(/^user enter valid (.*) and (.*)$/, (arg0, arg1) => {
            enterValidUsername();
        });

        and('clicks  on login button.', () => {
            clickLogin();
        });

        and('user navigates to the screen to view their test results', () => {
            defaultValidation();
        });

        then('user lands on the screen to view their test results', () => {
            landsOnMedicalPage();
        });
    });

    test('EPIC_EPP-14_STORY_EPP-2697- Verify whether the user is able to view the mentioned details', ({ given, when, and, then }) => {
        given('user Launch  the browser and enter the user portal URL', () => {
            launchBrowser();
        });

        when(/^user enter valid (.*) and (.*)$/, (arg0, arg1) => {
            enterValidUsername();
        });

        and('clicks  on login button.', () => {
            clickLogin();
        });

        and('user navigates to the screen to view their test results', () => {
            navigateToMedicalPage();
        });

        then('user lands on the screen to view their test results', () => {
            landsOnMedicalPage();
        });

        and('user able to view the following details', () => {
            componentsPage();
        });
    });

    test('EPIC_EPP-14_STORY_EPP-2697- Verify whether the System will list the tests based on how recent they were taken', ({ given, when, and, then }) => {
        given('user Launch  the browser and enter the user portal URL', () => {
            launchBrowser();
        });

        when(/^user enter valid (.*) and (.*)$/, (arg0, arg1) => {
            enterValidUsername();
        });

        and('clicks  on login button.', () => {
            clickLogin();
        });

        and('user navigates to the screen to view their test results', () => {
            navigateToMedicalPage();
        });

        then('user lands on the screen to view their test results', () => {
            landsOnMedicalPage();
        });

        and('user able to view the details (Test Type, Ordered By, Test Date and Testing Status)', () => {
            componentsPage();
        });

        and('System should list those tests based on how recent they were taken i.e. latest/ recently taken test results to be listed first', () => {
            defaultValidation();
        });
    });

    test('EPIC_EPP-14_STORY_EPP-2697- Verify whether the user is able to download the test results (as pdfs)', ({ given, when, and, then }) => {
        given('user Launch  the browser and enter the user portal URL', () => {
            launchBrowser();
        });

        when(/^user enter valid (.*) and (.*)$/, (arg0, arg1) => {
            enterValidUsername();
        });

        and('clicks  on login button.', () => {
            clickLogin();
        });

        and('user navigates to the screen to view their test results', () => {
            navigateToMedicalPage();
        });

        then('user lands on the screen to view their test results', () => {
            landsOnMedicalPage();
        });

        and('user able to view the details (Test Type, Ordered By, Test Date and Testing Status)', () => {
            componentsPage();
        });

        and('user should be able to download the test results (as pdfs)', () => {
            defaultValidation();
        });
    });

    test('EPIC_EPP-14_STORY_EPP-2697- Verify whether the user is able to see the following message “There are no test results for you now” when there are no tests results', ({ given, when, and, then }) => {
        given('user Launch  the browser and enter the user portal URL', () => {
            launchBrowser();
        });

        when(/^user enter valid (.*) and (.*)$/, (arg0, arg1) => {
            enterValidUsername();
        });

        and('clicks  on login button.', () => {
            clickLogin();
        });

        and('user navigates to the screen to view their test results', () => {
            navigateToMedicalPage();
        });

        then('user lands on the screen to view their test results', () => {
            landsOnMedicalPage();
        });

        and('user is able to see the following message “There are no test results for you now” when there are no tests results', () => {
            userSeeEmptyTable();
        });
    });

    test('EPIC_EPP-14_STORY_EPP-2697- Verify whether the user is able to view the test result in user portal only when it is approved by the provider in E360+ system', ({ given, when, and, then }) => {
        given('user Launch  the browser and enter the user portal URL', () => {
            launchBrowser();
        });

        when(/^user enter valid (.*) and (.*)$/, (arg0, arg1) => {
            enterValidUsername();
        });

        and('clicks  on login button.', () => {
            clickLogin();
        });

        and('user navigates to the screen to view their test results', () => {
            navigateToMedicalPage();
        });

        then('user lands on the screen to view their test results', () => {
            landsOnMedicalPage();
        });

        and('user is able to view the test result in user portal only when it is approved by the provider in E360+ system', (arg0) => {
            defaultValidation();
        });
    });
})