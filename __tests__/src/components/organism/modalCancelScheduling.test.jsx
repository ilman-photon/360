import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import ModalCancelScheduling from "../../../../src/components/organisms/ScheduleAppointment/ModalCancelScheduling/modalCancelScheduling";

describe("App", () => {
  let container;
  const mockCallBack = jest.fn();
  beforeEach(() => {
    container = render(
      <ModalCancelScheduling
        isOpen={true}
        OnClickCancel={mockCallBack}
        OnCancelClicked={mockCallBack}
      />
    );
  });

  it("ModalCancelScheduling UI", async () => {
    await waitFor(() => container.getByTestId("title-cancel"));

    const element = container.getByTestId("title-cancel");
    expect(element).toBeInTheDocument();

    // const otherField = container.getByLabelText(/cancelOther/i);
    // fireEvent.change(otherField, { target: { value: "Reason" } });
    // expect(otherField.value).toEqual("Reason");

    const cancelButton = container.getByRole("button", { name: /btnCancel/i });
    const KeepButton = container.getByRole("button", { name: /btnKeep/i });
    expect(KeepButton).toBeTruthy();
    fireEvent.click(cancelButton);
  });
});
