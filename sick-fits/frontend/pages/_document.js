import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

// server side rendering everything has to be ready before we send the data to the BhxBrowser. Next solved this with this life cycle method 
// 'getInitalProps' for styled compoennet we need a _document.js 
//serverStyleSheet will renderout the app and crawl every component around the tree and collect the styles. Then compile into one and put it on page
// getInitialProps will happen BEFORE the the render() 

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>{this.props.styleTags}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
