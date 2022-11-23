import React from "react";
import logoimg from "../IMG/logo.png";
import "boxicons";

const Menu = () => {
  return (
    <>
      <div className="container">
        <nav className="nav-container">
          <img
            className="image-logo"
            src={logoimg}
            alt="foto con las iniciales BQ"
          />
        </nav>

        <div className="main-nav">
          <div className="nav-menu">
            <a href="./views/Orders.js">MENÚ</a>
          </div>

          <div className="nav-cocina">
            <a href="./views/Orders.js">COCINA</a>
          </div>

          <div className="home">

            <a href="http://localhost:3000/">
              <box-icon name="home"></box-icon>
            </a>


          </div>
        </div>
      </div>

      <section>Menu</section>
      <aside>cocina</aside>
    </>
  );
};

export default Menu;
