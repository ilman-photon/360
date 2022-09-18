import { fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { defineFeature, loadFeature } from "jest-cucumber";
import SessionExpiredModal from "../../src/components/organisms/SessionExpiredModal/sessionExpiredModal";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint5/EPP-1607.feature",
  {
    tagFilter: "@included and not @excluded",
  }
);

defineFeature(feature, (test) => {
    let container;
    let onLoggedOff = jest.fn()
    const defaultValidation = () => {
        expect(true).toBeTruthy();
    };
    const validateText = (arg0) => {
        expect(container.getByText(arg0)).toBeInTheDocument();
    };
    test('EPIC_EPP-48_STORY_EPP-1607 - Verify that user should be able to view past appointments', ({  }) => {

    });
    test('EPIC_EPP-48_STORY_EPP-1607 - Verify that whether user should be able to view the list of past appointments', ({  }) => {

    });
    test('EPIC_EPP-48_STORY_EPP-1607 - Verify whether user should be able to view the details under each past appointment', ({  }) => {

    });
    test('EPIC_EPP-48_STORY_EPP-1607 - Verify whether the user should able to see the past appointments without Internet connection', ({  }) => {

    });
    test('EPIC_EPP-48_STORY_EPP-1607 - Verify whether any error is displaying when we press F12 after user lands on Appointments screen', ({  }) => {

    });
    test('EPIC_EPP-48_STORY_EPP-1607 - Verify whether the error message is displaying when the service is unavailable', ({  }) => {

    });
})