import React from "react";

const SimpleButton = ({ classes, size, color, label, icon }) => {
  return (
    <button
      className={`btn btn-${size} btn-${color} d-flex align-items-center text-center gap-1 ${classes} `}>
      {label != null ? <span className="text-center">{label}</span> : null}
      {icon != null ? icon : null}
    </button>
  );
};

export default SimpleButton;
