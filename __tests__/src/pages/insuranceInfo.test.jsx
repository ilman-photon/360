import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import InsuranceInformationPage from "../../../src/pages/patient/account/insurance-info";

import { Provider } from "react-redux";
import store from "../../../src/store/store";

describe("InsuranceInformationPage Components", () => {
  let container;
  beforeEach(() => {
    container = render(<Provider store={store}><InsuranceInformationPage 
    /></Provider>);
  });

  it("InsuranceInformationPage render", () => {
    expect(container).toMatchSnapshot();
  });

});
