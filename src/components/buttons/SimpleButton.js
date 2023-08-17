import React from "react";

const SimpleButton = ({
  classes,
  value,
  color,
  label,
  icon,
  onClick,
  modalLink,
  modalDismiss,
  submitType,
}) => {
  const hasModalLink = modalLink != null;
  const hadModalDismiss = modalDismiss != null;
  const hasAdditionalClasses = classes != null;
  const hasIcons = icon != null;
  return (
    <button
      className={`btn btn-sm btn-${color} d-flex align-items-center text-center gap-1 
      ${hasAdditionalClasses ? classes : ""} `}
      value={value}
      onClick={onClick}
      {...(hasModalLink && {
        "data-bs-toggle": "modal",
        "data-bs-target": `#${modalLink}`,
      })}
      {...(hadModalDismiss && {
        "data-bs-dismiss": "modal",
      })}
      {...(submitType != null ? { type: submitType } : {})}
    >
      {label != null ? <span className="text-center">{label}</span> : null}
      {hasIcons ? icon : null}
    </button>
  );
};

export default SimpleButton;
