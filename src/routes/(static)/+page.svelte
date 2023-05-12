<!-- <!DOCTYPE html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>

/* Slideshow container */
.slideshow-container {
  max-width: 800px;
  position: relative;
  margin: auto;
}

/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 19px;
  padding: 8px 12px;
  position: absolute;
  bottom: 20px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 10px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 10px;
  width: 10px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}


/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .prev, .next,.text {font-size: 11px}
}

</style>
</head>
<body>

<div class="slideshow-container">

<div class="mySlides fade">
  <div class="numbertext">1 / 3</div>
  <img src="https://images.pexels.com/photos/2113565/pexels-photo-2113565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style="width:100%">
  <div class="text">Reliable Research for Stem Cell Research</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">2 / 3</div>
  <img src="https://images.pexels.com/photos/9941416/pexels-photo-9941416.jpeg?auto=compress&cs=tinysrgb&w=600" style="width:100%">
  <div class="text">Test Your Idea In Trusted Hands</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">3 / 3</div>
  <img src="https://images.pexels.com/photos/5438527/pexels-photo-5438527.jpeg?auto=compress&cs=tinysrgb&w=600" style="width:100%">
  <div class="text">Unique Platform For Alzheimer's Disease</div>
</div>

<a class="prev" onclick="plusSlides(-1)">❮</a>
<a class="next" onclick="plusSlides(1)">❯</a>

</div>
<br>

<div style="text-align:center">
  <span class="dot" onclick="currentSlide(1)"></span> 
  <span class="dot" onclick="currentSlide(2)"></span> 
  <span class="dot" onclick="currentSlide(3)"></span> 
</div>

<script>
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
</script>

</body>

<br>
<body>
<div class="carousel rounded-box">
  <a href="https://auroraebio.com/medicine-project/detail">
    <img src="https://www.sigmaaldrich.com/deepweb/content/dam/sigma-aldrich/product9/096/cc130_e8_cc130_e8_all.jpg/_jcr_content/renditions/cc130_e8_cc130_e8_all-medium.jpg" alt="image_description">
  </a>
  <a href="https://auroraebio.com/medicine-project/detail">
    <img src="https://images.theconversation.com/files/337896/original/file-20200527-20229-2g5qgy.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" alt="image_description">
  </a>
  <a href="https://auroraebio.com/medicine-project/detail">
    <img src="https://s3.amazonaws.com/sf-web-assets-prod/wp-content/migration/sf/2017/01/DopamineCells.jpg" alt="image_description">
  </a>
  <a href="https://auroraebio.com/medicine-project/detail">
    <img src="https://www.tempobioscience.com/library/Tempo-cardiomyocytes-microscope.jpeg" alt="image_description">
  </a>
  <a href="https://auroraebio.com/medicine-project/detail">
    <img src="  https://earimediaprodweb.azurewebsites.net/Api/v1/Multimedia/f28bec79-de0c-41e9-8582-555fb3a8ab34/Rendition/low-res/Content/Public
    " alt="image_description">
  </a>
  <a href="https://auroraebio.com/medicine-project/detail">
    <img src="https://analyticalscience.wiley.com/do/10.1002/gitlab.17750/full/i65c23d082a729035b9e734a67a732bc6.jpg" alt="image_description">
  </a>
  <a href="https://auroraebio.com/medicine-project/detail">
    <img src="https://www.ucsf.edu/sites/default/files/fields/field_insert_file/news/ips-cells.jpg" alt="image_description">
  </a>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</div>
</body>

<footer class="footer p-10 bg-neutral text-neutral-content">
  <div>
    <span class="footer-title">Store</span> 
    <a class="link link-hover">Settings</a>
    <a class="link link-hover">Home</a>
  </div> 
  <div>
    <span class="footer-title">My Account</span> 
    <a class="link link-hover">About us</a>
    <a class="link link-hover">Contact Us</a>
  </div> 
  <div>
    <span class="footer-title">Ordering</span> 
    <a class="link link-hover">Terms & Conditions</a>
    <a class="link link-hover">Privacy policy</a>
  </div>
</footer>


 -->
