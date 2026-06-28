export let cart = JSON.parse(localStorage.getItem('cart')) || [];

// if (!cart) {
//   cart = [{
//     productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
//     quantity: 2,
//   }, {
//     productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
//     quantity: 1
//   }];
// }

export function updateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  const cartQuantityElement = document.querySelector('.js-cart-quantity');

  if (cartQuantityElement) {
    cartQuantityElement.innerHTML = cartQuantity;
  }

  const checkoutCountElement = document.querySelector('.js-checkout-count');

  if (checkoutCountElement) {
    checkoutCountElement.innerHTML = `
      Checkout (<a class="return-to-home-link"
      href="amazon.html">${cartQuantity} items</a>)
    `;
  }
}

function saveToStorage() {
    localStorage.setItem('cart',JSON.stringify(cart));
}   

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

        saveToStorage();
}

export function removeFromCart(productId) {

    const newCart = [];

    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    });
    
    cart = newCart;

    saveToStorage();
}

export function updateQuantity(productId, newQuantity) {
    cart.forEach((cartItem) => {
        if (cartItem.productId === productId) {
            cartItem.quantity = newQuantity
        }
    });

    saveToStorage();
}