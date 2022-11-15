import React from "react";
import "./App.css";
import BtnPedidos from "./components/BtnPedidos.js";
import BtnCocina from "./components/BtnCocina.js";
import logoimg from "./IMG/logo.png";
import {Routes, Route} from "react-router-dom"
import Home from "./views/Home";
import Orders from "./views/Orders";
import Pedidos from "./views/Pedidos";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Orders" element={<Orders />} />
      <Route path ="/Pedidos" element ={<Pedidos/>}/ >
</Routes>

  );
}

export default App;
