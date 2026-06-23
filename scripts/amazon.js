import {cart} from '../data/cart.js';

let productsHTML = '';

products.forEach((products) => {
    productsHTML += `<div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${products.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${products.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${products.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${products.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(products.priceCents / 100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select class="js-quantity-selector-${products.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart js-added-to-cart-${products.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart-button" data-product-id="${products.id}">
            Add to Cart
          </button>
        </div>
`
});

document.querySelector('.products-grid')
.innerHTML = productsHTML;

    let timeoutId;

document.querySelectorAll('.js-add-to-cart-button')
.forEach((button) => {
        button.addEventListener('click', () => {
     
            clearTimeout(timeoutId);

            const { productId } = button.dataset;
            // const productId = button.dataset.productId;

           const addedToCart =  document.querySelector(`.js-added-to-cart-${productId}`);

            addedToCart.classList.add('add-success');
           timeoutId =  setTimeout(() => {
              addedToCart.classList.remove('add-success');
           }, 2000);

            let matchingItem;
            
            cart.forEach((item) => {
                if (productId === item.productId) {
                    matchingItem = item;
                }
            });

              const selectButtonValue = document.querySelector(`.js-quantity-selector-${productId}`).value;

                if(matchingItem) {
                    matchingItem.quantity += Number(selectButtonValue);
              } else {
                cart.push({
                    productId, //productId = productId
                    quantity: Number(selectButtonValue)
                });
              
              }
              
             
              let cartQuantity = 0;

              cart.forEach((item) => {
                cartQuantity += item.quantity;
              });

              document.querySelector('.js-cart-quantity')
              .innerHTML = cartQuantity;
        });
});