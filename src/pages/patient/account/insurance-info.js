import AccountLayout from "../../../components/templates/accountLayout";
import InsuranceInformation from "../../../components/organisms/InsuranceInformation/insuranceInformation";
import InsuranceInformationNew from "../../../components/organisms/InsuranceInformation/insuranceInformationNew";
import { useState } from "react";

export default function CreateAccountPage() {
  const [insuranceEditing, setInsuranceEditing] = useState(true);
  return (
    <section>
      {/* <InsuranceInformation /> */}
      <InsuranceInformationNew
        isEditing={insuranceEditing}
        OnEditClicked={(_) => setInsuranceEditing(true)}
        OnCancelEditClicked={(_) => setInsuranceEditing(false)}
        OnSaveClicked={(_) => setInsuranceEditing(false)}
      />
    </section>
  );
}

CreateAccountPage.getLayout = function getLayout(page) {
  return <AccountLayout>{page}</AccountLayout>;
};
