import React from "react";

const SimpleButton = ({
  classes,
  value,
  color,
  label,
  icon,
  onClick,
  modalTarget,
  modalDismiss,
  type,
}) => {
  const hasModalLink = modalTarget != null;
  const hadModalDismiss = modalDismiss != false;
  const hasAdditionalClasses = classes != null;
  const hasIcons = icon != null;
  const hasOnclick = onClick != null;
  return (
    <button
      className={`btn btn-sm btn-${color} d-flex align-items-center text-center gap-1 
      ${hasAdditionalClasses ? classes : ""} `}
      value={value}
      {...(hasOnclick && {
        onClick: onClick,
      })}
      {...(hasModalLink && {
        "data-bs-toggle": "modal",
        "data-bs-target": `#${modalTarget}`,
      })}
      {...(hadModalDismiss && {
        "data-bs-dismiss": "modal",
      })}
      {...(type != null ? { type: type } : {})}
    >
      {label != null ? <span className="text-center">{label}</span> : null}
      {hasIcons ? icon : null}
    </button>
  );
};

export default SimpleButton;
