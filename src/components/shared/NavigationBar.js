import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/brand/darkshot-logo.png";
import ThemeButton from "../buttons/ThemeButton";
const NavigationBar = ({ links }) => {
  const [navLinks, setNavLinks] = useState(links);
  const navLinkRef = useRef(null); //in-progress adding useRef hook
  const [activeItem, setActiveItem] = useState(null);

  const handleLogin = (event) => {
    alert(event);
  };
  const handleItemClick = (event) => {
    if (activeItem) {
      activeItem.classList.remove("active");
    }
    event.target.classList.add("active");
    setActiveItem(event.target);
  };
  const logoImage = {
    height: "30px",
    objectFit: "cover",
  };

  return (
    <nav
      className="navbar  navbar-expand-lg navbar-dark fixed-top  px-5"
      style={{ zIndex: "3", backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <Link className="navbar-brand " to="/">
        <img src={logo} className="img img-fluid" style={logoImage} />
      </Link>

      <>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto my-auto" ref={navLinkRef}>
            {navLinks.length > 0
              ? navLinks.map((navLink) => {
                  return (
                    <li
                      key={navLink.navId}
                      className="nav-item"
                      onClick={handleItemClick}
                    >
                      <Link
                        className="nav-link  text-uppercase"
                        to={navLink.redirectTo}
                        style={{ fontFamily: "Agdasima-Bold" }}
                      >
                        {navLink.name}
                      </Link>
                    </li>
                  );
                })
              : ``}
          </ul>
          <ThemeButton textName="Register" onClick={handleLogin} />
          <ThemeButton textName="Sign in" primary={false} />
        </div>
      </>
    </nav>
  );
};

export default NavigationBar;
