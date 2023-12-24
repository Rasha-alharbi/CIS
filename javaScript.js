const year = (document.getElementById("current-year").innerHTML +=
  new Date().getFullYear());

// const mobileBtn = document.getElementById("mobile-btn");
// const mobileMenu = document.getElementById("mobile-menu");

// mobileBtn.addEventListener("click", () => {
//   mobileMenu.classList.toggle("visible");
// });

function menu() {
  const btn = document.getElementById("mobile-menu");
  if (btn.style.display === "block") {
    btn.style.display = "none";
  } else {
    btn.style.display = "block";
  }
}
