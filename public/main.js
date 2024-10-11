const navmenu = document.querySelector(".nav-menu");
const toggle_nav = document.querySelector(".toggle-nav-menu");
const menu_item = document.querySelectorAll(".nav-menu li");
console.log(menu_item);

document.onclick = function (e) {
  for (var i = 0; i < menu_item.length; i++) {
    menu_item[i].classList.remove("active");
    if (menu_item[i].contains(e.target)) {
      menu_item[i].classList.add("active");
    }
  }
  if (toggle_nav.contains(e.target)) {
    // Click on the toggle icon
    navmenu.classList.toggle("max-lg:hidden");
  } else {
    //Click outside toggle menu icon
    if (!navmenu.classList.contains("max-lg:hidden")) {
      navmenu.classList.add("max-lg:hidden");
    }
  }
};
