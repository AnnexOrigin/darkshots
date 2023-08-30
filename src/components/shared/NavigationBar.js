import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/brand/darkshot-logo.png";
import ThemeButton from "../buttons/ThemeButton";
const NavigationBar = ({ links, position }) => {
  const [navLinks, setNavLinks] = useState(links);
  const [isAdmin, setIsAdmin] = useState(position);
  const navLinkRef = useRef(null); //in-progress adding useRef hook
  const [activeItem, setActiveItem] = useState(null);
  const [activeUser, setActiveUser] = useState(null);
  const currentUserAPI = "http://localhost:3001/api/user/current-user";
  const signoutUserAPI = "http://localhost:3001/api/user/logout";
  const navigate = useNavigate();
  const handleLogin = (event) => {
    navigate("/signin");
  };
  const handleRegister = (event) => {
    navigate("/register");
  };
  const handleLogout = (event) => {
    fetch(signoutUserAPI, {
      method: "post",
      credentials: "include",
    })
      .then(async (response) => {
        if (response.status == 200) {
          const status = await response.json();
          setActiveUser(null);
        }
      })
      .catch((error) => console.log({ error: error.message }));
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
  const navbarStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    backdropFilter: "blur(10px)",
    zIndex: "3",
  };
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       await fetch(currentUserAPI, {
  //         method: "post",
  //         credentials: "include",
  //       })
  //         .then(async (response) => {
  //           if (response.status == 200) {
  //             const data = await response.json();
  //             setActiveUser(data);
  //           }
  //         })
  //         .catch((error) => console.log({ error: error.message }));
  //     } catch (error) {
  //       console.log({ message: error.message });
  //     }
  //   };
  //   fetchData();
  // });

  return (
    <>
      {isAdmin === "true" ? (
        ""
      ) : (
        <nav
          className="navbar navbar-expand-lg navbar-dark fixed-top shadow-sm px-5"
          style={navbarStyle}
        >
          <Link className="navbar-brand " to="/">
            <img src={logo} className="img img-fluid" style={logoImage} />
          </Link>

          <>
            <div className="d-flex gap-2 d-block d-md-block d-lg-none">
              <button
                class="navbar-toggler bg-transparent btn btn-dark border border-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i class="bi bi-list"></i>
              </button>
            </div>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
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
                            key={navLink.navId}
                            className="nav-link  text-uppercase"
                            onClick={navLink.redirectTo}
                            style={{ fontFamily: "Agdasima-Bold" }}
                          >
                            {navLink.name}
                          </Link>
                        </li>
                      );
                    })
                  : ``}
                <li className="nav-item">
                  <div className="d-flex justify-content-end gap-2 d-block d-md-block d-lg-none">
                    <ThemeButton
                      textName="Register"
                      clickTrigger={handleRegister}
                    />
                    <ThemeButton
                      textName="Sign in"
                      primary={false}
                      clickTrigger={handleLogin}
                    />
                  </div>
                </li>
              </ul>
              <div className="d-flex gap-2 d-none d-md-none d-lg-block">
                <ThemeButton
                  textName="Register"
                  clickTrigger={handleRegister}
                />
                <ThemeButton
                  textName="Sign in"
                  primary={false}
                  clickTrigger={handleLogin}
                />
              </div>
            </div>
          </>
        </nav>
      )}
      {isAdmin === "false" ? (
        ""
      ) : (
        <nav
          className="navbar navbar-expand-lg navbar-dark fixed-top px-5"
          style={{ zIndex: "3", backgroundColor: "rgba(0,0,0 )" }}
        >
          <Link className="navbar-brand " to="admin/Accounts">
            <img src={logo} className="img img-fluid" style={logoImage} />
          </Link>

          <>
            <button
              className="navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <div className="col d-flex justify-content-lg-end justify-content-start">
                <ul className="navbar-nav my-auto " ref={navLinkRef}>
                  {navLinks.length > 0
                    ? navLinks.map((navLink) => {
                        if (navLink.navId == 1) {
                          return (
                            <li
                              key={navLink.navId}
                              className="nav-item nav-link active  text-uppercase th-fw-bold pe-none"
                            >
                              {navLink.name}
                            </li>
                          );
                        } else {
                          return (
                            <li
                              key={navLink.navId}
                              className="nav-item"
                              onClick={handleItemClick}
                            >
                              <Link
                                key={navLink.navId}
                                className="nav-link  text-uppercase"
                                to={navLink.redirectTo}
                                style={{ fontFamily: "Agdasima-Bold" }}
                              >
                                {navLink.name}
                              </Link>
                            </li>
                          );
                        }
                      })
                    : ``}
                </ul>
              </div>
            </div>
          </>
        </nav>
      )}
    </>
  );
};

export default NavigationBar;
