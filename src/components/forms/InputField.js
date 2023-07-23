import { useEffect, useRef } from "react";

const InputField = ({ name, type, clickTrigger }) => {
  const inputStyle = {
    outline: 0,
    backgroundColor: "transparent",
    border: 0,
    borderRadius: 0,
    padding: 0,
    color: "white",
  };
  const inputField = useRef(null);
  useEffect(() => {
    inputField.current = document.querySelectorAll(".input-field");

    inputField.current.forEach((element) => {
      element.style.boxShadow = "inset 0 -1px 0 #ddd";
    });
  });
  return (
    <div className="mb-3 py-3">
      <label className="form-label text-white text-uppercase">{name}</label>
      <input
        type={type}
        className="form-control input-field"
        style={inputStyle}
        onChange={clickTrigger}
      />
    </div>
  );
};

export default InputField;
