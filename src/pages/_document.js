import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/Script";

// Este vendria siendo como el clasico htl que estaba en la carpeta public de create-react-app

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        {/* <link rel="manifest" href="/public/manifest.json" /> */}
        {/* <link rel="apple-touch-icon" href="/logo.png" /> */}
        {/* BOOTSTRAP ICONS */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
          integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
          crossOrigin="anonymous"
        />
        {/* <link rel="stylesheet" href="../styles/bootstrap-select.min.css" /> */}
        <meta name="theme-color" content="#232352" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
        />
        {/* <Script
          src="/vendor/bootstrap-select/dist/js/bootstrap-select.min.js"
          strategy="afterInteractive"
        /> */}
        <Script
          src="/vendor/global/global.min.js"
          strategy="beforeInteractive"
        />
        {/* <Script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          strategy="beforeInteractive"
        /> */}

        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/jszip/2.5.0/jszip.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/pdfmake.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/vfs_fonts.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.datatables.net/1.13.1/js/jquery.dataTables.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.datatables.net/1.13.1/js/dataTables.bootstrap5.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.datatables.net/buttons/2.3.3/js/dataTables.buttons.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.datatables.net/buttons/2.3.3/js/buttons.bootstrap5.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.datatables.net/buttons/2.3.3/js/buttons.html5.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.datatables.net/buttons/2.3.3/js/buttons.print.min.js"
          strategy="beforeInteractive"
        />
        {/* <Script
          src="/vendor/global/global.min.js"
          strategy="beforeInteractive"
        /> */}
      </body>
    </Html>
  );
}
