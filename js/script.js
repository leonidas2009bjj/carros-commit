//menu
let menu = document.querySelector(".menu-icon");

menu.onclick = () => {
  menu.classList.toggle("move");
};

const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// mantém o tema salvo
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggleBtn.innerHTML = '<i class="bx bx-sun"></i>';
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.innerHTML = '<i class="bx bx-sun"></i>';
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.innerHTML = '<i class="bx bx-moon"></i>';
  }
});

const reveals = document.querySelectorAll(".rental-box, .trend-box, .team-box");

window.addEventListener("scroll", () => {
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});
