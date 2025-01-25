function sayedd1() {
  window.location.href = './checkout.html';
}

let slideIndex = 0;
showSlides();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}


// Get the screen width
var screenWidth = window.innerWidth;
// Print the screen width to the console
console.log("Screen width: " + screenWidth + " pixels");


//scroling
const scrollContainer = document.getElementById('scroll-content');
function scrollContentLeft() {
  scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
}
function scrollContentRight() {
  scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
}

//scroling 2
const scrollContainer2 = document.getElementById('scroll-content2');
function scrollContentLeft2() {
  scrollContainer2.scrollBy({ left: -300, behavior: 'smooth' });
}
function scrollContentRight2() {
  scrollContainer2.scrollBy({ left: 300, behavior: 'smooth' });
}

//scroling 3
const scrollContainer3 = document.getElementById('scroll-content3');
function scrollContentLeft3() {
  scrollContainer3.scrollBy({ left: -300, behavior: 'smooth' });
}
function scrollContentRight3() {
  scrollContainer3.scrollBy({ left: 300, behavior: 'smooth' });
}


// defuclte method
if (localStorage.getItem("loginMethod") === "sayed") {
  document.getElementById('part1').style.display = 'block';
  document.getElementById('part2').style.display = 'none';

  document.getElementById('nonediv').style.display = 'block';
  document.getElementById('logindiv').style.display = 'none';
  document.getElementById('signindiv').style.display = 'none';

  localStorage.setItem("name55", "login")
  document.getElementById('lodinedbutt').innerText = localStorage.getItem("name55");
}
if (localStorage.getItem("loginMethod") === "guest") {
  document.getElementById('part1').style.display = 'none';
  document.getElementById('part2').style.display = 'block';

  document.getElementById('nonediv').style.display = 'block';
  document.getElementById('logindiv').style.display = 'none';
  document.getElementById('signindiv').style.display = 'none';

  localStorage.setItem("name55", "login")
  document.getElementById('lodinedbutt').innerText = localStorage.getItem("name55");
}
if (localStorage.getItem("loginMethod") === "loginin") {
  document.getElementById('part1').style.display = 'block';
  document.getElementById('part2').style.display = 'none';

  document.getElementById('nonediv').style.display = 'none';
  document.getElementById('logindiv').style.display = 'block';
  document.getElementById('signindiv').style.display = 'none';

  localStorage.setItem("name55", "login")
  document.getElementById('lodinedbutt').innerText = localStorage.getItem("name55");
}
if (localStorage.getItem("loginMethod") === "signin") {
  document.getElementById('part1').style.display = 'block';
  document.getElementById('part2').style.display = 'none';

  document.getElementById('nonediv').style.display = 'none';
  document.getElementById('logindiv').style.display = 'none';
  document.getElementById('signindiv').style.display = 'block';

  localStorage.setItem("name55", "login")
  document.getElementById('lodinedbutt').innerText = localStorage.getItem("name55");
}
if (localStorage.getItem("loginMethod") === "logined") {
  document.getElementById('part1').style.display = 'none';
  document.getElementById('part2').style.display = 'block';

  document.getElementById('nonediv').style.display = 'block';
  document.getElementById('logindiv').style.display = 'none';
  document.getElementById('signindiv').style.display = 'none';
  document.getElementById('lodinedbutt').innerText = localStorage.getItem("name55");
}

//three buttons
function loginPage() {
  document.getElementById('part1').style.display = 'block';
  document.getElementById('part2').style.display = 'none';

  document.getElementById('nonediv').style.display = 'none';
  document.getElementById('logindiv').style.display = 'block';
  document.getElementById('signindiv').style.display = 'none';

  localStorage.setItem("loginMethod","loginin")
}
function singinpage() {
  document.getElementById('part1').style.display = 'block';
  document.getElementById('part2').style.display = 'none';

  document.getElementById('nonediv').style.display = 'none';
  document.getElementById('logindiv').style.display = 'none';
  document.getElementById('signindiv').style.display = 'block';

  localStorage.setItem("loginMethod","signin")
}
function parttowpage() {
  document.getElementById('nonediv').style.display = 'block';
  document.getElementById('logindiv').style.display = 'none';
  document.getElementById('signindiv').style.display = 'none';

  document.getElementById('part1').style.display = 'none';
  document.getElementById('part2').style.display = 'block';

  localStorage.setItem("loginMethod","guest")
}

