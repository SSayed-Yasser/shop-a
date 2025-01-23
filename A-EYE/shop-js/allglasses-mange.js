import {products} from '../shop-js/products.js';

// all grid
let allProducts = products.filter(products => products.mod === "glass");
let proudctHTML = '';
allProducts.forEach((products) => {
    proudctHTML += `
          <div class="contant-containar-all">
          <div class="sale-containar">
            <div class="sale-div">
              <h6 class="sale-h6">Sale</h6>
              <h6 class="sale-h6">${products.sale}%</h6>
            </div>
          </div>
          <img src="${products.img}" alt="sayed" class="img-all-cont">
          <div class="lens-type-dive">
            <h5>• Lens Type:&nbsp;</h5>
            <h5 id="lenstype-con">${products.lens}</h5>
          </div>
          <button class="quick-add-button-css btn liquid">QUICK ADD</button>
          <p class="name-all">${products.name}</p>
          <div class="price-div">
            <p class="prive-without-sele">${products.price} EG</p>
            <p class="prive-with-sele">${products.price-(products.price*products.sale/100)} EG</p>
          </div>
        </div>
    `; 
});
document.querySelector('.runjsarray').innerHTML = proudctHTML;

let proudct2HTML = '';
allProducts.forEach((products) => {
    proudct2HTML += `
        <div class="contant-containar-all-2">
          <div class="for-sele">
            <div class="sale-div sale-div1">
              <h6 class="sale-h6">Sale</h6>
              <h6 class="sale-h6">${products.sale}%</h6>
            </div>
            <img src="${products.img}" class="prodact-img" alt="">
          </div>
          <div class="for-contant">
            <h4 class="for-con-h">${products.name}</h4>
            <div class="lens-type-dive">
              <h5>• Lens Type:&nbsp;</h5>
              <h5 id="lenstype-con">${products.lens}</h5>
            </div>
            <div class="price-div1">
              <p class="prive-without-sele">${products.price} EG</p>
              <p class="prive-with-sele">${products.price-(products.price*products.sale/100)} EG</p>
            </div>
            <button class="quick-add-button-css btn liquid quick-2">QUICK ADD</button>
          </div>
        </div>
    `; 
});
document.querySelector('.runjsarray2').innerHTML = proudct2HTML;
// all block

// all men
let menProducts = products.filter(products => products.type === "men");
let menproudctHTML = '';
menProducts.forEach((products) => {
    menproudctHTML += `
          <div class="contant-containar-all">
          <div class="sale-containar">
            <div class="sale-div">
              <h6 class="sale-h6">Sale</h6>
              <h6 class="sale-h6">${products.sale}%</h6>
            </div>
          </div>
          <img src="${products.img}" alt="sayed" class="img-all-cont">
          <div class="lens-type-dive">
            <h5>• Lens Type:&nbsp;</h5>
            <h5 id="lenstype-con">${products.lens}</h5>
          </div>
          <button class="quick-add-button-css btn liquid">QUICK ADD</button>
          <p class="name-all">${products.name}</p>
          <div class="price-div">
            <p class="prive-without-sele">${products.price} EG</p>
            <p class="prive-with-sele">${products.price-(products.price*products.sale/100)} EG</p>
          </div>
        </div>
    `; 
});
document.querySelector('.men-containar').innerHTML = menproudctHTML;

let menproudct2HTML = '';
menProducts.forEach((products) => {
    menproudct2HTML += `
        <div class="contant-containar-all-2">
          <div class="for-sele">
            <div class="sale-div sale-div1">
              <h6 class="sale-h6">Sale</h6>
              <h6 class="sale-h6">${products.sale}%</h6>
            </div>
            <img src="${products.img}" class="prodact-img" alt="">
          </div>
          <div class="for-contant">
            <h4 class="for-con-h">${products.name}</h4>
            <div class="lens-type-dive">
              <h5>• Lens Type:&nbsp;</h5>
              <h5 id="lenstype-con">${products.lens}</h5>
            </div>
            <div class="price-div1">
              <p class="prive-without-sele">${products.price} EG</p>
              <p class="prive-with-sele">${products.price-(products.price*products.sale/100)} EG</p>
            </div>
            <button class="quick-add-button-css btn liquid quick-2">QUICK ADD</button>
          </div>
        </div>
    `; 
});
document.querySelector('.men-containar2').innerHTML = menproudct2HTML;
// all men block

// all women
let womenProducts = products.filter(products => products.type === "women");
let womenproudctHTML = '';
womenProducts.forEach((products) => {
    womenproudctHTML += `
          <div class="contant-containar-all">
          <div class="sale-containar">
            <div class="sale-div">
              <h6 class="sale-h6">Sale</h6>
              <h6 class="sale-h6">${products.sale}%</h6>
            </div>
          </div>
          <img src="${products.img}" alt="sayed" class="img-all-cont">
          <div class="lens-type-dive">
            <h5>• Lens Type:&nbsp;</h5>
            <h5 id="lenstype-con">${products.lens}</h5>
          </div>
          <button class="quick-add-button-css btn liquid">QUICK ADD</button>
          <p class="name-all">${products.name}</p>
          <div class="price-div">
            <p class="prive-without-sele">${products.price} EG</p>
            <p class="prive-with-sele">${products.price-(products.price*products.sale/100)} EG</p>
          </div>
        </div>
    `; 
});
document.querySelector('.women-containar').innerHTML = womenproudctHTML;

