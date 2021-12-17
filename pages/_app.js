import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>PeepalAus - Welcome</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script dangerouslySetInnerHTML={{__html:`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M68NPWP');
          `}} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
