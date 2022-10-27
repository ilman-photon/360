import { render, fireEvent, within, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import AppointmentCard from "../../../../src/components/molecules/Dashboard/appointmentCard";
import MenuList from "../../../../src/components/molecules/Dashboard/menuList";

describe("container Components", () => {
  let container;
  it("container render and click download", async () => {
    container = render(
      <MenuList
        onClickDownloadButton={() => {
          jest.fn()
        }}
        onClickPrintButton={() => {
          jest.fn()
        }}
      />)
    expect(await container.getByTestId('MoreHorizIcon')).toBeInTheDocument();
    fireEvent.click(container.getByTestId('MoreHorizIcon'))
    expect(await container.getByText('Download')).toBeInTheDocument();
    fireEvent.click(container.getByText('Download'))
  });

  it("container render and click Share", async () => {
    cleanup()
    container = render(
      <MenuList
        onClickDownloadButton={() => {
          jest.fn()
        }}
        onClickPrintButton={() => {
          jest.fn()
        }}
      />)
    expect(await container.getByTestId('MoreHorizIcon')).toBeInTheDocument();
    fireEvent.click(container.getByTestId('MoreHorizIcon'))
    expect(await container.getByText('Share')).toBeInTheDocument();
    fireEvent.click(container.getByText('Share'))
  });

  it("container render and click Print", async () => {
    cleanup()
    container = render(
      <MenuList
        onClickDownloadButton={() => {
          jest.fn()
        }}
        onClickPrintButton={() => {
          jest.fn()
        }}
      />)
    expect(await container.getByTestId('MoreHorizIcon')).toBeInTheDocument();
    fireEvent.click(container.getByTestId('MoreHorizIcon'))
    expect(await container.getByText('Print')).toBeInTheDocument();
    fireEvent.click(container.getByText('Print'))
  });
});
