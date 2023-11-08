const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the respective directories
app.use(express.static(path.join(__dirname, 'HTML')));
app.use(express.static(path.join(__dirname, 'CSS')));
app.use(express.static(path.join(__dirname, 'JS')));
app.use(express.static(path.join(__dirname, 'lagoIMG')));

// Import routes
const lagoRoutes = require('./JS/lagoinha.js');
const adminRoutes = require('./JS/admin.js');

// Use routes
app.use(lagoRoutes);
app.use(adminRoutes);

app.listen(80, () => console.log('Server started on port 80'));