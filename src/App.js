import React from "react";
import "./App.css";
import "boxicons";
import {Routes, Route} from "react-router-dom"
import Home from "./views/Home";
import Orders from "./views/Orders";
import Menu from "./views/Menu";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/Menu" element={<Menu />} />
      </Routes>



    </>
  );
}

export default App;
