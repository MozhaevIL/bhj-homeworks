const popup = document.getElementById('modal_main');
const popupClose = Array.from(document.getElementsByClassName('modal__close'));
const popupSwitch = document.querySelector('.show-success');
const popupSucess = document.getElementById('modal_success');
const buttonSucess = document.querySelector('.btn_success');

function closeAllPopups() {
    popup.className = "modal";
    popupSucess.className = "modal"
}


for (let item of popupClose) {
    item.onclick = () => {
      closeAllPopups()
    }
}

popupSwitch.onclick = () => {
    popupSucess.className = "modal modal_active";
}

buttonSucess.onclick = () => {
    closeAllPopups()
}

popup.className = "modal modal_active";

