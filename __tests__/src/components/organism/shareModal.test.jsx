import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider, useDispatch } from "react-redux";
import ShareModal, { getDynamicShareContent } from "../../../../src/components/organisms/ShareModal/shareModal";
import { renderWithProviders } from "../../utils/test-util";
import { setOpenModal } from "../../../../src/store/share";
import store from "../../../../src/store/store";

describe("ShareModal", () => {
  let container;
  beforeEach(() => {
    container = render(
      <Provider store={store}><ShareModal /></Provider>);
    store.dispatch(setOpenModal(true));
  });

  it("Content shareModal prescription", async () => {
    const content = getDynamicShareContent({
      type: "prescription",
      date: "10/10/2022",
      prescribedBy: "Test Name",
      expirationDate: "10/10/2023",
    });
    const mainContainer = content.props.children
    const subContainer = mainContainer.props.children
    expect(subContainer.props.children.length).toEqual(3)
  });

  it("Content shareModal medication prescription", async () => {
    const content = getDynamicShareContent({
      type: "medication-prescription",
      date: "10/10/2022",
      prescribedBy: "Test Name",
      expirationDate: "10/10/2023",
      dose: "0.5 Ml",
      prescription: "Test Medication",
    });
    const mainContainer = content.props.children
    const subContainer = mainContainer.props.children
    expect(subContainer.props.children.length).toEqual(5)
  });

  it("Content shareModal health-record", async () => {
    const content = getDynamicShareContent({
      type: "health-record",
      date: "10/10/2022",
    });
    const mainContainer = content.props.children
    const subContainer = mainContainer.props.children
    expect(subContainer.props.children.length).toEqual(2)
  });

  it("Content shareModal health-record", async () => {
    const content = getDynamicShareContent({
      type: "care-plan",
      date: "10/10/2022",
      name: "Medication - 11/11/2022",
    });
    const mainContainer = content.props.children
    const subContainer = mainContainer.props.children
    expect(subContainer.props.children.length).toEqual(2)
  });

  it("ShareModal show", async () => {
    const securityInnfo = container.getByText(/Securely Transmit Your Information/i)
    expect(securityInnfo).toBeInTheDocument();
  });

  it("ShareModal error email", async () => {
    const sharedEmail = container.getByTestId("share-email").querySelector('input');
    const shareButton = container.getByTestId(/share-btn/i);

    fireEvent.change(sharedEmail, { target: { value: "" } });
    await fireEvent.click(shareButton)

    fireEvent.change(sharedEmail, { target: { value: "test" } });
    await fireEvent.click(shareButton)

    fireEvent.change(sharedEmail, { target: { value: "test@gmail.com" } });
    await fireEvent.click(shareButton)
  });
});
