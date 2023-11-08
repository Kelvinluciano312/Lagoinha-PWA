const express = require('express');
const app = express();

const lagoRoutes = require('./JS/lagoinha.js');
app.use(lagoRoutes);

const adminRoutes = require('./JS/admin.js');
app.use(adminRoutes);

app.use(express.static('HTML'));
app.use(express.static('CSS'));
app.use(express.static('JS'));
app.use(express.static('lagoIMG'));

app.listen(80, () => console.log('Server started on port 80'));