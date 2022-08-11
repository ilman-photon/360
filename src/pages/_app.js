import Cookies from "universal-cookie";
import { Provider } from "react-redux";
import store from "../store/store";
import "../../styles/globals.scss";

import { appWithTranslation } from "next-i18next";
import nextI18nConfig from "../../next-i18next.config";

function App({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
export default appWithTranslation(App, nextI18nConfig);
