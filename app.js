const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the respective directories
app.use(express.static('HTML'));
app.use(express.static('CSS'));
app.use(express.static('JS'));
app.use(express.static('lagoIMG'));

app.listen(80, () => console.log('Server started on port 80'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/HTML/lagoinha.html'));
});