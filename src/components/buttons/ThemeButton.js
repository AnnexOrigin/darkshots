import React, { useEffect, useRef } from "react";
import ThemeModal from "../popups/ThemeModal";
const ThemeButton = ({
  textName,
  enableModal,
  modalName,
  modalHeader,
  modalBody,
  primary,
}) => {
  const btn = useRef(null);
  useEffect(() => {
    function showModal(val) {
      if (val == true) {
        btn.current.setAttribute("data-bs-target", "#" + modalName);
        btn.current.setAttribute("data-bs-toggle", "modal");
      }
    }
    // function buttonType(val) {
    //   if (val === false) {
    //     btn.current.classList.remove("btn-light");
    //     btn.current.classList.add("btn-transparent");
    //     btn.current.style.color = "white";
    //     btn.current.style.border = "1px solid white";
    //   }
    // }
    // buttonType(primary);
    showModal(enableModal);
  });
  return (
    <>
      {primary === false ? (
        <button
          ref={btn}
          className="btn  btn-dark btn-theme border rounded-0 mx-1 text-uppercase"
          style={{ fontFamily: "Agdasima-Bold" }}
        >
          <b>{textName ?? "Empty"}</b>
        </button>
      ) : (
        <button
          ref={btn}
          className="btn btn-light btn-theme  rounded-0 mx-1 text-uppercase"
          style={{ fontFamily: "Agdasima-Bold" }}
        >
          <b>{textName ?? "Empty"}</b>
        </button>
      )}
      {enableModal === true ? (
        <ThemeModal
          modalName={modalName}
          modalHeader={modalHeader}
          modalBody={modalBody}
        />
      ) : (
        enableModal === false
      )}
    </>
  );
};
export default ThemeButton;
