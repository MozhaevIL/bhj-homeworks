const popup = document.getElementById('modal_main');
const popupClose = Array.from(document.getElementsByClassName('modal__close'));
const popupSwitch = document.querySelector('.show-success');
const popupSucess = document.getElementById('modal_success');
const buttonSucess = document.querySelector('.btn_success');

function closeAllPopups() {
    popup.classList.remove("modal_active");
    popupSucess.classList.remove("modal_active");
}


for (let item of popupClose) {
    item.onclick = () => {
      closeAllPopups()
    }
}

popupSwitch.onclick = () => {
    closeAllPopups();
    popupSucess.classList.add("modal_active");
}

buttonSucess.onclick = () => {
    closeAllPopups()
}

popup.classList.add("modal_active");

