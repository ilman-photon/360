import { render, fireEvent, within, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import AutoAwesomeMosaicOutlinedIcon from "@mui/icons-material/AutoAwesomeMosaicOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import MobileMenu from "../../../../src/components/molecules/MobileMenu/mobileMenu";
import { colors } from "../../../../src/styles/theme";
import CarePlanIcon from "../../../../src/assets/icons/CarePlanIcon";
import PrescriptionIcon from "../../../../src/assets/icons/PrescriptionIcon";
import TestLabIcon from "../../../../src/assets/icons/TestLabIcon";
import IntakeFormsIcon from "../../../../src/assets/icons/IntakeFormsIcon";

describe("MobileMenu Components", () => {
  let container;
  it("MobileMenu", async () => {
    const dataMenu = [
      {
        label: "Dashboard",
        href: "/patient",
        icon: <AutoAwesomeMosaicOutlinedIcon sx={{ fill: colors.darkGreen }} />,
      },
      {
        label: "Appointments",
        href: "/patient/appointments",
        icon: <CalendarTodayOutlinedIcon sx={{ fill: colors.darkGreen }} />,
      },
      {
        label: "Health Chart",
        submenu: [
          {
            label: "Care Plan",
            href: "/patient/account/medical-record?type=care-plan-overview",
            icon: <CarePlanIcon sx={{ fill: colors.darkGreen }} />,
          },
          {
            label: "Prescriptions",
            href: "/patient/account/medical-record?type=test-lab-result",
            icon: <PrescriptionIcon sx={{ fill: colors.darkGreen }} />,
          },
          {
            label: "Test & Lab Results",
            href: "/patient/account/medical-record?type=test-lab-result",
            icon: <TestLabIcon sx={{ fill: colors.darkGreen }} />,
          },
        ],
        icon: <CreateNewFolderOutlinedIcon sx={{ fill: colors.darkGreen }} />,
      },
      {
        label: "My Care Team",
        href: "/patient/my-care-team",
        icon: <AutoAwesomeMosaicOutlinedIcon sx={{ fill: colors.darkGreen }} />,
      },
      {
        label: "Pay My Bill",
        href: "/patient",
        icon: <PaymentOutlinedIcon sx={{ fill: colors.darkGreen }} />,
      },
      {
        label: "Messaging",
        href: "/patient/messaging",
        icon: <MessageOutlinedIcon sx={{ fill: colors.darkGreen }} />,
      },
      {
        label: "Documents",
        submenu: [
          {
            label: "Intake Forms",
            href: "/patient/account/documents?type=intake-forms",
            icon: <IntakeFormsIcon sx={{ fill: colors.darkGreen }} />,
          },
        ],
        icon: <DescriptionOutlinedIcon sx={{ fill: colors.darkGreen }} />,
      },
    ]
    container = render(
      <MobileMenu open={true} />)
    expect(await container.getByText('Dashboard')).toBeInTheDocument();
    fireEvent.click(container.getByText('Dashboard'))
    expect(await container.getByText('Intake Forms')).toBeInTheDocument();
    fireEvent.click(container.getByText('Intake Forms'))
  });
});
