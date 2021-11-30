const body = document.querySelector("body");
const knap = document.querySelector(".mode");

function darkMode() {
  body.classList.toggle("dark");
}

knap.addEventListener("click", darkMode);
