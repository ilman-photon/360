import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import InsuranceView from "../../../../src/components/organisms/InsuranceInformation/InsuranceView";

describe("SecurityQuestion Components", () => {
  let container;
  beforeEach(() => {
    container = render(<InsuranceView 
    />);
  });

  it("select option render", () => {
    expect(container).toMatchSnapshot();
  });
});
