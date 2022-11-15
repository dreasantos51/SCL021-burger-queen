import React from 'react';
import "../stylesheets/Boton.css";
import {Link} from "react-router-dom"
const BtnPedidos = () => {
  return (
    <>
      <Link to="/Pedidos">
        <button className='btn'> MENÚ </button> </Link>
    </>
  )
}

export default BtnPedidos;
