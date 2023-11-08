const path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/HTML/lagoinha.html'));
});

document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('show');
  });