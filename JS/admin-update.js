setInterval(function() {
  fetch('/latest-images')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      ['logo', 'lagoHead', 'sideBar'].forEach(id => {
        var img = new Image();
        img.onload = function() {
          document.querySelector('#' + id).src = this.src;
        };
        img.src = 'lagoIMG/' + data[id];
      });
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
}, 3000);  // Fetch every 3 second
