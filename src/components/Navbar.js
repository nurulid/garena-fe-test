import React, { useState } from "react";
import Logo from "../img/Sea-Undergraduate-Logo.png";
import "../scss/_navbar.scss";

const Navbar = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);

  const showMenu = () => {
    setBurgerMenu(true);
  };

  const hideMenu = () => {
    setBurgerMenu(false);
  };

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__logo-wrapper">
          <img src={Logo} alt="Sea Undergraduate Logo" />
        </div>
        <div onClick={showMenu} className="hamburger">
          <div></div>
          <div></div>
          <div></div>
        </div>
        {burgerMenu ? (
          <div onClick={hideMenu} className="nav__menu nav__menu--mobile">
            <div className="close">x</div>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#program">Program</a>
              </li>
              <li>
                <a href="#apply">Apply Here</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </div>
        ) : (
          <div className="nav__menu">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#program">Program</a>
              </li>
              <li>
                <a href="#apply">Apply Here</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
