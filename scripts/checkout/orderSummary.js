import { formatCurrency } from "../utility/money.js";
import { products, getProduct } from "../../data/products.js";
import { cart, removeFromCart, updateCartQuantity, updateQuantity, updateDeliveryOption } from "../../data/cart.js";
import { deliveryOptions, getDeliveryOption } from "../../data/deliveryOptions.js";
import { renderPaymentSummary } from "./paymentSummary.js";
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';


export function renderOrderSummary() {

updateCartQuantity();

let cartSummaryHTML = '';

cart.forEach((cartItem) => {

    const productId = cartItem.productId; //fetchs  prdocutId of the selected cartItem 

    const matchingProduct = getProduct(productId); // gets the product from product.js using the productId

    const deliveryOptionId = cartItem.deliveryOptionId;  //gets the delivery date option selected for the cartItem

    const deliveryOption = getDeliveryOption(deliveryOptionId); //gets the delivery option respective to the id

    const today = dayjs(); //gets todays date

    const deliveryDate = today.add(
      deliveryOption.deliveryDays, 'days'  //adds deliverydays into todays date to get the delivery date
    ) 

    const dateString = deliveryDate.format(   //formats string into required form
      'dddd, MMMM D'
    );

    cartSummaryHTML += `
    <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
            <div class="delivery-date">
              Delivery date: ${dateString}
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingProduct.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${matchingProduct.name}
                </div>
                <div class="product-price">
                  $${formatCurrency(matchingProduct.priceCents)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary js-itemUpdate-button" data-product-id="${matchingProduct.id}">
                    Update
                  </span>
                  <input type="number" class="quantity-input"> 
                  <span class="save-quantity-link link-primary" data-product-id="${matchingProduct.id}">Save</span>

                  <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                ${deliveryOptionsHTML(matchingProduct, cartItem)}
              </div>
            </div>
          </div>
    `;
    });

    function deliveryOptionsHTML(matchingProduct, cartItem) {
      let html = '';

      deliveryOptions.forEach((deliveryOption) => {
        const today = dayjs();
        const deliveryDate = today.add(
          deliveryOption.deliveryDays, 'days'
        );

        const dateString = deliveryDate.format(
          'dddd, MMMM D'
        );

        const priceString = deliveryOption.priceCents === 0 ? 'FREE' : `$${formatCurrency(deliveryOption.priceCents)} -`;

        const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

        html += `
            <div class="delivery-option  js-delivery-option" 
                  data-product-id="${matchingProduct.id}" 
                  data-delivery-option-id="${deliveryOption.id}">

              <input type="radio" ${isChecked ? 'checked' : ''} 
                class="delivery-option-input"
                name="delivery-option-${matchingProduct.id}">
              <div>
                <div class="delivery-option-date">
                  ${dateString}
                </div>
                <div class="delivery-option-price">
                  ${priceString} Shipping
                </div>
              </div>
            </div>
        `
      });

        return html;
    }

    document.querySelector('.js-order-summary')
    .innerHTML = cartSummaryHTML;

    document.querySelectorAll('.js-delete-link')
        .forEach((link) => {
            link.addEventListener('click', () => {
                const productId = link.dataset.productId;
                removeFromCart(productId);
              
                // const container = document.querySelector(`.js-cart-item-container-${productId}`);

                // container.remove();
                // updateCartQuantity();
                
                renderOrderSummary();
                renderPaymentSummary();
            });
        });


    document.querySelectorAll('.js-itemUpdate-button')
    .forEach((button) => {
      button.addEventListener('click', () => {
        const productId = button.dataset.productId;

        const container = document.querySelector(`.js-cart-item-container-${productId}`);

        container.classList.add('is-editing-quantity');
      });

    });

    function updateQuantityLabel(container, updateValue) {
      const quantityLabel = container.querySelector('.quantity-label');

      quantityLabel.innerHTML = `${updateValue}`;
    } 


    document.querySelectorAll('.save-quantity-link')
    .forEach((button) => {
      button.addEventListener('click', () => {
        const productId = button.dataset.productId;
      
        const container = document.querySelector(`.js-cart-item-container-${productId}`);

        const updateValue = Number(container.querySelector('.quantity-input').value); //searching the button into the respective container

        updateQuantity(productId, updateValue);

        container.classList.remove('is-editing-quantity');
        updateCartQuantity();
        updateQuantityLabel(container, updateValue);
        renderPaymentSummary();
      });
    });

    document.querySelectorAll('.js-delivery-option')
    .forEach((element) => {
      element.addEventListener('click', () => {

      // const productId = element.dataset.productId;
      // const deliveryOptionId = element.dataset.deliveryOptionId;
      // using shorthand method

      const {productId, deliveryOptionId} = element.dataset;
      console.log(productId, deliveryOptionId);


      updateDeliveryOption(productId, deliveryOptionId);
      renderOrderSummary();
      renderPaymentSummary();
      });
    });
    
  
  }