import AccountLayout from "../../../components/templates/accountLayout";
import PersonalInformation from "../../../components/organisms/PersonalInformation/personalInformation";
import ContactInformation from "../../../components/organisms/ContactInformation/contactInformation";
import { Grid } from "@mui/material";

export default function CreateAccountPage() {
  return (
    <section>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <PersonalInformation />
        </Grid>
        <Grid item xs={6}>
          <ContactInformation />
        </Grid>
      </Grid>
    </section>
  );
}

CreateAccountPage.getLayout = function getLayout(page) {
  return <AccountLayout>{page}</AccountLayout>;
};
