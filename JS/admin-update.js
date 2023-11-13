setInterval(function() {
  fetch('/latest-images')
    .then(response => response.json())
    .then(data => {
      ['logo', 'lagoHead', 'sideBar'].forEach(id => {
        var img = new Image();
        img.onload = function() {
          document.querySelector('#' + id).src = this.src;
        };
        img.src = 'lagoIMG/' + data[id];
      });
    });
}, 3000);  // Fetch every 3 second