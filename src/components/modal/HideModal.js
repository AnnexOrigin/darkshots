const hideModal = (modalId) => {
  const backdrop = document.querySelector(".modal-backdrop");
  const modal = document.getElementById(modalId);
  if (modal.classList.contains("show")) {
    modal.classList.remove("show"); // remove class = show
    modal.style.display = "none"; // set display = none
    modal.setAttribute("aria-hidden", "true"); // set aria-hidden = true
    modal.removeAttribute("role"); // remove role = dialog
    // backdrop.classList.remove("show"); // remove role = dialog
    // backdrop.style.display = "none";
  }
  if (backdrop.classList.contains("show")) {
    backdrop.classList.remove("show");
    backdrop.style.display = "none";
  }
};

export default hideModal;
