import React from "react";
const Modal = ({ title, id, children, showModal, closeModal, backdrop }) => {
  let modalClasses = "modal";
  let backdropAttributes = {};

  if (showModal) {
    modalClasses += " show";
  }

  if (backdrop === "static") {
    backdropAttributes = {
      "data-bs-backdrop": "static",
      "data-bs-keyboard": "false",
    };
  }
  return (
    <>
      {showModal && (
        <div
          className={"modal fade" + modalClasses}
          id={id}
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          {...backdropAttributes}
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  {title}
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={closeModal}
                ></button>
              </div>
              {children}
            </div>
          </div>
        </div>
      )}
      {showModal && <div className="modal-backdrop"></div>}
    </>
  );
};

export default Modal;
