import { Html, Head, Main, NextScript, DocumentProps } from "next/document";

export default function Document({ locale }: DocumentProps) {
  return (
    <Html lang={locale}>
      <Head>
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="B_qDwmh32qj1J9cnjvNpLzXCT7UB_Zi-N_7uBWVs-jQ"
        />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Sabt" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-DSS8PRD68B"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DSS8PRD68B');
            `,
          }}
        />

        {/* Google Ads Conversion Tracking */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16905542533"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16905542533');
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id="modal" />
        <div id="modal-root" />
      </body>
    </Html>
  );
}
