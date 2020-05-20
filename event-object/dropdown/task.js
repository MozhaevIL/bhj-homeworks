const dropdownValue = document.querySelector(".dropdown  .dropdown__value");
const dropdownList = document.querySelector(".dropdown  .dropdown__list");
const dropdownItems = Array.from(document.querySelectorAll(".dropdown  .dropdown__item"));

function dropdownHandler() {
   dropdownList.className = "dropdown__list dropdown__list_active";
}

function itemHandler(event) {
    dropdownList.className = "dropdown__list";
    dropdownValue.textContent = this.textContent;
    event.preventDefault()
}

dropdownValue.addEventListener("click", dropdownHandler);

for (let item of dropdownItems) {
    item.addEventListener("click", itemHandler);
}