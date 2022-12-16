/* eslint-disable @next/next/next-script-for-ga */
import Document, { Html, Head, Main, NextScript } from "next/document";

class CustomDocuments extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    return Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html>
        <Head>
          <script
            id="google-analytics"
            dangerouslySetInnerHTML={{
              __html: `(function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != "dataLayer" ? "&l=" + l : "";
    j.async = true;
    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, "script", "dataLayer", "GTM-PNNWD4Q");`,
            }}
          />
          <link
            href="https://fonts.cdnfonts.com/css/bw-nista-geometric-demo"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@500;600&family=Roboto:wght@500;700&family=Inter:wght@500;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="shortcut icon"
            href="//images.ctfassets.net/pyp8qw75m305/4dJIAIfGopppmKhlUHXtqL/d04ec76c6ae08b9b81dd4f3a96b12609/eyecare_partners_favicon.png?w=48&amp;h=48"
          ></link>
        </Head>
        <body>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-PNNWD4Q"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocuments;
