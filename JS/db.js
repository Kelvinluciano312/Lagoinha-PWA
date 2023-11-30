// Import the MySQL module
const mysql = require('mysql');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'calcium-alchemy-398315:us-east1:lagoinhact', 
  user: 'root', 
  password: 'Universoeh42!', 
  database: 'lagoct', 
});

// Log connection status or error
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Export the database connection for use in other files
module.exports = connection;
