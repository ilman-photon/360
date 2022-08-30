import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import SecurityQuestion from "../../../../src/components/organisms/SecurityQuestion/securityQuestion";
import constants from "../../../../src/utils/constants";

window.scrollTo = jest.fn();

describe("SecurityQuestion Components", () => {
  let container;
  beforeEach(() => {
    container = render(
      <SecurityQuestion
        securityQuestionList={[
          "What was the first concert you attended?",
          "In what city or town did your parents meet?",
          "What was the make and model of your first car?",
          "Who is your all-time favorite movie character?",
          "What was your favorite cartoon character during your childhood?",
          "What was the first book you read?",
          "What was the first thing you learned to cook?",
          "What was the first film you saw in a theater?",
          "Where did you go the first time you flew on a plane?",
          "What is your favorite cold-weather activity?",
        ]}
        securityQuestionCount={5}
        testIds={constants.TEST_ID.MFA_TEST_ID}
      />
    );
  });

  it("select option render", () => {
    expect(container).toMatchSnapshot();
  });

  it("set value to all field", () => {
    const answer1 = container.getByLabelText("Answer 1");
    fireEvent.change(answer1, { target: { value: "test answer 1" } });
    expect(answer1.value).toEqual("test answer 1");

    const answer2 = container.getByLabelText("Answer 2");
    fireEvent.change(answer2, { target: { value: "test answer 2" } });
    expect(answer2.value).toEqual("test answer 2");

    const answer3 = container.getByLabelText("Answer 3");
    fireEvent.change(answer3, { target: { value: "test answer 3" } });
    expect(answer3.value).toEqual("test answer 3");

    const answer4 = container.getByLabelText("Answer 4");
    fireEvent.change(answer4, { target: { value: "test answer 4" } });
    expect(answer4.value).toEqual("test answer 4");

    const answer5 = container.getByLabelText("Answer 5");
    fireEvent.change(answer5, { target: { value: "test answer 5" } });
    expect(answer5.value).toEqual("test answer 5");
  });

  it("select option render", () => {
    const button = container.getByText("Submit");
    fireEvent.click(button);

    setTimeout(() => {
      const postMessage = container.getByLabelText(
        "You must answer all security questions"
      );
      expect(postMessage).toBeTruthy();

      const answer5 = container.getByLabelText("Answer 5");
      fireEvent.change(answer5, { target: { value: "test answer 6" } });
      expect(answer5.value).toEqual("test answer 6");
    }, 500);
  });
});
