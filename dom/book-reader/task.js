const fontButtons = Array.from(document.querySelectorAll(".book__control_font-size .font-size"));
const colorButtons = Array.from(document.querySelectorAll(".book__control_color .color"));
const bgButtons = Array.from(document.querySelectorAll(".book__control_background .color"));

const book = document.querySelector(".book")

for (let fontButton of fontButtons) {
    fontButton.addEventListener("click", (event) => {
        const activeFontButton = document.querySelector(".book__control_font-size .font-size_active");
        activeFontButton.classList.remove("font-size_active");
        fontButton.classList.add("font-size_active");
        const activeButtonData = fontButton.dataset.size;
        if (activeButtonData === "small") {
            book.classList.add("book_fs-small");
            book.classList.remove("book_fs-big");
        } else if (activeButtonData === "big") {
            book.classList.add("book_fs-big");
            book.classList.remove("book_fs-small");
        } else {
            book.classList.remove("book_fs-small", "book_fs-big")
        }

        event.preventDefault();
    })
}

for (let colorButton of colorButtons) {
    colorButton.addEventListener("click", (event) => {
        const activeColorButton = document.querySelector(".book__control_color .color_active");
        activeColorButton.classList.remove("color_active");
        colorButton.classList.add("color_active");
        const activeButtonData = colorButton.dataset.color;
        if (activeButtonData === "gray") {
            book.classList.remove("book_color-whitesmoke");
            book.classList.add("book_color-gray"); 
        } else if (activeButtonData === "whitesmoke") {
            book.classList.remove("book_color-gray");
            book.classList.add("book_color-whitesmoke");
        } else {
            book.classList.remove("book_color-whitesmoke", "book_color-gray");
        }
       

        event.preventDefault();
    })
}

for (let bgButton of bgButtons) {
    bgButton.addEventListener("click", (event) => {
        const activeBgButton = document.querySelector(".book__control_background .color_active");
        activeBgButton.classList.remove("color_active");
        bgButton.classList.add("color_active");
        const activeButtonData = bgButton.dataset.color;
        if (activeButtonData === "black") {
            book.classList.remove("book_bg-gray");
            book.classList.add("book_bg-black"); 
        } else if (activeButtonData === "gray") {
            book.classList.remove("book_bg-black");
            book.classList.add("book_bg-gray");
        } else {
            book.classList.remove("book_bg-gray", "book_bg-black");
        }
       

        event.preventDefault();
    })
}