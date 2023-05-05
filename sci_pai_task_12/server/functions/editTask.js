const connection = require('../database');
const fs = require('fs');
const { allowedFileTypes } = require('../utils/fileTypes');

/**
 * Updates a task with the specified id.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
function editTask(req, res) {
  const { id } = req.params;
  const { title, completed } = req.body;
  const file = req.file;

  // Input validation

  const updates = {};

  if (typeof completed !== 'boolean') {
    if (completed !== undefined) {
      updates.completed = completed;
    } else {
      return res.status(400).json({ message: 'Invalid input: completed must be a boolean.' });
    }
  }
  if (title) {
    updates.title = title;
  }

  // Check if any updates were provided
  if (Object.keys(updates).length === 0 && !file) {
    return res.status(400).json({ message: 'No updates provided.' });
  }

  // Check if file type is allowed
  if (file && !allowedFileTypes.includes(file.mimetype)) {
    return res.status(400).json({ message: 'Invalid file type.' });
  }

  if (file) {
    // Read the contents of the file asynchronously
    fs.readFile(file.path, (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Couldn't read uploaded file." });
      }

      // Convert the contents of the file to a base64 string
      const image = Buffer.from(data).toString('base64');

      updates.image = image;

      // Update task in database
      connection.query('UPDATE tasks SET ? WHERE id = ?', [updates, id], (error, results) => {
        if (error) {
          console.error(error);
          return res.status(500).json({ message: 'Internal server error.' });
        }

        // Check if any rows were affected
        if (results.affectedRows === 0) {
          return res.status(404).json({ message: 'Task not found.' });
        }

        // Delete the file after it has been saved
        fs.unlink(file.path, (err) => {
          if (err) {
            console.error(err);
          }
        });

        res.sendStatus(200);
      });
    });
  } else {
    // Update task in database
    connection.query('UPDATE tasks SET ? WHERE id = ?', [updates, id], (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error.' });
      }

      // Check if any rows were affected
      if (results.affectedRows === 0) {
        return res.status(404).json({ message: 'Task not found.' });
      }

      res.sendStatus(200);
    });
  }
}

module.exports = {
  editTask,
};
