var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  // Create a new Image object
  var img = new Image();
  img.onload = function() {
    // Display the image only after it's fully loaded
    slides[slideIndex-1].src = this.src;
    slides[slideIndex-1].style.display = "block";
  };
  // Start loading the image
  img.src = slides[slideIndex-1].src.split('?')[0] + '?uuid=' + generateUUID();
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}