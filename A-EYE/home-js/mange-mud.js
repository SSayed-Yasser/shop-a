import {products} from '../shop-js/products.js';

// new
let allProducts = products.filter(products => products.mod === "glass");
let proudctHTML = '';
allProducts.slice(0, 10).forEach((products) => {
    proudctHTML += `
        <div class="div-new2">
            <div class="sale-div sale-div1">
              <h6 class="sale-h6">Sale</h6>
              <h6 class="sale-h6">${products.sale}%</h6>
            </div>
          <div class="img-new-hiddeimg">
            <img src="${products.img}" alt="" class="img-new-products">
          </div>
          <div class="lens-div">
            <h5 class="left9 left55">Lens Typ:</h5>
            <h5 class="left10 left55">${products.lens}</h5>
          </div>
          <button class="quick-add-button-css-1 button-animation">QUICK ADD</button>
          <h4 class="new-name-h4">${products.name}</h4>
          <div class="price-div1">
            <p class="prive-without-sele">${products.price} EG</p>
            <p class="prive-with-sele">${products.price-(products.price*products.sale/100)} EG</p>
          </div>
        </div>
    `; 
});
document.querySelector('.scroll-content').innerHTML = proudctHTML;

// accs
let accProducts = products.filter(products => products.mod === "acc");
let accsHTML = '';
accProducts.slice(0, 10).forEach((products) => {
    accsHTML += `
        <div class="div-accs" style=" background-image: url(${products.img});">
          <div class="back-filter">
            <h3 class="accs-h4">${products.name}</h43>
              <p class="discription">${products.discr}<p class="discription1">one year warranty</p></p>
              <div class="sale-div12">
                <h6 class="sale-h6">Sale</h6>
                <h6 class="sale-h6">${products.sale}%</h6>
              </div>
              <button class="button-acc button-animation2">Bay Now</button>
              <div class="price-div12">
                <p class="prive-without-sele2">${products.price} EG</p>
                <p class="prive-with-sele2">${products.price-(products.price*products.sale/100)} EG</p>
              </div>
          </div>
        </div>
    `; 
});
document.querySelector('.scroll-content2').innerHTML = accsHTML;


// new
let offersProducts = products.filter(products => products.mod === "off");
let proudct1HTML = '';
offersProducts.slice(0, 10).forEach((products) => {
    proudct1HTML += `
        <div class="div-accs" style=" background-image: url(${products.img});">
          <div class="back-filter">
            <h3 class="accs-h4">${products.name}</h43>
              <p class="discription">${products.discr}<p class="discription1">one year warranty</p></p>
              <div class="sale-div12">
                <h6 class="sale-h6">Sale</h6>
                <h6 class="sale-h6">${products.sale}%</h6>
              </div>
              <button class="button-acc button-animation2">Bay Now</button>
              <div class="price-div12">
                <p class="prive-without-sele2">${products.price} EG</p>
                <p class="prive-with-sele2">${products.price-(products.price*products.sale/100)} EG</p>
              </div>
          </div>
        </div>
    `; 
});
document.querySelector('.scroll-content23').innerHTML = proudct1HTML;