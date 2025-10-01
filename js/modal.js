(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();

  (() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open1]"),
      closeModalBtn: document.querySelector("[data-modal-close1]"),
      modal: document.querySelector("[data-modal1]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();

  (() => {
    const gdpr = {
      openModalBtn: document.querySelector("[modal-open]"),
      closeModalBtn: document.querySelector("[modal-close]"),
      modal: document.querySelector("[modal]"),
    };
  
    gdpr.openModalBtn.addEventListener("click", toggleModal);
    gdpr.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      gdpr.modal.classList.toggle("is-hidden");
    }
  })();