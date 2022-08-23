import AppointmentLayout from "../../../components/templates/appointmentLayout";
import { Provider } from "react-redux";
import store from "../../../store/store";

export default function Appointment() {
  return <section></section>;
}

Appointment.getLayout = function getLayout(page) {
  return (
    <Provider store={store}>
      <AppointmentLayout currentActivePage={"appointment"}>
        {page}
      </AppointmentLayout>
    </Provider>
  );
};
