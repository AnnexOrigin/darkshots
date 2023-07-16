import React from "react";
const Modal = ({ modalName, modalHeader, modalBody }) => {
  const modalStyle = {
    position: "relative",
    zIndex: 4,
  };
  return (
    <div
      className="modal fade"
      data-bs-backdrop="static"
      id={modalName}
      aria-hidden="true"
      aria-labelledby={modalName}
      tabIndex="-1"
    >
      <div className="modal-dialog modal-dialog-centered" style={modalStyle}>
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5 text-dark" id={modalName}>
              {modalHeader}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">{modalBody}</div>
          <div className="modal-footer"></div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
