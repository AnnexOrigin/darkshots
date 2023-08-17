import React, { useEffect } from "react";

const Modal = ({ modalName, modalSize, modalTitle, modalContent }) => {
  return (
    <>
      <div
        class="modal fade"
        id={`${modalName}`}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class={`modal-dialog ${modalSize != null ? modalSize : ""} `}>
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                {modalTitle}
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {modalContent}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
