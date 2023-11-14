/* Function to open the side navigation */
function openNav() {
  // Set the width of the side navigation to 250px
  document.getElementById("mySidenav").style.width = "250px";
  // Shift the page content to the right by 250px
  document.getElementById("main").style.marginLeft = "250px";
  // Add a black background color to the body
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Function to close the side navigation */
function closeNav() {
  // Set the width of the side navigation to 0
  document.getElementById("mySidenav").style.width = "0";
  // Shift the page content to the left by 0px
  document.getElementById("main").style.marginLeft = "0";
  // Set the background color of the body to white
  document.body.style.backgroundColor = "white";
}
