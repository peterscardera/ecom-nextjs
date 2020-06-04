import React, { Component } from "react";
import styled, { ThemeProvider, injectGlobal } from "styled-components";

import Header from "../components/Header";
import Meta from "../components/Meta";

const Page = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledPage>
        <Meta />
        <Header></Header>
        <Inner> {children} </Inner>
      </StyledPage>
    </ThemeProvider>
  );
};

// OR WE COULD HAVE DONE IT CLASS BASED

// class Page extends Component {
//   render() {
//     return (
//       <StyledPage>
//         <Meta />
//         <Header></Header>
//         <Inner> {this.props.children} </Inner>
//       </StyledPage>
//     );
//   }
// }
export default Page;

const StyledPage = styled.div`
  background: white;
  color: ${(props) => props.theme.black};
`;

const Inner = styled.div`
  /* background: ${(props) => props.theme.red}; */
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2em;
/* ${(props) => console.log(props)} */
`;

const theme = {
  red: "#FF0000",
  black: "#393939",
  grey: "#3A3A3A",
  lightgrey: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)",
};

injectGlobal`
 html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'radnika_next';
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  button {  font-family: 'radnika_next'; }
`;
