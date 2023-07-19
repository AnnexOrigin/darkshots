import React from "react";
import NavigationBar from "../../components/shared/NavigationBar";
import { Outlet } from "react-router-dom";
const InternalLayout = () => {
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
  return (
    <>
      <div className="bg-light">
        <NavigationBar links={accessLists} position="true" />
        <Outlet />
      </div>
    </>
  );
};

export default InternalLayout;
