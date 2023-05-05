const connection = require("../database");

/**
 * Deletes a task from the database.
 *
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 */
function deleteTask(req, res) {
  const { id } = req.params;

  // Delete the task from the database
  connection.query("DELETE FROM tasks WHERE id = ?", id, (error) => {
    if (error) {
      throw error;
    }

    // Send a successful response
    res.sendStatus(200);
  });
}

module.exports = {
  deleteTask,
};
