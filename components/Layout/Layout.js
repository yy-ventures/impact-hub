import Head from "next/head";
import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <link
          href="../../public/fonts/GTWalsheimPro/GTWalsheimPro-Bold.woff"
          rel="stylesheet"
        />    <link
          href="../../public/fonts/GTWalsheimPro/GTWalsheimPro-Bold.woff2"
          rel="stylesheet"
        />
        <link
          href="../../public/fonts/GTWalsheimPro/GTWalsheimPro-Light.woff"
          rel="stylesheet"
        />
        <link
          href="../../public/fonts/GTWalsheimPro/GTWalsheimPro-Light.woff2"
          rel="stylesheet"
        />
        <link
          href="../../public/fonts/GTWalsheimPro/GTWalsheimPro-Medium.woff"
          rel="stylesheet"
        />
        <link
          href="../../public/fonts/GTWalsheimPro/GTWalsheimPro-Medium.woff2"
          rel="stylesheet"
        />
        <link
          href="../../public/fonts/GTWalsheimPro/GTWalsheimPro-Regular.woff"
          rel="stylesheet"
        />
        <link
          href="../../public/fonts/GTWalsheimPro/GTWalsheimPro-Regular.woff2"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
