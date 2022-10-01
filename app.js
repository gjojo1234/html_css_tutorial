const navlinks = document.querySelector(".navbar-list");
const menu = document.querySelector(".menu");
const logo = document.querySelector(".logo");

menu.addEventListener("click", () => {
  navlinks.classList.toggle("show-link");
  logo.classList.toggle("logo-hidden");
});
