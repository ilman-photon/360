import AccountLayout from "../../../components/templates/accountLayout";
import InsuranceInformation from "../../../components/organisms/InsuranceInformation/insuranceInformation";

export default function CreateAccountPage() {
  return (
    <section>
      <InsuranceInformation />
    </section>
  );
}

CreateAccountPage.getLayout = function getLayout(page) {
  return <AccountLayout>{page}</AccountLayout>;
};
