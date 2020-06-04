import React from "react";
import Header from "../components/Header";
import Meta from "../components/Meta";
const Page = () => {
  return (
    <>
      <Meta></Meta>
      <Header></Header>
    </>
  );
};
export default Page;

// OR WE COULD HAVE DONE IT CLASS BASED
// import React , { Component } from "react"

// class Page extends Component {
//     render(){
//         return(
//             <div>
//                 <p>Hey im page component but class based </p>
// {this.props.children}
//             </div>
//         )
//     }
// }
