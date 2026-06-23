"use strict";

const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".btn-close--modal");
const btnShowModal = document.querySelectorAll(".btn-show-modal");
const overlay = document.querySelector(".overlay");
for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

btnCloseModal.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
