import {
  render,
  fireEvent,
  within,
  cleanup,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import MessagingDetailsMobileView from "../../../../src/components/molecules/Messaging/MessageDetailsMobileView";
// import React from "react";

describe("container Components", () => {
  let container;
  // const useRefSpy = jest
  //   .spyOn(React, "useRef")
  //   .mockReturnValueOnce({ current: { focus } });

  const MOCK_DATA = {
    id: 6783,
    subject: "Follow-up from past visit/message",
    messages: [
      {
        id: 7395,
        name: "Anthony Beth, D.O.",
        modifiedAt: "Oct 11, 2022, 4:31:42 PM",
        message:
          "I have attached the updated note about the patient. It was nice seeing you at the appointment we’ll need...",
        attachments: [],
        source: "/doctor.png",
      },
      {
        id: 2345,
        name: "Daniel Radclief SpOg",
        modifiedAt: "Oct 13, 2022, 4:31:42 PM",
        message:
          "I have attached the updated note about the patient. It was nice seeing you at the appointment we’ll need...",
        attachments: [
          {
            id: "682d29e5-9d85-498c-b2dc-8be8ba4b3b64",
            fileName: "PatientNotes.pdf",
            url: "https://www.africau.edu/images/default/sample.pdf",
          },
          {
            id: "682d29e5-9d85-498c-b2dc-8be8ba4b3b64",
            fileName: "PatientNotes2.pdf",
            url: "https://www.africau.edu/images/default/sample.pdf",
          },
          {
            id: "682d29e5-9d85-498c-b2dc-8be8ba4b3b64",
            fileName: "PatientNotes3.pdf",
            url: "https://www.africau.edu/images/default/sample.pdf",
          },
        ],
        source: null,
      },
      {
        id: 9333,
        name: "James Black, D.O.",
        modifiedAt: "Oct 25, 2022, 4:31:42 PM",
        message:
          "I have attached the updated note about the patient. It was nice seeing you at the appointment we’ll need...",
        attachments: [
          {
            id: "682d29e5-9d85-498c-b2dc-8be8ba4b3b64",
            fileName: "PatientNotes.pdf",
            url: "https://www.africau.edu/images/default/sample.pdf",
          },
          {
            id: "682d29e5-9d85-498c-b2dc-8be8ba4b3b64",
            fileName: "PatientNotes2.pdf",
            url: "https://www.africau.edu/images/default/sample.pdf",
          },
          {
            id: "682d29e5-9d85-498c-b2dc-8be8ba4b3b64",
            fileName: "PatientNotes3.pdf",
            url: "https://www.africau.edu/images/default/sample.pdf",
          },
        ],
        source: "/doctor.png",
        isDraft: true,
      },
      {
        id: 9444,
        name: "James Black, D.O.1",
        modifiedAt: "Oct 26, 2022, 4:31:42 PM",
        message:
          "I have attached the updated note about the patient. It was nice seeing you at the appointment we’ll need...",
        attachments: [
          {
            id: "682d29e5-9d85-498c-b2dc-8be8ba4b3b64",
            fileName: "PatientNotes.pdf",
            url: "https://www.africau.edu/images/default/sample.pdf",
          },
          {
            id: "682d29e5-9d85-498c-b2dc-8be8ba4b3b64",
            fileName: "PatientNotes2.pdf",
            url: "https://www.africau.edu/images/default/sample.pdf",
          },
          {
            id: "682d29e5-9d85-498c-b2dc-8be8ba4b3b64",
            fileName: "PatientNotes3.pdf",
            url: "https://www.africau.edu/images/default/sample.pdf",
          },
        ],
        source: "/doctor.png",
        isDraft: true,
      },
    ],
    unRead: null,
  };

  beforeEach(() => {
    container = render(
      <MessagingDetailsMobileView
        data={MOCK_DATA}
        addAttachments={{
          current: {
            click: jest.fn(),
          },
        }}
        handleAssetDownload={jest.fn()}
        attachmentsSource={[]}
        openDeletedDialog={jest.fn()}
        showDetail={false}
        onCloseDetailMsg={jest.fn()}
        isSelectedMsg={{ active: true, id: 6783 }}
        isDesktop={false}
      />
    );
  });

  it("container render", async () => {
    container = render(
      <MessagingDetailsMobileView
        data={null}
        addAttachments={null}
        handleAssetDownload={jest.fn()}
        attachmentsSource={[]}
        openDeletedDialog={false}
        showDetail={true}
        onCloseDetailMsg={jest.fn()}
        isSelectedMsg={{ active: true, id: 6783 }}
        isDesktop={false}
      />
    );
  });

  it("click back button", async () => {
    await waitFor(() =>
      fireEvent.click(container.getByTestId("ArrowBackIosIcon"))
    );
    await waitFor(() =>
      fireEvent.click(container.getByTestId("DeleteOutlinedIcon"))
    );
    await waitFor(() =>
      fireEvent.click(container.getByTestId("add-attachments-button"))
    );
  });

  it("container with subject null", async () => {
    container = render(
      <MessagingDetailsMobileView
        data={undefined}
        addAttachments={{
          current: {
            click: jest.fn(),
          },
        }}
        handleAssetDownload={jest.fn()}
        attachmentsSource={[]}
        openDeletedDialog={jest.fn()}
        showDetail={false}
        onCloseDetailMsg={jest.fn()}
        isSelectedMsg={{ active: true, id: 6783 }}
        isDesktop={false}
      />
    );
  });

  it("container with subject null", async () => {
    container = render(
      <MessagingDetailsMobileView
        data={{
          ...MOCK_DATA,
          messages: [
            {
              id: 7395,
              name: "Anthony Beth, D.O.",
              modifiedAt: "Oct 11, 2022, 4:31:42 PM",
              message:
                "I have attached the updated note about the patient. It was nice seeing you at the appointment we’ll need...",
              attachments: [],
              source: "/doctor.png",
            },
          ],
        }}
        addAttachments={{
          current: {
            click: jest.fn(),
          },
        }}
        handleAssetDownload={jest.fn()}
        attachmentsSource={[]}
        openDeletedDialog={jest.fn()}
        showDetail={false}
        onCloseDetailMsg={jest.fn()}
        isSelectedMsg={{ active: true, id: 6783 }}
        isDesktop={false}
      />
    );
  });
});
