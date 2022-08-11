import AccountLayout from "../../../components/templates/accountLayout";
import InsuranceInformation from "../../../components/organisms/InsuranceInformation/insuranceInformation";
import InsuranceInformationNew from "../../../components/organisms/InsuranceInformation/insuranceInformationNew";
import { useState } from "react";

export default function CreateAccountPage() {
  const [contactEditing, setContactEditing] = useState(true);
  return (
    <section>
      {/* <InsuranceInformation /> */}
      <InsuranceInformationNew 
      isEditing={contactEditing}
      OnEditClicked={(_) => setContactEditing(true)}
      OnCancelEditClicked={(_) => setContactEditing(false)}
      OnSaveClicked={(_) => setContactEditing(false)}
      />
    </section>
  );
}

CreateAccountPage.getLayout = function getLayout(page) {
  return <AccountLayout>{page}</AccountLayout>;
};
