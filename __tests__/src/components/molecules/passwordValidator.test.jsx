import { render, screen } from "@testing-library/react";

import PasswordValidator from "../../../../src/components/molecules/PasswordValidator/passwordValidator";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("StyledInput", () => {
  it("renders input components with type text", async () => {
    const passwordValidator = [
      { label: "Contain at least 3 our of 4 types", text: true },
    ];
    const { container } = render(
      <PasswordValidator
        isShowValidation={true}
        validator={passwordValidator}
        password="password"
        validatePassword={jest.fn()}
      />
    );
    // expect(
    //   await screen.getByRole("heading", {
    //     name: "Contain at least 3 our of 4 types",
    //   })
    // ).toBeVisible();
    expect(container).toMatchSnapshot();
  });

  it("renders input components with type text", async () => {
    const passwordValidator = [
      {
        label: "Password length should range from 8 to 20 characters",
        validate: !RegExp(/^[^-\s]{8,20}$/),
      },
    ];
    const { container } = render(
      <PasswordValidator
        isShowValidation={true}
        validator={passwordValidator}
        password="password"
        validatePassword={jest.fn()}
      />
    );
    expect(container.textContent).toBe(
      "Password length should range from 8 to 20 characters"
    );
  });

  it("renders input components with type text", async () => {
    const passwordValidator = [
      {
        label: "Password should contain at least one numerical character (0-9)",
        validate: new RegExp("[0-9]"),
      },
    ];
    const { container } = render(
      <PasswordValidator
        isShowValidation={true}
        validator={passwordValidator}
        password="password"
        validatePassword={jest.fn()}
      />
    );
    // const input = container.getElementsByClassName("custom-input");
    // expect(input).toBeTruthy();
    expect(container.textContent).toBe(
      "Password should contain at least one numerical character (0-9)"
    );
    // expect(await screen.getByRole('span', { name: 'Contain at least 3 our of 4 types'})).toBeVisible()
    // expect(await screen.findByText('Contain at least 3 our of 4 types')).toBeVisible();
    // const button = screen.getByText("Password should contain at least one numerical character (0-9)").closest();
    // debug(button);
    // const node = screen.getByText("Reset");
    // expect(button.closest("button")).toHaveProperty("error", "true");
    // expect(container.firstChild).toMatchSnapshot()
    // expect(container).toMatchSnapshot();
  });
});
