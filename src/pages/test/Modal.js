import React, { useState } from "react";
import "../../styles/customModal.css";

const Modal = ({ isOpen, onClose, title, content }) => {
  const [isVisible, setIsVisible] = useState(isOpen);

  const openModal = () => {
    setIsVisible(true);
  };

  const closeModal = () => {
    setIsVisible(false);
  };

  return (
    <div>
      <button className="open-modal-btn" onClick={openModal}>
        Open Modal
      </button>
      {isVisible && (
        <div className="modal-wrapper">
          <div className={`modal ${isVisible ? "fade-in" : "fade-out"}`}>
            <div className="modal-content">
              <span className="close-button" onClick={closeModal}>
                &times;
              </span>
              <h2>{title}</h2>
              <p>{content}</p>
            </div>
          </div>
          <div
            className={`backdrop ${isVisible ? "fade-in" : "fade-out"}`}
            onClick={closeModal}
          />
        </div>
      )}
    </div>
  );
};

export default Modal;
