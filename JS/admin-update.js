setInterval(function() {
    fetch('/latest-images')
      .then(response => response.json())
      .then(data => {
        document.querySelector('#logo').src = data.logo;
        document.querySelector('#lagoHead').src = data.lagoHead;
        document.querySelector('#sideBar').src = data.sideBar;
      });
  }, 1000);  // Fetch every 1 second
  