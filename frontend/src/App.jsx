// frontend/src/App.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "@pages/HomePage/HomePage";
import Layout from "@components/Layout/Layout";
import ScrollToTop from "@components/ScrollToTop/ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}
