import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Register from "../../../../src/components/organisms/Register/register";

describe("SecurityQuestion Components", () => {
  let container;
  beforeEach(() => {
    container = render(<Register />);
  });

  it("select option render", () => {
    const password = container.getByLabelText("Password");
    fireEvent.change(password, { target: { value: "user123@A" } });
    expect(password.value).toEqual("user123@A");

    fireEvent.change(password, { target: { value: "abcd5678" } });
    expect(password.value).toEqual("abcd5678");

    const register = container.getByRole("button", { name: /Register/i });
    fireEvent.click(register);
    setTimeout(() => {
      const passwordFieldError = container.getByLabelText(
        /Password does not meet requirements/i
      );
      expect(passwordFieldError).toBeTruthy();
    }, 500);
  });
});
