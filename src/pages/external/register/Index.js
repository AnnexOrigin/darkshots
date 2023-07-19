import React from "react";
import ThemeHeader from "../../../components/textHeaders/ThemeHeader";
import InputField from "../../../components/forms/InputField";
import ThemeButton from "../../../components/buttons/ThemeButton";
const Index = () => {
  const registerContent = {
    minHeight: "100vh",
    width: "100vw",
    boxSizing: "border-box",
    padding: "0% 10%",
    position: "relative",
    backgroundColor: "black",
  };
  const handleBack = (e) => {
    window.location.href = window.origin;
  };
  const textHeading = "Create new account";
  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={registerContent}
    >
      <div className="row">
        <div className="col-12 ">
          <form method="post" action="" className="row">
            <div className="col-12">
              <ThemeHeader title={textHeading} />
            </div>
            <div className="col-6">
              <InputField name="client name" type="text" />
            </div>
            <div className="col-6">
              <InputField name="contact number / email" type="text" />
            </div>
            <div className="col-6">
              <InputField name="username" type="text" />
            </div>
            <div className="col-6">
              <InputField name="password" type="password" />
            </div>
            <div className="col-12 ">
              <div className="float-end">
                <ThemeButton textName="Sign in" type="submit" />
              </div>
            </div>
          </form>
        </div>
        <div className="col-2">
          <div className="float-start">
            <button
              onClick={handleBack}
              className="btn btn-transparent text-white text-uppercase rounded-0"
              style={{ fontFamily: "Agdasima-Bold" }}
            >
              <i className="ri-arrow-left-line "></i>
              back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
