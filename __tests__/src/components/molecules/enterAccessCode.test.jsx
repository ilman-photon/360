import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import EnterAccessCode from "../../../../src/components/molecules/ShareMyPage/EnterAccessCode";

window.scrollTo = jest.fn();

describe("EnterAccessCode Components", () => {
  let container;
  beforeEach(() => {
    container = render(<EnterAccessCode isActiveAccessCode={false} />);
  });

  it("EnterAccessCode render", async () => {
    const redirectTitle = container.getByText("shareMyPageTitle");
    expect(redirectTitle).toBeInTheDocument();
    const redirectMessage = container.getByText("infoEnterAccessCode");
    expect(redirectMessage).toBeInTheDocument();
    const accessCode = container.getByText("accessCode");
    expect(accessCode).toBeInTheDocument();
    const resendCodeBtn = container.getByText("resendCodeBtn");
    expect(resendCodeBtn).toBeInTheDocument();
  });

  it("EnterAccessCode disabled fields", async () => {
    container.rerender(<EnterAccessCode isActiveAccessCode={false} />);
    const resendCodeBtn = container.getByText("resendCodeBtn");
    expect(resendCodeBtn).toBeDisabled();
    const submitBtn = container.getByText("submitBtn");
    expect(submitBtn).toBeDisabled();
  });

  it("EnterAccessCode enabled fields", async () => {
    container.rerender(<EnterAccessCode isActiveAccessCode={true} />);
    const resendCodeBtn = container.getByText("resendCodeBtn");
    expect(resendCodeBtn).not.toBeDisabled();
    const submitBtn = container.getByText("submitBtn");
    expect(submitBtn).not.toBeDisabled();
  });
});
