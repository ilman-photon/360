import { render, waitFor } from "@testing-library/react";
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

  it("InsuranceInformationPage render", async () => {
    expect(container).toMatchSnapshot();
    await waitFor(() => container.getByText("You have no insurance on file"));
  });

});
