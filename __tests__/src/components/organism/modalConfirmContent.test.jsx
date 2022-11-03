import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ModalConfirmContent from "../../../../src/components/organisms/ScheduleAppointment/ScheduleConfirmation/modalConfirmContent";

describe("App", () => {
  let container;
  beforeEach(() => {
    container = render(<ModalConfirmContent />);
  });

  it("ModalConfirmContent render", () => {
    expect(container.getByText("Add to calendar")).toBeInTheDocument();
  });
});
