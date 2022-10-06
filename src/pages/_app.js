import "../styles/globals.css";
import "materialize-css/dist/css/materialize.min.css";
import MainLayout from "Layout/MainLayout";

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
