export const cart = [];


let timeoutId;
export function addToCart(productId) {
    clearTimeout(timeoutId);
    const addedToCart =  document.querySelector(`.js-added-to-cart-${productId}`);

    addedToCart.classList.add('add-success');
      timeoutId =  setTimeout(() => {
        addedToCart.classList.remove('add-success');
    }, 2000);

    let matchingItem;
    
    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });

    const selectButtonValue = document.querySelector(`.js-quantity-selector-${productId}`).value;

    if(matchingItem) {
        matchingItem.quantity += Number(selectButtonValue); //default value = 1
    } else {
    cart.push({
        productId, //productId = productId
        quantity: Number(selectButtonValue)
    });
        
        }
}