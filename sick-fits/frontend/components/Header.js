import React from "react";
import Nav from "./Nav";




const Header = () => {
  return (
    <>
      <div className="bar">
        <a href="">Sick fits</a>
        <Nav />
      </div>
      <div className="sub-bar">
        <p> search</p>
      </div>
      <div>Cart</div>
    </>
  );
};
export default Header;
