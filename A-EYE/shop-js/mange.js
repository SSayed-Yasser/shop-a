// mange header color select defuclte
document.getElementById('all-glasses-header').style.color = '#6d0d00';

// mange sections select defuclte
document.getElementById('glasses-se').style.display = 'block';
document.getElementById('accessories-se').style.display = 'none';
document.getElementById('offers-se').style.display = 'none';
document.getElementById('contact-se').style.display = 'none';

// mange sections and color
function allHeader() {
  document.getElementById('discrption').innerHTML = 'Home > Shop > All Glasses > All-Glasses';
  document.getElementById('all-glasses-header').style.color = '#6d0d00';
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
  document.getElementById('acces-header').style.color = '#6d0d00';
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
  document.getElementById('offers-header').style.color = '#6d0d00';
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
  document.getElementById('contact-header').style.color = '#6d0d00';
  
  document.getElementById('glasses-se').style.display = 'none';
  document.getElementById('accessories-se').style.display = 'none';
  document.getElementById('offers-se').style.display = 'none';
  document.getElementById('contact-se').style.display = 'block';
}


// mange header color select defuclte
document.getElementById('main-header-all').style.color = '#6d0d00';

// mange sections select defuclte
document.getElementById('allMain').style.display = 'grid';
document.getElementById('menMain').style.display = 'none';
document.getElementById('womenMain').style.display = 'none';
document.getElementById('childrenMain').style.display = 'none';
document.getElementById('sunMain').style.display = 'none';

function allMainHeader() {
  localStorage.clear("keyv")
  localStorage.setItem("keyv", "155")
  document.getElementById('viewblock').style.opacity = '0.4';
  document.getElementById('viewgriad').style.opacity = '1.5';

  document.getElementById('discrption').innerHTML = 'Home > Shop > All Glasses > All-Glasses';

  document.getElementById('main-header-all').style.color = '#6d0d00';
  document.getElementById('main-header-men').style.color = '#000000';
  document.getElementById('main-header-women').style.color = '#000000';
  document.getElementById('main-header-chil').style.color = '#000000';
  document.getElementById('main-header-sun').style.color = '#000000';

  document.getElementById('allMain').style.display = 'grid';
  document.getElementById('allMain-block').style.display = 'none';
  document.getElementById('menMain2').style.display = 'none';
  document.getElementById('menMain').style.display = 'none';
  document.getElementById('womenMain').style.display = 'none';
  document.getElementById('childrenMain').style.display = 'none';
  document.getElementById('sunMain').style.display = 'none';
  viewgriadfu()
}
function menHeader() {
  localStorage.clear("keyv")
  localStorage.setItem("keyv", "255")
  document.getElementById('viewblock').style.opacity = '0.4';
  document.getElementById('viewgriad').style.opacity = '1.5';

  document.getElementById('discrption').innerHTML = 'Home > Shop > All Glasses > Men`s';

  document.getElementById('allMain-block').style.display = 'none';
  document.getElementById('main-header-all').style.color = '#000000';
  document.getElementById('main-header-men').style.color = '#6d0d00';
  document.getElementById('main-header-women').style.color = '#000000';
  document.getElementById('main-header-chil').style.color = '#000000';
  document.getElementById('main-header-sun').style.color = '#000000';

  document.getElementById('allMain').style.display = 'none';
  document.getElementById('menMain').style.display = 'grid';
  document.getElementById('menMain2').style.display = 'none';
  document.getElementById('womenMain').style.display = 'none';
  document.getElementById('childrenMain').style.display = 'none';
  document.getElementById('sunMain').style.display = 'none';
  viewgriadfu()
}
function womenHeader() {
  localStorage.clear("keyv")
  localStorage.setItem("keyv", "355")
  document.getElementById('viewblock').style.opacity = '0.4';
  document.getElementById('viewgriad').style.opacity = '1.5';

  document.getElementById('discrption').innerHTML = 'Home > Shop > All Glasses > Women`s';

  document.getElementById('allMain-block').style.display = 'none';
  document.getElementById('main-header-all').style.color = '#000000';
  document.getElementById('main-header-men').style.color = '#000000';
  document.getElementById('main-header-women').style.color = '#6d0d00';
  document.getElementById('main-header-chil').style.color = '#000000';
  document.getElementById('main-header-sun').style.color = '#000000';

  document.getElementById('allMain').style.display = 'none';
  document.getElementById('menMain').style.display = 'none';
  document.getElementById('menMain2').style.display = 'none';
  document.getElementById('womenMain').style.display = 'grid';
  document.getElementById('childrenMain').style.display = 'none';
  document.getElementById('sunMain').style.display = 'none';
  viewgriadfu()
}
function childrenHeader() {
  localStorage.clear("keyv")
  localStorage.setItem("keyv", "455")
  document.getElementById('viewblock').style.opacity = '0.4';
  document.getElementById('viewgriad').style.opacity = '1.5';

  document.getElementById('discrption').innerHTML = 'Home > Shop > All Glasses > Children';

  document.getElementById('allMain-block').style.display = 'none';
  document.getElementById('main-header-all').style.color = '#000000';
  document.getElementById('main-header-men').style.color = '#000000';
  document.getElementById('main-header-women').style.color = '#000000';
  document.getElementById('main-header-chil').style.color = '#6d0d00';
  document.getElementById('main-header-sun').style.color = '#000000';

  document.getElementById('allMain').style.display = 'none';
  document.getElementById('menMain').style.display = 'none';
  document.getElementById('menMain2').style.display = 'none';
  document.getElementById('womenMain').style.display = 'none';
  document.getElementById('childrenMain').style.display = 'grid';
  document.getElementById('sunMain').style.display = 'none';
  viewgriadfu()
}
function sunHeader() {
  localStorage.clear("keyv")
  localStorage.setItem("keyv", "555")
  document.getElementById('viewblock').style.opacity = '0.4';
  document.getElementById('viewgriad').style.opacity = '1.5';

  document.getElementById('discrption').innerHTML = 'Home > Shop > All Glasses > Sun Glasses';

  document.getElementById('allMain-block').style.display = 'none';
  document.getElementById('main-header-all').style.color = '#000000';
  document.getElementById('main-header-men').style.color = '#000000';
  document.getElementById('main-header-women').style.color = '#000000';
  document.getElementById('main-header-chil').style.color = '#000000';
  document.getElementById('main-header-sun').style.color = '#6d0d00';

  document.getElementById('allMain').style.display = 'none';
  document.getElementById('menMain').style.display = 'none';
  document.getElementById('menMain2').style.display = 'none';
  document.getElementById('womenMain').style.display = 'none';
  document.getElementById('childrenMain').style.display = 'none';
  document.getElementById('sunMain').style.display = 'grid';
  viewgriadfu()
}