let womenproudct2HTML = '';
womenProducts.forEach((products) => {
    womenproudct2HTML += `
        <div class="contant-containar-all-2">
          <div class="for-sele">
            <div class="sale-div sale-div1">
              <h6 class="sale-h6">Sale</h6>
              <h6 class="sale-h6">${products.sale}%</h6>
            </div>
            <img src="${products.img}" class="prodact-img" alt="">
          </div>
          <div class="for-contant">
            <h4 class="for-con-h">${products.name}</h4>
            <div class="lens-type-dive">
              <h5>• Lens Type:&nbsp;</h5>
              <h5 id="lenstype-con">${products.lens}</h5>
            </div>
            <div class="price-div1">
              <p class="prive-without-sele">${products.price} EG</p>
              <p class="prive-with-sele">${products.price-(products.price*products.sale/100)} EG</p>
            </div>
            <button class="quick-add-button-css btn liquid quick-2">QUICK ADD</button>
          </div>
        </div>
    `; 
});
document.querySelector('.women-containar2').innerHTML = womenproudct2HTML;
// all women block

// all chil
let chilProducts = products.filter(products => products.type === "chil");
let chilproudctHTML = '';
chilProducts.forEach((products) => {
    chilproudctHTML += `
          <div class="contant-containar-all">
          <div class="sale-containar">
            <div class="sale-div">
              <h6 class="sale-h6">Sale</h6>
              <h6 class="sale-h6">${products.sale}%</h6>
            </div>
          </div>
          <img src="${products.img}" alt="sayed" class="img-all-cont">
          <div class="lens-type-dive">
            <h5>• Lens Type:&nbsp;</h5>
            <h5 id="lenstype-con">${products.lens}</h5>
          </div>
          <button class="quick-add-button-css btn liquid">QUICK ADD</button>
          <p class="name-all">${products.name}</p>
          <div class="price-div">
            <p class="prive-without-sele">${products.price} EG</p>
            <p class="prive-with-sele">${products.price-(products.price*products.sale/100)} EG</p>
          </div>
        </div>
    `; 
});
document.querySelector('.children-containar').innerHTML = chilproudctHTML;

let chilproudct2HTML = '';
chilProducts.forEach((products) => {
    chilproudct2HTML += `
        <div class="contant-containar-all-2">
          <div class="for-sele">
            <div class="sale-div sale-div1">
              <h6 class="sale-h6">Sale</h6>
              <h6 class="sale-h6">${products.sale}%</h6>
            </div>
            <img src="${products.img}" class="prodact-img" alt="">
          </div>
          <div class="for-contant">
            <h4 class="for-con-h">${products.name}</h4>
            <div class="lens-type-dive">
              <h5>• Lens Type:&nbsp;</h5>
              <h5 id="lenstype-con">${products.lens}</h5>
            </div>
            <div class="price-div1">
              <p class="prive-without-sele">${products.price} EG</p>
              <p class="prive-with-sele">${products.price-(products.price*products.sale/100)} EG</p>
            </div>
            <button class="quick-add-button-css btn liquid quick-2">QUICK ADD</button>
          </div>
        </div>
    `; 
});
document.querySelector('.children-containar2').innerHTML = chilproudct2HTML;
// all chil block

// all sun
let sunProducts = products.filter(products => products.type === "sun");
let sunproudctHTML = '';
sunProducts.forEach((products) => {
    sunproudctHTML += `
          <div class="contant-containar-all">
          <div class="sale-containar">
            <div class="sale-div">
              <h6 class="sale-h6">Sale</h6>
              <h6 class="sale-h6">${products.sale}%</h6>
            </div>
          </div>
          <img src="${products.img}" alt="sayed" class="img-all-cont">
          <div class="lens-type-dive">
            <h5>• Lens Type:&nbsp;</h5>
            <h5 id="lenstype-con">${products.lens}</h5>
          </div>
          <button class="quick-add-button-css btn liquid">QUICK ADD</button>
          <p class="name-all">${products.name}</p>
          <div class="price-div">
            <p class="prive-without-sele">${products.price} EG</p>
            <p class="prive-with-sele">${products.price-(products.price*products.sale/100)} EG</p>
          </div>
        </div>
    `; 
});
document.querySelector('.sun-containar').innerHTML = sunproudctHTML;

let sunproudct2HTML = '';
sunProducts.forEach((products) => {
    sunproudct2HTML += `
        <div class="contant-containar-all-2">
          <div class="for-sele">
            <div class="sale-div sale-div1">
              <h6 class="sale-h6">Sale</h6>
              <h6 class="sale-h6">${products.sale}%</h6>
            </div>
            <img src="${products.img}" class="prodact-img" alt="">
          </div>
          <div class="for-contant">
            <h4 class="for-con-h">${products.name}</h4>
            <div class="lens-type-dive">
              <h5>• Lens Type:&nbsp;</h5>
              <h5 id="lenstype-con">${products.lens}</h5>
            </div>
            <div class="price-div1">
              <p class="prive-without-sele">${products.price} EG</p>
              <p class="prive-with-sele">${products.price-(products.price*products.sale/100)} EG</p>
            </div>
            <button class="quick-add-button-css btn liquid quick-2">QUICK ADD</button>
          </div>
        </div>
    `; 
});
document.querySelector('.sun-containar2').innerHTML = sunproudct2HTML;
// all sun block