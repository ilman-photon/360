import { act, fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProfileInformationPage from "../../../src/pages/patient/account/profile-info";
import { Provider } from "react-redux";
import store from "../../../src/store/store";

describe("ProfileInformationPage Components", () => {
  let container;
  afterEach(() => {
    fetch.mockClear();
  });
  beforeEach(async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            firstName: "",
            lastName: "laste",
            name: "Eyecare User",
            preferredName: "---",
            profilePhoto: "",
            issuedCardFront: "/transparent.png",
            issuedCardBack: "/transparent.png",
            dob: new Date(1991, 20, 3),
            title: "Mr",
            ssn: 1234567,
            email: "",
            mobile: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            preferredCommunication: "both",
            age: "49",
            gender: "Male",
            relationship: "",
            insurancePriority: "",
            planName: "",
            subscriberMember: "",
            groupId: "",
            isSubscriber: "",
          }),
      })
    );
    container = render(
      <Provider store={store}>
        {ProfileInformationPage.getLayout(<ProfileInformationPage />)}
      </Provider>
    );
    await waitFor(() => container.getByText("Profile"));
    await waitFor(() => container.getByText("Contact"));
    await waitFor(() => container.getByRole("button", { name: /Edit/i }));
  });

  it("InsuranceInformationPage upload back foto", async () => {
    global.URL.createObjectURL = jest.fn(() => "/details.png");
    const file = new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" });
    const button = container.getAllByTestId("loc_edit")[0];
    act(() => {
      fireEvent.click(button);
    });
    fireEvent.change(container.getAllByTestId("loc_uploadProfileImage")[0], {
      target: { files: [file] },
    });
  });
});
