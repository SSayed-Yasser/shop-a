// mange header color select defuclte
document.getElementById('all-glasses-header').style.color = '#0f77ff';

// mange sections select defuclte
document.getElementById('glasses-se').style.display = 'block';
document.getElementById('accessories-se').style.display = 'none';
document.getElementById('offers-se').style.display = 'none';
document.getElementById('contact-se').style.display = 'none';

// mange sections and color
function allHeader() {
  document.getElementById('discrption').innerHTML = 'Home > Shop > All Glasses > All-Glasses';
  document.getElementById('all-glasses-header').style.color = '#0f77ff';
  document.getElementById('acces-header').style.color = '#000000ae';
  document.getElementById('offers-header').style.color = '#000000ae';
  document.getElementById('contact-header').style.color = '#000000ae';

  document.getElementById('glasses-se').style.display = 'block';
  document.getElementById('accessories-se').style.display = 'none';
  document.getElementById('offers-se').style.display = 'none';
  document.getElementById('contact-se').style.display = 'none';
}
function AccessoriesHeader() {
  document.getElementById('discrption').innerHTML = 'Home > Shop > Accessories';
  document.getElementById('all-glasses-header').style.color = '#000000ae';
  document.getElementById('acces-header').style.color = '#0f77ff';
  document.getElementById('offers-header').style.color = '#000000ae';
  document.getElementById('contact-header').style.color = '#000000ae';

  document.getElementById('glasses-se').style.display = 'none';
  document.getElementById('accessories-se').style.display = 'block';
  document.getElementById('offers-se').style.display = 'none';
  document.getElementById('contact-se').style.display = 'none';
}
function OffersHeader() {
  document.getElementById('discrption').innerHTML = 'Home > Shop > Offers';
  document.getElementById('all-glasses-header').style.color = '#000000ae';
  document.getElementById('acces-header').style.color = '#000000ae';
  document.getElementById('offers-header').style.color = '#0f77ff';
  document.getElementById('contact-header').style.color = '#000000ae';

  document.getElementById('glasses-se').style.display = 'none';
  document.getElementById('accessories-se').style.display = 'none';
  document.getElementById('offers-se').style.display = 'block';
  document.getElementById('contact-se').style.display = 'none';
}
function ContactHeader() {
  document.getElementById('discrption').innerHTML = 'Home > Shop > Contant-Us';
  document.getElementById('all-glasses-header').style.color = '#000000ae';
  document.getElementById('acces-header').style.color = '#000000ae';
  document.getElementById('offers-header').style.color = '#000000ae';
  document.getElementById('contact-header').style.color = '#0f77ff';
  
  document.getElementById('glasses-se').style.display = 'none';
  document.getElementById('accessories-se').style.display = 'none';
  document.getElementById('offers-se').style.display = 'none';
  document.getElementById('contact-se').style.display = 'block';
}


// mange header color select defuclte
document.getElementById('main-header-all').style.color = '#0f77ff';

// mange sections select defuclte
document.getElementById('allMain').style.display = 'grid';
document.getElementById('menMain').style.display = 'none';
document.getElementById('womenMain').style.display = 'none';
document.getElementById('childrenMain').style.display = 'none';
document.getElementById('sunMain').style.display = 'none';

function allMainHeader() {
  document.getElementById('discrption').innerHTML = 'Home > Shop > All Glasses > All-Glasses';

  document.getElementById('main-header-all').style.color = '#0f77ff';
  document.getElementById('main-header-men').style.color = '#000000';
  document.getElementById('main-header-women').style.color = '#000000';
  document.getElementById('main-header-chil').style.color = '#000000';
  document.getElementById('main-header-sun').style.color = '#000000';

  document.getElementById('allMain').style.display = 'grid';
  document.getElementById('menMain').style.display = 'none';
  document.getElementById('womenMain').style.display = 'none';
  document.getElementById('childrenMain').style.display = 'none';
  document.getElementById('sunMain').style.display = 'none';
}
function menHeader() {
  document.getElementById('discrption').innerHTML = 'Home > Shop > All Glasses > Men`s';

  document.getElementById('main-header-all').style.color = '#000000';
  document.getElementById('main-header-men').style.color = '#0f77ff';
  document.getElementById('main-header-women').style.color = '#000000';
  document.getElementById('main-header-chil').style.color = '#000000';
  document.getElementById('main-header-sun').style.color = '#000000';

  document.getElementById('allMain').style.display = 'none';
  document.getElementById('menMain').style.display = 'grid';
  document.getElementById('womenMain').style.display = 'none';
  document.getElementById('childrenMain').style.display = 'none';
  document.getElementById('sunMain').style.display = 'none';
}
function womenHeader() {
  document.getElementById('discrption').innerHTML = 'Home > Shop > All Glasses > Women`s';

  document.getElementById('main-header-all').style.color = '#000000';
  document.getElementById('main-header-men').style.color = '#000000';
  document.getElementById('main-header-women').style.color = '#0f77ff';
  document.getElementById('main-header-chil').style.color = '#000000';
  document.getElementById('main-header-sun').style.color = '#000000';

  document.getElementById('allMain').style.display = 'none';
  document.getElementById('menMain').style.display = 'none';
  document.getElementById('womenMain').style.display = 'grid';
  document.getElementById('childrenMain').style.display = 'none';
  document.getElementById('sunMain').style.display = 'none';
}
function childrenHeader() {
  document.getElementById('discrption').innerHTML = 'Home > Shop > All Glasses > Children';

  document.getElementById('main-header-all').style.color = '#000000';
  document.getElementById('main-header-men').style.color = '#000000';
  document.getElementById('main-header-women').style.color = '#000000';
  document.getElementById('main-header-chil').style.color = '#0f77ff';
  document.getElementById('main-header-sun').style.color = '#000000';

  document.getElementById('allMain').style.display = 'none';
  document.getElementById('menMain').style.display = 'none';
  document.getElementById('womenMain').style.display = 'none';
  document.getElementById('childrenMain').style.display = 'grid';
  document.getElementById('sunMain').style.display = 'none';
}
function sunHeader() {
  document.getElementById('discrption').innerHTML = 'Home > Shop > All Glasses > Sun Glasses';

  document.getElementById('main-header-all').style.color = '#000000';
  document.getElementById('main-header-men').style.color = '#000000';
  document.getElementById('main-header-women').style.color = '#000000';
  document.getElementById('main-header-chil').style.color = '#000000';
  document.getElementById('main-header-sun').style.color = '#0f77ff';

  document.getElementById('allMain').style.display = 'none';
  document.getElementById('menMain').style.display = 'none';
  document.getElementById('womenMain').style.display = 'none';
  document.getElementById('childrenMain').style.display = 'none';
  document.getElementById('sunMain').style.display = 'grid';
}