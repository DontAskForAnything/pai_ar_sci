// Import the 'mysql' module
const mysql = require("mysql");

// Create a new MySQL connection using the provided environment variables
const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

// Export the connection object for use in other modules
module.exports = connection;
