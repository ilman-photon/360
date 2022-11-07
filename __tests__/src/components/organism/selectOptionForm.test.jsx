import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import SelectOptionForm from "../../../../src/components/organisms/SelectOptionForm/selectOptionForm";

describe("SelectOptionForm", () => {
  let container;
  beforeEach(() => {
    container = render(<SelectOptionForm onBackToLoginClicked={jest.fn()} onContinueButtonClicked={jest.fn()} />);
  });

  it("test SelectOptionForm click answerquestions", async () => {
    expect(container.getByTestId("answerquestions")).toBeInTheDocument();
    const answerquestionsBtn = container.getByTestId("answerquestions");
    fireEvent.click(answerquestionsBtn);
  });

  it("test SelectOptionForm click onetimelink", async () => {
    expect(container.getByTestId("onetimelink")).toBeInTheDocument();
    const onetimelinkBtn = container.getByTestId("onetimelink");
    fireEvent.click(onetimelinkBtn);
  });

  it("test SelectOptionForm click backtologin", async () => {
    expect(container.getByTestId("backtologin")).toBeInTheDocument();
    const backtologinBtn = container.getByTestId("backtologin");
    fireEvent.keyPress(backtologinBtn, { key: "Enter" });
    fireEvent.click(backtologinBtn);
  });
});
