import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import SetMultiFactorAuthentication from "../../../../src/components/organisms/MultiFactorAuthentication/setMultiFactorAuthentication";
import constants from "../../../../src/utils/constants";

describe("SetMultiFactorAuthentication Components", () => {
  const { MFA_TEST_ID } = constants.TEST_ID
  let container;

  it("SetMultiFactorAuthentication render only email", () => {
    const communicationMethod = {
      email: "user1@photon.com"
    }
    container = render(
      <SetMultiFactorAuthentication
        onConfirmClicked={jest.fn()}
        onBackToLoginClicked={jest.fn()}
        rememberMe={false}
        setRememberMe={jest.fn()}
        data={communicationMethod}
        testIds={MFA_TEST_ID}
      />);
    expect(container.getByText(`Email: ${communicationMethod.email}`)).toBeInTheDocument();
  });

  it("SetMultiFactorAuthentication render only phone", () => {
    cleanup()
    const communicationMethod = {
      phone: "9998887772"
    }
    container = render(
      <SetMultiFactorAuthentication
        onConfirmClicked={jest.fn()}
        onBackToLoginClicked={jest.fn()}
        rememberMe={false}
        setRememberMe={jest.fn()}
        data={communicationMethod}
        testIds={MFA_TEST_ID}
      />);
    expect(container.getByText(`Phone: ${communicationMethod.phone}`)).toBeInTheDocument();
  });
});
