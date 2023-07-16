import React from "react";
import ThemeButton from "../../../components/buttons/ThemeButton";
const Index = () => {
  const landingContent = {
    height: "100vh",
    width: "100vw",
    boxSizing: "border-box",
    padding: "10%",
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 95%),url(" +
      require("../../../assets/images/brand/cinema_bg.png") +
      ")",
    backgroundSize: "cover",
    position: "relative",
  };

  return (
    <div className="row align-items-center" style={landingContent}>
      <div className="col-7">
        <div className="text-white text-uppercase text-uppercase th-fs-1 th-fw-bold">
          Where dreams become
        </div>
        <div className="text-white text-uppercase pb-3 th-fs-1 th-fw-bold">
          Cinematic Masterpieces.
        </div>
        <ThemeButton textName="Inquire Now" />
        <ThemeButton textName="Learn more" primary={false} />
      </div>
    </div>
  );
};
export default Index;
