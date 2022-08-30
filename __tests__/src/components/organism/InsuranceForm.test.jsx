import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import InsuranceForm from "../../../../src/components/organisms/InsuranceInformation/insuranceForm";

describe("InsuranceForm Components", () => {
  let container;
  beforeEach(() => {
    container = render(<InsuranceForm />);
  });

  it("InsuranceForm render", () => {
    expect(container).toMatchSnapshot();
  });
});
