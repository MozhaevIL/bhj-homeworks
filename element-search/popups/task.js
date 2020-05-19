const popup = document.getElementById('modal_main');
const popupClose = document.getElementsByClassName('modal__close');
const popupSwitch = document.getElementsByClassName('show-success');
const popupSucess = document.getElementById('modal_success');
const buttonSucess = document.getElementsByClassName('btn_success');

function closeAllPopups() {
    popup.className = "modal";
    popupSucess.className = "modal"
}


for (let i=0; i < 3; i++) {
    popupClose[i].onclick = () => {
      closeAllPopups()
    }
}

popupSwitch[0].onclick = () => {
    popupSucess.className = "modal modal_active";
}

buttonSucess[0].onclick = () => {
    closeAllPopups()
}

popup.className = "modal modal_active";

