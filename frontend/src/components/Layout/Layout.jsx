import React from "react";
import Header from "@components/Header/Header";
import Banner from "@components/Banner/Banner";
import { Outlet } from "react-router-dom";
import Footer from "@components/Footer/Footer";
import Sale from "../Sale/Sale";

const Layout = () => {
  return (
    <>
      <Header />
      <Banner />
      <main>
        <Outlet />
        <Sale />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
