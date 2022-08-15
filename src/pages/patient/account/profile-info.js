import AccountLayout from "../../../components/templates/accountLayout";
import PersonalInformation from "../../../components/organisms/PersonalInformation/personalInformation";
import ContactInformation from "../../../components/organisms/ContactInformation/contactInformation";
import { Grid, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, setUserData } from "../../../store/user";
import { useRouter } from "next/router";

export async function getStaticProps() {
  return {
    props: {
      autoFillAPIToken: process.env.MAPBOX_API_TOKEN,
    },
  };
}
export default function ProfileInformationPage({ autoFillAPIToken }) {
  const [contactEditing, setContactEditing] = useState(false);
  const [personalEditing, setPersonalEditing] = useState(false);

  const userData = useSelector((state) => state.user.userData);

  const dispatch = useDispatch();

  const onSavePersonalData = (payload) => {
    dispatch(setUserData(payload));
    setPersonalEditing(false);
  };

  const onSaveContactData = (payload) => {
    dispatch(setUserData(payload));
    setContactEditing(false);
  };

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <section>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <PersonalInformation
            userData={userData}
            isEditing={personalEditing}
            OnEditClicked={(_) => setPersonalEditing(true)}
            OnCancelEditClicked={(_) => setPersonalEditing(false)}
            OnSaveClicked={onSavePersonalData}
          />
        </Grid>
        <Grid item xs={6}>
          <ContactInformation
            userData={userData}
            isEditing={contactEditing}
            OnEditClicked={(_) => setContactEditing(true)}
            OnCancelEditClicked={(_) => setContactEditing(false)}
            OnSaveClicked={onSaveContactData}
            autoFillAPIToken={autoFillAPIToken}
          />
        </Grid>
      </Grid>
    </section>
  );
}

ProfileInformationPage.getLayout = function getLayout(page) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <AccountLayout currentActivePage={!isMobile ? "profile-info" : ""}>
      {page}
    </AccountLayout>
  );
};
