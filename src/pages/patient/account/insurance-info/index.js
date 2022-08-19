import AccountLayout from "../../../../components/templates/accountLayout";
import InsuranceInformationNew from "../../../../components/organisms/InsuranceInformation/insuranceInformationNew";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, setUserInsuranceData } from "../../../../store/user";

export default function CreateAccountPage() {
  const [insuranceEditing, setInsuranceEditing] = useState(true);

  const userInsuranceData = useSelector(
    (state) => state.user.userInsuranceData
  );

  const onSaveInsuranceData = (payload) => {
    console.log(payload, "payload");
    dispatch(setUserInsuranceData(payload));
    setInsuranceEditing(false);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <section>
      <InsuranceInformationNew
        insuranceData={userInsuranceData}
        isEditing={insuranceEditing}
        OnEditClicked={(_) => setInsuranceEditing(true)}
        OnCancelEditClicked={(_) => setInsuranceEditing(false)}
        OnSaveClicked={onSaveInsuranceData}
      />
    </section>
  );
}

CreateAccountPage.getLayout = function getLayout(page) {
  return (
    <AccountLayout currentActivePage={"insurance-info"}>{page}</AccountLayout>
  );
};
