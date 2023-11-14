// Function to fetch the latest images every 3 seconds
// This function is called periodically to update the images on the page
setInterval(function() {
  // Fetch the latest images from the server
  fetch('/latest-images')
    .then(response => {
      // Check if the response is ok
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Parse the response as JSON
      return response.json();
    })
    .then(data => {
      // Update each image on the page
      ['logo', 'lagoHead', 'sideBar'].forEach(id => {
        var img = new Image();
        img.onload = function() {
          // Update the src of the image element
          document.querySelector('#' + id).src = this.src;
        };
        // Set the src of the new Image object
        img.src = 'lagoIMG/' + data[id];
      });
    })
    // Log any errors
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
}, 3000);  // Fetch every 3 second
