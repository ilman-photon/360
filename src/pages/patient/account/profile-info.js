import AccountLayout from "../../../components/templates/accountLayout";
import ProfileInformation from "../../../components/organisms/ProfileInformation/profileInformation";

export default function CreateAccountPage() {
  return (
    <section>
      <ProfileInformation />
    </section>
  );
}

CreateAccountPage.getLayout = function getLayout(page) {
  return <AccountLayout>{page}</AccountLayout>;
};
