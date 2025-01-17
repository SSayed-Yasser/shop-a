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

//scroling
const scrollContainer2 = document.getElementById('scroll-content2');
function scrollContentLeft2() {
  scrollContainer2.scrollBy({ left: -300, behavior: 'smooth' });
}
function scrollContentRight2() {
  scrollContainer2.scrollBy({ left: 300, behavior: 'smooth' });
}


