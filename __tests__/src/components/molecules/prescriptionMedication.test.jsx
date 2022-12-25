import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import PrescriptionMedication from "../../../../src/components/molecules/Dashboard/prescriptionMedication";
import mediaQuery from "css-mediaquery";
import { renderWithProviders } from "../../utils/test-util";

describe("Prescription Medication test", () => {
  let container;
  const mockData = {
    active: [
      {
        id: "323498f1-dff7-47b6-b3af-2dcc432f65ce",
        prescription: "D-Penamine 125 mg tablet",
        date: "10/05/2022",
        prescribedBy: "Provider ClarksonEyeCare",
        isShowRequestRefill: true,
        expirationDate: "10/05/2023",
        fillRequestDate: "-",
        timeRemaining: "Take twice a day",
        dose: "3 tablet",
        status: "",
        statusDetails: "CVS Pharmacy, 123 Broadway Blvd, New Jersey, NY 12889",
        type: "active",
        providerNPI: "1741791705",
      },
    ],
    past: [
      {
        id: "323498f1-dff7-47b6-b3af-2dcc432f65ce",
        prescription: "D-Penamine 200 mg tablet",
        date: "10/05/2022",
        prescribedBy: "Provider ClarksonEyeCare",
        isShowRequestRefill: "-",
        expirationDate: "-",
        fillRequestDate: "-",
        timeRemaining: "Take twice a day",
        dose: "3 tablet",
        status: "",
        statusDetails: "CVS Pharmacy, 123 Broadway Blvd, New Jersey, NY 12889",
        type: "past",
        providerNPI: "1741791705",
      },
      {
        id: "323498f1-dff7-47b6-b3af-2dcc432f65ce",
        prescription: "D-Penamine 200 mg tablet",
        date: "10/05/2022",
        prescribedBy: "Provider ClarksonEyeCare",
        isShowRequestRefill: "-",
        expirationDate: "-",
        fillRequestDate: "-",
        timeRemaining: "Take twice a day",
        dose: "3 tablet",
        status: "refill request",
        statusDetails: "CVS Pharmacy, 123 Broadway Blvd, New Jersey, NY 12889",
        type: "past",
        providerNPI: "1741791705",
      },
      {
        id: "323498f1-dff7-47b6-b3af-1111111",
        prescription: "D-Penamine 450 mg tablet",
        date: "10/05/2022",
        prescribedBy: "Provider ClarksonEyeCare EYESS",
        isShowRequestRefill: "-",
        expirationDate: "-",
        fillRequestDate: "-",
        timeRemaining: "Take twice a day",
        dose: "3 tablet",
        status: "completed",
        statusDetails: "CVS Pharmacy, 123 Broadway Blvd, New Jersey, NY 12889",
        type: "past",
        providerNPI: "1741791705",
      },
    ],
  };

  const mockFilterProvider = [
    {
      name: "Filter By",
      checklist: [
        { name: "All", checked: false, type: "general" },
        { name: "Refill Requested", checked: false, type: "general" },
        { name: "Active", checked: false, type: "general" },
      ],
    },
    {
      name: "Providers",
      checklist: [
        { name: "Provider ClarksonEyeCare", checked: false, type: "provider" },
        { name: "Provider ClarksonEyeCare", checked: false, type: "provider" },
      ],
    },
  ];

  function createMatchMedia(width) {
    return (query) => ({
      matches: mediaQuery.match(query, { width }),
      addListener: () => {},
      removeListener: () => {},
    });
  }

  const renderWithData = (data) =>
    renderWithProviders(
      <PrescriptionMedication
        medications={data}
        filterProvider={mockFilterProvider}
        onMedicationRequestRefill={jest.fn()}
        requestRefillResponseData={null}
      />
    );

  beforeEach(() => {
    window.matchMedia = createMatchMedia("1920px");
    const spyWindowOpen = jest.spyOn(window, "open");
    spyWindowOpen.mockImplementation(jest.fn()).mockReturnValue({
      focus: jest.fn(),
      print: jest.fn(),
      document: {
        write: jest.fn(),
        head: {
          appendChild: jest.fn(),
        },
        close: jest.fn(),
      },
    });

    container = renderWithData(mockData);
  });

  it("Render Prescription Without data", () => {
    container = renderWithProviders(<PrescriptionMedication />);
  });

  it("Render Prescription", () => {
    expect(
      container.getAllByText(/D-Penamine 125 mg tablet/i)[0]
    ).toBeInTheDocument();
  });

  it("Render Prescription Mobile", () => {
    window.matchMedia = createMatchMedia("700");
    container = renderWithData(mockData);
    expect(
      container.getAllByText(/D-Penamine 125 mg tablet/i)[0]
    ).toBeInTheDocument();
  });

  it("Download Pdf file mobile", async () => {
    window.matchMedia = createMatchMedia("700");
    container = renderWithData(mockData);
    const moreOptionButton = container.getAllByTestId(/more-option-test/i);
    await waitFor(() => fireEvent.click(moreOptionButton[0]));
    const buttonContainer = container.getByTestId(/menu-list-test/i);
    expect(buttonContainer).toBeInTheDocument();
    const buttonDownload = container.getByTestId(/menu-download-test/i);
    await waitFor(() => fireEvent.click(buttonDownload));
    const buttonPrint = container.getByTestId(/menu-print-test/i);
    await waitFor(() => fireEvent.click(buttonPrint));
  });

  it("Download Pdf file desktop", async () => {
    const buttonDownload = container.getAllByTestId(/download-icon/i);
    await waitFor(() => fireEvent.click(buttonDownload[0]));
    await waitFor(() => fireEvent.click(buttonDownload[1]));
  });

  it("Print Pdf file desktop active", async () => {
    const buttonPrint = container.getAllByTestId(/print-icon/i);
    await waitFor(() => fireEvent.click(buttonPrint[0]));
  });

  it("Print Pdf file desktop past", async () => {
    const pastData = container.getByTestId(/medication-past-container-0/i);
    const buttonPrint = within(pastData).getAllByRole(/button/i);
    await waitFor(() => fireEvent.click(buttonPrint[2]));
  });

  it("Filter data desktop", async () => {
    const filterButton = container.getByTestId(/medication-filter-button/i);
    await waitFor(() => fireEvent.click(filterButton));
    expect(container.getByText(/Filter By/i)).toBeInTheDocument();
    const checkboxAll = container
      .getByTestId(/All-test/i)
      .querySelector('input[type="checkbox"]');
    const checkboxRefill = container
      .getByTestId(/Refill Requested-test/i)
      .querySelector('input[type="checkbox"]');
    const checkboxActive = container
      .getByTestId(/Active-test/i)
      .querySelector('input[type="checkbox"]');
    const checkboxProvider = container
      .getAllByTestId(/Provider ClarksonEyeCare-test/i)[0]
      .querySelector('input[type="checkbox"]');
    await waitFor(() => fireEvent.click(checkboxAll));
    await waitFor(() => fireEvent.click(checkboxRefill));
    await waitFor(() => fireEvent.click(checkboxActive));
    await waitFor(() => fireEvent.click(checkboxProvider));

    expect(checkboxAll).toHaveProperty("checked", true);
    const doneButton = container.getByText(/done/i);
    await waitFor(() => fireEvent.click(doneButton));
    expect(container.getAllByTestId(/CloseIcon/i)[0]).toBeInTheDocument();
    await waitFor(() =>
      fireEvent.click(container.getAllByTestId(/CloseIcon/i)[0])
    );
  });

  it("Filter data mobile", async () => {
    window.matchMedia = createMatchMedia("700");
    container = renderWithData(mockData);
    const filterButton = container.getByTestId(/medication-filter-button/i);
    await waitFor(() => fireEvent.click(filterButton));
    expect(container.getByText(/Filter By/i)).toBeInTheDocument();
    const checkboxAll = container
      .getByTestId(/All-test/i)
      .querySelector('input[type="checkbox"]');
    const checkboxRefill = container
      .getByTestId(/Refill Requested-test/i)
      .querySelector('input[type="checkbox"]');
    const checkboxActive = container
      .getByTestId(/Active-test/i)
      .querySelector('input[type="checkbox"]');
    const checkboxProvider = container
      .getAllByTestId(/Provider ClarksonEyeCare-test/i)[0]
      .querySelector('input[type="checkbox"]');
    await waitFor(() => fireEvent.click(checkboxAll));
    await waitFor(() => fireEvent.click(checkboxRefill));
    await waitFor(() => fireEvent.click(checkboxActive));
    await waitFor(() => fireEvent.click(checkboxProvider));

    expect(checkboxAll).toHaveProperty("checked", true);
    const doneButton = container.getByText(/done/i);
    await waitFor(() => fireEvent.click(doneButton));
    expect(container.getAllByTestId(/CloseIcon/i)[0]).toBeInTheDocument();
    await waitFor(() =>
      fireEvent.click(container.getAllByTestId(/CloseIcon/i)[0])
    );
  });

  it("Filter data without select", async () => {
    const filterButton = container.getByTestId(/medication-filter-button/i);
    await waitFor(() => fireEvent.click(filterButton));
    expect(container.getByText(/Filter By/i)).toBeInTheDocument();
    const doneButton = container.getByText(/done/i);
    await waitFor(() => fireEvent.click(doneButton));
  });

  it("Request Refill", async () => {
    const requestRefillButton = container.getAllByTestId(
      /request-refill-button/i
    );
    await waitFor(() => fireEvent.click(requestRefillButton[0]));
  });

  it("Click Cancel Refill Dialog", async () => {
    const requestRefillButton =
      container.getAllByTestId(/cancel-refill-button/i);
    await waitFor(() => fireEvent.click(requestRefillButton[0]));
    expect(
      container.getByText(/Are you sure you want to cancel?/i)
    ).toBeInTheDocument();
    await waitFor(() =>
      fireEvent.click(container.getByTestId(/cancel-refill-btn/i))
    );
  });

  it("Click Close Refill Dialog", async () => {
    const requestRefillButton =
      container.getAllByTestId(/cancel-refill-button/i);
    await waitFor(() => fireEvent.click(requestRefillButton[0]));
    expect(
      container.getByText(/Are you sure you want to cancel?/i)
    ).toBeInTheDocument();
    await waitFor(() =>
      fireEvent.click(container.getByTestId(/close-refill-btn/i))
    );
  });
});
