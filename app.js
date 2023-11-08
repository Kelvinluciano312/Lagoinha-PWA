const express = require('express');
const app = express();

// Serve static files from the respective directories
app.use(express.static('HTML'));
app.use(express.static('CSS'));
app.use(express.static('JS'));
app.use(express.static('lagoIMG'));

app.listen(80, () => console.log('Server started on port 80'));