import AccountLayout from "../../../../../components/templates/accountLayout";
import { Provider } from "react-redux";
import store from "../../../../../store/store";

export default function IntakeFormsPage() {
  return <>Test</>;
}

IntakeFormsPage.getLayout = function getLayout(page) {
  return (
    <Provider store={store}>
      <AccountLayout currentActivePage={"intake-forms"}>{page}</AccountLayout>
    </Provider>
  );
};
