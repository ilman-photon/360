import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import InsuranceInformationNew from "../../../../src/components/organisms/InsuranceInformation/insuranceInformationnew";

window.scrollTo = jest.fn();

describe("InsuranceDocument Components", () => {
  let container;
  beforeEach(() => {
    container = render(<InsuranceInformationNew />);
  });

  it("InsuranceDocument render", () => {
    expect(container).toMatchSnapshot();
  });

  it("Set value to all field", () => {
    setTimeout(() => {
      const insuranceProvider = container.getByLabelText("Insurance Provider");
      fireEvent.change(insuranceProvider, {
        target: { value: "Insurance value" },
      });
      expect(insuranceProvider.value).toEqual("Insurance value");

      const planName = container.getByLabelText("Plan Name");
      fireEvent.change(planName, { target: { value: "Plan Name value" } });
      expect(planName.value).toEqual("Plan Name value");

      const subscriberMember = container.getByLabelText(
        "Insurance Subscriber ID/ Member ID"
      );
      fireEvent.change(subscriberMember, {
        target: { value: "Insurance Subscriber ID" },
      });
      expect(subscriberMember.value).toEqual("Insurance Subscriber ID");

      const groupId = container.getByLabelText("Group #");
      fireEvent.change(groupId, { target: { value: "Group Id" } });
      expect(groupId.value).toEqual("Group Id");

      const policyHolder = container.getByText("Policy Holder");
      expect("Policy Holder").toEqual(policyHolder.textContent);

      const isSubscriber = container.getByLabelText("No");
      fireEvent.click(isSubscriber);
      expect(isSubscriber.value).toEqual("no");

      const subscriberDetail = container.getByText(
        "Enter the subscriber’s details"
      );
      expect("Enter the subscriber’s details").toEqual(
        subscriberDetail.textContent
      );

      const firstName = container.getByLabelText("Subscriber First Name");
      fireEvent.change(firstName, { target: { value: "Test Name" } });
      expect(firstName.value).toEqual("Test Name");

      const lastName = container.getByLabelText("Subscriber Last Name");
      fireEvent.change(lastName, { target: { value: "Test Name" } });
      expect(lastName.value).toEqual("Test Name");

      const relationship = container.getByLabelText("Relationship");
      fireEvent.change(relationship, {
        target: { value: "Relationship value" },
      });
      expect(relationship.value).toEqual("Relationship value");

      const uploadText = container.getByText(
        "Upload images of your insurance."
      );
      expect("Upload images of your insurance.").toEqual(
        uploadText.textContent
      );

      const uploadDisclaimer = container.getByText(
        "*JPG or PNG file formats only. (File size limit is 4 MB)"
      );
      expect(
        "*JPG or PNG file formats only. (File size limit is 4 MB)"
      ).toEqual(uploadDisclaimer.textContent);

      const insurancePriority = container.getByLabelText("Primary");
      fireEvent.click(insurancePriority);
      expect(insurancePriority.value).toEqual("primary");
    }, 500);
  });

  it("Click Save Button", () => {
    setTimeout(() => {
      const button = container.getByText("Save");
      fireEvent.click(button);

      expect("Remove Insurance").toBeVisible();
    }, 500);
  });

  it("Click Update Button", () => {
    setTimeout(() => {
      const button = container.getByText("Edit");
      fireEvent.click(button);

      const insuranceProvider = container.getByLabelText("Insurance Provider");
      expect(insuranceProvider.value).toEqual("Insurance value");
    }, 500);
  });

  it("Render Fields for Update", () => {
    setTimeout(() => {
      const answer1 = container.getByLabelText(/Insurance Provider/i);
      fireEvent.change(answer1, { target: { value: "" } });
      expect(answer1.value).toEqual("");

      const button = container.getByText("Save");
      fireEvent.click(button);

      const postMessage = container.getByLabelText("This field is required");
      expect(postMessage).toBeTruthy();
    }, 500);
  });
});
