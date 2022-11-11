import {
  render,
  waitFor,
  within,
  screen,
  fireEvent,
  cleanup,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import MessagingPage from "../../../src/pages/patient/messaging";
import { Provider } from "react-redux";
import store from "../../../src/store/store";
import {
  MOCK_GET_ALL_MESSAGING,
  MOCK_GET_DELETE_MESSAGING,
  MOCK_GET_DRAFT_MESSAGING,
  MOCK_GET_SENT_MESSAGING,
  MOCK_PROVIDER_LIST_MESSAGING,
} from "../../../__mocks__/mockResponse";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { createMatchMedia } from "../../../__mocks__/commonSteps";

describe("Menu Components", () => {
  let container;
  const mock = new MockAdapter(axios);

  beforeEach(() => {
    window.matchMedia = createMatchMedia("1920px");
    mock
      .onGet(
        `http://localhost/api/dummy/appointment/biography/getProviderList?patientId=98f9404b-6ea8-4732-b14f-9c1a168d8066`
      )
      .reply(200, { results: MOCK_PROVIDER_LIST_MESSAGING });
    mock
      .onGet(`http://localhost/api/dummy/messaging/getAllMessages`)
      .reply(200, MOCK_GET_ALL_MESSAGING);
    mock
      .onGet(`http://localhost/api/dummy/messaging/getSentMessages`)
      .reply(200, MOCK_GET_SENT_MESSAGING);
    mock
      .onGet(`http://localhost/api/dummy/messaging/getDraftMessages`)
      .reply(200, MOCK_GET_DRAFT_MESSAGING);
    mock
      .onGet(`http://localhost/api/dummy/messaging/getDeleteMessages`)
      .reply(200, MOCK_GET_DELETE_MESSAGING);
    container = render(
      <Provider store={store}>
        <MessagingPage />
      </Provider>
    );
  });

  const clickListAndOpenDetails = async (isDeleted) => {
    const buttonMessageCard = await waitFor(() =>
      container.getAllByTestId("message-card")
    );
    await waitFor(() => fireEvent.click(buttonMessageCard[0]));
    const containerDetail = await waitFor(() =>
      container.getByTestId("messaging-container-detail")
    );
    const deletedIcon =
      within(containerDetail).getAllByTestId("DeleteOutlinedIcon");
    await waitFor(() => fireEvent.click(deletedIcon[0]));
    const dialogContainer = await waitFor(() =>
      container.getAllByTestId("deleted-dialog-test")
    );
    expect(dialogContainer[0]).toBeInTheDocument();
    const buttonDelete = within(dialogContainer[0]).getByTestId(
      "messaging-button-delete-test"
    );
    const buttonCancel = within(dialogContainer[0]).getByTestId(
      "messaging-button-cancel-test"
    );
    await waitFor(() =>
      fireEvent.click(isDeleted ? buttonDelete : buttonCancel)
    );
  };

  it("Change Search Input", async () => {
    const inputMessage = container.getByPlaceholderText(/Search/i);
    await waitFor(() =>
      fireEvent.change(inputMessage, {
        target: { value: "te" },
      })
    );
  });

  it("OnCLick Unread Filter", async () => {
    const unreadInp = container.getByTestId("unread-test");
    expect(unreadInp).toBeInTheDocument();
    await waitFor(() => fireEvent.click(unreadInp));
  });

  it("OnCLick Tab", async () => {
    const inboxButton = container.getByTestId("inbox-tab");
    const sentButton = container.getByTestId("sent-tab");
    const draftButton = container.getByTestId("draft-tab");
    const deletedButton = container.getByTestId("deleted-tab");
    expect(inboxButton).toBeInTheDocument();
    expect(sentButton).toBeInTheDocument();
    expect(draftButton).toBeInTheDocument();
    expect(deletedButton).toBeInTheDocument();

    await waitFor(() => fireEvent.click(sentButton));
    await waitFor(() => fireEvent.click(draftButton));
    await waitFor(() => fireEvent.click(deletedButton));
    await waitFor(() => fireEvent.click(inboxButton));
  });

  it("Deleted Message and move to deleted tab", async () => {
    await waitFor(() => clickListAndOpenDetails(true));
    await waitFor(() => clickListAndOpenDetails(false));
    const deletedButton = container.getByTestId("deleted-tab");
    expect(deletedButton).toBeInTheDocument();
    await waitFor(() => fireEvent.click(deletedButton));
  });
});
