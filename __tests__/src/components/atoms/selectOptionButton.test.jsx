import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import SelectOptionButton from "../../../../src/components/atoms/SelectOptionButton/selectOptionButton";

describe("SelectOptioButton Components", () => {
  let container;
  beforeEach(() => {
    container = render(<SelectOptionButton option={[
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
      label={`Question`}
      labelId={`question-label`}
      id={`question-id`}
      />);
  });
  it("select option render", () => {
    expect(container).toMatchSnapshot();
  });

});
