import AccountLayout from "../../../../components/templates/accountLayout";
import InsuranceInformationNew from "../../../../components/organisms/InsuranceInformation/insuranceInformationNew";
import { useEffect, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import {
  fetchUser,
  setUserInsuranceData,
  addUserInsuranceData,
} from "../../../../store/user";
import FormMessage from "../../../../components/molecules/FormMessage/formMessage";
import {
  closePageMessage,
  resetPageMessage,
  setPageMessage,
} from "../../../../store";
import store from "../../../../store/store";

export default function InsuranceInfoPage() {
  const [insuranceEditing, setInsuranceEditing] = useState(true);
  const pageMessage = useSelector((state) => state.index.pageMessage);

  const userInsuranceData = useSelector(
    (state) => state.user.userInsuranceData
  );
  useEffect(() => {
    console.log(userInsuranceData);
  }, [userInsuranceData]);

  const onSaveInsuranceData = (payload) => {
    console.log(payload, "payload");
    dispatch(setUserInsuranceData(payload));
    setInsuranceEditing(false);
  };

  const OnCreateInsurance = (payload) => {
    dispatch(addUserInsuranceData(payload));
    dispatch(
      setPageMessage({ isShow: true, content: "Insurance successfully added" })
    );
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <section>
      <FormMessage
        onClick={() => {
          dispatch(closePageMessage());
        }}
        role="button"
        success={true}
        sx={{
          borderRadius: "0px",
          justifyContent: "center",
          backgroundColor: "#04844B",
          position: "absolute",
          top: "-40px",
          left: 0,
          width: "100%",
          transition: "0.3 s ease-in-out",
          cursor: "pointer",
        }}
      >
        {pageMessage.content}
      </FormMessage>
      {/* {JSON.stringify(userInsuranceData)} */}
      <InsuranceInformationNew
        insuranceData={userInsuranceData}
        isEditing={insuranceEditing}
        OnEditClicked={(_) => setInsuranceEditing(true)}
        OnCancelEditClicked={(_) => setInsuranceEditing(false)}
        OnCreateInsurance={OnCreateInsurance}
      />
    </section>
  );
}

console.log({ InsuranceInfoPage });

InsuranceInfoPage.getLayout = function getLayout(page) {
  return (
    <Provider store={store}>
      <AccountLayout currentActivePage={"insurance-info"}>{page}</AccountLayout>
    </Provider>
  );
};
