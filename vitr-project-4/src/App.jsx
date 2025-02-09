import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import User from "./User/User";
import GitHub from "./pages/GitHub";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/github" element={<GitHub />} />
        <Route path="/user/:userid" element={<User />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
