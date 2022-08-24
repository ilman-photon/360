import AppointmentLayout from "../../../components/templates/appointmentLayout";
import { Provider } from "react-redux";
import store from "../../../store/store";
import { ShortBio } from "../../../components/organisms/ShortBio/shortBio";
import DetailedBio from "../../../components/organisms/DetailedBio/detailedBio";

export default function Bio() {
  return (
    <>
      <ShortBio />
      <DetailedBio />
    </>
  );
}

Bio.getLayout = function getLayout(page) {
  return (
    <Provider store={store}>
      <AppointmentLayout currentActivePage={"bio"}>{page}</AppointmentLayout>
    </Provider>
  );
};
