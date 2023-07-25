import React, { useEffect, useState } from "react";
import ThemeHeader from "../../../components/textHeaders/ThemeHeader";
import InputField from "../../../components/forms/InputField";
import ThemeButton from "../../../components/buttons/ThemeButton";
const Index = () => {
  const [usernameValue, setUsernameValue] = useState(null);
  const [passwordValue, setPasswordValue] = useState(null);
  const apiEndpoint = "http://localhost:3001/api/user/login";
  const loginContent = {
    minHeight: "100vh",
    width: "100vw",
    boxSizing: "border-box",
    padding: "0% 10%",
    position: "relative",
    backgroundColor: "black",
  };
  const handleUserName = (event) => {
    setUsernameValue(event.target.value);
  };
  const handlePassword = (event) => {
    setPasswordValue(event.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(apiEndpoint, {
      method: "post",
      credentials: "include",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        username: usernameValue,
        password: passwordValue,
      }),
    })
      .then(async (response) => {
        const data = await response.json();
        console.log(data.user);
      })
      .catch((error) => {
        console.log({ error: error.message });
      });
  };
  const handleBack = (e) => {
    window.location.href = window.origin;
  };
  const textHeading = "Sign in your account";

  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={loginContent}
    >
      <div className="row">
        <div className="col-12 ">
          <form method="post" action="" className="row">
            <div className="col-12">
              <ThemeHeader title={textHeading} />
            </div>
            <div className="col-6">
              <InputField
                name="username"
                type="text"
                value={usernameValue}
                clickTrigger={handleUserName}
              />
            </div>
            <div className="col-6">
              <InputField
                name="password"
                type="password"
                value={passwordValue}
                clickTrigger={handlePassword}
              />
            </div>
            <div className="col-12 ">
              <div className="float-end">
                <ThemeButton
                  textName="Sign in"
                  type="submit"
                  clickTrigger={handleSubmit}
                />
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
