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
        <h1
          className="text-white text-uppercase"
          style={{ fontFamily: "Agdasima-Bold", fontSize: "72px" }}
        >
          Where dreams become
        </h1>
        <h1
          className="text-white text-uppercase pb-3"
          style={{ fontFamily: "Agdasima-Bold", fontSize: "72px" }}
        >
          Cinematic Masterpieces.
        </h1>
        <ThemeButton textName="Inquire Now" />
        <ThemeButton textName="Learn more" primary={false} />
      </div>
    </div>
  );
};
export default Index;
