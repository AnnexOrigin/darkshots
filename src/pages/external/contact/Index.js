import { useEffect, useRef } from "react";
import ThemeButton from "../../../components/buttons/ThemeButton";
import InputField from "../../../components/forms/InputField";
import ThemeHeader from "../../../components/textHeaders/ThemeHeader";
const Index = () => {
  const contactContent = {
    minHeight: "100vh",
    width: "100vw",
    boxSizing: "border-box",
    padding: "10%",
    position: "relative",
  };
  const textHeading = "We love to hear from you";
  const form = useRef(null);

  const contactHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="row align-items-center" style={contactContent}>
      <div className="col-12 mb-5">
        <ThemeHeader title={textHeading} />
      </div>
      <div className="col-12  m-auto">
        <form
          onSubmit={contactHandler}
          action=""
          method="post"
          className="row align-items-center"
        >
          <div className="col-lg-5">
            <InputField name="name" type="text" />
          </div>
          <div className="col-lg-5">
            <InputField name="email" type="email" />
          </div>
          <div className="col-lg-10">
            <InputField name="message" type="text" />
          </div>
          <div className="col-lg-10 d-flex justify-content-end">
            <ThemeButton
              textName="Send Message"
              enableModal={true}
              modalName="confirmInputRequest"
              modalHeader="Confirm"
              modalBody="Confirm Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;
