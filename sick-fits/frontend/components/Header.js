import React from "react";
import Link from "next/link";
import Nav from "./Nav";
import styled from "styled-components";
import Router from "next/router";

import NProgress from "nprogress";

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const Header = () => {
  return (
    <>
      <StyledHeader>
        <div className="bar">
          <LogoHOne>
            <Link href="/">
              <a>Sick Fits</a>
            </Link>
          </LogoHOne>
          <Nav />
        </div>
        <div className="sub-bar">search</div>
        cart
      </StyledHeader>
    </>
  );
};
export default Header;

const LogoHOne = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);

  a {
    padding: 0.5re 1.2rem;
    background: ${(props) => props.theme.red};
    color: white;
    text-decoration: none;
    text-transform: uppercase;
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;

const StyledHeader = styled.header`
  .bar {
    border-bottom: 10px solid ${(props) => props.theme.black};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${(props) => props.theme.lightgrey};
  }
`;
