import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Layout = ({ children }) => {
  console.log();
  return (
    <>
      <Navbar />
      {children.type.name == "Home" ? children : <div className="main_container">{children}</div>}
      <Footer />
    </>
  );
};

export default Layout;
