import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import TableWithSort from "../../../../src/components/molecules/TableWithSort/tableWithSort";
import { colors } from "../../../../src/styles/theme";
import { carePlan } from "../../../../__mocks__/mockResponse";
import PDFFileIcon from "../../../../src/assets/icons/PDFFileIcon";
import { IconButton } from "@mui/material";
import FileDownloadIcon from "../../../../src/assets/icons/FileDownload";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
describe("ProfilePhotoUploader Components", () => {
  let container;
  const mockCallBack = jest.fn();

  const tableConfiguration = {
    header: [
      {
        type: "text",
        id: "name",
        numeric: false,
        disablePadding: false,
        label: "Procedure",
      },
      {
        type: "text",
        id: "date",
        numeric: false,
        disablePadding: true,
        label: "Date",
        width: 136,
      },
      { type: "empty", width: 50 },
    ],
    cells: [
      { type: "text", primary: true, valueKey: "name", contentClass: "" },
      {
        type: "text",
        valueKey: "_created",
        cellProps: { align: "left", component: "th", padding: "none" },
        contentStyle: { padding: "12px 0", fontSize: "unset" },
        contentClass: "",
      },
      {
        type: "menus",
        valueKey: "digital_assets._id",
        cellProps: { padding: "none", sx: { textAlign: "center" } },
      },
    ],
  };

  const tableConfigurationNew = {
    header: [
      { type: "empty", width: 22 },
      {
        type: "text",
        id: "name",
        numeric: false,
        disablePadding: true,
        label: "Name",
        width: null,
        sx: {
          color: colors.darkGreen,
          fontSize: {
            xs: 14,
            md: 16,
          },
          ".MuiTableSortLabel-root": {
            "&.Mui-active": {
              color: colors.darkGreen,
            },
          },
        },
      },
      {
        type: "text",
        id: "_updated",
        numeric: false,
        disablePadding: true,
        label: "Modified",
        width: 136,
        sx: {
          color: colors.darkGreen,
          fontSize: {
            xs: 14,
            md: 16,
          },
        },
      },
      { type: "empty", width: 22 },
    ],
    cells: [
      {
        type: "icon",
        icon: <PDFFileIcon />,
      },
      {
        type: "text",
        primary: true,
        valueKey: "name",
        cellProps: { padding: "none" },
        contentClass: "",
      },
      {
        type: "text",
        valueKey: "_updated",
        cellProps: { align: "left", component: "th", padding: "none" },
        contentStyle: {
          padding: "12px 0",
          fontSize: "unset",
        },
        contentClass: "",
      },
      {
        type: "download-asset",
        valueKey: "digital_assets._id",
        contentStyle: { padding: "16px" },
        icon: (
          <IconButton
            sx={{ width: 24, height: 24, p: 0 }}
            data-testid="downloadPDFButton"
          >
            <FileDownloadIcon sx={{ fill: colors.darkGreen }} />
          </IconButton>
        ),
      },
      {
        type: "download-icon",
        valueKey: "digital_assets._id",
        contentStyle: { padding: "16px" },
        icon: (
          <IconButton
            sx={{ width: 24, height: 24, p: 0 }}
            data-testid="downloadPDFButton"
          >
            <FileDownloadIcon sx={{ fill: colors.darkGreen }} />
          </IconButton>
        ),
      },
      {
        type: "date",
        valueKey: "digital_assets._id",
        contentStyle: { padding: "16px" },
        icon: (
          <IconButton
            sx={{ width: 24, height: 24, p: 0 }}
            data-testid="downloadPDFButton"
          >
            <FileDownloadIcon sx={{ fill: colors.darkGreen }} />
          </IconButton>
        ),
      },
    ],
  };
  const rows = carePlan?.entities;
  beforeEach(() => {
    container = render(
      <TableWithSort
        config={tableConfiguration}
        rows={rows}
        onAssetDownload={jest.fn()}
        additionalProps={{
          tableProps: { "aria-label": `test-id` },
        }}
      />
    );
  });

  it("Table is render", () => {
    expect(
      container.getAllByText(/MEDICAL_CERTIFICATE_OF_FITNESS2/i)[0]
    ).toBeInTheDocument();
  });

  it("Sort table header", async () => {
    const buttonSort = container.getAllByTestId(/table-header-sort/i);
    await waitFor(() => fireEvent.click(buttonSort[0]));
    await waitFor(() => fireEvent.click(buttonSort[0]));
    expect(
      container.getAllByText(/MEDICAL_CERTIFICATE_OF_FITNESS2/i)[0]
    ).toBeInTheDocument();
  });

  it("onClick Select", async () => {
    const buttonSort = container.getAllByTestId(/table-sort-header/i);
    await waitFor(() => fireEvent.click(buttonSort[0]));
    await waitFor(() => fireEvent.click(buttonSort[0]));
    expect(
      container.getAllByText(/MEDICAL_CERTIFICATE_OF_FITNESS2/i)[0]
    ).toBeInTheDocument();
  });

  it("onClick Select Multiple", async () => {
    const buttonSort = container.getAllByTestId(/table-sort-header/i);
    await waitFor(() => fireEvent.click(buttonSort[0]));
    await waitFor(() => fireEvent.click(buttonSort[1]));
    await waitFor(() => fireEvent.click(buttonSort[2]));
    await waitFor(() => fireEvent.click(buttonSort[2]));
    expect(
      container.getAllByText(/MEDICAL_CERTIFICATE_OF_FITNESS2/i)[0]
    ).toBeInTheDocument();
  });

  it("onClick Select Multiple Else", async () => {
    const buttonSort = container.getAllByTestId(/table-sort-header/i);
    await waitFor(() => fireEvent.click(buttonSort[0]));
    await waitFor(() => fireEvent.click(buttonSort[1]));
    await waitFor(() => fireEvent.click(buttonSort[2]));
    await waitFor(() => fireEvent.click(buttonSort[1]));
    expect(
      container.getAllByText(/MEDICAL_CERTIFICATE_OF_FITNESS2/i)[0]
    ).toBeInTheDocument();
  });

  it("onClick Download", async () => {
    const moreButton = container.getAllByTestId(/more-vert-button/i);
    await waitFor(() => fireEvent.click(moreButton[0]));
    const downloadButton = container.getAllByText(/Download/i);
    await waitFor(() => fireEvent.click(downloadButton[0]));
    expect(
      container.getAllByText(/MEDICAL_CERTIFICATE_OF_FITNESS2/i)[0]
    ).toBeInTheDocument();
  });

  it("onClick Print", async () => {
    const moreButton = container.getAllByTestId(/more-vert-button/i);
    await waitFor(() => fireEvent.click(moreButton[0]));
    const printButton = container.getAllByText(/Print/i);
    await waitFor(() => fireEvent.click(printButton[0]));
    expect(
      container.getAllByText(/MEDICAL_CERTIFICATE_OF_FITNESS2/i)[0]
    ).toBeInTheDocument();
  });

  it("onClick Share", async () => {
    const moreButton = container.getAllByTestId(/more-vert-button/i);
    await waitFor(() => fireEvent.click(moreButton[0]));
    const shareButton = container.getAllByText(/Share/i);
    await waitFor(() => fireEvent.click(shareButton[0]));
    expect(
      container.getAllByText(/MEDICAL_CERTIFICATE_OF_FITNESS2/i)[0]
    ).toBeInTheDocument();
  });

  it("Empty Cell", async () => {
    container = render(<TableWithSort />);
  });

  it("Render Header With Icon", async () => {
    container = render(
      <TableWithSort config={tableConfigurationNew} rows={rows} />
    );
    expect(container.getAllByText(/Name/i)[0]).toBeInTheDocument();
  });
});
