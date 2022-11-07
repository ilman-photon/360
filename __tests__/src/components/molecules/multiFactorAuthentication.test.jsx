import { render, cleanup, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import SetMultiFactorAuthentication from "../../../../src/components/organisms/MultiFactorAuthentication/setMultiFactorAuthentication";
import constants from "../../../../src/utils/constants";
import MultiFactorAuthentication from "../../../../src/components/organisms/MultiFactorAuthentication/multiFactorAuthentication";

describe("MultiFactorAuthentication Components", () => {
  const { MFA_TEST_ID } = constants.TEST_ID
  let container;

  it("MultiFactorAuthentication", () => {
    container = render(
      <MultiFactorAuthentication onBackToLoginClicked={jest.fn()} testIds={MFA_TEST_ID}></MultiFactorAuthentication>)
    expect(container.getByText(`mfaLabel`)).toBeInTheDocument();
    expect(container.getByText(`backToLoginBtn`)).toBeInTheDocument();
    const backBtn = container.getByText(`backToLoginBtn`)
    const mfaInput = container.getByText(`mfaLabel`)
    fireEvent.keyDown(mfaInput, { key: "Backspace" });
    fireEvent.keyDown(mfaInput, { key: "ArrowDown" });
    fireEvent.click(backBtn);
  });
});
