const menuItems = Array.from(document.getElementsByClassName('menu__item'));
const menuSubs = Array.from(document.querySelectorAll("ul.menu_sub"));

function closeMenu(menu) {
  menu.classList.remove("menu_active");
}


for (let menuItem of menuItems) {
    const subMenu = menuItem.querySelector("ul.menu_sub");
    const menuLink = menuItem.querySelector("a.menu__link");
    menuLink.onclick = () => {
    if (subMenu) {
        if(subMenu.classList.contains("menu_active")) {
          closeMenu(subMenu);
          } else {
            for (menuSubChild of menuSubs) {
              closeMenu(menuSubChild);
             }
           subMenu.classList.add("menu_active");
          }
        return false;
      } 
    }
  }
