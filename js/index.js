const menuBtn = document.querySelector(".menu-button");
const iconClose = menuBtn.querySelector(".menu-button__close");
const iconBurger = menuBtn.querySelector(".menu-button__burger");
const sidebar = document.querySelector(".sidebar");

function toggleSidebar() {
  sidebar.classList.toggle("open");
  iconClose.classList.toggle("icon-hide");
  iconBurger.classList.toggle("icon-hide");
}

function closeSidebar(e) {
  const target = e.target;

  if (target.classList.contains("nav-list_item")) {
    // sidebar.classList.remove("open");
    toggleSidebar();
  }
}

menuBtn.addEventListener("click", toggleSidebar);

sidebar.addEventListener("click", closeSidebar);
