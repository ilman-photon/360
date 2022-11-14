import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MessagingCardDetailView from "../../../../src/components/molecules/Messaging/MessagingCardDetailView";
import { createMatchMedia } from "../../../../__mocks__/commonSteps";

describe("container Components", () => {
  let container;
  const MOCK_DATA = {
    id: 7395,
    name: "Anthony Beth, D.O.",
    modifiedAt: "Oct 11, 2022, 4:31:42 PM",
    message:
      "I have attached the updated note about the patient. It was nice seeing you at the appointment we’ll need...",
    attachments: [
      {
        fileName: "PatientNotes.pdf",
        id: "682d29e5-9d85-498c-b2dc-8be8ba4b3b64",
        url: "https://www.africau.edu/images/default/sample.pdf",
      },
      undefined,
    ],
    source: "/doctor.png",
  };

  beforeEach(() => {
    window.matchMedia = createMatchMedia("1900px");

    container = render(
      <MessagingCardDetailView
        key={"test1"}
        data={MOCK_DATA}
        onDownloadAllAttachmentClicked={jest.fn()}
        handleAssetDownload={jest.fn()}
      />
    );
  });

  it("container render getProfilePicture", async () => {
    window.matchMedia = createMatchMedia("1900px");

    const containerDetails = container.getAllByText(/Anthony Beth, D.O./i);
    expect(containerDetails[0]).toBeInTheDocument();
    const buttonDownload = container.getAllByTestId(
      /button-asset-download-test/i
    );
    expect(buttonDownload[0]).toBeInTheDocument();
    await waitFor(() => fireEvent.click(buttonDownload[0]));

    const buttonDownloadAll = container.getAllByTestId(
      /button-all-asset-download-test/i
    );
    expect(buttonDownloadAll[0]).toBeInTheDocument();
    await waitFor(() => fireEvent.click(buttonDownloadAll[0]));
  });

  it("container render", async () => {
    window.matchMedia = createMatchMedia("600px");

    container = render(
      <MessagingCardDetailView
        key={"test1"}
        data={{ ...MOCK_DATA, source: null }}
        onDownloadAllAttachmentClicked={jest.fn()}
        handleAssetDownload={jest.fn()}
      />
    );
    const containerDetails = container.getAllByText(/Anthony Beth, D.O./i);
    expect(containerDetails[0]).toBeInTheDocument();

    const buttonDownloadMobile = container.getAllByTestId(
      /button-asset-download-mobile-test/i
    );
    expect(buttonDownloadMobile[0]).toBeInTheDocument();
    await waitFor(() => fireEvent.click(buttonDownloadMobile[0]));

    const buttonDownloadAll = container.getAllByTestId(
      /button-all-asset-download-mobile-test/i
    );
    expect(buttonDownloadAll[0]).toBeInTheDocument();
    await waitFor(() => fireEvent.click(buttonDownloadAll[0]));
  });

  it("container render with attachment null", async () => {
    window.matchMedia = createMatchMedia("600px");

    container = render(
      <MessagingCardDetailView
        key={"test1"}
        data={{ ...MOCK_DATA, attachments: undefined }}
        onDownloadAllAttachmentClicked={jest.fn()}
        handleAssetDownload={jest.fn()}
      />
    );
    const containerDetails = container.getAllByText(/Anthony Beth, D.O./i);
    expect(containerDetails[0]).toBeInTheDocument();
  });

  it("container render with attachment null desktop", async () => {
    container = render(
      <MessagingCardDetailView
        key={"test1"}
        data={{ ...MOCK_DATA, attachments: undefined }}
        onDownloadAllAttachmentClicked={jest.fn()}
        handleAssetDownload={jest.fn()}
      />
    );
    const containerDetails = container.getAllByText(/Anthony Beth, D.O./i);
    expect(containerDetails[0]).toBeInTheDocument();
  });
});
