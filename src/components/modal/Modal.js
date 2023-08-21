import React from "react";
const Modal = ({ title, id, children, closeModal, backdrop }) => {
  const isStatic = backdrop == "static";
  return (
    <>
      <div
        class="modal fade"
        id={id}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        {...(isStatic && {
          "data-bs-backdrop": "static",
          "data-bs-keyboard": "false",
        })}
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
