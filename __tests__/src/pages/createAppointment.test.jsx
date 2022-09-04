import { useMediaQuery } from "@mui/material";
import "@testing-library/jest-dom";
import { cleanup, render, waitFor } from "@testing-library/react";
import CreateAppointmentPage from "../../../src/pages/patient/appointments/create";
import constants from "../../../src/utils/constants";

describe("Render Create Appointment", () => {
  let container;
  const TEST_ID = constants.TEST_ID.APPOINTMENT_TEST_ID;
  beforeEach(() => {
    container = render(<CreateAppointmentPage />);
  });

  test("is Create Appointment page render", async () => {
    await waitFor(() => {
      container.getByTestId("LocationOnOutlinedIcon");
    });
    expect(container.getByTestId("LocationOnOutlinedIcon")).toBeInTheDocument();
  });
});
