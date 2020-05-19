const menuLink = document.getElementsByClassName('menu__link');
const menuItems = document.getElementsByClassName('menu__item');
const menuSubs = document.querySelectorAll("ul.menu_sub");

for (let menuItem of menuItems) {
    const subMenu = menuItem.querySelector("ul.menu_sub");
    menuItem.onclick = () => {
    if (subMenu) {
        for (menuSubChild of menuSubs) {
          menuSubChild.className = "menu menu_sub";
        }
        subMenu.className = "menu menu_sub menu_active";
        return false;
    }
  }
}

//не понял, в чем суть задания с двумя меню. Просто добавить в html дополнительный класс к каждому меню и прописать в селекторах классов по два класса?
