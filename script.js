"use strict";

const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".btn-close--modal");
const btnShowModal = document.querySelectorAll(".btn-show-modal");
const overlay = document.querySelector(".overlay");
const nav = document.querySelector(".nav--bar");
const navItems = document.querySelector(".nav--items");

// Modal get started window
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

// Nav menu Fade Animation

const handleHover = function (e) {
  if (e.target.classList.contains("nav--link")) {
    const link = e.target;
    const siblings = e.target
      .closest(".nav--bar")
      .querySelectorAll(".nav--link");
    const logo = e.target.closest(".nav--bar").querySelector("img");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener("mouseover", handleHover.bind(0.5));

nav.addEventListener("mouseout", handleHover.bind(1));

// Page Navigation

navItems.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav--link")) {
    const id = e.target.getAttribute("href");
    if (id === "#") return;
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
