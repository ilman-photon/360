import {
  fireEvent,
  render,
  cleanup
} from "@testing-library/react";
import "@testing-library/jest-dom";
import mediaQuery from "css-mediaquery";
import Prescriptions, { renderCTAIcon } from "../../../../src/components/molecules/Dashboard/prescriptions";
import { MOCK_PRESCRIPTION } from "../../../../__mocks__/mockResponse";


describe("Prescription Medication test", () => {
  let container;
  let jsdomPrint;

  function createMatchMedia(width) {
    return (query) => ({
      matches: mediaQuery.match(query, { width }),
      addListener: () => { },
      removeListener: () => { },
    });
  }

  beforeEach(() => {
    const spyWindowOpen = jest.spyOn(window, "open");
    spyWindowOpen.mockImplementation(jest.fn());
  });

  it("Render Prescription renderMedicationUI", () => {
    container = render(
      <Prescriptions
        prescriptionData={MOCK_PRESCRIPTION.prescriptions}
        isViewAll={false}
        onMedicationRequestRefill={jest.fn()}
        requestRefillResponseData={jest.fn()}
      />);
  });

  it("renderCTAIcon Prescription renderCTAIcon", () => {
    cleanup()
    window.matchMedia = createMatchMedia("1920px");
    container = render(
      <Prescriptions
        prescriptionData={MOCK_PRESCRIPTION.prescriptions}
        isViewAll={true}
      />);
    const contactTab = container.getByTestId("menu-contact")
    fireEvent.click(contactTab)
    const dwnldBtn = container.getByTestId("download-icon")
    const printBtn = container.getAllByTestId("print-icon")[0]
    fireEvent.click(dwnldBtn)
    // fireEvent.click(printBtn)
  })
});
