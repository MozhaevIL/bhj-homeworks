const quantityUp = Array.from(document.querySelectorAll(".product__quantity-control_inc"));
const quantityDown = Array.from(document.querySelectorAll(".product__quantity-control_dec"));
const quantityValue = Array.from(document.querySelectorAll(".product__quantity-value"));
const addToCart = Array.from(document.querySelectorAll(".product__add"));
const cart = document.querySelector(".cart__products");
let cartItems = [];

for(let upButton of quantityUp) {
    upButton.addEventListener("click", (evt) => {
        let value = 
        quantityValue[quantityUp.indexOf(upButton)].textContent++;
    })
}

for(let downButton of quantityDown) {
    downButton.addEventListener("click", (evt) => {
        if(quantityValue[quantityDown.indexOf(downButton)].textContent > 1) {
            quantityValue[quantityDown.indexOf(downButton)].textContent--;
        } else {
            console.log("Количество товара не может быть меньше 1");
        }
    })
}


for(let addButton of addToCart) {
    addButton.addEventListener("click", (evt)=> {
        
        cartItems = Array.from(document.querySelectorAll(".cart__product"));
        const productItem = addButton.closest(".product");
        const productId = productItem.dataset.id;
        const productImg = productItem.querySelector("img").src;
        const productQuantity = quantityValue[addToCart.indexOf(addButton)].textContent;

        function alreadyInCart(element, index, array) {
            if (element.dataset.id === productId) {
                return true;
            }
        }

        if(!cartItems.find(alreadyInCart)) {
            const itemInCart = document.createElement("div");
            itemInCart.className = "cart__product";
            itemInCart.dataset.id = productId;
            itemInCart.innerHTML = `
            <img class="cart__product-image" src=${productImg}>
            <div class="cart__product-count">${productQuantity}</div>
            `
            cart.insertAdjacentElement("afterbegin", itemInCart);
    
            cartItems.push(itemInCart);

        } else {
            const addedItemQuantityElm = cart.querySelector(`div[data-id="${productId}"] .cart__product-count`);
            addedItemQuantityElm.textContent = Number(addedItemQuantityElm.textContent) + Number(productQuantity);
        }

    })
}

