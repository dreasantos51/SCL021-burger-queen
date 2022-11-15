import React from 'react'
import BtnPedidos from "../components/BtnPedidos.js";
import BtnCocina from "../components/BtnCocina.js";
import logoimg from "../IMG/logo.png";

const Home = () => {
  return (
    <div className="container">
      <img src={logoimg}
        alt="Foto logo Burger Queen"/>
      <div className="btn-principal">
        <BtnPedidos />
        <BtnCocina />
      </div>
    </div>
  )
}

export default Home
