import "../styles/globals.css";
import "materialize-css/dist/css/materialize.min.css";
import MainLayout from "Layout/MainLayout";
import { ProviderAuth } from "hooks/useAuth";

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
