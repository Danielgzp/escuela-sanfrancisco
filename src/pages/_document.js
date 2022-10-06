import { Html, Head, Main, NextScript } from "next/document";

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
        <link rel="apple-touch-icon" href="/public/logo.png" />
        <meta name="theme-color" content="#232352" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      </body>
    </Html>
  );
}
