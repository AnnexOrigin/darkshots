import React from "react";
import NavigationBar from "../../components/shared/NavigationBar";
import { Outlet } from "react-router-dom";
const InternalLayout = () => {
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
      redirectTo: "#logout",
      name: "logout",
    },
  ];
  const sidebarLists = [
    {
      navId: 1,
      redirectTo: "admin/accountSettings",
      name: "Accounts Settings",
    },
    { navId: 2, redirectTo: "admin/clients", name: "Applicants" },
    { navId: 3, redirectTo: "admin/applicants", name: "Client" },
    { navId: 4, redirectTo: "admin/posts", name: "Posts" },
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
          <aside className="col-2 col-sm-3 col-md-3 col-lg-3 col-xl-2 px-sm-2 px-0 bg-dark position-fixed vh-100 text-light container">
            Sidebar
          </aside>
          <section
            className="col-10 col-sm-9 col-md-9 col-lg-9 col-xl-10 pt-4 px-5 offset-2 offset-sm-3 offset-md-3 offset-lg-3 offset-xl-2 "
            style={contentHeight}
          >
            <Outlet />
          </section>
        </div>
      </div>
    </>
  );
};

export default InternalLayout;
