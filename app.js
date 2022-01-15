const navList = document.querySelector(".nav-list");
const hamburger = document.querySelector(".desktop-hamburger");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navList.classList.toggle("is-active");
})