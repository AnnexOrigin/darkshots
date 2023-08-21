const hideModal = (modalId) => {
  const backdrop = document.querySelector(".modal-backdrop");
  const modal = document.getElementById(modalId);
  if (modal.classList.contains("show")) {
    modal.classList.remove("show");
    // backdrop.style.display = "none";
    // backdrop.remove();
  }
};

export default hideModal;