//login button header
function loginbuttonheader() {
  if (localStorage.getItem("loginMethod") === "guest") {
    document.getElementById('part1').style.display = 'block';
    document.getElementById('part2').style.display = 'none';
    localStorage.setItem("loginMethod","guest")
  }
  if (localStorage.getItem("loginMethod") === "logined") {
    window.location.href = './account.html';
  }
}

//create
function create() {
  localStorage.setItem("loginMethod","none")
  document.getElementById('part1').style.display = 'block';
  document.getElementById('part2').style.display = 'none';
  window.location.href = './home.html';
}

// all here to sign acc
// Initialize localStorage with predefined user
if (!localStorage.getItem('users')) {
  var initialUsers = [
      {
          id: 1,
          name: 'sayed',
          phone: '01120726090',
          email: 'sayed@aeye.com',
          password: 'Sayed*#*11',
          address: 'Cairo - Badr - Downtown Mall - Build 5 - Apart 9'
      }
  ];
  localStorage.setItem('users', JSON.stringify(initialUsers));
  localStorage.setItem('nextId', '2');
}

function createAccount() {
  var name = document.getElementById('name-signin').value;
  var phone = document.getElementById('phone-signin').value;
  var email = document.getElementById('gimail-signin').value;
  var password = document.getElementById('pass-signin').value;
  var add = document.getElementById('address-signin').value;

  var isValid = true;

  // Validate address
  if (add.length < 10) {
    document.getElementById('address-signin').style.border = 'red 1px solid';
    isValid = false;
    document.getElementById('erorr-login').innerText = 'Your Location is short Please write at least 11 characters.';
  } else {
    document.getElementById('address-signin').style.border = 'green 1px solid';
  }

  // Validate name
  if (name.length > 15) {
      document.getElementById('name-signin').style.border = 'red 1px solid';
      document.getElementById('erorr-login').innerText = 'Your Name is long Please write at most 14 characters.';
      isValid = false;
  } else {
    document.getElementById('name-signin').style.border = 'green 1px solid';
  }
  if (name.length < 3) {
    document.getElementById('name-signin').style.border = 'red 1px solid';
    document.getElementById('erorr-login').innerText = 'Your Name is short Please write at least 4 characters.';
    isValid = false;
  } else {
    document.getElementById('name-signin').style.border = 'green 1px solid';
  }

  // Validate phone
  var phoneRegex = /^(011|012|015|010)\d{8}$/;
  if (!phoneRegex.test(phone)) {
    document.getElementById('phone-signin').style.border = 'red 1px solid';
    document.getElementById('erorr-login').innerText = 'Your Phone is short Please write 11 characters. and It starts with 011, 012, 010, 015';
    isValid = false;
  } else {
    document.getElementById('phone-signin').style.border = 'green 1px solid';
  }

  // Validate email
  if (!email.endsWith('@aeye.com')) {
    document.getElementById('gimail-signin').style.border = 'red 1px solid';
    document.getElementById('erorr-login').innerText = 'Your Email is short Please write 14 at all. and It ending with @aeye.com';
    isValid = false;
  } else {
    document.getElementById('gimail-signin').style.border = 'green 1px solid';
  }
  if (email.length < 13) {
    document.getElementById('gimail-signin').style.border = 'red 1px solid';
    document.getElementById('erorr-login').innerText = 'Your Email is short Please write 14 at all. and It ending with @aeye.com';
    isValid = false;
  } else {
    document.getElementById('gimail-signin').style.border = 'green 1px solid';
  }

  // Validate password
  if (password.length > 15) {
    document.getElementById('pass-signin').style.border = 'red 1px solid';
    isValid = false;
    document.getElementById('erorr-login').innerText = 'Your Password is long Please write at most 14 characters.';
  } else {
    document.getElementById('pass-signin').style.border = 'green 1px solid';
  }
  if (password.length < 8) {
    document.getElementById('pass-signin').style.border = 'red 1px solid';
    document.getElementById('erorr-login').innerText = 'Your Name is short Please write at least 8 characters.';
    isValid = false;
  } else {
    document.getElementById('pass-signin').style.border = 'green 1px solid';
  }
  if (isValid) {
      var users = JSON.parse(localStorage.getItem('users')) || [];
      var nextId = parseInt(localStorage.getItem('nextId'), 10) || users.length + 1;
      
      users.push({ id: nextId, name: name, phone: phone, email: email, password: password, address: add });
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('nextId', (nextId + 1).toString());
      localStorage.setItem("loginMethod","loginin")
      alert('Account created successfully!');
      window.location.href = './home.html';
  }
}


