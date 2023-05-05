const connection = require('../database');
const fs = require('fs');
const { allowedFileTypes } = require('../utils/fileTypes');

/**
 * Creates a task in the database.
 *
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 */
function createTask(req, res) {
  const { title, position } = req.body;
  const file = req.file;

  // Check if title is provided
  if (!title) {
    return res.status(400).json({ message: 'Title is required.' });
  }
  if (title.length > 120) {
    return res.status(400).json({ message: 'Title is too long.' });
  }
  // Check if position is provided
  if (!position) {
    return res.status(400).json({ message: 'Position is required.' });
  }

  if (file) {
    // Check if file type is allowed
    if (!allowedFileTypes.includes(file.mimetype)) {
      return res.status(400).json({ message: 'Invalid file type.' });
    }

    // Read the contents of the file asynchronously
    fs.readFile(file.path, (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Couldn't read uploaded file." });
      }

      // Convert the contents of the file to a base64 string
      const image = Buffer.from(data).toString('base64');

      // Create new task object with title, completed status, and image
      const task = { title, completed: false, image, position };

      // Insert the new task into the database
      connection.query('INSERT INTO tasks SET ?', task, (error, result) => {
        if (error) {
          console.error(error);
          return res.status(500).json({ message: 'MySql error' });
        }

        // Delete the file after it has been saved
        fs.unlink(file.path, (err) => {
          if (err) {
            console.error(err);
          }
        });

        // Send the response with the new task ID and data
        res.json({ id: result.insertId, ...task });
      });
    });
  } else {
    // Create new task object with title and completed status
    const task = { title, completed: false, position };

    // Insert the new task into the database
    connection.query('INSERT INTO tasks SET ?', task, (error, result) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: 'MySql error' });
      }

      // Send the response with the new task ID and data
      res.json({ id: result.insertId, ...task });
    });
  }
}

module.exports = {
  createTask,
};
