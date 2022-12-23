import {
  fireEvent,
  render,
  cleanup
} from "@testing-library/react";
import "@testing-library/jest-dom";
import mediaQuery from "css-mediaquery";
import Prescriptions, { renderCTAIcon } from "../../../../src/components/molecules/Dashboard/prescriptions";
import { MOCK_PRESCRIPTION } from "../../../../__mocks__/mockResponse";
import { renderWithProviders } from "../../utils/test-util";


describe("Prescription Medication test", () => {
  let container;

  function createMatchMedia(width) {
    return (query) => ({
      matches: mediaQuery.match(query, { width }),
      addListener: () => { },
      removeListener: () => { },
    });
  }

  beforeEach(() => {
    const spyWindowOpen = jest.spyOn(window, "open");
    spyWindowOpen.mockImplementation(jest.fn().mockReturnValue({
      focus: jest.fn(),
      print: jest.fn(),
      document: {
        write: jest.fn(),
        close: jest.fn(),
        head: {
          appendChild: jest.fn()
        }
      }
    }));
  });

  it("renderCTAIcon Prescription menu contact", () => {
    cleanup()
    window.matchMedia = createMatchMedia("1920px");
    container = renderWithProviders(
      <Prescriptions
        prescriptionData={MOCK_PRESCRIPTION.prescriptions}
        isViewAll={true}
      />);
    const contactTab = container.getByTestId("menu-contact")
    fireEvent.click(contactTab)
    const dwnldBtn = container.getByTestId("download-icon")
    const printBtn = container.getAllByTestId("print-icon")[0]
    fireEvent.click(dwnldBtn)
    fireEvent.click(printBtn)
  })

  it("renderCTAIcon mobile Prescription menu contact is not View All", async () => {
    cleanup()
    window.matchMedia = createMatchMedia("720px");
    container = renderWithProviders(
      <Prescriptions
        prescriptionData={MOCK_PRESCRIPTION.prescriptions}
        isViewAll={false}
      />);
    const contactTab = await container.getByTestId("menu-contact")
    fireEvent.click(contactTab)
    const viewPresContBtn = await container.getByTestId("view-prescription-contact")
    fireEvent.keyPress(viewPresContBtn, {
      key: 'Enter',
      keyCode: 13,
    })
    fireEvent.click(viewPresContBtn)
  })

  it("renderCTAIcon Prescription menu glasses", () => {
    cleanup()
    window.matchMedia = createMatchMedia("1920px");
    container = renderWithProviders(
      <Prescriptions
        prescriptionData={MOCK_PRESCRIPTION.prescriptions}
        isViewAll={true}
      />);
    const contactTab = container.getByTestId("menu-glasses")
    fireEvent.click(contactTab)
    const dwnldBtn = container.getByTestId("download-icon")
    const printBtn = container.getAllByTestId("print-icon")[0]
    fireEvent.click(dwnldBtn)
    fireEvent.click(printBtn)
  })

  it("renderCTAIcon Prescription menu glasses mobile is not View All", () => {
    cleanup()
    window.matchMedia = createMatchMedia("720px");
    container = renderWithProviders(
      <Prescriptions
        prescriptionData={MOCK_PRESCRIPTION.prescriptions}
        isViewAll={false}
      />);
    const contactTab = container.getByTestId("menu-glasses")
    fireEvent.click(contactTab)
    const viewPresGlassBtn = container.getByTestId("view-prescription-glasses")
    fireEvent.keyPress(viewPresGlassBtn, {
      key: 'Enter',
      keyCode: 13,
    })
    fireEvent.click(viewPresGlassBtn)
    const moreOptBtn = container.getByTestId("more-option-test")
    fireEvent.click(moreOptBtn)
    const menuDwnldBtn = container.getByTestId("menu-download-test")
    const menuPrintBtn = container.getByTestId("menu-print-test")
    fireEvent.click(menuDwnldBtn)
    fireEvent.click(menuPrintBtn)
  })

  it("renderCTAIcon Prescription menu medication", () => {
    cleanup()
    window.matchMedia = createMatchMedia("1920px");
    container = renderWithProviders(
      <Prescriptions
        prescriptionData={MOCK_PRESCRIPTION.prescriptions}
        isViewAll={true}
      />);
    const contactTab = container.getByTestId("menu-medication")
    fireEvent.click(contactTab)
    const printBtn = container.getAllByTestId("print-icon")[0]
    fireEvent.click(printBtn)
  })

  it("renderCTAIcon Prescription menu medication is not view all", () => {
    cleanup()
    window.matchMedia = createMatchMedia("1920px");
    container = renderWithProviders(
      <Prescriptions
        prescriptionData={MOCK_PRESCRIPTION.prescriptions}
      />);
    const contactTab = container.getByTestId("menu-medication")
    fireEvent.click(contactTab)
    const viewPresMed = container.getByTestId("view-prescription-medication")
    fireEvent.keyPress(viewPresMed, {
      key: 'Enter',
      keyCode: 13,
    })
    fireEvent.click(viewPresMed)
  })

  it("renderCTAIcon Prescription menu medication with no data", () => {
    cleanup()
    window.matchMedia = createMatchMedia("1920px");
    container = renderWithProviders(
      <Prescriptions
        prescriptionData={{
          glasses: [
            {
              prescribedBy: "Dr. Sonha Nguyen",
              date: "2022-09-02T11:18:47.229Z",
              expirationDate: "2022-10-02T11:18:47.229Z",
              prescriptionDetails: [
                {
                  Eye: "OD",
                  Sph: "+20.00",
                  Cyl: "-5.00",
                  Axis: "70",
                  Add: "x180",
                },
                {
                  Eye: "OS",
                  Sph: "+19.75",
                  Cyl: "-4.75",
                  Axis: "38",
                  Add: "x090",
                },
              ],
            },
          ],
          contacts: [
            {
              prescribedBy: "Dr. Sonha Nguyen",
              date: "2022-09-02T11:18:47.229Z",
              expirationDate: "2022-10-02T11:18:47.229Z",
              prescriptionDetails: [
                {
                  Eye: "OD",
                  Sph: "+20.00",
                  Bc: "-5.00",
                  Cyl: "70",
                  Axis: "x180",
                },
                {
                  Eye: "OS",
                  Sph: "+19.75",
                  Bc: "-4.75",
                  Cyl: "38",
                  Axis: "x090",
                },
              ],
            },
          ],
          medications: [],
        }}
      />);
    const contactTab = container.getByTestId("menu-medication")
    fireEvent.click(contactTab)
    const viewPresMed = container.getByText(/There are no active medications/i)
    expect(viewPresMed).toBeInTheDocument()
  })

  it("Render Prescription renderMedicationUI", () => {
    renderCTAIcon()
  });
});
