const navToggler = document.querySelector(".navbar-toggler");
const nav = document.querySelector("nav ul");

navToggler.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
