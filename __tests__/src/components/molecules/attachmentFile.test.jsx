import { fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import AttachmentFile from "../../../../src/components/molecules/Messaging/AttachmentFile";

window.scrollTo = jest.fn();

describe("Attachment File Components", () => {
  const MOCK_DATA = [
    { id: "001", name: "test1" },
    undefined,
    { id: "002", name: undefined },
    {},
  ];
  let container;
  beforeEach(() => {
    container = render(
      <AttachmentFile
        attachmentsSource={MOCK_DATA}
        handleAssetDownload={jest.fn()}
      />
    );
  });

  it("Container render and click", async () => {
    const buttonTest = container.getAllByText(/test1/i);
    expect(buttonTest[0]).toBeInTheDocument();
    await waitFor(() => fireEvent.click(buttonTest[0]));
    expect(buttonTest[0]).toBeInTheDocument();
  });

  it("Container render no data", () => {
    container = render(<AttachmentFile />);
  });
});
