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

const mock = new MockAdapter(axios);

const mockOneMessageReal = {
  "subject": "Provider to Patient Deleted Msg",
  "bodyNote": "Provider to Patient Msg",
  "digitalAssets": [
      {
          "name": "Work From Office Guidelines22.pdf",
          "_id": "ddaaba8f-4730-4b60-b87d-1d23905fa6e4"
      }
  ],
  "messageStatus": "SENT",
  "priority": "HIGH",
  "deliveryDate": "Wed Nov 02 2022 01:17 AM",
  "messageReceipients": [
      {
          "recipientUid": "833da4c6-dc6a-4a7b-9413-51431a599f2d",
          "employee": {
              "firstName": "SHULTZ M",
              "lastName": "SABRINA",
              "_id": "833da4c6-dc6a-4a7b-9413-51431a599f2d",
              "designation": "Dr"
          },
          "recipientType": "SENDER",
          "deleted": false,
          "star": false,
          "new": false
      },
      {
          "recipientType": "TO",
          "senderProviderId": "833da4c6-dc6a-4a7b-9413-51431a599f2d",
          "deleted": false,
          "star": false,
          "new": false
      }
  ],
  "senderIsPatient": false,
  "senderIsProvider": true,
  "sentBy": {
      "designation": "Dr",
      "firstName": "SHULTZ M",
      "lastName": "SABRINA",
      "_id": "833da4c6-dc6a-4a7b-9413-51431a599f2d"
  },
  "sources": [],
  "senderProviderId": "833da4c6-dc6a-4a7b-9413-51431a599f2d",
  "receiverIsPatient": false,
  "receiverPatientId": "17860419-b0bb-41e9-8bbd-bf5e06ffe754",
  "status": "CREATED",
  "_id": "aaa0444e-b5fe-47c8-be5f-fb4407f4e381",
  "_version": "f4788add-e19d-4f92-a781-940f3de6f5cd",
  "_created": "Jan 9, 2023, 6:17:23 AM",
  "_updated": "Jan 9, 2023, 6:17:23 AM",
  "_createdBy": {
      "_id": "a677f406-56b3-4f25-b7a5-37d9266675ba",
      "_links": {
          "self": {
              "href": "/v1/employees/a677f406-56b3-4f25-b7a5-37d9266675ba"
          }
      }
  }
}

const feature = loadFeature(
  "./__tests__/feature/Patient Portal/Sprint8/EPP-2708.feature"
);

const clickOneMessage = async (container) => {
  await waitFor(() => container.getAllByTestId("message-card")[0]);
  const messageList = container.getAllByTestId("message-card")[0];
  expect(messageList).toBeInTheDocument();
  fireEvent.click(messageList);
};

