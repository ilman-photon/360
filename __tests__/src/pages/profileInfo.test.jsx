import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProfileInformationPage from "../../../src/pages/patient/account/profile-info";

import { Provider } from "react-redux";
import store from "../../../src/store/store";

describe("ProfileInformationPage Components", () => {
  let container;
  beforeEach(async() => {
    container = render(<Provider store={store}><ProfileInformationPage 
    /></Provider>);
    await waitFor(() => container.getByText("Profile"));
    await waitFor(() => container.getByText("Contact"));
    await waitFor(() => container.getByRole("button", { name: /Edit/i }));
  });

  it("ProfileInformationPage render", () => {
    expect(container).toMatchSnapshot();
  });


});
