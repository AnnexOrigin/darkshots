import React from "react";

const Modal = ({ title, id, show, onHide, children }) => {
  return (
    <>
      <div
        className={`modal fade ${show ? "show" : ""}`}
        id={id}
        tabIndex="-1"
        aria-labelledby={`${id}Label`}
        aria-hidden={!show}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id={`${id}Label`}>
                {title}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={onHide}
              ></button>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
