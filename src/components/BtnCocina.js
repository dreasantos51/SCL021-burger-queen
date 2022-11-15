import React from 'react'
import "../stylesheets/Boton.css";
import {Link} from "react-router-dom"

const BtnCocina = () => {
  return (
    <>
      <Link to="/Orders">
        <button className='btn'> COCINA </button></Link>
    </>
  )
}

export default BtnCocina;
