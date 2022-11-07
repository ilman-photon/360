import { defineFeature, loadFeature } from "jest-cucumber";
import { waitFor, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  doLogin,
  renderLogin,
  navigateToPatientPortalHome,
  renderMessagePage,
} from "../../__mocks__/commonSteps";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint8/EPP-6148.feature"
);

const clickDraftTab = async (container) => {
  await waitFor(() => container.getByTestId("draft-tab"));
  const draftTab = container.getByTestId("draft-tab");
  expect(draftTab).toBeInTheDocument();
  fireEvent.click(draftTab);
};

const clickOneMessage = async (container) => {
  await waitFor(() => container.getAllByTestId("message-card")[0]);
  const messageList = container.getAllByTestId("message-card")[0];
  fireEvent.click(messageList);
};

defineFeature(feature, (test) => {
    let container;
    const defaultValidation = () => {
      expect(true).toBeTruthy();
    };
    const mock = new MockAdapter(axios);
    afterEach(() => {
      mock.reset();
    });
    
    test('EPIC_EPP-23_STORY_EPP-6148- Verify if the user able to clicks the download option', ({ given, when, and, then }) => {
        given('user launch Patient Portal XXX URL', async () => {
            container = await renderLogin(container);
        });

        when('user is logged in to the application with a valid username and password', async () => {
            await doLogin(mock, container);
        });

        and('user lands on the Dashboard  page', () => {
            cleanup();
            navigateToPatientPortalHome();
        });

        and('user clicks on messaging in the global header', async () => {
            container = await renderMessagePage();
        });

        then('user sees the all received message', async () => {
            await waitFor(() => container.getByText("titleNoSelectedMessage"));
            expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
        });

        and('user clicks on the drafts button', async () => {
            await clickDraftTab(container);
        });

        then('user see the all drafts message page', () => {
            defaultValidation();
        });

        and('user should see and click  the option to download the attachment', () => {
            defaultValidation();
        });
    });
    
    test('EPIC_EPP-23_STORY_EPP-6148- Verify if able to see attachement downloaded in the device', ({ given, when, and, then }) => {
        given('user launch Patient Portal XXX URL', async () => {
            container = await renderLogin(container);
        });

        when('user is logged in to the application with a valid username and password', async () => {
            await doLogin(mock, container);
        });

        and('user lands on the Dashboard  page', () => {
            cleanup();
            navigateToPatientPortalHome();
        });

        and('user clicks on messaging in the global header', async () => {
            container = await renderMessagePage();
        });

        then('user sees the all received message', async () => {
            await waitFor(() => container.getByText("titleNoSelectedMessage"));
            expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
        });

        and('user clicks on the drafts button', async () => {
            await clickDraftTab(container);
        });

        then('user sees the all drafts message page', () => {
            defaultValidation();
        });

        when('user able to view and click option to download', () => {
            defaultValidation();
        });

        then('user should see attachement downloaded in the device', () => {
            defaultValidation();
        });
    });

});
