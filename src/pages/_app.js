//por los estilos de arriba, hay cosas que se ven mal en el carousel

import "../styles/globals.css";
import "moment/locale/es";
// import "materialize-css/dist/css/materialize.min.css";
import MainLayout from "Layout/MainLayout";
import { ProviderAuth } from "hooks/useAuth";
import { useRouter } from "next/router";
import axios from "axios";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  if (router.pathname.includes("/admin")) {
    require("../styles/bootstrap-select.min.css");
    require("../styles/style.css");
    require("../styles/skin-2.css");
    require("../styles/default.css");
    require("../styles/default-date.css");
    require("../styles/jquery.dataTables.min.css");
    require("../styles/datatables.css");

    // fs.unlink("materialize-css/dist/css/materialize.min.css", function (err) {
    //   if (err && err.code == "ENOENT") {
    //     // file doens't exist
    //     console.info("File doesn't exist, won't remove it.");
    //   } else if (err) {
    //     // other errors, e.g. maybe we don't have enough permission
    //     console.error("Error occurred while trying to remove file");
    //   } else {
    //     console.info(`removed`);
    //   }
    // });
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
