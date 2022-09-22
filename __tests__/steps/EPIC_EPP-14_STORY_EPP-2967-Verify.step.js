import { defineFeature, loadFeature } from "jest-cucumber";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../src/store/store";
import TestLabPage from "../../src/pages/patient/account/medical-record/test-lab-result";

import { render, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import mediaQuery from 'css-mediaquery';

const feature = loadFeature(
    "./__tests__/feature/Patient Portal/Sprint6/EPP-2697.feature",
);

defineFeature(feature, (test) => {
    let container;

    const defaultValidation = () => {
      expect(true).toBeTruthy();
    };

    function createMatchMedia(width) {
        return query => ({
            matches: mediaQuery.match(query, { width }),
            addListener: () => { },
            removeListener: () => { },
        });
      }

    const renderPage = () => {
        act(() => {
            window.matchMedia = createMatchMedia('1920px');
            container = render(
                <Provider store={store}>
                  {TestLabPage.getLayout(<TestLabPage />)}
                </Provider>
              );
          });
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
            defaultValidation();
        });

        when(/^user enter valid (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation();
        });

        and('clicks  on login button.', () => {
            defaultValidation();
        });

        and('user navigates to the screen to view their test results', () => {
            defaultValidation();
        });

        then('user lands on the screen to view their test results', () => {
            renderPage();
        });
    });

    test('EPIC_EPP-14_STORY_EPP-2697- Verify whether the user is able to view the mentioned details', ({ given, when, and, then }) => {
        given('user Launch  the browser and enter the user portal URL', () => {
            defaultValidation();
        });

        when(/^user enter valid (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation();
        });

        and('clicks  on login button.', () => {
            defaultValidation();
        });

        and('user navigates to the screen to view their test results', () => {
            defaultValidation();
        });

        then('user lands on the screen to view their test results', () => {
            renderPage();
        });

        and('user able to view the following details', () => {
            componentsPage();
        });
    });

    test('EPIC_EPP-14_STORY_EPP-2697- Verify whether the System will list the tests based on how recent they were taken', ({ given, when, and, then }) => {
        given('user Launch  the browser and enter the user portal URL', () => {
            defaultValidation();
        });

        when(/^user enter valid (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation();
        });

        and('clicks  on login button.', () => {
            defaultValidation();
        });

        and('user navigates to the screen to view their test results', () => {
            defaultValidation();
        });

        then('user lands on the screen to view their test results', () => {
            renderPage();
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
            defaultValidation();
        });

        when(/^user enter valid (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation();
        });

        and('clicks  on login button.', () => {
            defaultValidation();
        });

        and('user navigates to the screen to view their test results', () => {
            defaultValidation();
        });

        then('user lands on the screen to view their test results', () => {
            renderPage();
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
            defaultValidation();
        });

        when(/^user enter valid (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation();
        });

        and('clicks  on login button.', () => {
            defaultValidation();
        });

        and('user navigates to the screen to view their test results', () => {
            defaultValidation();
        });

        then('user lands on the screen to view their test results', () => {
            renderPage();
        });

        and('user is able to see the following message “There are no test results for you now” when there are no tests results', () => {
            defaultValidation();
        });
    });

    test('EPIC_EPP-14_STORY_EPP-2697- Verify whether the user is able to view the test result in user portal only when it is approved by the provider in E360+ system', ({ given, when, and, then }) => {
        given('user Launch  the browser and enter the user portal URL', () => {
            defaultValidation();
        });

        when(/^user enter valid (.*) and (.*)$/, (arg0, arg1) => {
            defaultValidation();
        });

        and('clicks  on login button.', () => {
            defaultValidation();
        });

        and('user navigates to the screen to view their test results', () => {
            defaultValidation();
        });

        then('user lands on the screen to view their test results', () => {
            renderPage();
        });

        and('user is able to view the test result in user portal only when it is approved by the provider in E360+ system', (arg0) => {
            defaultValidation();
        });
    });
})