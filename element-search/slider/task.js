const sliderItems = Array.from(document.getElementsByClassName("slider__item"));
let slideNumber = 0;

const prevButton = document.querySelector(".slider__arrow_prev");
prevButton.onclick = () => {
    const activeSlide = document.querySelector(".slider__item_active")
    activeSlide.className = "slider__item";
    if (slideNumber === 0) {
        slideNumber = sliderItems.length - 1;
    } else {
        slideNumber -= 1;
    }
    sliderItems[slideNumber].className = "slider__item slider__item_active";
}

const nextButton = document.querySelector(".slider__arrow_next");
nextButton.onclick = () => {
    const activeSlide = document.querySelector(".slider__item_active")
    activeSlide.className = "slider__item";
    if (slideNumber === sliderItems.length - 1) {
        slideNumber = 0;
    } else {
        slideNumber += 1;
    }
    sliderItems[slideNumber].className = "slider__item slider__item_active";
}

const dots = Array.from(document.getElementsByClassName("slider__dot"));
for (let dot of dots) {
    dot.onclick = () => {
        const activeSlide = document.querySelector(".slider__item_active")
        activeSlide.className = "slider__item";
        sliderItems[dots.indexOf(dot)].className = "slider__item slider__item_active";
    }
}