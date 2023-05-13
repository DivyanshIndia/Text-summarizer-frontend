import React from "react";

import "./App.css";
import AboutUs from "./components/AboutUs";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Proje from "./components/Proje";
import Footer from "./components/Footer";

const App = () => {

  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Home" element={<Home />} />
        <Route path="/Proje" element={<Proje/>} />
        <Route path="/AboutUs" element={<AboutUs />} />
        {/* <Route path="/github" element={Github} />
        <Route path="/memes" element={Memes} /> */}
      </Routes>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default App;
