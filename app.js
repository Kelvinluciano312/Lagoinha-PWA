const express = require('express');
const app = express();
const path = require('path');
const adminRoutes = require('./admin.js');
app.use(adminRoutes);

const lagoRoutes = require('./lagoinha.js');
app.use(lagoRoutes);

app.use(express.static('HTML'));
app.use(express.static('CSS'));
app.use(express.static('JS'));
app.use(express.static('lagoIMG'));

app.listen(80, () => console.log('Server started on port 80'));