// Import required packages
const express = require('express');
const cors = require('cors');
const multer = require('multer');

// Create Express app
const app = express();

// Set up Multer to handle file uploads
const upload = multer({ dest: 'uploads/' });

// Import database connection and functions
const connection = require('./database');
const { createTask } = require('./functions/createTask');
const { deleteTask } = require('./functions/deleteTask');
const { getTasks } = require('./functions/getTasks');
const { updateStatusTask } = require('./functions/updateStatusTask');
const { editTask } = require('./functions/editTask');
const { updatePositionTask } = require('./functions/updatePositionTask');

// Connect to database and create tasks table if it doesn't exist
connection.connect((err) => {
  if (err) {
    console.error('📋 Error while connecting to database!');
  } else {
    // SQL query to create tasks table if it doesn't exist
    const createTableQuery = `
    CREATE TABLE IF NOT EXISTS tasks (
      id INT(11) NOT NULL AUTO_INCREMENT,
      title VARCHAR(255) NOT NULL,
      completed BOOLEAN NOT NULL DEFAULT 0,
      image LONGTEXT NULL,
      position int NULL,
      PRIMARY KEY (id)
    )
  `;

    // Execute createTableQuery
    connection.query(createTableQuery, (err, result) => {
      if (err) {
        throw err;
      }

      // Start server and log success message
      app.listen(process.env.SERVER_PORT, () => {
        console.log(`🌍 Server listening on port ${process.env.SERVER_PORT}`);
      });

      // Log success message once tasks table is ready
      console.log('📋 Database ready to work!');
    });
  }
});

// Set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Set up API routes
app.get('/api/tasks', getTasks); // Get all tasks
app.delete('/api/tasks/:id', deleteTask); // Delete task by ID
app.post('/api/tasks', upload.single('image'), createTask); // Create a new task
app.put('/api/tasks/:id', updateStatusTask); // Update task status by ID
app.put('/api/tasks/:id/position', updatePositionTask); // Update task status by ID
app.put('/api/tasks/:id/edit', upload.single('image'), editTask); // Update task title, completion status, or image by ID

// Handle unhandled rejections and errors
process.on('unhandledRejection', (err) => {
  console.error('Unhandled rejection:', err);
  process.exit(1);
});

app.on('error', (err) => {
  console.error('Unhandled error:', err);
  process.exit(1);
});

// Handle database errors
connection.on('error', (err) => {
  console.error('📋 Database error:', err);
  if (err.fatal) {
    console.error('📋 Database fatal error, restarting server...');
    process.exit(1);
  }
});
