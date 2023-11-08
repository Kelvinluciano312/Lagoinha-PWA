setInterval(function() {
    fetch('/latest-images')
      .then(response => response.json())
      .then(data => {
        document.querySelector('#logo').src = 'lagoIMG/' + data.logo;
        document.querySelector('#lagoHead').src = 'lagoIMG/' + data.lagoHead;
        document.querySelector('#sideBar').src = 'lagoIMG/' + data.sideBar;
      });
  }, 3000);  // Fetch every 3 second
  