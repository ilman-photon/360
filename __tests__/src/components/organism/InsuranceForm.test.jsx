import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import InsuranceForm from "../../../../src/components/organisms/InsuranceInformation/insuranceForm";

describe("SecurityQuestion Components", () => {
  let container;
  beforeEach(() => {
    container = render(<InsuranceForm />);
  });

  it("select option render", () => {
    expect(container).toMatchSnapshot();
  });
});
