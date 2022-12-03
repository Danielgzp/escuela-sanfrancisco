//por los estilos de arriba, hay cosas que se ven mal en el carousel

import "../styles/globals.css";
import "moment/locale/es";
// import "materialize-css/dist/css/materialize.min.css";
import MainLayout from "Layout/MainLayout";
import { ProviderAuth } from "hooks/useAuth";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  if (router.pathname.includes("/admin")) {
    require("../styles/style.css");
    require("../styles/skin-2.css");
    require("../styles/bootstrap-select.min.css");
    require("../styles/default.css");
    require("../styles/default-date.css");
    require("../styles/jquery.dataTables.min.css");
    require("../styles/datatables.css");
  } else {
    require("materialize-css/dist/css/materialize.min.css");
  }
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
