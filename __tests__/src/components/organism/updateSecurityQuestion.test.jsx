import { fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import UpdateSecurityQuestion from "../../../../src/components/organisms/UpdateSecurityQuestion/updateSecurityQuestion";
import { renderWithProviders } from "../../utils/test-util";
import { setFormMessage } from "../../../../src/store";

window.scrollTo = jest.fn();

describe("UpdateSecurity Components", () => {
  let container;

  beforeEach(async () => {
    const mockCallBack = jest.fn();
    container = renderWithProviders(
      <UpdateSecurityQuestion
        onCancelUpdateSecurityQuestion={mockCallBack}
        onUpdateSecurityQuestion={mockCallBack}
      />
    );
  });

  it("UpdateSecurity render", async () => {
    await waitFor(() => container.getByText("Security Questions"));
  })

  it("set value to all field and submit", async () => {
    const question1 = container.getByTestId("content-input-1")
    await fireEvent.change(question1, { target: { value: "What was the first book you read?" } });
    expect(question1.value).toEqual("What was the first book you read?");

    const answer1 = container.getByLabelText(/Answer 1/i);
    fireEvent.change(answer1, { target: { value: "test answer 1" } });
    expect(answer1.value).toEqual("test answer 1");

    const question2 = container.getByTestId("content-input-2")
    await fireEvent.change(question2, { target: { value: "What is your favorite cold-weather activity?" } });
    expect(question2.value).toEqual("What is your favorite cold-weather activity?");

    const answer2 = container.getByLabelText(/Answer 2/i);
    fireEvent.change(answer2, { target: { value: "test answer 2" } });
    expect(answer2.value).toEqual("test answer 2");

    const question3 = container.getByTestId("content-input-3")
    await fireEvent.change(question3, { target: { value: "What was the first concert you attended?" } });
    expect(question3.value).toEqual("What was the first concert you attended?");

    const answer3 = container.getByLabelText(/Answer 3/i);
    fireEvent.change(answer3, { target: { value: "test answer 3" } });
    expect(answer3.value).toEqual("test answer 3");

    const question4 = container.getByTestId("content-input-4")
    await fireEvent.change(question4, { target: { value: "What was the first film you saw in a theater?" } });
    expect(question4.value).toEqual("What was the first film you saw in a theater?");

    const answer4 = container.getByLabelText(/Answer 4/i);
    fireEvent.change(answer4, { target: { value: "test answer 4" } });
    expect(answer4.value).toEqual("test answer 4");

    const question5 = container.getByTestId("content-input-5")
    await fireEvent.change(question5, { target: { value: "What was your favorite cartoon character during your childhood?" } });
    expect(question5.value).toEqual("What was your favorite cartoon character during your childhood?");

    const answer5 = container.getByLabelText(/Answer 5/i);
    fireEvent.change(answer5, { target: { value: "test answer 5" } });
    expect(answer5.value).toEqual("test answer 5");

    const button = container.getByText("Update");
    fireEvent.click(button);
  });

  it("select option render", () => {
    const button = container.getByText("Update");
    fireEvent.click(button);

    setTimeout(() => {
      const postMessage = container.getByLabelText(
        "You must answer all security questions"
      );
      expect(postMessage).toBeTruthy();

      const answer5 = container.getByLabelText(/Answer 5/i);
      fireEvent.change(answer5, { target: { value: "test answer 6" } });
      expect(answer5.value).toEqual("test answer 6");
    }, 500);
  });

  it("close form message if opened", () => {
    setFormMessage({
      content: "Test"
    })
    expect(container.getByTestId("submission-message")).toBeInTheDocument()
    const closeBtn = container.getByTestId("close-form-msg-btn")
    fireEvent.click(closeBtn)
  })
})