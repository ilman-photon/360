import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import InsuranceView from "../../../../src/components/organisms/InsuranceInformation/insuranceView";

describe("InsuranceView Components", () => {
  let container;
  const DEFAULT_INSURANCE_DATA = [
    {
      id: 0,
      provider: {
        id: "1",
        label: "Provider 1",
      },
      plan: {
        id: "1",
        label: "Plan 1",
      },
      memberID: "123",
      groupID: "321",
      isSubscriber: "No",
      subscriberData: {
        firstName: "first",
        lastName: "last",
        dob: null,
        relationship: "",
      },
      priority: "PRIMARY",
      frontCard: "",
      backCard: "",
    },
  ];
  beforeEach(() => {
    container = render(
      <InsuranceView insuranceData={DEFAULT_INSURANCE_DATA} />
    );
  });

  it("InsuranceView render", () => {
    expect(container).toMatchSnapshot();
  });

  it("InsuranceView render field", () => {
    expect(container.getByText("Insurance Provider")).toBeInTheDocument();
    expect(container.getByText("Plan Name")).toBeInTheDocument();
    expect(container.getByText("Subscriber ID/Member ID")).toBeInTheDocument();
    expect(container.getByText("Group #")).toBeInTheDocument();

    expect(container.getByText("Policy Holder")).toBeInTheDocument();
    expect(container.getByText("Subscriber's details")).toBeInTheDocument();

    expect(container.getByText("First Name")).toBeInTheDocument();
    expect(container.getByText("Last Name")).toBeInTheDocument();
    expect(container.getAllByText("Relationship")[0]).toBeInTheDocument();
    expect(container.getByText("Date of Birth")).toBeInTheDocument();

    expect(
      container.getByText("Upload images of your insurance.")
    ).toBeInTheDocument();
    expect(container.getByText("Insurance Priority")).toBeInTheDocument();
  });
});
