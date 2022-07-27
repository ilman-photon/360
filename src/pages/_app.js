import { Provider } from "react-redux";
import store from "../store/store";
import i18n from "../i18n/i18n";
import "../../styles/globals.scss";

function App({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
export default App;
