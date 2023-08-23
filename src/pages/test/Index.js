import React, { useState } from "react";
import "../../styles/customModal.css";

const Modal = ({ isOpen, onClose, title, content }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app">
      <button className="open-modal-btn" onClick={openModal}>
        Open Modal
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Modal Title"
        content="This is the modal content."
      />
    </div>
  );
};

export default Modal;
