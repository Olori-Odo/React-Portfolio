import { useState } from "react";
import "./App.css";
// import { RouterProvider } from "react-router-dom";
// import router from "./router";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../src/layout/MainLayout";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
