// frontend/src/App.jsx
import React from "react";
import { Route, Routes } from 'react-router-dom'
import Layout from '@components/Layout/Layout'
import ScrollToTop from '@components/ScrollToTop/ScrollToTop'

export default function App() {
  return (
    <>
      <h1>Hello Garden-shop!</h1>
      
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Layout />}>
        </Route>
      </Routes>
    </>
  )
}
