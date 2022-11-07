import { defineFeature, loadFeature } from "jest-cucumber";
import { cleanup, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import {
  doLogin,
  renderLogin,
  renderMessagePage,
} from "../../__mocks__/commonSteps";

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint8/EPP-2708.feature"
);

const clickOneMessage = async (container) => {
    await waitFor(() => container.getAllByTestId("message-card")[0]);
    const messageList = container.getAllByTestId("message-card")[0]
    expect(messageList).toBeInTheDocument();
    fireEvent.click(messageList);
};

defineFeature(feature, (test) => {
    let container;
    const mock = new MockAdapter(axios);
    afterEach(() => {
      mock.reset();
    });

    test('EPIC_EPP-23_STORY_EPP-2708 - Verify user should see to the screen  send and receive messages.', ({ given, when, and, then }) => {
        given('user launch Patient Portal url', async () => {
           container = await renderLogin(container);
        });

        when('user is logged in to the application', async () => {
            await doLogin(mock, container);
        });

        and('click the \'Message Center\'.', async () => {
            cleanup();
            container = await renderMessagePage();
        });

        then('user lands on the screen to send and receive messages', async () => {
            await waitFor(() => container.getByText("titleNoSelectedMessage"));
            expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
        });
    });

    test('EPIC_EPP-23_STORY_EPP-2708 - Verify User should be able to view the list of received messages as that option will be selected by default (like inbox)', ({ given, when, and, then }) => {
        given('user launch Patient Portal url', async () => {
           container = await renderLogin(container);
        });

        when('user is logged in to the application', async () => {
            await doLogin(mock, container);
        });

        and('click the \'Message Center\'.', async () => {
            cleanup();
            container = await renderMessagePage();
        });

        then('user lands on the screen to send and receive messages', async () => {
            await waitFor(() => container.getByText("titleNoSelectedMessage"));
            expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
        });

        and('User should be able to view the list of received messages as that option will be selected by default (like inbox)', () => {
            clickOneMessage(container);
        });
    });

    test('EPIC_EPP-23_STORY_EPP-2708 - Verify User should be able to view list the sent messages', ({ given, when, and, then }) => {
        given('user launch Patient Portal url', async () => {
           container = await renderLogin(container);
        });

        when('user is logged in to the application', async () => {
            await doLogin(mock, container);
        });

        and('click the \'Message Center\'.', async () => {
            cleanup();
            container = await renderMessagePage();
        });

        then('user lands on the screen to send and receive messages', async () => {
            await waitFor(() => container.getByText("titleNoSelectedMessage"));
            expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
        });

        and('User should be able to view the list of received messages as that option will be selected by default (like inbox)', () => {
            clickOneMessage(container);
        });

        and('User should be able to view the option (like sent)', async () => {
            await waitFor(() => container.getByTestId("sent-tab"));
        });

        when('user clicked the option (like sent)', () => {
            const sentTab = container.getByTestId("sent-tab")
            expect(sentTab).toBeInTheDocument();
            fireEvent.click(sentTab);
        });

        then('User should be able to view list the sent messages', () => {
            clickOneMessage(container);
        });
    });

    test('EPIC_EPP-23_STORY_EPP-2708 - Verify User should be able to view the option to compose a new message', ({ given, when, and, then }) => {
        given('user launch Patient Portal url', async () => {
           container = await renderLogin(container);
        });

        when('user is logged in to the application', async () => {
            await doLogin(mock, container);
        });

        and('click the \'Message Center\'.', async () => {
            cleanup();
            container = await renderMessagePage();
        });

        then('user lands on the screen to send and receive messages', async () => {
            await waitFor(() => container.getByText("titleNoSelectedMessage"));
            expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
        });

        and('User should be able to view the option to compose new message', () => {
            expect(container.getByText(/newMessage/i)).toBeInTheDocument();
            const newMessage = container.getByTestId("new-message-button")
            fireEvent.click(newMessage);
        });
    });

    test('EPIC_EPP-23_STORY_EPP-2708 - Verify User should be able to view the option to search for a message within received as well as sent messages', ({ given, when, and, then }) => {
        given('user launch Patient Portal url', async () => {
           container = await renderLogin(container);
        });

        when('user is logged in to the application', async () => {
            await doLogin(mock, container);
        });

        and('click the \'Message Center\'.', async () => {
            cleanup();
            container = await renderMessagePage();
        });

        then('user lands on the screen to send and receive messages', async () => {
            await waitFor(() => container.getByText("titleNoSelectedMessage"));
            expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
        });

        and('User should be able to view the option (like sent)', async () => {
            await waitFor(() => container.getByTestId("sent-tab"));
        });

        when('user clicked the option (like sent)', () => {
            const sentTab = container.getByTestId("sent-tab")
            expect(sentTab).toBeInTheDocument();
            fireEvent.click(sentTab);
        });

        then('User should be able to view list the sent messages', () => {
            clickOneMessage(container);
        });

        and('user should be able to view the option to search for a message within received as well as sent messages', async () => {
            await waitFor(() => container.getByTestId("message-search-input"));
            expect(container.getByTestId("message-search-input")).toBeInTheDocument();
        });
    });

    test('EPIC_EPP-23_STORY_EPP-2708 - Verify User should be able to view the option to filter the messages within received message', ({ given, when, and, then }) => {
        given('user launch Patient Portal url', async () => {
           container = await renderLogin(container);
        });

        when('user is logged in to the application', async () => {
            await doLogin(mock, container);
        });

        and('click the \'Message Center\'.', async () => {
            cleanup();
            container = await renderMessagePage();
        });

        then('user lands on the screen to send and receive messages', async () => {
            await waitFor(() => container.getByText("titleNoSelectedMessage"));
            expect(container.getByText("titleNoSelectedMessage")).toBeVisible();
        });

        and('User should be able to view the option to filter the messages within received message', () => {
            expect(container.getByText(/filterByText/i)).toBeInTheDocument();
        });
    });
});
