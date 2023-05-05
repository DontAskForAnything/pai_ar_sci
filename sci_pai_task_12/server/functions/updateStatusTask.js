const connection = require("../database");

/**
 * Update the status of a task by ID
 *
 * @param {object} req - The HTTP request object
 * @param {object} res - The HTTP response object
 * @returns {void}
 */
function updateStatusTask(req, res) {
  const { id } = req.params;
  const { completed } = req.body;

  // Input validation
  if (typeof completed !== "boolean") {
    return res
      .status(400)
      .json({ message: "Invalid input: completed must be a boolean." });
  }

  // Update the task in the database
  connection.query(
    "UPDATE tasks SET completed = ? WHERE id = ?",
    [completed, id],
    (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error." });
      }

      // Check if any rows were affected
      if (results.affectedRows === 0) {
        return res.status(404).json({ message: "Task not found." });
      }

      // Send a success response
      res.sendStatus(200);
    },
  );
}

module.exports = {
  updateStatusTask,
};
