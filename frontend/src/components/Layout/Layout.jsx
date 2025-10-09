import React from "react";
import Header from "@components/Header/Header";
import Banner from "../Banner/Banner";
import { Outlet } from "react-router-dom";
import Footer from "@components/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Banner />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
