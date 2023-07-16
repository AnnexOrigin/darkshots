import React from "react";
import NavigationBar from "../../components/shared/NavigationBar";
import LandingPage from "../external/landing/Index";
import Services from "../external/services/Index";
import Projects from "../external/project/Index";
import About from "../external/about/Index";
import Career from "../external/career/Index";
import Contact from "../external/contact/Index";

import Footer from "../../components/shared/Footer";
const ExternalLayout = () => {
  const accessLists = [
    {
      navId: 1,
      redirectTo: "/",
      name: "Home",
    },
    {
      navId: 2,
      redirectTo: "#services",
      name: "services",
    },
    {
      navId: 3,
      redirectTo: "#projects",
      name: "projects",
    },
    {
      navId: 4,
      redirectTo: "#about",
      name: "about",
    },
    {
      navId: 5,
      redirectTo: "#careers",
      name: "careers",
    },
    {
      navId: 6,
      redirectTo: "#contact",
      name: "contact",
    },
  ];
  return (
    <div className="container-fluid">
      <NavigationBar links={accessLists} />
      <LandingPage />
      <Services />
      <Projects />
      <About />
      <Career />
      <Contact />
      <Footer />
    </div>
  );
};
export default ExternalLayout;
