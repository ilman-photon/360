import {
  render,
  fireEvent,
  waitFor,
  within,
  screen,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactInformation from "../../../../src/components/organisms/ContactInformation/contactInformation";
import mediaQuery from "css-mediaquery";
import { formatSocialSecurity } from "../../../../src/utils/ssnFormatter";

window.scrollTo = jest.fn();

function createMatchMedia(width) {
  return (query) => ({
    matches: mediaQuery.match(query, { width }),
    addListener: () => {},
    removeListener: () => {},
  });
}

describe("ContactInformation Components", () => {
  let container;
  const mockUserdata = {
    address: "100 River Road",
    age: 63,
    city: "Johar baru",
    dob: "2022-08-18T13:08:18.012Z",
    email: "Justus4@gmail.com",
    firstName: "Karlie",
    gender: "Transgender",
    issuedCardBack: "https://loremflickr.com/275/173",
    issuedCardFront: "https://loremflickr.com/275/173",
    lastName: "Ernser",
    mobile: "",
    name: "Rupert Jerde",
    preferredCommunication: "both",
    preferredName: "---",
    profilePhoto: {
      name: "my-photo.jpg",
      source: "https://loremflickr.com/640/480",
    },
    ssn: formatSocialSecurity("*****6119"),
    state: "FL",
    title: "Mrs.",
    zip: "24861",
  };
  const mockCallBack = jest.fn();
  beforeEach(async () => {
    container = render(
      <ContactInformation
        isEditing={false}
        userData={mockUserdata}
        OnEditClicked={mockCallBack}
        OnCancelEditClicked={mockCallBack}
        OnSaveClicked={mockCallBack}
      />
    );
  });

  it("PersonalInformation View render", () => {
    expect(container.getByText("Phone Number")).toBeInTheDocument();
    expect(container.getByText("Email Id")).toBeInTheDocument();
    expect(container.getByText("Address")).toBeInTheDocument();
    expect(container.getByText("City")).toBeInTheDocument();
    expect(container.getByText("State")).toBeInTheDocument();
    expect(container.getByText("Zip")).toBeInTheDocument();
    expect(
      container.getByText("Prefered Mode(s) of communication")
    ).toBeInTheDocument();

    expect(container.getByText("Justus4@gmail.com")).toBeInTheDocument();
    expect(container.getByText("100 River Road")).toBeInTheDocument();
    expect(container.getByText("FL")).toBeInTheDocument();
    expect(container.getByText("24861")).toBeInTheDocument();
  });

  it("is email isEmpty with preferred phone", async () => {
    container = render(
      <ContactInformation
        isEditing={true}
        userData={mockUserdata}
        OnEditClicked={mockCallBack}
        OnCancelEditClicked={mockCallBack}
        OnSaveClicked={mockCallBack}
      />
    );
    const email = container.getByTestId(/email-input-test/i);
    const preferredPhone = container.getByTestId(/phone-test/i);

    fireEvent.change(email, { target: { value: "" } });
    fireEvent.click(preferredPhone);
    await waitFor(() => fireEvent.click(container.getByTestId(/save-button/i)));
  });

  it("is email isEmpty with preferred email", async () => {
    container = render(
      <ContactInformation
        isEditing={true}
        userData={mockUserdata}
        OnEditClicked={mockCallBack}
        OnCancelEditClicked={mockCallBack}
        OnSaveClicked={mockCallBack}
      />
    );
    const email = container.getByTestId(/email-input-test/i);
    const preferredEmail = container.getByTestId(/email-test/i);

    fireEvent.change(email, { target: { value: "" } });
    fireEvent.click(preferredEmail);
    await waitFor(() => fireEvent.click(container.getByTestId(/save-button/i)));
  });

  it("is email isEmpty with email and mobile is fill", async () => {
    container = render(
      <ContactInformation
        isEditing={true}
        userData={mockUserdata}
        OnEditClicked={mockCallBack}
        OnCancelEditClicked={mockCallBack}
        OnSaveClicked={mockCallBack}
      />
    );
    const email = container.getByTestId(/email-input-test/i);
    const phone = container.getByTestId(/phone-input-test/i);
    const preferredBoth = container.getByTestId(/both-test/i);

    fireEvent.change(email, { target: { value: "" } });
    fireEvent.change(phone, { target: { value: "09090909090909" } });
    fireEvent.click(preferredBoth);

    await waitFor(() => fireEvent.click(container.getByTestId(/save-button/i)));
  });

  it("is email isEmpty with both selected", async () => {
    container = render(
      <ContactInformation
        isEditing={true}
        userData={mockUserdata}
        OnEditClicked={mockCallBack}
        OnCancelEditClicked={mockCallBack}
        OnSaveClicked={mockCallBack}
      />
    );
    const email = container.getByTestId(/email-input-test/i);
    const preferredBoth = container.getByTestId(/both-test/i);

    fireEvent.change(email, { target: { value: "" } });
    fireEvent.click(preferredBoth);

    await waitFor(() => fireEvent.click(container.getByTestId(/save-button/i)));
  });

  it("is email isEmpty with both selected", async () => {
    container = render(
      <ContactInformation
        isEditing={true}
        userData={mockUserdata}
        OnEditClicked={mockCallBack}
        OnCancelEditClicked={mockCallBack}
        OnSaveClicked={mockCallBack}
      />
    );
    const zip = container.getByTestId(/zip-input-test/i);
    fireEvent.change(zip, { target: { value: "12620" } });
    await waitFor(() => fireEvent.click(container.getByTestId(/save-button/i)));
  });

  it("is email isEmpty with both selected", async () => {
    container = render(
      <ContactInformation
        isEditing={true}
        userData={mockUserdata}
        OnEditClicked={mockCallBack}
        OnCancelEditClicked={mockCallBack}
        OnSaveClicked={mockCallBack}
      />
    );
    const cancelButton = container.getByTestId(/cancel-button/i);
    await waitFor(() => fireEvent.click(cancelButton));
  });

  it("is city incorrect value", async () => {
    container = render(
      <ContactInformation
        isEditing={true}
        userData={mockUserdata}
        OnEditClicked={mockCallBack}
        OnCancelEditClicked={mockCallBack}
        OnSaveClicked={mockCallBack}
      />
    );
    const cityInput = container.getByTestId(/city-input-test/i);
    fireEvent.change(cityInput, { target: { value: 12620 } });
    await waitFor(() => fireEvent.click(container.getByTestId(/save-button/i)));
  });

  it("is city empty value", async () => {
    container = render(
      <ContactInformation
        isEditing={true}
        userData={mockUserdata}
        OnEditClicked={mockCallBack}
        OnCancelEditClicked={mockCallBack}
        OnSaveClicked={mockCallBack}
      />
    );
    const cityInput = container.getByTestId(/city-input-test/i);
    fireEvent.change(cityInput, { target: { value: "" } });
    await waitFor(() => fireEvent.click(container.getByTestId(/save-button/i)));
  });

  it("is zip empty value", async () => {
    container = render(
      <ContactInformation
        isEditing={true}
        userData={mockUserdata}
        OnEditClicked={mockCallBack}
        OnCancelEditClicked={mockCallBack}
        OnSaveClicked={mockCallBack}
      />
    );
    const zipInput = container.getByTestId(/zip-input-test/i);
    fireEvent.keyDown(zipInput, { key: "Enter", code: "Enter", charCode: 13 });
    // await waitFor(() =>
    //   fireEvent.keyDown(container.getByTestId(/save-button/i))
    // );
  });

  it("onChange autocomplete", async () => {
    container = render(
      <ContactInformation
        isEditing={true}
        userData={mockUserdata}
        OnEditClicked={mockCallBack}
        OnCancelEditClicked={mockCallBack}
        OnSaveClicked={mockCallBack}
      />
    );
    const addressAutocomplete = container.getByTestId(
      /address-autocomplete-test/i
    );
    const input = within(addressAutocomplete).getByRole("combobox");
    addressAutocomplete.focus();

    fireEvent.change(input, { target: { value: "jakarta" } });
    fireEvent.keyDown(addressAutocomplete, { key: "ArrowDown" });
    fireEvent.keyDown(addressAutocomplete, { key: "Enter" });
  });

  it("render with is desktop", async () => {
    window.matchMedia = createMatchMedia("1920px");
    container = render(
      <ContactInformation
        isEditing={true}
        userData={mockUserdata}
        OnEditClicked={mockCallBack}
        OnCancelEditClicked={mockCallBack}
        OnSaveClicked={mockCallBack}
      />
    );
  });

  it("render with is empty user data", async () => {
    window.matchMedia = createMatchMedia("1920px");
    container = render(<ContactInformation isEditing={true} userData={{}} />);
  });

  it("render with mobile phone", async () => {
    window.matchMedia = createMatchMedia("1920px");
    container = render(
      <ContactInformation
        isEditing={true}
        userData={{
          mobile: "0999999999",
          preferredCommunication: "",
        }}
        OnEditClicked={mockCallBack}
        OnCancelEditClicked={mockCallBack}
        OnSaveClicked={mockCallBack}
      />
    );
  });
});
