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
        <link rel="apple-touch-icon" href="/logo.png" />
        {/* BOOTSTRAP ICONS */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css"
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
      </body>
    </Html>
  );
}
