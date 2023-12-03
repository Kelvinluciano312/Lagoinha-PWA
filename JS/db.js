// Import the MySQL module
const mysql = require('mysql');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: '34.23.84.32',
  user: 'lagoinhact',
  password: 'Lcc2023!',
  database: 'lagoADM',
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
