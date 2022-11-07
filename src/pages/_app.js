import "../styles/globals.css";
import "../styles/style.css";
import "../styles/skin-2.css";
import "../styles/bootstrap-select.min.css";
import "../styles/default.css"
import "../styles/default-date.css"
// import "materialize-css/dist/css/materialize.min.css";
import MainLayout from "Layout/MainLayout";
import { ProviderAuth } from "hooks/useAuth";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ProviderAuth>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ProviderAuth>
      
    </>
  );
}

export default MyApp;
