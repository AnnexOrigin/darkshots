import React from "react";

const SimpleButton = ({ classes, value, color, label, icon, onClick }) => {
  return (
    <button
      className={`btn btn-sm btn-${color} d-flex align-items-center text-center gap-1 ${classes} `}
      value={value}
      onClick={onClick}
    >
      {label != null ? <span className="text-center">{label}</span> : null}
      {icon != null ? icon : null}
    </button>
  );
};

export default SimpleButton;
