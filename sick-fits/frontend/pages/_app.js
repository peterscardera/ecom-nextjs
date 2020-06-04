import App, { Container } from "next/app";
//next.js way of customizing the app file. MUST be called _app.js and we MUST import the Container
import { Component } from "react";
import Page from "./Page";




class MyApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <Container>
        {/* wrapping the page with Container. I higher up component */}
        {/* <p>Hey Im on every page</p> */}
        <Page></Page>
        <Component />
      </Container>
    );
  }
}

export default MyApp;
