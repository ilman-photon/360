import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import PersonalInformation from "../../../../src/components/organisms/PersonalInformation/personalInformation";
import constants from "../../../../src/utils/constants";
import { formatSocialSecurity } from "../../../../src/utils/ssnFormatter";

window.scrollTo = jest.fn();

describe("PersonalInformation Components", () => {
  let container;
  const mockUserdata = {
    address: "645 Benedict Cliff",
    age: 63,
    city: "Daphneeshire",
    dob: "2022-08-18T13:08:18.012Z",
    email: "Justus4@gmail.com",
    firstName: "Karlie",
    gender: "Transgender",
    issuedCardBack: "https://loremflickr.com/275/173",
    issuedCardFront: "https://loremflickr.com/275/173",
    lastName: "Ernser",
    mobile: "(706) 509-6731",
    name: "Rupert Jerde",
    preferredCommunication: "email",
    preferredName: "---",
    profilePhoto: {
      name: "my-photo.jpg",
      source: "https://loremflickr.com/640/480",
    },
    ssn: formatSocialSecurity("*****6119"),
    state: "South Dakota",
    title: "Mrs.",
    zip: "03245",
  };

  beforeEach(async () => {
    const mockCallBack = jest.fn();
    container = render(
      <PersonalInformation
        testIds={constants.TEST_ID.PERSONAL_INFO_TEST_ID}
        isEditing={false}
        userData={mockUserdata}
        OnEditClicked={mockCallBack}
        OnCancelEditClicked={mockCallBack}
        OnSaveClicked={mockCallBack}
      />
    );

    await waitFor(() => container.getByText("Preferred Name"));
  });

  it("PersonalInformation View render", () => {
    expect(container.getByText("Name")).toBeInTheDocument();
    expect(container.getByText("Preferred Name")).toBeInTheDocument();
    expect(container.getByText("Title")).toBeInTheDocument();
    expect(container.getByText("Date of Birth")).toBeInTheDocument();
    expect(container.getByText("Age")).toBeInTheDocument();
    expect(container.getByText("Gender")).toBeInTheDocument();
    expect(container.getByText("SSN")).toBeInTheDocument();

    expect(container.getByText("Rupert Jerde")).toBeInTheDocument();
    expect(container.getByText("Mrs.")).toBeInTheDocument();
    expect(container.getByText("8/18/2022")).toBeInTheDocument();
    expect(container.getByText(63)).toBeInTheDocument();
    expect(container.getByText("Transgender")).toBeInTheDocument();
    expect(container.getByText("***-***-6119")).toBeInTheDocument();
    expect(
      container.getByText(
        "Please upload a photo of government-issued ID, such as Driver’s License or State-issued ID."
      )
    ).toBeInTheDocument();
  });

  test("is edit button clicked", async () => {
    // const mockCallBack = jest.fn();
    // container.rerender(
    //   <PersonalInformation
    //     isEditing={true}
    //     testIds={constants.TEST_ID.PERSONAL_INFO_TEST_ID}
    //     userData={mockUserdata}
    //     OnEditClicked={mockCallBack}
    //     OnCancelEditClicked={mockCallBack}
    //     OnSaveClicked={mockCallBack}
    //   />
    // );
    //     const field1 = container.getByLabelText("Name")
    //     expect(field1).toBeDisabled();
    // const field2 = container.getByLabelText("Preferred Name")
    // expect(field2.value).toEqual("---");
    // fireEvent.change(field2, { target: { value: "test field 2" } });
    // expect(field2.value).toEqual("test field 2");
    // expect(container.getByText("Month, date, year")).toBeInTheDocument();
    // await waitFor(() => container.getByText("Date of Birth"));
    // await waitFor(() => container.getByText("Title"));
    //   expect(container.getByText("Month, date, year")).toBeInTheDocument();
    //   await waitFor(() => container.getByText("Date of Birth"));
    //   await waitFor(() => container.getByText("Title"));
    // const field3 = container.getByTestId("styled-select-title")
    // expect(field3).toBeTruthy();
    // const field4 = container.getByLabelText("Age")
    // expect(field4.value).toEqual("63");
    // expect(field4).toBeDisabled();
    // const field5 = container.getByTestId("styled-select-gender")
    // expect(field5).toBeTruthy();
    // const field6 = container.getByLabelText("SSN")
    // expect(field6.value).toEqual("3777306119");
    // expect(field1).toBeDisabled();
    // expect(container.getAllByRole("button", { name: "Change photo" })[0]).toBeVisible();
    // fireEvent.click(container.getAllByRole("button", { name: "Change photo" })[0])
  });

  // test("is cancel button clicked", async () => {
  //   container.rerender(<PersonalInformation isEditing={true} userData={mockUserdata} />);

  //   const field = container.getByLabelText("Age")
  //   expect(field.value).toEqual("63");
  //   fireEvent.change(field, { target: { value: 45 } });
  //   expect(field.value).toEqual("45");
  //   const cancelButton = container.getByRole("button", { name: "Cancel" });
  //   fireEvent.click(cancelButton);
  //   expect(field.value).toEqual("63");
  // });

  // test("is save button clicked", () => {
  //   container.rerender(<PersonalInformation isEditing={true} userData={mockUserdata} />);
  //   const field = container.getByLabelText("Age")
  //   expect(field.value).toEqual("63");
  //   fireEvent.change(field, { target: { value: 45 } });
  //   expect(field.value).toEqual("45");

  //   const saveButton = container.getByRole("button", { name: "Save" });
  //   fireEvent.click(saveButton);

  //   expect(field.value).toEqual("45");
  // });
});
