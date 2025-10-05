document.addEventListener("DOMContentLoaded", () => {
  const openButtons = document.querySelectorAll(".open-modal");

  // open the window
  openButtons.forEach(button => {
    button.addEventListener("click", e => {
      e.preventDefault();
      const modalSelector = button.getAttribute("data-modal");
      const title = button.getAttribute("data-modal-title");
      const modal = document.querySelector(modalSelector);

      if (!modal) return;


      const modalTitle = modal.querySelector(".form-text");
      if (modalTitle && title) {
        modalTitle.textContent = title;
      }

      modal.classList.add("active");
    });
  });

  // close by [x]
  document.querySelectorAll("[data-modal-close]").forEach(btn => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".backdrop");
      if (modal) modal.classList.remove("active");
    });
  });

  // close by clicking on the background
  document.querySelectorAll(".backdrop").forEach(modal => {
    modal.addEventListener("click", e => {
      if (e.target === modal) {
        modal.classList.remove("active");
      }
    });
  });
});