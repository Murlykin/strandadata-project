document.addEventListener("DOMContentLoaded", () => {
  const openButtons = document.querySelectorAll(".open-modal");

  // открытие нужного модального окна
  openButtons.forEach(button => {
    button.addEventListener("click", () => {
      const modalSelector = button.getAttribute("data-modal"); // какой модал открывать
      const title = button.getAttribute("data-modal-title");   // какой заголовок вставить
      const modal = document.querySelector(modalSelector);

      if (!modal) return;

      const modalTitle = modal.querySelector(".form-text");
      if (modalTitle) modalTitle.textContent = title;

      modal.classList.remove("is-hidden");
    });
  });

  // закрытие по кнопке [x]
  document.querySelectorAll("[data-modal-close]").forEach(btn => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".backdrop");
      if (modal) modal.classList.add("is-hidden");
    });
  });

  // закрытие по клику на фон
  document.querySelectorAll(".backdrop").forEach(modal => {
    modal.addEventListener("click", e => {
      if (e.target === modal) modal.classList.add("is-hidden");
    });
  });
});