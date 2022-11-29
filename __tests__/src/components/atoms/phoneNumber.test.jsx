import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import PhoneNumber from "../../../../src/components/atoms/PhoneNumber/phoneNumber";
import { useMediaQuery } from "@mui/material";
import { createMatchMedia } from "../../../../__mocks__/commonSteps";

describe("phoneNumber", () => {
  it("renders phone number on mobile device", () => {
    window.matchMedia = createMatchMedia("768px");
    const container = render(<PhoneNumber phone={"012345"} />);
    const phone = container.getByRole("link");
    fireEvent.click(phone);
    expect(phone).toBeInTheDocument();
  });
});
