const sliderItems = Array.from(document.getElementsByClassName("slider__item"));
let activeItemIndex = 0;
const dots = Array.from(document.getElementsByClassName("slider__dot"));

function showActiveItem(index) {
    console.log(index);
    const lastActiveItem = document.querySelector(".slider__item_active");
    const lastActiveDot = document.querySelector(".slider__dot_active");
    lastActiveItem.classList.remove("slider__item_active");
    lastActiveDot.classList.remove("slider__dot_active");
    sliderItems[index].classList.add("slider__item_active");
    dots[index].classList.add("slider__dot_active");

}



for (let dot of dots) {
    dot.onclick = () => {
        activeItemIndex = dots.indexOf(dot);
        showActiveItem(activeItemIndex);
    }
}

const prevButton = document.querySelector(".slider__arrow_prev");
prevButton.onclick = () => {
    if (activeItemIndex === 0) {
        activeItemIndex = sliderItems.length - 1;
    } else {
        activeItemIndex -= 1;
    }
    showActiveItem(activeItemIndex);
}

const nextButton = document.querySelector(".slider__arrow_next");
nextButton.onclick = () => {
    if (activeItemIndex === sliderItems.length - 1) {
        activeItemIndex = 0;
    } else {
        activeItemIndex += 1;
    }
    showActiveItem(activeItemIndex);
}
