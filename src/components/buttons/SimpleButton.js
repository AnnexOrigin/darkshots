import React from "react";

const SimpleButton = ({ size, color, label }) => {
  return <button className={`btn btn-${size} btn-${color}`}>{label}</button>;
};

export default SimpleButton;
