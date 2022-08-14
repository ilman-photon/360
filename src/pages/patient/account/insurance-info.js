import AccountLayout from "../../../components/templates/accountLayout";
import InsuranceInformation from "../../../components/organisms/InsuranceInformation/insuranceInformation";
import InsuranceInformationNew from "../../../components/organisms/InsuranceInformation/insuranceInformationNew";
// import { useState } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, setUserData } from "../../../store/user";

export default function CreateAccountPage() {
  const [insuranceEditing, setInsuranceEditing] = useState(true);

  const userData = useSelector((state) => state.user.userData);

  const onSaveInsuranceData = (payload) => {
    dispatch(setUserData(payload));
    setInsuranceEditing(false);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <section>
      {/* <InsuranceInformation /> */}
      <InsuranceInformationNew
        userData={userData}
        isEditing={insuranceEditing}
        OnEditClicked={(_) => setInsuranceEditing(true)}
        OnCancelEditClicked={(_) => setInsuranceEditing(false)}
        OnSaveClicked={onSaveInsuranceData}
      />
    </section>
  );
}

CreateAccountPage.getLayout = function getLayout(page) {
  return <AccountLayout>{page}</AccountLayout>;
};
