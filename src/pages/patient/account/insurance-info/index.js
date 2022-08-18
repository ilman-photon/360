import AccountLayout from "../../../../components/templates/accountLayout";
import InsuranceInformationNew from "../../../../components/organisms/InsuranceInformation/insuranceInformationNew";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, setUserData } from "../../../../store/user";

export default function InsuranceInformationPage() {
  const [insuranceEditing, setInsuranceEditing] = useState(true);

  const userData = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();

  const onSaveInsuranceData = (payload) => {
    dispatch(setUserData(payload));
    setInsuranceEditing(false);
  };

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <section>
      <InsuranceInformationNew
        userData={userData}
        isEditing={insuranceEditing}
        OnEditClicked={() => setInsuranceEditing(true)}
        OnCancelEditClicked={() => setInsuranceEditing(false)}
        OnSaveClicked={onSaveInsuranceData}
      />
    </section>
  );
}

InsuranceInformationPage.getLayout = function getLayout(page) {
  return (
    <AccountLayout currentActivePage={"insurance-info"}>{page}</AccountLayout>
  );
};
