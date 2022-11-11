import {
  render,
  fireEvent,
  within,
  cleanup,
  waitFor,
  screen,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import MessagingDetailContentView from "../../../../src/components/molecules/Messaging/MessagingDetailContentView";
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
      },
    ],
    unRead: null,
  };

  beforeEach(() => {
    container = render(
      <MessagingDetailContentView
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
    const containerDetails = container.getAllByTestId(
      /messaging-container-detail/i
    );
    const deletedButton = container.getByTestId("DeleteOutlinedIcon");
    await waitFor(() => fireEvent.click(deletedButton));
    const addAttachmentButton = container.getByTestId("AttachmentOutlinedIcon");
    await waitFor(() => fireEvent.click(addAttachmentButton));

    screen.debug(containerDetails, Infinity);
  });

  it("click back button", async () => {
    container = render(<MessagingDetailContentView data={undefined} />);
  });

  it("container with subject null", async () => {
    container = render(
      <MessagingDetailContentView
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
      <MessagingDetailContentView
        data={{
          ...MOCK_DATA,
          subject: undefined,
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

  it("Handle new message dialog", async () => {
    container = render(
      <MessagingDetailContentView
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
              isDraft: "tes",
            },
          ],
        }}
        isSelectedMsg={{ active: true, id: 6783 }}
      />
    );

    container = render(
      <MessagingDetailContentView
        data={{
          ...MOCK_DATA,
          messages: undefined,
        }}
        isSelectedMsg={{ active: true, id: 6783 }}
      />
    );

    container = render(
      <MessagingDetailContentView
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
              isDraft: true,
            },
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
        isSelectedMsg={{ active: true, id: 6783 }}
      />
    );
    container = render(<MessagingDetailContentView data={undefined} />);
  });
});
