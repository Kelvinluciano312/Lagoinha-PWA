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
<<<<<<< HEAD
app.use('/admin', adminRoutes);

app.use((req, res) => {
    res.status(404).send('Error 404: Not Found');
});

app.listen(80, () => console.log('Server started on port 80'));
=======
app.use(adminRoutes);

app.listen(80, () => console.log('Server started on port 80'));
>>>>>>> c3144666bea6589220a6c22d6c2377f3b0f9d772
