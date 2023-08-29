import React from "react";
import NavigationBar from "../../components/shared/NavigationBar";
import { Outlet, Link } from "react-router-dom";
import "./sidebar.css";
const ClientLayout = () => {
  const containerStyle = {
    marginTop: "3.625rem",
  };
  const accessLists = [
    {
      navId: 1,
      redirectTo: "/",
      name: "Welcome, user",
    },
    {
      navId: 2,
      redirectTo: "/",
      name: "logout",
    },
  ];
  const sidebarLists = [
    {
      id: 1,
      redirectTo: "client/profile",
      name: "Profile",
      icon: <i class="bi bi-person"></i>,
    },
    {
      id: 2,
      redirectTo: "client/order",
      name: "Order",
      icon: <i class="bi bi-card-checklist"></i>,
    },
    {
      id: 3,
      redirectTo: "client/media",
      name: "Media Files",
      icon: <i class="bi bi-images"></i>,
    },
  ];
  const contentHeight = {
    height: "calc(100vh - 3.625rem)",
    overflow: "auto",
  };
  return (
    <>
      <div className="bg-light">
        <NavigationBar links={accessLists} position="true" />
        <div className="row flex-nowrap mx-0" style={containerStyle}>
          <aside className="col-2 col-sm-2 col-md-3 col-lg-3 col-xl-2 p-0 bg-dark position-fixed vh-100 text-light container pt-4 ">
            <div className="vstack sidebar">
              {sidebarLists.map((link) => {
                return (
                  <>
                    <Link
                      key={link.id}
                      to={link.redirectTo}
                      className="text-decoration-none col sidebar-link"
                    >
                      <div className="row mx-0 justify-content-center align-items-center">
                        <div className="col-auto">{link.icon}</div>
                        <div className="col d-none d-sm-none d-md-block d-lg-block">
                          {link.name}
                        </div>
                      </div>
                    </Link>
                  </>
                );
              })}
            </div>
          </aside>
          <section
            className="col-10 col-sm-9 col-md-9 col-lg-9 col-xl-10 pt-4 px-5 offset-2 offset-sm-3 offset-md-3 offset-lg-3 offset-xl-2"
            style={contentHeight}
          >
            <Outlet />
          </section>
        </div>
      </div>
    </>
  );
};

export default ClientLayout;
