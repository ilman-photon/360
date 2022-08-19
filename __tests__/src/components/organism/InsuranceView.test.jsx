import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import InsuranceView from "../../../../src/components/organisms/InsuranceInformation/InsuranceView";

describe("InsuranceView Components", () => {
  let container;
  beforeEach(() => {
    container = render(<InsuranceView 
    />);
  });

  it("InsuranceView render", () => {
    expect(container).toMatchSnapshot();
  });
});