defineFeature(feature, (test) => {
  let container;
  mock
    .onGet('/ecp/messages/viewMessageById/3a1bf90e-c0f0-47a6-9ea8-89efc125ff02?sessionUserId=cdd6587b-b7af-4ef4-848d-214b957b9699')
    .reply(200, mockOneMessageReal)

  afterEach(() => {
    mock.reset();
  });

  test("EPIC_EPP-23_STORY_EPP-2708 - Verify user should see to the screen  send and receive messages.", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    when("user is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    and("click the 'Message Center'.", async () => {
      cleanup();
      container = await renderMessagePage(); //
    });

    then("user lands on the screen to send and receive messages", async () => {
      await waitFor(() => container.getAllByLabelText(/messagingText/i)[0]);
      expect(container.getAllByText(/filterByText/i)[0]).toBeInTheDocument();
    });
  });

  test("EPIC_EPP-23_STORY_EPP-2708 - Verify User should be able to view the list of received messages as that option will be selected by default (like inbox)", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    when("user is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    and("click the 'Message Center'.", async () => {
      cleanup();
      container = await renderMessagePage();
    });

    then("user lands on the screen to send and receive messages", async () => {
      await waitFor(() => container.getAllByLabelText(/messagingText/i)[0]);
      expect(container.getAllByText(/filterByText/i)[0]).toBeInTheDocument();
    });

    and(
      "User should be able to view the list of received messages as that option will be selected by default (like inbox)",
      () => {
        clickOneMessage(container);
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-2708 - Verify User should be able to view list the sent messages", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    when("user is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    and("click the 'Message Center'.", async () => {
      cleanup();
      container = await renderMessagePage();
    });

    then("user lands on the screen to send and receive messages", async () => {
      await waitFor(() => container.getAllByLabelText(/messagingText/i)[0]);
      expect(container.getAllByText(/filterByText/i)[0]).toBeInTheDocument();
    });

    and(
      "User should be able to view the list of received messages as that option will be selected by default (like inbox)",
      () => {
        clickOneMessage(container);
      }
    );

    and("User should be able to view the option (like sent)", async () => {
      await waitFor(() => container.getByTestId("sent-tab"));
    });

    when("user clicked the option (like sent)", () => {
      const sentTab = container.getByTestId("sent-tab");
      expect(sentTab).toBeInTheDocument();
      fireEvent.click(sentTab);
    });

    then("User should be able to view list the sent messages", () => {
      clickOneMessage(container);
    });
  });

  test("EPIC_EPP-23_STORY_EPP-2708 - Verify User should be able to view the option to compose a new message", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    when("user is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    and("click the 'Message Center'.", async () => {
      cleanup();
      container = await renderMessagePage();
    });

    then("user lands on the screen to send and receive messages", async () => {
      await waitFor(() => container.getAllByLabelText(/messagingText/i)[0]);
      expect(container.getAllByText(/filterByText/i)[0]).toBeInTheDocument();
    });

    and("User should be able to view the option to compose new message", () => {
      expect(container.getByText(/newMessage/i)).toBeInTheDocument();
      const newMessage = container.getByTestId("new-message-button");
      fireEvent.click(newMessage);
    });
  });

  test("EPIC_EPP-23_STORY_EPP-2708 - Verify User should be able to view the option to search for a message within received as well as sent messages", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    when("user is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    and("click the 'Message Center'.", async () => {
      cleanup();
      container = await renderMessagePage();
    });

    then("user lands on the screen to send and receive messages", async () => {
      await waitFor(() => container.getAllByLabelText(/messagingText/i)[0]);
      expect(container.getAllByText(/filterByText/i)[0]).toBeInTheDocument();
    });

    and("User should be able to view the option (like sent)", async () => {
      await waitFor(() => container.getByTestId("sent-tab"));
    });

    when("user clicked the option (like sent)", () => {
      const sentTab = container.getByTestId("sent-tab");
      expect(sentTab).toBeInTheDocument();
      fireEvent.click(sentTab);
    });

    then("User should be able to view list the sent messages", () => {
      clickOneMessage(container);
    });

    and(
      "user should be able to view the option to search for a message within received as well as sent messages",
      async () => {
        await waitFor(() => container.getByTestId("message-search-input"));
        expect(
          container.getByTestId("message-search-input")
        ).toBeInTheDocument();
      }
    );
  });

  test("EPIC_EPP-23_STORY_EPP-2708 - Verify User should be able to view the option to filter the messages within received message", ({
    given,
    when,
    and,
    then,
  }) => {
    given("user launch Patient Portal url", async () => {
      container = await renderLogin(container);
    });

    when("user is logged in to the application", async () => {
      await doLogin(mock, container);
    });

    and("click the 'Message Center'.", async () => {
      cleanup();
      container = await renderMessagePage();
    });

    then("user lands on the screen to send and receive messages", async () => {
      await waitFor(() => container.getAllByLabelText(/messagingText/i)[0]);
      expect(container.getAllByText(/filterByText/i)[0]).toBeInTheDocument();
    });

    and(
      "User should be able to view the option to filter the messages within received message",
      () => {
        expect(container.getByText(/filterByText/i)).toBeInTheDocument();
      }
    );
  });
});
