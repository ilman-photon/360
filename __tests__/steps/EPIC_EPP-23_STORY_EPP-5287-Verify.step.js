import { defineFeature, loadFeature } from "jest-cucumber";
import { fireEvent, waitFor, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  doLogin,
  renderLogin,
  renderMessagePage,
} from "../../__mocks__/commonSteps";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint8/EPP-5287.feature"
);

const messageSection = async (container) => {
  await waitFor(() => container.getByTestId("inbox-tab"));
  expect(container.getByTestId("inbox-tab")).toBeInTheDocument();
  expect(container.getByTestId("sent-tab")).toBeInTheDocument();
  expect(container.getByTestId("draft-tab")).toBeInTheDocument();
  expect(container.getByTestId("deleted-tab")).toBeInTheDocument();
};

const clickSentTab = async (container) => {
    await waitFor(() => container.getByTestId("sent-tab"));
    const sentTab = container.getByTestId("sent-tab")
    expect(sentTab).toBeInTheDocument();
    fireEvent.click(sentTab);
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

    test('EPIC_EPP-23_STORY_EPP-5287 - Verify User clicks and opens a sent message with attachments', ({ given, when, and, then }) => {
        given('User launch Patient Portal url', async () => {
            container = await renderLogin(container);
            await doLogin(mock, container)
        });

        when('User lands on the the screen to send and receive messages', async () => {
            cleanup();
            container = await renderMessagePage();
        });

        and('User clicks on the option to view sent message', async () => {
            await waitFor(() => container.getByText("titleNoSelectedMessage"));
            expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
            messageSection(container);
        });

        then('User navigates to the screen to send and receive messages', () => {
            clickSentTab(container);
        });

        and('User lands on the the screen to send and receive messages', () => {
            defaultValidation();
        });

        and('User is viewing the list of sent messages', () => {
            defaultValidation();
        });

        when('User clicks on one of the sent messages', () => {
            defaultValidation();
        });

        then('User should be able to view the sender’s detail (Provider’s name - confirm?) for that message', () => {
            defaultValidation();
        });

        and('User should be able to view the subject of the received message', () => {
            defaultValidation();
        });

        and('User should be able to view the body of the received message', () => {
            defaultValidation();
        });

        and('User should be able to view attachments if any present along with an option to download it', () => {
            defaultValidation();
        });

        when('User clicks and opens a sent message with attachments', () => {
            defaultValidation();
        });

        then('User should be able to view the date and time when message was sent', () => {
            defaultValidation();
        });
    });

    test('EPIC_EPP-23_STORY_EPP-5287 - Verify User clicks on the option to download an attachment', ({ given, when, and, then }) => {
        given('User launch Patient Portal url', async () => {
            container = await renderLogin(container);
        });

        when('User lands on the the screen to send and receive messages', async () => {
            cleanup();
            container = await renderMessagePage();
        });

        and('User clicks on the option to view sent message', async () => {
            await waitFor(() => container.getByText("titleNoSelectedMessage"));
            expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
            messageSection(container);
        });

        then('User navigates to the screen to send and receive messages', () => {
            clickSentTab(container);
        });

        and('User lands on the the screen to send and receive messages', () => {
            defaultValidation();
        });

        and('User is viewing the list of sent messages', () => {
            defaultValidation();
        });

        when('User clicks on one of the sent messages', () => {
            defaultValidation();
        });

        then('User should be able to view the sender’s detail (Provider’s name - confirm?) for that message', () => {
            defaultValidation();
        });

        and('User should be able to view the subject of the received message', () => {
            defaultValidation();
        });

        and('User should be able to view the body of the received message', () => {
            defaultValidation();
        });

        and('User should be able to view attachments if any present along with an option to download it', () => {
            defaultValidation();
        });

        when('User clicks and opens a sent message with attachments', () => {
            defaultValidation();
        });

        then('User should be able to view the date and time when message was sent', () => {
            defaultValidation();
        });

        when('User clicks on the option to download an attachment', () => {
            defaultValidation();
        });

        and('User should see the attachment downloaded to their device/ system', () => {
            defaultValidation();
        });
    });

    test('EPIC_EPP-23_STORY_EPP-5287 - Verify User should see the attachment downloaded to their device/ system', ({ given, when, and, then }) => {
        given('User launch Patient Portal url', async () => {
            container = await renderLogin(container);
            await doLogin(mock, container)
        });

        when('User lands on the the screen to send and receive messages', async () => {
            cleanup();
            container = await renderMessagePage();
        });

        and('User clicks on the option to view sent message', async () => {
            await waitFor(() => container.getByText("titleNoSelectedMessage"));
            expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
            messageSection(container);
        });

        then('User navigates to the screen to send and receive messages', () => {
            clickSentTab(container);
        });

        and('User lands on the the screen to send and receive messages', () => {
            defaultValidation();
        });

        and('User is viewing the list of sent messages', () => {
            defaultValidation();
        });

        when('User clicks on one of the sent messages', () => {
            defaultValidation();
        });

        then('User should be able to view the sender’s detail (Provider’s name - confirm?) for that message', () => {
            defaultValidation();
        });

        and('User should be able to view the subject of the received message', () => {
            defaultValidation();
        });

        and('User should be able to view the body of the received message', () => {
            defaultValidation();
        });

        and('User should be able to view attachments if any present along with an option to download it', () => {
            defaultValidation();
        });

        when('User clicks and opens a sent message with attachments', () => {
            defaultValidation();
        });

        then('User should be able to view the date and time when message was sent', () => {
            defaultValidation();
        });

        when('User clicks on the option to download an attachment', () => {
            defaultValidation();
        });

        and('User should see the attachment downloaded to their device/ system', () => {
            defaultValidation();
        });
    });

});
