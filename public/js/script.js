const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarItems = document.getElementsByClassName("navbar-items")[0];

toggleButton.addEventListener("click", () => {
  navbarItems.classList.toggle("active");
});

document.querySelector("footer").append(`© ${new Date().getFullYear()} `);
