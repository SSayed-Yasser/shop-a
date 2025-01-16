import {products} from '../shop-js/products.js';

// new
let proudctHTML = '';
products.slice(0, 10).forEach((products) => {
    proudctHTML += `
        <div class="div-new2">
          <div class="img-new-hiddeimg">
            <img src="${products.img}" alt="" class="img-new-products">
          </div>
          <div class="lens-div">
            <h5 class="left9 left55">Lens Typ:</h5>
            <h5 class="left10 left55">${products.lens}</h5>
          </div>
          <button class="quick-add-button-css-1">QUICK ADD</button>
          <h4 class="new-name-h4">${products.name}</h4>
          <div class="price-div1">
            <p class="prive-without-sele">${products.price} EG</p>
            <p class="prive-with-sele">${products.price-(products.price*products.sale/100)} EG</p>
          </div>
        </div>
    `; 
});
document.querySelector('.scroll-content').innerHTML = proudctHTML;