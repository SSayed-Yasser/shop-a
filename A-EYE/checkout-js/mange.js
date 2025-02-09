function updateCartCount() {
  const selectedProducts = JSON.parse(localStorage.getItem('selectedProducts')) || [];
  const cartCount = selectedProducts.reduce((total, product) => total + product.quantity, 0);
  document.querySelector('#cart-count').textContent = cartCount;
  document.querySelector('#cart-count1').textContent = "Items" + " " + "(" + cartCount + ")";
}
updateCartCount();

function updateTotalPrice() {
  const selectedProducts = JSON.parse(localStorage.getItem('selectedProducts')) || [];
  let totalPrice = selectedProducts.reduce((total, product) => total + (parseInt(product.price) * product.quantity), 0);
  let deliveryCost = Array.from(document.querySelectorAll('input[type="radio"]:checked')).reduce((total, radio) => total + parseInt(radio.value), 0);
  let tax = Math.round(totalPrice * 0.14);
  let finalPrice = totalPrice + tax + deliveryCost;

  document.querySelector('#items-price').textContent = totalPrice + " $";
  document.querySelector('#shipping-price').textContent = deliveryCost + " $";
  document.querySelector('#total-before-tax').textContent = (totalPrice + deliveryCost) + " $";
  document.querySelector('#tax').textContent = tax + " $";
  document.querySelector('#final-price').textContent = finalPrice + " $";
}

function updateShippingCost() {
  const deliveryOptions = document.querySelectorAll('.delivery-options input[type="radio"]');
  deliveryOptions.forEach(option => {
      option.addEventListener('change', (event) => {
          const selectedOption = event.target.value;
          const productIndex = event.target.name.split('-')[1];
          localStorage.setItem(`delivery-${productIndex}`, selectedOption);
          updateTotalPrice();
      });
  });
}

function loadCheckoutProducts() {
  const selectedProducts = JSON.parse(localStorage.getItem('selectedProducts')) || [];
  const checkoutProductsDiv = document.getElementById('checkout-products');

  checkoutProductsDiv.innerHTML = '';
  selectedProducts.forEach((product, index) => {
      const savedDeliveryOption = localStorage.getItem(`delivery-${index}`) || '0';
      const productDiv = document.createElement('div');
      productDiv.className = 'product';
      productDiv.innerHTML = `
          <img src="${product.img}" alt="">
          <div class="product-details">
              <h3>${product.name}</h3>
              <p>${product.discr}</p>
              <p>Price: ${product.price} EG</p>
              <p>Quantity: ${product.quantity}</p>
              <div class="delivery-options">
                  <label><input type="radio" name="delivery-${index}" value="0" ${savedDeliveryOption === '0' ? 'checked' : ''}> One week (Free)</label><br>
                  <label><input type="radio" name="delivery-${index}" value="50" ${savedDeliveryOption === '50' ? 'checked' : ''}> Two days (50 EG)</label><br>
                  <label><input type="radio" name="delivery-${index}" value="100" ${savedDeliveryOption === '100' ? 'checked' : ''}> Same day (100 EG)</label>
              </div>
              <button onclick="removeProduct(${index})">Remove</button>
          </div>
      `;
      checkoutProductsDiv.appendChild(productDiv);
  });

  updateTotalPrice();
  updateShippingCost();
}

function removeProduct(index) {
  let selectedProducts = JSON.parse(localStorage.getItem('selectedProducts')) || [];
  selectedProducts.splice(index, 1);
  localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
  localStorage.removeItem(`delivery-${index}`);
  loadCheckoutProducts();
}

function confirmOrder() {
  const selectedProducts = JSON.parse(localStorage.getItem('selectedProducts')) || [];
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  orders.push(selectedProducts);
  localStorage.setItem('orders', JSON.stringify(orders));
  localStorage.removeItem('selectedProducts');
  selectedProducts.forEach((product, index) => {
      localStorage.removeItem(`delivery-${index}`);
  });
  alert('Order confirmed!');
  window.location.href = 'home.html';
}

loadCheckoutProducts();
