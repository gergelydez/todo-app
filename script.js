const input = document.querySelector(".input");
const output = document.querySelector(".output");
const addbtn = document.querySelector(".addbtn");
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const nav = document.querySelector(".nav");
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

////Todo
const lineThr = function () {
  this.firstElementChild.classList.toggle("checked");
};
addbtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (input.value === "") {
    openModal();
  } else {
    const todoEl = document.createElement("li");
    todoEl.innerHTML = `<h1>${input.value}</h1> 
     <i class="delete fas fa-trash"></i>`;

    output.appendChild(todoEl);
    input.value = "";
    todoEl.addEventListener("click", lineThr);
  }

  document.querySelectorAll(".delete").forEach((it) =>
    it.addEventListener("click", function (e) {
      e.preventDefault();
      this.parentElement.remove();
    })
  );
});