// mange header viewer select defuclte
document.getElementById('viewblock').style.opacity = '0.4';
document.getElementById('viewgriad').style.opacity = '1.5';

// mange sections select defuclte
document.getElementById('allMain').style.display = 'grid';
document.getElementById('allMain-block').style.display = 'none';
document.getElementById('menMain').style.display = 'none';
document.getElementById('menMain2').style.display = 'none';
document.getElementById('womenMain').style.display = 'none';
document.getElementById('womenMain2').style.display = 'none';
document.getElementById('childrenMain').style.display = 'none';
document.getElementById('childrenMain2').style.display = 'none';
document.getElementById('sunMain').style.display = 'none';
document.getElementById('sunMain2').style.display = 'none';
localStorage.setItem("keyv", "155")

function viewgriadfu() {
  if (localStorage.getItem("keyv") === "155") {
    document.getElementById('viewblock').style.opacity = '0.4';
    document.getElementById('viewgriad').style.opacity = '1.5';

    document.getElementById('allMain').style.display = 'grid';
    document.getElementById('allMain-block').style.display = 'none';
    document.getElementById('menMain').style.display = 'none';
    document.getElementById('menMain2').style.display = 'none';
    document.getElementById('womenMain').style.display = 'none';
    document.getElementById('womenMain2').style.display = 'none';
    document.getElementById('childrenMain').style.display = 'none';
    document.getElementById('childrenMain2').style.display = 'none';
    document.getElementById('sunMain').style.display = 'none';
    document.getElementById('sunMain2').style.display = 'none';
  } else if (localStorage.getItem("keyv") === "255") {
    document.getElementById('viewblock').style.opacity = '0.4';
    document.getElementById('viewgriad').style.opacity = '1.5';

    document.getElementById('allMain').style.display = 'none';
    document.getElementById('allMain-block').style.display = 'none';
    document.getElementById('menMain').style.display = 'grid';
    document.getElementById('menMain2').style.display = 'none';
    document.getElementById('womenMain').style.display = 'none';
    document.getElementById('womenMain2').style.display = 'none';
    document.getElementById('childrenMain').style.display = 'none';
    document.getElementById('childrenMain2').style.display = 'none';
    document.getElementById('sunMain').style.display = 'none';
    document.getElementById('sunMain2').style.display = 'none';

  } else if (localStorage.getItem("keyv") === "355") {
    document.getElementById('viewblock').style.opacity = '0.4';
    document.getElementById('viewgriad').style.opacity = '1.5';

    document.getElementById('allMain').style.display = 'none';
    document.getElementById('allMain-block').style.display = 'none';
    document.getElementById('menMain').style.display = 'none';
    document.getElementById('menMain2').style.display = 'none';
    document.getElementById('womenMain').style.display = 'grid';
    document.getElementById('womenMain2').style.display = 'none';
    document.getElementById('childrenMain').style.display = 'none';
    document.getElementById('childrenMain2').style.display = 'none';
    document.getElementById('sunMain').style.display = 'none';
    document.getElementById('sunMain2').style.display = 'none';
  } else if (localStorage.getItem("keyv") === "455") {
    document.getElementById('viewblock').style.opacity = '0.4';
    document.getElementById('viewgriad').style.opacity = '1.5';

    document.getElementById('allMain').style.display = 'none';
    document.getElementById('allMain-block').style.display = 'none';
    document.getElementById('menMain').style.display = 'none';
    document.getElementById('menMain2').style.display = 'none';
    document.getElementById('womenMain').style.display = 'none';
    document.getElementById('womenMain2').style.display = 'none';
    document.getElementById('childrenMain').style.display = 'grid';
    document.getElementById('childrenMain2').style.display = 'none';
    document.getElementById('sunMain').style.display = 'none';
    document.getElementById('sunMain2').style.display = 'none';
  } else if (localStorage.getItem("keyv") === "555") {
    document.getElementById('viewblock').style.opacity = '0.4';
    document.getElementById('viewgriad').style.opacity = '1.5';

    document.getElementById('allMain').style.display = 'none';
    document.getElementById('allMain-block').style.display = 'none';
    document.getElementById('menMain').style.display = 'none';
    document.getElementById('menMain2').style.display = 'none';
    document.getElementById('womenMain').style.display = 'none';
    document.getElementById('womenMain2').style.display = 'none';
    document.getElementById('childrenMain').style.display = 'none';
    document.getElementById('childrenMain2').style.display = 'none';
    document.getElementById('sunMain').style.display = 'grid';
    document.getElementById('sunMain2').style.display = 'none';
  }
}
function viewblockfu() {
  if (localStorage.getItem("keyv") === "155") {
    document.getElementById('viewblock').style.opacity = '1.5';
    document.getElementById('viewgriad').style.opacity = '0.4';

    document.getElementById('allMain').style.display = 'none';
    document.getElementById('allMain-block').style.display = 'grid';
    document.getElementById('menMain').style.display = 'none';
    document.getElementById('menMain2').style.display = 'none';
    document.getElementById('womenMain').style.display = 'none';
    document.getElementById('womenMain2').style.display = 'none';
    document.getElementById('childrenMain').style.display = 'none';
    document.getElementById('childrenMain2').style.display = 'none';
    document.getElementById('sunMain').style.display = 'none';
    document.getElementById('sunMain2').style.display = 'none';

  } else if (localStorage.getItem("keyv") === "255") {
    document.getElementById('viewblock').style.opacity = '1.5';
    document.getElementById('viewgriad').style.opacity = '0.4';

    document.getElementById('allMain').style.display = 'none';
    document.getElementById('allMain-block').style.display = 'none';
    document.getElementById('menMain').style.display = 'none';
    document.getElementById('menMain2').style.display = 'grid';
    document.getElementById('womenMain').style.display = 'none';
    document.getElementById('womenMain2').style.display = 'none';
    document.getElementById('childrenMain').style.display = 'none';
    document.getElementById('childrenMain2').style.display = 'none';
    document.getElementById('sunMain').style.display = 'none';
    document.getElementById('sunMain2').style.display = 'none';

  }  else if (localStorage.getItem("keyv") === "355") {
    document.getElementById('viewblock').style.opacity = '1.5';
    document.getElementById('viewgriad').style.opacity = '0.4';

    document.getElementById('allMain').style.display = 'none';
    document.getElementById('allMain-block').style.display = 'none';
    document.getElementById('menMain').style.display = 'none';
    document.getElementById('menMain2').style.display = 'none';
    document.getElementById('womenMain').style.display = 'none';
    document.getElementById('womenMain2').style.display = 'grid';
    document.getElementById('childrenMain').style.display = 'none';
    document.getElementById('childrenMain2').style.display = 'none';
    document.getElementById('sunMain').style.display = 'none';
    document.getElementById('sunMain2').style.display = 'none';
  } else if (localStorage.getItem("keyv") === "455") {
    document.getElementById('viewblock').style.opacity = '1.5';
    document.getElementById('viewgriad').style.opacity = '0.4';

    document.getElementById('allMain').style.display = 'none';
    document.getElementById('allMain-block').style.display = 'none';
    document.getElementById('menMain').style.display = 'none';
    document.getElementById('menMain2').style.display = 'none';
    document.getElementById('womenMain').style.display = 'none';
    document.getElementById('womenMain2').style.display = 'none';
    document.getElementById('childrenMain').style.display = 'none';
    document.getElementById('childrenMain2').style.display = 'grid';
    document.getElementById('sunMain').style.display = 'none';
    document.getElementById('sunMain2').style.display = 'none';
  } else if (localStorage.getItem("keyv") === "555") {
    document.getElementById('viewblock').style.opacity = '1.5';
    document.getElementById('viewgriad').style.opacity = '0.4';

    document.getElementById('allMain').style.display = 'none';
    document.getElementById('allMain-block').style.display = 'none';
    document.getElementById('menMain').style.display = 'none';
    document.getElementById('menMain2').style.display = 'none';
    document.getElementById('womenMain').style.display = 'none';
    document.getElementById('womenMain2').style.display = 'none';
    document.getElementById('childrenMain').style.display = 'none';
    document.getElementById('childrenMain2').style.display = 'none';
    document.getElementById('sunMain').style.display = 'none';
    document.getElementById('sunMain2').style.display = 'grid';
  }
}