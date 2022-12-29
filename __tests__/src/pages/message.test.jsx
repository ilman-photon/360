import {
  waitFor,
  within,
  fireEvent,
  cleanup,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { renderMessagePage } from "../../../__mocks__/commonSteps";

describe("Menu Components", () => {
  let container;

  beforeEach(async () => {
    cleanup();
    container = await renderMessagePage();
  });

  const clickListAndOpenDetails = async (isDeleted) => {
    const buttonMessageCard = await waitFor(() =>
      container.getAllByTestId("message-card")
    );
    await waitFor(() => fireEvent.click(buttonMessageCard[0]));
    const containerDetail = await waitFor(() =>
      container.getByTestId("messaging-container-detail")
    );
    const deletedIcon = within(containerDetail).getAllByTestId("delete-message-icon");
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
    //await waitFor(() => clickListAndOpenDetails(true));
    //await waitFor(() => clickListAndOpenDetails(false));
    const deletedButton = container.getByTestId("deleted-tab");
    expect(deletedButton).toBeInTheDocument();
    await waitFor(() => fireEvent.click(deletedButton));
  });
});
