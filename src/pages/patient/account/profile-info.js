import AccountLayout from "../../../components/templates/accountLayout";
import PersonalInformation from "../../../components/organisms/PersonalInformation/personalInformation";
import ContactInformation from "../../../components/organisms/ContactInformation/contactInformation";
import { Grid } from "@mui/material";
import { useState } from "react";

export default function CreateAccountPage() {
  const [contactEditing, setContactEditing] = useState(false);
  return (
    <section>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <PersonalInformation />
        </Grid>
        <Grid item xs={6}>
          <ContactInformation
            isEditing={contactEditing}
            OnEditClicked={(_) => setContactEditing(true)}
            OnCancelEditClicked={(_) => setContactEditing(false)}
            OnSaveClicked={(_) => setContactEditing(false)}
          />
        </Grid>
      </Grid>
    </section>
  );
}

CreateAccountPage.getLayout = function getLayout(page) {
  return <AccountLayout>{page}</AccountLayout>;
};