// login
// Check if user details are already remembered
window.onload = function() {
if (localStorage.getItem('rememberedEmail') && localStorage.getItem('rememberedPassword')) {
document.getElementById('gimail-login').value = localStorage.getItem('rememberedEmail');
document.getElementById('pass-login').value = localStorage.getItem('rememberedPassword');
document.getElementById('remember-me').checked = true;
}
};

function login() {
var email = document.getElementById('gimail-login').value;
var password = document.getElementById('pass-login').value;
var rememberMe = document.getElementById('remember-me').checked;
var users = JSON.parse(localStorage.getItem('users')) || [];

var user = users.find(function(user) {
  return user.email === email && user.password === password;
});

if (user) {
  document.getElementById('login-message').innerText = 'Welcome ' + user.name + '!';
  document.getElementById('lodinedbutt').innerText = user.name.substring(0, 5);
  var name5 = user.name.substring(0, 5);
  localStorage.setItem("name55", name5)

  localStorage.setItem('loggedInUser', JSON.stringify(user));

  // If "Remember Me" is checked, store email and password
  if (rememberMe) {
    localStorage.setItem('rememberedEmail', email);
    localStorage.setItem('rememberedPassword', password);
  } else {
    localStorage.removeItem('rememberedEmail');
    localStorage.removeItem('rememberedPassword');
  }
  localStorage.setItem("loginMethod", "logined");
  window.location.href = './home.html';
} else {
  // If "Remember Me" is checked, store email and password
  if (rememberMe) {
    localStorage.setItem('rememberedEmail', email);
    localStorage.setItem('rememberedPassword', password);
  } else {
    localStorage.removeItem('rememberedEmail');
    localStorage.removeItem('rememberedPassword');
  }
  document.getElementById('login-message').innerText = 'Invalid email password!';
}
}


//def
document.getElementById('all-glasses-header').style.color = '#420000';
function normalShop() {
  localStorage.setItem('homeToShop', 'shop');
  window.location.href = './shop.html';
}
function brandshop() {
  localStorage.setItem('homeToShop', 'brand');
  window.location.href = './shop.html';
}
function accshop() {
  localStorage.setItem('homeToShop', 'accessories');
  window.location.href = './shop.html';
}
function menshop() {
  localStorage.setItem('homeToShop', 'men');
  window.location.href = './shop.html';
}
function womenshop() {
  localStorage.setItem('homeToShop', 'women');
  window.location.href = './shop.html';
}
function kidshop() {
  localStorage.setItem('homeToShop', 'kids');
  window.location.href = './shop.html';
}
function sunshop() {
  localStorage.setItem('homeToShop', 'sun');
  window.location.href = './shop.html';
}